import "./Button.css";

export default function Button({ action }) {
  return (
    <div className="button" onClick={action}>
      Get Joke!
    </div>
  );
}
