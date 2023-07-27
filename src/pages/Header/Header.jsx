import { Link } from 'react-router-dom';
import { HeaderWrapper, LogoLink, Navigation } from './Header.styled';
export default function Header() {
  return (
    <div>
      <HeaderWrapper>
        <p>
          <LogoLink to="/">Travel App</LogoLink>
        </p>
        <div>
          <Link to="/sign-in">
            <Navigation
              fill="none"
              viewBox="0 0 24 24"
              height="2em"
              width="2em"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M16 9a4 4 0 11-8 0 4 4 0 018 0zm-2 0a2 2 0 11-4 0 2 2 0 014 0z"
                clipRule="evenodd"
              />
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zM3 12c0 2.09.713 4.014 1.908 5.542A8.986 8.986 0 0112.065 14a8.984 8.984 0 017.092 3.458A9 9 0 103 12zm9 9a8.963 8.963 0 01-5.672-2.012A6.992 6.992 0 0112.065 16a6.991 6.991 0 015.689 2.92A8.964 8.964 0 0112 21z"
                clipRule="evenodd"
              />
            </Navigation>
          </Link>
          <Link to="/bookings">
            <Navigation
              viewBox="0 0 24 24"
              fill="currentColor"
              height="2em"
              width="2em"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M15 3a1 1 0 011 1v2h4a1 1 0 011 1v12h2v2H1v-2h2V7a1 1 0 011-1h4V4a1 1 0 011-1h6zm-5 5H8v11h2V8zm6 0h-2v11h2V8zm-2-3h-4v1h4V5z" />
            </Navigation>
          </Link>
        </div>
      </HeaderWrapper>
    </div>
  );
}
