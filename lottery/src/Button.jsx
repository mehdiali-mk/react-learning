import "./Button.css";

export default function Button({ buttonText, action }) {
  return (
    <div className="button" onClick={action}>
      {buttonText}
    </div>
  );
}
