import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { FaInstagramSquare,FaLinkedin,FaFacebookSquare,FaHamburger} from 'react-icons/fa';

const Navbar = () => {
    const[navbar,setNavbar]=useState(false)
    return (
       <>
     <nav className="main-nav">
         <div className="logo">
             <h2><span >P</span>ratap<span>T</span>raders</h2>
         </div>
         <div className={navbar?"menu-link mobile-menu-link":"menu-link"}>
             <ul>
                 <li><NavLink  exact to="/">Home</NavLink></li>
                 <li><NavLink exact to="/about">About</NavLink></li>
                 <li><NavLink exact to="/service">Service</NavLink></li>
                 <li><NavLink exact to="/contact">Contact</NavLink></li>
                 
             </ul>
         </div>
         <div className="social-media">
             <ul className="social-media-desktop">
                 <li>
                     <a href="https://www.instagram.com/rp_loves_himself/" target="_Rishabh"><FaInstagramSquare className="instagram"/></a>
                   
                 </li>
                 <li>
                 <a href="https://www.facebook.com/rishabhpratap.singh.336" target="_Rishabh"><FaFacebookSquare className="facebook"/></a>
                 </li>
                 <li>
                 <a href="https://www.linkedin.com/in/mern-full-stack-developer-rishabh/" target="_Rishabh"><FaLinkedin className="linkedin"/></a>
                </li>
             </ul>
    <div className="hamburger-menu">
        <NavLink to="#" onClick={()=>setNavbar(!navbar)}>
        <FaHamburger/>
        </NavLink>
        </div>
         </div>
     </nav>
   
       </>
    )
}

export default Navbar;
