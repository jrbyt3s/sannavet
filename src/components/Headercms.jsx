import React from 'react'
import Link from "next/link";
import Image from "next/image";
//import second from '../../public/images/sannavet-logo-brand-removebg-resize.png'

export default function Headercms() {
  return (
    <div className="col-span-12">
          <div className="box">
            
            <div className="box-body">
              <header
                className="flex flex-wrap sm:justify-start sm:flex-nowrap z-40 w-full bg-white text-sm dark:bg-bodybg">
                <nav className="w-full mx-auto  sm:flex sm:items-center sm:justify-between" aria-label="Global">
                  <div className="flex items-center justify-between">
                    <Link href="#!" className="header-logo">
                      <img src="../../../assets/images/brand-logos/toggle-dark.png" alt="logo" className="dark:hidden block" />
                      <img src="../../../assets/images/brand-logos/toggle-dark.png" alt="logo" className="hidden dark:block" />
                    </Link>
                    <div className="sm:hidden">
                      <button type="button"
                        className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-sm border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bodybg dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-offset-white/10"
                        data-hs-collapse="#navbar-image-2" aria-controls="navbar-image-2"
                        aria-label="Toggle navigation">
                        <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor"
                          viewBox="0 0 16 16">
                          <path fillRule="evenodd"
                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor"
                          viewBox="0 0 16 16">
                          <path
                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div id="navbar-image-2"
                    className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                    <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
                      <Link className="font-medium text-primary" href="#!" aria-current="page">Landing</Link>
                      <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-500 whitespace-nowrap"
                        href="#!">Account</Link>
                      <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-500 whitespace-nowrap"
                        href="#!">Work</Link>
                      <Link className="font-medium text-gray-600 hover:text-gray-400 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-500 whitespace-nowrap"
                        href="#!">Blog</Link>
                    </div>
                  </div>
                </nav>
              </header>
            </div>
          </div>
        </div>
  )
}
