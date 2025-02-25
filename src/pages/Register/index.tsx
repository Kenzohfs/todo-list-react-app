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
  LoginText,
  Modal,
  Title,
  Welcome,
} from './styled';

const Register: React.FC = () => {
  return (
    <Container>
      <Title>CliniPlanner</Title>
      <Content>
        <Modal>
          <Welcome>Seja bem vindo!</Welcome>
          <Input placeholder="Nome" />
          <Input placeholder="Endereço de email" />
          <Input placeholder="Senha" type="password" />
          <Button>Entrar</Button>

          <LoginText>
            Já possui uma conta?{' '}
            <LinkStyled to={PublicPaths.LOGIN}>Entrar</LinkStyled>
          </LoginText>

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

export default Register;
