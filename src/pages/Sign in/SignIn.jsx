import SignInForm from 'components/SingInForm';
import { Text, SignInWrapper } from './SignIn.styled';
import Header from 'pages/Header/Header';
import Footer from 'pages/Footer/Footer';

export default function SignIn() {
  return (
    <div>
      <Header />
      <SignInWrapper>
        <Text>SIGN IN</Text>
        <SignInForm />
      </SignInWrapper>
      <Footer />
    </div>
  );
}
