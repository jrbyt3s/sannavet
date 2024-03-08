'use client'

import React, { useEffect, useState } from 'react';
import {useSearchParams} from 'next/navigation'

export default function Dasboard() {

  const [userProfile, setUserProfile] = useState(null);
  const searchParam = useSearchParams();
  console.log(searchParam.get("user_id"))

  useEffect(() => {
    // Recuperar la información del perfil del localStorage
    const storedProfile = localStorage.getItem('userProfile');

    if (storedProfile) {
      setUserProfile(JSON.parse(storedProfile));
    }
  }, []);

  return (
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
  );
}

