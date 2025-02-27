import React from 'react';
import Select, { SingleValue, StylesConfig, ThemeConfig } from 'react-select';
import theme from '../../style/theme';

export interface IOption {
  value: string;
  label: string;
}

interface ISelectComp {
  options: IOption[];
  value?: IOption | null;
  onChange?: (value: IOption | null) => void;
  placeholder?: string;
  isClearable?: boolean;
}

const SelectComp: React.FC<ISelectComp> = ({
  options,
  value,
  onChange,
  placeholder = 'Selecione...',
  isClearable = false,
}) => {
  const handleChange = (selectedOption: SingleValue<IOption>) => {
    if (onChange) {
      onChange(selectedOption || null);
    }
  };

  const defaultStyles: StylesConfig<IOption, false> = {
    control: (provided) => ({
      ...provided,
      minHeight: '43px',
      borderColor: '#ccc',
      borderRadius: '8px',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#aaa',
      },
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#999',
    }),
  };

  const defaultTheme: ThemeConfig = (selectTheme) => ({
    ...selectTheme,
    borderRadius: 8,
    colors: {
      ...selectTheme.colors,
      primary25: theme.colors.white,
      primary: theme.colors.orange,
    },
  });

  return (
    <Select
      options={options}
      value={value}
      onChange={handleChange}
      placeholder={placeholder}
      isClearable={isClearable}
      styles={defaultStyles}
      theme={defaultTheme}
    />
  );
};

export default SelectComp;
