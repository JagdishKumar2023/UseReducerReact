import React, { useReducer } from "react";

const initialState = [];

const TODOS_ACTION = {
  ADD_TASK: "add_task",
  DELETE_TASK: "delete_task",
  REST_TODOS: "reset_todos",
};

function reducer(state, action) {
  switch (action.type) {
    case TODOS_ACTION.ADD_TASK:
      return [
        ...state,
        {
          id: state.length + 1,
          name: action.payload,
        },
      ];

    case TODOS_ACTION.DELETE_TASK:
      return state.filter((d) => d.id !== action.payload);

    case TODOS_ACTION.REST_TODOS:
      init(action.payload);

    default:
      return state;
  }
}

function init(initialState) {
  const result = [...initialState, { id: "1", name: "reading" }];
  return result;
}

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(reducer, initialState, init);

  return (
    <>
      <div id="mainTodoContainer">
        <h2>Todo List {todos.length}</h2>
        <p> Add New Task : </p>
        <input
          type="text"
          onBlur={(e) =>
            dispatch({ type: TODOS_ACTION.ADD_TASK, payload: e.target.value })
          }
        />
        {todos.map((todos) => (
          <li key={todos.id}>
            {todos.name}
            <span>
              <button
                id="AddBtn"
                onClick={() =>
                  dispatch({
                    type: TODOS_ACTION.DELETE_TASK,
                    payload: todos.id,
                  })
                }
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </div>
    </>
  );
};
