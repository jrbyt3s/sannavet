import { HiCheck } from "react-icons/hi2";

const includedFeatures = [
  'diagnóstico',
  'Ecografia (no incluido en el precio)',
  'rayos X (no iincluido en el precio)',
  'atencion emergencias',
  'checkeo de vacunas',
  'desparasitación'
]

export default function PriceSection() {
  return (
    <section className="bg-white py-16 sm:pt-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sannavet Consulta Vetrinaria</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Que tu mascota no pare de jugar, al menor cambio de comportamiento síntoma llevalo al veterinario
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Aqui cuidamos a tu mascota</h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Ahora nuestra consulta verinaría está a un precio accesible para que cuides con amor a tu mascota
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">Atención Veterinaria</h4>
              <div className="h-px flex-auto bg-gray-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <HiCheck className="h-6 w-5 flex-none text-orange-500" aria-hidden="true" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-gray-600">Precio de consulta Veterinaria</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">S/.30.0</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">Soles</span>
                </p>
                <a
                  href="#"
                  className="mt-10 block w-full rounded-md bg-orange-500 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Saca tu cita
                </a>
                <p className="mt-6 text-xs leading-5 text-gray-600">
                  Pregunta por nuestras promociones /paquetes de atencíón del día.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}