import { useDroppable } from '@dnd-kit/core';
import React from 'react';
import { StatusContainer, StatusHeader, StatusTitle } from './styled';

interface IColumnStatusProps {
  id: string;
  status: string;
  children?: React.ReactNode;
}

const ColumnStatus: React.FC<IColumnStatusProps> = ({
  id,
  status,
  children,
}) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <StatusContainer ref={setNodeRef}>
      <StatusHeader>
        <StatusTitle>{status}</StatusTitle>
      </StatusHeader>

      {children}
    </StatusContainer>
  );
};

export default ColumnStatus;
