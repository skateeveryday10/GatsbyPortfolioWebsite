import React from 'react';
import '../styles/HeroPage.scss';
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image";
import { Typewriter } from 'react-simple-typewriter';

const HeroPage = () => {
    
    return(
        <div className="heroPage">
            <div className="hookContainer">
                <h2>Streamline your online presence with <Typewriter
                    words={['top-tier', 'effective', 'flawless']}
                        typeSpeed={50}
                        deleteSpeed={80}
                        delaySpeed={1500}
                        loop={false}
                        cursor={true} />
                    <br/> Web Design</h2>
                <p>Websites are becoming more important than ever for businesses. Get a quote for a cheap, high-quality website today.</p>
                <Link to='/Contact'>Get a Free Quote!</Link>
            </div>
            <StaticImage src='../imgs/heroImg.png' alt='Main Website Design Image' placeholder='blurred' quality={100} />
        </div>
    );
}

export default HeroPage;