import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

// Keyframe Animations
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const popIn = keyframes`
  0% {
    transform: scale(0.9);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const glow = keyframes`
  0% {
    box-shadow: 0 0 10px rgba(0, 0, 255, 0.5);
  }
  50% {
    box-shadow: 0 0 20px rgba(0, 0, 255, 1);
  }
  100% {
    box-shadow: 0 0 10px rgba(0, 0, 255, 0.5);
  }
`;

// Styled Components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #1a2a6c, #b6f0ff);
  perspective: 1000px;
  animation: ${fadeIn} 1.5s ease-in-out;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: white;
  font-size: 2.5rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  animation: ${popIn} 1s ease-out;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.9);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  transform: rotateX(10deg);
  transition: transform 0.3s ease;

  &:hover {
    transform: rotateX(0deg) translateY(-5px);
  }
`;

const Label = styled.label`
  margin-bottom: 10px;
  color: #333;
  font-weight: bold;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 8px;
  width: 220px;
  border: none;
  border-radius: 8px;
  background: #f7f7f7;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    transform: scale(1.05);
    animation: ${glow} 1s infinite alternate;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 24px;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: #0056b3;
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  }
`;

const ErrorText = styled.p`
  color: red;
  font-weight: bold;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handlePasswordChange = (event) => setPassword(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      if (response.ok) {
        setEmail('');
        setPassword('');
        setError('');
        alert('Login Successful');
      } else {
        const errorResponse = await response.json();
        setError(errorResponse.message || 'An error occurred');
      }
    } catch (err) {
      console.error(err);
      setError('An error occurred');
    }
  };

  return (
    <Container>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          Email:
          <Input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </Label>
        <Label>
          Password:
          <Input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </Label>
        {error && <ErrorText>{error}</ErrorText>}
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </Container>
  );
};

export default Login;
