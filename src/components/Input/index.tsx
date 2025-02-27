import React from 'react';
import { IconType } from 'react-icons';
import { IconContainer, InputContainer, InputStyled } from './styled';

interface InputProps {
  placeholder?: string;
  type?: string;
  Icon?: IconType;
  small?: boolean;
}

const Input: React.FC<InputProps> = ({
  placeholder = '',
  type = 'text',
  Icon,
  small,
  ...rest
}) => {
  return (
    <InputContainer $small={small}>
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
