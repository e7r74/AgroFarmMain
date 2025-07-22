// src/sections/KeyFeatures/KeyFeatures.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './KeyFeatures.module.css';

// Импортируйте иконки, которые вы используете в translation.json
import {
  FaChartLine, // Для UNIQUE SOLUTIONS
  // Для PRACTICAL TOOLS (FaTools уже импортирован)
  FaLink,       // Для CONNECTION WHICH SIMPLIFIES
  FaLeaf,       // Для CONNECTION WHICH ELEVATES
  // ... добавьте другие, если используете
} from 'react-icons/fa6';
import { FaTools } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer'; // <-- ИМПОРТИРУЕМ useInView

// Маппинг строковых имен иконок к компонентам React
const iconMap = {
  FaChartLine: FaChartLine,
  FaTools: FaTools,
  FaLink: FaLink,
  FaLeaf: FaLeaf,
  // Добавьте другие иконки, если используете их в featuresData
};

const KeyFeatures = () => {
  const { t } = useTranslation();
  const featuresData = t('platformBenefits.features', { returnObjects: true });

  if (!Array.isArray(featuresData) || featuresData.length === 0) {
    console.warn("Key features data not found or is empty. Check translation files.");
    return null;
  }

  // Хук для секции, чтобы она появилась целиком
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true, // Анимация только один раз
    threshold: 0.1,    // Начать анимацию, когда 10% секции видно
  });

  return (
    <section
      ref={sectionRef} // Привязываем ref к секции
      className={`${styles.keyFeaturesSection} ${sectionInView ? styles.sectionAnimatedIn : ''}`} // Добавляем класс для анимации всей секции
    >
      {t('platformBenefits.main_title') && (
        <h2 className={styles.sectionTitle}>{t('platformBenefits.main_title')}</h2>
      )}
      <div className={styles.featuresGrid}>
        {featuresData.map((feature, index) => { // Добавляем index для задержки
          const IconComponent = iconMap[feature.icon];
          const colorClass = styles[`color_${feature.color}`];

          // Хук для каждой карточки
          const [cardRef, cardInView] = useInView({
            triggerOnce: true, // Анимация только один раз
            threshold: 0.2,    // Начать анимацию, когда 20% карточки видно
          });

          return (
            <div
              key={feature.id}
              ref={cardRef} // Привязываем ref к карточке
              className={`${styles.featureCard} ${cardInView ? styles.cardAnimatedIn : ''}`} // Добавляем класс для анимации карточки
              style={{ '--animation-delay': `${index * 0.15}s` }} // Индивидуальная задержка
            >
              <div className={styles.iconNumberWrapper}>
                <div className={styles.iconBackground}>
                  {IconComponent && <IconComponent className={styles.featureIcon} />}
                </div>
                <div className={styles.numberWrapper}>
                  <span className={`${styles.featureNumber} ${colorClass}`}>{feature.id}</span>
                  <div className={`${styles.colorLine} ${colorClass}`}></div>
                </div>
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default KeyFeatures;