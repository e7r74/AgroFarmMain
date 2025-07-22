// src/components/AgroFarmCTASection/AgroFarmCTASection.jsx
import React from 'react';
import styled, { keyframes, css } from 'styled-components'; // Import 'css' for keyframes with styled components
import { useTranslation } from 'react-i18next';
import { FaMoneyBillWave, FaLeaf, FaMobileAlt, FaDollarSign } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer'; // <-- IMPORT useInView

// --- Keyframe-анимации ---
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const scaleUp = keyframes`
  from {
    transform: scale(0.9);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const pulse = keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(164, 206, 56, 0.7);
  }
  70% {
    transform: scale(1.02);
    box-shadow: 0 0 0 15px rgba(164, 206, 56, 0);
  }
  100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(164, 206, 56, 0);
  }
`;

// --- Styled Components для секции ---

const SectionWrapper = styled.section`
  background: linear-gradient(135deg, #023f23 0%, #1a4a2a 100%);
  padding: 80px 20px; /* Увеличил паддинг, чтобы было больше места сверху и снизу */
  color: white;
  text-align: center;
  overflow: hidden;
  position: relative;

  /* Initial state for scroll animation */
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1s ease-out, transform 1s ease-out;

  /* Class applied when in view */
  ${props => props.$inView && css` // Use $inView prop for transient prop
    opacity: 1;
    transform: translateY(0);
  `}

  @media (max-width: 768px) {
    padding: 60px 15px;
  }
`;

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (max-width: 992px) {
    gap: 30px;
  }
`;

const MainTitle = styled.h2`
  font-size: 3.2em;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.1;
  letter-spacing: -1px;

  /* Animation triggered by parent SectionWrapper */
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-out, transform 1s ease-out;
  ${props => props.$parentInView && css`
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.2s;
  `}

  @media (max-width: 768px) {
    font-size: 2.3em;
    margin-bottom: 15px;
  }
  @media (max-width: 480px) {
    font-size: 1.8em;
  }
`;

const SubDescription = styled.p`
  font-size: 1.2em;
  line-height: 1.6;
  margin-bottom: 40px;
  max-width: 800px;

  /* Animation triggered by parent SectionWrapper */
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-out, transform 1s ease-out;
  ${props => props.$parentInView && css`
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.4s;
  `}

  @media (max-width: 768px) {
    font-size: 1em;
    margin-bottom: 30px;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1200px;
  margin-bottom: 50px;

  /* Grid itself might not need animation, its children will animate */
  /* opacity: 0; */
  /* transform: translateY(30px); */
  /* transition: opacity 1s ease-out, transform 1s ease-out; */
  /* ${props => props.$parentInView && css`
    opacity: 1;
    transform: translateY(0);
    transition-delay: 0.5s;
  `} */

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

const FeatureItem = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  padding: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, background-color 0.3s ease;

  /* Initial state for each feature item */
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  /* Animation triggered by parent SectionWrapper */
  ${props => props.$parentInView && css`
    opacity: 1;
    transform: translateY(0);
    transition-delay: var(--item-delay); /* Use the CSS variable for staggered delay */
  `}


  &:hover {
    transform: translateY(-5px);
    background-color: rgba(255, 255, 255, 0.15);
  }

  svg {
    font-size: 2.2em;
    color: #a4ce38;
    margin-bottom: 10px;
  }

  span {
    font-size: 1.1em;
    font-weight: 500;
    line-height: 1.4;
  }
`;

const OfferText = styled.p`
  font-size: 2.5em;
  font-weight: 700;
  color: #f7d247;
  margin-bottom: 30px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);

  /* Animation triggered by parent SectionWrapper */
  opacity: 0;
  transform: scale(0.9);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  ${props => props.$parentInView && css`
    opacity: 1;
    transform: scale(1);
    transition-delay: 1.4s;
  `}

  @media (max-width: 768px) {
    font-size: 1.8em;
    margin-bottom: 25px;
  }
`;

const StyledButton = styled.button`
  background-color: #a4ce38;
  color: #023f23;
  padding: 16px 35px;
  border: none;
  border-radius: 100px;
  font-size: 1.4em;
  font-weight: 700;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  will-change: transform, box-shadow;

  /* Animation triggered by parent SectionWrapper */
  opacity: 0;
  transform: translateY(20px); /* Initial state for button */
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
  ${props => props.$parentInView && css`
    opacity: 1;
    transform: translateY(0);
    transition-delay: 1.6s;
    animation: ${pulse} 2s infinite ease-in-out 1.6s; /* Pulse animation starts after fade-in */
  `}


  &:hover {
    background-color: #bbdf5a;
    transform: translateY(-3px) scale(1.01);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
    animation: none; /* Stop pulse on hover */
  }

  @media (max-width: 768px) {
    font-size: 1.2em;
    padding: 14px 30px;
    width: 100%;
    max-width: 300px;
  }
`;

const CompanyTagline = styled.p`
  margin-top: 60px;
  font-size: 0.9em;
  color: rgba(255, 255, 255, 0.8);

  /* Animation triggered by parent SectionWrapper */
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 1s ease-out, transform 1s ease-out;
  ${props => props.$parentInView && css`
    opacity: 1;
    transform: translateY(0);
    transition-delay: 1.8s;
  `}

  @media (max-width: 768px) {
    margin-top: 40px;
  }
`;

// --- Абстрактные элементы фона (для современного дизайна) ---
const AbstractShape = styled.div`
  position: absolute;
  background-color: rgba(164, 206, 56, 0.08);
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0; /* Initial state for shapes */
  transition: opacity 2s ease-out; /* Transition for shape fade-in */
  z-index: 0;
  
  ${props => props.$parentInView && css`
    opacity: 0.5; /* Target opacity */
  `}
`;

const Shape1 = styled(AbstractShape)`
  width: 350px;
  height: 350px;
  top: -80px;
  left: -80px;
  ${props => props.$parentInView && css`
    transition-delay: 0.1s;
  `}
`;

const Shape2 = styled(AbstractShape)`
  width: 400px;
  height: 400px;
  bottom: -100px;
  right: -100px;
  ${props => props.$parentInView && css`
    transition-delay: 0.3s;
  `}
`;


// --- Компонент ---
const AgroFarmCTASection = () => {
  const { t } = useTranslation();

  // Use useInView for the entire section
  const [sectionRef, sectionInView] = useInView({
    triggerOnce: true, // Animation plays only once when it enters view
    threshold: 0.1,    // Trigger when 10% of the section is visible
  });

  return (
    <SectionWrapper ref={sectionRef} $inView={sectionInView}> {/* Pass inView as a transient prop */}
      <Shape1 $parentInView={sectionInView} />
      <Shape2 $parentInView={sectionInView} />
      <ContentContainer>
        <MainTitle $parentInView={sectionInView}>{t('ctaSection.mainTitle')}</MainTitle>
        <SubDescription $parentInView={sectionInView}>{t('ctaSection.subDescription')}</SubDescription>
        
        <FeaturesGrid>
          {/* Loop to render FeatureItem components and pass sectionInView prop */}
          {[1, 2, 3, 4].map((id, index) => (
            <FeatureItem key={id} $parentInView={sectionInView} style={{ '--item-delay': `${0.6 + index * 0.2}s` }}>
              {id === 1 && <FaMoneyBillWave />}
              {id === 2 && <FaLeaf />}
              {id === 3 && <FaMobileAlt />}
              {id === 4 && <FaDollarSign />}
              <span>{t(`ctaSection.feature${id}`)}</span>
            </FeatureItem>
          ))}
        </FeaturesGrid>

        <OfferText $parentInView={sectionInView}>{t('ctaSection.offerText')}</OfferText>
        <StyledButton $parentInView={sectionInView} onClick={() => window.location.href='https://wa.me/77089292985'}>
          {t('ctaSection.buttonText')}
        </StyledButton>
        <CompanyTagline $parentInView={sectionInView}>{t('ctaSection.companyTagline')}</CompanyTagline>
      </ContentContainer>
    </SectionWrapper>
  );
};

export default AgroFarmCTASection;