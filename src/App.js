import React from "react";
import "./App.scss";
import Navbar from "./Layout/Navbar/Navbar";
import Homepage from "./Layout/Pages/Homepage/Homepage";
import AllProductPage from "./Layout/Pages/AllProductsPage/AllProductPage";
import SinglePage from "./Layout/Pages/SinglePage/SinglePage";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/homes" component={AllProductPage} />
        <Route exact path="/homes/:id" component={SinglePage} />
      </Switch>
    </div>
  );
}

export default App;
