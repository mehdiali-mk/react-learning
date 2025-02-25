import "./Title.css";

export default function Title({ titleText = "Ahmedabad", fontSize = "3.6" }) {
  let styles = { fontSize: fontSize + "rem" };
  return (
    <p className="title" style={styles}>
      {titleText}
    </p>
  );
}
