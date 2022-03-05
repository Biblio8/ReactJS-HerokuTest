import React from "react";
import Card from "../components/Card";
import FlexRow from "../components/Flex-Row";

const Seminars = ({ data, button, title, subtitle, img1, img2, img3 }) => {
  return (
    <div
      id="myCarousel"
      class="carousel slide"
      data-ride="carousel"
      data-interval="0"
    >
      {/* <!-- Carousel indicators --> */}
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>
      {/* <!-- Wrapper for carousel items --> */}
      <div class="carousel-inner">
        <div class="carousel-item active">
          <FlexRow>
            <Card
              title="Bibliometric Analysis"
              body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, sit."
              buttonText="Learn More"
            />
            <Card
              title="SPSS Workshop"
              body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, sit."
              buttonText="Learn More"
            />
            <Card
              title="AMOS Workshop"
              body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, sit."
              buttonText="Learn More"
            />
          </FlexRow>
        </div>
        <div class="carousel-item">
          <FlexRow>
            <Card
              title="Bibliometric Analysis"
              body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, sit."
              buttonText="Learn More"
            />
            <Card
              title="SPSS Workshop"
              body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, sit."
              buttonText="Learn More"
            />
            <Card
              title="AMOS Workshop"
              body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, sit."
              buttonText="Learn More"
            />
          </FlexRow>
        </div>
        <div class="carousel-item">
          <FlexRow>
            <Card
              title="Bibliometric Analysis"
              body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, sit."
              buttonText="Learn More"
            />
            <Card
              title="SPSS Workshop"
              body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, sit."
              buttonText="Learn More"
            />
            <Card
              title="AMOS Workshop"
              body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus, sit."
              buttonText="Learn More"
            />
          </FlexRow>
        </div>
      </div>
    </div>
  );
};

export default Seminars;
