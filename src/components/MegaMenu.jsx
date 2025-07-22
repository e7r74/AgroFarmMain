import React from 'react';
import styles from './MegaMenu.module.css';
import { useTranslation } from 'react-i18next'; // <-- ИМПОРТ

import {
  FaChartLine,
  FaSeedling,
  FaShieldHalved, // Предполагаем, что вы исправили FaShieldAlt на FaShieldHalved
  FaLeaf,
  FaFlask,
  FaGear,
  FaSatelliteDish,
  FaTree, // Или FaTree, если FaSeed вызывает ошибку
  FaWheatAwn,
} from 'react-icons/fa6';

const MegaMenu = ({ isOpen }) => {
  const { t } = useTranslation(); // <-- ИСПОЛЬЗУЕМ ХУК useTranslation

  // Используем ключи из JSON-файла для названий
  const menuItems = [
    { name: t('megaMenu.financials'), icon: <FaChartLine /> },
    { name: t('megaMenu.commodity_pro'), icon: <FaWheatAwn /> },
    { name: t('megaMenu.imagery'), icon: <FaSatelliteDish /> },
    { name: t('megaMenu.operations'), icon: <FaGear /> },
    { name: t('megaMenu.planting'), icon: <FaSeedling /> },
    { name: t('megaMenu.protector'), icon: <FaShieldHalved /> },
    { name: t('megaMenu.seed_selector'), icon: <FaTree /> }, // Если FaSeed вызывает ошибку, замените на FaTree
    { name: t('megaMenu.spray_assist'), icon: <FaFlask /> },
    { name: t('megaMenu.sustainability'), icon: <FaLeaf /> },
  ];

  return (
    <div className={`${styles.megaMenuContainer} ${isOpen ? styles.isOpen : ''}`}>
      <div className={styles.megaMenuGrid}>
        {menuItems.map((item) => (
          <a
            key={item.name}
            // URL можно оставить на английском или тоже переводить, если нужно
            href={`/${item.name.toLowerCase().replace(/\s/g, '-')}`}
            className={styles.menuItem}
          >
            <div className={styles.iconWrapper}>
              <span className={styles.iconPlaceholder}>{item.icon}</span>
            </div>
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;