import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next'; // Импортируем useTranslation

const ContactContainer = styled.div`
  padding: 40px 20px;
  max-width: 800px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: 20px;
  margin-bottom: 20px;

  h1 {
    font-size: 2.8em;
    color: #2c3e50;
    text-align: center;
    margin-bottom: 40px;
    font-weight: bold;
  }

  h2 {
    font-size: 1.8em;
    color: #34495e;
    margin-top: 30px;
    margin-bottom: 15px;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
  }

  p {
    margin-bottom: 15px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin-bottom: 20px;
  }

  li {
    margin-bottom: 10px;
    display: flex;
    align-items: center;
    font-size: 1.1em;
  }

  li svg {
    margin-right: 10px;
    color: rgb(8, 154, 25);
  }

  .map-container {
    margin-top: 30px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .map-container #map {
    width: 100%;
    height: 400px;
    border: none;
    border-radius: 8px;
  }

  .map-link {
    display: block;
    text-align: center;
    margin-top: 15px;
    font-size: 1.1em;
    color: #3498db;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

// Simple SVG icons for contact info (replace with actual icons if using a library like Lucide React)
const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-3.71-3.71 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

const ContactPage = () => {
  const { t } = useTranslation(); // Инициализируем хук useTranslation

  // Контактная информация
  // Эти данные не нужно переводить, так как это конкретные телефон/адрес/email
  const address = t('contactPage.full_address');
  const phoneNumber = "+7 (747) 823-37-99";
  const emailAddress = "info@agrofarm.kz";

  // Координаты для адреса "г. Алматы, ул. Басенова, д. 27А, 1 этаж"
  const agroFarmCoords = [43.22314, 76.895106];
  const agroFarmLink = `https://2gis.kz/almaty/geo/9430047374969132`;

  useEffect(() => {
    const load2gisScript = () => {
      return new Promise((resolve, reject) => {
        if (window.DG) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = "https://maps.api.2gis.ru/2.0/loader.js?pkg=full";
        script.async = true;
        script.onload = () => {
          if (window.DG) {
            resolve();
          } else {
            reject(new Error("2GIS script loaded, but DG object not found."));
          }
        };
        script.onerror = () => reject(new Error("Failed to load 2GIS script."));
        document.head.appendChild(script);
      });
    };

    load2gisScript()
      .then(() => {
        if (document.getElementById('map')) {
          window.DG.then(function() {
            const map = window.DG.map('map', {
              center: agroFarmCoords,
              zoom: 16
            });

            window.DG.marker(agroFarmCoords)
              .addTo(map)
              .bindPopup(`<b>Agro Farm</b><br>${address}<br><a href="${agroFarmLink}" target="_blank">${t('contactPage.open_on_2gis_short')}</a>`);
          });
        }
      })
      .catch(error => {
        console.error("Error loading 2GIS map:", error);
      });

    return () => {
      // Cleanup if necessary, e.g., map.remove(); if you store map instance
    };
  }, []);

  return (
    <ContactContainer>
      <h1>{t('contactPage.title')}</h1>
      <p>{t('contactPage.description')}</p>

      <h2>{t('contactPage.our_contacts')}</h2>
      <ul>
        <li><PhoneIcon /> {t('contactPage.phone')}: {phoneNumber}</li>
        <li><MailIcon /> {t('contactPage.email')}: {emailAddress}</li>
        <li><MapPinIcon /> {t('contactPage.address')}: {address}</li>
      </ul>

      <h2>{t('contactPage.map_location')}</h2>
      <div className="map-container">
        <div id="map"></div>
      </div>
      <a href={agroFarmLink} target="_blank" rel="noopener noreferrer" className="map-link">
        {t('contactPage.open_on_2gis')}
      </a>
    </ContactContainer>
  );
};

export default ContactPage;