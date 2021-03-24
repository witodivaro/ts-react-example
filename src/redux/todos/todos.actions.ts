import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { Todo, ErrorMessage } from "./todos.types";
import { CounterActionTypes } from "./todos.types";

const TODOS_ENDPOINT = "https://jsonplaceholder.typicode.com/todos";

export interface DeleteTodoAction {
  payload: {
    id: number;
  };
}

export const fetchTodos = createAsyncThunk(
  CounterActionTypes.fetchTodos,
  async (_, thunkAPI) => {
    try {
      const response = await axios.get<Todo[]>(TODOS_ENDPOINT);

      return response.data as Todo[];
    } catch (e) {
      thunkAPI.rejectWithValue(e.message as ErrorMessage);
    }
  }
);
