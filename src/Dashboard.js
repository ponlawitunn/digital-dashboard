import React from 'react';
import ChartYears from './ChartYears';
import ChartMonth from './ChartMonth';
import ChartDay from './ChartDay';
import './Dashboard.css';
import { Container, Row, Col } from 'reactstrap';

export default class Dashboard extends React.Component {
  render() {
    return (
      <Container>
        <Container>
          <Row>
              <Col xs="12" sm="12" md={{ size: '6'}} className="col">
              <p className="p1"><strong>Number of Visitors (Last Month)</strong></p>
              <div className="div1"><ChartMonth /></div>
            </Col>
          </Row>
          <Row>
              <Col xs="12" sm="12" md={{ size: '6'}} className="col">
              <p className="p1"><strong>Number of visitors (Compared with previous year)</strong></p>
              <div className="div1"><ChartYears /></div>
              </Col>
              <Col xs="12" sm="6" md="6" className="col">
                <p className="p1"><strong>Number of Visitors (Last 7 Days)</strong></p>
                <div className="div1"><ChartDay /></div>
              </Col>
          </Row>
        </Container>
        <Row>
          <Col sm={{ size: 6, order: 2, offset: 1 }}>.col-sm-6 .col-sm-order-2 .col-sm-offset-2</Col>

        </Row>
        <Row>
          <Col sm={{ size: 'auto', offset: 1 }}>.col-sm .col-sm-offset-1</Col>
          <Col sm={{ size: 'auto', offset: 1 }}>.col-sm .col-sm-offset-1</Col>
        </Row>
      </Container>
    );
  }
}
