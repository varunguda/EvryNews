import React from 'react';

import NinthSegment from '../elements/element-structures/ninth-segment';
import EighthSegment from '../elements/element-structures/eighth-segment';
import TenthSegment from '../elements/element-structures/tenth-segment';
import FooterSegment from '../elements/element-structures/footer';

export default function India( { category, articles } ) {
  return (
    <>
      <NinthSegment articles={articles.slice(0,2).concat(articles.slice(8,19))}/>
      <EighthSegment top='180px' category="trending" articles={articles.slice(2,8)}/>
      <TenthSegment  top='300px' category={category}/>
      <FooterSegment top='400px'/>
    </>
  )
}
