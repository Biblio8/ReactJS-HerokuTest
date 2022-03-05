import React from "react";
import Container from "../components/Container";
import PageSection from "../components/PageSection";
import FlexRow from "../components/Flex-Row";

const Login = () => {
  return (
    <PageSection title="Login to Biblio8">
      <Container>
        <FlexRow>
          <h3 className="h3 text-muted">
            Soon you'll be able to login to biblio8
          </h3>
        </FlexRow>
      </Container>
    </PageSection>
  );
};

export default Login;
