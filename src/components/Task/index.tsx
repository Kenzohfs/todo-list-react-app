import { useDraggable } from '@dnd-kit/core';
import React from 'react';
import {
  TaskContainer,
  TaskFooter,
  TaskResponsable,
  TaskTitle,
  TaskType,
} from './styled';

interface ITaskProps {
  id: string;
  title: string;
  taskType: string;
  responsable: string;
}

const Task: React.FC<ITaskProps> = ({ id, title, taskType, responsable }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });
  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <TaskContainer
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <TaskTitle>{title}</TaskTitle>
      <TaskFooter>
        <TaskType>{taskType}</TaskType>
        <TaskResponsable>{responsable}</TaskResponsable>
      </TaskFooter>
    </TaskContainer>
  );
};

export default Task;
