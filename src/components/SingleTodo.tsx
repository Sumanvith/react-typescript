import React, { ReactElement } from "react";
import { Todo } from "../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className="w-full bg-yellow-400 rounded-md p-4 mt-4 flex items-center justify-between shadow-md">
      <span className="text-lg">{todo.todo}</span>
      <div className="flex gap-3 text-xl">
        <span>{AiFillEdit({}) as ReactElement}</span>
        <span>{AiFillDelete({}) as ReactElement}</span>
        <span>{MdDone({}) as ReactElement}</span>
      </div>
    </form>
  );
};

export default SingleTodo;
