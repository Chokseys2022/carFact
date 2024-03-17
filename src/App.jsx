// App.js
import React, { useState } from "react";
import CarSearch from "./components/CarSearch";
import "./App.css";

function App() {
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");
  const [loadingMake, setLoadingMake] = useState(true);
  const [loadingModel, setLoadingModel] = useState(true);

  return (
    <div className="App">
      <CarSearch
        setCarMake={setCarMake}
        setLoadingMake={setLoadingMake}
        setCarModel={setCarModel}
        setLoadingModel={setLoadingModel}
      />
      <div className="content">
        <div className={`make ${loadingMake ? 'hidden' : ''}`}>Make: {carMake}</div>
        <div className={`model ${loadingModel ? 'hidden' : ''}`}>Model: {carModel}</div>
      </div>
    </div>
  );
}

export default App;
