import React, { useEffect } from 'react';

import './styles/headlines.css';

export default function HeadlinesList({ dataArr, containerId }) {
  useEffect(() => {
    const headlinesList = document.getElementById(`${containerId}`);

    // Remove previously added elements
    // while (headlinesList.firstChild) {
    //   headlinesList.removeChild(headlinesList.firstChild);
    // }

    // Add new elements
    for (let i = 0; i < dataArr.length; i++) {
      let listElem = document.createElement('div');
      listElem.className = 'headlines-list-elem';
      listElem.innerHTML = dataArr[i];
      headlinesList.appendChild(listElem);
    }
  }, [dataArr, containerId]);

  return <div id={containerId} className='headlines-list-container'></div>;
}
