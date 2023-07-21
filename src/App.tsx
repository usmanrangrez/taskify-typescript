import { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todosList, setTodosList] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodosList([
        ...todosList,
        {
          id: Date.now(),
          todo: todo,
          isDone: false,
        },
      ]);
    }
    setTodo("");
  };

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <Input todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todosList={todosList} setTodosList={setTodosList} />
    </div>
  );
};

export default App;
