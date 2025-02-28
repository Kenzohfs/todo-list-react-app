import styled from "styled-components";

export const StatusContainer = styled.div`
  flex: 1;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.black};
  gap: 0.5rem;
  padding: 1rem;
`;

export const StatusHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 1rem;
`;

export const StatusTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 400;
`;