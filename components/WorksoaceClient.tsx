import React from 'react'

type Props = {}

function WorksoaceClient({}: Props) {
  return (
    <div className='flex h-[calc(100vh-4rem)] overflow-hidden '>

      {/* chat panel */}
      <div className='w-[320px] shrink-0 border-r border-white/6  flex items-center justify-center '>
         <p>Chat Panel</p>
      </div>
      {/* Coding Panel */}
      <div className=' flex flex-1 flex-col overflow-hidden items-center justify-center'>
         <p>Coding Panel</p>
      </div>
    </div>
  )
}

export default WorksoaceClient