import React, {  useEffect, useState } from 'react'
import minifaker from 'minifaker';
import "minifaker/locales/en"
import Story from './Story';

export default function Stories() {
    const[StoryUsers,setStoryUsers]=useState([])
    useEffect(()=>{
        const StoryUsers=minifaker.array(20,(i)=>(
            {
            username:minifaker.username({locale:"en"}).toLocaleLowerCase(),
            img:`https://i.pravatar.cc/150?img=${Math.ceil(Math.random()*70)}`,
            id:i,
        }));
        setStoryUsers(StoryUsers);
        console.log(StoryUsers);
    },[])
  return (
    <div>
      {StoryUsers.map(user=>(
        <Story key={user.id} username={user.username} img={user.img}/>
      ))}
    </div>
  )
}
