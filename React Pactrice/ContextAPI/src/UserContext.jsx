import { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState({ name: "Mehdiali" });

  function changeUser(newName) {
    setUser({ name: newName });
  }

  return (
    <UserContext.Provider value={{ user, changeUser }}>
      {children}
    </UserContext.Provider>
  );
}

export { UserContext, UserProvider };
