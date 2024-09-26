import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const FormContainer = styled.div`
  background-color: #f8f8f8;
  border-radius: 5px;
  padding: 2rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
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
