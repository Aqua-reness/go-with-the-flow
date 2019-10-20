import React from 'react';
import Plot from 'react-plotly.js';

import co2Data from '../../../data/co2.json'

class CO2 extends React.Component {

    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        const xValues = []
        const yValues = []
        const keys = Object.keys(co2Data.average)
        const values = Object.values(co2Data.average)

        for (var i = 0; i < keys.length; i++) {
            if (values[i] > 0) {
                xValues.push(keys[i])
                yValues.push(values[i])
            }
        }

        return (
        <div className="co2-content">
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
                layout={ {autosize: true, title: 'CO2'} }
                useResizeHandler={ true }
                className="chart-plot"
            />
        </div>
        );
    }
    }

    export default CO2;