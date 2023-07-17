import React from 'react';

import TenthSegment from '../elements/element-structures/tenth-segment';
import SixthSegment from '../elements/element-structures/sixth-segment';
import FooterSegment from '../elements/element-structures/footer';

export default function Movie({ category, articles, totalPages, pageArticles, topHeadlines }) {
  return (
    <>
      {
        (articles && articles.length>0)?(
          <>
          <SixthSegment top='40px' articles={articles.slice(0,24)}/>
          <SixthSegment articles={articles.slice(24,48)}/>
          <SixthSegment articles={articles.slice(48,72)}/>
          <TenthSegment category={category} totalPages={totalPages} pageArticles={pageArticles} topHeadlines={topHeadlines}/>
          </>
        ):(
          <>
          <SixthSegment top='40px' />
          <SixthSegment/>
          <SixthSegment />
          <TenthSegment category={category}/>
          </>
        )
      }
      <FooterSegment/>
    </>
  )
}
