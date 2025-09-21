import React from 'react'
import {FaFacebook , FaYoutube , FaTwitter , FaPinterest , FaInstagram} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='bg-[hsl(233,26%,24%)] px-4 py-8 justify-center'>
      {/* Logo
        FaIcons 
        LIst 
        button 
        Copyright

        // list
        
  
  
  
  
  
      */}
      <div className="md:flex md:w-[85%] m-auto justify-between items-center">
      <div className="md:w-[20%]">
      <img src="logo-light.svg" alt="" className=" m-auto h-7 mb-6" />
      <div className="text-white flex  text-3xl justify-between w-4/5 m-auto mb-6 md:m-0 ">
          <FaFacebook className=''/>
          <FaYoutube className=''/>
          <FaTwitter className=''/>
          <FaPinterest className=''/>
          <FaInstagram className=''/>
      </div>
      </div>
      <ul className="w-4/5 m-auto mb-6 md:m-0 text-white text-lg text-center flex flex-col gap- md:grid md:grid-cols-2 md:text-left md:w-[45%]">
        <li className="">About Us</li>
        <li className="">Contact</li>
        <li className="">Blog</li>
        <li className="">Careers</li>
        <li className="">Support</li>
        <li className="">Privacy Policy</li>
      </ul>
      <div className="md:w-[25%]">
      <div className="flex justify-center mb-6 ">
        <button className="text-white bg-[#32d25d] bg-gradient-to-bl from-[#32d25d] to-[hsl(192,69%,51%)]  px-4 py-2 text-sm rounded-full self-center w-[150px] font-semibold ">Request Invite</button>
        </div>
        <p className="text-center text-sm text-white font-semibold">© Digitalbank. All Rights Reserved</p>
        </div>
    </div>
    </div>
  )
}

export default Footer
