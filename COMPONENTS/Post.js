import React from 'react'
import {EllipsisHorizontalIcon,HeartIcon,ChatBubbleOvalLeftEllipsisIcon,BookmarkIcon} from "@heroicons/react/24/outline"

export default function Post({img,username,userImg,captions,id}) {
  return (
    <div className=' bg-white my-7 border-green-600 border-2 rounded-md'>
    {/* post header */}
    <div className="flex items-center p-6 ">
      <img className=' h-24 w-24 rounded-full object-cover border p-1 mr-3 ' src={userImg} alt={username} />
      <p className='font-bold flex-1'>{username}</p>
      <EllipsisHorizontalIcon className='h-10 '/>
    </div>
    {/* post img */}
    <img className='object-cover w-full' src={img} alt="" />
    {/* post buttons */}
    <div className="flex justify-between px-4 pt-4">
      <div className="flex space-x-4">
        <HeartIcon className='btn hover:scale-150 '/>
        <ChatBubbleOvalLeftEllipsisIcon className='btn hover:scale-150'/>

      </div>
      <BookmarkIcon className='btn hover:scale-150'/>
    </div>
    </div>
  )
}
