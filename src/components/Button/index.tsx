import React, { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import { Container, IconContainer } from './styled';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  small?: boolean;
  secondary?: boolean;
  Icon?: IconType;
}

const Button: React.FC<IButtonProps> = ({
  small,
  secondary,
  children,
  Icon,
  ...rest
}) => {
  return (
    <Container {...rest} $small={small} $secondary={secondary}>
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
