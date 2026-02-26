
import { useState } from "react";
import { MySubTitle } from "./ui/MySubTitle";
import { Mytitle } from "./ui/Mytitle";

const handleMyAPICall = (subTitle: string) => {
   console.log("Llamar a mi API - ", subTitle);
};
export const MemoHook = () => {
  const [title, setTitle] = useState("hola");
  const [subTitle, setSubTitle] = useState("mundo");

  // const handleMyAPICall = useCallback(() => {
  //   console.log("Llamar a mi API - ", subTitle);
  // }, [subTitle]); //tiene un array de dependencias vacío, por lo que la función se memoiza y no se vuelve a crear en cada renderizado

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">MemoApp</h1>
      <Mytitle title={title} />
      <MySubTitle subTitle={subTitle} callMyAPI={() =>handleMyAPICall(subTitle)}/>
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
