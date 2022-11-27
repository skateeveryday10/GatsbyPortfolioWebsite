import React from 'react'
import NavBar from './NavBar'
import Footer from './Footer'

export default function Layout({ children }) {
  return (
    <div className='Layout'>
        <NavBar />
        <div className="Content">
            { children }
        </div>
        <Footer />
    </div>
  )
}
