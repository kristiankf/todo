function TodoItem({ todo, handleCheckClick }) {
  function handleClick() {
    handleCheckClick(todo.id);
    console.log(todo.id);
  }
  return (
    <>
      <div className="todo-item">
        <input
          type="checkbox"
          name="todoitem"
          id="todoitem"
          checked={todo.completed}
          onChange={handleClick}
        />
        <label>{todo.task}</label>
      </div>
    </>
  );
}

export default TodoItem;
