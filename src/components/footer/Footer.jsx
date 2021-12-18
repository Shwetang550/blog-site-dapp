import React from 'react';
import { Link } from 'react-router-dom';

// styles file
import './Footer.css';

const Footer = () => {
    return (
        <div
            className='footer'
        >
            
            <p>©{new window.Date().getFullYear()} <a href="https://shwetang.netlify.app/">Shwetang</a></p>
            
            <p className='rights'>
                All Rights Reserved
            </p>
        </div>
    )
}

export default Footer
