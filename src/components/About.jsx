import styled from 'styled-components';
import { motion } from 'framer-motion';
import authorImg from '../assets/img4.webp'; // Assuming img4 is the author image based on size

const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.lg}`};
  background-color: ${({ theme }) => theme.colors.surface};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const ImageContainer = styled(motion.div)`
  position: relative;
  
  img {
    width: 100%;
    max-width: 500px;
    border-radius: 20px;
    box-shadow: -20px 20px 0px ${({ theme }) => theme.colors.primary};
    margin: 0 auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    order: 1; // Show image after text on mobile if desired, or keep as is.
    img {
        box-shadow: -10px 10px 0px ${({ theme }) => theme.colors.primary};
    }
  }
`;

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Label = styled.span`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: 0.9rem;
`;

const Title = styled.h2`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: 3rem;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  line-height: 1.1;
  margin: 0;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export const About = () => {
  return (
    <Section>
      <Container>
        <ImageContainer
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img src={authorImg} alt="BioSmart" />
        </ImageContainer>

        <Content
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Label>O Mentor</Label>
          <Title>BioSmart</Title>
          <Text>
            Especialista em Escala e Estruturação de Negócios Digitais.
          </Text>
          <Text>
            Depois de testar dezenas de estratégias e investir alto em tráfego, descobri que o segredo não está apenas em atrair leads, mas em criar um sistema inteligente que converte automaticamente.
          </Text>
          <Text>
            O Método T.I.F.A é a consolidação de anos de experiência, unindo a precisão da Inteligência Artificial com funis de alta conversão. Meu objetivo é fazer você parar de perder dinheiro com tráfego ruim e começar a construir um negócio sólido e escalável.
          </Text>
        </Content>
      </Container>
    </Section>
  );
};
