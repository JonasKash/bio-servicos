import styled from 'styled-components';
import { Button } from './Button';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.lg}`};
  background-color: #000000;
  text-align: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(140, 255, 98, 0.05) 0%, rgba(0,0,0,0) 70%);
    z-index: 0;
  }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`;

const PreHeadline = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  margin-bottom: 1rem;
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

const Headline = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: 3.5rem;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 2rem;
  text-transform: uppercase;
  letter-spacing: -2px;
  font-weight: 400;

  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const OfferCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  padding: 3rem;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.5);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${({ theme }) => theme.colors.primary};
  }
`;

const PriceAnchor = styled.div`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-decoration: line-through;
  margin-bottom: 0.5rem;
  font-family: ${({ theme }) => theme.typography.fontFamily};
`;

const Price = styled.div`
  font-size: 4rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  line-height: 1;
  margin-bottom: 0.5rem;
  font-family: ${({ theme }) => theme.typography.fontFamily};
  
  span {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 400;
  }
`;

const Installments = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.1rem;
  margin-bottom: 2rem;
  font-weight: 600;
`;

const FeaturesList = styled.ul`
  text-align: left;
  max-width: 500px;
  margin: 0 auto 2.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.text};
  
  svg {
    color: ${({ theme }) => theme.colors.primary};
    flex-shrink: 0;
  }
`;

export const Pricing = () => {
  return (
    <Section id="oferta">
      <Container>
        <PreHeadline>Oferta Exclusiva</PreHeadline>
        <Headline>Entre para o <span>Futuro das Vendas</span></Headline>

        <OfferCard
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <PriceAnchor>De R$ 5.000,00 por</PriceAnchor>
          <Price>
            <span>12x de</span> R$ 199,70
          </Price>
          <Installments>ou R$ 1.997,00 à vista</Installments>

          <FeaturesList>
            <FeatureItem><CheckCircle /> Mentoria T.I.F.A Completa</FeatureItem>
            <FeatureItem><CheckCircle /> Acesso Full aos Treinamentos (10+)</FeatureItem>
            <FeatureItem><CheckCircle /> Workbook de Implementação</FeatureItem>
            <FeatureItem><CheckCircle /> Suporte no Discord 24h</FeatureItem>
            <FeatureItem><CheckCircle /> Mentoria Semanal em Grupo</FeatureItem>
          </FeaturesList>

          <Button variant="primary" style={{ width: '100%', fontSize: '23px', padding: '1.2rem', fontWeight: 700, color: '#000000' }}>
            QUERO ACESSAR AGORA
          </Button>
          <p style={{ marginTop: '1rem', fontSize: '0.9rem', color: '#666' }}>
            Garantia incondicional de 7 dias
          </p>
        </OfferCard>
      </Container>
    </Section>
  );
};
