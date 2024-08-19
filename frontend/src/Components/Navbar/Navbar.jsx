import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/frontend_assets/assets'
import { FaShoppingBag } from "react-icons/fa";
import { FaBarsStaggered } from "react-icons/fa6";
import { MdClose } from "react-icons/md";

import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    const [menu, setMenu] = useState(false)

    function toggle() {
        setMenu(!menu)
    }

    return (
        <div className='navbar'>
            <div><Link to={'/'}><img src={assets.logo} alt="" /></Link></div>
            <ul className={menu ? 'active' : ''}>
                <li><NavLink className={({ isActive }) => isActive ? 'choosen' : ''} to={'/'} >Home</NavLink></li>
                <li><NavLink className={({ isActive }) => isActive ? 'choosen' : ''} to={'/admin'}>Admin</NavLink></li>
                <li>Mobile app</li>
                <li>Contact Us</li>
            </ul>
            <div className='nav-right'>
                <div >  <FaShoppingBag /> </div>
                <button>Sign in</button>
                <div className='toggle-btn' onClick={toggle}> {menu ? <MdClose />: <FaBarsStaggered />}</div>
            </div>
        </div>
    )
}

export default Navbar