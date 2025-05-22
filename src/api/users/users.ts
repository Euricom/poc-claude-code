import { User, UserDTO, UserListDTO, UserCreateDTO, UserUpdateDTO } from "./types";
import { ApiInstance } from "@/hooks/useApiInstance";

// Test API endpoints:
// https://euricom-test-api-v2.herokuapp.com/docs
// https://euricom-test-api-v2.herokuapp.com/openapi

/**
 * Maps user DTO to domain entity with proper Date objects
 */
const userMapper = (userDto: UserDTO): User => {
  return {
    ...userDto,
    createdAt: new Date(userDto.createdAt),
  };
};

/**
 * Fetches a user by ID
 * @param api - API instance
 * @param id - User ID
 * @throws {NotFoundError} When user doesn't exist
 * @returns Promise<User>
 */
export const getUser = async (
  api: ApiInstance,
  id: string
): Promise<User> => {
  const data = await api.get<UserDTO>(`/api/v1/users/${id}`);
  return userMapper(data);
};

/**
 * Parameters for querying users list
 */
export interface GetUsersParams {
  page?: number;
  pageSize?: number;
  sortBy?: string;
}

/**
 * Fetches paginated list of users
 * @param api - API instance
 * @param params - Query parameters for filtering and pagination
 * @returns Promise<User[]>
 */
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

/**
 * Creates a new user
 * @param api - API instance
 * @param userData - User data for creation
 * @throws {BadRequestError} When validation fails
 * @returns Promise<User>
 */
export const createUser = async (
  api: ApiInstance,
  userData: UserCreateDTO
): Promise<User> => {
  const data = await api.post<UserDTO>("/api/v1/users", userData);
  return userMapper(data);
};

/**
 * Updates an existing user
 * @param api - API instance
 * @param id - User ID to update
 * @param userData - Updated user data
 * @throws {BadRequestError} When validation fails
 * @throws {NotFoundError} When user doesn't exist
 * @returns Promise<User>
 */
export const updateUser = async (
  api: ApiInstance,
  id: string,
  userData: UserUpdateDTO
): Promise<User> => {
  const data = await api.put<UserDTO>(`/api/v1/users/${id}`, userData);
  return userMapper(data);
};

/**
 * Deletes a user by ID
 * @param api - API instance
 * @param id - User ID to delete
 * @throws {NotFoundError} When user doesn't exist
 * @returns Promise<User>
 */
export const deleteUser = async (
  api: ApiInstance,
  id: string
): Promise<User> => {
  const data = await api.delete<UserDTO>(`/api/v1/users/${id}`);
  return userMapper(data);
};