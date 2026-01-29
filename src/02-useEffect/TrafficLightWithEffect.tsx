import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

// type TrafficLightColor = "red" | "yellow" | "green";
type TrafficLightColor = keyof typeof colors;

export const TrafficLightWithEffect = () => {
  //Si quiero saber constantemente el estado de algo
  const [light, setLight] = useState<TrafficLightColor>("red");
  const [countdown, setCountdown] = useState<number>(5);

  //HAY QUE TENER MUCHÍSIMO CUIDADO CON LOS EFECTOS SECUNDARIOS
  //useEffect produce efectos secundarios en componentes funcionales
  //cuando un estado cambia, se ejecuta el efecto
  // useEffect(() => {
  //   console.log({countdown});
  //   //Esto se disparará cada vez que countdown cambie y cuando el componente se monte
  //   //Tenemos un problema porque este efecto dispara otro efecto en un ciclo infinito
  //   setInterval(() => {
  //     console.log('setInterval llamado')
  //     setCountdown(prev => prev - 1);
  //   }, 1000);
  // }, [countdown]);

  useEffect(() => {
    if (countdown === 0)  return;
    //Esto se disparará cada vez que countdown cambie y cuando el componente se monte
    const intervalId = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    }
  }, [countdown]);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-8">
        <h1 className="text-white text-3xl font-thin">
          Semáforo con useEffect
        </h1>
        <h2 className="text-white text-xl">Countdown {countdown}</h2>
        <div
          className={`w-32 h-32 ${light === "red" ? colors[light] : "bg-gray-500"} rounded-full`}
        ></div>
        <div
          className={`w-32 h-32 ${light === "yellow" ? colors[light] : "bg-gray-500"} rounded-full`}
        ></div>
        <div
          className={`w-32 h-32 ${light === "green" ? colors[light] : "bg-gray-500"} rounded-full`}
        ></div>
      </div>
    </div>
  );
};
