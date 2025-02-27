import { lighten } from "polished";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  padding: 2rem 3rem;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  color: ${({ theme }) => theme.colors.orange};
  font-weight: 400;
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 48px; 
`;

export const Modal = styled.div`
  display: flex;
  max-width: 300px;
  width: 30%;
  flex-direction: column;
  gap: 1rem;
`;

export const Welcome = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 400;
  text-align: center;
`;

export const LoginText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xsm};
  color: ${({ theme }) => theme.colors.black};
  text-align: center;
`;

export const LinkStyled = styled(Link)` 
  font-size: ${({ theme }) => theme.fontSizes.xsm};
  color: ${({ theme }) => theme.colors.orange};
  text-align: center;
  cursor: pointer;
`;

export const DividerContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 1rem;
`;

export const Divider = styled.hr`
  flex: 1;
  border: none;
  border-top: 1px solid ${({ theme }) => lighten(0.7, theme.colors.black)};
`;

export const DividerText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.default};
  color: ${({ theme }) => lighten(0.3, theme.colors.black)};
  text-transform: uppercase;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;