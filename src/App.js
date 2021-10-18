import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import NavBar from "./NavBar";

import VendingMachine from "./VendingMachine";
import "./App.css";

import Soda from "./Soda";
import Chips from "./Chips";
import Candy from "./Candy";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        {/* Homepage */}
        {/* path prop: path in web address */}
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/soda">
          <Soda />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
        <Route exact path="/candy">
          <Candy />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
