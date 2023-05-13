import React, { useEffect } from 'react';

import './styles/headlines.css';

export default function HeadlinesList({ dataArr, containerId }) {

  useEffect(()=>{
    for(let i=0; i<dataArr.length; i++){
      const headlinesList = document.getElementById(`${containerId}`);
      let listElem = document.createElement('div');
      listElem.className = 'headlines-list-elem';
      listElem.innerHTML = (dataArr[i].length>37)?(dataArr[i].slice(0,37) + '...'): dataArr[i];
      headlinesList.appendChild(listElem);
    }
  },[])

  return (
    <div id={containerId} className='headlines-list-container'>
    </div>
  )
}
