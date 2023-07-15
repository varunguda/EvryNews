import React from 'react';

import TenthSegment from '../elements/element-structures/tenth-segment';
import SixthSegment from '../elements/element-structures/sixth-segment';
import FooterSegment from '../elements/element-structures/footer';

export default function Cricket({ category, articles, totalPages, pageArticles, topHeadlines }) {
  return (
    <>
      {
        (articles && articles.length>0)?(
          <>
          <SixthSegment top='40px' articles={articles}/>
          <TenthSegment top='160px' category={category} totalPages={totalPages} pageArticles={pageArticles} topHeadlines={topHeadlines}/>
          </>
        ):(
          <>
          <SixthSegment top='40px'/>
          <TenthSegment top='160px' category={category}/>
          </>
        )
      }
      <FooterSegment top='200px'/>
    </>
  )
}
