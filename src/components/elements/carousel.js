import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MiniCard from './mini-card';

import './styles/carousel.css';


export default function NewsCarousel() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
      

    return (
        <div className='carousel-container'>
            <Carousel
              responsive={responsive}
              centerMode = {true}
            >
              <MiniCard height='200px' width='80%' data={'Eu ullamco laboris duis est adipisicing pariatur isad ah maisjud joadgva pujwinus'}/>
              <MiniCard height='200px' width='80%' data={'Eu ullamco laboris duis est adipisicing pariatur isad ah maisjud joadgva pujwinus'}/>
              <MiniCard height='200px' width='80%' data={'Eu ullamco laboris duis est adipisicing pariatur isad ah maisjud joadgva pujwinus'}/>
              <MiniCard height='200px' width='80%' data={'Eu ullamco laboris duis est adipisicing pariatur isad ah maisjud joadgva pujwinus'}/>
              <MiniCard height='200px' width='80%' data={'Eu ullamco laboris duis est adipisicing pariatur isad ah maisjud joadgva pujwinus'}/>
              <MiniCard height='200px' width='80%' data={'Eu ullamco laboris duis est adipisicing pariatur isad ah maisjud joadgva pujwinus'}/>
              <MiniCard height='200px' width='80%' data={'Eu ullamco laboris duis est adipisicing pariatur isad ah maisjud joadgva pujwinus'}/>
            </Carousel>
        </div>
    )
}
