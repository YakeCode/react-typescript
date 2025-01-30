import { TODO_FILTERS } from "../constants/todoFilters";

//One TODO
export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}
//Deconstruction of the TODO object
export type TodoCompleted = Pick<Todo, "completed">;
export type TodoId = Pick<Todo, "id">;
export type TodoTitle = Pick<Todo, "title">;
//All TODOS
export type ListOfTodos = Todo[];

export type FilterValue = (typeof TODO_FILTERS)[keyof typeof TODO_FILTERS];
