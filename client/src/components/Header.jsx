import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Popover, PopoverTitle,
  PopoverContent, Button } from 'reactstrap';
import '../css/Header.css';


export default class Header extends Component {
  state = {
    showUserPopover: false
  };

  togglePopover = () => {
    this.setState({ showUserPopover: !this.state.showUserPopover });
  }

  render = () => {
    const { firstName, lastName, handleSignout } = this.props;

    return (
      <Navbar color="faded" light toggleable>
        <div className="container">
          <NavbarBrand href="/dashboard">appointments</NavbarBrand>
            <i className="fa fa-user-circle-o fa-2x" id="userLink" onClick={this.togglePopover} />
        </div>
        <Popover placement="bottom right" isOpen={this.state.showUserPopover} target="userLink" toggle={this.togglePopover}>
          <PopoverTitle>{firstName} {lastName}</PopoverTitle>
          <PopoverContent>
            <Link to="/dashboard/userinfo">Edit profile</Link>
            <br />
            <Button outline color="danger" onClick={handleSignout}>Sign out</Button>
          </PopoverContent>
        </Popover>
      </Navbar>
    );
  }
}

    /*
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
              <NavLink to="/dashboard/userinfo" className="nav-link" activeClassName="active">
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
    */
