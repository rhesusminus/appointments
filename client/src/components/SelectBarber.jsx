import React from 'react';
import { Row, Col, Input } from 'reactstrap';

export default ({ barbers, selectedBarber, selectBarber }) => {
  const handleChange = (event) => {
    event.preventDefault();
    selectBarber(event.target.value);
  }

  const barber = barbers.find(barber => barber.id === selectedBarber);

  return (
    <Row>
      <Col md="6">
        <Input type="select" id="selectedBarber" value={selectedBarber} onChange={handleChange}>
          <option />
          {barbers.map(barber => <option key={barber.id} value={barber.id}>{barber.name}</option>)}
        </Input>
      </Col>
      {selectedBarber &&
        <Col md="4">
          <h4>{barber.name}</h4>
          {barber.description}
        </Col>}
      {selectedBarber &&
        <Col md="2">
          <img src={barber.picture.medium} className="rounded-circle" alt="" />
        </Col>}
    </Row>
  );
}
