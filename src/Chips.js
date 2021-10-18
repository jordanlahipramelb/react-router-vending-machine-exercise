import React, { useState } from "react";
import chipsImg from "./chips.jpg";
import { Link } from "react-router-dom";

const Chips = () => {
  const [bags, setBags] = useState([]);

  function handleClick() {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    setBags((prevBags) => [...prevBags, { x, y }]);
  }

  const b = bags.map((bag, i) => (
    <img
      key={i}
      src={chipsImg}
      className="bag"
      style={{ top: `${bag.y}px`, left: `${bag.x}px` }}
      alt="bag of chips"
    />
  ));
  return (
    <div className="Chips">
      {/* bags state array length */}
      <h1>Bags eaten: {bags.length}</h1>
      <button onClick={handleClick}>NOM NOM NOM</button>
      <h1>
        <Link to="/">Go back</Link>
      </h1>

      {b}
    </div>
  );
};

export default Chips;
