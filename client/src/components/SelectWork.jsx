import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchBarbers } from '../actions/barber-actions';


class SelectWork extends Component {
  state = {
    selectedBarber: ''
  }

  componentWillMount = () => {
    this.props.fetchBarbers();
  }

  handleChange = (event) => {
    event.preventDefault();
    const target = event.target.id;
    const value = event.target.value;

    this.setState({ [target]: value });
  }

  render = () => {
    return (
      <form>
        <div className="form-group col-md-4">
          <label>Select barber</label>
          <select
            className="form-control"
            id="selectedBarber"
            value={this.state.selectedBarber}
            onChange={this.handleChange}
          >
            <option></option>
            {this.props.barbers.map(barber =>
              <option
                key={barber.id}
                value={barber.id}>
                {barber.name}
              </option>)}
          </select>
        </div>
      </form>
    );
  };
}

const mapStateToProps = ({ barber }) => ({ barbers: barber.barbers });
const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchBarbers }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SelectWork);
