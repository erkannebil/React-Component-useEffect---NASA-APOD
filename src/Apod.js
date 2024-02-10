import React from 'react'

 function ApodComponent(props) {
    const {apodData} = props;
  return (
    <div className="Apod">
      <p>{apodData.title}</p>
      <p>{apodData.explanation}</p>
      <img src={apodData.url} alt=""/>
      <p>{apodData.date}</p>
    </div>
  )
}
export default ApodComponent