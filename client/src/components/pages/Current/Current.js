import React from 'react';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Card from 'react-bootstrap/Card'

import './Current.css'

import MassTrend from '../../shared/MassTrend/MassTrend'
import ChartInfo from '../../shared/ChartInfo/ChartInfo'
import SeaLevel from '../../shared/SeaLevel/SeaLevel'
import Population from '../../shared/Population/Population'
import TemperatureAnomalies from '../../shared/TemperatureAnomalies/TemperatureAnomalies'
import CO2 from '../../shared/CO2/CO2'

class Current extends React.Component {
  
  constructor(props) {
    super(props)

    this.state = {}
  }
  
  render() {
    return (
      <div className="current-content">

      <Container fluid={ true }>
        <div className="row-content">
            <Row>
                <Col>
                    <ChartInfo chartType="POPULATION" />
                </Col>
                <Col>
                  <Card>
                    <div className="population-container">  
                      <Population />
                    </div>
                  </Card>
                </Col>
            </Row>
        </div>

        <hr className="container-separator" />

        <div className="row-content">
            <Row>
              <Col>
                <Card>
                  <div>
                  <CO2 />
                  </div>
                </Card>
              </Col>

              <Col>
                <Card>
                  <div>
                  <TemperatureAnomalies />
                  </div>
                </Card>
              </Col>
            </Row>

          
            <Row>
              <Col>
                <ChartInfo chartType="CO2" />
              </Col>
              <Col>
                <ChartInfo chartType="TEMPERATURE_ANOMALIES" />
              </Col>
            </Row>
        </div>

        <hr className="container-separator" />
        
        <div className="row-content">
            <Row>
                <Col>
                  <ChartInfo chartType="MASS_TREND" />
                </Col>
                
                <Col>
                  <Card>
                    <div className="mass-trend-container">
                      <MassTrend />
                    </div>
                  </Card>
                </Col>
            </Row>
        </div>

        <hr className="container-separator" />

        <div className="row-content">
            <Row>
              <Col>
                <ChartInfo chartType="SEA_LEVEL" />
              </Col>

              <Col>
                <Card>
                  <div className="sea-level-container">
                    <SeaLevel />
                  </div>
                </Card>
              </Col>
            </Row>
        </div>

      </Container>

      </div>
    );
  }
}

export default Current;