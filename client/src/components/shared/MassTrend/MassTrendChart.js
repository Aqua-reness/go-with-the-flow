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
                    x: [1, 2, 3],
                    y: [2, 6, 3],
                    type: 'scatter',
                    mode: 'lines+points',
                    marker: {color: 'red'},
                },
                {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
                ]}
                layout={ {width: 320, height: 240, title: 'A Fancy Plot'} }
            />
        </div>
        );
    }
    }

    export default MassTrendChart;