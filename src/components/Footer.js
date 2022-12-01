import React from 'react'
import '../styles/Footer.scss';
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Footer() {
  return (
    <footer className="footerContainer">
      <div className="footer">
        <div className="basicInfoContainer">
            <h2>Falk Web Design</h2>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/Portfolio'>Portfolio</Link></li>
                <li><Link to='/About'>About</Link></li>
                <li><Link to='/Contact'>Contact</Link></li>
            </ul>
        </div>
        <div className="socialMediaContainer">
            <p>Follow us</p>
            <div className="socialMedia">
                <a href='https://www.instagram.com/'><StaticImage src='../imgs/Instagram.png' alt='Instagram' placeholder='blurred' /></a>
                <a href=''><StaticImage src='../imgs/TikTok.png' alt='TikTok' placeholder='blurred' /></a>
                <a href=''><StaticImage src='../imgs/Twitter.png' alt='Twitter' placeholder='blurred' /></a>
                <a href=''><StaticImage src='../imgs/Facebook.png' alt='Facebook' placeholder='blurred' /></a>
                <a href=''><StaticImage src='../imgs/Linkedin.png' alt='Linkedin' placeholder='blurred' /></a>
            </div>
        </div>
        <div className="legalContainer">
            <p><Link to='/PrivacyPolicy'>Privacy Policy</Link> | Copyright © 2022, Travis Falk</p>
        </div>
      </div>
    </footer>
  )
}