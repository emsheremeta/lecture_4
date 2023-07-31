import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  InputField,
  Button,
  TextInfo,
  Form,
} from 'pages/Sign in/SignIn.styled';
// import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';

export default function SignInForm() {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (formData.email.trim() === '' || formData.password.trim().length === 0) {
      toast.error('Incorrect email & password', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
    try {
      dispatch(logIn(formData));
      // alert('login');
      // const response = await axios.post(
      //   'https://binary-travel-app.xyz/api/v1/auth/sign-in',
      //   formData
      // );
      //
    } catch (error) {
      console.error(error);
      toast.error('Incorrect email & password', {
        position: 'bottom-left',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
    clearFormData();
  };
  const clearFormData = () => {
    setFormData({ email: '', password: '' });
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <ToastContainer />
        <label>Email</label>
        <InputField
          required
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Password</label>
        <InputField
          required
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />
        <Button type="submit">Sign In</Button>
        <TextInfo>
          Create an account? <Link to="/sign-up">Sign Up</Link>
        </TextInfo>
      </Form>
    </div>
  );
}
