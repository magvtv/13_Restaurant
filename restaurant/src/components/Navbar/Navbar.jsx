import React, { useState } from "react";
import { GiHambugerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/demoImages'
import './navBar.css';


const Navbar = () => {

    const [links, setLinks] = useState([
        {
            text: 'Home',
            to: '/'
        },
         {
            text: 'About',
            to: '/about'
        },
          {
            text: 'Contact Us',
            to: '/socials'
        },
    ])


    return (
        <nav className="app_navbar">
            <div className="app_navbar-logo">
                <img src={ images.logo} alt="web-app-logo" />
            </div>
          
            <ul className="app_navbar-links">
                {links.map((links) => (
                    <li key={links.text} className="p_font">
                        <Link to={link.to}>
                            { link.text}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
  )
}

export default Navbar