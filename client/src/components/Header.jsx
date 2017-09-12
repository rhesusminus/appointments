import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Header.css';


export default (props) => {
  const { firstName, lastName, handleSignout } = props;

  return (
    <nav className="navbar navbar-expand-lg navbar-light justify-content-between">
      <div className="container">
        <NavLink to="/dashboard">
          <h3>appointments</h3>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/userinfo" className="nav-link" activeClassName="active">
                <i className="fa fa-user-circle-o fa-lg" aria-hidden="true" /> {firstName} {lastName}
              </NavLink>
            </li>
            <li className="nav-item">
              <button className="btn btn-outline-danger my-2 my-sm-0" onClick={handleSignout}>Sign out</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
