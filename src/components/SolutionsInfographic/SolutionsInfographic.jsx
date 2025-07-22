// src/components/SolutionsInfographic/SolutionsInfographic.js
import React, { useState } from 'react';
import styles from './SolutionsInfographic.module.css';
import { useTranslation } from 'react-i18next';
import { useInView } from 'react-intersection-observer'; // <-- ИМПОРТИРУЕМ useInView

// Импортируем Font Awesome 6 иконки
import {
  FaWheatAwn, FaShieldHalved, FaSeedling, FaSatelliteDish,
  FaLeaf, FaTree, FaFlask, FaChartLine, FaGear,
  // Добавьте сюда другие иконки, если они используются
} from 'react-icons/fa6';

import SolutionsCenterImage from '../assets/images/Solutions-center.jpg'; // Путь к изображению

// Маппинг строковых имен иконок к компонентам React
const iconMap = {
  FaWheatAwn: FaWheatAwn,
  FaShieldHalved: FaShieldHalved,
  FaSeedling: FaSeedling,
  FaSatelliteDish: FaSatelliteDish,
  FaLeaf: FaLeaf,
  FaTree: FaTree,
  FaFlask: FaFlask,
  FaChartLine: FaChartLine,
  FaGear: FaGear,
};

const SolutionsInfographic = () => {
  const { t } = useTranslation();
  const infographicData = t('solutionsInfographic.items', { returnObjects: true });

  if (!Array.isArray(infographicData)) {
      console.error("infographicData is not an array! Check your JSON translation files.");
      return <div>Error loading infographic data for desktop.</div>;
  }

  const [activeItemIndex, setActiveItemIndex] = useState(null);
  const activeItemData = activeItemIndex !== null ? infographicData[activeItemIndex] : null;

  // Хук для всей секции
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true, // Анимация только один раз
    threshold: 0.1,    // Начать анимацию, когда 10% секции видно
  });

  const centerX = 50;
  const centerY = 50;
  const radius = 35;

  return (
    <section
      ref={sectionRef} // Привязываем ref к секции
      className={`${styles.infographicSection} ${sectionInView ? styles.animatedIn : ''}`} // Добавляем класс для анимации
    >
      {/* Заголовок секции */}
      <h2 className={`${styles.mainTitle} ${sectionInView ? styles.fadeInUp : ''}`}>
        {t('solutionsInfographic.main_title')}
      </h2>

      <div className={styles.infographicContainer}>
        {/* SVG для линий */}
        <svg className={styles.linesSvg}>
          {infographicData.map((item, index) => {
            const angle = (index / (infographicData.length - 1)) * Math.PI - Math.PI / 2;
            const itemX = centerX + radius * Math.cos(angle);
            const itemY = centerY + radius * Math.sin(angle);

            const isHovered = activeItemIndex === index;
            const lineClass = isHovered ? styles.activeLine : styles.line;

            return (
              <line
                key={`line-${index}`}
                x1={`${centerX}%`}
                y1={`${centerY}%`}
                x2={`${itemX}%`}
                y2={`${itemY}%`}
                className={`${lineClass} ${sectionInView ? styles.fadeIn : ''}`} // Анимируем линии
                style={{ '--line-delay': `${1.2 + index * 0.1}s` }} // Задержка для линий
              />
            );
          })}
        </svg>

        {/* Центральный круг */}
        <div
          className={`${styles.centerCircle} ${sectionInView ? styles.scaleIn : ''}`} // Анимируем центральный круг
          style={{
            left: `${centerX}%`,
            top: `${centerY}%`,
            transform: `translate(-50%, -50%)`,
            '--center-delay': '1s' // Задержка для центрального круга
          }}
        >
          <div className={styles.centerImageWrapper}>
             <img src={SolutionsCenterImage} alt="Center" className={styles.centerImage} />
          </div>
        </div>

        {/* Внешние элементы */}
        {infographicData.map((item, index) => {
          const angle = (index / (infographicData.length - 1)) * Math.PI - Math.PI / 2;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);

          const IconComponent = iconMap[item.icon];
          const isHovered = activeItemIndex === index;

          return (
            <div
              key={index}
              className={`${styles.itemWrapper} ${isHovered ? styles.itemHovered : ''} ${sectionInView ? styles.scaleIn : ''}`} // Анимируем внешние элементы
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: `translate(-50%, -50%)`,
                '--item-delay': `${1.4 + index * 0.15}s`, // Задержка для внешних элементов
              }}
              onMouseEnter={() => setActiveItemIndex(index)}
              onMouseLeave={() => setActiveItemIndex(null)}
            >
              {/* <a href={`/products/${item.name.toLowerCase().replace(/\s/g, '-')}`} className={styles.itemLink}> */}
                <div className={styles.itemIconCircle}>
                  {IconComponent && <IconComponent className={styles.itemIcon} />}
                </div>
                <p className={styles.itemName}>{item.name}</p>
              {/* </a> */}
            </div>
          );
        })}

        {/* GLOBAL TOOLTIP - отображение описания активного элемента */}
        {activeItemData && (
            <div className={`${styles.globalItemDescription} ${activeItemData ? styles.descriptionVisible : ''}`}>
                <p>{activeItemData.description}</p>
            </div>
        )}

      </div>
    </section>
  );
};

export default SolutionsInfographic;