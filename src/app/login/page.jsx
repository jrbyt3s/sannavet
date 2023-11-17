import React from "react";
import { FaUser, FaLock } from "react-icons/fa";

const LoginForm = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold mb-4">Inicio de sesión</h2>
      <form className="flex flex-col w-64">
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
          className="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
