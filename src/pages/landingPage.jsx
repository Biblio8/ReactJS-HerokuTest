import React from "react";
// import Header from '../sections/header';
import HeroImage from "../sections/heroImage";
import Services from "../sections/services";
import Footer from "../sections/footer";
import UpCommingSeminars from "../sections/upCommingSeminars";

// images
import Header1 from "../images/Banner.jpg";
// import Header2 from "../images/header2.jpg";
import Header3 from "../images/header3.jpg";

export default function LandingPage() {
  return (
    <>
      {/* <Header /> */}
      <HeroImage
        // button={
        //   <Link className="btn btn-primary btn-xl" to="/seminarregistration">
        //     Sign Up For Seminar
        //   </Link>
        // }
        // subtitle="Get Everything you need to get your research work done"
        // title="An online ecosyste for researchers and scholars"
        img1={Header1}
        img2={Header3}
        img3={Header1}
      />
      <UpCommingSeminars />
      <Services />
      {/* <About /> */}
      <Footer />
    </>
  );
}
