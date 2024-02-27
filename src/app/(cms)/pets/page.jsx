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
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA4ODI4Mzc3LCJpYXQiOjE3MDg4MjY1NzcsImp0aSI6ImQ4ZTdhZjZlMzA0ZjQ2ODA4NGJmNWUxMmY1MjhmOWI4IiwidXNlcl9pZCI6M30.tQLJvIJTjGRrCqQaHBYEcjkf7f76_ucUmbTGvF-KbwM',
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
    console.log('hola')
    console.log(localStorage.getItem('access_token'))
    
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

/