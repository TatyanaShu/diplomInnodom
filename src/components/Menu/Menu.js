import React from 'react'
import { Link } from 'react-router-dom'
import './menu.css'


function Menu() {
  return (
      <nav className='navigation'>
          <ul className='navigation-menu'>
              <li>
                  <Link to='/'> Main</Link>
              </li>
              <li>
                  <Link to='about'>About</Link>
              </li>
              <li><Link to='programs'>Programs</Link></li>
              <li><Link to='recipes'>Recipes</Link></li>
          </ul>
        
        
        
        
    </nav>
  )
}

export default Menu