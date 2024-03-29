import React from 'react';
import '../styles/FocusServices.scss';
import { StaticImage } from "gatsby-plugin-image";
import { v4 as uuidv4 } from "uuid";
import Carroussel from './Carroussel';

const FocusServices = () => {

    let cards = [
        {
          key: uuidv4(),
          content: (
            <div className="webDesign">
                <div className='serviceInfo'>
                    <h2>5-Star Web Design</h2>
                    <p>Beautiful Web Design that will increase your traffic and focus on converting web surfers to customers. My websites bring out the best in your business. Not convinced?</p>
                    <a href='/Portfolio'><span>Check out My Portfolio</span></a>
                </div>
                <StaticImage src='../imgs/webDesignImg.png' alt='Website Design' placeholder='blurred' quality={100} />
            </div>
          )
        },
        {
          key: uuidv4(),
          content: (
            <div className="hostingPackage">
                <StaticImage src='../imgs/hostingImg.png' alt='Website Hosting' placeholder='blurred' quality={100} />
                <div className='serviceInfo'>
                    <h2>Expert hosting and maintenance package</h2>
                    <p>Keeping up with your website can be a a lot, let me take care of the important stuff while you relax. I can keep your site up to date and effective for a small recurring fee.</p>
                    <div>
                        <p>What does the package offer?</p>
                        <ul>
                            <li><StaticImage src='../imgs/checkIcon.svg' alt='Check Icon' placeholder='blurred' />Unlimited Revisions</li>
                            <li><StaticImage src='../imgs/checkIcon.svg' alt='Check Icon' placeholder='blurred' />Content Updates</li>
                            <li><StaticImage src='../imgs/checkIcon.svg' alt='Check Icon' placeholder='blurred' />Free Hosting</li>
                            <li><StaticImage src='../imgs/checkIcon.svg' alt='Check Icon' placeholder='blurred' />SEO Updates</li>
                            <li><StaticImage src='../imgs/checkIcon.svg' alt='Check Icon' placeholder='blurred' />Website Analytics Reports</li>
                        </ul>
                    </div>
                </div>
            </div>
          )
        },
        {
          key: uuidv4(),
          content: (
            <div className="websiteBenefits">
                <div className='serviceInfo'>
                    <h2>Websites are a necessity for any business</h2>
                    <p>A website can offer a lot for any business. It will give your business more credibility and inform customers about your product or service. As well as build your brand and provide organic online marketing.</p>
                </div>
                <StaticImage src='../imgs/websiteBenefitsImg.png' alt='Website Benefits' placeholder='blurred' quality={100} />
            </div>
          )
        }
      ];

    return(
        <div className="focusServices">
            <Carroussel
                cards={cards}
                height="500px"
                width="50%"
                margin="0 auto"
            />
        </div>
    )
}

export default FocusServices;