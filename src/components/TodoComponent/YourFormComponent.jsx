import React, { useReducer } from "react";

// Define initial state
const initialState = {
  // Define your initial state properties here
  name: "",
  age: 0,
  email: "",
  // ... other properties
};

// Reducer function to handle state transitions

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_AGE":
      return { ...state, age: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_GENDER":
      return { ...state, gender: action.payload };
    // Define other cases for different state transitions
    // For example: case 'UPDATE_SOMETHING':
    //                 return { ...state, something: action.payload };
    default:
      return state;
  }
};

// Component using useReducer
export const YourFormComponent = () => {
  // Initialize state using useReducer
  const [state, dispatch] = useReducer(reducer, initialState);

  // Define event handlers to dispatch actions
  const handleNameChange = (e) => {
    dispatch({ type: "SET_NAME", payload: e.target.value });
  };

  const handleAgeChange = (e) => {
    dispatch({ type: "SET_AGE", payload: e.target.value });
  };

  const handleEmailChange = (e) => {
    dispatch({ type: "SET_EMAIL", payload: e.target.value });
  };

  const handleGenderChange = (e) => {
    dispatch({ type: "SET_GENDER", payload: e.target.value });
  };

  // Add onSubmit handler for form submission using state values
  const handleSubmit = (e) => {
    e.preventDefault();
    state({
      name: "",
      age: "",
      email: "",
      gender: "",
    });
    // Handle form submission with state values
    console.log("Form submitted with state:", state);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={state.name} onChange={handleNameChange} />
      </label>
      <label>
        Age:
        <input type="number" value={state.age} onChange={handleAgeChange} />
      </label>
      <label>
        Email:
        <input type="email" value={state.email} onChange={handleEmailChange} />
      </label>
      <label>
        Gender:
        <input type="text" value={state.gender} onChange={handleGenderChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default YourFormComponent;
