import { lighten } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; 
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 16px;
`;

export const Subtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => lighten(0.5, theme.colors.black)};
  text-align: center;
  max-width: 400px;
  margin-bottom: 24px;
`;