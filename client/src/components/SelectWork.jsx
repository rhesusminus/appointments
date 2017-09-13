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

  render = () => {
    const { barbers } = this.props.barber;

    return (
      <form>
        <div className="form-group col-md-4">
          <label htmlFor="barber">Select barber</label>
          <select className="form-control" id="barber" value={this.state.selectedBarber} onChange={this.handleChange}>
            {barbers.map(barber =>
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

const mapStateToProps = ({ barber }) => ({ barber });
const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchBarbers }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SelectWork);
