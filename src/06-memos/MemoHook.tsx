import { useState } from "react";
import { MySubTitle } from "./ui/MySubTitle";
import { Mytitle } from "./ui/Mytitle";

export const MemoHook = () => {
  const [title, setTitle] = useState("hola");
  const [subTitle, setSubTitle] = useState("mundo");
  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">MemoApp</h1>
      <Mytitle title={title} />
      <MySubTitle subTitle={subTitle} />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        onClick={() => setTitle("Hello, "+new Date().getTime())}
      >
        Cambiar título
      </button>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer"
        // onClick={() => setSubTitle("World, "+new Date().getTime())}
        onClick={() => setSubTitle("World")}
      >
        Cambiar subtítulo
      </button>
    </div>
  );
};
