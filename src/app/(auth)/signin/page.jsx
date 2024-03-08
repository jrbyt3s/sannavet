'use client'
import React from "react";
import { FaUser, FaLock } from "react-icons/fa";
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import Profile from "./profile";







const LoginForm = () => {

  //Creaando el estado local para almacenar los datos del formulario
// y el estado de la autenticación:
const [formData, setFormData] = useState({
  username: '',
  password: '',
});

const [authError, setAuthError] = useState(null);


//Sensando el cambio de valores en el formulario:
const handleInputChange = (e) => {
  const { id, value } = e.target;
  setFormData((prevData) => ({
    ...prevData,
    [id]: value,
  }));
};



// Aqui se maneja el envío del formulario y la solicitud de inicio de sesión:
const router = useRouter();

const handleSignIn = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('https://sannavet-api.onrender.com/auth/signin/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const data = await response.json();
      
      console.log('registro exitoso')
      // Persistir los tokens en sessionStorage o localStorage
      sessionStorage.setItem('access_token', data.access_token);
      localStorage.setItem('refresh_token', data.refresh_token); 
      //console.log(data.access_token);
    Profile(data.access_token).then((userProfile) =>{
      router.push(`dashboard/?user_id=${userProfile.user_id}&first_name=${userProfile.first_name}&last_name=${userProfile.last_name}`)
    })
      
      
      
      // Redirigir a la página después del inicio de sesión exitoso
      
    } else {
      setAuthError('Error en las credenciales. Verifica tu nombre de usuario y contraseña.');
    }
  } catch (error) {
    console.error('Error en la solicitud:', error);
  }
  
}; //fin de envío de formulario


  return (
    <div
      className="flex flex-col items-center justify-center h-screen"
      style={{
        backgroundImage: `url('https://s3-alpha.figma.com/hub/file/3708502632/466e4267-079d-4631-9784-521838876418-cover.png')`, // Reemplaza 'tu-imagen-de-fondo.jpg' con el nombre de tu imagen de fondo
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white bg-opacity-70 p-6 rounded-md sm:w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Inicio de sesión
        </h2>
        <form className="flex flex-col items-center" onSubmit={handleSignIn}>
          <div className="mb-4 flex items-center">
            <FaUser className="mr-2" />
            <input
              type="text"
              placeholder="Nombre de Usuario"
              className="border-2 border-gray-300 p-2 rounded-md"
              id="username"
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4 flex items-center">
            <FaLock className="mr-2" />
            <input
              type="password"
              placeholder="Contraseña"
              className="border-2 border-gray-300 p-2 rounded-md"
              id="password"
              onChange={handleInputChange}
              required
            />
          </div>
          <button
            type="submit"
            
            className="bg-orange-500 w-full text-white py-2 rounded-md hover:bg-blue-500 transition"
          >
            Iniciar sesión
          </button>
          {authError && <p className="text-red-500">{authError}</p>}

          <div className="mt-4 text-center">
            ¿No tienes una cuenta?{" "}
            <Link href="/signup" className="text-blue-500 underline">
              Regístrate aquí
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};  


export default LoginForm;
