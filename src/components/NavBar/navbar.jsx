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

          <NavLink to='/Hopper'>
            Hopper
          </NavLink>

          <NavLink to='/WodList'>
            Wod List
          </NavLink>
          
          <NavLink to='/Chart'>
            Chart
          </NavLink>

          <NavLink to='/Login'>
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