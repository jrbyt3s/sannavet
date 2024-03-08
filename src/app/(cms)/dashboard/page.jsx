'use client'
import React, { useState, useEffect } from 'react';
import PetsCard from './petsCard';

function Dashboard() {
  const [data, setData] = useState([]);
  const [userProfile, setUserProfile] = useState(null);
  // const searchParam = useSearchParams();
  // console.log(searchParam.get("user_id"))
  useEffect(() => {
    const storedProfile = localStorage.getItem('userProfile');
    if (storedProfile) {
      setUserProfile(JSON.parse(storedProfile));
    }

    const fetchData = async () => {
      const access_token = sessionStorage.getItem('access_token');
      console.log(userProfile.user_id);
      console.log(`Bearer ${access_token}`); //Linea para ver si tienes el token (Borrar para Produccion)
      try {
        const response = await fetch(`https://sannavet-api.onrender.com/clients/${userProfile.user_id}/`, {
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
    <>
      <div>
        <h1>DASBOARD</h1>
        {userProfile ? (
          <ul>
            <li>User ID: {userProfile.user_id}</li>
            <li>Username: {userProfile.username}</li>
            <li>Email: {userProfile.email}</li>
            <li>First Name: {userProfile.first_name}</li>
            <li>Last Name: {userProfile.last_name}</li>
            <li>Role: {userProfile.role}</li>
          </ul>
        ) : (
          <p>No user profile found</p>
        )}
      </div>
      <div>
        <ul>
          <PetsCard data={data.pets} />
        </ul>
      </div>
    </>
  );
}

export default Dashboard;