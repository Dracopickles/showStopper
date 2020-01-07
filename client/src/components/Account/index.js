import React from 'react';

import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

import {Animated} from "react-animated-css";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
  <div>
    <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true}>
    <div className="box1">
    <form className="logForm">
    <h1>Account Password</h1>
    <p><PasswordForgetForm /></p>
    <p><PasswordChangeForm /></p>
    </form>
    </div>
    </Animated>
  </div>
  )}
  </AuthUserContext.Consumer>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);