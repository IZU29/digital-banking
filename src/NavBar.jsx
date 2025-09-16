import React from 'react'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center py-3 px-4 text-sm border fixed bg-white w-[100%]'>
      {/* <img src="" alt="" className="" />
      <ul className="">
        <li className=""></li>
        <li className=""></li>
        <li className=""></li>
        <li className=""></li>
        <li className=""></li>
      </ul>
      <button className=""></button> */}
      <img src="logo-dark.svg" alt="" className="h-6 border-black" />
      <img src="icon-hamburger.svg" alt="" className="h-5 w-[25px] border-black" />
    </div>
  )
}

export default NavBar
