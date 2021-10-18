import React from "react";
import { Link } from "react-router-dom";
import candyImg from "./candy.jpg";

const Candy = () => {
  return (
    <div className="Candy">
      <img src={candyImg} alt="Candy" />
      <h1>MMMM SWEEET</h1>
      <h1>
        <Link to="/">Go back</Link>
      </h1>
    </div>
  );
};

export default Candy;
