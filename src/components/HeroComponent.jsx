/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import HeroImage from "../../public/images/sannavet-cuidamos-a-tu-mascota-1.jpg";

const HeroComponent = () => {
  return (
    <section className="flex flex-col items-center justify-around mt-20 md:flex-row min-w-7xl">
      {/* textual area */}
      <div className="flex flex-col items-start justify-start mx-10 mt-10 md:ml-20 md:mt-0">
        <p className="text-base font-semibold text-orange-500">Veterinaria</p>
        <h1 className="font-bold md:text-6xl text-5xl text-[#F1993C]">
          <strong className="text-[#022F4E]">Sannavet</strong>, hacemos que tu
          mascota mejore.
        </h1>
        <p className="mt-5 text-sm font-semibold text-gray-400 md:text-base">
          {" "}
          ¡Agenda una cita con nosotros! Visítanos y te brindaremos la mejor
          atención para el engreído del hogar.
          <br />
          Recuerda que es importante que tu mascota acuda al veterinario
          esporádicamente por prevención y no sólo para tratar algún mal.
          <br />
          ✓Encuéntranos en: Av. 13 de Enero, N°2201-2213 La Huayrona, <br />San Juan
          de Lurigancho. 
          <br /> 
          ✓Llámanos o escríbenos a nuestro número 966 842 258.
        </p>
        <div className="flex items-center justify-center gap-5 mt-10">
          <Link
            href="./citas"
            className="block px-5 py-2 font-semibold text-white bg-orange-500 rounded-full md:py-4 hover:bg-black hover:shadow-lg"
          >
            Saca una cita
          </Link>
          
          <Link
            href="https://api.whatsapp.com/send?phone=51966842258&text=Hola%2C%20sananavet%2C%0Adeseo%20agendar%20una%20cita%20para%20mi%20engreido"
            className="p-2 rounded-full shadow-lg bg-gray-50"
          >
            <AiOutlineWhatsApp className="text-[#25D366] md:text-5xl text-4xl hover:text-[#00A884] hover:shadow-lg" />
          </Link>
        </div>
      </div>
      {/* image area */}
      <div className="hidden mr-20 md:block">
        <Image src={HeroImage} width={1500} height={1500} objectFit="cover" />
      </div>
    </section>
  );
};

export default HeroComponent;
