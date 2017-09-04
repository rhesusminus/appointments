import React, { Component } from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { loginUser } from '../actions';
import '../css/Signin.css';


class Signin extends Component {
  handleSignin = ({ email, password }) => {
    this.props.loginUser({ email, password });
  }

  renderField = ({ id, name, input, label, type, meta: { touched, error, warning } }) => {
    return <div>
      <div className="mdl-textfield mdl-js-textfield">
        <input {...input} placeholder={label} type={type} className="mdl-textfield__input" id={id} />
        <label htmlFor={id} className="mdl-textfield__label">{label}</label>
      </div>
      <br />
      {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
    </div>
  }

  required = (value) => value ? undefined : 'Required';
  email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
  'Invalid email address' : undefined;

  render() {
    const { handleSubmit, errorMessage } = this.props;

    return (
      <div className="Signin">
        {errorMessage}
        <form onSubmit={handleSubmit(this.handleSignin)}>
          <Field
            label="Email"
            name="email"
            id="email_input"
            component={this.renderField}
            type="text"
            validate={[ this.required, this.email ]}
          />
          <br />
          <Field
            label="Password"
            name="password"
            id="password_input"
            component={this.renderField}
            type="password"
            validate={this.required}
          />
          <br />
          <button
            action="submit"
            className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
            Sign in
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
  reduxForm({ form: 'signin' })
)(Signin);
