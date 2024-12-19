import React from 'react';
import styled, { keyframes } from 'styled-components';
import "./contact.css";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div`
  animation: ${fadeIn} 1s ease-in;
  padding: 2rem;
  background: linear-gradient(135deg, #e0f7fa, #e0f2f1);
  border-radius: 10px;
  max-width: 800px;
  margin: 2rem auto;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  font-family: 'Roboto', sans-serif;
  color: #333;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: #006064;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 1rem;
`;

const Subtitle = styled.h2`
  color: #004d40;
  font-size: 1.8rem;
  margin: 1.5rem 0 1rem;
`;

const Text = styled.p`
  line-height: 1.6;
  font-size: 1.1rem;
`;

const List = styled.ul`
  margin: 1rem 0;
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin: 0.5rem 0;
  font-size: 1.1rem;
`;

const Footer = styled.div`
  margin-top: 2rem;
  text-align: center;
  font-size: 0.9rem;
  color: #555;
`;

export const Contact = () => {
  return (
    <Container>
      <Title>Contact Us</Title>
      <Text>We value your feedback, questions, and concerns. Our team is here to assist you with any inquiries you may have. Please feel free to reach out to us using any of the following contact methods:</Text>

      <Subtitle>Customer Support:</Subtitle>
      <Text>If you require assistance with an order, have questions about our products or services, or need help navigating our website, our dedicated customer support team is ready to assist you. You can contact us via:</Text>
      <List>
        <ListItem>Email: support@example.com</ListItem>
        <ListItem>Phone: +1 (XXX) XXX-XXXX</ListItem>
      </List>
      <Text>Our customer support representatives are available to assist you during our business hours, which are Monday to Friday, 9:00 AM to 5:00 PM (EST).</Text>

      <Subtitle>General Inquiries:</Subtitle>
      <Text>For general inquiries or feedback about our company or website, please use the following contact information:</Text>
      <List>
        <ListItem>Email: info@example.com</ListItem>
        <ListItem>Phone: +1 (XXX) XXX-XXXX</ListItem>
      </List>
      <Text>We strive to respond to all inquiries within 24-48 hours. However, during busy periods, it may take a little longer. We appreciate your patience.</Text>

      <Subtitle>Wholesale Inquiries:</Subtitle>
      <Text>If you are interested in becoming a wholesale partner or have questions related to wholesale orders, please reach out to us using the following details:</Text>
      <List>
        <ListItem>Email: wholesale@example.com</ListItem>
        <ListItem>Phone: +1 (XXX) XXX-XXXX</ListItem>
      </List>

      <Subtitle>Media Inquiries:</Subtitle>
      <Text>For media-related inquiries, interviews, or press releases, please contact our media relations team:</Text>
      <List>
        <ListItem>Email: media@example.com</ListItem>
        <ListItem>Phone: +1 (XXX) XXX-XXXX</ListItem>
      </List>
      <Text>We kindly request that only members of the media use these contact details for media inquiries. For customer support, please refer to the customer support information provided above.</Text>

      <Text>We also encourage you to visit our FAQ page, where we have compiled answers to frequently asked questions. You may find the information you are looking for without the need to contact us directly.</Text>

      <Text>Thank you for choosing our e-commerce site. We appreciate your business and look forward to assisting you!</Text>

      <Footer>
        <Text>Best regards,</Text>
        <Text>[Your Company Name]</Text>
        <Text>[Company Address]</Text>
        <Text>[City, State, ZIP]</Text>
        <Text>[Country]</Text>
      </Footer>
    </Container>
  );
};





