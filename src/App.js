import React from "react";
import ContentCarousel from "./components/ContentCarousel.component";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <main className="App-main">
        <h1>Mapping Your Spiritual Journey</h1>
        <ContentCarousel />
      </main>
    </div>
  );
}

export default App;
