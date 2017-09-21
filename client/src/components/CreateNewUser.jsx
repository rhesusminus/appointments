import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, Row } from 'reactstrap';
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
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <FormGroup className="col-md-6">
                <Label for="firstName">First name</Label>
                <Input type="text" id="firstName" onChange={this.handleChange} value={firstName} />
              </FormGroup>
              <FormGroup className="col-md-6">
                <Label for="lastName">Last name</Label>
                <Input type="text" id="lastName" onChange={this.handleChange} value={lastName} />
              </FormGroup>
            </Row>
            <Row>
              <FormGroup className="col-md-6">
                <Label for="email">Email</Label>
                <Input type="email" id="email"
                  placeholder="Email" onChange={this.handleChange} value={email} />
              </FormGroup>
              <FormGroup className="col-md-6">
                <Label for="phonenumber">Phone number</Label>
                <Input type="text" id="phonenumber"
                  placeholder="Phone number" onChange={this.handleChange} value={phonenumber} />
              </FormGroup>
            </Row>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input type="text" id="address"
                placeholder="Address" onChange={this.handleChange} value={address} />
            </FormGroup>
            <Row>
              <FormGroup className="col-md-6">
                <Label for="password">Password</Label>
                <Input type="password" id="password" placeholder="Password"
                  onChange={this.handleChange} value={password} />
              </FormGroup>
            </Row>
            <Button type="submit" color="success">
              Save
            </Button>
          </Form>
        </div>
      </div>
    );
  };
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ saveUserData }, dispatch);

export default connect(null, mapDispatchToProps)(CreateNewUser);
