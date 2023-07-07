import React from 'react';

import TenthSegment from '../elements/element-structures/tenth-segment';
import FooterSegment from '../elements/element-structures/footer';

export default function Education({ category }) {
  return (
    <>
      <TenthSegment top='40px' category={category}/>
      <FooterSegment top='100px'/>
    </>
  )
}
