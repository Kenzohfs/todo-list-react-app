import React from 'react';
import { IconType } from 'react-icons';
import { IconContainer, InputContainer, InputStyled } from './styled';

interface InputProps {
  placeholder?: string;
  type?: string;
  Icon?: IconType;
}

const Input: React.FC<InputProps> = ({
  placeholder = '',
  type = 'text',
  Icon,
  ...rest
}) => {
  return (
    <InputContainer>
      {Icon && (
        <IconContainer>
          <Icon size={20} />
        </IconContainer>
      )}
      <InputStyled placeholder={placeholder} type={type} {...rest} />
    </InputContainer>
  );
};

export default Input;
