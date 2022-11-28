import React, { useEffect, useState } from 'react';
import './Blog.css'
import BlogDetail from './BlogDetail/BlogDetail';

const Blog = () => {
    const [blogs,setBlog]=useState([])
    useEffect(()=>{
        fetch('Blog.json')
        .then(res=>res.json())
        .then(data=>setBlog(data))
    },[])
    return (
        <div className='blog-container'>
           
            {
                blogs.map(blog=><BlogDetail key={blog.id} blog={blog}></BlogDetail>)
            }
        </div>
    );
};

export default Blog;