

import React from 'react';

import './styles/image-card.css';
import DescCard from './desc-card';

export default function ImageCard({height, width, title, imageUrl, url, article}){
    return(
        <div className='image-card-container' style={{ height: `${height}`, width:`${width}`}}>
                <div className='image-card-image-container'>
                    {
                        (article && article.url)?(<a href={url} className='card-link' target='_blank' rel='noreferrer' >
                            <img 
                            className='image-card-image' 
                            src= {imageUrl?imageUrl:'./site-logo-b&w.png'}
                            alt='ic'/>
                        </a>):
                        <div className="image-card-image image-card-image image-placeholder placeholder"></div>
                    }
                </div>
                <div className='image-card-description'>
                    {(article && article.title)?(
                        <DescCard height='100%' width='100%' data={title} url={article.url}/>
                        ):(
                        <DescCard height='100%' width='100%'/>
                    )}
                </div>
        </div>
    )
}