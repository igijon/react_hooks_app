import { use, type Usable } from "react";
import { getUserAction, type User } from "./api/get-user.action";

interface Props {
    getUser: Usable<User>;
}
const userPromise = getUserAction(1);

export const ClientInformation = ({getUser}: Props) => {
    // const user = use( getUserAction(1)); //Esto entra en un ciclo de repetición constante
    const user = use( getUser); //El API use nos permite no tener que tener un componente asíncrono porque esto sería factible en el caso de tener un Server Component pero no es el caso
//   useEffect(() => {
//     const user = getUserAction(id).then((user) => console.log(user));
//   }, [id]);

  return (
    <div className="bg-gradient flex flex-col gap-4">
      <h2 className="text-4xl font-thin text-white">{user.name} - #{user.id}</h2>
      <p className="text-white text-2xl"> {user.location}</p>
      <p className="text-white text-xl"> {user.role}</p>
    </div>
  );
};
