import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#f7fafc',
        color: '#2d3748', 
        fontFamily: 'Arial, sans-serif',
      },
      h1: {
        fontSize: '2xl',
      },
      '.chat-container': {
        display: 'flex',
        height: '100vh',
      },
      '.sidebar': {
        width: '250px',
        borderRight: '1px solid #e2e8f0',
      },
      '.chat-room': {
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        padding: '16px',
      },
      '.message': {
        borderRadius: '8px',
        marginBottom: '10px',
        padding: '10px',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  colors: {
    primary: {
      100: '#EBF8FF',
      300: '#90CDF4',
      500: '#3182CE',
      700: '#2B6CB0',
    },
  },
});

export default theme;
