'use client'

import React, { useState, useEffect } from 'react';
import Appoiment from './appoiment';

function page() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://sannavet-api.onrender.com/appoiments/');
      const data = await response.json();
      
      setData(data);
      console.log(data);
    };
    fetchData();

    
  }, []);

  return (
    <div>
      <ul>
        <Appoiment data={data.results}/>
      </ul>
    </div>
  );
}

export default page;
