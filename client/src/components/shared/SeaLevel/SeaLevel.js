import React from 'react';
import Plot from 'react-plotly.js';

import globalMeanSeaLevel from '../../../data/gmsl.json'

class SeaLevel extends React.Component {

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

        const xValues = Object.keys(globalMeanSeaLevel.GMSL_GIA)
        const yValues = Object.values(globalMeanSeaLevel.GMSL_GIA)

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
                layout={ {width: 700, height: 550, title: 'Global Mean Sea Level'} }
            />
        </div>
        );
    }
    }

    export default SeaLevel;