import styled from "styled-components";

export const ErrorContainer = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xsm};
  color: ${({ theme }) => theme.colors.error};
`;