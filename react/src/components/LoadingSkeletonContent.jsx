/* eslint-disable no-unused-vars */
import React from 'react'
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

function LoadingSkeletonContent() {
  return (
    <div className="mt-2">
    <div className="mb-2"> <Skeleton count={5} height={20} showAnimation={true} color="#f4f5f7" highlightColor="#e5e5e5" /></div>
    
   </div>
    
  )
}

export default LoadingSkeletonContent