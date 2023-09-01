import React from 'react';
import { Link } from 'gatsby';
import '../styles/Hero.scss';
import HeroImg1 from '../imgs/MidJourneyHeroImg1.png';
import HeroImg2 from '../imgs/MidJourneyHeroImg2.png';

export default function Hero() {
  return (
    <div className='Hero'>
      <nav className='NavBarContainer'>
          <Link to="/"><h1>Falk Web Design</h1></Link>
          <ul>
              <li><Link to='/Portfolio'>Portfolio</Link></li>
              <li><Link to='/About'>About</Link></li>
              <li><Link to='/Contact'>Contact</Link></li>
          </ul>
      </nav>
      <div className="heroHookContainer">
          <h2>Streamline Your Online Presence With Expert Web Design</h2>
          <Link to='/Contact'>Get a Free Quote!</Link>
      </div>
      <img src={HeroImg2} />
    </div>
  )
}
