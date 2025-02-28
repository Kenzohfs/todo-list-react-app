import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import PrivatePaths from '../../routes/privatePaths';
import { Container, Subtitle, Title } from './styled';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <Title>Oops! Página não encontrada</Title>
      <Subtitle>
        A página que você tentou acessar não existe ou foi removida.
      </Subtitle>
      <Button onClick={() => navigate(PrivatePaths.HOME)}>
        Voltar ao Início
      </Button>
    </Container>
  );
};

export default NotFound;
