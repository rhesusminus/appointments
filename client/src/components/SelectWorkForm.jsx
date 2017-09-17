import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Collapse, ListGroup, ListGroupItem } from 'reactstrap';
import { fetchBarbers, selectBarber, fetchWorklist } from '../actions/barber-actions';
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
    const { barbers, selectedBarber, selectBarber, worklist } = this.props;

    return (
      <div className="SelectWorkForm">
        <ListGroup>
          <ListGroupItem>
            <h5 onClick={this.toggleCollapse} id="collapseSelectBarber">Select barber</h5>
            <Collapse isOpen={collapseSelectBarber}>
              <SelectBarber barbers={barbers} selectedBarber={selectedBarber} selectBarber={selectBarber} />
            </Collapse>
          </ListGroupItem>
          <ListGroupItem>
            <h5 onClick={this.toggleCollapse} id="collapseSelectWork">Select work</h5>
              <Collapse isOpen={collapseSelectWork}>
                <SelectWork worklist={worklist} />
              </Collapse>
          </ListGroupItem>
        </ListGroup>
      </div>
    );
  };
}

const mapStateToProps = ({ barber }) => ({
  barbers: barber.barbers,
  selectedBarber: barber.selectedBarber,
  worklist: barber.worklist
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchBarbers, selectBarber, fetchWorklist }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SelectWorkForm);
