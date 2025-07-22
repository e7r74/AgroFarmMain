// src/components/AboutSection/AboutSection.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './AboutSection.module.css'; // Импортируем CSS-модуль
import { useInView } from 'react-intersection-observer'; // <-- ИМПОРТИРУЕМ useInView

import farmersImage from '../assets/images/about_us.png';

const AboutSection = () => {
  const { t } = useTranslation();

  // Хук для всей секции
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true, // Анимация только один раз
    threshold: 0.1,    // Начать анимацию, когда 10% секции видно
  });

  return (
    <section
      ref={sectionRef} // Привязываем ref к секции
      className={`${styles.aboutContainer} ${sectionInView ? styles.animatedIn : ''}`} // Добавляем класс для анимации
      id="about-section"
    >
      <div className={styles.contentWrapper}>
        <div className={styles.leftContent}>
          <p className={`${styles.breadcrumbs} ${sectionInView ? styles.fadeInUp : ''}`}>{t('aboutUsSection.breadcrumbs')}</p>
          <h2 className={`${styles.title} ${sectionInView ? styles.fadeInUp : ''}`}>{t('aboutUsSection.title')}</h2>
         
          <div className={`${styles.imageContainer} ${sectionInView ? styles.scaleIn : ''}`}> {/* Анимация для контейнера изображения */}
            <img className={styles.styledImage} src={farmersImage} alt="Farmers working in the field" />
          </div>
        </div>

        <div className={styles.rightContent}>
           <p className={`${styles.description} ${sectionInView ? styles.fadeInUp : ''}`}>{t('aboutUsSection.description')}</p>
          <div className={styles.stepsList}>
            {/* Маппим шаги, чтобы применить задержки */}
            {[1, 2, 3, 4,5].map((stepNum, index) => (
              <div
                key={stepNum}
                className={`${styles.stepItem} ${sectionInView ? styles.fadeInUp : ''}`}
                style={{ '--item-delay': `${0.8 + index * 0.15}s` }} // Последовательная задержка
              >
                <span className={styles.stepNumber}>0{stepNum}</span>
                <div className={styles.stepContent}>
                  <h5 className={styles.stepTitle}>{t(`aboutUsSection.step${stepNum}Title`)}</h5>
                  <p className={styles.stepText}>{t(`aboutUsSection.step${stepNum}Text`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;