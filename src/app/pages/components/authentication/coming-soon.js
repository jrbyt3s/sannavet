import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React, { Fragment } from 'react'
import {DayCounter} from '../../../shared/data/authentication/comingsoondata'
import { Helmet, HelmetProvider } from 'react-helmet-async'

const Comingsoon = () => {
  return (
    <Fragment>
         <HelmetProvider>
                <Helmet>
                    <body className="bg-white dark:!bg-bodybg"></body>
                </Helmet>
        <Seo title={"Coming Soon"}/>
      <div className="grid grid-cols-12 gap-0 w-full authentication under-maintenance mx-0 text-defaulttextcolor text-defaultsize">
        <div className="lg:col-span-7 col-span-12">
            <div className="authentication-page md:h-full sm:py-16 w-full flex items-center justify-center">
                <main id="content"  className="w-full lg:max-w-[37rem] p-6 ">
                    <div className="mt-7">
                        <div className="p-0 md:p-7">
                            <div className="text-center">
                                <div className="mb-2 flex justify-center">
                                    <Link aria-label="anchor" href="/components/dashboards/crm/">
                                        <img src="../../../assets/images/brand-logos/toggle-logo.png" alt="" className="authentication-brand"/>
                                    </Link>
                                </div>
                                <p className="font-semibold text-[0.75rem] mb-1 opacity-[0.4]">STAY TUNED</p>
                                <h1 className="font-bold mb-4 text-[2.5rem]">Coming Soon</h1>
                                <p className="mb-6">Our website is currently under construction, enter your email id to get latest updates and notifications about the website.</p>
                                <div className="input-group mb-[3em]">
                                    <input type="email" className="form-control w-full !rounded-s-md form-control-lg " placeholder="info@gmail.com" aria-label="info@gmail.com" aria-describedby="button-addon2"/>
                                    <button className="ti-btn bg-primary text-white !rounded-s-none !mb-0" type="button" id="button-addon2">Subscribe</button>
                                </div>
                                <DayCounter/>
                                <div className="mt-[3rem]">
                                    <div className="btn-list">
                                        <button aria-label="button" type="button" className="ti-btn ti-btn-icon bg-primary text-white font-medium me-[0.365rem]">
                                            <i className="ri-facebook-line font-bold"></i>
                                        </button>
                                        <button aria-label="button" type="button" className="ti-btn ti-btn-icon bg-secondary text-white font-medium me-[0.365rem]">
                                            <i className="ri-twitter-line font-bold"></i>
                                        </button>
                                        <button aria-label="button" type="button" className="ti-btn ti-btn-icon bg-warning text-white font-medium me-[0.365rem]">
                                            <i className="ri-instagram-line font-bold"></i>
                                        </button>
                                        <button aria-label="button" type="button" className="ti-btn ti-btn-icon bg-success text-white font-medium me-[0.365rem]">
                                            <i className="ri-github-line font-bold"></i>
                                        </button>
                                        <button aria-label="button" type="button" className="ti-btn ti-btn-icon bg-danger text-white font-medium">
                                            <i className="ri-youtube-line font-bold"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        <div className="lg:col-span-5 col-span-12 hidden lg:block relative px-0">
            <div className="bg-light w-full h-full flex items-center justify-center under-maintenance-image-container">
                <img src="../../../assets/images/media/media-87.svg" alt="" className="imig-fluid"/>
            </div>
        </div>

    </div>
    </HelmetProvider>
    </Fragment>
  )
}

Comingsoon.layout = "Authenticationlayout"

export default Comingsoon