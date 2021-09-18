import React, { Component } from 'react';
import { NavBarItems } from "./navbaritems";
import { Button } from '../Button/button';
import "./navbar.css";

class NavBar extends Component {
    state = { clicked: false }

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    render() { 
        return ( 
        <nav className='NavBar'>
            <h1 className="navbar-logo">Hopper Hero <i className='fas fa-dumbbell'></i></h1>
            
            <div className="menu-icon" onClick={this.handleClick}>
                <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
            </div>

            <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                {NavBarItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <a className={item.cName} href={item.url}>
                            {item.title}
                            </a>
                        </li>
                    )
                })}        
            </ul>
            <Button>Sign Up</Button>
        </nav> 
        );
    }
}
 
export default NavBar;