// import React, { useState } from "react";
// import "./App.css";

// function TodoInput() {
//   const [value, setValue] = useState("");
//   const [todo, setTodo] = useState([]);

//   return (
//     <>
//       <label>
//         Add your todo
//         <input
//           type="text"
//           value={value}
//           onChange={(event) => {
//             const {
//               target: { value },
//             } = event;
//             setValue(value);
//           }}
//         />
//       </label>
//       <div>
//         <button
//           onClick={() => {
//             setTodo([...todo, { todo: value }]);
//             setValue("");
//           }}
//         >
//           Add todo
//         </button>
//       </div>
//     </>
//   );
// }

// function displayTools() {
//   return (
//     <>
//       <h1>All the Todo</h1>
//       {todo.map((el) => {
//         return <h3>{el.todo}</h3>;
//       })}
//     </>
//   );
// }

// function TodoStats(props) {
//   const { todo } = props;

//   return <>
//   <h1>Total todo = { todo.length } </h1>
//   <h2>No. of todo done = {todo.filter((el) => el.isCompleted).length} </h2>
//   <h2>No. of todo not done = {todo.filter((el) => !el.isCompleted).length} </h2>
//   <button>Mark all as completed</button>
//   </>
// }

// function App() {
//   const [value, setValue] = useState("");
//   const [todo, setTodo] = useState([]);
//   return (
//     <div className="App">
//       <TodoInput />
//       <TodoStats />
//        <label>
//         Add your todo
//         <input
//           type="text"
//           value={value}
//           onChange={(event) => {
//             const {
//               target: { value },
//             } = event;
//             setValue(value);
//           }}
//         />
//       </label> 
//        <div>
//         <button
//           onClick={() => {
//             setTodo([...todo, { todo: value, isCompleted: false }]);
//             setValue("");
//           }}
//         >
//           Add todo
//         </button>
//       </div> 
//       <h1>All the Todo</h1>
//       {todo.map((el) => {
//         const { isCompleted, todo } = el;
//         return <>
//           <h3 style={ { color : isCompleted ? "green" : "red" }}>{el.todo}</h3>
//           <button onClick={() => {
//             const  newTodoList = todo.map((el) => {
//               if(el.todo == todo) {
//                 return {...el, isCompleted: true};
//               }
//               return el;
//             });
//             setTodo(newTodoList);
//           }}
//           >Done</button>
//           </>
//       })}  
//       <TodoStats todo = {todo} />
//     </div>
//   );
// }

// export default App;
