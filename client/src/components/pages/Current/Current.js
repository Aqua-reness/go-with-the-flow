import React from 'react';

import MassTrendChart from '../../shared/MassTrend/MassTrendChart'
import ChartInfo from '../../shared/ChartInfo/ChartInfo'

class Current extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {}
  }
  
  render() {
    return (
      <div className="current-content">
        
        <div className="mass-trend-container">
          <ChartInfo />
          <MassTrendChart />
        </div>

      </div>
    );
  }
}

export default Current;