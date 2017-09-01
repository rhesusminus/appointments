import React, { Component } from 'react';
import { compose, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { loginUser } from '../actions';

class Signin extends Component {

  handleSignin = ({ email, password }) => {
    this.props.loginUser({ email, password });
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form className="Signin" onSubmit={handleSubmit(this.handleSignin)}>
        <div className="mdl-textfield mdl-js-textfield">
          <label className="mdl-textfield__label">Email</label>
          <Field name="email" component="input" type="text" className="mdl-textfield__input" />
        </div>
        <br />
        <div className="mdl-textfield mdl-js-textfield">
          <label className="mdl-textfield__label">Password</label>
          <Field
            name="password"
            component="input"
            type="password"
            className="mdl-textfield__input"
          />
        </div>
        <br />
        <button
          action="submit"
          className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--colored">
          Sign in
        </button>
      </form>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({ loginUser }, dispatch);

export default compose(
  connect(null, mapDispatchToProps),
  reduxForm({ form: 'signin' })
)(Signin);