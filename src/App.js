import React, { useState, useEffect } from "react";
import "./App.css";
import ApiObj from "./FetchApi";


import ApodComponent from "./Apod";

function App() {
  const [apodData, setApodData] = useState([ ]);

  useEffect(async () => {
    let fetchData= await ApiObj.fetchData(11);
    setApodData(fetchData);
    console.log(fetchData);
  },[]);
  
  return (
    <div className="App">
  {apodData.map((item, index) => (
      <ApodComponent key={index} apodData={item} />
    ))}
    </div>
  );
}

export default App;
