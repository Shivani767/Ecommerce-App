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

const ErrorMsg = styled.p`
  color: #red;
  font-size: 0.8rem;
`;

const SuccessMsg = styled.p`
  color: #green;
  font-size: 0.8rem;
`;

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

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
        setSuccess(true);
        setUsername('');
        setPassword('');
        setEmail('');
      } else {
        setError('Error signing up. Please try again.');
      }
    } catch (err) {
      setError('Error signing up. Please try again.');
    } finally {
      setLoading(false);
    }
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
          {error && error.username && <ErrorMsg>{error.username}</ErrorMsg>}

          <Label>Email</Label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {error && error.email && <ErrorMsg>{error.email}</ErrorMsg>}

          <Label>Password</Label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && error.password && <ErrorMsg>{error.password}</ErrorMsg>}

          {loading ? (
            <Button type="submit" disabled>Loading...</Button>
          ) : (
            <Button type="submit">Sign Up</Button>
          )}
        </Form>

        {success && <SuccessMsg>Signup successful!</SuccessMsg>}
        {error && <ErrorMsg>{error}</ErrorMsg>}
      </FormContainer>
    </Container>
  );
};

export default Signup;
