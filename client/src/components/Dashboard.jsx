import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import UserInfo from './UserInfo';
import { logoutUser, getCurrentUserData } from '../actions';
import { fetchBarbers } from '../actions/barber-actions';
import Header from './Header';
import '../css/Dashboard.css';


class Dashboard extends Component {
  state = {
    barber: ''
  }
  componentWillMount() {
    this.props.getCurrentUserData();
    this.props.fetchBarbers();
  }

  handleChange = (event) => {
    event.preventDefault();
    const target = event.target.id;
    const value = event.target.value;

    this.setState({ [target]: value });
  }

  render() {
    console.log('props:', this.props);
    const { firstName, lastName } = this.props.user.data.name;
    const { barbers } = this.props.barber;
    return (
      <div className="Dashboard">
        <Header firstName={firstName} lastName={lastName} handleSignout={this.props.logoutUser} />
        <div className="container">
          <h3>Dashboard</h3>
          <Route path="/dashboard/userinfo" component={UserInfo} />
          <form>
            <div className="form-group col-md-4">
              <label htmlFor="barber">Select barber</label>
              <select className="form-control" id="barber" value={this.state.barber} onChange={this.handleChange}>
                {barbers.map(barber =>
                  <option
                    key={barber.id}
                    value={barber.id}>
                    {barber.name}
                  </option>)}
              </select>
            </div>
          </form>
        </div>
      </div>
    );
  };
}

const mapStateToProps = ({ user, barber }) => ({ user, barber });
const mapDispatchToProps = (dispatch) => bindActionCreators({ logoutUser, getCurrentUserData, fetchBarbers }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
