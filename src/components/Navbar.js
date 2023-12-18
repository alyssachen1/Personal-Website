import React from 'react'
import Icon from '../assets/home.png';


function Navbar() {
  return (
    <div className='navbar'>
        <div className='leftside'></div>
            <img src={Icon} />

        <div className='rightside'></div>
    </div>
  )
}

export default Navbar;
