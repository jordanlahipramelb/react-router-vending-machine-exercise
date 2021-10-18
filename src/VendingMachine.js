import React from "react";
import { Link } from "react-router-dom";

const VendingMachine = () => {
  return (
    <div className="VendingMachine">
      <div>
        <h1>Hello. I am a vending machine. What would you like? </h1>
      </div>
      <div>
        <h1>
          <Link to="/soda">Soda</Link>
        </h1>
        <h1>
          <Link to="/chips">Chips</Link>
        </h1>
        <h1>
          <Link to="/candy">Candy</Link>
        </h1>
      </div>
    </div>
  );
};

export default VendingMachine;
