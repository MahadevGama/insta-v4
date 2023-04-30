import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <div>
      {/* left */}
<div className=" flex items-center justify-between max-w-7xl">
    <div className=" cursor-pointer h-28 w-28 relative hidden lg:inline-grid">
<Image
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWo4v-BaVbLHGYKpGxNQBjiOQpqrJmTAgvLA&usqp=CAU"
layout='fill'
className=' object-contain'
/>
    </div>
    <div className=" cursor-pointer  h-16  w-16 relative  lg:hidden ">
<Image
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLDjM_QI4p1UW4iVvxGzQghHJrMBnYvNXBtA&usqp=CAU"
layout='fill'
className=' object-contain'
/>
    </div>
    <h1>Right side</h1>

</div>


      {/* middle */}



      {/* right */}



    </div>
  )
}
