import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../style/theme';
import SelectComp, { IOption } from './index';

jest.mock('react-hook-form', () => ({
  useController: () => ({
    field: {
      value: '',
      onChange: jest.fn(),
      onBlur: jest.fn(),
      name: 'test',
      ref: jest.fn(),
    },
  }),
  Control: () => ({}),
  FieldError: {},
}));

describe('SelectComp Component', () => {
  const options: IOption[] = [
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ];

  it('renders with the given placeholder', () => {
    render(
      <ThemeProvider theme={theme}>
        <SelectComp
          name="testSelect"
          options={options}
          placeholder="Select an option"
          isClearable
        />
      </ThemeProvider>
    );

    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });
});
