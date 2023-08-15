import TodoItem from "./TodoItem";

function TodoList({ todos, active, handleCheckClick }) {
  // for active todos
  if (active == "active") {
    return (
      <>
        {todos
          .filter((todo) => {
            return todo.completed == false;
          })
          .map((todo) => {
            return (
              <TodoItem
                todo={todo}
                key={todo.id}
                handleCheckClick={handleCheckClick}
              ></TodoItem>
            );
          })}
      </>
    );
  }
  //   for completed todos
  else if (active == "completed") {
    return (
      <>
        {todos
          .filter((todo) => {
            return todo.completed == true;
          })
          .map((todo) => {
            return (
              <TodoItem
                todo={todo}
                key={todo.id}
                handleCheckClick={handleCheckClick}
              ></TodoItem>
            );
          })}
      </>
    );
  }

  //for all
  return (
    <>
      {todos.map((todo) => {
        return (
          <TodoItem
            todo={todo}
            key={todo.id}
            handleCheckClick={handleCheckClick}
          ></TodoItem>
        );
      })}
    </>
  );
}

export default TodoList;
