import { components } from "../schema";

export type TaskDTO = components["schemas"]["task"];
export type TaskCreateDTO = components["schemas"]["taskCreate"];
export type TaskUpdateDTO = components["schemas"]["taskUpdate"];

export type Task = TaskDTO;
