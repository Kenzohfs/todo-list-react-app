import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../style/theme';
import Modal from './index';

describe('Modal Component', () => {
  it('deve renderizar o modal quando isOpen é true', () => {
    render(
      <ThemeProvider theme={theme}>
        <Modal isOpen={true} onClose={jest.fn()} title="Test Modal">
          <div>Modal Content</div>
        </Modal>
      </ThemeProvider>
    );

    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Modal Content')).toBeInTheDocument();
  });

  it('não deve renderizar o modal quando isOpen é false', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Modal isOpen={false} onClose={jest.fn()} title="Test Modal">
          <div>Modal Content</div>
        </Modal>
      </ThemeProvider>
    );

    expect(container.firstChild).toBeNull();
  });

  it('deve chamar onClose quando o botão de fechar é clicado', () => {
    const onClose = jest.fn();
    render(
      <ThemeProvider theme={theme}>
        <Modal isOpen={true} onClose={onClose} title="Test Modal">
          <div>Modal Content</div>
        </Modal>
      </ThemeProvider>
    );

    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);
    expect(onClose).toHaveBeenCalled();
  });
});
