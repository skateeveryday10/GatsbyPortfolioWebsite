import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';

import Hero from '../components/Hero.js';

export default function Layout({ children }) {
  return (
    <div className='Layout'>
        <Hero />
        <NavBar />
        <main className="Content">
            { children }
        </main>
        <Footer />
    </div>
  )
}
