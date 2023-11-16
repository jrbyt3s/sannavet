"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import logoImage from "public/images/sannavet-logo-brand-removebg-resize.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header>
        <nav className="flex justify-between fixed top-0 items-center w-full bg-slate-100 mx-auto h-[60px] z-50">
          <div>
            <Image
              src={logoImage}
              width={286}
              height={64}
              alt="Logo"
              className="w-[50%]"
            />
          </div>

          <div
            className={`${
              isMobileMenuOpen
                ? "absolute top-[60px] left-0 w-full"
                : "md:static hidden md:block"
            } bg-slate-100 min-h-[5vh] md:w-auto w-[100%] flex items-center px-5 md:flex-row flex-col gap-2 font-bold text-[#F29640]`}
          >
            <ul
              className={`${
                isMobileMenuOpen
                  ? "flex flex-col md:flex-row md:items-center md:gap-[4vw] gap-2"
                  : "flex flex-col items-center gap-2"
              }`}
            >
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
                  Ubicanos
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="block bg-orange-500 px-5 py-2 m-2 text-white font-semibold rounded-2xl hover:bg-[#54AEF4]"
            >
              Login
            </Link>

            <button
              onClick={toggleMobileMenu}
              className="block w-6 h-6 mx-2 md:hidden focus:outline-none"
            >
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
