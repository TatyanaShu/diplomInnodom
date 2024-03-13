import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'
import Menu from '../Menu/Menu'
import Logo from '../Icons/Logo';
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import './header.css'


fontawesome.library.add(faPhone)

function Header() {
  const tel_icon = <FontAwesomeIcon icon="fa-solid fa-phone" style={{color: "#63E6BE",}} /> 

  return (

    <div className='header'>
      <Link to='/' className='header-logo'>
        <Logo />
      </Link>
      <Menu />
      <div className='header--tel' >
      <FontAwesomeIcon icon="fa-solid fa-phone" style={{color: "#63E6BE",}} /> 
        <a href='+375-29-863-88-11'>+375-29-863-88-11</a>
      </div>
    </div>
      
  )
}

export default Header