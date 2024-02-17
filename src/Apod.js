import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Comment from './component/comment';

function ApodComponent(props) {
  const { apodData } = props;
  return (
    <div className="ApodPage">
      <Container className="justify-content-center">
        <Row className="justify-content-start">
          <Col xs={12} md={8}>
            <h1>{apodData.title}</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={6} md={4}>
            <p id='explanation'>{apodData.explanation}</p>
          </Col>
          <Col xs={6} md={4} style={{ overflow: 'hidden' }}>
            <img
              src={apodData.url}
              alt=""
            />
          </Col>
          <Col xs={6} md={4} style={{ overflow: 'hidden' }}>
          
            
          </Col>
        </Row>
        <Row>
          <Col xs={6}><p>{apodData.date}</p></Col>
        </Row>
      </Container>
    </div>
  );
}

export default ApodComponent;
