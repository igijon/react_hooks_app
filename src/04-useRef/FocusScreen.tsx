import { useRef } from "react";

export const FocusScreen = () => {
  //Nos permite tener una variable que no dispara re-render cuando cambia de valor y guarda su valor
  //independientemente de que se recargue el componente o se renderice
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    inputRef.current?.select(); //Igual al focus pero selecciona todo el texto
  };
  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h1 className="text-2xl font-thin text-white">Focus Screen</h1>
      <input
        ref={inputRef}
        type="text"
        className="bg-white text-black px-4 py-2 rounded-md"
        autoFocus
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer" onClick={handleClick}>
        Set focus
      </button>
    </div>
  );
};
