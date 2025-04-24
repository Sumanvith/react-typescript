import React from "react";
import logo from "./logo.svg";
import "./App.css";

let name: string;
let age: number;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];
type Person = {
  name: string;
  age?: number;
};
let person: Person = {
  name: "hello",
  age: 3,
};

let lotsOfPeople: Person[];

function App() {
  return <div className="App">Hello World</div>;
}

export default App;
