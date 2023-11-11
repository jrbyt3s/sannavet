import { GiLoveInjection, GiBrokenBone } from "react-icons/gi";
import { FiScissors } from "react-icons/fi";
import { TbDogBowl } from "react-icons/tb";
import { FaHandHoldingMedical, FaBriefcaseMedical } from "react-icons/fa";

const Servicios = [
  {
    name: "Veterinario a domicilio",
    description:
      "Ofrecemos servicios veterinarios a domicilio para su comodidad y bienestar, ya que sabemos que a veces sus peludos no pueden ser trasladadas a la clínica.",
    icon: FaHandHoldingMedical,
  },
  {
    name: "Ecografías y Radiografías",
    description:
      "Con tecnología de vanguardia, obtenemos imágenes detalladas que nos facilita el diagnóstico de diversas condiciones médicas (cita previa).",
    icon: GiBrokenBone,
  },
  {
    name: "Peluquería Canina",
    description:
      "Además de mantener su salud, también nos preocupamos por su felicidad y apariencia. Aseguramos que tus mascotas luzcan y se sientan mejor que nunca.",
    icon: FiScissors,
  },
  {
    name: "Vacunaciones",
    description:
      "Ofrecemos un programa de vacunación completo y personalizado para garantizar que tus mascotas estén protegidas contra enfermedades infecciosas.",
    icon: GiLoveInjection,
  },
  {
    name: "Farmacia Veterinaria",
    description:
      "Contamos con productos de calidad, garantizando que tus mascotas reciban los medicamentos adecuados y necesarios para su tratamiento.",
    icon: FaBriefcaseMedical,
  },
  {
    name: "Alimentos Premium",
    description:
      "Sabemos lo importante que es la nutrición para tus mascotas. Por eso, ofrecemos alimentos premium que satisfacen sus necesidades nutricionales específicas.",
    icon: TbDogBowl,
  },
];

export default function Example() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-orange-500 font-semibold">
            Nuestros Servicios
          </h2>
          <p className="mt-2 md:text-5xl text-4xl font-bold text-gray-900">
            La mejor manera de cuidar a tu mascota
          </p>
          <p className="mt-4 mb-10 max-w-2xl md:text-xl text-base text-gray-500 lg:mx-auto">
            Nuestro equipo altamente capacitado se preocupa por la salud y el
            bienestar de tus peludos.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {Servicios.map((service) => (
              <div key={service.name} className="relative cursor-pointer">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {service.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 md:text-base text-sm text-gray-500">
                  {service.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
