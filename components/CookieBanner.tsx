import CookieConsent from 'react-cookie-consent';
import styled from 'styled-components';

export const CookieBanner = () => {
  return (
    <CookieConsent
      buttonText="OKAY"
      style={{
        position: 'fixed',
        width: '96%',
        margin: 'auto',
        bottom: '20px',
        borderRadius: '0.5rem',
        fontSize: '1.5rem',
        left: '50%',
        marginBottom: '1rem',
        transform: 'translateX(-50%)',
      }}
      buttonStyle={{
        background: 'rgb(var(--primary)',
        color: 'white',
        fontSize: '1.5rem',
        borderRadius: '0.4rem',
        fontFamily: 'var(--font)',
        fontWeight: 'bold',
      }}
    >
      This website uses cookies to improve your experience. Please review our
      <StyledLink href="https://app.0xkyc.id/privacy-policy" target="_blank" rel="noreferrer">
        {' '}
        Cookie Policy (as a part of our Privacy Policy){' '}
      </StyledLink>{' '}
      for more information.
    </CookieConsent>
  );
};

const StyledLink = styled('a')`
  color: #62b5e6;
  transition: all 0.3s;
  text-decoration: none;
  &:hover {
    color: #79bde4;
  }
`;
