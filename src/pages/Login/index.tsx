import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import Button from '../../components/Button';
import Input from '../../components/Input';
import PublicPaths from '../../routes/publicPaths';
import {
  Container,
  Content,
  Divider,
  DividerContainer,
  DividerText,
  LinkStyled,
  Modal,
  RegisterText,
  Title,
  Welcome,
} from './styled';

const Login: React.FC = () => {
  return (
    <Container>
      <Title>CliniPlanner</Title>
      <Content>
        <Modal>
          <Welcome>Que bom que você voltou</Welcome>
          <Input placeholder="Endereço de email" />
          <Input placeholder="Senha" type="password" />
          <Button>Entrar</Button>

          <RegisterText>
            Não tem uma conta?{' '}
            <LinkStyled to={PublicPaths.REGISTER}>Cadastrar</LinkStyled>
          </RegisterText>

          <DividerContainer>
            <Divider />
            <DividerText>ou</DividerText>
            <Divider />
          </DividerContainer>

          <Button Icon={FaGoogle} secondary>
            Continuar com o Google
          </Button>
        </Modal>
      </Content>
    </Container>
  );
};

export default Login;
