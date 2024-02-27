'use client'

import React, { useState, useEffect } from 'react';
import AppoimentCard from './appoimentCard';

export default function Appoiment() {
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
        <AppoimentCard data={data.results}/>
      </ul>
    </div>
  );
}


