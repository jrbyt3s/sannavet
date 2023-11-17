import React from "react";
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
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
        <form className="flex flex-col items-center">
          <div className="mb-4 flex items-center">
            <FaUser className="mr-2" />
            <input
              type="text"
              placeholder="Usuario"
              className="border-2 border-gray-300 p-2 rounded-md"
            />
          </div>
          <div className="mb-4 flex items-center">
            <FaLock className="mr-2" />
            <input
              type="password"
              placeholder="Contraseña"
              className="border-2 border-gray-300 p-2 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 w-full text-white py-2 rounded-md hover:bg-black transition"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
