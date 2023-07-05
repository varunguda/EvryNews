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

export default function Content() {

  return (
    <div className='main-container'>
      <Router>
        <NavbarSecondary />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='india' element={<India />} />
          <Route path='world' element={<India />} />
          <Route path='business' element={<India />} />
          <Route path='tech' element={<India />} />
          <Route path='sports' element={<India />} />
          <Route path='cricket' element={<India />} />
          <Route path='entertainment' element={<India />} />
          <Route path='education' element={<India />} />
          <Route path='auto' element={<India />} />
          <Route path='lifestyle' element={<India />} />
          <Route path='politics' element={<India />} />
        </Routes>
      </Router>
    </div>
  )
}
