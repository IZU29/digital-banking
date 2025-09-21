import React , {useState} from 'react'


const Section2 = () => {
const [product , setProducts] = useState([
{
  id:1 , 
  image: 'icon-online.svg', 
  title:'Online Banking' , 
  text: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
},
{
  id:2 , 
  image: 'icon-budgeting.svg', 
  title:'Simple Budgeting' , 
  text: 'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
},
{
  id:3 , 
  image: 'icon-onboarding.svg', 
  title:'Fast Onboarding' , 
  text: 'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
},
{
  id:4 , 
  image: 'icon-api.svg', 
  title:'Open API' , 
  text: '  Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
}
])

// 

//   
  return (
    <div className='flex flex-col font-publicsans bg-[hsl(0,0%,98%)] px-4 py-8  md:py-20 md:px-8 '>
      <div className="mb-6">
      <h1 className="leading-tight text-4xl mb-4  text-center md:text-left text-[#2d314d] ">Why choose Digitalbank?</h1>
      <p className="text-base leading-relaxed mb-4 text-center md:w-1/2 md:text-left text-[hsl(233,8%,62%)]">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
      </div>
      <div className="md:flex">
      {
        product.map(item => (
          <div className="mb-6 mr-6">
          <div className="mb-6">
          <img src={item.image} alt="" className="m-auto  md:m-0" />
          </div>
          <h1 className="leading-tight text-2xl mb-6  text-center text-[#2d314d] md:text-left">{item.title}</h1>
          <p className="text-base leading-relaxed mb-6 text-center text-[hsl(233,8%,62%)] md:text-left">{item.text}</p>
          </div>
        ))
      }
    </div>
    </div>
  )
}

export default Section2
