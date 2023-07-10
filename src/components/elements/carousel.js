
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import MiniCard from './mini-card';

// const responsive = {
//   0: { items: 1 },
//   568: { items: 3 },
//   1024: { items: 5}
// };

// const items = [
//     <div className="item" data-value="1">
//       <MiniCard height='155px' width='86%' data={'Eu ullamco laboris duis est adipisicing pariatur isad ah maisjud joadgva pujwinus'}/>
//     </div>,
//     <div className="item" data-value="2">
//       <MiniCard height='155px' width='86%' data={'Eu ullamco laboris duis est adipisicing pariatur isad ah maisjud joadgva pujwinus'}/>
//     </div>,
//     <div className="item" data-value="3">
//       <MiniCard height='155px' width='86%' data={'Eu ullamco laboris duis est adipisicing pariatur isad ah maisjud joadgva pujwinus'}/>
//     </div>,
//     <div className="item" data-value="4">
//       <MiniCard height='155px' width='86%' data={'Eu ullamco laboris duis est adipisicing pariatur isad ah maisjud joadgva pujwinus'}/>
//     </div>,
//     <div className="item" data-value="5">
//       <MiniCard height='155px' width='86%' data={'Eu ullamco laboris duis est adipisicing pariatur isad ah maisjud joadgva pujwinus'}/>
//     </div>,
//     <div className="item" data-value="6">
//       <MiniCard height='155px' width='86%' data={'Eu ullamco laboris duis est adipisicing pariatur isad ah maisjud joadgva pujwinus'}/>
//     </div>,
//     <div className="item" data-value="7">
//       <MiniCard height='155px' width='86%' data={'Eu ullamco laboris duis est adipisicing pariatur isad ah maisjud joadgva pujwinus'}/>
//     </div>,
//     <div className="item" data-value="8">
//       <MiniCard height='155px' width='86%' data={'Eu ullamco laboris duis est adipisicing pariatur isad ah maisjud joadgva pujwinus'}/>
//     </div>,
//     <div className="item" data-value="9">
//       <MiniCard height='155px' width='86%' data={'Eu ullamco laboris duis est adipisicing pariatur isad ah maisjud joadgva pujwinus'}/>
//     </div>,
//     <div className="item" data-value="10">
//       <MiniCard height='155px' width='86%' data={'Eu ullamco laboris duis est adipisicing pariatur isad ah maisjud joadgva pujwinus'}/>
//     </div>,
// ];

// export default function NewsCarousel(){
//   return(
//     <AliceCarousel
//         mouseTracking
//         items={items}
//         responsive={responsive}
//         controlsStrategy="alternate"
//     />
// )};

// import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import 'react-alice-carousel/lib/alice-carousel.css';

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  0: { items: 2 },
  568: { items: 4 },
  1024: { items: 5}
};

const items = [
  <div className="item" data-value="1">
    <MiniCard height='155px' width='80%' data={'Eu ullamco laboris duis est adipisicing pariatur isad ah maisjud joadgva pujwinus'}/>
  </div>,
  <div className="item" data-value="2">
    <MiniCard height='155px' width='80%' data={'Eu ullamco laboris duis est adipisicing pariatur isad ah maisjud joadgva pujwinus'}/>
  </div>,
  <div className="item" data-value="3">
    <MiniCard height='155px' width='80%' data={'Eu ullamco laboris duis est adipisicing pariatur isad ah maisjud joadgva pujwinus'}/>
  </div>,
  <div className="item" data-value="4">
    <MiniCard height='155px' width='80%' data={'Eu ullamco laboris duis est adipisicing pariatur isad ah maisjud joadgva pujwinus'}/>
  </div>,
  <div className="item" data-value="5">
    <MiniCard height='155px' width='80%' data={'Eu ullamco laboris duis est adipisicing pariatur isad ah maisjud joadgva pujwinus'}/>
  </div>,
  <div className="item" data-value="6">
    <MiniCard height='155px' width='80%' data={'Eu ullamco laboris duis est adipisicing pariatur isad ah maisjud joadgva pujwinus'}/>
  </div>,
  <div className="item" data-value="7">
    <MiniCard height='155px' width='80%' data={'Eu ullamco laboris duis est adipisicing pariatur isad ah maisjud joadgva pujwinus'}/>
  </div>,
  <div className="item" data-value="8">
    <MiniCard height='155px' width='80%' data={'Eu ullamco laboris duis est adipisicing pariatur isad ah maisjud joadgva pujwinus'}/>
  </div>,
  <div className="item" data-value="9">
    <MiniCard height='155px' width='80%' data={'Eu ullamco laboris duis est adipisicing pariatur isad ah maisjud joadgva pujwinus'}/>
  </div>,
  <div className="item" data-value="10">
    <MiniCard height='155px' width='80%' data={'Eu ullamco laboris duis est adipisicing pariatur isad ah maisjud joadgva pujwinus'}/>
  </div>,
];

export default function NewsCarousel(){
  return (
    <AliceCarousel 
    mouseTracking 
    items={items}
    responsive={responsive}
    disableDotsControls={true}
    />
  );
}