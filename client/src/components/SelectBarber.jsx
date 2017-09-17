import React from 'react';
import { Row, Col, Input } from 'reactstrap';


const ShowBarberInfo = (props) => {
  const { name, description, picture } = props;
  return (
    <div className="SelectWork__ShowBarberInfo">
      <Row>
        <Col md="6">
          <h4>{name}</h4>
          {description}
        </Col>
        <Col md="6">
          <img src={picture.medium} className="rounded-circle" alt="" />
        </Col>
      </Row>
    </div>
  )
}

export default ({ barbers, selectedBarber, selectBarber }) => {
  const handleChange = (event) => {
    event.preventDefault();
    selectBarber(event.target.value);
  }

  const renderBarberInfo = () => {
    const barber = barbers.find(barber => barber.id === selectedBarber);
    return <ShowBarberInfo {...barber} />
  }

  return (
    <Row>
      <Col md="6">
        <Input type="select" id="selectedBarber" value={selectedBarber} onChange={handleChange}>
          <option />
          {barbers.map(barber => <option key={barber.id} value={barber.id}>{barber.name}</option>)}
        </Input>
      </Col>
      <Col md="6">
        {selectedBarber && renderBarberInfo(selectedBarber, barbers)}
      </Col>
    </Row>
  );
}
