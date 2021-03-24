import "./TodoItem.styles.scss";
import React, { useCallback } from "react";
import type { Todo } from "../../redux/todos/todos.types";
import { useAppDispatch } from "../../redux/hooks";
import { deleteTodo } from "../../redux/todos/todos.slice";

interface TodoItemProps {
  item: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ item }) => {
  const { title, completed, id } = item;
  const dispatch = useAppDispatch();

  const deleteTodoHandler = useCallback(() => {
    dispatch(deleteTodo({ id }));
  }, [id, dispatch]);

  return (
    <div
      onClick={deleteTodoHandler}
      className={`todo-item ${completed ? "todo-item--complete" : ""}`}
    >
      <p className="todo-item__title">{title}</p>
    </div>
  );
};

export default TodoItem;
