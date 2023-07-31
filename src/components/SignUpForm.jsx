import { Form } from 'pages/Sign in/SignIn.styled';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { InputField, Button, TextInfo } from 'pages/Sign in/SignIn.styled';
// import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { register } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

export default function SignUpForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    console.log(formData);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(formData);
    if (formData.password.length < 3 || formData.password.length > 20) {
      toast.error('Please add the correct password', {
        position: 'top-right',
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
      dispatch(register(formData));
      // const response = await axios.post(
      //   'https://binary-travel-app.xyz/api/v1/auth/sign-up',
      //   formData
      // );
      // console.log(response.data);
    } catch (error) {
      console.error(error);
      toast.error('Seems like email already exist.', {
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
    setFormData({ fullName: '', email: '', password: '' });
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <ToastContainer />
        <label>Full name</label>
        <InputField
          required
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
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
        <Button type="submit">Sign Up</Button>
        <TextInfo>
          Already have an account? <Link to="/sign-in">Sign In</Link>
        </TextInfo>
      </Form>
    </div>
  );
}
