import styled, { css } from 'styled-components';

const variants = {
    primary: css`
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.background};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    &:hover {
      background: ${({ theme }) => theme.colors.accent};
      border-color: ${({ theme }) => theme.colors.accent};
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
    }
  `,
    secondary: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    &:hover {
      background: rgba(212, 175, 55, 0.1);
      transform: translateY(-2px);
    }
  `,
    outline: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.text};
    border: 1px solid ${({ theme }) => theme.colors.border};
    &:hover {
      border-color: ${({ theme }) => theme.colors.text};
      background: rgba(255, 255, 255, 0.05);
    }
  `
};

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: 4px; /* Slightly rounded or sharp for premium feel */
  font-family: ${({ theme }) => theme.typography.fontFamily};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.standard};
  font-size: 0.9rem;
  
  ${({ variant = 'primary' }) => variants[variant]}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;
