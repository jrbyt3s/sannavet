import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { BsMailbox } from "react-icons/bs";
import Image from "next/image";
import logoImage from "../../public/images/sannavet-logo-brand-removebg-resize.png";

const Footer = () => {
  return (
    <>
      <div className="bg-[#F1993C] h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-10">
        <div className="p-2 ">
          <ul>
            <Image
              src={logoImage}
              width={286}
              height={64}
              alt="Logo"
              className="w-[50%] bg-white"
            />
            <div className="flex gap-6 pb-5">
              <a
                href="https://www.instagram.com/veterinaria.sannavet/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl cursor-pointer text-white hover:text-[#082E52]" />
              </a>
              <a
                href="https://www.tiktok.com/@sannavet_"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="text-2xl cursor-pointer text-white hover:text-[#082E52]" />
              </a>
              <a
                href="https://www.facebook.com/veterinariasannavet/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-2xl cursor-pointer text-white hover:text-[#082E52]" />
              </a>
              <a
                href="veterinariasannavet@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsMailbox className="text-2xl cursor-pointer text-white hover:text-[#082E52]" />
              </a>
            </div>
          </ul>
        </div>
        <div className="p-2">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">Servicios</p>
            <li className="text-gray-200 text-sm pb-1 font-semibold hover:text-[#082E52] cursor-pointer">
              Veterinaria
            </li>
            <li className="text-gray-200 text-sm pb-1 font-semibold hover:text-[#082E52] cursor-pointer">
              Vacunacion
            </li>
            <li className="text-gray-200 text-sm pb-1 font-semibold hover:text-[#082E52] cursor-pointer">
              Desparasitación
            </li>
            <li className="text-gray-200 text-sm pb-1 font-semibold hover:text-[#082E52] cursor-pointer">
              Baños Medicados
            </li>
            <li className="text-gray-200 text-sm pb-1 font-semibold hover:text-[#082E52] cursor-pointer">
              Rayos X
            </li>
          </ul>
        </div>

        <div className="p-2">
          <ul>
            <p className="text-white font-bold text-2xl pb-4">Atencion</p>
            <li className="text-gray-200 text-sm pb-2 font-semibold hover:text-[#082E52] cursor-pointer">
              Citas
            </li>
            <li className="text-gray-200 text-sm pb-2 font-semibold hover:text-[#082E52] cursor-pointer">
              Ubicanos
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center  p-5 bg-[#082E52]">
        <h1 className="text-sm text-gray-200 font-semibold">
          © 2023-2024 All rights reserved | Build with ❤ by{" "}
          <span className="hover:text-orange-500 font-semibold cursor-pointer">
            team Codigo Tepsup{" "}
          </span>
        </h1>
      </div>
    </>
  );
};

export default Footer;
