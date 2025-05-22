import { components } from "../schema";

// Define DTO types based on the API schema
export type UserDTO = components["schemas"]["user"];
export type UserListDTO = components["schemas"]["userList"];
export type UserCreateDTO = components["schemas"]["userCreate"];
export type UserUpdateDTO = components["schemas"]["userUpdate"];

// Define mapped domain types with Date objects
export type User = Omit<UserDTO, "createdAt"> & {
  createdAt: Date;
};

export type UserList = Omit<UserListDTO, "items"> & {
  items: User[];
};