import React from 'react';
import { FaXmark } from 'react-icons/fa6';
import {
  CloseButton,
  Divider,
  DividerContainer,
  ModalBody,
  ModalContainer,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  ModalTitle,
} from './styled';

interface IModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
}) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <ModalHeader>
          <ModalTitle>{title}</ModalTitle>
          <CloseButton onClick={onClose}>
            <FaXmark size={20} />
          </CloseButton>
        </ModalHeader>

        <DividerContainer>
          <Divider />
        </DividerContainer>

        <ModalBody>{children}</ModalBody>

        <DividerContainer>
          <Divider />
        </DividerContainer>

        {footer && <ModalFooter>{footer}</ModalFooter>}
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;
