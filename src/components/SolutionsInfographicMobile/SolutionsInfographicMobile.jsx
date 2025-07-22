// src/components/SolutionsInfographicMobile/SolutionsInfographicMobile.js
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer'; // <-- ИМПОРТИРУЕМ useInView
import styles from './SolutionsInfographicMobile.module.css';
import {
  FaWheatAwn, FaShieldHalved, FaSeedling, FaSatelliteDish,
  FaLeaf, FaTree, FaFlask, FaChartLine, FaGear
} from 'react-icons/fa6';

// Вам не нужен import SolutionsInfographicMobile from '../SolutionsInfographicMobile/SolutionsInfographicMobile'; здесь!
// ЭТА СТРОКА ДОЛЖНА БЫТЬ УДАЛЕНА ИЗ ЭТОГО ФАЙЛА
// import SolutionsInfographicMobile from '../SolutionsInfographicMobile/SolutionsInfographicMobile'; // <-- УДАЛИТЕ ЭТУ СТРОКУ!

const iconMap = { // Ваш iconMap должен быть здесь
  FaWheatAwn: FaWheatAwn, FaShieldHalved: FaShieldHalved, FaSeedling: FaSeedling,
  FaSatelliteDish: FaSatelliteDish, FaLeaf: FaLeaf, FaTree: FaTree,
  FaFlask: FaFlask, FaChartLine: FaChartLine, FaGear: FaGear,
};

const SolutionsInfographicMobile = () => {  // Это компонент для МОБИЛЬНОЙ версии
  const { t } = useTranslation();
  const infographicData = t('solutionsInfographic.items', { returnObjects: true });
  const [openIndex, setOpenIndex] = useState(null);

  // console.log('infographicData (Mobile):', infographicData); // Закомментируйте или удалите консольные логи для продакшна
  // console.log('Is infographicData an array (Mobile)?', Array.isArray(infographicData)); // Закомментируйте или удалите

  // Хук для всей секции
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true, // Анимация только один раз
    threshold: 0.1,    // Начать анимацию, когда 10% секции видно
  });

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!Array.isArray(infographicData)) {
      console.error("infographicData is not an array! Check your JSON translation files.");
      return <div>Error loading data for mobile.</div>;
  }

  return (
    <section
      ref={sectionRef} // Привязываем ref к секции
      className={`${styles.mobileInfographicSection} ${sectionInView ? styles.animatedIn : ''}`} // Добавляем класс для анимации
    >
      <h2 className={`${styles.mainTitle} ${sectionInView ? styles.fadeInUp : ''}`}>
        {t('solutionsInfographic.main_title')}
      </h2> {/* Заголовок для мобильных */}
      <div className={styles.mobileInfographicContainer}>
        {infographicData.map((item, index) => {
          const IconComponent = iconMap[item.icon];
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className={`${styles.accordionItem} ${sectionInView ? styles.fadeInUp : ''}`} // Анимируем каждый элемент аккордеона
              style={{ '--item-delay': `${0.3 + index * 0.1}s` }} // Последовательная задержка
            >
              <button
                className={`${styles.accordionHeader} ${isOpen ? styles.open : ''}`}
                onClick={() => toggleAccordion(index)}
              >
                <div className={styles.headerIconCircle}>
                  {IconComponent && <IconComponent className={styles.headerIcon} />}
                </div>
                <h3 className={styles.headerName}>{item.name}</h3>
                <span className={styles.arrow}>{isOpen ? '▲' : '▼'}</span>
              </button>
              {isOpen && (
                <div className={styles.accordionContent}>
                  <p>{item.description}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default SolutionsInfographicMobile;