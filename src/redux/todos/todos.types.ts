export enum CounterActionTypes {
  fetchTodos = "counter/fetchTodos",
}

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export type ErrorMessage = string;
