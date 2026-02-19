import styled from 'styled-components';
import { Button } from './Button';
import { motion } from 'framer-motion';
import heroBg from '../assets/img2.webp';

const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.lg}`};
  background-color: ${({ theme }) => theme.colors.background};
  background-image: url(${heroBg});
  background-position: top center;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%);
    z-index: 0;
  }
`;

const Content = styled(motion.div)`
  position: relative;
  z-index: 1;
  max-width: 1000px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Badge = styled.span`
  background: rgba(140, 255, 98, 0.1);
  color: ${({ theme }) => theme.colors.primary};
  padding: 0.5rem 1.5rem;
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: clamp(2rem, 5vw, 3.5rem);
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.1;
  letter-spacing: -1.5px;
  font-weight: 400;
  text-transform: uppercase;
  max-width: 900px;
  
  span {
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.gradientGold};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

const Subtitle = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: clamp(1rem, 1.8vw, 1.25rem);
  color: ${({ theme }) => theme.colors.text};
  font-weight: 300;
  line-height: 1.6;
  max-width: 850px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  p {
    margin: 0;
  }

  b {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
`;

export const Hero = () => {
  return (
    <HeroSection id="inicio">
      <Content
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Badge>Link na Bio Inteligente</Badge>
        <Title>
          Veja EXATAMENTE Quantos Visitantes da Sua Bio do Instagram se Tornam <span>Clientes Reais</span> — Em Tempo Real
        </Title>
        <Subtitle>
          <p>Você tem Instagram com visitas, mas não sabe se estão virando clientes.</p>
          <p>Cria conteúdo, posta regularmente, recebe curtidas. Mas não consegue converter visitante em cliente pagante.</p>
          <p>Não sabe quantas pessoas clicaram no WhatsApp. Não sabe se sua bio está atraindo o cliente certo. Não sabe se tudo isso vale a pena.</p>
          <p>A verdade: sua bio é a última chance antes da venda. É onde o visitante decide se vira cliente ou sai para sempre.</p>
          <p>E sabe o problema? Você está operando no <Highlight>ACHISMO</Highlight>.</p>
          <p>Mas e se existisse um método que mostra, em tempo real, quantas pessoas visitaram sua bio, quantas clicaram, e sua taxa real de conversão?</p>
          <p><b>Sem pagar R$3.000/mês. Sem ferramentas complicadas. Implementável em 30 minutos.</b></p>
        </Subtitle>
        <Button
          as="a"
          href="https://wa.me/5582987611611?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20link%20na%20bio."
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          style={{ fontSize: '20px', padding: '15px 40px', fontWeight: 700, color: '#000000', marginTop: '20px' }}
        >
          QUERO SABER MAIS!
        </Button>
      </Content>
    </HeroSection>
  );
};
