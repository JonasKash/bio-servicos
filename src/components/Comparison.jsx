import styled from 'styled-components';
import { motion } from 'framer-motion';
import { X, Check } from 'lucide-react';
import comparisonBg from '../assets/img8_1.webp';
import validationImg from '../assets/Captura-de-Tela-2025-09-04-as-11.10.05.png';
import scaleImg from '../assets/Captura-de-Tela-2025-09-04-as-11.09.40.png';

const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.lg}`};
  background-color: #FFFFFF;
  background-image: url(${comparisonBg});
  background-position: -23px -10px;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
     background-position: center;
     background-size: cover;
  }
`;

const Title = styled.h2`
  text-align: center;
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: #000000;
  text-transform: uppercase;
  letter-spacing: -1px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const Column = styled(motion.div)`
  background: ${({ isPositive }) =>
        isPositive ? '#F4FFF0' : '#FFFFFF'};
  border: 1px solid ${({ isPositive }) =>
        isPositive ? '#6BB650' : '#2E2E2E'};
  border-radius: 12px;
  padding: ${({ theme }) => theme.spacing.lg};
  position: relative;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ColumnHeader = styled.h3`
  color: ${({ isPositive }) =>
        isPositive ? '#6BB650' : '#E4766E'};
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border-bottom: 1px solid ${({ isPositive }) =>
        isPositive ? 'rgba(107, 182, 80, 0.2)' : 'rgba(228, 118, 110, 0.2)'};
  padding-bottom: 1rem;
  text-transform: uppercase;
`;

const StepImage = styled.img`
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 0.5rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ListItem = styled.li`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  color: ${({ isPositive }) => isPositive ? '#6BB650' : '#555555'};
  font-size: 1rem;
  font-weight: 500;

  svg {
    min-width: 20px;
    color: ${({ isPositive }) =>
        isPositive ? '#6BB650' : '#E4766E'};
    margin-top: 3px;
  }
`;

const negativePoints = [
    "Faz Tráfego frio que engole R$1.000 pra devolver R$900",
    "Funis lentos demoram semanas, sugam tempo",
    "Equipes caras exigem altos salários",
    "Resultados aleatórios te prendem em R$10.000/mês",
    "Métricas confusas te deixam cego",
    "Ofertas genéricas geram tickets baixos",
    "Concorrentes te ultrapassam"
];

const positivePoints = [
    "Compradores aquecidos, custos caem 30%-50% com I.A.",
    "Funis automáticos triplicam conversões em dias",
    "I.A. treinada comanda tudo, operação enxuta",
    "Lucro previsível mira R$30.000/semana",
    "I.A. entrega números claros e guia decisões",
    "Ofertas inteligentes multiplicam tickets",
    "Lidere o mercado, dominando o Perpétuo"
];

export const Comparison = () => {
    return (
        <Section id="comparacao">
            <Title>A Diferença é Brutal</Title>
            <Grid>
                <Column
                    isPositive={false}
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <ColumnHeader isPositive={false}>
                        <X size={24} /> Sem o T.I.F.A
                    </ColumnHeader>
                    <StepImage src={validationImg} alt="Da Validação..." />
                    <List>
                        {negativePoints.map((point, index) => (
                            <ListItem key={index} isPositive={false}>
                                <X size={16} />
                                {point}
                            </ListItem>
                        ))}
                    </List>
                </Column>

                <Column
                    isPositive={true}
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <ColumnHeader isPositive={true}>
                        <Check size={24} /> Com o T.I.F.A
                    </ColumnHeader>
                    <StepImage src={scaleImg} alt="...à escala de verdade!" />
                    <List>
                        {positivePoints.map((point, index) => (
                            <ListItem key={index} isPositive={true}>
                                <Check size={16} />
                                {point}
                            </ListItem>
                        ))}
                    </List>
                </Column>
            </Grid>
        </Section>
    );
};
