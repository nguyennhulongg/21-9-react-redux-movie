import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import MovieDetail from "./components/movieDetail/MovieDetails";
import PageNotFound from "./components/pageNotFound/PageNotFound";

const App = () => {
  return ( 
    <div className="app">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie/:imdbID" component={MovieDetail}/>
            <Route component={PageNotFound}/>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div> 
  );
}

export default App;
