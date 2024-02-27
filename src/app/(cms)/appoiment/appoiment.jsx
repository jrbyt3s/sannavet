/* eslint-disable react/prop-types */
const Appoiment = ({ data }) => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="mb-8 text-3xl font-bold text-center text-orange-500">
          Citas
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data?.map(
            ({
              id,
              pet_id,
              veterinarian_id,
              date,
              hour,
              description,
              payed,
            }) => (
              <div
                key={id}
                className="overflow-hidden bg-orange-400 rounded-lg shadow-md"
              >
                <div className="relative p-4">
                  <h3 className="mb-2 text-lg font-bold">
                    Codigo de mascota: {pet_id}
                  </h3>
                  <p className="mb-2 text-semibold text-slate-50">
                    Codigo de veterinario: {veterinarian_id}
                  </p>
                  <p className="mb-4 text-semibold text-slate-50">
                    Fecha de la cita: {date}
                  </p>
                  <p className="mb-4 text-semibold text-slate-50">
                    Hora de la cita: {hour}
                  </p>
                  <p className="mb-4 text-semibold text-slate-50">
                    Descripcion: {description}
                  </p>

                  <a href="../pets">
                    <button className="justify-center px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
                      OK
                    </button>
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Appoiment;
