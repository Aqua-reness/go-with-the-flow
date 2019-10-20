import React from 'react';
import Plot from 'react-plotly.js';

class MassTrendChart extends React.Component {

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

    export default MassTrendChart;