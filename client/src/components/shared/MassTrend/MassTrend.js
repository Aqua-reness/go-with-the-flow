import React from 'react';
import Plot from 'react-plotly.js';

import './MassTrend.css'
import Dropdown from 'react-bootstrap/Dropdown'

import antarticaData from '../../../data/antartica_seaIce.json'
import articData from '../../../data/artic_seaIce.json'
import greenlandData from '../../../data/greenland_seaIce.json'

class MassTrend extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedChart: 'antarctica'
        }
    }

    chartSelectionChanged(selectedValue) {
        console.log(selectedValue)
        this.setState({
            selectedChart: selectedValue
        })
    }

    render() {
        const {
            selectedChart
        } = this.state
        let xValues = []
        let yValues = []
        let title = ''

        if (selectedChart === 'antarctica') {
            xValues = Object.keys(antarticaData.mass)
            yValues = Object.values(antarticaData.mass)
            title = 'Mass Trends: Antarctica'
        } else if (selectedChart === 'arctic') {
            xValues = Object.keys(articData.area)
            yValues = Object.values(articData.area)
            title = 'Mass Trends: Arctic'
        } else {
            xValues = Object.keys(greenlandData.mass)
            yValues = Object.values(greenlandData.mass)
            title = 'Mass Trends: Greenland'
        }

        return (
        <div className="mass-trend-content">
            <div className="select-control">
            <Dropdown onSelect={ (key) => { this.chartSelectionChanged(key) } }>
                <Dropdown.Toggle variant="primary" id="dropdown-basic">
                    Chart Displayed
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item eventKey="antarctica">Antarctica</Dropdown.Item>
                    <Dropdown.Item eventKey="arctic">Arctic</Dropdown.Item>
                    <Dropdown.Item eventKey="greenland">Greenland</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </div>

            <Plot
                data={[
                {
                    x: xValues,
                    y: yValues,
                    type: 'scatter',
                    mode: 'lines+points',
                    marker: { color: 'red' },
                }
                ]}
                layout={ { autosoze: true, title: title } }
                useResizeHandler={ true }
                className="chart-plot"
            />
        </div>
        );
    }
    }

    export default MassTrend;