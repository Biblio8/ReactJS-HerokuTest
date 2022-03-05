import React from "react";
import PageSection from "../components/PageSection";
import FlexRow from "../components/Flex-Row";
import Card from "../components/Card";
import FlexColumn from "../components/Flex-Column";
import Container from "../components/Container";

// card image
// import BA from "../images/card-img1.jpg";
// import SPSS from "../images/SPSS.jpg";
// import AMOS from "../images/AMOS.png";
// import TWSKILLS from "../images/twskills.png";
import CBW from "../images/Banner.jpg";

const UpCommingSeminars = () => {
  return (
    <PageSection title="Up Comming Events" id="UCS">
      <Container>
        <FlexColumn>
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a
                className="nav-link active"
                data-bs-toggle="tab"
                href="#BusinessCommunications"
              >
                Business Communications
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#Statistical">
                Statistical
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#ComputerScience"
              >
                Computer Science
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="tab"
                href="#BusinessAnalytics"
              >
                Business Analytics
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" data-bs-toggle="tab" href="#Econometrics">
                Econometrics
              </a>
            </li>
          </ul>
          <div id="myTabContent" className="tab-content">
            <div className="tab-pane fade" id="Statistical">
              <FlexRow>
                <Card
                  title="Bibliometric Analysis"
                  buttonText="Learn More"
                  footerText="Coming Soon!!"
                />
                <Card
                  title="SPSS Workshop"
                  buttonText="Learn More"
                  footerText="Coming Soon!!"
                />
                <Card
                  title="AMOS Workshop"
                  buttonText="Learn More"
                  footerText="Coming Soon!!"
                />
                <Card
                  title="SMART PLS"
                  buttonText="Learn More"
                  footerText="Coming Soon!!"
                />
              </FlexRow>
            </div>
            <div className="tab-pane fade" id="ComputerScience">
              <FlexRow>
                <Card
                  title="Intro to Python"
                  buttonText="Learn More"
                  footerText="Coming Soon!!"
                />
              </FlexRow>
            </div>
            <div className="tab-pane fade" id="BusinessAnalytics">
              <FlexRow>
                <h2 className="h2 text-muted">Coming Soon!!!!</h2>
              </FlexRow>
            </div>
            <div
              className="tab-pane fade active show"
              id="BusinessCommunications"
            >
              <FlexRow>
                <Card
                  imgSrc={CBW}
                  title="Capacity Building Workshop"
                  subtitle="Usama Najam Ph.D Scholar (University of Malaya)"
                  buttonText="Learn More"
                  footerText="5 March 2022"
                />
              </FlexRow>
            </div>
            <div className="tab-pane fade" id="Econometrics">
              <FlexRow>
                <Card
                  title="E-View"
                  subtitle="Panel Data Anlysis using Stata"
                  buttonText="Learn More"
                  footerText="Coming Soon!!"
                />
              </FlexRow>
            </div>
          </div>
        </FlexColumn>
      </Container>
    </PageSection>
  );
};

export default UpCommingSeminars;
