import React, { useRef } from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      className="flex w-[90%] relative items-center"
      onSubmit={(e) => {
        handleAdd(e);
        inputRef.current?.blur();
      }}>
      <input
        ref={inputRef}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="Enter a task"
        className="text-2xl rounded-[50px] w-[100%] py-5 px-8 transition duration-200 focus:outline-none focus:shadow-[0_10px_1000px_rgba(0,0,0,0.5)]"></input>
      <button
        type="submit"
        className="absolute w-12 h-12 m-3 rounded-full right-0 border-none text-base bg-[#2f74c0] text-white transition-all duration-200 hover:bg-[#388ae2] transform active:scale-90">
        GO
      </button>
    </form>
  );
};

export default InputField;
