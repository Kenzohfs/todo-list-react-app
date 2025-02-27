
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