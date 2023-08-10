function TodoItem({ todo }) {
  return (
    <>
      <div className="todo-item">
        <input type="checkbox" name="todoitem" id="todoitem" />
        <label htmlFor="todoitem">{todo.task}</label>
      </div>
    </>
  );
}

export default TodoItem;
