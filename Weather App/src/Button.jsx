import "./Button.css";

export default function Button({ buttonText = "Submit", action }) {
  return (
    <div className="button" onClick={action}>
      {buttonText}
    </div>
  );
}
