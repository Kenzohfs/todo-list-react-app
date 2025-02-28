import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../style/theme';
import ColumnStatus from './index';

jest.mock('@dnd-kit/core', () => ({
  useDroppable: () => ({
    setNodeRef: jest.fn(),
  }),
}));

describe('ColumnStatus Component', () => {
  it('deve renderizar o título e os children corretamente', () => {
    const testId = 'column-1';
    const testStatus = 'To Do';
    const childText = 'Task Example';

    render(
      <ThemeProvider theme={theme}>
        <ColumnStatus id={testId} status={testStatus}>
          <div>{childText}</div>
        </ColumnStatus>
      </ThemeProvider>
    );

    expect(screen.getByText(testStatus)).toBeInTheDocument();
    expect(screen.getByText(childText)).toBeInTheDocument();
  });
});
