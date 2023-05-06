import React from 'react'
import ReactLogo from '../img/react-logo.svg'

function Header() {
  return (
    <header className='site-header'>
    <div className="site-header__container container">
    {/* LOGO  */}
    <a className="site-header__logo logo" href="index.html">
    <img className="logo__img" src={ReactLogo} alt="React logo"  />
    </a>

    <h2 className="site-header__title">React Course - Project 1</h2>
    </div>
    </header>
    )
  }

  export default Header