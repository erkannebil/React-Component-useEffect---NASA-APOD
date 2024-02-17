import React, { useState, useEffect } from "react";
import "./App.css";
import ApiObj from "./FetchApi";
import { Container } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Comment from './component/comment';

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
     <Comment/>
    </div>
  );
}

export default App;
