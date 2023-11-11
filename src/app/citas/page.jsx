import React from "react";

const Citas = () => {
  return (
    <div className="container mx-auto mt-10 p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Programa una Cita</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label
            htmlFor="nombre"
            className="block text-sm font-medium text-gray-600"
          >
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Nombre completo"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="mascota"
            className="block text-sm font-medium text-gray-600"
          >
            Nombre de la Mascota
          </label>
          <input
            type="text"
            id="mascota"
            name="mascota"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Nombre de la mascota"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="telefono"
            className="block text-sm font-medium text-gray-600"
          >
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Número de teléfono"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="fecha"
            className="block text-sm font-medium text-gray-600"
          >
            Fecha
          </label>
          <input
            type="date"
            id="fecha"
            name="fecha"
            className="mt-1 p-2 w-full border rounded-md"
          />
        </div>
        <div className="mb-4 col-span-2">
          <label
            htmlFor="mensaje"
            className="block text-sm font-medium text-gray-600"
          >
            Mensaje Adicional
          </label>
          <textarea
            id="mensaje"
            name="mensaje"
            rows="3"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="Mensaje adicional"
          ></textarea>
        </div>
        <div className="col-span-2">
          <button
            type="submit"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-black"
          >
            Confirmar Cita
          </button>
        </div>
      </form>
    </div>
  );
};

export default Citas;
