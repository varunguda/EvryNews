import React from 'react';

import NinthSegment from '../elements/element-structures/ninth-segment';
import EighthSegment from '../elements/element-structures/eighth-segment';
import TenthSegment from '../elements/element-structures/tenth-segment';
import FooterSegment from '../elements/element-structures/footer';

export default function Tech( { category, articles, topHeadlines, totalPages, pageArticles } ) {
  return (
    <>
      {
        (articles && articles.length>0)?(
          <>
            <NinthSegment articles={articles.slice(0,2).concat(articles.slice(8,19))}/>
            <EighthSegment category="trending" articles={articles.slice(2,8)}/>
          </>
        ):(
          <>
            <NinthSegment />
            <EighthSegment category="trending"/>
          </>
        )
      }

      {
        (topHeadlines && topHeadlines.length>0)?(
          <TenthSegment category={category} totalPages={totalPages} pageArticles={pageArticles} topHeadlines={topHeadlines}/>
        ):(
          <TenthSegment category={category}/>
        )
      }
      <FooterSegment/>
    </>
  )
}
