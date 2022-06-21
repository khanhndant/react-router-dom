import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'
interface Iprops {
    id?:number
    image?:string,
    title?: string,
    description?: string,
    usessage?:string
}

const Blog = (props:Iprops) => {
  return (
    <div className='card'>
        <img src={props.image} alt="image" className='image-card'/>
        <h3 className='title-card'>{props.title}</h3>
        <p className='description-card'>{props.description}</p>
        <Link className='btn-more' to={`/details-blog/${props.id}`}>more</Link>
    </div>
  )
}

export default Blog