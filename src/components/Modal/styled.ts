import { shade } from 'polished';
import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: absolute;
  right: 20px;
  bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  background: ${({ theme }) => theme.colors.white};
  min-width: 400px;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`;

export const DividerContainer = styled.div`
  width: 100%;
  padding: 0 1rem;
`;

export const Divider = styled.hr`
  width: 100%;
  padding-left: 1rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  font-weight: 400;
  margin: 0;
`;

export const CloseButton = styled.button`
  display: grid;
  place-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    color: ${({ theme }) => shade(0.3, theme.colors.black)};
  }
`;

export const ModalBody = styled.div`
  padding: 1rem;
`;

export const ModalFooter = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
`;