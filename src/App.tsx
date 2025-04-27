import React, { useState } from "react";
import InputField from "./components/InputField";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");

  return (
    <div className="w-screen h-screen flex flex-col items-center bg-[#2f74c0]">
      <span className="uppercase text-[40px] mx-0 my-8 text-white z-[1] text-center">
        Taskify
      </span>
      <InputField todo={todo} setTodo={setTodo}></InputField>
    </div>
  );
};

export default App;
