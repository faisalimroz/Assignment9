import React, { useEffect, useState } from 'react';

import Homes from '../Homes/Homes';
import './Home.css'
const Home = () => {
    const [vehicles,setVehicle]=useState([])
    useEffect(
        ()=>{
            fetch('vehicle.json')
            .then(res=>res.json())
            .then(data=>setVehicle(data))
        }
        ,[])
    return (
        <div className='home-body'>
            <div   className='vehicle-container'>
                {
                    vehicles.map(vehicle=><Homes key={vehicle.id} vehicle={vehicle}></Homes>
                 
                    
                    )
                    
                 
                }
              

            </div>
            
        </div>
    );
};

export default Home;