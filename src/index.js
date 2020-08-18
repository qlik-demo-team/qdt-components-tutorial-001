import React from 'react';
import { render } from 'react-dom';
import './css/styles.scss';

import MyChart from './MyChart';

const App = () => {
    
  return (
    <div>
      <h1>Qdt-Components 3.0 Tutorial</h1>
      <MyChart />
    </div>
  )
}

render(<App />, document.getElementById('root'));
