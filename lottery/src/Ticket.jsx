import TicketNumber from "./TicketNumber";
import "./Ticket.css";

export default function Ticket({ ticketNumberArray }) {
  return (
    <div className="ticket">
      {ticketNumberArray.map((number, index) => (
        <TicketNumber number={number} key={index} />
      ))}
    </div>
  );
}
