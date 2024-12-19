import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff9a9e, #fad0c4);
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: #333;
  animation: ${bounce} 2s infinite;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  perspective: 1000px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: rotateY(10deg) rotateX(5deg);
  }
`;

const Label = styled.label`
  margin-bottom: 10px;
  font-size: 1rem;
  color: #555;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #ff9a9e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(255, 154, 158, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(255, 154, 158, 0.4);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 5px 10px rgba(255, 154, 158, 0.3);
  }
`;

const ErrorText = styled.p`
  color: red;
  font-size: 0.9rem;
  margin: 0 0 10px 0;
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (response.ok) {
        setEmail('');
        setPassword('');
        setError('');
        alert('Login successful!');
      } else {
        const errorResponse = await response.json();
        setError(errorResponse.message || 'An error occurred');
      }
    } catch (err) {
      console.log(err);
      setError('An error occurred');
    }
  };

  return (
    <Container>
      <Title>Login</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          Email:
          <Input type="email" value={email} onChange={handleEmailChange} />
        </Label>
        <Label>
          Password:
          <Input type="password" value={password} onChange={handlePasswordChange} />
        </Label>
        {error && <ErrorText>{error}</ErrorText>}
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </Container>
  );
};

export default Login;
