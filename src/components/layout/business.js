import React from 'react';

import TenthSegment from '../elements/element-structures/tenth-segment';
import FooterSegment from '../elements/element-structures/footer';

export default function Business({ category, topHeadlines, pageArticles, totalPages }) {

  return (
    <>
      {
        (pageArticles && pageArticles.length>0)?(
          <TenthSegment top='40px' category={category} topHeadlines={topHeadlines} pageArticles={pageArticles} totalPages={totalPages}/>
        ):(
          <TenthSegment top='40px' category={category}/>
        )
      }
      <FooterSegment top='100px'/>
    </>
  )
}
