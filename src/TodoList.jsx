import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

function TodoList({ todos, active, handleCheckClick, handleDeleteTodo }) {
  // for active todos
  if (active == "active") {
    //get the number of active tasks
    let listLen = todos?.filter((todo) => {
      return todo.completed == false;
    })?.length;

    if (listLen == 0) {
      return (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 empty"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
            />
          </svg>
          <p style={{ textAlign: "center" }}>
            No Tasks Available | Click on the &apos;+&apos; icon to add task
          </p>
        </>
      );
    }
    return (
      <>
        {todos
          ?.filter((todo) => {
            return todo.completed == false;
          })
          .map((todo) => {
            return (
              <TodoItem
                todo={todo}
                key={todo.id}
                checkClick={handleCheckClick}
                deleteTodo={handleDeleteTodo}
              ></TodoItem>
            );
          })}
      </>
    );
  }
  //   for completed todos
  else if (active == "completed") {
    //get the number of completed tasks
    let listLen = todos?.filter((todo) => {
      return todo.completed == true;
    })?.length;

    if (listLen == 0) {
      return (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 empty"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
            />
          </svg>
          <p style={{ textAlign: "center" }}>No Tasks Available</p>
        </>
      );
    }
    return (
      <>
        {todos
          ?.filter((todo) => {
            return todo.completed == true;
          })
          .map((todo) => {
            return (
              <TodoItem
                todo={todo}
                key={todo.id}
                checkClick={handleCheckClick}
                deleteTodo={handleDeleteTodo}
              ></TodoItem>
            );
          })}
      </>
    );
  }

  //for all
  //get the number of active tasks
  let listLen = todos?.length;

  if (listLen == 0) {
    return (
      <>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 empty"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
          />
        </svg>
        <p style={{ textAlign: "center" }}>
          No Tasks Available | Click on the &apos;+&apos; icon to add task
        </p>
      </>
    );
  }
  return (
    <>
      {todos?.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            checkClick={handleCheckClick}
            deleteTodo={handleDeleteTodo}
          ></TodoItem>
        );
      })}
    </>
  );
}

TodoList.propTypes = {
  todos: PropTypes.node,
  active: PropTypes.node,
  handleCheckClick: PropTypes.node,
  handleDeleteTodo: PropTypes.node,
};

export default TodoList;
