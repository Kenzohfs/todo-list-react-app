import '@testing-library/jest-dom';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../style/theme';
import CreateTaskForm from './index';

jest.mock('../../hooks/status', () => ({
  useStatus: () => ({
    GetStatus: () => ({
      data: [{ id: 'status1', description: 'Em Aberto' }],
      isLoading: false,
      error: null,
      refetch: jest.fn(),
    }),
  }),
}));

const mockCreateTask = jest.fn().mockResolvedValue({});
jest.mock('../../hooks/task', () => ({
  useTask: () => ({
    CreateTask: mockCreateTask,
  }),
}));

const mockAddToast = jest.fn();
jest.mock('../../hooks/toast', () => ({
  useToast: () => ({
    addToast: mockAddToast,
  }),
}));

describe('CreateTaskForm Component', () => {
  const onSuccess = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('mostra erro de validação quando o formulário é submetido vazio', async () => {
    render(
      <ThemeProvider theme={theme}>
        <CreateTaskForm onSuccess={onSuccess} />
      </ThemeProvider>
    );

    const form = screen.getByTestId('task-form');
    fireEvent.submit(form);

    await waitFor(() => {
      expect(mockAddToast).toHaveBeenCalledWith({
        type: 'error',
        description: 'Por favor, preencha todos os campos corretamente',
      });
    });

    expect(mockCreateTask).not.toHaveBeenCalled();
    expect(onSuccess).not.toHaveBeenCalled();
  });
});
