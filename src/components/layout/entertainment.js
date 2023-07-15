import React from 'react';

import NinthSegment from '../elements/element-structures/ninth-segment';
import EighthSegment from '../elements/element-structures/eighth-segment';
import TenthSegment from '../elements/element-structures/tenth-segment';
import FooterSegment from '../elements/element-structures/footer';
import SixthSegment from '../elements/element-structures/sixth-segment';

export default function Entertainment( { category, articles, topHeadlines, totalPages, pageArticles } ) {
  return (
    <>
      {
        (articles && articles.length>0)?(
          <>
            <NinthSegment articles={articles.slice(0,2).concat(articles.slice(8,19))}/>
            <EighthSegment top='180px' category="trending" articles={articles.slice(2,8)}/>
            <SixthSegment top='320px' articles={articles.slice(20,44)} />
          </>
        ):(
          <>
            <NinthSegment />
            <EighthSegment top='180px' category="trending"/>
            <SixthSegment top='320px'/>
          </>
        )
      }

      {
        (topHeadlines && topHeadlines.length>0)?(
          <TenthSegment  top='430px' category={category} totalPages={totalPages} pageArticles={pageArticles} topHeadlines={topHeadlines}/>
        ):(
          <TenthSegment  top='430px' category={category}/>
        )
      }
      <FooterSegment top='500px'/>
    </>
  )
}
