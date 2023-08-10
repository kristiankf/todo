// import { useState } from "react";

function AddTodo({ handleAddTodo, todo, handleOnChange }) {
  // const [inputData, setInputData] = useState("");
  return (
    <>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          name="addtodo"
          id="addtodo"
          autoFocus
          placeholder="Add New"
          value={todo}
          onChange={handleOnChange}
        />
      </form>
    </>
  );
}

export default AddTodo;
