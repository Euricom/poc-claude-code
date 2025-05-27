import { ApiInstance } from "@/hooks/useApiInstance";
import { User, UserDTO, UserListDTO, UserCreateDTO, UserUpdateDTO } from "./types";

// Test API
// https://euricom-test-api-v2.herokuapp.com/docs
// https://euricom-test-api-v2.herokuapp.com/openapi

const userMapper = (user: UserDTO): User => ({
  ...user,
  createdAt: new Date(user.createdAt),
});

export const getUser = async (
  api: ApiInstance,
  id: string
): Promise<User> => {
  const data = await api.get<UserDTO>(`/api/v1/users/${id}`);
  return userMapper(data);
};

export interface GetUsersParams {
  page?: number;
  pageSize?: number;
  sortBy?: string;
}

export const getUsers = async (
  api: ApiInstance,
  params: GetUsersParams = {}
): Promise<User[]> => {
  const { page, pageSize, sortBy } = params;
  const data = await api.get<UserListDTO>("/api/v1/users", {
    query: {
      page,
      pageSize,
      sortBy,
    },
  });
  return data.items.map(userMapper);
};

export const createUser = async (
  api: ApiInstance,
  user: UserCreateDTO
): Promise<User> => {
  const data = await api.post<UserDTO>("/api/v1/users", user);
  return userMapper(data);
};

export const updateUser = async (
  api: ApiInstance,
  id: string,
  user: UserUpdateDTO
): Promise<User> => {
  const data = await api.put<UserDTO>(`/api/v1/users/${id}`, user);
  return userMapper(data);
};

export const deleteUser = async (
  api: ApiInstance,
  id: string
): Promise<User> => {
  const data = await api.delete<UserDTO>(`/api/v1/users/${id}`);
  return userMapper(data);
};
