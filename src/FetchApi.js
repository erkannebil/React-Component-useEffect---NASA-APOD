import React from 'react'

const apiKey = "cJcngoG4ApjVi1BxgNiNRwYcORP2GHVytrstOIlX";
let ApiObj ={

    fetchData: async function (count) {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
          
         let result= await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`, requestOptions)
            .then(response => response.text());
           return JSON.parse(result);
    }


  
};

export default ApiObj;
