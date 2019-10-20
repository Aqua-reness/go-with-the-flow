import React from 'react';
import Plot from 'react-plotly.js';

import co2Data from '../../../data/co2.json'

class CO2 extends React.Component {

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
                layout={ {width: 700, height: 550, title: 'CO2'} }
            />
        </div>
        );
    }
    }

    export default CO2;