import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./Components/Home/HomePage.jsx";
import PageSearchResult from "./Components/PageResult/PageResult";
import PageArtist from "./Components/PageArtist/PageArtist";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/busqueda" component={PageSearchResult} />
        <Route path="/artista" component={PageArtist} />
        <Route path="/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
