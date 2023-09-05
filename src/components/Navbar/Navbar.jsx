import React, { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdRestaurant } from 'react-icons/io'
import images from '../../constants/images'
import './Navbar.css'


const Navbar = () => {
  const [toggleMenu, setTogglemenu]= useState(false)
  return (
    <nav className='app__navbar'>

      <div className='app__navbar-logo'>
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__opensans'><a href='#home'>Home</a></li>
        <li className='p__opensans'><a href='#about'>About</a></li>
        <li className='p__opensans'><a href='#Menu'>Menu</a></li>
        <li className='p__opensans'><a href='#awards'>Awards</a></li>
        <li className='p__opensans'><a href='#contact'>Contact</a></li>
      </ul>
      <div className='app__navbar-login'>
        <a href='#login' className='p__opensans'>Login In / Register </a>
        <div/>
        <a href='/' className='p__opensans'>Book Table </a>
      </div>
      <div className='app__navbar-smallscreen'>
        <GiHamburgerMenu color='#fff' fontSize={27} onClick={() => setTogglemenu(true)} />


        {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay flex__center slide-bottom'>
          <IoMdRestaurant fontSize={27} className="overlay__close" onClick={() => setTogglemenu(false)} />
          <ul className='app__navbar-smallscreen-links'>
        <li className='p__opensans'><a href='#home'>Home</a></li>
        <li className='p__opensans'><a href='#about'>About</a></li>
        <li className='p__opensans'><a href='#Menu'>Menu</a></li>
        <li className='p__opensans'><a href='#awards'>Awards</a></li>
        <li className='p__opensans'><a href='#contact'>Contact</a></li>
      </ul>
        </div>
        )}
        
      </div>
    </nav>
  )
}

export default Navbar