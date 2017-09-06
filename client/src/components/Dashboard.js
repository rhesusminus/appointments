import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logoutUser, getCurrentUserData } from '../actions';


class Dashboard extends Component {
  componentWillMount() {
    this.props.getCurrentUserData();
  }

  handleSignout = () => {
    this.props.logoutUser();
  }

  render() {
    const fullName = `${this.props.user.data.name.firstName} ${this.props.user.data.name.lastName}`
    return (
      <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">appointments</span>
            <div className="mdl-layout-spacer"></div>
            <nav className="mdl-navigation mdl-layout--large-screen-only">
              <a className="mdl-navigation__link" href="">Link</a>
              <a className="mdl-navigation__link" href="">Link</a>
              <a className="mdl-navigation__link" href="">{fullName}</a>
              <button
                className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent"
                onClick={this.handleSignout}
              >
                Sign out
              </button>
            </nav>
          </div>
        </header>
        <div className="mdl-layout__drawer">
          <span className="mdl-layout-title">appointments</span>
          <nav className="mdl-navigation">
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" href="">Link</a>
            <a className="mdl-navigation__link" href="">Link</a>
          </nav>
        </div>
        <main className="mdl-layout__content">
          <div className="page-content">
          </div>
        </main>
      </div>
    );
  };
}

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = (dispatch) => bindActionCreators({ logoutUser, getCurrentUserData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
