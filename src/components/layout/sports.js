import React from 'react'

import FirstSegment from '../elements/element-structures/first-segment'
import TenthSegment from '../elements/element-structures/tenth-segment'
import FooterSegment from '../elements/element-structures/footer'

export default function Sports({ category, topHeadlines, pageArticles, totalPages, articles}) {
  return (
    <>
      {
        (articles && articles.length>0)?(
          <FirstSegment category={category} articles={articles}/>
        ):(
          <FirstSegment category={category}/>
        )
      }
      
      {
        (pageArticles && pageArticles.length>0)?(
          <TenthSegment top='180px' category={category} topHeadlines={topHeadlines} pageArticles={pageArticles} totalPages={totalPages}/>
        ):(
          <TenthSegment top='180px' category={category}/>
        )
      }
      <FooterSegment top='250px'/>
    </>
  )
}
