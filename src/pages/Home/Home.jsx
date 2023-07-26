import Header from 'pages/Header/Header';
import { Text, TextWrapper, StyledLink } from './Home.styled';
import Footer from 'pages/Footer/Footer';

export default function Home() {
  return (
    <div>
      <Header />
      <TextWrapper>
        <Text>Do you have an account?</Text>
        <StyledLink to="/sign-in">SIGN IN</StyledLink>
        <Text>Do you want to create account?</Text>
        <StyledLink to="/sign-up">SIGN UP</StyledLink>
      </TextWrapper>
      <Footer />
    </div>
  );
}
