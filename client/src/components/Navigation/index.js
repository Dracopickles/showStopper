import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import SignOutButton from '../Signout';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';
const Navigation = () => (
  <div><AuthUserContext.Consumer>
  {authUser =>
    authUser ? <NavigationAuth /> : <NavigationNonAuth />
  }
</AuthUserContext.Consumer></div>
);

const tempStyles = {
  color: 'red'
}

const NavigationAuth = () => (
 <div> 
   <Nav
<<<<<<< HEAD
  activeKey="/home"
=======
  activeKey="/home" className="baby" 
>>>>>>> 5da8b53a3f48df71e5b7f66bbae0e91234851ee4
  
>
  <Nav.Item>
    <Nav.Link href={ROUTES.LANDING}>Landing</Nav.Link>
  </Nav.Item>
  <Nav.Item>
  <Nav.Link href={ROUTES.HOMEPAGE}>Home</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href={ROUTES.ACCOUNT}>Account</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link href={ROUTES.ADMIN}>Admin</Nav.Link>
  </Nav.Item>
  <Nav.Item>
      <SignOutButton />
      {/* <Button variant="dark">Dark Test</Button> */}
    </Nav.Item>
</Nav>
{/* <ul>
    <li>
      <Link style={tempStyles} to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.HOMEPAGE}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.ACCOUNT}>Account</Link>
    </li>
    <li>
      <Link to={ROUTES.ADMIN}>Admin</Link>
    </li>
    <li>
      <SignOutButton />
      <Button variant="dark">Dark Test</Button>
    </li>
  </ul> */}
  </div>
);

const NavigationNonAuth = () => (
  <ul>
    <li>
      <Link to={ROUTES.LANDING}>Landing</Link>
    </li>
    <li>
      <Link to={ROUTES.SIGN_IN}>Sign In</Link>
    </li>
  </ul>
);
export default Navigation;