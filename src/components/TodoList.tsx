import React from "react";
import "./styles.css";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
  todosList: Todo[];
  setTodosList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList = ({ todosList, setTodosList }: Props) => {
  return (
    <div className="todoList">
      {todosList.map((task, idx) => {
        return (
          <SingleTodo
            task={task}
            key={task.id}
            todosList={todosList}
            setTodosList={setTodosList}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
