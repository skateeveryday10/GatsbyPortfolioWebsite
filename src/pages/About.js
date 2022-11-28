import React from 'react';
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/Layout";
import '../styles/About.scss';

export const Head = () => {
    return(
        <>
            <title>Falk Web Design</title>
            <meta name='description' content='My name is Travis Falk and I am a professional web designer based in Connecticut. Web design is a large passion of mine and I have become entirely obsessed with not only the art of design, but also optimizing design to be effective for businesses.' />
            <meta name='keywords' content='Web Website Design Designer Development Developer'/>
        </>
    );
}

const About = () => {

    return(
        <Layout>
            <div className="about">
                <div className="aboutMe">
                    <div className="aboutMeInfo">
                        <h2>About Me</h2>
                        <p>My name is Travis Falk and I am a professional web designer based in Connecticut. Web design is a large passion of mine and I have become entirely obsessed with not only the art of design, but also optimizing design to be effective for businesses. Falk Web Design is built around these qualities and my first priority for every project is to create a steady, long term, return for my client.</p>
                    </div>
                    <StaticImage src='../imgs/professionalPhoto.jpeg' alt='Professional Head shot' placeholder='blurred' loading='eager' />
                </div>
                <div className="technology">
                    <div className="technologyInfo">
                        <h3>Development</h3>
                        <p>My websites are built using a React technology stack. I am highly proficient in React, JavaScript, HTML/JSX, NodeJS, and SASS. Although this route may be harder to follow then some other web development pathways, it gives me full freedom to create anything you can imagine. This way I can work thoroughly with my clients and make stunning and intricate websites.</p>
                    </div>
                    <div className="technologyImgs">
                        <StaticImage src='../imgs/React.svg' alt='React Logo' placeholder='blurred' />
                        <StaticImage src='../imgs/JavaScript.svg' alt='JavaScript Logo' placeholder='blurred' />
                        <StaticImage src='../imgs/HTML.svg' alt='HTML Logo' placeholder='blurred' />
                        <StaticImage src='../imgs/NodeJS.svg' alt='NodeJS Logo' placeholder='blurred' />
                        <StaticImage src='../imgs/SASS.svg' alt='SASS Logo' placeholder='blurred' />
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default About;