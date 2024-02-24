'use client'
import React, { useState, useEffect } from 'react';
import Pets from './pets';

function Page() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://sannavet-api.onrender.com/pets/', {
          headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4ODE1MzI2LCJpYXQiOjE3MDg4MTM1MjYsImp0aSI6IjRmYjc5MDZjMzNjZTRlMjU4YjJjYWY4MTc5ZThlNTE2IiwidXNlcl9pZCI6NH0.CLFCb8eP6OsIAcerFaWEtY1bmSZE8COxIYKRUJTRV60',
            'Content-Type': 'application/json'
          }
        });
        if (!response.ok) {
          throw new Error('Error al obtener los datos');
        }
        const responseData = await response.json();
        setData(responseData);
        console.log(responseData);
      } catch (error) {
        console.error('Error:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        <Pets data={data.results}/>
      </ul>
    </div>
  );
}

export default Page;
