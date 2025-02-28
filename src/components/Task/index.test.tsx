import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../style/theme';
import Task from './index';

jest.mock('@dnd-kit/core', () => ({
  useDraggable: () => ({
    attributes: {},
    listeners: {},
    setNodeRef: jest.fn(),
    transform: null,
  }),
}));

describe('Task Component', () => {
  it('renders task title and responsable', () => {
    render(
      <ThemeProvider theme={theme}>
        <Task id="1" title="Test Task" responsable="John Doe" />
      </ThemeProvider>
    );

    expect(screen.getByText('Test Task')).toBeInTheDocument();
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });
});
