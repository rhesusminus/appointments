import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import UserInfo from './UserInfo';
import SelectWork from './SelectWork';
import { logoutUser, getCurrentUserData } from '../actions';
import Header from './Header';
import '../css/Dashboard.css';


class Dashboard extends Component {
  componentWillMount() {
    this.props.getCurrentUserData();
  }

  handleChange = (event) => {
    event.preventDefault();
    const target = event.target.id;
    const value = event.target.value;

    this.setState({ [target]: value });
  }

  render() {
    const { firstName, lastName } = this.props.user.data.name;
    return (
      <div className="Dashboard">
        <Header firstName={firstName} lastName={lastName} handleSignout={this.props.logoutUser} />
        <div className="container">
          <Switch>
            <Route path="/dashboard/userinfo" component={UserInfo} />
            <Route path="/dashboard" component={SelectWork} />
          </Switch>
        </div>
      </div>
    );
  };
}

const mapStateToProps = ({ user }) => ({ user });
const mapDispatchToProps = (dispatch) => bindActionCreators({ logoutUser, getCurrentUserData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
