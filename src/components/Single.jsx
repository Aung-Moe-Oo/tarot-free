import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { cards } from "../data.js";
import css from "./Single.module.css";

const Single = () => {
  const [post, setPost] = useState({});
  const location = useLocation();
  const cardName = location.pathname.split("/")[2];

  useEffect(() => {
    const card = cards.filter((i) => i.name_short === cardName);
    setPost(card[0]);
  }, [cardName]);
  return (
    <div className={css.container}>
      <div className={css.images}>
        <img src={post.img} alt="tarot" />
        <h5>{post.name}</h5>
      </div>
      <div className={css.desc}>
        <h2>Description</h2>
        <p>{post && post?.desc}</p>
      </div>
      <div className={css.meaning}>
        <h2>Meaning</h2>
        <p>{post && post?.meaning}</p>
      </div>
      <div className={css.meaning}>
        <h2>Suggestion</h2>
        <p>{post && post?.suggestion}</p>
      </div>
      <Link to={"/"} className={css.button}>
        <button> Back to main page</button>
      </Link>
    </div>
  );
};

export default Single;
