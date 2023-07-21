import React, { useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import "./styles.css";
import TodoList from "./TodoList";

interface Props {
  task: Todo;
  todosList: Todo[];
  setTodosList: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ task, todosList, setTodosList }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTask, setEditTask] = useState<string>(task.todo);

  const handleDone = (id: number) => {
    const updatedTodosList: Todo[] = todosList.map((task) =>
      task.id === id ? { ...task, isDone: !task.isDone } : task
    );
    setTodosList(updatedTodosList);
  };

  const handleDelete = (id: number) => {
    const updatedTodosList: Todo[] = todosList.filter((task) => {
      return task.id !== id;
    });
    setTodosList(updatedTodosList);
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodosList(
      todosList.map((item) => {
        return item.id === id
          ? {
              ...item,
              todo: editTask,
            }
          : item;
      })
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="todos__single" onSubmit={(e) => handleEdit(e, task.id)}>
      {edit ? (
        <input
          ref={inputRef}
          type="text"
          value={editTask}
          onChange={(e) => setEditTask(e.target.value)}
          className="todos__single--text"
        />
      ) : task.isDone ? (
        <s className="todos__single--text">{task.todo}</s>
      ) : (
        <span className="todos__single--text">{task.todo}</span>
      )}

      <div>
        <span
          onClick={() => {
            if (!edit && !task.isDone) {
              setEdit(!edit);
            }
          }}
          className="icon"
        >
          <AiFillEdit />
        </span>
        <span onClick={() => handleDelete(task.id)} className="icon">
          <AiFillDelete />
        </span>
        <span onClick={() => handleDone(task.id)} className="icon">
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
