import React from 'react';
import Card from '../components/Card';
import BodyRowSection from '../components/PageSection';
import FlexRow from '../components/Flex-Row';

// import img from '../images/card-img.jpg';

export default function Services() {
    return (
        <BodyRowSection title="Our Service" id="services">
            <FlexRow>
                <Card title="Training and Workshops" body="Register on our website to take advantage of the opportunity to learn from the most experienced trainers" buttonText="Learn More" to="/" />
                <Card title="Research Consultancy" body="Feel free to ask any research-related questions and get a quick solution with the collaboration of professional experts and analysts " buttonText="Learn More" to="/" />
                <Card title="B8 Research Tools" body="we offer you advanced research tools that will boost the credibility of your research and allows you to explore more in research tools." buttonText="Learn More" to="/" />
                <Card title="Proofreading" body="Biblio8 is a service platform where you can bring your data and get sophisticated content that improves the articulacy of your document." buttonText="Learn More" to="/" />
            </FlexRow>
            {/* <Card title="lorem ipsum" body="Our themes are updated regularly to keep them bug free!" icon={<i className="bi-gem fs-1 text-primary"></i>} /> */}
        </BodyRowSection>
    );
}
