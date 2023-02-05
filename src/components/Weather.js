import React from 'react'
import { useState ,useEffect} from 'react';
import Navbar from './Navbar';
import Weathermin from './Weathermin'
export default  function  Weather() {
  console.log("start")
  const [weatherdata, setweatherdata] = useState( );
    useEffect(() => {
      
  const fetchData=async ()=>{
     const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data)
     setweatherdata(data);
   }
 
   fetchData();
    
   },[])
 
  return (
 <div>
 
  <Weathermin/>
  
  
 </div>
  )
}
