import React from "react";
import { useReducer } from "react";

const initialState = {
  users: [],
  currentUser: {
    name: "",
  },
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "ADDUSER":
      return { ...state, currentUser: { name: action.payload } };
    case "SUBMIT":
      return { ...state, users: [...state.users, state.currentUser.name] };
  }
};

const usered = () => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <>
      <form action="#" className=" p-4">
        <h3>Name</h3>
        <input
          type="text"
          value={state.currentUser.name}
          onChange={(e) => {
            dispatch({
              type: "ADDUSER",
              payload: e.target.value,
            });
          }}
        />

        <br />
        <button
          type="submit"
          className="border-2 border-black p-2"
          onClick={() => {
            dispatch({ type: "SUBMIT" });
            console.log(state.users);
          }}
        >
          submit
        </button>
      </form>

      <p>
        {state.users.map((user) => {
          return <p>{user}</p>;
        })}
      </p>
    </>
  );
};
export default usered;
