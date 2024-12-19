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

  @media (max-width: 600px) {
    padding: 1rem;
    font-size: 0.9rem;
  }
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
  transition: color 0.3s ease;

  &:hover {
    color: #00796b;
  }
`;

const Footer = styled.address`
  margin-top: 2rem;
  text-align: center;
  font-size: 0.9rem;
  color: #555;
  font-style: normal;
`;

export const Contact = () => {
  const contactDetails = {
    customerSupport: {
      email: 'support@example.com',
      phone: '+1 (XXX) XXX-XXXX',
    },
    generalInquiries: {
      email: 'info@example.com',
      phone: '+1 (XXX) XXX-XXXX',
    },
    wholesale: {
      email: 'wholesale@example.com',
      phone: '+1 (XXX) XXX-XXXX',
    },
    media: {
      email: 'media@example.com',
      phone: '+1 (XXX) XXX-XXXX',
    },
  };

  return (
    <Container>
      <Title>Contact Us</Title>
      <Text>We value your feedback, questions, and concerns. Our team is here to assist you with any inquiries you may have.</Text>
      
      <Subtitle>Customer Support:</Subtitle>
      <List>
        <ListItem>Email: {contactDetails.customerSupport.email}</ListItem>
        <ListItem>Phone: {contactDetails.customerSupport.phone}</ListItem>
      </List>

      {/* Other sections follow the same pattern */}

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





