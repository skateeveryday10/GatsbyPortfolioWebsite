import React from "react"
import Layout from "../components/Layout";
import HeroPage from "../components/HeroPage";
import FocusServices from "../components/FocusServices";
import OtherServices from '../components/OtherServices';
import GetAQuote from '../components/GetAQuote';

export const Head = () => {
  return(
      <>
          <title>Falk Web Design</title>
          <meta name='description' content='Effective Website Design and Development for Business and personal use, all at a cheap price!' />
          <meta name='keywords' content='Web Website Design Designer Development Developer'/>
          <link rel="canonical" href="https://falkwebdesign.com" />
      </>
  );
}

export default function Home() {
  return(
    <Layout>
      <div className="LandingPage">
        <HeroPage />
        <FocusServices />
        <OtherServices />
        <GetAQuote />
      </div>
    </Layout>
  );
}
