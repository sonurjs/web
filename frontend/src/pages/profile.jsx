import React from 'react'

const profile = () => {
  return (
    <div className='bg-zinc-900 px-2 md:px-12 flex md:flex-row h-screen py-8  gap-4 text-white'>
<div><Sidebar/></div>
<div><Outlet/></div>

    </div>
  )
}

export default profile