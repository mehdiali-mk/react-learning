import Title from "./Title";
import "./JokeContent.css";

export default function JokeContent({ jokeSetup, jokePunchline }) {
  return (
    <div className="joke-content">
      <Title titleText={jokeSetup} />
      <Title titleText={jokePunchline} />
    </div>
  );
}
