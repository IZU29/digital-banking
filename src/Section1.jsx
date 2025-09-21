import React from 'react'

const Section1 = () => {
  return (
    <div className='px-4 py-8 flex flex-col md:flex-row-reverse md:py-20 md:px-8 md:items-center relative border-green-400'>
      <div className="md:relative -right-20 md:w-[65%] -top-24 justify-end  border-purple-600 m-0">
        <div className="relative border-red-500 md:-top-24">
      <img src="image-mockups.png" alt="" className="md:" />
      </div>
      <div className="hidden md:flex border-black">
      <img src="bg-intro-desktop.svg" alt="" className='absolute -top-28 -z-10 w-full object-cover' />
      </div>
      </div>
      <div className="flex flex-col font-publicsans md:relative border-blue-600 m-0 md:[1%] left-2 md:w-[40%] md:-top-36">
        <h1 className="text-[36px] leading-tight mb-4 self-center w-[100%] text-center text-[#2d314d] md:mb-6 md:text-left">Next generation digital banking</h1>
        <p className="text-base leading-relaxed mb-4 text-center text-[#9698a6] md:mb-6 md:text-left">Take your financial life online. Your Digitalbank account will be a one-stop-shop 
        for spending, saving, budgeting, investing, and much more.</p>
        <button className="text-white bg-[#32d25d] bg-gradient-to-bl from-[#32d25d] to-[hsl(192,69%,51%)]  px-4 py-2 text-sm rounded-full self-center w-[150px] font-semibold  md:self-start">Request Invite</button>
      </div>
    </div>
  )
}
// #2d314d
export default Section1
