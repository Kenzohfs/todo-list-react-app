import { shade } from "polished";
import styled, { css } from "styled-components";

interface ButtonProps {
  small?: boolean;
  disabled?: boolean;
}

export const Container = styled.button<ButtonProps>`
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

  ${({ small }) => small && css`
    font-size: ${({ theme }) => theme.fontSizes.small};
    padding: 7px 12px;
  `}
`;