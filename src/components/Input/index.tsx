import React, { InputHTMLAttributes } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { IconType } from 'react-icons';
import {
  ErrorContainer,
  IconContainer,
  InputContainer,
  InputStyled,
} from './styled';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register: UseFormRegister<any>;
  placeholder?: string;
  type?: string;
  Icon?: IconType;
  small?: boolean;
  errors?: FieldError;
}

const Input: React.FC<InputProps> = ({
  name,
  register,
  placeholder = '',
  type = 'text',
  Icon,
  small,
  errors,
  ...rest
}) => {
  return (
    <div>
      <InputContainer $small={small} $isError={!!errors}>
        {Icon && (
          <IconContainer>
            <Icon size={20} />
          </IconContainer>
        )}
        <InputStyled
          {...register(name)}
          placeholder={placeholder}
          type={type}
          {...rest}
        />
      </InputContainer>
      {errors?.message && <ErrorContainer>{errors.message}</ErrorContainer>}
    </div>
  );
};

export default Input;
