import Link from 'next/link';
import React, { Fragment, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Seo from '@/shared/layout-components/seo/seo';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Screencover = () => {

    const [passwordshow1, setpasswordshow1] = useState(false);

  return (
    <Fragment>
         <HelmetProvider>
                <Helmet>
                    <body className="bg-white dark:!bg-bodybg"></body>
                </Helmet>
        <Seo title={"Lockscreen-cover"}/>
       <div className="grid grid-cols-12 authentication mx-0 text-defaulttextcolor text-defaultsize">
        <div className="xxl:col-span-7 xl:col-span-7 lg:col-span-12 col-span-12">
            <div className="flex justify-center items-center h-full">
              <div className="p-[3rem]">
                  <div className="mb-4">
                      <Link aria-label="anchor" href="/components/dashboards/crm/">
                          <img src="../../../../assets/images/brand-logos/desktop-logo.png" alt="" className="authentication-brand desktop-logo"/>
                          <img src="../../../../assets/images/brand-logos/desktop-dark.png" alt="" className="authentication-brand desktop-dark"/>
                      </Link>
                  </div>
                  <p className="h5 font-semibold mb-2">Lock Screen</p>
                  <p className="mb-4 text-[#8c9097] dark:text-white/50 opacity-[0.7] font-normal">Hello Jhon !</p>
                  <div className="flex items-center mb-6">
                      <div className="leading-none">
                          <span className="avatar avatar-md avatar-rounded">
                              <img src="../../../../assets/images/faces/15.jpg" alt=""/>
                          </span>
                      </div>
                      <div className="ms-4">
                          <p className="mb-0 font-semibold text-dark">jhonslicer21@gmail.com</p>
                      </div>
                  </div>
                  <div className="grid grid-cols-12 gap-y-4">
                      <div className="xl:col-span-12 col-span-12 mb-4">
                          <label htmlFor="lockscreen-password" className="form-label text-default">Password</label>
                          <div className="input-group">
                              <input type={(passwordshow1) ? 'text' : "password"} className="form-control form-control-lg !rounded-e-none" id="lockscreen-password" placeholder="password"/>
                              <button onClick={()=>setpasswordshow1(!passwordshow1)} className="ti-btn ti-btn-light !mb-0 !rounded-s-none" aria-label="button" type="button" id="button-addon2"><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></button>
                          </div>
                          <div className="mt-2">
                              <div className="form-check !ps-0">
                                  <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                  <label className="form-check-label text-[#8c9097] dark:text-white/50 font-normal" htmlFor="defaultCheck1">
                                      Remember password ?
                                  </label>
                              </div>
                          </div>
                      </div>
                      <div className="xl:col-span-12 col-span-12 grid mt-2">
                          <Link href="/components/dashboards/crm/" className="ti-btn ti-btn-lg bg-primary text-white !font-medium dark:border-defaultborder/10">Unlock</Link>
                      </div>
                  </div>
                  <div className="text-center">
                      <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mt-4">Try unlock with different methods <Link className="text-success" href="#!"><u>Finger print</u></Link> / <Link className="text-success" href="#!"><u>Face Id</u></Link></p>
                  </div>
              </div>
            </div>
        </div>
        <div className="xxl:col-span-5 xl:col-span-5 lg:col-span-5  col-span-12 xl:block hidden px-0">
            <div className="authentication-cover">
                <div className="aunthentication-cover-content rounded">
                    <div className="swiper keyboard-control">
                        <div className="swiper-wrapper">
                        <Swiper spaceBetween={30} navigation={true} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ clickable: true, }} modules={[Pagination, Autoplay, Navigation]} className="mySwiper">
                            <SwiperSlide>
                                <div className="text-white text-center p-[3rem] flex items-center justify-center">
                                    <div>
                                        <div className="mb-[3rem]">
                                            <img src="../../../../assets/images/authentication/2.png" className="authentication-image" alt=""/>
                                        </div>
                                        <h6 className="font-semibold text-[1rem]">Lockscreen</h6>
                                            <p className="font-normal text-[.875rem] opacity-[0.7]"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eligendi expedita aliquam quaerat nulla voluptas facilis. Porro rem voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at ratione.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="text-white text-center p-[3rem] flex items-center justify-center">
                                    <div>
                                        <div className="mb-[3rem]">
                                            <img src="../../../../assets/images/authentication/3.png" className="authentication-image" alt=""/>
                                        </div>
                                        <h6 className="font-semibold text-[1rem]">Lockscreen</h6>
                                            <p className="font-normal text-[.875rem] opacity-[0.7]"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eligendi expedita aliquam quaerat nulla voluptas facilis. Porro rem voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at ratione.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="text-white text-center p-[3rem] flex items-center justify-center">
                                    <div>
                                        <div className="mb-[3rem]">
                                            <img src="../../../../assets/images/authentication/2.png" className="authentication-image" alt=""/>
                                        </div>
                                        <h6 className="font-semibold text-[1rem]">Lockscreen</h6>
                                            <p className="font-normal text-[.875rem] opacity-[0.7]"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa eligendi expedita aliquam quaerat nulla voluptas facilis. Porro rem voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at ratione.</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </HelmetProvider>
    </Fragment>
  )
}

Screencover.layout = "Authenticationlayout"

export default Screencover