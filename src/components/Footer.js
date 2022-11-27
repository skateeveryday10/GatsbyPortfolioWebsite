import React from 'react'
import '../styles/Footer.scss';
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="footer">
        <div className="basicInfoContainer">
            <h6>Falk Web Design</h6>
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
                <a href='https://www.instagram.com/'><StaticImage src='../imgs/Instagram.svg' alt='Instagram' placeholder='blurred' /></a>
                <a href=''><StaticImage src='../imgs/TikTok.svg' alt='TikTok' placeholder='blurred' /></a>
                <a href=''><StaticImage src='../imgs/Twitter.svg' alt='Twitter' placeholder='blurred' /></a>
                <a href=''><StaticImage src='../imgs/Facebook.svg' alt='Facebook' placeholder='blurred' /></a>
                <a href=''><StaticImage src='../imgs/Linkedin.svg' alt='Linkedin' placeholder='blurred' /></a>
            </div>
        </div>
        <div className="legalContainer">
            <p><Link to='/PrivacyPolicy'>Privacy Policy</Link> | Copyright © 2022, Travis Falk</p>
        </div>
      </div>
    </div>
  )
}