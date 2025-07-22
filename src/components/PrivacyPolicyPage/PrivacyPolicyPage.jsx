// src/components/PrivacyPolicyPage/PrivacyPolicyPage.jsx
import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next'; // Import useTranslation

// Styled component for the main container of the privacy policy page
const PrivacyPolicyContainer = styled.div`
  padding: 40px 20px;
  max-width: 900px;
  margin: 0 auto;
  font-family: 'Inter', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  margin-top: 20px;
  margin-bottom: 20px;

  h1, h2, h3 {
    color: #2c3e50;
    margin-top: 30px;
    margin-bottom: 15px;
    font-weight: bold;
  }

  h1 {
    font-size: 2em;
    text-align: center;
    margin-bottom: 40px;
  }

  h2 {
    font-size: 1.3em;
    border-bottom: 2px solid #e0e0e0;
    padding-bottom: 10px;
  }

  h3 {
    font-size: 1.2em;
    color: #34495e;
  }

  p {
   font-size: 14px;
    margin-bottom: 15px;
  }

  ul {
    list-style-type: disc;
    margin-left: 20px;
    margin-bottom: 15px;
  }

  ol {
    list-style-type: decimal;
    margin-left: 20px;
    margin-bottom: 15px;
  }

  li {
    margin-bottom: 8px;
  }

  strong {
    font-weight: bold;
  }

  a {
    color: #3498db;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

// Define the PrivacyPolicyPage component
const PrivacyPolicyPage = () => {
  const { t } = useTranslation();

  return (
    <PrivacyPolicyContainer>
      <h1>{t('privacyPolicy.title')}</h1>
      <h2>{t('privacyPolicy.offer_title')}</h2>
      <h3>{t('privacyPolicy.terms_definitions.title')}</h3>
      <p>{t('privacyPolicy.terms_definitions.paragraph1')}</p>
      <p>{t('privacyPolicy.terms_definitions.paragraph2')}</p>
      <h3>{t('privacyPolicy.concepts_terms.title')}</h3>
      <p><strong>{t('privacyPolicy.concepts_terms.buyer.strong')}</strong> {t('privacyPolicy.concepts_terms.buyer.text')}</p>
      <p>{t('privacyPolicy.concepts_terms.buyer.sub1')}</p>
      <p>{t('privacyPolicy.concepts_terms.buyer.sub2')}</p>
      <p>1.2. <strong>{t('privacyPolicy.concepts_terms.seller.strong')}</strong> {t('privacyPolicy.concepts_terms.seller.text')}</p>
      <p>1.3. <strong>{t('privacyPolicy.concepts_terms.site.strong')}</strong> {t('privacyPolicy.concepts_terms.site.text')}</p>
      <p>1.4. <strong>{t('privacyPolicy.concepts_terms.store.strong')}</strong> {t('privacyPolicy.concepts_terms.store.text')}</p>
      <p>1.6. <strong>{t('privacyPolicy.concepts_terms.call_center.strong')}</strong> {t('privacyPolicy.concepts_terms.call_center.text')}</p>
      <ul>
        <li>{t('privacyPolicy.concepts_terms.call_center.list1')}</li>
        <li>{t('privacyPolicy.concepts_terms.call_center.list2')}</li>
      </ul>
      <p>1.7. <strong>{t('privacyPolicy.concepts_terms.goods.strong')}</strong> {t('privacyPolicy.concepts_terms.goods.text')}</p>
      <p>1.8. <strong>{t('privacyPolicy.concepts_terms.catalog.strong')}</strong> {t('privacyPolicy.concepts_terms.catalog.text')}</p>
      <p>1.9. <strong>{t('privacyPolicy.concepts_terms.order.strong')}</strong> {t('privacyPolicy.concepts_terms.order.text')}</p>
      <p>1.10. <strong>{t('privacyPolicy.concepts_terms.pos_terminal.strong')}</strong> {t('privacyPolicy.concepts_terms.pos_terminal.text')}</p>
      <p>1.11. <strong>{t('privacyPolicy.concepts_terms.online_payment.strong')}</strong> {t('privacyPolicy.concepts_terms.online_payment.text')}</p>
      <p>1.12. <strong>{t('privacyPolicy.concepts_terms.promotion.strong')}</strong> {t('privacyPolicy.concepts_terms.promotion.text')}</p>
      <p>1.13. <strong>{t('privacyPolicy.concepts_terms.order_placement.strong')}</strong> {t('privacyPolicy.concepts_terms.order_placement.text')}</p>
      <p>1.14. <strong>{t('privacyPolicy.concepts_terms.order_completion_moment.strong')}</strong> {t('privacyPolicy.concepts_terms.order_completion_moment.text')}</p>
      <p>1.15. <strong>{t('privacyPolicy.concepts_terms.discounted_goods.strong')}</strong> {t('privacyPolicy.concepts_terms.discounted_goods.text')}</p>

      <h3>{t('privacyPolicy.contract_subject.title')}</h3>
      <p>{t('privacyPolicy.contract_subject.paragraph1')}</p>
      <p>{t('privacyPolicy.contract_subject.paragraph2')}</p>

      <h3>{t('privacyPolicy.contract_conclusion.title')}</h3>
      <p>{t('privacyPolicy.contract_conclusion.paragraph1')}</p>
      <p>{t('privacyPolicy.contract_conclusion.sub1')}</p>
      <p>{t('privacyPolicy.contract_conclusion.sub2')}</p>
      <p>{t('privacyPolicy.contract_conclusion.sub3')}</p>
      <p>{t('privacyPolicy.contract_conclusion.sub4')}</p>
      <p>{t('privacyPolicy.contract_conclusion.sub5')}</p>
      <p>{t('privacyPolicy.contract_conclusion.sub6')}</p>
      <p>{t('privacyPolicy.contract_conclusion.sub7')}</p>
      <p>{t('privacyPolicy.contract_conclusion.sub8')}</p>
      <p>{t('privacyPolicy.contract_conclusion.sub9')}</p>
      <p>{t('privacyPolicy.contract_conclusion.paragraph2')}</p>
      <p>{t('privacyPolicy.contract_conclusion.paragraph3')}</p>
      <p>{t('privacyPolicy.contract_conclusion.paragraph4')}</p>

      <h3>{t('privacyPolicy.order_placement_procedure.title')}</h3>
      <p>{t('privacyPolicy.order_placement_procedure.paragraph1')}</p>
      <p>{t('privacyPolicy.order_placement_procedure.paragraph2')}</p>

      {/* Новый заголовок для 3.3 */}
      <h4>{t('privacyPolicy.order_placement_procedure.order_creation_methods.title')}</h4>
      <p>{t('privacyPolicy.order_placement_procedure.order_creation_methods.sub1')}</p>
      <p>{t('privacyPolicy.order_placement_procedure.order_creation_methods.sub2')}</p>

      {/* Теперь это paragraph3, так как предыдущий 3.3 стал заголовком */}
      <p>{t('privacyPolicy.order_placement_procedure.paragraph3')}</p>
      <ul>
        <li>{t('privacyPolicy.order_placement_procedure.list1')}</li>
        <li>{t('privacyPolicy.order_placement_procedure.list2')}</li>
        <li>{t('privacyPolicy.order_placement_procedure.list3')}</li>
        <li>{t('privacyPolicy.order_placement_procedure.list4')}</li>
        <li>{t('privacyPolicy.order_placement_procedure.list5')}</li>
      </ul>
      <p>{t('privacyPolicy.order_placement_procedure.paragraph4')}</p> {/* Бывший paragraph5 */}
      <p>{t('privacyPolicy.order_placement_procedure.paragraph5')}</p> {/* Бывший paragraph6 */}
      <p>{t('privacyPolicy.order_placement_procedure.paragraph6')}</p> {/* Бывший paragraph7 */}
      <p>{t('privacyPolicy.order_placement_procedure.paragraph7')}</p> {/* Бывший paragraph8 */}
      <p>{t('privacyPolicy.order_placement_procedure.paragraph8')}</p> {/* Бывший paragraph9 */}
      <p>{t('privacyPolicy.order_placement_procedure.paragraph9')}</p> {/* Бывший paragraph10 */}
      <p>{t('privacyPolicy.order_placement_procedure.paragraph10')}</p> {/* Бывший paragraph11 */}

      <h3>{t('privacyPolicy.rights_obligations.title')}</h3>
      <h4>{t('privacyPolicy.rights_obligations.seller_obligations.title')}</h4>
      <p>{t('privacyPolicy.rights_obligations.seller_obligations.sub1')}</p>
      <p>{t('privacyPolicy.rights_obligations.seller_obligations.sub2')}</p>
      <p>{t('privacyPolicy.rights_obligations.seller_obligations.sub3')}</p>
      <p>{t('privacyPolicy.rights_obligations.seller_obligations.sub4')}</p>
      <h4>{t('privacyPolicy.rights_obligations.seller_rights.title')}</h4>
      <p>{t('privacyPolicy.rights_obligations.seller_rights.sub1')}</p>
      <p>{t('privacyPolicy.rights_obligations.seller_rights.sub2')}</p>
      <p>{t('privacyPolicy.rights_obligations.seller_rights.sub3')}</p>
      <p>{t('privacyPolicy.rights_obligations.seller_rights.sub4')}</p>
      <p>{t('privacyPolicy.rights_obligations.seller_rights.sub5')}</p>
      <p>{t('privacyPolicy.rights_obligations.seller_rights.sub6')}</p>
      <p>{t('privacyPolicy.rights_obligations.seller_rights.sub7')}</p>
      <p>{t('privacyPolicy.rights_obligations.seller_rights.sub8')}</p>
      <h4>{t('privacyPolicy.rights_obligations.buyer_obligations.title')}</h4>
      <p>{t('privacyPolicy.rights_obligations.buyer_obligations.sub1')}</p>
      <p>{t('privacyPolicy.rights_obligations.buyer_obligations.sub2')}</p>
      <p>{t('privacyPolicy.rights_obligations.buyer_obligations.sub3')}</p>
      <p>{t('privacyPolicy.rights_obligations.buyer_obligations.sub4')}</p>
      <p>{t('privacyPolicy.rights_obligations.buyer_obligations.sub5')}</p>
      <h4>{t('privacyPolicy.rights_obligations.buyer_rights.title')}</h4>
      <p>{t('privacyPolicy.rights_obligations.buyer_rights.sub1')}</p>
      <p>{t('privacyPolicy.rights_obligations.buyer_rights.sub2')}</p>
      <p>{t('privacyPolicy.rights_obligations.buyer_rights.sub3')}</p>
      <p>{t('privacyPolicy.rights_obligations.buyer_rights.sub4')}</p>
      <ul>
        <li>{t('privacyPolicy.rights_obligations.buyer_rights.list1')}</li>
        <li>{t('privacyPolicy.rights_obligations.buyer_rights.list2')}</li>
        <li>{t('privacyPolicy.rights_obligations.buyer_rights.list3')}</li>
        <li>{t('privacyPolicy.rights_obligations.buyer_rights.list4')}</li>
      </ul>

      <h3>{t('privacyPolicy.price_payment.title')}</h3>
      <p>{t('privacyPolicy.price_payment.paragraph1')}</p>
      <p>{t('privacyPolicy.price_payment.paragraph2')}</p>
      <p>{t('privacyPolicy.price_payment.paragraph3')}</p>
      <p>{t('privacyPolicy.price_payment.paragraph4')}</p>
      <p>{t('privacyPolicy.price_payment.sub1')}</p>
      <p>{t('privacyPolicy.price_payment.sub2')}</p>
      <p>{t('privacyPolicy.price_payment.sub3')}</p>
      <p>{t('privacyPolicy.price_payment.sub4')}</p>
      <p>{t('privacyPolicy.price_payment.sub5')}</p>
      <p>{t('privacyPolicy.price_payment.sub6')}</p>
      <p>{t('privacyPolicy.price_payment.paragraph5')}</p>
      <p>{t('privacyPolicy.price_payment.paragraph6')}</p>
      <p>{t('privacyPolicy.price_payment.paragraph7')}</p>
      <p>{t('privacyPolicy.price_payment.paragraph8')}</p>

      <h3>{t('privacyPolicy.goods_transfer.title')}</h3>
      <p>{t('privacyPolicy.goods_transfer.paragraph1')}</p>
      <p>{t('privacyPolicy.goods_transfer.paragraph2')}</p>
      <p>{t('privacyPolicy.goods_transfer.paragraph3')}</p>
      <p>{t('privacyPolicy.goods_transfer.paragraph4')}</p>
      <p>{t('privacyPolicy.goods_transfer.paragraph5')}</p>
      <p>{t('privacyPolicy.goods_transfer.sub1')}</p>
      <p>{t('privacyPolicy.goods_transfer.sub2')}</p>
      <p>{t('privacyPolicy.goods_transfer.sub3')}</p>
      <p>{t('privacyPolicy.goods_transfer.sub4')}</p>
      <p>{t('privacyPolicy.goods_transfer.paragraph6')}</p>
      <p>{t('privacyPolicy.goods_transfer.sub5')}</p>
      <p>{t('privacyPolicy.goods_transfer.sub6')}</p>
      <p>{t('privacyPolicy.goods_transfer.sub7')}</p>
      <p>{t('privacyPolicy.goods_transfer.sub8')}</p>
      <p>{t('privacyPolicy.goods_transfer.paragraph7')}</p>
      <p>{t('privacyPolicy.goods_transfer.paragraph8')}</p>

      <h3>{t('privacyPolicy.goods_acceptance.title')}</h3>
      <p>{t('privacyPolicy.goods_acceptance.paragraph1')}</p>
      <p>{t('privacyPolicy.goods_acceptance.sub1')}</p>
      <p>{t('privacyPolicy.goods_acceptance.sub2')}</p>
      <p>{t('privacyPolicy.goods_acceptance.sub3')}</p>
      <p>{t('privacyPolicy.goods_acceptance.sub4')}</p>
      <p>{t('privacyPolicy.goods_acceptance.sub5')}</p>

      <h3>{t('privacyPolicy.liability.title')}</h3>
      <p>{t('privacyPolicy.liability.paragraph1')}</p>
      <p>{t('privacyPolicy.liability.sub1')}</p>
      <p>{t('privacyPolicy.liability.sub2')}</p>
      <p>{t('privacyPolicy.liability.paragraph2')}</p>
      <p>{t('privacyPolicy.liability.paragraph3')}</p>
      <p>{t('privacyPolicy.liability.paragraph4')}</p>

      <h3>{t('privacyPolicy.claims_disputes.title')}</h3>
      <p>{t('privacyPolicy.claims_disputes.paragraph1')}</p>
      <p>{t('privacyPolicy.claims_disputes.paragraph2')}</p>
      <p>{t('privacyPolicy.claims_disputes.paragraph3')}</p>
      <p>{t('privacyPolicy.claims_disputes.paragraph4')}</p>
      <p>{t('privacyPolicy.claims_disputes.paragraph5')}</p>
      <p>{t('privacyPolicy.claims_disputes.paragraph6')}</p>
      <p>{t('privacyPolicy.claims_disputes.paragraph7')}</p>
      <p>{t('privacyPolicy.claims_disputes.paragraph8')}</p>
      <p>{t('privacyPolicy.claims_disputes.paragraph9')}</p>
      <p>{t('privacyPolicy.claims_disputes.paragraph10')}</p>
      <p>{t('privacyPolicy.claims_disputes.paragraph11')}</p>

      <h3>{t('privacyPolicy.confidentiality_info_protection.title')}</h3>
      <p>{t('privacyPolicy.confidentiality_info_protection.paragraph1')}</p>
      <p>{t('privacyPolicy.confidentiality_info_protection.paragraph2')}</p>
      <p>{t('privacyPolicy.confidentiality_info_protection.sub1')}</p>
      <p>{t('privacyPolicy.confidentiality_info_protection.sub2')}</p>
      <p>{t('privacyPolicy.confidentiality_info_protection.paragraph3')}</p>
      <p>{t('privacyPolicy.confidentiality_info_protection.paragraph4')}</p>
      <p>{t('privacyPolicy.confidentiality_info_protection.paragraph5')}</p>
      <p>{t('privacyPolicy.confidentiality_info_protection.paragraph6')}</p>

      {/* New section for data processing consent */}
      <h3>{t('privacyPolicy.dataProcessingConsent.title')}</h3>
      <p>{t('privacyPolicy.dataProcessingConsent.paragraph1')}</p>

      <h4>{t('privacyPolicy.dataProcessingConsent.banksAndMFOs.title')}</h4>
      <ol>
        <li>{t('privacyPolicy.dataProcessingConsent.banksAndMFOs.bank1')}</li>
        <li>{t('privacyPolicy.dataProcessingConsent.banksAndMFOs.bank2')}</li>
        <li>{t('privacyPolicy.dataProcessingConsent.banksAndMFOs.bank3')}</li>
        <li>{t('privacyPolicy.dataProcessingConsent.banksAndMFOs.mfo1')}</li>
        <li>{t('privacyPolicy.dataProcessingConsent.banksAndMFOs.bank4')}</li>
        <li>{t('privacyPolicy.dataProcessingConsent.banksAndMFOs.bank5')}</li>
        <li>{t('privacyPolicy.dataProcessingConsent.banksAndMFOs.bank6')}</li>
        <li>{t('privacyPolicy.dataProcessingConsent.banksAndMFOs.bank7')}</li>
        <li>{t('privacyPolicy.dataProcessingConsent.banksAndMFOs.mfo2')}</li>
      </ol>

      <h4>{t('privacyPolicy.dataProcessingConsent.creditBureaus.title')}</h4>
      <ol>
        <li>{t('privacyPolicy.dataProcessingConsent.creditBureaus.bureau1')}</li>
        <li>{t('privacyPolicy.dataProcessingConsent.creditBureaus.bureau2')}</li>
      </ol>

      <h4>{t('privacyPolicy.dataProcessingConsent.infoCovered.title')}</h4>
      <ul>
        <li>{t('privacyPolicy.dataProcessingConsent.infoCovered.item1')}</li>
        <li>{t('privacyPolicy.dataProcessingConsent.infoCovered.item2')}</li>
        <li>{t('privacyPolicy.dataProcessingConsent.infoCovered.item3')}</li>
        <li>{t('privacyPolicy.dataProcessingConsent.infoCovered.item4')}</li>
        <li>{t('privacyPolicy.dataProcessingConsent.infoCovered.item5')}</li>
        <li>{t('privacyPolicy.dataProcessingConsent.infoCovered.item6')}</li>
        <li>{t('privacyPolicy.dataProcessingConsent.infoCovered.item7')}</li>
      </ul>

      <h4>{t('privacyPolicy.dataProcessingConsent.purposes.title')}</h4>
      <ul>
        <li>{t('privacyPolicy.dataProcessingConsent.purposes.purpose1')}</li>
        <li>{t('privacyPolicy.dataProcessingConsent.purposes.purpose2')}</li>
        <li>{t('privacyPolicy.dataProcessingConsent.purposes.purpose3')}</li>
        <li>{t('privacyPolicy.dataProcessingConsent.purposes.purpose4')}</li>
        <li>{t('privacyPolicy.dataProcessingConsent.purposes.purpose5')}</li>
        <li>{t('privacyPolicy.dataProcessingConsent.purposes.purpose6')}</li>
        <li>{t('privacyPolicy.dataProcessingConsent.purposes.purpose7')}</li>
        <li>{t('privacyPolicy.dataProcessingConsent.purposes.purpose8')}</li>
      </ul>

      <h4>{t('privacyPolicy.dataProcessingConsent.scopeOfConsent.title')}</h4>
      <ul>
        <li>{t('privacyPolicy.dataProcessingConsent.scopeOfConsent.item1')}</li>
        <li>{t('privacyPolicy.dataProcessingConsent.scopeOfConsent.item2')}</li>
      </ul>

      <h4>{t('privacyPolicy.dataProcessingConsent.additionalActions.title')}</h4>
      <ul>
        <li>{t('privacyPolicy.dataProcessingConsent.additionalActions.action1')}</li>
        <li>{t('privacyPolicy.dataProcessingConsent.additionalActions.action2')}</li>
        <li>{t('privacyPolicy.dataProcessingConsent.additionalActions.action3')}</li>
        <li>{t('privacyPolicy.dataProcessingConsent.additionalActions.action4')}</li>
        <li>{t('privacyPolicy.dataProcessingConsent.additionalActions.action5')}</li>
        <li>{t('privacyPolicy.dataProcessingConsent.additionalActions.action6')}</li>
        <li>{t('privacyPolicy.dataProcessingConsent.additionalActions.action7')}</li>
      </ul>
      <p>{t('privacyPolicy.dataProcessingConsent.gpcTransfer')}</p>
      <p>{t('privacyPolicy.dataProcessingConsent.consentDuration')}</p>
      <p>{t('privacyPolicy.dataProcessingConsent.withdrawalProcedure')}</p>
      <p>{t('privacyPolicy.dataProcessingConsent.withdrawalException')}</p>

    </PrivacyPolicyContainer>
  );
};

export default PrivacyPolicyPage;