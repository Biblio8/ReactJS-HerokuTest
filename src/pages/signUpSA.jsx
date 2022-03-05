import Container from "../components/Container";
import PageSection from "../components/PageSection";
import FlexRow from "../components/Flex-Row";
import React from "react";

const StudentAmbassadorRegistration = () => {
  return (
    <PageSection title="Sign Up As Student Ambassador">
      <Container>
        <FlexRow>
          <h3 className="h3 text-muted">
            Soon you'll be able to join us as Student Ambassador
          </h3>
        </FlexRow>
      </Container>
    </PageSection>
  );
};

export default StudentAmbassadorRegistration;
