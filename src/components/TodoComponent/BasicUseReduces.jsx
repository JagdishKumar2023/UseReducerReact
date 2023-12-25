import React, { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  if (action.type === "DECEREMENT") {
    return state - 1;
  }
  return state;
};

export const BasicUseReduces = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>
        <p>{state}</p>
        <div className="btnStylePosition">
          <button onClick={() => dispatch({ type: "INCREMENT" })}>Inc</button>
          <button onClick={() => dispatch({ type: "DECREMENT" })}>Dec</button>
        </div>
      </div>
    </>
  );
};
