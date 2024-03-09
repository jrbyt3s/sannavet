'use client'
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import AttentionCard from './attentionCard';

function Attencions() {
  const searchparams = useSearchParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    const storedProfile = localStorage.getItem('userProfile');
    if (storedProfile) {
      //setUserProfile(JSON.parse(storedProfile));
    }

    const fetchData = async () => {
      const access_token = sessionStorage.getItem('access_token');
      //console.log(`Bearer ${access_token}`); //Linea para ver si tienes el token (Borrar para Produccion)
      try {
        const response = await fetch('https://sannavet-api.onrender.com/pets/1/', {
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
        console.data('hola mundo')
        console.log(responseData.nombre);
      } catch (error) {
        console.error('Error:', error);
      }
    };


    fetchData();


  }, []);



  return (
    <div>
      <div>Historial de atenciones</div>
      <div>
        <div>
        <h2>{data.nombre} </h2>
          <img
            src="https://drfecommercee.s3.us-west-1.amazonaws.com/pets/rambo.png"
            width={200}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
      <div>
        <p>{JSON.stringify(data.attentions)}</p>
        
      </div>
      <AttentionCard />
     
    </div>
  )
}


export default Attencions