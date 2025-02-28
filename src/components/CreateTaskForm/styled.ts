import styled from 'styled-components';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.small};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
`;