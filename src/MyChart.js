import React, { useEffect, useRef, useState } from 'react';
import { qdtCompose, QdtPicasso, useBarChartSettings, usePieChartSettings, QdtButton, useLineChartSettings } from 'qdt-components';
import cAppPromise from './config/cApp';
import appPromise from './config/app';
import ReactModal from 'react-modal';
import Filter from './Filter';

const hypercube = {
  qInfo: { qId: 'Sales by Year', qType: 'data'},
  qHyperCubeDef: {
    qDimensions: [
      // { qDef: { qFieldDefs: ['[Country]']} },
      { qDef: { qFieldDefs: ['[Product Group Desc]']} }
    ],
    qMeasures: [
      { qDef: { qDef: 'SUM([Sales Margin Amount])'}, },
    ],
    qInitialDataFetch: [{
      qTop: 0, qLeft: 0, qWidth: 10, qHeight: 1000,
    }],
    qInterColumnSortOrder: [],
    qSuppressZero: true,
    qSuppressMissing: true,
  }
}

const MyChart = () => {
  const barChart = useRef(null);
  const pieChart = useRef(null);
  const clearButton = useRef(null);
  const lineChart = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const settings = useBarChartSettings();
      const app = await appPromise;
      qdtCompose({
        app,
        element: barChart.current,
        component: QdtPicasso,
        options: {
          settings,
        },
        properties: hypercube,
        loading: () => null,
      })

      const pieSettings = usePieChartSettings();
      qdtCompose({
        app,
        element: pieChart.current,
        component: QdtPicasso,
        options: {
          settings: pieSettings,
        },
        properties: hypercube,
        loading: () => null,
      })

      qdtCompose({
        app, 
        element: clearButton.current, 
        component: QdtButton,
        options: {
          type: 'clearSelections',
          label: 'Clear Selections'
        }
      })

      qdtCompose({
        app, 
        element: lineChart.current,
        component: QdtPicasso,
        options: {
          settings: useLineChartSettings(),
        },
        properties: hypercube,
        loading: () => null,
      })


    })()
  }, [])

  const handleClose = () => setOpen(false);

  const handleOpen = () => setOpen(true);


  return (
    <div>
      <h2>My Charts</h2>
      <button onClick={handleOpen}>Open Modal</button>
      <ReactModal isOpen={open}>
        <h1>MODAL</h1>
        <Filter cAppPromise={cAppPromise} id="mHzvAm" options={{ height: 100 }} />
        <Filter cAppPromise={cAppPromise} id="mHzvAm" options={{ height: 100 }} />
        <Filter cAppPromise={cAppPromise} id="mHzvAm" options={{ height: 100 }} />
        <Filter cAppPromise={cAppPromise} id="mHzvAm" options={{ height: 100 }} />
        <Filter cAppPromise={cAppPromise} id="mHzvAm" options={{ height: 100 }} />
        <Filter cAppPromise={cAppPromise} id="mHzvAm" options={{ height: 100 }} />
      </ReactModal>
      <div ref={clearButton} style={{ margin: '10px auto', width: 250 }} />
      <div ref={barChart} style={{ height: 400, paddingTop: 50 }} />
      <div ref={pieChart} style={{ height: 400, paddingTop: 50 }} />
      <div ref={lineChart} style={{ height: 100, paddingTop: 50 }} />
    </div>
  )
}

export default MyChart;