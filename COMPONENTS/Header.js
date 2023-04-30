import React from 'react'
import Image from 'next/image'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

export default function Header() {
  return (
    
    <div className=" flex items-center justify-between max-w-7xl mt-8">
  {/* left */}
    <div className=" cursor-pointer h-28 w-28 relative hidden lg:inline-grid">
<Image
src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
layout='fill'
className=' object-contain'
/>
    </div>
    <div className=" cursor-pointer  h-12  w-12 relative  lg:hidden  ">
<Image
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuSM1hkRzCWyBAnpffQMNFNlO84nLH8gpp4g&usqp=CAU"
layout='fill'
className=' object-contain'
/>
    </div>
    {/* middle */}
    <div className="relative ">
      <div className="absolute top-2 left-2">
      <MagnifyingGlassIcon className=" h-6    text-green-600" />
      </div>
      <input type="text" placeholder='search' className=' border-green-600 bg-orange-100 text-sm pl-10 focus:ring-black focus:border-black  rounded-md' />
    </div>



    {/* right */}
    <h1>Right side</h1>

</div>








    
  )
}
