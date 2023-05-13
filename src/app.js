

import React from 'react';


import Navbar from './components/layout/navbar';
import Content from './components/layout/content';

export default function App() {

    return(
      <div>
        {console.log('child test', Math.random())}
        <Navbar />
        <Content />
      </div>
    )
      
}
