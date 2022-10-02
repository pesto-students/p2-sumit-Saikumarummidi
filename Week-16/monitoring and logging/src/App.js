import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import data from "./data.json";
import TodoList from "./TodoList";

function App() {
  const [todoList, setTodoList] = useState(data);

  return ( 
    <div className="App">
    	<Header />
      <TodoList todoList = {todoList} />
    </div>
  );
}

export default App;