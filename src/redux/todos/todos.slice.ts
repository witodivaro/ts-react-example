import { createSlice } from "@reduxjs/toolkit";
import { DeleteTodoAction, fetchTodos } from "./todos.actions";
import type { Todo } from "./todos.types";

interface TodosState {
  number: number;
  list: Todo[];
  todoError: string | unknown;
}

const initialState = { number: 0, list: [], todoError: "" } as TodosState;

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    increment(state) {
      state.number++;
    },
    decrement(state) {
      state.number--;
    },
    deleteTodo(state, action: DeleteTodoAction) {
      const todoId: number = action.payload.id;
      state.list = state.list.filter(
        (todo: Todo): boolean => todo.id !== todoId
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      const todos = action.payload;

      if (todos) {
        state.list = todos;
      }
    });
    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.todoError = action.payload;
    });
  },
});

export const { increment, decrement, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
