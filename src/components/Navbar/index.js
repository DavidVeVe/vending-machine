import React from 'react'
import {NavLink} from 'react-router-dom'


import './Navbar.css'

const Navbar = (props) => {
    return (<div className='navbar'>
        <NavLink to='/beer' >Beer</NavLink>
        <NavLink to='/coffees' >Coffee</NavLink>
        <NavLink to='/snacks' >Snacks</NavLink>
    </div>)
}

export default Navbar
