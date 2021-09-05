import { useState } from "react";
import "../App.css";

export default function Card({ cardItems, type }) {
  const [choice, setChoice] = useState({});
  const randomChoice = () => {
    const majorArcanasIndex = Math.floor(Math.random() * cardItems.majorArcanas.length);
    const majorArcana = cardItems.majorArcanas[majorArcanasIndex]
    return setChoice(cardItems[majorArcana]);
  };
  return (
    <div className="card-page">
      <button onClick={randomChoice} className="button-size">
        {type}
      </button>
      {choice ? (<img src={`/assets/${choice.url}.jpeg`} alt="images" className="img"/>) : null}
      <br />
      {choice ? `${choice.title}` : null}<br />
      {choice ? `${choice.upright}` : null} <br />
      {/* {choice ? `${choice.reverse}` : null} <br /> */}
      {console.log("is this working", choice)}

    </div>
  );
}
