import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";
import type { Todo } from "../todos/todos.types";

const selectTodos = (state: RootState) => state.todos;

export const selectTodosNumber = createSelector(
  selectTodos,
  (todos): number => todos.number
);

export const selectTodosList = createSelector(
  selectTodos,
  (todos): Todo[] => todos.list
);
