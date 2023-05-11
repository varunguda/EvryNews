import React, { useEffect } from 'react';

import './styles/headlines.css';

export default function HeadlinesList({ length }) {
  const headlines = [
    'Rn consequat ex reprehenderit dolo...',
    'Lorem ipsum dolor sit amet, consectet...',
    'Etiam non est sodales, scelerisque pur...',
    'Aliquam erat volutpat. Fusce nec quam...',
    'Pellentesque in enim ut augue efficitur...'
  ];

  useEffect(()=>{
    let headlinesList = document.querySelector('.headlines-list-container');
  
    for (let i = 0; i < length; i++) {
      const listElem = document.createElement('div');
      listElem.className = 'headlines-list-elem';
      listElem.innerHTML = headlines[i % headlines.length];
      headlinesList.appendChild(listElem);
    }
  }, [length])

  return (
    <div className='headlines-list-container'>
    </div>
  )
}
