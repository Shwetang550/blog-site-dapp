import React from 'react'
import './GenreNav.css';

// custom components
import { menu } from './menuList';

// 3rd party components
import { NavLink } from 'react-router-dom';

const GenreNav = () => {
    return (
        <div className='genreNav'>
            
            <div className="genreNav_left">
                {
                    menu.map(i => (
                        <NavLink
                            key={i.title}
                            to={i.path}
                            exact
                            activeClassName='genreNav-active'
                        >{i.title}</NavLink>
                    ))
                }
            </div>

            <div className="genreNav_right">
                <input placeholder="Search any article here..." />
            </div>

        </div>
    )
}

export default GenreNav
