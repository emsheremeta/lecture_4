import { Form } from 'pages/Sign in/SignIn.styled';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { InputField, Button, TextInfo } from 'pages/Sign in/SignIn.styled';

export default function SignUpForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChange = e => {
    setName(e.target.value);
    console.log(e.target.value);
  };
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
    if (name.trim() === '') {
      alert('Plase add the name!');
      return;
    }
    if (password.length < 3 || password.length > 20) {
      alert('The Password should be between 3 to 20 characters long');
    }
    reset();
  };
  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <label>Full name</label>
        <InputField
          required
          name="name"
          value={name}
          onChange={handleNameChange}
        />
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
        <Button type="submit">Sign Up</Button>
        <TextInfo>
          Already have an account? <Link to="/sign-in">Sign In</Link>
        </TextInfo>
      </Form>
    </div>
  );
}

// const successMessage = () => {
//   return (
//     <div
//       className="success_msg"
//       style={{
//         display: submitted ? '' : 'none',
//       }}
//     >
//       <h1>User {name} successfully registred!</h1>
//     </div>
//   );
// };

// const errorMessage = () => {
//   return (
//     <div
//       className="error_msg"
//       style={{
//         display: error ? '' : 'none',
//       }}
//     >
//       <h1>Please enter all the fields!</h1>
//     </div>
//   );
// };
