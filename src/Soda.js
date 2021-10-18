import React from "react";
import { Link } from "react-router-dom";
import sodaImg from "./soda.jpg";

const Soda = () => {
  return (
    <div className="Soda">
      <img src={sodaImg} alt="soda" />
      <h1>OMG SUGARRRRR</h1>
      <h1>
        <Link to="/">Go back</Link>
      </h1>
    </div>
  );
};

export default Soda;
