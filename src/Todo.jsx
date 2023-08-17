import { useState, useEffect, useRef } from "react";
import "./Todo.css";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import TodoActions from "./TodoActions";

function Todo() {
  //RETRIEVE STORED ITEMS FROM LOCALSTORAGE
  const storedItems = localStorage.getItem("todos")
    ? JSON.parse(localStorage.getItem("todos"))
    : [];

  // RETRIEVE NEXTID OF ITEMS IN TODO LIST FROM LOCAL STORAGE
  const todoId = localStorage.getItem("nextId")
    ? localStorage.getItem("nextId")
    : 0;

  const [nextIndex, setNextIndex] = useState(todoId); //ID OF ITEM IN TODO LIST
  const [todos, setTodos] = useState(storedItems); //TODOS
  const [toggle, setToggle] = useState(false); //THIS IS USED TO DISPLAY ADDTODO INPUT FIELD
  const [todo, setTodo] = useState(""); //FOR UPDATING VALUE IN ADDTODO INPUT FIELD
  const [activeList, setActiveList] = useState("all"); //TO INDICATE THE TYPE OF TODOS TO SHOW ie 'all', 'active', 'completed'
  const itemCount = useRef(storedItems?.length); //this is to keep track of items in list of type of todo

  //Storing our items in local storage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    localStorage.setItem("nextId", nextIndex);
  }, [todos, nextIndex]);

  function showInputField() {
    setToggle(true);
  }

  function hideInputField() {
    setToggle(false);
  }

  //this function displays the selected list ie 'active', completed, all. it also counts items in the list
  function handleChangeList(listtype) {
    setActiveList(listtype);

    let count;
    if (listtype == "all") {
      itemCount.current = todos.length;
      // console.log(todos);
    } else if (listtype == "active") {
      count = todos?.filter((todo) => {
        return todo.completed == false;
      }).length;
      // console.log(count);
      // console.log(todos);
      itemCount.current = count;
    } else if (listtype == "completed") {
      count = todos?.filter((todo) => {
        return todo.completed == true;
      }).length;
      // console.log(count);
      // console.log(todos);
      itemCount.current = count;
    }
  }

  //update todo to add to list
  function handleOnChange(e) {
    setTodo(e.target.value);
  }

  //add todo to todos list
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

  //fuctino to updatelist. basically changing status of completed
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
    // console.log(todos);
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
            <div style={{ marginTop: "5px" }} className="todo-list-container">
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
