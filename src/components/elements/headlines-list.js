import React from 'react';

import './styles/headlines.css';

export default function HeadlinesList({ length, articles }) {
  // useEffect(() => {
  //   const headlinesList = document.getElementById(`${containerId}`);

  //   (articles)?(
  //     articles.map((article)=>{
  //       let listElem = document.createElement('div');
  //       listElem.className = 'headlines-list-elem';
  //       listElem.innerHTML = article.title;
  //       headlinesList.innerHTML = '';
  //       headlinesList.appendChild(listElem);
  //     })
  //   )
  //   :(
  //     [...Array(length)].map(()=>{
  //       let listElem = document.createElement('div');
  //       listElem.classList.add('placeholder');
  //       listElem.classList.add('text-placeholder');
  //       headlinesList.appendChild(listElem);
  //     })
  //   )
  // }, []);

  return (
  <div className='headlines-list-container'>
    {
      (articles)?(
        articles.map((article)=>{
          return (
          <div key={article.url} className="headlines-list-elem">
            <a href={article.url} className='card-link' target='_blank' rel='noreferrer'>
              {article.title}
            </a>
          </div>)
        })
      )
      :(
        [...Array(length)].map((_,index)=>{
          return <div key={index} className="text-placeholder placeholder"></div>
        })
      )
    }
  </div>
  )
}
