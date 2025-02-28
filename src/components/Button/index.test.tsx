import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { IconBaseProps, IconType } from 'react-icons';
import { ThemeProvider } from 'styled-components';
import theme from '../../style/theme';
import Button from './index';

const DummyIcon: IconType = (props: IconBaseProps) => (
  <div
    data-testid="dummy-icon"
    style={{ width: props.size, height: props.size }}
  >
    Icon
  </div>
);

describe('Button Component', () => {
  it('renders children text and handles onClick', () => {
    const handleClick = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <Button onClick={handleClick}>Click Me</Button>
      </ThemeProvider>
    );

    const buttonElement = screen.getByRole('button', { name: /Click Me/i });
    expect(buttonElement).toBeInTheDocument();

    fireEvent.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('renders an icon when provided', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button Icon={DummyIcon}>With Icon</Button>
      </ThemeProvider>
    );

    expect(screen.getByTestId('dummy-icon')).toBeInTheDocument();
  });
});
