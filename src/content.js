import React from 'react';
import {
  Route,
  Routes,
  BrowserRouter as Router
} from 'react-router-dom';

import './components/layout/styles/navbar.css';

import NavbarSecondary from './components/elements/navbar2';
import Home from './components/layout/home';
import India from './components/layout/india';
import World from './components/layout/world';
import Business from './components/layout/business';
import Tech from './components/layout/tech';
import Sports from './components/layout/sports';
import Cricket from './components/layout/cricket';
import Entertainment from './components/layout/entertainment';
import Education from './components/layout/education';
import Auto from './components/layout/auto';
import LifeStyle from './components/layout/lifestyle';
import Politics from './components/layout/politics';

export default function Content() {

  return (
    <div className='main-container'>
      <Router>
        <NavbarSecondary />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/india' element={<India category='india'/>} />
          <Route path='/india/2' element={<India category='india'/>} />
          <Route path='/india/3' element={<India category='india'/>} />
          <Route path='/india/4' element={<India category='india'/>} />
          <Route path='/india/5' element={<India category='india'/>} />
          <Route path='/india/6' element={<India category='india'/>} />
          <Route path='/world' element={<World category='world'/>} />
          <Route path='/world/2' element={<World category='world'/>} />
          <Route path='/world/3' element={<World category='world'/>} />
          <Route path='/world/4' element={<World category='world'/>} />
          <Route path='/world/5' element={<World category='world'/>} />
          <Route path='/world/6' element={<World category='world'/>} />
          <Route path='/business' element={<Business category='business'/>} />
          <Route path='/business/2' element={<Business category='business'/>} />
          <Route path='/business/3' element={<Business category='business'/>} />
          <Route path='/business/4' element={<Business category='business'/>} />
          <Route path='/business/5' element={<Business category='business'/>} />
          <Route path='/business/6' element={<Business category='business'/>} />
          <Route path='/tech' element={<Tech category='tech'/>} />
          <Route path='/tech/2' element={<Tech category='tech'/>} />
          <Route path='/tech/3' element={<Tech category='tech'/>} />
          <Route path='/tech/4' element={<Tech category='tech'/>} />
          <Route path='/tech/5' element={<Tech category='tech'/>} />
          <Route path='/tech/6' element={<Tech category='tech'/>} />
          <Route path='/sports' element={<Sports category='sports'/>} />
          <Route path='/sports/2' element={<Sports category='sports'/>} />
          <Route path='/sports/3' element={<Sports category='sports'/>} />
          <Route path='/sports/4' element={<Sports category='sports'/>} />
          <Route path='/sports/5' element={<Sports category='sports'/>} />
          <Route path='/sports/6' element={<Sports category='sports'/>} />
          <Route path='/cricket' element={<Cricket category='cricket'/>} />
          <Route path='/cricket/2' element={<Cricket category='cricket'/>} />
          <Route path='/cricket/3' element={<Cricket category='cricket'/>} />
          <Route path='/cricket/4' element={<Cricket category='cricket'/>} />
          <Route path='/cricket/5' element={<Cricket category='cricket'/>} />
          <Route path='/cricket/6' element={<Cricket category='cricket'/>} />
          <Route path='/entertainment' element={<Entertainment category='entertainment'/>} />
          <Route path='/entertainment/2' element={<Entertainment category='entertainment'/>} />
          <Route path='/entertainment/3' element={<Entertainment category='entertainment'/>} />
          <Route path='/entertainment/4' element={<Entertainment category='entertainment'/>} />
          <Route path='/entertainment/5' element={<Entertainment category='entertainment'/>} />
          <Route path='/entertainment/6' element={<Entertainment category='entertainment'/>} />
          <Route path='/education' element={<Education category='education'/>} />
          <Route path='/education/2' element={<Education category='education'/>} />
          <Route path='/education/3' element={<Education category='education'/>} />
          <Route path='/education/4' element={<Education category='education'/>} />
          <Route path='/education/5' element={<Education category='education'/>} />
          <Route path='/education/6' element={<Education category='education'/>} />
          <Route path='/auto' element={<Auto category='auto'/>} />
          <Route path='/auto/2' element={<Auto category='auto'/>} />
          <Route path='/auto/3' element={<Auto category='auto'/>} />
          <Route path='/auto/4' element={<Auto category='auto'/>} />
          <Route path='/auto/5' element={<Auto category='auto'/>} />
          <Route path='/auto/6' element={<Auto category='auto'/>} />
          <Route path='/lifestyle' element={<LifeStyle category='lifestyle'/>} />
          <Route path='/lifestyle/2' element={<LifeStyle category='lifestyle'/>} />
          <Route path='/lifestyle/3' element={<LifeStyle category='lifestyle'/>} />
          <Route path='/lifestyle/4' element={<LifeStyle category='lifestyle'/>} />
          <Route path='/lifestyle/5' element={<LifeStyle category='lifestyle'/>} />
          <Route path='/lifestyle/6' element={<LifeStyle category='lifestyle'/>} />
          <Route path='/politics' element={<Politics category='politics'/>} />
          <Route path='/politics/2' element={<Politics category='politics'/>} />
          <Route path='/politics/3' element={<Politics category='politics'/>} />
          <Route path='/politics/4' element={<Politics category='politics'/>} />
          <Route path='/politics/5' element={<Politics category='politics'/>} />
          <Route path='/politics/6' element={<Politics category='politics'/>} />
        </Routes>
      </Router>
    </div>
  )
}
