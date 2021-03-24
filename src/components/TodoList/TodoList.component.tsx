import "./TodoList.styles.scss";
import React, { useCallback, useMemo, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { selectTodosList } from "../../redux/todos/todos.selectors";
import TodoItem from "../TodoItem/TodoItem.component";
import { Todo } from "../../redux/todos/todos.types";

const TodosOnPageCount = 10;

const TodoList = () => {
  const [currentPage, setCurrentPage] = useState(5);
  const todos: Todo[] = useAppSelector(selectTodosList);

  const renderedTodos = useMemo(
    (): JSX.Element[] =>
      todos
        .slice(
          currentPage * TodosOnPageCount,
          currentPage * TodosOnPageCount + TodosOnPageCount
        )
        .map((todo) => <TodoItem key={todo.id} item={todo} />),
    [todos, currentPage]
  );

  const nextPageHandler = useCallback((): void => {
    setCurrentPage((prevPage) => {
      const currentTodosIndex = TodosOnPageCount * (currentPage + 1);

      if (currentTodosIndex >= todos.length) {
        return prevPage;
      }

      return prevPage + 1;
    });
  }, [setCurrentPage, currentPage, todos.length]);

  const prevPageHandler = useCallback((): void => {
    setCurrentPage((prevPage) => {
      if (prevPage === 0) {
        return prevPage;
      }

      return prevPage - 1;
    });
  }, [setCurrentPage]);

  return (
    <div className="todo-list">
      <p className="todo-list__actions">
        <button onClick={prevPageHandler} className="todo-list__action">
          prev
        </button>
        <button onClick={nextPageHandler} className="todo-list__action">
          next
        </button>
      </p>
      {renderedTodos}
    </div>
  );
};

export default TodoList;
