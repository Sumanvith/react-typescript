import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField: React.FC<Props> = ({ todo, setTodo }: Props) => {
  return (
    <form className="flex w-[90%] relative items-center">
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="Enter a task"
        className="shadow-2xl text-2xl rounded-[50px] w-[100%] py-5 px-8 transition duration-200"></input>
      <button
        type="submit"
        className="absolute w-12 h-12 m-3 rounded-full right-0 border-none text-base bg-[#2f74c0] text-white transition-all duration-200 hover:bg-[#388ae2] transform active:scale-90">
        GO
      </button>
    </form>
  );
};

export default InputField;
