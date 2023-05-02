import React from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon,HomeIcon, PlusCircleIcon} from '@heroicons/react/24/solid'

export default function Header() {
  return (
    <div className=" shadow-sm  h-24 border-b sticky top-0 bg-slate-50 z-30 ">

    
    <div className=" flex items-center justify-between max-w-7xl  mx-4 xl:mx-auto">
  {/* left */}
    <div className=" cursor-pointer h-28 w-28 relative hidden lg:inline-grid">
<Image
src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
layout='fill'
alt="loading"
className=' object-contain'
/>
    </div>
    <div className=" cursor-pointer  h-12  w-12 relative  lg:hidden  ">
<Image
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuSM1hkRzCWyBAnpffQMNFNlO84nLH8gpp4g&usqp=CAU"
layout='fill'
alt="loading"
className=' object-contain'
/>
    </div>
    <div className="">
      <h1 className=' text-4xl  font-extrabold italic'>Mahadev </h1>
    </div>
    {/* middle */}
    <div className="relative ">
      <div className="absolute top--2 left--4 bg-slate-950">
      <MagnifyingGlassIcon className=" h-10   text-zinc-50" />
      </div>
      <input type="text" placeholder='search ' className=' border-green-600 bg-orange-100 text-sm   pl-10 focus:ring-black focus:border-black  text-center h-10 ' />
    </div>



    {/* right */}
    <div className="flex space-x-4 items-center">
      
      <HomeIcon className=" h-8 hidden md:inline-flex  text-green-600 cursor-pointer  hover:scale-125 transition-transform  duration-1000  ease-out" />
      <PlusCircleIcon className=" h-8   text-green-600 cursor-pointer  hover:scale-125 transition-transform  duration-1000  ease-out" />
      <img src="https://d3nn873nee648n.cloudfront.net/900x600/15481/12-SM627046.jpg" alt="user-name" className='h-20 w-20  rounded-full cursor-pointer hover:scale-150 border-green-500 border-4 transition-transform duration-1000'/>
    </div>
   

</div>




</div>




    
  )
}
