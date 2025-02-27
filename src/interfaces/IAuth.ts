import * as Yup from 'yup';

export interface ILoginData {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
}

export interface IRegisterData {
  email: string;
  password: string;
  name: string;
}

export interface IRegisterResponse {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export const RegisterSchema: Yup.ObjectSchema<IRegisterData> =
  Yup.object().shape({
    email: Yup.string().email("Email precisa ser válido").required("Email é obrigatório"),
    password: Yup.string().min(8, "Mínimo de 8 caracteres").required("Senha é obrigatória"),
    name: Yup.string().required("Nome é obrigatório"),
  })