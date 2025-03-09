import { useState } from "react";

const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
  fontSize: "24px",
  fontWeight: "bold",
  userSelect: "none",
};

export default function StarComponent({
  maxLength = 5,
  defaultRating = 1,
  defaultEmptyStarColor = "#fff",
  defaultFillStarColor = "#f7d71e",
  defaultStrokeColor = "#000",
}) {
  const [currentRating, setCurrentRating] = useState(defaultRating);
  const [tempHoverRating, setTempHoverRating] = useState(defaultRating);

  return (
    <div className="star-main-container" style={containerStyle}>
      <div className="star-container" style={starContainerStyle}>
        {Array.from({ length: maxLength }, (_, i) => (
          <Star
            key={i}
            onClick={() => setCurrentRating(i + 1)}
            full={(tempHoverRating || currentRating) >= i + 1}
            onMouseEnter={() => setTempHoverRating(i + 1)}
            onMouseLeave={() => setTempHoverRating(0)}
            defaultEmptyStarColor={defaultEmptyStarColor}
            defaultFillStarColor={defaultFillStarColor}
            defaultStrokeColor={defaultStrokeColor}
          />
        ))}
      </div>
      <div style={textStyle}>{currentRating}</div>
    </div>
  );
}

function Star({
  onClick,
  full,
  onMouseEnter,
  onMouseLeave,
  defaultEmptyStarColor,
  defaultFillStarColor,
  defaultStrokeColor,
}) {
  const emptyStarStyle = {
    width: "48px",
    height: "48px",
    display: "block",
    cursor: "pointer",
    fill: `${defaultEmptyStarColor}`,
    stroke: `${defaultStrokeColor}`,
  };

  const filledStarStyle = {
    width: "48px",
    height: "48px",
    display: "block",
    cursor: "pointer",
    fill: `${defaultFillStarColor}`,
    stroke: `${defaultStrokeColor}`,
  };

  return full == 0 ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="#000"
      stroke="#000"
      style={emptyStarStyle}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="#000"
      stroke="#000"
      style={filledStarStyle}
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}
