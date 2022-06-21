import React from 'react'
import ListBlogs from '../listBlogs'
import { Outlet } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <ListBlogs />
      <Outlet />
    </div>
  )
}

export default Home