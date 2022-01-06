import React from "react";
import "./App.css";
import Nav from "./Nav";
import Shop from "./Shop";
import About from "./About";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
//BrowserRouter -- to add the ability to handle routing in react
//Route -- It renders out the component based on the URL

function App() {
  return (
    // Things which are inside this router tag have the ability to use routing
    <Router>
      <div className="App">
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default App;
