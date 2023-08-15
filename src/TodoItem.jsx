import { useState } from "react";

function TodoItem({ todo, handleCheckClick }) {
  const [check, setCheck] = useState(todo.completed);

  function handleChange(e) {
    setCheck(e.target.checked);
    handleCheckClick(todo.id, e.target.checked);
  }

  return (
    <>
      <div
        className="todo-item"
        style={check ? { textDecoration: "line-through" } : null}
      >
        <label>
          <input
            type="checkbox"
            name="todoitem"
            id="todoitem"
            checked={check}
            onChange={handleChange}
          />
          {todo.task}
        </label>
      </div>
    </>
  );
}

export default TodoItem;
