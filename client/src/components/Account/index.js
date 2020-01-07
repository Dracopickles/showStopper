import React from 'react';

import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
  <div>
    <div className="box1">
    <form className="logForm">
    <h1>Account Password</h1>
    <PasswordForgetForm />
    <PasswordChangeForm />
    </form>
    </div>
  </div>
  )}
  </AuthUserContext.Consumer>
);
const condition = authUser => !!authUser;
export default withAuthorization(condition)(AccountPage);