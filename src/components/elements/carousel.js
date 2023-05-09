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
              <MiniCard height='200px' width='80%' data={'Eu ullamco laboris duis est adipisicing pariatur.Culpa in nostrud voluptate fugiat deserunt proident'}/>
              <MiniCard height='200px' width='80%' data={'Eiusmod minim id pariatur voluptate.In aliquip proident pariatur elit labore eiusmod laborum.Labore velit cillum'}/>
              <MiniCard height='200px' width='80%' data={'Aute velit id nostrud id eu elit id eu id incididunt consectetur mollit sit.Tempor elit duis tempor'}/>
              <MiniCard height='200px' width='80%' data={'Dolore dolore sint minim proident nostrud anim consequat fugiat ea officia velit'}/>
              <MiniCard height='200px' width='80%' data={'Dolore dolore sint minim proident nostrud anim consequat fugiat ea officia velit '}/>
              <MiniCard height='200px' width='80%' data={'Sint id cillum minim ullamco eu qui quis commodo.Amet reprehenderit in mollit sin'}/>
              <MiniCard height='200px' width='80%' data={'Sint id cillum minim ullamco eu qui quis commodo.Amet reprehenderit in mollit sint quis amet cu'}/>
            </Carousel>
        </div>
    )
}
