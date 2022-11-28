import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import '../styles/Portfolio.scss';
import Layout from "../components/Layout";

export const Head = () => {
    return(
        <>
            <title>Falk Web Design</title>
            <meta name='description' content='Effective Website Design and Development for Business and personal use, all at a cheap price!' />
            <meta name='keywords' content='Web Website Design Designer Development Developer'/>
        </>
    );
  }

const Portfolio = () => {

    return(
        <Layout>
            <div className="portfolio">
                <h2>Portfolio</h2>
                <div className="professionalRestaurantContainer">
                    <StaticImage src='../imgs/DesktopHero.png' className='desktopHero' alt='Desktop view of hero component' placeholder='blurred' quality={100} />
                    <StaticImage src='../imgs/PhoneMenu.png' className='phoneMenu' alt='Phone view of menu page' placeholder='blurred' quality={100} />
                    <StaticImage src='../imgs/TabletSlider.png' className='tabletSlider' alt='Tablet view of image slider' placeholder='blurred' quality={100} />
                    <div className="professionalRestaurantInfo">
                        <h3>Professional Restaurant Website</h3>
                        <p>A mock restaurant website design, completely responsive with animation and a functional contact form that will email you all responses. Created with a focus on optimizing speed and local SEO. </p>
                        <a rel='nofollow' href="https://examplerestaurant.falkwebdesign.com/"><span>Full Website</span></a>
                    </div>
                    <StaticImage src='../imgs/DesktopContact.png' className='desktopContact' alt='Desktop view of contact page' placeholder='blurred' quality={100} />
                    <StaticImage src='../imgs/DesktopSlider.png' className='desktopSlider' alt='Desktop view of image slider' placeholder='blurred' quality={100} />
                    <StaticImage src='../imgs/PhoneHero.png' className='phoneHero' alt='Phone view of hero component' placeholder='blurred' quality={100} />
                    <StaticImage src='../imgs/PhoneCards.png' className='phoneCards' alt='Phone view of cards component' placeholder='blurred' quality={100} />
                    <StaticImage src='../imgs/DesktopMenu.png' className='desktopMenu' alt='Desktop view of menu page' placeholder='blurred' quality={100} />
                    <StaticImage src='../imgs/DesktopCTA.png' className='desktopCTA' alt='Desktop view of Call To Action component' placeholder='blurred' quality={100} />
                </div>
            </div>
        </Layout>
    );
}

export default Portfolio;