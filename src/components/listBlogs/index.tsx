import React, { useEffect, useState } from 'react'
import { useLocation, useNavigationType, useOutlet } from 'react-router-dom'
import Blog from '../blog'
import Header from '../header'
import './style.css'

interface Iprops {
  image?:string,
  title?: string,
  description?: string,
  usessage? : string,
  id? :number
}

const ListBlogs = () => {
  const location = useLocation()
  const navigaType = useNavigationType()
  const outlet = useOutlet()
  console.log('useLocation', location)
  console.log('useNavigationType', navigaType)
  console.log('useOutlet', outlet)
  console.log('useOutlet', outlet)

  const [datas, setDatas] = useState<[] | Iprops[]>([])

  useEffect(() => {
    getApi()
  },[])

  const getApi = async () => {
    fetch('http://localhost:8000/blogs')
    .then(response => response.json())
    .then(data => {
      setDatas(data)
    });
  }
  return (
    <>
    <Header />
    <div className='list-blogs'>
      {datas?.map((item,index) => {
        return (
          <Blog
            id={item.id} 
            image={item.image}
            key={index} 
            title={item.title} 
            description={item.description}
          />
        )
      })}
    </div>
    </>
  )
}

export default ListBlogs

function to(to: any) {
  throw new Error('Function not implemented.')
}
