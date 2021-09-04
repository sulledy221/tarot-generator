import { useState } from "react";
import "../App.css";

export default function Card({ cardItems, type }) {
const [ choice, setChoice ] = useState("")
const randomChoice = () => {
  const calculator = Math.floor(Math.random() * cardItems.length);
  return setChoice(cardItems[calculator].value);
}
  return (
    <div>
      <button onClick={randomChoice} className="button-size">
        {type}
      </button>
      {choice}
    </div>
  );
}