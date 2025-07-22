import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next'; // Import useTranslation

// Define your Footer component's styles
const FooterContainer = styled.footer`
  background-color: #333; /* Dark background for the footer */
  color: white;
  padding: 40px 20px;
  text-align: center;
  font-size: 0.9em;
  border-top: 1px solid #444;
`;

const FooterText = styled.p`
  margin-bottom: 10px;
`;

const SocialLinks = styled.div`
  margin-top: 20px;
  a {
    color: white;
    margin: 0 10px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

// Define the Footer component
const Footer = () => {
  const { t } = useTranslation(); // Initialize the useTranslation hook

  return (
    <FooterContainer>
      {/* Use t() for the copyright text */}
      <FooterText>&copy; {new Date().getFullYear()} Agro Farm. {t('footer.all_rights_reserved')}</FooterText>
      <SocialLinks>
        {/* Use t() for link texts */}
        <a href="/privacy-policy">{t('footer.privacy_policy')}</a> | <a href="/terms">{t('footer.terms_of_use')}</a> | <a href="/contact">{t('footer.contacts')}</a>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;