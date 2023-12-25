import React from 'react'
import Icon from '../assets/home.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftside'>
            <img src={Icon} />
        </div>

        <div className='rightside'>
            <Link to ='/home'> Home </Link>
            <Link to ='/menu'> Menu </Link>
            <Link to ='/about'> About </Link>
            <Link to ='/contact'> Contact </Link>
        </div>
    </div>
  );
}

export default Navbar;
