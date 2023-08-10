import { useState } from "react";
import "./Todo.css";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import TodoActions from "./TodoActions";

function Todo() {
  let data = [
    { task: "Learn Javascript", completed: true, id: 1 },
    { task: "Learn React", completed: true, id: 2 },
    { task: "Build a react app", completed: false, id: 3 },
  ];
  const [todos, setTodos] = useState(data);
  const [toggle, setToggle] = useState(false);
  const [todo, setTodo] = useState("");

  function showInputField() {
    setToggle(true);
  }

  function hideInputField() {
    setToggle(false);
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

  function handleCheckClick(id) {
    console.log(id);
    let thetask = todos.find((todo) => {
      return todo.id == id;
    });
    console.log(thetask);
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
                handleHideClick={hideInputField}
              ></AddTodo>
            )}
            <div style={{ marginTop: "5px" }}>
              {todos.map((todo) => {
                return (
                  <TodoItem
                    todo={todo}
                    key={todo.id}
                    handleCheckClick={handleCheckClick}
                  ></TodoItem>
                );
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
