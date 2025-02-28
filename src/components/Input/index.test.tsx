import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import Input from './index';

const theme = {
  colors: {
    primary: '#000',
    white: '#fff',
    gray: '#ccc',
    black: '#000',
    orange: '#ff6600',
  },
  fontSizes: {
    small: '12px',
    medium: '16px',
    large: '20px',
  },
};

test('renders input with placeholder', () => {
  render(
    <ThemeProvider theme={theme}>
      <Input name="test" placeholder="Enter text" />
    </ThemeProvider>
  );
  const inputElement = screen.getByPlaceholderText('Enter text');
  expect(inputElement).toBeInTheDocument();
});

test('renders error message when error prop is provided', () => {
  render(
    <ThemeProvider theme={theme}>
      <Input
        name="test"
        placeholder="Enter text"
        errors={{ message: 'Error occurred' } as any}
      />
    </ThemeProvider>
  );
  expect(screen.getByText('Error occurred')).toBeInTheDocument();
});
