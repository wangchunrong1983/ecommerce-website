import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {auth} from '../../firebase/firebase.utils';
import  image from '../../image/4.png';
import './header.scss';

const Header = ({currentUser}) => (
  <div className='header'>
    <Link to='/' className='logo-container' >   
      <img src={image} alt='queenty logo' style={{height:250, width:350}} />
    </Link>

    <div className='options'>
      <Link className='option' to='/shop'>SHOP</Link>
      <Link className='option' to='/shop'>CONTACT</Link>
      {currentUser? 
        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div> 
        : 
        <Link className='option' to='/signin'>SIGN IN</Link>}
    </div>
  </div>
);

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
})


export default connect(mapStateToProps)(Header);