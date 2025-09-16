import React , {useState} from 'react'

const Section3 = () => {
  const [item , setItem] = useState([
    {
      image : 'image-currency.jpg',
      author: 'By Claire Robinson',
      title: 'Receive money in any currency with no fees',
      text: 'The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …'
    }
    ,{
      image : 'image-restaurant.jpg',
      author: 'By Wilson Hutton',
      title: 'Treat yourself without worrying about money',
      text: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'
    },{
      image : 'image-plane.jpg',
      author: 'By Wilson Hutton',
      title: 'Take your Digitalbank card wherever you go',
      text: 'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'
    },{
      image : 'image-confetti.jpg',
      author: 'By Claire Robinson',
      title: 'Our invite-only Beta accounts are now live!',
      text: 'After a lot of hard work by the whole team, we’re excited to launch our closed beta.It’s easy to request an invite through the site ...'
    }])
  return (
    <div className='px-4 py-8'>
      <h1 className="leading-tight text-4xl mb-4  text-center text-[#2d314d] ">Latest Articles</h1>
     {
       item.map( (item) => (
         <div className="flex flex-col mb-6 rounded-md shadow"> 
         <img src={item.image} alt="" className="" />
         <div className="p-6 space-x-3">
         <h6 className="text-[#9698a6] text-sm">{item.author}</h6>
         <h2 className=" text-lg leading-snug">{item.title}</h2>
         <p className="text-[#9698a6] font-semibold">{item.text}</p>
         </div>
         </div>
       ))
     }
    </div>
  )
}

export default Section3
