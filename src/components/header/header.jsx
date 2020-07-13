import React from 'react';
import {Link} from 'react-router-dom';
import  image from '../../image/4.png';
import './header.scss';

const Header = () => (
  <div className='header'>
    <Link to='/' className='logo-container' >   
      <img src={image} alt='queenty logo' style={{height:250, width:350}} />
    </Link>

    <div className='options'>
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/shop'>CONTACT</Link>
    </div>
  </div>
)

export default Header;