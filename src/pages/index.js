import * as React from "react"
import Layout from "../components/Layout";
import HeroPage from "../components/HeroPage";
import FocusServices from "../components/FocusServices";
import OtherServices from '../components/OtherServices';
import GetAQuote from '../components/GetAQuote';

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
