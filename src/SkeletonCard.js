import React from 'react'
import Skeleton from 'react-loading-skeleton'
import './row.css'

export default function SkeletonCard({cards}) {
  return (
    Array(cards).fill(0).map((item, i )=> 

    <div className='card-skeleton' key={i}>
        <Skeleton width={170} height={250}/>
    </div>    
    
    )

  )
}

