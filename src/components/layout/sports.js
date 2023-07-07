import React from 'react'

import FirstSegment from '../elements/element-structures/first-segment'
import TenthSegment from '../elements/element-structures/tenth-segment'
import FooterSegment from '../elements/element-structures/footer'

export default function Sports({ category }) {
  return (
    <>
      <FirstSegment />
      <TenthSegment top='180px' category={category}/>
      <FooterSegment top='250px'/>
    </>
  )
}
