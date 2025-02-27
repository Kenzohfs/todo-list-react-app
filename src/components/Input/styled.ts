import { lighten } from 'polished';
import styled from 'styled-components';

interface IInputContainerProps {
  $small?: boolean;
}

export const InputContainer = styled.div<IInputContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border: 1px solid ${({ theme }) => lighten(0.8, theme.colors.black)};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.black};

  ${({ $small }) => $small && `
    padding: 0.5rem 0.75rem;
  `}
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${({ theme }) => lighten(0.5, theme.colors.black)};
`;

export const InputStyled = styled.input`
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.default};
`;