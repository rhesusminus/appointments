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
      <div className="SelectWork">
        <div id="accordion" role="tablist">
          <ul className="list-group">
            <li className="list-group-item">
              <a data-toggle="collapse" data-parent="#accordion" aria-expanded="true" aria-controls="selectBarber" href="#selectBarber">Select barber</a>
                <div id="selectBarber" className="collapse" role="tabpanel" aria-labelledby="selectBarber">
                  <div className="row">
                    <div className="col-md-6">
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
                    <div className="col-md-6">
                      Info goes here
                    </div>
                </div>
              </div>
            </li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Morbi leo risus</li>
            <li className="list-group-item">Porta ac consectetur ac</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </div>
    );
  };
}

const mapStateToProps = ({ barber }) => ({ barbers: barber.barbers });
const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchBarbers }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(SelectWork);
