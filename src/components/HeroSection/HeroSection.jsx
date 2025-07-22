// src/sections/HeroSection.jsx
import React from 'react';
import styles from './HeroSection.module.css';
import { useTranslation } from 'react-i18next';
import { Link as ScrollLink } from 'react-scroll';
import { useInView } from 'react-intersection-observer';

const HeroSection = () => {
  const { t } = useTranslation();

  // Отдельные ref'ы для анимации каждого элемента
  const [preTitleRef, preTitleInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [subtitleRef, subtitleInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [subtitleRef1, subtitleInView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  
  // Ref для обертки кнопки, чтобы анимировать её.
  // ScrollLink сам по себе не всегда корректно принимает ref для IntersectionObserver.
  const [buttonWrapperRef, buttonWrapperInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className={styles.heroContainer}>
      <h3
        ref={preTitleRef}
        className={`${styles.preTitle} ${preTitleInView ? styles.fadeInUp : ''}`}
        style={{ '--animation-delay': '0s' }}
      >
        <span className={styles.agroText}>Agro</span>{' '}
        <span className={styles.farmText}>Farm</span>
      </h3>
      <p
        ref={subtitleRef1}
        className={`${styles.heroSubtitle1} ${subtitleInView1 ? styles.fadeInUp : ''}`}
        style={{ '--animation-delay': '0.4s' }}
      >
        {t('heroSection.subtitle1')}
      </p>
      <h2
        ref={titleRef}
        className={`${styles.heroTitle} ${titleInView ? styles.fadeInUp : ''}`}
        style={{ '--animation-delay': '0.2s' }}
      >
        {t('heroSection.title')}
      </h2>
      <p
        ref={subtitleRef}
        className={`${styles.heroSubtitle} ${subtitleInView ? styles.fadeInUp : ''}`}
        style={{ '--animation-delay': '0.4s' }}
      >
        {t('heroSection.subtitle')}
      </p>

      {/* Оберните ScrollLink в div и примените ref к этому div */}
      <div
        ref={buttonWrapperRef} // Ref applied to the native DOM element (div)
        className={`${styles.callToActionWrapper} ${buttonWrapperInView ? styles.fadeInUp : ''}`} // Apply animation here
        style={{ '--animation-delay': '0.6s' }}
      >
        <ScrollLink
          to="about-section"
          smooth={true}
          duration={800}
          offset={-70}
          className={styles.callToAction} // Keep original button styles for the Link
        >
          {t('heroSection.button')}
        </ScrollLink>
      </div>
    </section>
  );
};

export default HeroSection;