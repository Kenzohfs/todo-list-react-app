import React, { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import { Container, IconContainer } from './styled';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  small?: boolean;
  secondary?: boolean;
  Icon?: IconType;
}

const Button: React.FC<ButtonProps> = ({
  small,
  secondary = false,
  children,
  Icon,
  ...rest
}) => {
  return (
    <Container small={small} secondary={secondary} {...rest}>
      {Icon && (
        <IconContainer>
          <Icon size={20} />
        </IconContainer>
      )}
      {children}
    </Container>
  );
};

export default Button;
