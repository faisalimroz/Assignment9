import React from 'react';
import './BlogDetail.css'
const BlogDetail = ({blog}) => {
    const {name,Description}=blog
    return (
        <div className='blog-div'>
            <h2>{name}</h2>
            <p>{Description}</p>
        </div>
    );
};

export default BlogDetail;