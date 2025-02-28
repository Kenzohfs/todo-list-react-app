import styled from 'styled-components';

export const Container = styled.div`
  height: 100dvh;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const Content = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  border-top: 5px solid ${({ theme }) => theme.colors.black};
`;