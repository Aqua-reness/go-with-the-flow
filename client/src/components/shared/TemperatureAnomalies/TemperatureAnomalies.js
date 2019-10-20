import React from 'react';
import Plot from 'react-plotly.js';

import temperatureData from '../../../data/tempAnomalies.json'

class TemperatureAnomalies extends React.Component {

    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        const xValues = Object.keys(temperatureData.Lowess)
        const yValues = Object.values(temperatureData.Lowess)

        return (
        <div className="temperature-anomalies-content">
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
                layout={ { autosize: true, title: 'Temperature Anomalies' } }
                useResizeHandler={ true }
                className="chart-plot"
            />
        </div>
        );
    }
    }

    export default TemperatureAnomalies;