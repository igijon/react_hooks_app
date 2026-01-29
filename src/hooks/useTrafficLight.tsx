import { useEffect, useState } from "react";

const colors = {
  red: "bg-red-500 animate-pulse",
  yellow: "bg-yellow-500 animate-pulse",
  green: "bg-green-500 animate-pulse",
};

type TrafficLightColor = keyof typeof colors;

export const useTrafficLight = () => {
  //Si quiero saber constantemente el estado de algo
  const [light, setLight] = useState<TrafficLightColor>("red");
  const [countdown, setCountdown] = useState<number>(5);

  useEffect(() => {
    const id = setInterval(() => {
      setCountdown((prev) => {
        if (prev === 0) {
          setLight((prevLight) => {
            if (prevLight === "red") return "green";
            if (prevLight === "green") return "yellow";
            return "red";
          });
          return 5;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(id);
  }, [countdown, light]);

  return {
    //Properties
    light,
    countdown,
    colors,
    //Computed
    percentage: (countdown / 5) * 100,
    greenLight: light === "green" ? colors.green : "bg-gray-500",
    redLight: light === "red" ? colors.red : "bg-gray-500",
    yellowLight: light === "yellow" ? colors.yellow : "bg-gray-500",
    //Methods
  };
};
