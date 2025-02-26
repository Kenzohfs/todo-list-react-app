import styled from "styled-components";

export const TaskContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 10px;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 5px ${({ theme }) => theme.colors.gray};
  gap: 0.5rem;
`;

export const TaskTitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 400;
`;

export const TaskFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const TaskType = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.black};
`;

export const TaskResponsable = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: ${({ theme }) => theme.colors.black};  
`;