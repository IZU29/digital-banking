import React from 'react'

const NavBar = () => {
  return (
    <div className=' py-3 px-4 text-sm border fixed bg-white z-10 w-[100%] md:px-8 md:py-4'>
      {/*  */}
      <div className="md:hidden flex justify-between items-center">
      <img src="logo-dark.svg" alt="" className="h-6 border-black" />
      <img src="icon-hamburger.svg" alt="" className="h-5 w-[25px] border-black " />
      </div>
      
      <div className="justify-between items-center hidden md:flex">
      <img src="logo-dark.svg" alt="" className="h-6 border-black" />
        {/* <img src="" alt="" className="" /> 
  Request Invite
        */}
      <ul className="flex gap-8 text-[#9698a6] w-1/3 justify-between">
        <li className="text-base font-medium tracking-wide cursor-pointer">Home</li>
        <li className="text-base font-medium tracking-wide cursor-pointer">About</li>
        <li className="text-base font-medium tracking-wide cursor-pointer">Contact</li>
        <li className="text-base font-medium tracking-wide cursor-pointer">Blog</li>
        <li className="text-base font-medium tracking-wide cursor-pointer">Careers</li>
      </ul>
      <button className="text-white bg-[#32d25d] bg-gradient-to-bl from-[#32d25d] to-[hsl(192,69%,51%)]  px-4 py-2 text-sm rounded-full self-center w-[150px] font-semibold ">Request Invite</button>
      </div>
      
    </div>
  )
}

export default NavBar
