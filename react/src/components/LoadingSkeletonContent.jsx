/* eslint-disable no-unused-vars */
import React from 'react'
import Skeleton from 'react-loading-skeleton';

function LoadingSkeletonContent() {
  return (
    <div className="mt-2">
    <div className="bg-gray-400 mb-2"> <Skeleton count={1} height={5} /></div>
    <div className="bg-gray-400 mb-2"> <Skeleton count={1} height={5} /></div>
    <div className="bg-gray-400 mb-2"> <Skeleton count={1} height={5} /></div>
    <div className="bg-gray-400 mb-2"> <Skeleton count={1} height={5} /></div>
   </div>
    
  )
}

export default LoadingSkeletonContent