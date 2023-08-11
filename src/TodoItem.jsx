import { useState } from "react";

function TodoItem({ todo, handleCheckClick }) {
  const [check, setCheck] = useState(todo.completed);

  function handleClick() {
    setCheck((check) => !check);
    handleCheckClick(todo.id, check);
    // console.log(check);
    // console.log(todo.completed);
    // console.log(e.target.value);
  }

  return (
    <>
      <div
        className="todo-item"
        style={check ? { textDecoration: "line-through" } : null}
      >
        <input
          type="checkbox"
          name="todoitem"
          id="todoitem"
          checked={check}
          onChange={handleClick}
        />
        <label>{todo.task}</label>
      </div>
    </>
  );
}

export default TodoItem;
