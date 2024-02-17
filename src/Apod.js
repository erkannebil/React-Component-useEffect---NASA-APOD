import React from 'react'

 function ApodComponent(props) {
    const {apodData} = props;
  return (
    <div className="ApodPage">
        <div className="Apod">
        <h1>{apodData.title}</h1>
        <p id='explanation'>{apodData.explanation}</p>
        <img src={apodData.url} alt=""/>
        <p>{apodData.date}</p>
         </div>
    </div>
  )
}
export default ApodComponent