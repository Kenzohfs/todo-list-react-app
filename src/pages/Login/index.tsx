import { yupResolver } from '@hookform/resolvers/yup';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import { ILoginData, LoginSchema } from '../../interfaces/IAuth';
import PrivatePaths from '../../routes/privatePaths';
import PublicPaths from '../../routes/publicPaths';
import {
  Container,
  Content,
  Divider,
  DividerContainer,
  DividerText,
  Form,
  LinkStyled,
  Modal,
  RegisterText,
  Title,
  Welcome,
} from './styled';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginData>({
    resolver: yupResolver(LoginSchema),
  });

  const handleValidationError = useCallback(() => {
    addToast({
      type: 'error',
      description: 'Por favor, preencha todos os campos corretamente',
    });
  }, [addToast]);

  const onSubmit = handleSubmit(async (data: ILoginData) => {
    await signIn(data);
    navigate(PrivatePaths.HOME);
  }, handleValidationError);

  return (
    <Container>
      <Title>CliniPlanner</Title>
      <Content>
        <Modal>
          <Welcome>Que bom que você voltou</Welcome>
          <Form id="login-form" onSubmit={onSubmit}>
            <Input
              register={register}
              name="email"
              errors={errors.email}
              placeholder="Endereço de email"
              autoComplete="username"
            />
            <Input
              register={register}
              name="password"
              errors={errors.password}
              placeholder="Senha"
              type="password"
              autoComplete="current-password"
            />

            <Button form="login-form" type="submit">
              Entrar
            </Button>
          </Form>

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
