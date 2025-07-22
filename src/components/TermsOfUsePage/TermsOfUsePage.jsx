// src/components/TermsOfUsePage/TermsOfUsePage.jsx
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next'; // Импортируем useTranslation

const TermsOfUseContainer = styled.div`
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
  line-height: 1.8;
  color: #333;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: 20px;
  margin-bottom: 20px;

  h1 {
    font-size: 2em;
    color: #2c3e50;
    text-align: center;
    margin-bottom: 40px;
    font-weight: bold;
  }

  h2 {
    font-size: 1.2em;
    color: #34495e;
    margin-top: 30px;
    margin-bottom: 15px;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
  }

  p {
    font-size: 14px;
    margin-bottom: 15px;
  }

  ul {
    list-style-type: disc; /* Маркированный список */
    margin-left: 20px;
    margin-bottom: 15px;
  }

  li {
    margin-bottom: 8px;
  }

  a {
    color: #3498db;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const TermsOfUsePage = () => {
  const { t } = useTranslation(); // Инициализируем хук useTranslation

  return (
    <TermsOfUseContainer>
      <h1>{t('termsOfUsePage.title')}</h1>

      <p>{t('termsOfUsePage.intro')}</p>

      <h2>{t('termsOfUsePage.section1.title')}</h2>
      <p>{t('termsOfUsePage.section1.content1')}</p>
      <p>{t('termsOfUsePage.section1.content2')}</p>

      <h2>{t('termsOfUsePage.section2.title')}</h2>
      <p>{t('termsOfUsePage.section2.content')}</p>

      <h2>{t('termsOfUsePage.section3.title')}</h2>
      <p>{t('termsOfUsePage.section3.content')}</p>

      <h2>{t('termsOfUsePage.section4.title')}</h2>
      <p>{t('termsOfUsePage.section4.content')}</p>

      <h2>{t('termsOfUsePage.section5.title')}</h2>
      <p>{t('termsOfUsePage.section5.content1')}</p>
      <ul>
        <li>{t('termsOfUsePage.section5.list1')}</li>
        <li>{t('termsOfUsePage.section5.list2')}</li>
        <li>{t('termsOfUsePage.section5.list3')}</li>
      </ul>
      <p>{t('termsOfUsePage.section5.content2')}</p>

      <h2>{t('termsOfUsePage.section6.title')}</h2>
      <p>{t('termsOfUsePage.section6.content')}</p>

      <h2>{t('termsOfUsePage.section7.title')}</h2>
      <p>{t('termsOfUsePage.section7.content')}</p>

      <h2>{t('termsOfUsePage.section8.title')}</h2>
      <p>{t('termsOfUsePage.section8.content')}</p>

      <p>{t('termsOfUsePage.contact_info', { email: 'info@agrofarm.kz' })}</p>
    </TermsOfUseContainer>
  );
};

export default TermsOfUsePage;