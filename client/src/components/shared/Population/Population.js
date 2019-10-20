import React from 'react';
import Plot from 'react-plotly.js';

import populationData from '../../../data/total_pop_sum.json'

class Population extends React.Component {

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
        const xValues = Object.keys(populationData)
        const yValues = Object.values(populationData)

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
                layout={ {width: 700, height: 550, title: 'Population'} }
            />
        </div>
        );
    }
    }

    export default Population;