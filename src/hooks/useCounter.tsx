import { useState } from "react";

export const useCounter = (initialValue: number = 1) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => Math.max(1, prev - 1));

  return {
    //Properties
    counter,
    //Methods
    increment,
    decrement,  

  };
};
