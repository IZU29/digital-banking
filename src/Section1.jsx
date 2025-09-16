import React from 'react'

const Section1 = () => {
  return (
    <div className='px-4 py-8'>
      <img src="image-mockups.png" alt="" className="" />
      <div className="flex flex-col font-publicsans">
        <h1 className="text-[36px] leading-tight mb-4 self-center w-[100%] text-center text-[#2d314d]">Next generation digital banking</h1>
        <p className="text-base leading-relaxed mb-4 text-center text-[hsl(233,8%,62%)]">Take your financial life online. Your Digitalbank account will be a one-stop-shop 
        for spending, saving, budgeting, investing, and much more.</p>
        <button className="text-white bg-[#32d25d] bg-gradient-to-bl from-[#32d25d] to-[hsl(192,69%,51%)]  px-4 py-2 text-sm rounded-full self-center w-[150px] font-semibold ">Request Invite</button>
      </div>
    </div>
  )
}
// #2d314d
export default Section1
