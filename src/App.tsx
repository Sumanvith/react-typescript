import React from "react";
import logo from "./logo.svg";
import "./App.css";

let name: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

function printName(name: string) {
  console.log(name);
}

let personName: unknown;

printName("Hello");

type Person1 = {
  name_type: string;
  age_type?: number;
};

interface Person2 extends Person1 {
  name_int: string;
  age_int?: number;
}
let person2: Person2 = {
  name_type: "hello",
  age_type: 3,
  name_int: "bye",
  age_int: 5,
};

function App() {
  return <div className="App">Hello World</div>;
}

export default App;
