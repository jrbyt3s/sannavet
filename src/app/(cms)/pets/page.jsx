'use client'
import React, { useState, useEffect } from 'react';
import PetsCard from './petsCard';

function Pets() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const access_token = sessionStorage.getItem('access_token');
      console.log(`Bearer ${access_token}`); //Linea para ver si tienes el token (Borrar para Produccion)
      try {
        const response = await fetch('https://sannavet-api.onrender.com/pets/', {
          headers: {
            'Authorization': `Bearer ${access_token}`,
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
        <PetsCard data={data.results}/>
      </ul>
    </div>
  );
}

export default Pets;
