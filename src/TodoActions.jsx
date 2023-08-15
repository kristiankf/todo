function TodoActions({ handleAddClick, handleChangeList, active }) {
  return (
    <>
      <div className="todo-actions">
        <div style={{ display: "flex", alignItems: "center" }}>
          <div style={{ padding: "0 20px" }}>
            <span
              className="icon-contain"
              style={
                active == "completed"
                  ? { display: "none" }
                  : {
                      marginRight: "5px",
                    }
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 icon-hover"
                onClick={handleAddClick}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
            <span className="icon-contain">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </span>
          </div>
          <div style={{ paddingInline: "20px", borderLeft: "1px solid gray" }}>
            <span>3 items left</span>
          </div>
        </div>
        <div style={{ padding: "0 20px" }}>
          <button
            style={active == "all" ? { outline: "1px solid #d2e3e6" } : null}
            onClick={() => {
              handleChangeList("all");
            }}
          >
            All
          </button>
          <button
            style={active == "active" ? { outline: "1px solid #d2e3e6" } : null}
            onClick={() => {
              handleChangeList("active");
            }}
          >
            Active
          </button>
          <button
            style={
              active == "completed" ? { outline: "1px solid #d2e3e6" } : null
            }
            onClick={() => {
              handleChangeList("completed");
            }}
          >
            Completed
          </button>
        </div>
      </div>
    </>
  );
}

export default TodoActions;
