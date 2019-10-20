import React from 'react';
import Card from 'react-bootstrap/Card'

class ChartInfo extends React.Component {
  
  constructor(props) {
    super(props)

    const chartDescriptions = {
        MASS_TREND: 'Mass Trend',
        SEA_LEVEL: 'Sea Level',
        CO2: 'CO2',
        TEMPERATURE_ANOMALIES: 'Temperature Anomalies',
        POPULATION: 'Population'
    }
    this.state = {
        chartDescription: chartDescriptions[props.chartType]
    }
  }
  
  render() {

    const {
        chartDescription
    } = this.state

    return (
      <div className="chart-info-content">
        <Card>
            <Card.Body>{ chartDescription }</Card.Body>
        </Card>
      </div>
    );
  }
}

export default ChartInfo;