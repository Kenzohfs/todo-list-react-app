import React from 'react';
import { Container } from './styled';

interface ButtonProps {
  children: React.ReactNode;
  small?: boolean;
}

const Button: React.FC<ButtonProps> = ({ small, children, ...rest }) => {
  return (
    <Container small={small} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
