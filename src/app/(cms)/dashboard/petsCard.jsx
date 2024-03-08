/* eslint-disable react/prop-types */

import React from 'react';
import Link from 'next/link'

const PetsCard = ({ data }) => {
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center text-orange-500">Datos</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {data?.map(({ id, nombre, sexo, especie, raza, color, fotoUrl, esterilizado, peso }) => (
            <div key={id} className="overflow-hidden bg-white border border-gray-300 rounded-lg shadow hover:shadow-lg dark:bg-gray-800 dark:border-gray-700">
              <img src={fotoUrl} alt={nombre} className="object-cover w-full h-64 transition duration-300 transform hover:scale-105" />
              <div className="p-4">
                <h3 className="mb-2 text-lg font-bold">{capitalizeFirstLetter(nombre)}</h3>
                <p className="mb-2 text-gray-500">Sexo: {capitalizeFirstLetter(sexo)}</p>
                <p className="mb-2 text-gray-500">Especie: {capitalizeFirstLetter(especie)}</p>
                <p className="mb-2 text-gray-500">Raza: {capitalizeFirstLetter(raza)}</p>
                <p className="mb-2 text-gray-500">Color: {capitalizeFirstLetter(color)}</p>
                <p className="mb-2 text-gray-500">Esterilizado: {esterilizado ? 'Sí' : 'No'}</p>
                <p className="mb-2 text-gray-500">Peso: {peso} kg</p>
                <div className="flex flex-col sm:flex-row justify-center sm:justify-start mt-4 space-y-2 sm:space-y-0 sm:space-x-4">
                  <button className="px-4 py-2 font-bold text-white bg-orange-500 rounded hover:bg-blue-500">
                    <Link href={{
                      pathname:"/dashboard/attentions/",
                      query:{user_id:"hola mundo mundial"}
                    }}>Atenciones</Link>
                  </button>
                  <button className="px-4 py-2 mt-2 sm:mt-0 font-bold text-white bg-orange-500 rounded hover:bg-blue-500">
                    <a href="../newAppoiment?user_id=1">Nueva Cita</a>

                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default PetsCard;


