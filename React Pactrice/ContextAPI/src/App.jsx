import React, { createContext } from "react";
import ComponentA from "./Components/ComponentA.jsx";

export const Data = createContext();
export const Data1 = createContext();

export default function App() {
  const name = "Mehdiali";
  const age = 19;

  return (
    <div>
      <Data.Provider value={name}>
        <Data1.Provider value={age}>
          <ComponentA />
        </Data1.Provider>
      </Data.Provider>
    </div>
  );
}
