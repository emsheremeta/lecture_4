import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  InputField,
  Button,
  TextInfo,
  Form,
} from 'pages/Sign in/SignIn.styled';

export default function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = e => {
    setEmail(e.target.value);
    console.log(e.target.value);
  };
  const handlePasswordChange = e => {
    setPassword(e.target.value);
    console.log(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e);
    if (email.trim() === '' || password.trim().length === 0) {
      alert('Email and password are required fields!');
    }

    reset();
  };
  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Form>
        <label>Email</label>
        <InputField
          required
          name="email"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
        <label>Password</label>
        <InputField
          required
          name="password"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <Button type="submit" onSubmit={handleSubmit}>
          Sign In
        </Button>
        <TextInfo>
          Create an account? <Link to="/sign-up">Sign Up</Link>
        </TextInfo>
      </Form>
    </div>
  );
}
