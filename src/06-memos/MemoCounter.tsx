import { useCounter } from "@/hooks/useCounter";
import { useMemo } from "react";

const heavyStuff = (iteration: number) => {
  console.time("Heavy_stuff_started");

  for (let i = 0; i < iteration; i++) {
    // Simulating heavy computation
    console.log("ahí vamos...");
  }
  console.timeEnd("Heavy_stuff_started");
  return `${iteration} iteraciones realizadas`;
};

export const MemoCounter = () => {
  const { counter, increment } = useCounter(40000);
  const { counter: counter2, increment: increment2 } = useCounter(2);
  const myHeavyValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-white">Memo useMemo - {myHeavyValue}</h1>
      <hr></hr>
      <h4>Counter: {counter}</h4>
      <h4>Counter: {counter2}</h4>

      <button
        className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-poiner"
        onClick={increment}
      >
        +1
      </button>
      <button
        className="bg-blue-500 text-white px-4 rounded-md py-2 cursor-poiner"
        onClick={increment2}
      >
        +1 Counter2
      </button>
    </div>
  );
};
