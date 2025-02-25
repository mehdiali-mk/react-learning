import JokeContent from "./JokeContent";
import Button from "./Button";
import { useEffect, useState } from "react";
import "./Joke.css";

export default function Joke() {
  let [joke, setJoke] = useState({});

  const URL = "https://official-joke-api.appspot.com/random_joke";

  const getJoke = async () => {
    let response = await fetch(URL);
    let jsonData = await response.json();
    setJoke({ setup: jsonData.setup, punchline: jsonData.punchline });
  };

  useEffect(() => {
    async function getJokeFirstTime() {
      let response = await fetch(URL);
      let jsonData = await response.json();
      setJoke({ setup: jsonData.setup, punchline: jsonData.punchline });
    }
    getJokeFirstTime();
  }, []);

  return (
    <div className="joke">
      <Button action={getJoke} />
      <JokeContent jokeSetup={joke.setup} jokePunchline={joke.punchline} />
    </div>
  );
}
