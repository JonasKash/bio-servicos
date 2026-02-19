import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #000;
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.lg}`};
  text-align: center;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Text = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-size: 0.9rem;
  margin: 0;
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <Text>
        &copy; {new Date().getFullYear()} <Highlight>BioSmart</Highlight>. Todos os direitos reservados.
      </Text>
      <Text style={{ fontSize: '0.8rem', marginTop: '0.5rem', opacity: 0.7 }}>
        T.I.F.A - Tráfego Inteligente e Funis de Atração
      </Text>
    </FooterContainer>
  );
};
