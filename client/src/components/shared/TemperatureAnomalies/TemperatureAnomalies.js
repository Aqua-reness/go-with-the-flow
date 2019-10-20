import React from 'react';
import Plot from 'react-plotly.js';

import temperatureData from '../../../data/tempAnomalies.json'

class TemperatureAnomalies extends React.Component {

    constructor(props) {
        super(props)

        this.state = {}
    }

    componentDidMount() {
        // load up JSON files to be displayed in charts
        
    }

    render() {
        const {

        } = this.state
        const xValues = Object.keys(temperatureData.Lowess)
        const yValues = Object.values(temperatureData.Lowess)

        return (
        <div className="mass-trend-content">
            <Plot
                data={[
                {
                    x: xValues,
                    y: yValues,
                    type: 'scatter',
                    mode: 'lines+points',
                    marker: {color: 'red'},
                }
                ]}
                layout={ {width: 700, height: 550, title: 'Temperature Anomalies'} }
            />
        </div>
        );
    }
    }

    export default TemperatureAnomalies;