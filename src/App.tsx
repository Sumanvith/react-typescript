import React, { useState } from "react";
import InputField from "./components/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  return (
    <div className="w-screen h-screen flex flex-col items-center bg-[#2f74c0]">
      <span className="uppercase text-[40px] mx-0 my-8 text-white z-[1] text-center">
        Taskify
      </span>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}></InputField>
      <TodoList todos={todos} setTodos={setTodos}></TodoList>
    </div>
  );
};

export default App;
