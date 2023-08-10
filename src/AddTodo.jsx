// import { useState } from "react";

function AddTodo({ handleAddTodo, todo, handleOnChange, handleHideClick }) {
  // const [inputData, setInputData] = useState("");
  return (
    <>
      <form onSubmit={handleAddTodo}>
        <div className="form-input">
          <input
            type="text"
            name="addtodo"
            id="addtodo"
            autoFocus
            placeholder="Add New"
            value={todo}
            onChange={handleOnChange}
          />
          <span className="icon-contain">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 icon-hover"
              onClick={handleHideClick}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </div>
      </form>
    </>
  );
}

export default AddTodo;
