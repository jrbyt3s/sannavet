/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiOutlineWhatsApp } from "react-icons/ai";
import HeroImage from "public/images/sannavet-cuidamos-a-tu-mascota-1.jpg";

const HeroComponent = () => {
  return (
    <section className="flex md:flex-row flex-col justify-around items-center min-w-7xl mt-[60px]">
      {/* textual area */}
      <div className="flex flex-col items-start justify-start md:ml-20 mx-10 mt-10 md:mt-0">
        <p className="text-orange-500 font-semibold text-base">Veterinaria</p>
        <h1 className="font-bold md:text-6xl text-5xl text-[#F1993C]">
          <span className="text-[#022F4E]">Sannavet</span>, hacermos que tu
          mascota mejore
        </h1>
        <p className="md:text-base text-sm font-semibold text-gray-400 mt-5">
          {" "}
          ¡Agenda una cita con nosotros! Visítanos y te brindaremos la mejor
          atención para el engreído del hogar.
          <br />
          Recuerda que es importante que tu mascota acuda al veterinario
          esporádicamente por prevención y no sólo para tratar algún mal.
          <br />
          ✓Encuéntranos en: Av. 13 de Enero, N°2201-2213 La Huayrona, San Juan
          de Lurigancho. ✓Llámanos o escríbenos a nuestro número 966 842 258
        </p>
        <div className="mt-10 flex justify-center items-center gap-5">
          <Link
            href="./citas"
            className="block text-white bg-orange-500 font-semibold rounded-full px-5 md:py-4 py-2 hover:bg-black hover:shadow-lg"
          >
            Saca una cita
          </Link>

          <Link
            href="https://api.whatsapp.com/send?phone=51966842258&text=Hola%2C%20sananavet%2C%0Adeseo%20agendar%20una%20cita%20para%20mi%20engreido"
            className="bg-gray-50 rounded-full shadow-lg p-2"
          >
            <AiOutlineWhatsApp className="text-[#25D366] md:text-5xl text-4xl hover:text-[#00A884] hover:shadow-lg" />
          </Link>
        </div>
      </div>
      {/* image area */}
      <div className="mr-20 md:block hidden">
        <Image src={HeroImage} width={1500} height={1500} objectFit="cover" />
      </div>
    </section>
  );
};

export default HeroComponent;
