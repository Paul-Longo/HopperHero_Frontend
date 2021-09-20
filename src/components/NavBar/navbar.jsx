import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './navbaritems';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <h1 className="navbar-logo">Hopper Hero <i className='fas fa-dumbbell'></i></h1>
        </NavLink>
        <Bars />
        <NavMenu>

          <NavLink to='/Hopper' activeStyle>
            Hopper
          </NavLink>

          <NavLink to='/WodList' activeStyle>
            Wod List
          </NavLink>
          
          <NavLink to='/Graph' activeStyle>
            Chart
          </NavLink>

          <NavLink to='/Login' activeStyle>
            Login
          </NavLink>
        </NavMenu>

        <NavBtn>
          <NavBtnLink to='/Register'>Register</NavBtnLink>
        </NavBtn>

      </Nav>
    </>
  );
};

export default Navbar;