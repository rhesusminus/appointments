import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/UserInfo.css';

class UserInfo extends Component {
  state = {
    isEditable: false
  }

  toggleEditable = (event) => {
    event.preventDefault();

    this.setState({ isEditable: !this.state.isEditable });
  }

  render() {
    const { address, email, phonenumber } = this.props.user.data;
    const { firstName, lastName } = this.props.user.data.name;

    return (
      <div className="UserInfo">
        <h3>Personal information</h3>
        <form>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputFirstName" className="col-form-label">First name</label>
              <input type="text" className="form-control" id="inputFirstName" placeholder="First name" value={firstName} />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputLastName" className="col-form-label">Last name</label>
              <input type="text" className="form-control" id="inputLastName" placeholder="Last name" value={lastName} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="inputEmail" className="col-form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail" placeholder="Email" value={email} />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPhonenumber" className="col-form-label">Phonenumber</label>
              <input type="text" className="form-control" id="inputPhonenumber"
                placeholder="Phonenumber" value={phonenumber} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress" className="col-form-label">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="Address" value={address} />
          </div>
          <button className="btn btn-primary" onClick={this.toggleEditable}>Edit</button>
          <button type="submit" className="btn btn-primary">Save</button>
        </form>
      </div>
    );
  };
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, null)(UserInfo);
