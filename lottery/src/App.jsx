import "./App.css";
import { sumArray } from "./helper";
import Lottery from "./Lottery";

function App() {
  let winningCondition = (ticketArray) => {
    return sumArray(ticketArray) === 15;
  };

  return (
    <div className="background">
      <Lottery ticketSize={3} winningCondition={winningCondition} />
    </div>
  );
}

export default App;
