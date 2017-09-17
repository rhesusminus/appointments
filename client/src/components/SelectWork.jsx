import React from 'react';
import { Row, Col, Input } from 'reactstrap';


export default (props) => {
  const { worklist } = props;

  return (
    <Row>
      <Col md="6">
        <Input type="select" id="selectWork">
          <option />
          {worklist.map(it => <option key={it.id}>{it.name}</option>)}
        </Input>
      </Col>
      <Col md="6">
      </Col>
    </Row>
  );
}
