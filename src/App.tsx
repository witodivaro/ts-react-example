import React, { useEffect } from "react";
import "./App.scss";
import TodoList from "./components/TodoList/TodoList.component";
import { fetchTodos } from "./redux/todos/todos.actions";
import { selectTodosNumber } from "./redux/todos/todos.selectors";
import { decrement, increment } from "./redux/todos/todos.slice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

interface AppProps {
  color?: string;
}

const App: React.FC<AppProps> = (): JSX.Element => {
  const number = useAppSelector(selectTodosNumber);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const incrementHandler = (): void => {
    dispatch(increment());
  };

  const decrementHandler = (): void => {
    dispatch(decrement());
  };

  return (
    <div className="app">
      <p>{number}</p>
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <TodoList />
    </div>
  );
};

export default App;
