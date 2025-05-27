import { components } from "../schema";

export type UserDTO = components["schemas"]["user"];
export type UserListDTO = components["schemas"]["userList"];
export type UserCreateDTO = components["schemas"]["userCreate"];
export type UserUpdateDTO = components["schemas"]["userUpdate"];

export type User = Omit<UserDTO, "createdAt"> & {
  createdAt: Date;
};

export type UserList = Omit<UserListDTO, "items"> & {
  items: User[];
};
