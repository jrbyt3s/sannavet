/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/alt-text */
import Link from "next/link";
import React from "react";
import Image from "next/image";
import imagecar from "../../public/images/Sannavet-Groomers-profesionales-2.jpg";
import PriceSection from "./(general)/components/price";
import Navbar from "@/components/Navbar";
import HeroComponent from "@/components/HeroComponent";
import Footer from "@/components/Footer";

function About() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <Navbar />
      <HeroComponent />
      <section className="flex flex-col justify-between my-24 min-w-7xl md:flex-row gap-y-10">
        <div className="mx-20">
          <Image src={imagecar} width={1500} height={1500} objectFit="cover" alt="Sannavet-Groomers-profesionales" />
        </div>
        <div className="order-1 mx-10 md:mr-20 md:order-2">
          <h2 className="text-base font-semibold text-orange-500">
            Acerca de nosotros
          </h2>
          <p className="mt-2 mb-5 text-5xl font-bold text-gray-900 sm:text-4xl">
            Lo mejor para tu mascota
          </p>
          <p className="mt-5 text-sm font-semibold text-gray-400 md:text-base">
            Nuestra clínica está equipada con instalaciones modernas y
            tecnología avanzada para garantizar el diagnóstico preciso y el
            tratamiento eficaz. Nos enorgullece ser un lugar donde tanto los
            animales como sus dueños se sientan cómodos y bienvenidos.
            <br />
            <br />
            En Sannavet, nos enorgullecemos de ser tu centro de confianza para
            el cuidado integral de tus queridas mascotas. Con una ubicación
            privilegiada en el corazón de la ciudad, nuestra clínica ofrece una
            amplia gama de servicios especializados para asegurarnos de que tus
            peludos reciban la atención que merecen.
          </p>
          <div className="flex items-center justify-center gap-5 mt-10">
            <Link
              href="./citas"
              className="block px-5 py-2 font-semibold text-white bg-orange-500 rounded-full md:py-4 hover:bg-black hover:shadow-lg"
            >
              Saca una cita
            </Link>
          </div>
        </div>
      </section>
      <PriceSection />
      <Footer />
    </>
  );
}

export default About;
