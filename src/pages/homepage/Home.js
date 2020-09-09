import React from "react";
import "./home.scss";
import Header from "../../components/home-page-componets/Header";
import SectionOne from "../../components/home-page-componets/SectionOne";
import SectionTow from "../../components/home-page-componets/SectionTow";
import SectionThree from "../../components/home-page-componets/SectionThree";
import SectionFour from "../../components/home-page-componets/SectionFour";
import SectionFive from "../../components/home-page-componets/SectionFive";
import SectionSix from "../../components/home-page-componets/SectionSix";

function Home() {
  return (
    <div className="home-page">
      <Header />
      <SectionOne />
      <SectionTow />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
    </div>
  );
}

export default Home;
