import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Collapse, ListGroup, ListGroupItemHeading, ListGroupItem } from 'reactstrap';
import { fetchBarbers, selectBarber, fetchWorklist, selectWork } from '../actions/barber-actions';
import SelectBarber from './SelectBarber';
import SelectWork from './SelectWork';


class SelectWorkForm extends Component {
  state = {
    collapseSelectBarber: false,
    collapseSelectWork: false
  }

  componentWillMount = () => {
    this.props.fetchBarbers();
    this.props.fetchWorklist();
  }

  toggleCollapse = (event) => {
    event.preventDefault();
    const id = event.target.id;
    this.setState({ [id]: !this.state[id] });
  }

  handleChange = (event) => {
    event.preventDefault();
    this.props.selectBarber(event.target.value);
  }

  render = () => {
    const { collapseSelectBarber, collapseSelectWork } = this.state;
    const { barbers, selectedBarber, selectBarber, worklist, selectWork, selectedWork } = this.props;

    return (
      <div className="SelectWorkForm">
        <ListGroup>
          <ListGroupItem>
            <div style={{ width: '100%' }}>
              <ListGroupItemHeading onClick={this.toggleCollapse} id="collapseSelectBarber">
                Select barber
              </ListGroupItemHeading>
              <Collapse isOpen={collapseSelectBarber}>
                <SelectBarber barbers={barbers} selectedBarber={selectedBarber} selectBarber={selectBarber} />
              </Collapse>
            </div>
          </ListGroupItem>
          <ListGroupItem>
            <div style={{ width: '100%' }}>
              <ListGroupItemHeading onClick={this.toggleCollapse} id="collapseSelectWork">
                Select work
              </ListGroupItemHeading>
              <Collapse isOpen={collapseSelectWork}>
                <SelectWork worklist={worklist} selectedWork={selectedWork} selectWork={selectWork} />
              </Collapse>
            </div>
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  };
}

const mapStateToProps = ({ barber }) => ({
  barbers: barber.barbers,
  selectedBarber: barber.selectedBarber,
  worklist: barber.worklist,
  selectedWork: barber.selectedWork
});
const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchBarbers, selectBarber, fetchWorklist, selectWork }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SelectWorkForm);
