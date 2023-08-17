import { useState, useEffect, useRef } from "react";
import "./Todo.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import TodoActions from "./TodoActions";

function Todo() {
  const storedItems = JSON.parse(sessionStorage.getItem("todos"));
  const todoId = JSON.parse(sessionStorage.getItem("nextId"));
  const [nextIndex, setNextIndex] = useState(todoId);
  const [todos, setTodos] = useState(storedItems);
  const [toggle, setToggle] = useState(false);
  const [todo, setTodo] = useState("");
  const [activeList, setActiveList] = useState("all");
  const itemCount = useRef(storedItems?.length);

  useEffect(() => {
    todos
      ? sessionStorage.setItem("todos", JSON.stringify(todos))
      : sessionStorage.setItem("todos", JSON.stringify([]));
    nextIndex
      ? sessionStorage.setItem("nextId", nextIndex)
      : sessionStorage.setItem("nextId", 0);
  }, [todos, nextIndex]);

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
      itemCount.current = todos.length;
      console.log(todos);
    } else if (listtype == "active") {
      count = todos?.filter((todo) => {
        return todo.completed == false;
      }).length;
      console.log(count);
      console.log(todos);
      itemCount.current = count;
    } else if (listtype == "completed") {
      count = todos?.filter((todo) => {
        return todo.completed == true;
      }).length;
      console.log(count);
      console.log(todos);
      itemCount.current = count;
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
    handleChangeList(activeList);
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
          items={itemCount.current}
        ></TodoActions>
      </div>
    </>
  );
}

export default Todo;
