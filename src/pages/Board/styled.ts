import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 2rem 3rem;
  padding-top: 3rem;
  gap: 1rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.xxl};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 400;
`;

export const BoardContent = styled.div`
  flex: 1;
  display: flex;
  gap: 1rem;
  width: 100%;
`;