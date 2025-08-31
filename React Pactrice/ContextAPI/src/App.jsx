/* 
//* Context API
import React, { createContext } from "react";
import ComponentA from "./Components/ComponentA.jsx";

export default function App() {

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
*/

import { UserProvider } from "./UserContext";
import UserProfile from "./UserComponent/UserProfile.jsx";
import ChangeUserProfile from "./UserComponent/ChangeUserProfile.jsx";

export default function App() {
  return (
    <div>
      <UserProvider>
        <UserProfile />
        <ChangeUserProfile />
      </UserProvider>
    </div>
  );
}
