import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';




import './Homes.css'

const Homes = ({ vehicle }) => {
  const {img,name,id,price}=vehicle;
 
  
  const navigate=useNavigate()
  const handleData=()=>{
   
    navigate(`/destination/${id}/${name}/${price}`);       
  }
    return (
        <div onClick={()=>handleData(id,name,img) } className='card-vehicle'>
         
          <img src={img}  alt="x" />
          <h1>{name}</h1>
        </div>
    );
};

export default Homes;