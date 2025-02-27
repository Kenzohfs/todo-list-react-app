import { DndContext, DragEndEvent } from '@dnd-kit/core';
import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import ColumnStatus from '../../components/ColumnStatus';
import Input from '../../components/Input';
import Task from '../../components/Task';
import { BoardContent, Container, HeaderContent, Title } from './styled';

interface ITaskData {
  id: string;
  title: string;
  taskType: string;
  responsable: string;
  status: string;
}

const Board: React.FC = () => {
  const [tasks, setTasks] = useState<ITaskData[]>([
    {
      id: '1',
      title: 'Criar componente',
      taskType: 'a',
      responsable: 'Lucas',
      status: 'todo',
    },
    {
      id: '2',
      title: 'Implementar drag',
      taskType: 'b',
      responsable: 'Maria',
      status: 'doing',
    },
  ]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    if (active.id !== over.id) {
      const draggedTask = tasks.find((task) => task.id === active.id);
      if (!draggedTask) return;

      const newStatus = over.id as string;
      const updatedTask: ITaskData = { ...draggedTask, status: newStatus };

      setTasks((prev) =>
        prev.map((t) => (t.id === draggedTask.id ? updatedTask : t))
      );
    }
  };

  return (
    <Container>
      <HeaderContent>
        <Title>Quadro</Title>
        <Input Icon={FaSearch} placeholder="Nome tarefa" />
      </HeaderContent>

      <DndContext onDragEnd={handleDragEnd}>
        <BoardContent>
          <ColumnStatus id="todo" status="To Do">
            {tasks
              .filter((task) => task.status === 'todo')
              .map((task) => (
                <Task
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  taskType={task.taskType}
                  responsable={task.responsable}
                />
              ))}
          </ColumnStatus>

          <ColumnStatus id="doing" status="Doing">
            {tasks
              .filter((task) => task.status === 'doing')
              .map((task) => (
                <Task
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  taskType={task.taskType}
                  responsable={task.responsable}
                />
              ))}
          </ColumnStatus>
        </BoardContent>
      </DndContext>
    </Container>
  );
};

export default Board;
