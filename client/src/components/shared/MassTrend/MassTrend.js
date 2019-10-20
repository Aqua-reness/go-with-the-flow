import React from 'react';
import Plot from 'react-plotly.js';

import antarticaData from '../../../data/antartica_seaIce.json'
import articData from '../../../data/artic_seaIce.json'
import greenlandData from '../../../data/greenland_seaIce.json'

class MassTrend extends React.Component {

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

        return (
        <div className="mass-trend-content">
            <Plot
                data={[
                {
                    x: [],
                    y: [],
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

    export default MassTrend;