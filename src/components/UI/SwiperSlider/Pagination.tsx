import React, { forwardRef } from 'react'

const PaginationElem = forwardRef<HTMLDivElement>(function PaginationElem(props, ref) {
  return (
    <div 
      ref={ref}
      className='swiper-pagination'
      
   >
      {/* <div className='swiper-pagination-element' />
      <div className='swiper-pagination-active-element' /> */}
   </div>
  )
})

export default PaginationElem