import React from "react";
import css from "./TarotCard.module.css";
import img from "../img/tarot.jpg";

const TarotCards = ({ onClick }) => {
  return (
    <div className={css.container} onClick={onClick}>
      <div className={css.card}>
        <img src={img} alt="tarot" />
      </div>
    </div>
  );
};

export default TarotCards;
