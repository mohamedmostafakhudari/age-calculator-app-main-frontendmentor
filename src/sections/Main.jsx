import React from "react";
import Form from "../components/Form";
import Display from "../components/Display";
import { useReducer } from "react";
const reducer = (prevState, currentState) => {
  return {
    ...prevState,
    ...currentState,
  };
};
const initialDate = {
  day: "",
  month: "",
  year: "",
};
export default function Main() {
  const [state, dispatch] = useReducer(reducer, initialDate);

  return (
    <main className="bg-primarybg py-10 rounded-lg rounded-br-[100px] max-w-[340px] md:min-w-[540px]">
      <div className="container mx-auto px-6 md:px-8">
        <Form state={state} dispatch={dispatch} />
        <Display state={state} />
      </div>
    </main>
  );
}
