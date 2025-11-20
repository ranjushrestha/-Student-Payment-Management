import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen text-gray-500'>
      <div className='animate-spin rounded-full h-8 w-8 border-2 border-gray-300 border-t-blue-50'></div>
    </div>
  )
}

export default Loader
