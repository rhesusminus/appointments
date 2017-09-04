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

  render() {
    const { handleSubmit, errorMessage } = this.props;

    return (
      <div className="Signin">
        {errorMessage && `${errorMessage}`}
        <form onSubmit={handleSubmit(this.handleSignin)}>
          <div className="mdl-textfield mdl-js-textfield">
            <label className="mdl-textfield__label">Email</label>
            <Field
              name="email"
              component="input"
              type="text"
              className="mdl-textfield__input"
            />
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
