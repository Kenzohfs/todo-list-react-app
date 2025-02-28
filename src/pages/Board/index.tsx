import { DndContext, DragEndEvent } from '@dnd-kit/core';
import React, { useCallback, useMemo } from 'react';
import { FaSearch } from 'react-icons/fa';
import ColumnStatus from '../../components/ColumnStatus';
import Input from '../../components/Input';
import Task from '../../components/Task';
import { useStatus } from '../../hooks/status';
import { useTask } from '../../hooks/task';
import { ITaskResponse } from '../../interfaces/ITask';
import { BoardContent, Container, HeaderContent, Title } from './styled';

interface ITaskByStatus {
  statusId: string;
  statusDescription: string;
  statusCreatedAt: number;
  tasks: ITaskResponse[];
}

const Board: React.FC = () => {
  const { GetStatus } = useStatus();
  const { GetTasks, UpdateTask } = useTask();

  const { isLoading: isFetchingStatus, data: statusData } = GetStatus();
  const { isLoading: isFetchingTasks, data: taskData } = GetTasks();

  const tasksByStatus = useMemo(() => {
    if (!taskData || !statusData) return [];

    const newData = statusData.reduce((acc: ITaskByStatus[], status) => {
      const tasksFiltered = taskData.filter(
        (task) => task.statusId === status.id
      );

      acc.push({
        statusId: status.id,
        statusDescription: status.description,
        statusCreatedAt: new Date(status.createdAt).getTime(),
        tasks: tasksFiltered,
      });

      return acc;
    }, []);

    newData.sort((a, b) => a.statusCreatedAt - b.statusCreatedAt);
    newData.forEach((status) => {
      status.tasks.sort(
        (a, b) =>
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
      );
    });
    return newData;
  }, [taskData, statusData]);

  const handleDragEnd = useCallback(
    async (event: DragEndEvent) => {
      const { active, over } = event;

      if (!over || !taskData || !statusData) return;

      if (active.id !== over.id) {
        const draggedTask = taskData.find((task) => task.id === active.id);
        if (!draggedTask) return;

        const newStatusId = over.id as string;

        await UpdateTask({
          id: draggedTask.id,
          task: { statusId: newStatusId },
        });
      }
    },
    [taskData, statusData]
  );

  return (
    <Container>
      <HeaderContent>
        <Title>Quadro</Title>
        <Input name="search" Icon={FaSearch} placeholder="Nome tarefa" />
      </HeaderContent>

      <DndContext onDragEnd={handleDragEnd}>
        <BoardContent>
          {!isFetchingStatus && !isFetchingTasks ? (
            tasksByStatus?.map((statusColumn) => (
              <ColumnStatus
                key={statusColumn.statusId}
                id={statusColumn.statusId}
                status={statusColumn.statusDescription}
              >
                {statusColumn.tasks.map((task) => (
                  <Task
                    key={task.id}
                    id={task.id}
                    title={task.title}
                    responsable={task.responsable}
                  />
                ))}
              </ColumnStatus>
            ))
          ) : (
            <></>
          )}
        </BoardContent>
      </DndContext>
    </Container>
  );
};

export default Board;
