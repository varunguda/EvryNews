

import React from 'react';


import Navbar from './components/layout/navbar';
import Content from './content';

export default function App() {

  const fetchNewsArticles = async (api, fetchFn) =>{
    try{
      let response = await fetch(api);
      let jsonData = await response.json();
      fetchFn(jsonData.articles);
    }catch(err){
      console.log('Error while fetching the data:' + err);
    }
  }

  const fetchIoArticles = async (api, fetchFn) =>{
    try{
      let response = await fetch(api);
      let jsonData = await response.json();
      fetchFn(jsonData.results)
    }catch(err){
      console.log('Error while fetching the data:' + err);
    }
  }

    return(
      <div>
        <Navbar />
        <Content 
        fetchNewsArticles={fetchNewsArticles}
        fetchIoArticles={fetchIoArticles}
        />
      </div>
    )
      
}
