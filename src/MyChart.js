import React, { useEffect, useRef } from 'react';
import { qdtCompose, QdtPicasso, useBarChartSettings, usePieChartSettings, QdtButton } from 'qdt-components';
import appPromise from './config/app';

appPromise.then((app) => {
  console.log(app);
})

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
    })()
  }, [])
  return (
    <div>
      <h2>My Charts</h2>
      <div ref={clearButton} style={{ margin: '10px auto', width: 250 }} />
      <div ref={barChart} style={{ height: 400, paddingTop: 50 }} />
      <div ref={pieChart} style={{ height: 400, paddingTop: 50 }} />
    </div>
  )
}

export default MyChart;