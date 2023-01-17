import React, { useState } from "react";
import css from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { cards } from "../data.js";
import hero from "../img/hero.jpg";
import tarot from "../img/tarot.jpg";
import TarotCard from "./TarotCard";
import "../App.css";

const Home = () => {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [shuffle, setShuffle] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  const shuffleCards = () => {
    setShuffle(true);
    setTimeout(() => {
      const shuffled = [...cards].sort(() => Math.random() - 0.5);
      setShuffledCards(shuffled);
      setSelectedCard(null);
      setShuffle(false);
    }, 500);
  };
  console.log(shuffledCards.length);
  return (
    <div className={css.container}>
      <div className={css.hero}>
        <img src={hero} alt="Hero" />
        <h1>Unveil Your Future: Embrace the Power of Tarot Reading</h1>
      </div>

      <div className={css.intro}>
        <div className={css.desc}>
          <h1>Introduction</h1>
          <p>
            Welcome to our tarot reading page, where you may learn about this
            power of ancient practices and unveil the mysteries of the cosmos.
            Our knowledgeable tarot readers are here to assist you in all
            aspects of your life as you go on a path of self-discovery. Our
            tarot readings will assist you in finding direction in your journey
            and navigating life's challenges with confidence, whether you're
            searching for advice on love, job, or personal growth. Explore the
            realm of tarot reading to discover your actual potential. Our tarot
            readers can assist you in making life-changing decisions and
            revealing your destiny. Discover the secrets of tarot reading and
            follow your real path with the assistance of our tarot readings.
          </p>
        </div>
        <div className={css.desc}>
          <h1>Instructions</h1>
          <ol>
            <li>
              1. Take a few deep breaths and try to get rid of any distractions
              or unfavourable thoughts from your head. This will enable you to
              concentrate on the current issue and get more precise and
              insightful responses from the tarot cards.
            </li>
            <li>
              2. Spend some time considering the query you wish to pose to the
              tarot cards. Ensure that it is clear, concise, and focused. Ask
              specific, closed-ended inquiries instead.
            </li>
            <li>
              3. Pick a spread: Choose a spread that makes you feel most at
              ease. There are numerous spreads to choose from, and each has an
              own interpretation.
            </li>
            <li>4. Click Shuffle button: Shuffle your cards thoroughly.</li>
            <li>
              5. Draw the card: Draw the card from the pile and see the results.
            </li>
          </ol>
        </div>
      </div>
      <div className={css.reading}>
        <button onClick={shuffleCards}>Shuffle</button>
        <img
          src={tarot}
          alt="tarot"
          style={{ display: shuffledCards.length !== 0 ? "none" : "block" }}
        />
        <div className={`${css.cardContainer} ${shuffle ? "shuffle" : ""}`}>
          {shuffledCards.map((card, index) => (
            <div
              onClick={() => navigate(`/single/${card.name_short}`)}
              key={index}
            >
              <TarotCard
                card={card}
                isSelected={selectedCard === card}
                onClick={() => setSelectedCard(card)}
                className={css.card}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
