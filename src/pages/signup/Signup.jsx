import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%);
`;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const FormContainer = styled.div`
  background-color: #ffffff;
  border-radius: 10px;
  padding: 2rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  perspective: 1000px;
  animation: ${bounce} 2s infinite;
  transition: transform 0.3s;

  &:hover {
    transform: rotateY(10deg) rotateX(10deg);
  }
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  color: #555;
`;

const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 5px 10px rgba(0, 123, 255, 0.3);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 123, 255, 0.4);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 5px 10px rgba(0, 123, 255, 0.3);
  }
`;

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await fetch('http://localhost:3001/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      if (res.status === 201) {
        showAlertSignup();
        setUsername('');
        setPassword('');
        setEmail('');
      } else {
        console.log('Error');
      }
    } catch (err) {
      console.log(err);
    }
  };

  const showAlertSignup = () => {
    alert('Signup successful!');
  };

  return (
    <Container>
      <FormContainer>
        <Title>Sign Up</Title>
        <Form onSubmit={handleSubmit}>
          <Label>Name</Label>
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <Button type="submit">Sign Up</Button>
        </Form>
      </FormContainer>
    </Container>
  );
};

export default Signup;
