import React from "react";

export const Form = () => {
  return (
    <div>
      <form>
        <input
          type="text"
          onChange={handleSubmit}
          placeholder="enter your name"
        />
        <input
          type="email"
          onChange={handleSubmit}
          placeholder="enter your email"
        />
        <input type="gender" placeholder="enter your gender" />
        <button>Submit</button>
      </form>
    </div>
  );
};
