import styled from 'styled-components';
import { Button } from './Button';
import { motion } from 'framer-motion';

const HeaderContainer = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(12px);
  z-index: 1000;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing.md}`};
  }
`;

const Logo = styled.div`
  font-family: ${({ theme }) => theme.typography.fontFamilyHeading};
  font-size: 1.75rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: ${({ theme }) => theme.colors.text};
  
  span {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none; // Setup mobile menu later if needed
  }
`;

const NavLink = styled.a`
  font-size: 0.95rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s;
  text-transform: uppercase;
  font-size: 0.85rem;
  letter-spacing: 0.5px;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const Header = () => {
  return (
    <HeaderContainer
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Logo>Bio<span>Smart</span></Logo>
      <Nav>
        <Button
          as="a"
          href="https://wa.me/5582987611611?text=Ol%C3%A1%2C%20quero%20saber%20mais%20sobre%20o%20link%20na%20bio."
          target="_blank"
          rel="noopener noreferrer"
          variant="primary"
          style={{ fontSize: '14px', padding: '10px 20px', fontWeight: 700, color: '#000000' }}
        >
          QUERO SABER MAIS
        </Button>
      </Nav>
    </HeaderContainer>
  );
};
