import { configureStore } from "@reduxjs/toolkit";

import todosReducer from "./todos/todos.slice";

import type { Todo } from "./todos/todos.types";

export interface StoreState {
  todos: {
    number: number;
    list: Todo[];
    todoError: string | unknown;
  };
}

export const store = configureStore<StoreState>({
  reducer: {
    todos: todosReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
