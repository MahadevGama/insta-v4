import React from 'react'
import Post from './Post'

export default function Posts() {
    const Posts=[
        {
            id:"1",
            username:"mahadevgama",
           userImg:"https://d3nn873nee648n.cloudfront.net/900x600/15481/12-SM627046.jpg",
           img:"https://d3nn873nee648n.cloudfront.net/900x600/15452/220-SM623656.jpg",
           caption:"Nice picture"

        },
        {
            id:"2",
            username:"mahadevgama1",
           userImg:"https://d3nn873nee648n.cloudfront.net/900x600/15481/12-SM627046.jpg",
           img:"https://d3nn873nee648n.cloudfront.net/900x600/14142/120-SM517115.jpg",
           caption:"Nice friens"

        }
    ]
  return (
    <div>
      {Posts.map(post=>(
        <Post
        key={post.id}
        id={post.id}
        username={post.username}
        userImg={post.userImg}
        img={post.img}
        caption={post.caption}
        />
      ))}
    </div>
  )
}
