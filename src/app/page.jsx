/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import imagecar from "public/images/Sannavet-Groomers-profesionales-2.jpg";

function About() {
  return (
    <section className="flex justify-between min-w-7xl my-24 md:flex-row flex-col gap-y-10">
      <div className="mr-20 mx-auto max-w-screen-xl md:block hidden">
        <Image
          src={imagecar}
          width={1500}
          height={1500}
          objectFit="cover"
          className="ml-4"
        />
      </div>
      <div className="md:mr-20 mx-10 md:order-2 order-1">
        <h2 className="text-base text-orange-500 font-semibold">
          Acerca de nosotros
        </h2>
        <p className="mt-2 mb-5 text-5xl font-bold text-gray-900 sm:text-4xl">
          Lo mejor para tu mascota
        </p>
        <p className="md:text-base text-sm  text-gray-400">
          Nuestra clínica está equipada con instalaciones modernas y tecnología
          avanzada para garantizar el diagnóstico preciso y el tratamiento
          eficaz. Nos enorgullece ser un lugar donde tanto los animales como sus
          dueños se sientan cómodos y bienvenidos.
          <br />
          <br />
          En Sannavet, nos enorgullecemos de ser tu centro de confianza para el
          cuidado integral de tus queridas mascotas. Con una ubicación
          privilegiada en el corazón de la ciudad, nuestra clínica ofrece una
          amplia gama de servicios especializados para asegurarnos de que tus
          peludos reciban la atención que merecen.
        </p>
      </div>
    </section>
  );
}

export default About;
