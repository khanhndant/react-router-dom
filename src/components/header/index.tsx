import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './style.css'
import logo from '../../assets/images/logo.png'

const Header = () => {
  return (
     <div >
       <div className='header'>
        <div className='header-image'>
          <img src={logo} alt="image logo" className='image'/>
          <h1 className='title'>React router dom v6</h1>
        </div>
        <ul className='nav-lists'>
          <li className='nav-item'>
            <NavLink  to="/" className={isActive => {
              return isActive.isActive ? 'links links-active' : 'links'
            }}>Home</NavLink>
          </li>
          <li className='nav-item'>
            <Link to="/list-blogs" className='links'
            >Hooks</Link>
          </li>
        </ul>
      </div>
     </div>
  )
}

export default Header