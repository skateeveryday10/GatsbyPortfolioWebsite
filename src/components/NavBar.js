import React from 'react';
import { Link } from 'gatsby';
import '../styles/NavBar.scss';

export default function NavBar() {
  return (
    <nav className='NavBar'>
        <Link to="/"><h1>Falk Web Design</h1></Link>
        <ul>
            <li><Link to='/Portfolio'>Portfolio</Link></li>
            <li><Link to='/About'>About</Link></li>
            <li><Link to='/Contact'>Contact</Link></li>
        </ul>
    </nav>
  )
}