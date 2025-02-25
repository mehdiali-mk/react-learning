import "./Description.css";

export default function Description({ descriptionText, fontSize = 1.2 }) {
  let styles = { fontSize: fontSize + "rem" };
  return (
    <p className="description" style={styles}>
      {descriptionText}
    </p>
  );
}
