import React, { ReactElement, useEffect, useRef, useState } from "react";
import { Todo } from "../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="w-full bg-yellow-400 rounded-md p-4 mt-4 flex items-center justify-between shadow-md"
      onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          ref={inputRef}></input>
      ) : todo.isDone ? (
        <s className="text-lg">{todo.todo}</s>
      ) : (
        <span className="text-lg">{todo.todo}</span>
      )}

      <div className="flex gap-3 text-xl">
        <span
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}>
          {AiFillEdit({}) as ReactElement}
        </span>
        <span onClick={() => handleDelete(todo.id)}>
          {AiFillDelete({}) as ReactElement}
        </span>
        <span onClick={() => handleDone(todo.id)}>
          {MdDone({}) as ReactElement}
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
