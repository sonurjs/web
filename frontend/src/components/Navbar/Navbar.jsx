import React from 'react'

const Navbar = () => {
  const links=[
  {
    title:"Home",
    link:"/",
  },
  {
    title:"About-Us",
    link:"/about-us",
  },
  {
    title:"All Books",
    link:"/all-books",
  },
  {
    title:"Cart",
    link:"/cart",
  },
  {
    title:"Profile",
    link:"/Profile",
  },
]
  return (
    <div className='flex bg-zinc-800 text-white px-8 py-4 item-center justify-between'>
        <div  className='flex items-center justify-between'>
          <img  className="h-10 me-4" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqyfI_KT9Fjjqza9cgEnBjai_MyaNGAYEiA&s' alt='logo'/>
            <h1 className='text-2xl font-semibold '>BookHeaven </h1>
            </div>
        <div className='nav-links-bookheaven flex gap-4'>
          {links.map((items,i)=><div className='hover:text-blue-500 transition-all duration-300' key={i}>{items.title}</div>
        )}
        </div>
        <div className='flex gap-4'>
          <button className='px-2 py-1 border border-blue-500 rounded hover:bg-white hover:text-zinc-800 '>SignIn</button>
          <button className='px-2 py-1 bg-blue-500 rounded hover:bg-white hover:text-zinc-800'>SignUp</button>
    </div>
        </div>
  
  )
}

export default Navbar