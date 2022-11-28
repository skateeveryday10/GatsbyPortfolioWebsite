import React from 'react';
import '../styles/OtherServices.scss';
import { StaticImage } from "gatsby-plugin-image";

const OtherServices = () => {

    return(
        <div className="otherServicesContainer">
            <h2>Other Solutions</h2>
            <div className="otherServices">
                <div className="contentWriting">
                    <StaticImage src='../imgs/contentWritingImg.png' alt='Content Writing' placeholder='blurred' quality={100} />
                    <div className='serviceInfo'>
                        <h3>Content Writing</h3>
                        <p>Good writing is absolutely necessary for any website. I take the time to get to know your business and put together the information in the best way possible.</p>
                    </div>
                </div>
                <div className="responsiveDesign">
                    <StaticImage src='../imgs/ResponsiveImg.png' alt='Responsive Design' placeholder='blurred' quality={100} />
                    <div className='serviceInfo'>
                        <h3>Responsive Design</h3>
                        <p>Responsiveness allows your website to be accessible on mobile devices. This is an absolute necessity as more than 50% of web searches are from phones or tablets.</p>
                    </div>
                </div>
                <div className="SEO">
                    <StaticImage src='../imgs/SEOImg.png' alt='Search Engine Optimization' placeholder='blurred' quality={100} />
                    <div className='serviceInfo'>
                        <h3>Search Engine Optimization</h3>
                        <p>SEO is a great local marketing strategy. My SEO can rank your website on the google homepage to bring tons of organic traffic.</p>
                    </div>
                </div>
                <div className="lowPrices">
                    <StaticImage src='../imgs/lowPriceImg.png' alt='Low prices' placeholder='blurred' quality={100} />
                    <div className='serviceInfo'>
                        <h3>Low Prices</h3>
                        <p>Based upon your business and goals for the website we will decide upon a low rate that is within your budget.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default OtherServices;