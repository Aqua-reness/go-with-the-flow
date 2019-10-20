import React from 'react';

import MassTrend from '../../shared/MassTrend/MassTrend'
import ChartInfo from '../../shared/ChartInfo/ChartInfo'
import SeaLevel from '../../shared/SeaLevel/SeaLevel'
import Population from '../../shared/Population/Population'
import TemperatureAnomalies from '../../shared/TemperatureAnomalies/TemperatureAnomalies'
import CO2 from '../../shared/CO2/CO2'

class Current extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {}
  }
  
  render() {
    return (
      <div className="current-content">

      <div className="population-container">
        <ChartInfo chartType="POPULATION" />
        <Population />
      </div>

      <div className="climate-change-container">
        <ChartInfo chartType="CO2" />
        <CO2 />

        <ChartInfo chartType="TEMPERATURE_ANOMALIES" />
        <TemperatureAnomalies />
      </div>
        
      <div className="mass-trend-container">
        <ChartInfo chartType="MASS_TREND" />
        <MassTrend />
      </div>

      <div className="sea-level-container">
        <ChartInfo chartType="SEA_LEVEL" />
        <SeaLevel />
      </div>

      </div>
    );
  }
}

export default Current;