import { yupResolver } from '@hookform/resolvers/yup';
import React, { useCallback, useMemo } from 'react';
import { Resolver, useForm } from 'react-hook-form';
import { useStatus } from '../../hooks/status';
import { useTask } from '../../hooks/task';
import { useToast } from '../../hooks/toast';
import { ITaskData, TaskSchema } from '../../interfaces/ITask';
import Input from '../Input';
import SelectComp from '../Select';
import { Field, FormContainer, Label } from './styled';

interface ICreateTaskFormProps {
  onSuccess: () => void;
}

const CreateTaskForm: React.FC<ICreateTaskFormProps> = ({ onSuccess }) => {
  const { addToast } = useToast();
  const { GetStatus } = useStatus();
  const { CreateTask } = useTask();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<ITaskData>({
    resolver: yupResolver(TaskSchema) as unknown as Resolver<ITaskData>,
  });

  const { data: statusData } = GetStatus();

  const statusOptions = useMemo(() => {
    if (!statusData) return [];

    return statusData.map((status) => ({
      value: status.id,
      label: status.description,
    }));
  }, [statusData]);

  const handleValidationError = useCallback(() => {
    addToast({
      type: 'error',
      description: 'Por favor, preencha todos os campos corretamente',
    });
  }, [addToast]);

  const onSubmit = handleSubmit(async (data: ITaskData) => {
    await CreateTask(data);
    onSuccess();
  }, handleValidationError);

  return (
    <FormContainer
      id="task-form"
      aria-label="task-form"
      role="form"
      name=""
      onSubmit={onSubmit}
      data-testid="task-form"
    >
      <Field>
        <Label>Título*</Label>
        <Input
          name="title"
          register={register}
          errors={errors.title}
          small
          data-testid="title"
        />
      </Field>

      <Field>
        <Label>Status*</Label>
        <SelectComp
          name="statusId"
          options={statusOptions}
          control={control}
          placeholder="Selecione o status"
          errors={errors.statusId}
          isClearable
          data-testid="statusId"
        />
      </Field>

      <Field>
        <Label>Responsável</Label>
        <Input
          name="responsable"
          register={register}
          errors={errors.responsable}
          small
          data-testid="responsable"
        />
      </Field>
    </FormContainer>
  );
};

export default CreateTaskForm;
