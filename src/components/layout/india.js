import React from 'react';
import{
  Link,
  Route,
  Routes,
  BrowserRouter as Router
} from 'react-router-dom';

import NinthSegment from '../elements/element-structures/ninth-segment';
import EighthSegment from '../elements/element-structures/eighth-segment';
import TenthSegment from '../elements/element-structures/tenth-segment';

export default function India( { alp } ) {
  return (
    <>
      <NinthSegment />
      <EighthSegment top='180px'/>
      <TenthSegment alp={alp}/>
    </>
  )
}
