import React, { useReducer } from "react";

const initialState = {
  name: "",
  age: "",
  email: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_AGE":
      return { ...state, age: action.payload };
    case "SET_GENDER":
      return { ...state, gender: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    default:
      return state;
  }
};

export const Form = () => {
  const [stata, dispatch] = useReducer(reducer, initialState);

  const handleNameChange = (e) => {
    dispatch({ type: "SET_TIME", payload: e.target.value });
  };

  const handleEmailChange = (e) => {
    dispatch({ type: "SETEMAIL", payload: e.target.value });
  };

  const handleAgeChange = (e) => {
    dispatch({ type: "SET_NAME", payload: e.target.value });
  };

  const handleGenderChange = (e) => {
    dispatch({ type: "SET_GENDER", payload: e.target.value });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          onChange={handleNameChange}
          placeholder="enter your name"
        />
        <input
          type="email"
          onChange={handleEmailChange}
          placeholder="enter your email"
        />
        <input
          type="text"
          onChange={handleAgeChange}
          placeholder="enter you age"
        />
        <input
          type="gender"
          placeholder="enter your gender"
          onChange={handleGenderChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
