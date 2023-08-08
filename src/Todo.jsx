import "./Todo.css";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";
import TodoActions from "./TodoActions";

function Todo() {
  return (
    <>
      <div className="things-todo">
        <div style={{ padding: "10px 20px 0" }}>
          <h1>THINGS TO DO</h1>
          <div>
            <AddTodo></AddTodo>
            <div style={{ marginTop: "5px" }}>
              <TodoItem></TodoItem>
              <TodoItem></TodoItem>
              <TodoItem></TodoItem>
            </div>
          </div>
        </div>
        <TodoActions></TodoActions>
      </div>
    </>
  );
}

export default Todo;
