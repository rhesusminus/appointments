import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink as Link } from 'react-router-dom';
import { Navbar, NavbarBrand, Popover, PopoverTitle, PopoverContent, Button } from 'reactstrap';
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
        <Popover placement="bottom" isOpen={this.state.showUserPopover} target="userLink" toggle={this.togglePopover}>
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

Header.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  handleSignout: PropTypes.func.isRequired
}
