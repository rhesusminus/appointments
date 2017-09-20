import React from 'react';
import { Row, Col, Input } from 'reactstrap';

export default ({ worklist, selectedWork, selectWork }) => {
  const handleChange = (event) => {
    event.preventDefault();
    selectWork(event.target.value);
  }

  return (
    <Row>
      <Col md="6">
        <Input type="select" id="selectWork" value={selectedWork} onChange={handleChange}>
          <option />
          {worklist.map(it => <option key={it.id} value={it.id}>{it.name}</option>)}
        </Input>
      </Col>
      <Col md="6">
      </Col>
    </Row>
  );
}
