import { useState } from "react";
import "./Todo.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import TodoActions from "./TodoActions";

function Todo() {
  let data = [
    { task: "Learn Javascript", completed: false, id: 1 },
    { task: "Learn React", completed: false, id: 2 },
    { task: "Build a react app", completed: false, id: 3 },
  ];
  const [nextIndex, setNextIndex] = useState(3);
  const [todos, setTodos] = useState(data);
  const [toggle, setToggle] = useState(false);
  const [todo, setTodo] = useState("");
  const [activeList, setActiveList] = useState("all");
  const [itemCount, setItemCount] = useState(data.length);

  function showInputField() {
    setToggle(true);
  }

  function hideInputField() {
    setToggle(false);
  }

  //////////////
  function handleChangeList(listtype) {
    setActiveList(listtype);

    let count;
    if (listtype == "all") {
      setItemCount(todos.length);
      console.log(todos);
    } else if (listtype == "active") {
      count = todos.filter((todo) => {
        return todo.completed == false;
      }).length;
      console.log(count);
      console.log(todos);
      setItemCount(count);
    } else if (listtype == "completed") {
      count = todos.filter((todo) => {
        return todo.completed == true;
      }).length;
      console.log(count);
      console.log(todos);
      setItemCount(count);
    }
  }

  function handleOnChange(e) {
    setTodo(e.target.value);
  }

  function handleAddTodo(e) {
    e.preventDefault();

    setTodos([
      {
        task: todo,
        completed: false,
        id: nextIndex + 1,
      },
      ...todos,
    ]);
    setNextIndex(nextIndex + 1);
    setTodo("");
  }

  function handleCheckClick(id, check) {
    // console.log(check);
    let tasksUpdated = todos.map((todo) => {
      if (todo.id == id) {
        todo.completed = check;
        return todo;
      }
      return todo;
    });
    // console.log(tasksUpdated);
    setTodos(tasksUpdated);
    // console.log(todos);
    handleChangeList(activeList);
  }

  function handleDeleteTodo(id) {
    setTodos((todos) => todos.filter((todo) => todo.id != id));
    console.log(todos);
    handleChangeList(activeList);
  }

  return (
    <>
      <div className="things-todo">
        <div style={{ padding: "10px 20px 0" }}>
          <h1>
            {(activeList == "all" && "All Tasks") ||
              (activeList == "active" && "Things to do") ||
              (activeList == "completed" && "Tasks Completed")}
          </h1>
          <div>
            {toggle && activeList != "completed" && (
              <AddTodo
                handleAddTodo={handleAddTodo}
                todo={todo}
                handleOnChange={handleOnChange}
                handleHideClick={hideInputField}
              ></AddTodo>
            )}
            <div style={{ marginTop: "5px" }}>
              <TodoList
                todos={todos}
                active={activeList}
                handleCheckClick={handleCheckClick}
                handleDeleteTodo={handleDeleteTodo}
              ></TodoList>
            </div>
          </div>
        </div>
        <TodoActions
          handleAddClick={showInputField}
          handleChangeList={handleChangeList}
          active={activeList}
          items={itemCount}
        ></TodoActions>
      </div>
    </>
  );
}

export default Todo;
