import React, {useState} from "react";

const ToDoForm = ({addTask}) => {

  const [userInput, setUserInput] = useState('');

  const handleChange = (event) => {
    setUserInput(event.currentTarget.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask(userInput);
    setUserInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task.." />
      <button>Submit</button>
    </form>
  );
};

export default ToDoForm;