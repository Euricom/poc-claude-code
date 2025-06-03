import { ApiInstance } from "@/hooks/useApiInstance";
import { Task, TaskDTO, TaskCreateDTO, TaskUpdateDTO } from "./types";

// Test API
// https://euricom-test-api-v2.herokuapp.com/docs
// https://euricom-test-api-v2.herokuapp.com/openapi

const taskMapper = (dto: TaskDTO): Task => ({ ...dto });

export const getTask = async (
  api: ApiInstance,
  id: string
): Promise<Task> => {
  const data = await api.get<TaskDTO>(`/api/v1/tasks/${id}`);
  return taskMapper(data);
};

export const getTasks = async (api: ApiInstance): Promise<Task[]> => {
  const data = await api.get<TaskDTO[]>("/api/v1/tasks");
  return data.map(taskMapper);
};

export const createTask = async (
  api: ApiInstance,
  task: TaskCreateDTO
): Promise<Task> => {
  const data = await api.post<TaskDTO>("/api/v1/tasks", task);
  return taskMapper(data);
};

export const updateTask = async (
  api: ApiInstance,
  id: string,
  task: TaskUpdateDTO
): Promise<Task> => {
  const data = await api.put<TaskDTO>(`/api/v1/tasks/${id}`, task);
  return taskMapper(data);
};

export const deleteTask = async (
  api: ApiInstance,
  id: string
): Promise<Task> => {
  const data = await api.delete<TaskDTO>(`/api/v1/tasks/${id}`);
  return taskMapper(data);
};
