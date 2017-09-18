import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input, Row } from 'reactstrap';
import '../css/UserInfo.css';

class UserInfo extends Component {
  state = {
    isEditable: false
  }

  toggleEditable = (event) => {
    event.preventDefault();
    this.setState({ isEditable: !this.state.isEditable });
  }

  cancelEditing = (event) => {
    event.preventDefault();
    this.setState({ isEditable: false });
  }

  saveUserData = (event) => {
    event.preventDefault();
    console.log('saveUserData called!');
  }

  render() {
    const { address, email, phonenumber } = this.props.user.data;
    const { firstName, lastName } = this.props.user.data.name;
    const { isEditable } = this.state;

    return (
      <div className="UserInfo">
        <h3>Personal information</h3>
        <Form>
          <Row>
            <FormGroup className="col-md-6">
              <Label for="inputFirstName">First name</Label>
              <Input type="text" id="inputFirstName" placeholder="First name" value={firstName} readOnly={!isEditable} />
            </FormGroup>
            <FormGroup className="col-md-6">
              <Label for="inputLastName">Last name</Label>
              <Input type="text" id="inputLastName" placeholder="Last name" value={lastName} readOnly={!isEditable} />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup className="col-md-6">
              <Label for="inputEmail">Email</Label>
              <Input type="email" id="inputEmail" placeholder="Email" value={email} readOnly={!isEditable} />
            </FormGroup>
            <FormGroup className="col-md-6">
              <Label for="inputPhonenumber" >Phonenumber</Label>
              <Input type="text" id="inputPhonenumber" placeholder="Phonenumber" value={phonenumber}
                readOnly={!isEditable} />
            </FormGroup>
          </Row>
          <FormGroup>
            <Label for="inputAddress">Address</Label>
            <Input type="text" id="inputAddress" placeholder="Address" value={address} readOnly={!isEditable} />
          </FormGroup>
          {!isEditable && <Button color="primary" onClick={this.toggleEditable} disabled={isEditable}>Edit</Button>}
          {isEditable && <div className="UserInfo__edit-buttons">
            <Button color="danger" onClick={this.cancelEditing}>Cancel</Button>
            <Button color="primary" onClick={this.saveUserData}>Save</Button>
          </div>}
        </Form>
      </div>
    );
  };
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, null)(UserInfo);
