import SignUpForm from 'components/SignUpForm';
import Footer from 'pages/Footer/Footer';
import Header from 'pages/Header/Header';
import { SignInWrapper, Text } from 'pages/Sign in/SignIn.styled';

export default function SignUp() {
  return (
    <div>
      <Header />
      <SignInWrapper>
        <Text>SIGN UP</Text>
        <SignUpForm />
        <Footer />
      </SignInWrapper>
    </div>
  );
}
