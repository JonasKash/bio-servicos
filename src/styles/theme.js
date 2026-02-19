export const theme = {
  colors: {
    primary: '#8CFF62', // Neon Green
    secondary: '#E4766E', // Red Accent
    background: '#000000', // Black
    surface: '#141414', // Dark Grey for cards
    text: '#FFFFFF',
    textSecondary: '#A3A3A3', // Light Grey
    textTertiary: '#919191', // Darker Grey
    accent: '#8CFF62',
    border: '#2E2E2E',
    success: '#10B981',
    error: '#EF4444',
    gradientGold: 'linear-gradient(46deg, #9D946C 45%, #D3C790 88%)',
    gradientBronze: 'linear-gradient(90deg, #9D946B 0%, #D4C891 100%)',
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    fontFamilyHeading: '"Anton", sans-serif',
    h1: {
      fontSize: 'clamp(3rem, 6vw, 57px)',
      fontWeight: 400,
      lineHeight: 1.1,
      letterSpacing: '-2.3px',
      textTransform: 'uppercase',
    },
    h2: {
      fontSize: 'clamp(2rem, 4vw, 3rem)',
      fontWeight: 400,
      lineHeight: 1.2,
      textTransform: 'uppercase',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: 600,
      lineHeight: 1.3,
    },
    body: {
      fontSize: '1rem',
      fontWeight: 400,
      lineHeight: 1.6,
    },
    button: {
      fontSize: '1rem',
      fontWeight: 700,
      textTransform: 'uppercase',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem',
    xl: '4rem',
    xxl: '8rem',
  },
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1280px',
  },
  transitions: {
    standard: '0.3s ease-in-out',
  },
};
