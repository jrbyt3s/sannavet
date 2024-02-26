

/* eslint-disable react/prop-types */
const PetsCard = ({ data }) => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center text-orange-500">
          Mascotas
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data?.map(
            ({
              id,
              nombre,
              sexo,
              especie,
              raza,
              color,
              fotoUrl,
              esterilizado,
              peso,
            }) => (
              <div
                key={id}
                className="bg-white border border-gray-300 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden"
              >
                <div className="flex flex-col p-4">
                  <h3 className="mb-2 text-lg font-bold">Nombre: {nombre}</h3>
                  <img
                    src={fotoUrl}
                    alt={id}
                    width={256}
                    height={256}
                    className="object-cover w-full h-64 rounded-md"
                  />
                  <p className="mb-2 text-gray-500 text-bold">Sexo: {sexo}</p>
                  <p className="mb-4 text-gray-500 text-semibold">
                    Especie: {especie} 
                  </p>
                  <p className="mb-4 text-gray-500 text-semibold">Raza: {raza}</p>
                  <p className="mb-4 text-gray-500 text-semibold">Color: {color}</p>
                  <p className="mb-4 text-gray-500 text-semibold">Esterilizado: {esterilizado}</p>
                  <p className="mb-4 text-gray-500 text-semibold">Peso: {peso}</p>
                  <button className="justify-center px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                    <a href="../appoiment">CITAS</a>
                  </button>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default PetsCard;
