import { useEffect } from "react";
import { getUserAction } from "./api/get-user.action";

export const ClientInformation = ({ id }: { id: number }) => {
  useEffect(() => {
    const user = getUserAction(id).then((user) => console.log(user));
  }, [id]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h2 className="text-4xl font-thin text-white">Inma - #123</h2>
      <p className="text-white text-2xl"> Otawa, Canadá</p>
      <p className="text-white text-xl"> Un rol del usuario</p>
    </div>
  );
};
