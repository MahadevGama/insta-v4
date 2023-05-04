import React from 'react'

export default function Miniprofile() {
  return (
    <div className='flex items-center justify-between mt-10 ml-10 bg-white w-full rounded-sm h-28'>
      <img className=' h-24 w-24 rounded-full border p-[2px]' src="https://d3nn873nee648n.cloudfront.net/900x600/15481/12-SM627046.jpg" alt="" />
      <div className=" flex-1 ml-4">
      <h2 className=' font-bold'>Mahadev Gama</h2>
      <h3 className='text-sm text-gray-400'>  Welcome to instagram</h3>
      </div>
      <button className='font-semibold text-blue-800 text-sm mr-6'>sign out</button>
    </div>
    
  )
}
