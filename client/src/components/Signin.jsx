import React, { Component } from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import classNames from 'classnames';
import history from '../history';
import { loginUser } from '../actions';
import '../css/Signin.css';


class Signin extends Component {
  handleSignin = ({ email, password }) => {
    this.props.loginUser({ email, password });
  }

  createNewUser = (event) => {
    event.preventDefault();
    history.push('/createUser');
  }

  renderField = ({ id, name, input, placeholder, type, meta: { touched, error, warning } }) => {
    const inputClasses = classNames(
      "form-control",
      "form-control-lg",
      touched && error && "form-control-danger"
    );

    return (
      <div>
        <div className="form-group">
          <input {...input}
            type={type}
            className={inputClasses}
            id={id}
            placeholder={placeholder}
          />
        </div>
      </div>
    );
  }

  required = (value) => value ? undefined : 'Required';
  email = (value) => value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined;

  render() {
    const { handleSubmit, errorMessage } = this.props;

    return (
      <div className="Signin">
        <h2>Sign in to appoinments</h2>
        <br />
        {errorMessage && <div className="alert alert-danger" role="alert">{errorMessage}</div>}
        <br />
        <form onSubmit={handleSubmit(this.handleSignin)}>
          <Field
            placeholder="Enter email"
            name="email"
            id="emailInput"
            component={this.renderField}
            type="text"
            validate={[ this.required, this.email ]}
          />
          <br />
          <Field
            placeholder="Enter password"
            name="password"
            id="passwordInput"
            component={this.renderField}
            type="password"
            validate={this.required}
          />
          <br />
          <button
            action="submit"
            className="btn btn-lg btn-success">
            Sign in
          </button>
          OR
          <button
            onClick={this.createNewUser}
            className="btn btn-lg btn-success">
            Create new user
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({ errorMessage: state.auth.errorMessage });
const mapDispatchToProps = (dispatch) => bindActionCreators({ loginUser }, dispatch);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  reduxForm({ form: 'signin-form' })
)(Signin);
