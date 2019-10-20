import React from 'react';
import Plot from 'react-plotly.js';

import globalMeanSeaLevel from '../../../data/gmsl.json'

class SeaLevel extends React.Component {

    constructor(props) {
        super(props)

        this.state = {}
    }

    render() {
        const xValues = Object.keys(globalMeanSeaLevel.GMSL_GIA)
        const yValues = Object.values(globalMeanSeaLevel.GMSL_GIA)

        return (
        <div className="sea-level-content">
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
                layout={ { autosize: true, title: 'Global Mean Sea Level' } }
                useResizeHandler={ true }
                className="chart-plot"
            />
        </div>
        );
    }
    }

    export default SeaLevel;