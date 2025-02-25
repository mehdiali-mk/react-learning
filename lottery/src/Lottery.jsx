import Ticket from "./Ticket";
import Button from "./Button";
import "./Lottery.css";
import { useState } from "react";
import { generateNnumber } from "./helper";

export default function Lottery({ ticketSize = 5, winningCondition }) {
  let [ticketNumberArray, setTicketNumberArray] = useState(
    generateNnumber(ticketSize)
  );

  let isWin = winningCondition(ticketNumberArray);
  let changeTicketNumbers = () => {
    setTicketNumberArray(generateNnumber(ticketSize));
  };

  return (
    <div className="lottery">
      <Ticket ticketNumberArray={ticketNumberArray} />
      <Button buttonText={"Check Ticket"} action={changeTicketNumbers} />
      {isWin && <div className="winner">Congratulation!</div>}
    </div>
  );
}
