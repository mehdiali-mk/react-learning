import { useContext, useState } from "react";
import { UserContext } from "../UserContext";

export default function ChangeUserProfile() {
  const { changeUser } = useContext(UserContext);
  const [newName, setNewName] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    changeUser(newName);
    setNewName("");
  }

  return (
    <div>
      <h1>Update User Profile</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          onChange={(e) => setNewName(e.target.value)}
          value={newName}
        />
        <button type="submit">Change</button>
      </form>
    </div>
  );
}
