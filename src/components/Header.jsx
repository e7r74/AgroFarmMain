// src/components/Header.jsx
import React, { useState, useEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { useTranslation } from 'react-i18next';
// Исправленные пути импорта для изображений, предполагая, что 'public' является корневой папкой, доступной напрямую
import LogaAgro from '/AgroFarm.png'; // Использовать абсолютный путь из public
import FarmMedExLoga from '/FarmMedExLoga.png'; // Использовать абсолютный путь из public
import FarmMedExMobile from '/FarmMedExMobile.png'; // Использовать абсолютный путь из public
import {
  FaUser,
  FaGlobe,
  FaAngleDown
} from 'react-icons/fa6';

import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

// --- Стилизованные компоненты ---

const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  background-color: #023f23; /* Темно-зеленый фон */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const HeaderContainer = styled.header`
  padding: 8px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 70px;
  z-index: 1001;

  @media (max-width: 768px) {
    padding: 0px 20px;
    height: auto;
  }
`;

const Logo = styled.div`
  font-size: 1.8em;
  font-weight: bold;
  color: white;
  text-decoration: none;
  cursor: pointer;
  z-index: 1001;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Montserrat', sans-serif;
`;

const LogoImage = styled.img`
  width: 200px;
  height: 100px;
`;

const Nav = styled.nav`
  display: flex;
  flex-grow: 1;
  justify-content: flex-end;
  padding-right: 30px;
  gap: 30px;

  @media (max-width: 768px) {
    display: ${props => (props.$isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background-color: #023f23;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    gap: 15px;
    z-index: 999;
    box-sizing: border-box;
    overflow-y: auto;
    max-height: calc(100vh - 70px);
  }
`;

const NavLinkBase = css`
  color: white;
  text-decoration: none;
  font-size: 1em;
  font-weight: 500;
  transition: color 0.3s ease;
  padding: 5px 0;
  cursor: pointer; /* Добавлено для StyledHashLink и общей согласованности */

  &:hover {
    color: #27ae60;
  }

  @media (max-width: 768px) {
    width: fit-content;
  }
`;

const StyledLink = styled(Link)`
  ${NavLinkBase}
`;

const StyledHashLink = styled(HashLink)`
  ${NavLinkBase}
`;

const ExternalLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 0;
  white-space: nowrap;
  font-weight: bold;
  font-size: 30px;
  color: white;
  text-decoration: none;

  &:hover {
    color: #27ae60;
  }

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;
    padding: 10px 20px;
    border: 1px solid #777;
    border-radius: 5px;
    &:hover {
        background-color: #04522d;
    }
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 15px;
  z-index: 1001;
  align-items: center;

  &.desktop-only {
    @media (max-width: 768px) {
      display: none;
    }
  }

  &.mobile-only {
    display: none;
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 10px;
      margin-top: 15px;
    }
  }
`;

const Button = styled.button`
  padding: 3px 0px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center; /* Добавлена эта строка для горизонтального центрирования содержимого */
  gap: 8px;
  width: 120px;
  height: 36px;

  background-color: transparent;
  color: white;
  border: 1px solid #777;

  &:last-child {
    background-color: #27ae60;
    color: white;
    border: none;
  }

  &:hover {
    background-color: #04522d;
    color: white;
  }

  &:last-child:hover {
    background-color: #2ecc71;
  }

  @media (max-width: 768px) {
    justify-content: center;
    width: 100%;

    &:first-child {
      background-color: transparent;
      color: white;
      border: 1px solid #777;
    }

    &:last-child {
      background-color: #27ae60;
      color: white;
      border: none;
    }

    &:hover,
    &:first-child:hover {
      background-color: #04522d;
    }

    &:last-child:hover {
      background-color: #2ecc71;
    }
  }
`;

const BurgerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  z-index: 1001;
  span {
    height: 3px;
    width: 25px;
    background-color: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;

const LanguageDropdown = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  cursor: pointer;
  z-index: 1001;

  &:hover > div {
    display: block;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const CurrentLanguage = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  padding-right: 20px;
  color: white;
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #04522d;
  min-width: 120px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  top: 100%;
  left: 0;
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    top: auto;
    left: auto;
    box-shadow: none;
    border-radius: 0;
  }
`;

const DropdownItem = styled.a`
  color: white;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  font-size: 0.95em;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #056a3a;
  }
`;

const GoToLoginButton = styled.button`
  display: block;
  width: 100%;
  margin-top: 15px;
  padding: 10px 15px;
  background-color: #27ae60;

  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2ecc71;
  }
`;

const DemoPopup = styled.div`
  position: absolute;
  background-color: #fff;
  color: #333;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 300px;
  z-index: 1050;
  display: ${props => (props.$isVisible ? 'block' : 'none')};
  text-align: left;

  ${props => !props.$isMobile && css`
    top: calc(100% + 10px);
    right: 0;
  `}

  h4 {
    margin-top: 0;
    color: #023f23;
    margin-bottom: 15px;
    font-size: 1.1em;
  }

  p {
    margin-bottom: 8px;
    font-size: 0.95em;
    line-height: 1.4;
  }

  strong {
    color: #27ae60;
  }

  @media (max-width: 768px) {
    position: static;
    width: 100%;
    margin-top: 15px;
    box-shadow: none;
    border: 1px solid #eee;
    box-sizing: border-box;
    left: auto;
    right: auto;
    top: auto;
    transform: none;
  }
`;

// --- Компонент заголовка ---

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDemoPopupVisible, setIsDemoPopupVisible] = useState(false);
  const demoButtonRef = useRef(null);
  const popupRef = useRef(null);

  // Константа DEMO_LOGIN_PAGE_URL и функция handleGoToLoginPage больше не нужны для кнопки "Перейти на страницу входа в демо-версию",
  // так как ссылка теперь встроена напрямую в onClick.

  const toggleMobileMenu = () => {
    if (!isMobileMenuOpen) {
      setIsDemoPopupVisible(false); // Закрыть всплывающее окно демо при открытии мобильного меню
    }
    setIsMobileMenuOpen(prev => !prev);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    if (isMobileMenuOpen && window.innerWidth <= 768) {
      setIsMobileMenuOpen(false); // Закрыть мобильное меню после смены языка
    }
    setIsDemoPopupVisible(false); // Закрыть всплывающее окно демо при смене языка
  };

  const getLanguageDisplayName = (lngCode) => {
    switch (lngCode) {
      case 'en': return t('English');
      case 'ru': return t('Русский');
      case 'kk': return t('Қазақша');
      default: return 'Language';
    }
  };

  const handleGetDemoClick = (event) => {
    event.stopPropagation(); // Предотвратить закрытие меню при нажатии на кнопку демо
    setIsDemoPopupVisible(prev => !prev);
  };

  // Функция handleGoToLoginPage удалена, так как ее логика теперь встроена напрямую в onClick GoToLoginButton.

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Если клик произошел вне кнопки демо и вне самого всплывающего окна
      if (
        popupRef.current && !popupRef.current.contains(event.target) &&
        demoButtonRef.current && !demoButtonRef.current.contains(event.target)
      ) {
        setIsDemoPopupVisible(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Функция для корректировки смещения прокрутки для фиксированного заголовка
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const headerOffset = 70; // Отрегулируйте это значение до фактической высоты вашего заголовка
    window.scrollTo({ top: yCoordinate - headerOffset, behavior: 'smooth' });
  };

  // Вспомогательная функция для обработки кликов по ссылкам (закрытие меню/всплывающего окна)
  const handleNavLinkClick = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    setIsDemoPopupVisible(false);
  };

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <StyledLink to="/">
          <Logo>
            <LogoImage src={LogaAgro} alt="Логотип Агро Фермы" />
          </Logo>
        </StyledLink>

        <BurgerMenu onClick={toggleMobileMenu}>
          <span />
          <span />
          <span />
        </BurgerMenu>

        <Nav $isOpen={isMobileMenuOpen}>
          {/* Использовать StyledHashLink для "О нас", чтобы прокрутить до раздела на главной странице */}
          <StyledHashLink
            to="/#about-section" // Ссылка на главную страницу, а затем на ID #about-section
            scroll={el => scrollWithOffset(el)}
            onClick={handleNavLinkClick}
          >
            {t('header.about')}
          </StyledHashLink>

          {/* Использовать StyledLink для "Контактов", если это отдельная страница */}
          <StyledLink
            to="/contact"
            onClick={handleNavLinkClick}
          >
            {t('header.contact')}
          </StyledLink>

          {/* Если у вас есть ссылка на Политику конфиденциальности, используйте StyledLink */}
          <StyledLink
            to="/privacy-policy"
            onClick={handleNavLinkClick}
          >
          
          </StyledLink>


          <LanguageDropdown>
            <CurrentLanguage>
              <FaGlobe size="1.2em" />
              {getLanguageDisplayName(i18n.language)}
              <FaAngleDown size="0.8em" />
            </CurrentLanguage>
            <DropdownContent>
              {i18n.language !== 'en' && (
                <DropdownItem onClick={() => changeLanguage('en')}>
                  {t('en')}
                </DropdownItem>
              )}
              {i18n.language !== 'ru' && (
                <DropdownItem onClick={() => changeLanguage('ru')}>
                  {t('ru')}
                </DropdownItem>
              )}
              {i18n.language !== 'kk' && (
                  <DropdownItem onClick={() => changeLanguage('kk')}>
                  {t('kz')}
                </DropdownItem>
              )}
            </DropdownContent>
          </LanguageDropdown>

          {/* Кнопки действий для мобильных устройств, теперь внутри Nav */}
          <ActionButtons className="mobile-only">
            <ExternalLink href="https://farmmedex.kz" target="_blank" rel="noopener noreferrer">
                <img src={FarmMedExMobile} alt="FarmMedExLoga" style={{width:'80px', height:'100px'}}/>
            </ExternalLink>
            <Button>
              <a href="https://user.agrofarm.kz/login" style={{color: '#fff', textDecoration: 'none'}}>
              <FaUser size="1.2em" /> {t('header.login')}
              </a>
            </Button>
            <Button ref={demoButtonRef} onClick={handleGetDemoClick}>
                {t('header.get_a_demo')}
            </Button>
            {isDemoPopupVisible && (
                <DemoPopup $isVisible={isDemoPopupVisible} ref={popupRef} $isMobile={true}>
                    <h4>{t('demo_popup.title')}</h4>
                    <p>{t('demo_popup.instruction_intro')}</p>
                    <p>{t('demo_popup.login_label')} <strong>TEST</strong></p>
                    <p>{t('demo_popup.password_label')} <strong>TEST</strong></p>
                    <p>{t('demo_popup.features_intro')}</p>
                    <p>    {t('demo_popup.feature_1')}</p>
                    <p>    {t('demo_popup.feature_2')}</p>
                    <p>    {t('demo_popup.feature_3')}</p>
                    <p>    {t('demo_popup.feature_4')}</p>
                    <p>{t('demo_popup.data_note')}</p>
                    {/* Ссылка теперь встроена напрямую в onClick */}
                    <GoToLoginButton onClick={() => {
                        window.open('https://user.agrofarm.kz/demo-login', '_blank');
                        setIsDemoPopupVisible(false); // Закрываем всплывающее окно после перехода
                    }}>
                        {t('demo_popup.go_to_login_button')}
                    </GoToLoginButton>
                </DemoPopup>
            )}
          </ActionButtons>
        </Nav>

        {/* Кнопки действий для десктопа (остаются на своих местах) */}
        <ActionButtons className="desktop-only">
            <ExternalLink href="https://farmmedex.kz" target="_blank" rel="noopener noreferrer">
                <img src={FarmMedExLoga} alt="FarmMedExLoga" style={{width:'170px', height:'100px'}}/>
            </ExternalLink>
            <Button>
              <a href="https://user.agrofarm.kz/login" style={{color: '#fff', textDecoration: 'none'}}>
              <FaUser size="1.2em" /> {t('header.login')}
              </a>
            </Button>
            <Button ref={demoButtonRef} onClick={handleGetDemoClick}>
                {t('header.get_a_demo')}
            </Button>
            {isDemoPopupVisible && (
                <DemoPopup $isVisible={isDemoPopupVisible} ref={popupRef} $isMobile={false}>
                    <h4>{t('demo_popup.title')}</h4>
                    <p>{t('demo_popup.instruction_intro')}</p>
                    <p>{t('demo_popup.login_label')} <strong>TEST</strong></p>
                    <p>{t('demo_popup.password_label')} <strong>TEST</strong></p>
                    <p>{t('demo_popup.features_intro')}</p>
                    <p>    {t('demo_popup.feature_1')}</p>
                    <p>    {t('demo_popup.feature_2')}</p>
                    <p>    {t('demo_popup.feature_3')}</p>
                    <p>    {t('demo_popup.feature_4')}</p>
                    <p>{t('demo_popup.data_note')}</p>
                    {/* Ссылка теперь встроена напрямую в onClick */}
                    <GoToLoginButton onClick={() => {
    window.open('https://user.agrofarm.kz/demo-login', '_blank'); // Эта строка явно указывает на /demo-login
    setIsDemoPopupVisible(false); // Закрываем всплывающее окно после перехода
}}>
    {t('demo_popup.go_to_login_button')}
</GoToLoginButton>
                </DemoPopup>
            )}
        </ActionButtons>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
