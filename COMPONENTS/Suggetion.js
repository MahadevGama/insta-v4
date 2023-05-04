import React, { useEffect ,useState} from 'react'
import minifaker, { jobTitle, username } from 'minifaker';

export default function Suggetion() {
    const [suggetion, setSuggetion] = useState([]);
    
    useEffect(()=>{
        const suggetion=minifaker.array(5,(i)=>({

            username:minifaker.username({locale:"en"}).toLowerCase(),
            jobTitle: minifaker.jobTitle(),
            id:i

        }))
        setSuggetion(suggetion)
    },[])
  return (
    <div className='mt-4 ml-10 bg-white w-full h-10'>
      <div className="flex justify-between mb-5 text-sm">
        <h3 className='ml-2 font-bold text-gray-400'>suggetion for you</h3>
        <button className='text-gray-400 font-semibold mr-2'>See All</button>
      </div>
      {suggetion.map(suggetion=>(
        <div className="flex items-center justify-between mt-3 bg-white">
          <img className='h-10 rounded-full border p-[2px]' src={`https://i.pravatar.cc/150?img=${Math.ceil(Math.random()*70)}`} alt="" />
          <div className="flex-1 ml-6">
            <h2 className=' font-semibold text-sm'>{suggetion.username}</h2>
            <h3 className='text-sm text-gray-200 truncate w-[230px]'>{suggetion.jobTitle}</h3>
          </div>
          <button className='text-blue-800 font-semibold text-sm'>Fallow</button>
        </div>
      ))}
    </div>
  )
}
