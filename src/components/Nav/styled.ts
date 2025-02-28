import styled from 'styled-components';

export const NavContainer = styled.nav`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 10px 20px;
`;

export const Item = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const LogoContainer = styled.div`
  height: 100%;
`;

export const LogoImg = styled.img`
  height: 100%;
`;

export const IconContainer = styled.div`
  height: 100%;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${({ theme }) => `1px solid ${theme.colors.black}`};
  border-radius: 50%;
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
`;
