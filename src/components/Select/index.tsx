import React, { useMemo } from 'react';
import { Control, FieldError, useController } from 'react-hook-form';
import Select, {
  Props as ReactSelectProps,
  StylesConfig,
  ThemeConfig,
} from 'react-select';
import theme from '../../style/theme';
import { ErrorContainer } from './styled';

export interface IOption {
  value: string | boolean | number;
  label: string;
}

interface ISelectComp extends ReactSelectProps {
  options: IOption[];
  onChangeValue?: (value: IOption | null) => void;
  placeholder?: string;
  isClearable?: boolean;
  control?: Control<any>;
  errors?: FieldError;
  name: string;
}

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

const SelectComp: React.FC<ISelectComp> = ({
  options,
  onChangeValue,
  placeholder = 'Selecione...',
  isClearable = false,
  onChange,
  control,
  errors,
  name,
}) => {
  const {
    field: { value, onChange: controlOnChange, ...restSelectField },
  } = useController({ name, control });

  const defaultStylesMemo = useMemo(() => {
    if (!errors) return defaultStyles;

    return {
      ...defaultStyles,
      control: (provided) => ({
        ...provided,
        borderColor: theme.colors.error,
      }),
    };
  }, [errors]);

  return (
    <div>
      <Select
        options={options}
        value={options.find((option) => option.value === value)}
        placeholder={placeholder}
        isClearable={isClearable}
        styles={defaultStylesMemo}
        theme={defaultTheme}
        onChange={(option: any, _: any) => {
          controlOnChange(option ? option.value : null);
          if (onChange && onChangeValue) {
            onChangeValue(option);
          }
        }}
        {...restSelectField}
      />
      {errors?.message && <ErrorContainer>{errors.message}</ErrorContainer>}
    </div>
  );
};

export default SelectComp;
