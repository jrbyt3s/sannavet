"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";

import logoImage from "../../public/images/sannavet-logo-brand-removebg-resize.png";

export default function Navbar() {
  // Estado para controlar si el menú móvil está abierto o cerrado
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Función para cambiar el estado del menú móvil (abierto/cerrado)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header>
        {/* Barra de navegación */}
        <nav className="flex justify-between fixed top-0 items-center w-full bg-slate-100 mx-auto h-[60px] z-50">
          {/* Sección del logo */}
          <div>
            <Image
              src={logoImage}
              width={286}
              height={64}
              alt="Logo"
              className="w-[50%]"
            />
          </div>

          {/* Sección del menú, se mostrará como un menú desplegable en pantallas pequeñas */}
          <div
            className={`${isMobileMenuOpen
              ? "absolute top-[60px] w-[50%] transition-all duration-1000"
              : "md:static hidden md:block"
              } bg-slate-200/[0.8] md:bg-slate-100 min-h-[5vh] right-0 md:w-auto w-[100%] flex items-center px-5 md:flex-row flex-col gap-2 font-bold text-[#F29640]`}
          >
            {/* Lista de elementos del menú */}
            <ul className="flex flex-col md:flex-row md:items-center md:gap-[4vw] gap-2">
              <li>
                <Link href="/" className="hover:text-[#54AEF4]">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="hover:text-[#54AEF4]">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/citas" className="hover:text-[#54AEF4]">
                  Citas
                </Link>
              </li>
              <li>
                <Link href="/ubicanos" className="hover:text-[#54AEF4]">
                  Ubícanos
                </Link>
              </li>
            </ul>
          </div>

          {/* Sección de botón de login y menú hamburguesa */}
          <div className="flex items-center gap-2">
            {/* Botón de login */}
            <Link
              href="/signin"
              className="block bg-orange-500 px-5 py-2 m-2 text-white font-semibold rounded-2xl hover:bg-[#54AEF4]"
            >
              Login
            </Link>

            {/* Botón del menú hamburguesa visible solo en pantallas pequeñas */}
            <button
              onClick={toggleMobileMenu}
              className="block w-6 h-6 mx-2 md:hidden focus:outline-none"
            >
              {/* Ícono del menú hamburguesa o de cierre dependiendo del estado */}
              {isMobileMenuOpen ? (
                <AiFillCloseCircle className="w-6 h-6" />
              ) : (
                <GiHamburgerMenu className="w-6 h-6" />
              )}
            </button>
          </div>
        </nav>
      </header>
    </>
  );
}