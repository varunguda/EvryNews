import React from 'react';
import { Link } from 'react-router-dom';

import './styles/footer.css';

export default function FooterSegment({ top }) {

  return (
    <div className='footer-segment-container segment-container' style={{marginTop:top}}>
        <div className='site-logo'>
            <div className="navigator-head" style={{fontSize:'21px'}}>
                <Link to='/'>EN</Link>
            </div>

            <div className='navigator-head' style={{fontSize:'21px', marginLeft: '0px'}}>
                <span style={{color: "var(--logo-color-theme)"}}>E</span>VRY<span style={{color: 'var(--logo-color-theme)'}}>N</span>EWS
            </div>
        </div>

        <div className="details-container">
            <div className='details-section'>
                <div className="detail-head">
                    CATEGORIES
                </div>
                <Link className='detail-link' to='/india'>India</Link>
                <Link className='detail-link' to='/world'>World</Link>
                <Link className='detail-link' to='/business'>Business</Link>
                <Link className='detail-link' to='/tech'>Tech</Link>
                <Link className='detail-link' to='/sports'>Sports</Link>
                <Link className='detail-link' to='/cricket'>Cricket</Link>
                <Link className='detail-link' to='/entertainment'>Entertainment</Link>
                <Link className='detail-link' to='/education'>Education</Link>
                <Link className='detail-link' to='/auto'>Auto</Link>
                <Link className='detail-link' to='/lifestyle'>Life & Health</Link>
                <Link className='detail-link' to='/politics'>Politics</Link>
            </div>

            <div className='details-section'>
                <div className="detail-head">
                    CONTACT US
                </div>
                <a className='detail-link' href='/'>LinkedIn</a>
                <a className='detail-link' href='/'>Instagram</a>
                <a className='detail-link' href='/'>Twitter</a>
                <a className='detail-link' href='/'>Youtube</a>
                <a className='detail-link' href='/'>Facebook</a>
            </div>

            <div className='details-section'>
                <div className="detail-head">
                    About
                </div>
                <div>Developed by Varun Sai Guda</div>
            </div>
        </div>
    </div>
  )
}
