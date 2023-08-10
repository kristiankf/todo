import { useState } from "react";
import "./Todo.css";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import TodoActions from "./TodoActions";

function Todo() {
  let data = [
    { task: "Learn Javascript", completed: false, id: 1 },
    { task: "Learn React", completed: false, id: 2 },
    { task: "Build a react app", completed: false, id: 3 },
  ];
  const [todos, setTodos] = useState(data);
  const [toggle, setToggle] = useState(false);
  const [todo, setTodo] = useState("");

  function showInputField() {
    setToggle(true);
  }

  function handleOnChange(e) {
    setTodo(e.target.value);
  }

  function handleAddTodo(e) {
    e.preventDefault();
    let lastIndex = todos.length;
    setTodos([
      ...todos,
      {
        task: todo,
        completed: false,
        id: lastIndex + 1,
      },
    ]);
    setTodo("");
  }

  return (
    <>
      <div className="things-todo">
        <div style={{ padding: "10px 20px 0" }}>
          <h1>THINGS TO DO</h1>
          <div>
            {toggle && (
              <AddTodo
                handleAddTodo={handleAddTodo}
                todo={todo}
                handleOnChange={handleOnChange}
              ></AddTodo>
            )}
            <div style={{ marginTop: "5px" }}>
              {todos.map((todo) => {
                return <TodoItem todo={todo} key={todo.id}></TodoItem>;
              })}
            </div>
          </div>
        </div>
        <TodoActions handleAddClick={showInputField}></TodoActions>
      </div>
    </>
  );
}

export default Todo;
