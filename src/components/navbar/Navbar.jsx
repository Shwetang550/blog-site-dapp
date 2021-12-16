import React from 'react';
import './Navbar.css';

// custom components
import Logo from '../../assets/logo.png';
import { menu } from './menuList';

// 3rd party components
import { NavLink, useHistory } from 'react-router-dom';

const Navbar = () => {
    const history = useHistory();
    
    return (
        <div className='navbar'>
            
            <div className='navbar_left'>
                <img
                    src={Logo}
                    alt="educate-me-logo"
                    onClick={() => history.push('/')}
                />
            </div>

            <div className='navbar_right'>
                {
                    menu.map(i => (
                        <NavLink
                            key={i.title}
                            to={i.path}
                            exact
                            activeClassName='navbar_navItem-active'
                        >{i.title}</NavLink>
                    ))
                }
            </div>

        </div>
    );
}

export default Navbar
