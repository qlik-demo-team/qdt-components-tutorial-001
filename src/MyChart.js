import React, { useEffect, useRef } from 'react';

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

  return (
    <div>
      <h2>My Charts</h2>
    </div>
  )
}

export default MyChart;