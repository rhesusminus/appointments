import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Input } from 'reactstrap';

const SelectWork = ({ worklist, selectedWork, selectWork }) => {
  const handleChange = (event) => {
    event.preventDefault();
    selectWork(event.target.value);
  }

  const work = worklist.find(work => work.id === selectedWork);

  return (
    <Row>
      <Col md="6">
        <Input type="select" id="selectWork" value={selectedWork} onChange={handleChange}>
          <option />
          {worklist.map(work => <option key={work.id} value={work.id}>{work.name}</option>)}
        </Input>
      </Col>
      {work &&
        <Col md="6">
          <h4>{work.name}</h4>
          {work.description}
        </Col>
      }
    </Row>
  );
}

SelectWork.propTypes = {
  worklist: PropTypes.array.isRequired,
  selectWork: PropTypes.func.isRequired,
  selectedWork: PropTypes.number
}

export default SelectWork;
