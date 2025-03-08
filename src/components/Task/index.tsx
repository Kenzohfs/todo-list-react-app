import { useDraggable } from '@dnd-kit/core';
import React from 'react';
import {
  TaskContainer,
  TaskFooter,
  TaskResponsable,
  TaskTeam,
  TaskTitle,
} from './styled';

interface ITaskProps {
  id: string;
  title: string;
  responsable: string;
  team?: string;
}

const Task: React.FC<ITaskProps> = ({ id, title, responsable, team = '' }) => {
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
        <TaskResponsable>{responsable}</TaskResponsable>
        <TaskTeam>{team}</TaskTeam>
      </TaskFooter>
    </TaskContainer>
  );
};

export default Task;
