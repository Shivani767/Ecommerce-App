import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  margin-bottom: 10px;
`;

const Input = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  width: 200px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }
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
        // Show success alert and perform other actions
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
        <br />
        <Label>
          Password:
          <Input type="password" value={password} onChange={handlePasswordChange} />
        </Label>
        {error && <p>{error}</p>}
        <br />
        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>
    </Container>
  );
};

export default Login;
