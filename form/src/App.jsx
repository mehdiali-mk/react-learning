import { useState } from "react";
import "./App.css";

function App() {
  let [formData, setFormData] = useState({
    name: "",
    username: "",
    password: "",
  });

  function changeFormData(event) {
    setFormData((currentData) => {
      return { ...currentData, [event.target.name]: event.target.value };
    });
  }

  function formSubmit(event) {
    event.preventDefault();
    setFormData({
      name: "",
      username: "",
      password: "",
    });
  }

  return (
    <div className="background">
      <form className="form">
        <input
          type="text"
          id="text"
          className="text-input"
          placeholder="Enter your name"
          value={formData.name}
          name="name"
          onChange={(event) => changeFormData(event)}
        />
        <input
          type="text"
          id="username"
          className="text-input"
          placeholder="Enter your name"
          value={formData.username}
          name="username"
          onChange={(event) => changeFormData(event)}
        />
        <input
          type="password"
          id="password"
          className="text-input"
          placeholder="Enter your name"
          value={formData.password}
          name="password"
          onChange={(event) => changeFormData(event)}
        />
        <button type="submit" className="button">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
