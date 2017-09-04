import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';


class Dashboard extends Component {
  handleSignout = () => {
    this.props.logoutUser();
  }

  render() {
    return (
      <div>
        <h5>Dashboard</h5>
        <button
          className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
          onClick={this.handleSignout}>
          Sign out
        </button>
      </div>
    );
  };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ logoutUser }, dispatch);

export default connect(null, mapDispatchToProps)(Dashboard);
