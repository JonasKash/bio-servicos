import styled from 'styled-components';
import { Book, Users, Video, MonitorPlay, MessageSquare, ShieldCheck } from 'lucide-react';
import featuresBg from '../assets/img5.webp';

const Section = styled.section`
  padding: ${({ theme }) => `${theme.spacing.xxl} ${theme.spacing.lg}`};
  background-color: ${({ theme }) => theme.colors.background};
  background-image: url(${featuresBg});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
`;

const Title = styled.h2`
  text-align: center;
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: 3rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  letter-spacing: -1px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 1200px;
  margin: 0 auto;
`;

const Card = styled.div`
  background: ${({ theme }) => theme.colors.surface};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: transform 0.3s, border-color 0.3s;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const Icon = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  svg {
    width: 40px;
    height: 40px;
  }
`;

const CardTitle = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 1.25rem;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 700;
  text-transform: none;
`;

const CardText = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-size: 0.95rem;
  line-height: 1.6;
`;

const Value = styled.div`
  margin-top: ${({ theme }) => theme.spacing.md};
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 600;
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const features = [
  {
    icon: <MonitorPlay />,
    title: "Mentoria T.I.F.A",
    text: "Método completo de Escala e estruturação de Perpétuo com I.A. Tráfego Inteligente e Funis Automatizados.",
    value: "R$ 2.997,00"
  },
  {
    icon: <Users />,
    title: "Mentoria Semanal",
    text: "Call todas as semanas em grupo para acelerar seus resultados.",
    value: "R$ 497,00"
  },
  {
    icon: <Video />,
    title: "Acesso Full aos Treinamentos",
    text: "Mais de 10 Treinamentos liberados para os mentorados TIFA.",
    value: "R$ 5.000,00"
  },
  {
    icon: <Book />,
    title: "Workbook de Implementação",
    text: "Checklist completo para não passar nada na sua implementação.",
    value: "R$ 197,00"
  },
  {
    icon: <MessageSquare />,
    title: "Suporte no Discord",
    text: "Acesso 24h para você tirar suas dúvidas com a comunidade e suporte.",
    value: "R$ 497,00"
  },
  {
    icon: <ShieldCheck />,
    title: "Mentoria Individual (Bônus)",
    text: "Uma call gratuita Individual comigo ou minha equipe para te ajudar no início.",
    value: "R$ 2.000,00"
  }
];

export const Features = () => {
  return (
    <Section id="metodo">
      <Title>O Que Você Vai Receber</Title>
      <Grid>
        {features.map((feature, index) => (
          <Card key={index}>
            <Icon>{feature.icon}</Icon>
            <CardTitle>{feature.title}</CardTitle>
            <CardText>{feature.text}</CardText>
            <Value>Valor: <span>{feature.value}</span></Value>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};
