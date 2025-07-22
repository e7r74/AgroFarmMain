// src/sections/CTABottomSection.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './CTABottomSection.module.css';
import { useInView } from 'react-intersection-observer';

const CTABottomSection = () => {
  const { t } = useTranslation();
  const [contactInfo, setContactInfo] = useState('');
  const [message, setMessage] = useState('');
  // New state to track message type (e.g., 'success' or 'error')
  const [messageType, setMessageType] = useState('');

  // Hook for the entire section
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true, // Animation plays only once when it enters view
    threshold: 0.1,    // Trigger when 10% of the section is visible
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setMessageType(''); // Clear message type on new submission

    if (!contactInfo) {
      setMessage(t('ctaBottomSection.validationEmpty'));
      setMessageType('error'); // Set type to error for validation messages
      return;
    }

    const isEmail = contactInfo.includes('@');
    const isValid = isEmail ? /\S+@\S+\.\S+/.test(contactInfo) : /^\+?[0-9\s-]{7,20}$/.test(contactInfo);

    if (!isValid) {
      setMessage(t('ctaBottomSection.validationInvalid'));
      setMessageType('error'); // Set type to error for validation messages
      return;
    }

    try {
      // ИСПРАВЛЕНО: Изменен URL API-эндпоинта и имя поля в теле запроса
      const response = await fetch("https://bace-production.up.railway.app/api/contact/send", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        // ИСПРАВЛЕНО: Отправляем JSON-объект с ключом 'contact'
        body: JSON.stringify({ contact: contactInfo })
      });

      if (response.ok) {
        setMessage(t('ctaBottomSection.successMessage'));
        setMessageType('success'); // Set type to success
        setContactInfo('');
      } else {
        // Предполагаем, что бэкенд возвращает текстовое сообщение об ошибке, а не JSON
        const errorText = await response.text();
        setMessage(errorText || t('ctaBottomSection.errorMessage')); // Используем текст ошибки или общее сообщение
        setMessageType('error'); // Set type to error
      }
    } catch (error) {
      console.error('Ошибка при отправке:', error);
      setMessage(t('ctaBottomSection.errorMessage'));
      setMessageType('error'); // Set type to error for network errors
    }
  };

  // Функция для действия второй кнопки, если она нужна
  const handleMainButtonClick = () => {
    // Здесь может быть переход на другую страницу, открытие модального окна и т.д.
    // IMPORTANT: Avoid using alert() in production code for better UX.
    // Consider using a custom modal or toast notification instead.
    // For this example, we'll keep it as is, but be aware of the limitation.
    alert(t('ctaBottomSection.mainButtonAction')); // Пример действия
  };

  return (
    <section
      ref={sectionRef} // Attach the ref to the section
      className={`${styles.ctaBottomContainer} ${sectionInView ? styles.animatedIn : ''}`} // Apply animation class
    >
      <div className={styles.ctaContent}>
        <h2 className={`${styles.ctaTitle} ${sectionInView ? styles.fadeInUp : ''}`}>{t('ctaBottomSection.title')}</h2>
        <p className={`${styles.ctaSubtitle} ${sectionInView ? styles.fadeInUp : ''}`}>{t('ctaBottomSection.subtitle')}</p>

        {/* Форма для ввода данных */}
        <form onSubmit={handleSubmit} className={`${styles.contactForm} ${sectionInView ? styles.fadeInUp : ''}`}>
          <input
            type="text"
            className={styles.contactInput}
            placeholder={t('ctaBottomSection.placeholder')}
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
            name="contact_info"
            aria-label={t('ctaBottomSection.inputAriaLabel')}
          />
          <button type="submit" className={styles.ctaFormButton}>
            {t('ctaBottomSection.formButton')}
          </button>
        </form>
        {/* Dynamically apply success or error message class */}
        {message && (
          <p className={`${styles.message} ${messageType === 'success' ? styles.messageSuccess : styles.messageError} ${sectionInView ? styles.fadeIn : ''}`}>
            {message}
          </p>
        )}

        {/* Возвращаем вашу оригинальную кнопку (раскомментировать, если нужна) */}
       {/* <button
          className={`${styles.ctaButton} ${sectionInView ? styles.scaleIn : ''}`}
          onClick={handleMainButtonClick} // Attach your handler
          style={{ '--animation-delay': '1s' }} // Example delay for this button
        >
          {t('ctaBottomSection.button')}
        </button> */}

      </div>
    </section>
  );
};

export default CTABottomSection;
