import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { saveUserData } from '../actions/user-actions';


class CreateNewUser extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phonenumber: '',
    address: '',
    password: ''
  }

  handleChange = (event) => {
    event.preventDefault();
    const target = event.target.id;
    const value = event.target.value;

    this.setState({ [target]: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.saveUserData(this.state);
  }

  render() {
    const { firstName, lastName, email, phonenumber, address, password } = this.state;
    return (
      <div className="CreateNewUser">
        <div className="container">
          <h3>Create new user</h3>
          <form onSubmit={this.handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="firstName" className="col-form-label">First name</label>
                <input type="text" className="form-control" id="firstName"
                  placeholder="First name" onChange={this.handleChange} value={firstName} />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="lastName" className="col-form-label">Last name</label>
                <input type="text" className="form-control" id="lastName"
                  placeholder="Last name" onChange={this.handleChange} value={lastName} />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="email" className="col-form-label">Email</label>
                <input type="email" className="form-control" id="email"
                  placeholder="Email" onChange={this.handleChange} value={email} />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="phonenumber" className="col-form-label">Phone number</label>
                <input type="text" className="form-control" id="phonenumber"
                  placeholder="Phone number" onChange={this.handleChange} value={phonenumber} />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="address" className="col-form-label">Address</label>
              <input type="text" className="form-control" id="address"
                placeholder="Address" onChange={this.handleChange} value={address} />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="password" className="col-form-label">Password</label>
                <input type="password" className="form-control" id="password" placeholder="Password"
                  onChange={this.handleChange} value={password} />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-success">
              Save
            </button>
          </form>
        </div>
      </div>
    );
  };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ saveUserData }, dispatch);

export default connect(null, mapDispatchToProps)(CreateNewUser);
