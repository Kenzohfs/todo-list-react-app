import { yupResolver } from '@hookform/resolvers/yup';
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useAuth } from '../../hooks/auth';
import { useToast } from '../../hooks/toast';
import { IRegisterData, RegisterSchema } from '../../interfaces/IAuth';
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
  LoginText,
  Modal,
  Title,
  Welcome,
} from './styled';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const { register: authRegister, signInWithGoogle } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterData>({
    resolver: yupResolver(RegisterSchema),
  });

  const handleValidationError = useCallback(() => {
    addToast({
      type: 'error',
      description: 'Por favor, preencha todos os campos corretamente',
    });
  }, [addToast]);

  const onSubmit = handleSubmit(async (data: IRegisterData) => {
    await authRegister(data);
    navigate(PublicPaths.LOGIN);
  }, handleValidationError);

  const onGoogleClick = async () => {
    await signInWithGoogle();
    navigate(PrivatePaths.HOME);
  };

  return (
    <Container>
      <Title>CliniPlanner</Title>
      <Content>
        <Modal>
          <Welcome>Seja bem vindo!</Welcome>
          <Form id="register-form" onSubmit={onSubmit}>
            <Input
              name="name"
              register={register}
              placeholder="Nome"
              errors={errors.name}
            />
            <Input
              name="email"
              register={register}
              placeholder="Endereço de email"
              errors={errors.email}
              autoComplete="username"
            />
            <Input
              name="password"
              register={register}
              placeholder="Senha"
              errors={errors.password}
              type="password"
              autoComplete="current-password"
            />

            <Button form="register-form" type="submit">
              Cadastrar
            </Button>
          </Form>

          <LoginText>
            Já possui uma conta?{' '}
            <LinkStyled to={PublicPaths.LOGIN}>Entrar</LinkStyled>
          </LoginText>

          <DividerContainer>
            <Divider />
            <DividerText>ou</DividerText>
            <Divider />
          </DividerContainer>

          <Button Icon={FaGoogle} secondary onClick={onGoogleClick}>
            Continuar com o Google
          </Button>
        </Modal>
      </Content>
    </Container>
  );
};

export default Register;
