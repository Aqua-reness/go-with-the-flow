import React from 'react';

import MassTrendChart from '../../shared/MassTrend/MassTrendChart'
import ChartInfo from '../../shared/ChartInfo/ChartInfo'
import SeaLevel from '../../shared/SeaLevel'

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

        <div className="sea-level-container">
          <ChartInfo />
          <SeaLevel />
        </div>

        <div className="climate-change-container">
        
        </div>

        <div className="population-container">
        
        </div>

      </div>
    );
  }
}

export default Current;