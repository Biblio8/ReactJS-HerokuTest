import React from "react";
import PageSection from "../components/PageSection";
import Container from "../components/Container";
import FlexRow from "../components/Flex-Row";

const FeedBackForm = () => {
  return (
    <>
      <PageSection
        title="Training Evaluation Form"
        subtitle="Your feedback is very important to us"
        id="feedback"
      >
        <Container>
          <FlexRow>
            <iframe
              title="GoogleForm"
              src="https://docs.google.com/forms/d/e/1FAIpQLScb0ZVHOuzvEfEJulhVEifb3CMbj4eZjLw-ZJ_qb2YVaHvhEg/viewform?usp=sf_link"
              frameborder="0"
              width="80%"
              height="1000px"
            ></iframe>
          </FlexRow>
        </Container>
      </PageSection>
    </>
  );
};

export default FeedBackForm;
