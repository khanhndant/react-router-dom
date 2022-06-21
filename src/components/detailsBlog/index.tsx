import React, { useEffect, useState } from 'react'
import { ArrowLeftOutlined } from '@ant-design/icons'
import './style.css'
import Post from './post.mdx'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../header'

interface Iprops {
  image?: string,
  title?: string,
  description?: string,
  usessage?: string,
  id?: number
}

const DetailsBlog = () => {
  const navigate = useNavigate()
  const [blog, setBlog] = useState<undefined | Iprops>({})
  const handleReturnPage = () => {
    navigate('/',)
  }
  let { blogId } = useParams();
  useEffect(() => {
    getApi()
  }, [])

  const getApi = async () => {
    fetch(`http://localhost:8000/blogs/${blogId}`)
      .then(response => response.json())
      .then(data => {
        setBlog(data)
      });
  }
  
  return (
    <>
      <Header />
      <div className='details-blogs'>
        <div className='btn-return'>
          <span onClick={handleReturnPage}>
            <ArrowLeftOutlined className='icons-return' />
          </span>
        </div>
      </div>
      <div style={{padding : '0 60px'}}>
        <span style={{fontSize: '20px'}}>{blog && blog?.description}</span>
      </div>
    </>
  )
}

export default DetailsBlog