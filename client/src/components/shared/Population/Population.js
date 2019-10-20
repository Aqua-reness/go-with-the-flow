import React from 'react';
import Plot from 'react-plotly.js';

import './Population.css';
import populationData from '../../../data/total_pop_sum.json'

class Population extends React.Component {

    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        const xValues = Object.keys(populationData)
        const yValues = Object.values(populationData)

        return (
        <div className="population-content">
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
                layout={ { autosize: true, title: 'Population' } }
                useResizeHandler={ true }
                className="chart-plot"
            />
        </div>
        );
    }
    }

    export default Population;