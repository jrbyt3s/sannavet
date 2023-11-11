import Link from "next/link";
import React from "react";
import Image from "next/image";
import logoImage from "public/images/sannavet-logo-brand-removebg-resize.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";

export default function Navbar() {
  return (
    <>
      <header>
        <nav className="flex justify-between fixed top-0 items-center w-full  bg-slate-100 mx-auto h-[60px] z-50">
          <div>
            <Image
              src={logoImage}
              width={286}
              height={64}
              alt="Logo"
              className="w-[50%]"
            />
          </div>
          <div className="md:static absolute bg-slate-100 min-h-[5vh] left-0 top-[-100%] md:w-auto w-[100%] flex items-center px-5">
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-2 font-bold text-[#F29640]">
              <li>
                <Link className="hover:text-[#54AEF4]" href="./">
                  Inicio
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#54AEF4]" href="./citas">
                  Citas
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#54AEF4]" href="./ubicanos">
                  Ubicanos
                </Link>
              </li>
              <li>
                <Link className="hover:text-[#54AEF4]" href="./ubicanos">
                  Servicios
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <Link
              href="./login"
              className="block bg-orange-500 px-5 py-2 m-2 text-white font-semibold rounded-2xl hover:bg-[#54AEF4]"
            >
              Login
            </Link>

            <GiHamburgerMenu className="block w-6 h-6 mx-2 md:hidden" />
          </div>
        </nav>
      </header>
    </>
  );
}
