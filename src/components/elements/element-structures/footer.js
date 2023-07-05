import React from 'react';

import './styles/footer.css';

export default function FooterSegment() {
  return (
    <div className='footer-segment-container segment-container'>
        <div className='site-logo'>
            <div className="navigator-head" style={{fontSize:'21px'}}>
                <a href='/'>EN</a>
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
                <a className='detail-link' href='/'>India</a>
                <a className='detail-link' href='/'>World</a>
                <a className='detail-link' href='/'>Business</a>
                <a className='detail-link' href='/'>Tech</a>
                <a className='detail-link' href='/'>Sports</a>
                <a className='detail-link' href='/'>Cricket</a>
                <a className='detail-link' href='/'>Entertainment</a>
                <a className='detail-link' href='/'>Education</a>
                <a className='detail-link' href='/'>Auto</a>
                <a className='detail-link' href='/'>Life & Style</a>
                <a className='detail-link' href='/'>Politics</a>
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
                <a className='detail-link' href='/'>Cricket</a>
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
