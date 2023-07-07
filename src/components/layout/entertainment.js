import React from 'react';

import NinthSegment from '../elements/element-structures/ninth-segment';
import EighthSegment from '../elements/element-structures/eighth-segment';
import TenthSegment from '../elements/element-structures/tenth-segment';
import FooterSegment from '../elements/element-structures/footer';

export default function Entertainment( { category } ) {
  return (
    <>
      <NinthSegment />
      <EighthSegment top='180px' title="trending"/>
      <TenthSegment  top='300px' category={category}/>
      <FooterSegment top='400px'/>
    </>
  )
}
