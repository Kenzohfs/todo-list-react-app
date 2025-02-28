import * as Yup from 'yup';

export interface ITask {
  id: string;
  title: string;
  description: string;
  responsable: string;
  statusId: string;
  hostname: string;
  createdAt: string;
}

export interface ITaskData {
  title: string;
  responsable: string;
  statusId: string;
}

export interface ITaskResponse {
  id: string;
  title: string;
  description: string;
  responsable: string;
  statusId: string;
  hostname: string;
  createdAt: string;
}

export const TaskSchema = Yup.object({
  title: Yup.string().required('O título é obrigatório').defined(),
  responsable: Yup.string().required('O responsável é obrigatório').defined(),
  statusId: Yup.string().required('O status é obrigatório').defined(),
}).defined();
