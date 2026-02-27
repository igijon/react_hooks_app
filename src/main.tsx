import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import { ClientInformation } from "./08-use-suspense/ClientInformation";
// import { getUserAction } from "./08-use-suspense/api/get-user.action";
import { Toaster } from "sonner";
import { ProfessionalApp } from "./09-useContext/ProfessionalApp";
// import { ScrambleWords } from "./05-useReducer/ScrambleWords";
// import { MemoHook } from "./06-memos/MemoHook";
// import { MemoCounter } from "./06-memos/MemoCounter";
// import { InstagromApp } from "./07-useOptimistic/InstagromApp";
// import { TrafficLightWithHook } from "./02-useEffect/TrafficLightWithHook";
// import { PokemonPage } from "./03-examples/PokemonPage";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { HooksApp } from "./HooksApp";
// import { TrafficLight } from "./01-useState/TrafficLight";
// import { TrafficLightWithEffect } from "./02-useEffect/TrafficLightWithEffect";
// import { TasksApp } from './05-useReducer/TaskApp';

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster />    {/* <HooksApp /> */}
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook/> */}
    {/* <MemoCounter/> */}
    {/* <InstagromApp /> */}
    {/* <Suspense
      fallback={
        <div className="bg-gradient text-white text-2xl flex flex-col">
          Cargando información del usuario...
        </div>
      }
    >
      <ClientInformation getUser={getUserAction(1000)}/>
    </Suspense> */}
    <ProfessionalApp />
  </StrictMode>,
);
