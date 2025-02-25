import { lighten, shade } from "polished";
import styled, { css } from "styled-components";

interface IButtonProps {
  $small?: boolean;
  disabled?: boolean;
  $secondary?: boolean;
}

export const Container = styled.button<IButtonProps>`
  display: flex;
  gap: 1rem;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.medium};
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => shade(0.1, theme.colors.orange)};
  }

  &:active {
    background: ${({ theme }) => shade(0.2, theme.colors.orange)};
  }  
  
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
      background-color: ${({ theme }) => theme.colors.gray};
    `}

  ${({ $small }) => $small && css`
    font-size: ${({ theme }) => theme.fontSizes.small};
    padding: 7px 12px;
  `}

  ${({ $secondary }) => $secondary && css`
    background-color: ${({ theme }) => theme.colors.white};	
    color: ${({ theme }) => theme.colors.black};
    border: 1px solid ${({ theme }) => lighten(0.5, theme.colors.black)};

    &:hover {
      background: ${({ theme }) => shade(0.1, theme.colors.white)};
    }

    &:active {
      background: ${({ theme }) => shade(0.2, theme.colors.white)};
    }  
  `}
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${({ theme }) => lighten(0.5, theme.colors.black)};
`;