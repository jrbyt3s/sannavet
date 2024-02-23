import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Seo from '@/shared/layout-components/seo/seo';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const Createcover = () => {

  const [passwordshow1, setpasswordshow1] = useState(false);
  const [passwordshow2, setpasswordshow2] = useState(false);

  return (
   <Fragment>
     <HelmetProvider>
                <Helmet>
                    <body className="bg-white dark:!bg-bodybg"></body>
                </Helmet>
    <Seo title={"Createpassword-cover"}/>
     <div className="grid grid-cols-12 authentication mx-0">

<div className="xxl:col-span-7 xl:col-span-7 lg:col-span-12 col-span-12">
  <div className="grid grid-cols-12 items-center h-full ">
    <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-2"></div>
    <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-8 col-span-12">
      <div className="p-[3rem]">
        <div className="mb-4">
          <Link aria-label="anchor" href="/components/dashboards/crm/">
            <img src="../../../../assets/images/brand-logos/desktop-logo.png" alt=""
              className="authentication-brand desktop-logo"/>
            <img src="../../../../assets/images/brand-logos/desktop-dark.png" alt=""
              className="authentication-brand desktop-dark"/>
          </Link>
        </div>
        <p className="h5 font-semibold mb-2">Create Password</p>
        <p className="mb-4 text-[#8c9097] dark:text-white/50 opacity-[0.7] font-normal">Hello Jhon !</p>
        <div className="btn-list">
          <button type="button" className="ti-btn ti-btn-lg ti-btn-light !font-medium me-[0.365rem] dark:border-defaultborder/10"><svg
              className="google-svg" xmlns="http://www.w3.org/2000/svg" width="2443" height="2500"
              preserveAspectRatio="xMidYMid" viewBox="0 0 256 262">
              <path fill="#4285F4"
                d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027" />
              <path fill="#34A853"
                d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1" />
              <path fill="#FBBC05"
                d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782" />
              <path fill="#EB4335"
                d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251" />
            </svg>Sign In with google</button>
          <button aria-label="button" type="button" className="ti-btn ti-btn-icon ti-btn-primary me-[0.365rem]"><i className="ri-facebook-fill"></i></button>
          <button aria-label="button" type="button" className="ti-btn ti-btn-icon ti-btn-info"><i className="ri-twitter-fill"></i></button>
        </div>
        <div className="text-center my-[3rem] authentication-barrier">
          <span>OR</span>
        </div>
        <div className="grid grid-cols-12 gap-y-4">
          <div className="xl:col-span-12 col-span-12 mt-0">
            <label htmlFor="create-password" className="form-label text-default">Password</label>
            <div className="flex">
              <input type={(passwordshow1) ? 'text' : "password"}
                className="form-control form-control-lg  !w-full !rounded-e-none"
                id="create-password" placeholder="password"/>
              <button onClick={()=>setpasswordshow1(!passwordshow1)}
                className="ti-btn ti-btn-light !mb-0 !rounded-s-none"
                aria-label="button" type="button"><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></button>
            </div>
          </div>
          <div className="xl:col-span-12 col-span-12 mb-4">
            <label htmlFor="create-confirmpassword" className="form-label text-default">Confirm Password</label>
            <div className="flex">
              <input type={(passwordshow2) ? 'text' : "password"}
                className="form-control form-control-lg !w-full !rounded-e-none"
                id="create-confirmpassword" placeholder="password"/>
              <button onClick={()=>setpasswordshow2(!passwordshow2)}
                className="ti-btn ti-btn-light !mb-0 !rounded-s-none"
                aria-label="button" type="button"><i className={`${passwordshow2 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></button>
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
            <button type="button" className="ti-btn ti-btn-lg bg-primary text-white !font-medium dark:border-defaultborder/10">Save
              Password</button>
          </div>
        </div>
        <div className="text-center">
          <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mt-4">Back to home ? <Link href="/components/dashboards/crm/"
              className="text-primary">Click Here</Link></p>
        </div>
      </div>
    </div>
    <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-2"></div>
  </div>
</div>
<div className="xxl:col-span-5 xl:col-span-5 lg:col-span-5 col-span-12 xl:block hidden px-0">
  <div className="authentication-cover">
    <div className="aunthentication-cover-content rounded">
      <div className="swiper keyboard-control">
          <Swiper spaceBetween={30} navigation={true} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ clickable: true, }} modules={[Pagination, Autoplay, Navigation]} className="mySwiper">
         <SwiperSlide>
            <div className="text-white text-center p-[3rem] flex items-center justify-center">
              <div>
                <div className="mb-[3rem]">
                  <img src="../../../../assets/images/authentication/2.png" className="authentication-image" alt=""/>
                </div>
                <h6 className="font-semibold text-[1rem]">Create Password</h6>
                <p className="font-normal text-[0.875rem] opacity-[0.7]"> Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Ipsa eligendi expedita aliquam quaerat nulla voluptas facilis. Porro rem
                  voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at ratione.</p>
                  </div>
                  </div>
              </SwiperSlide>
          <SwiperSlide>
            <div className="text-white text-center p-[3rem] flex items-center justify-center">
              <div>
                <div className="mb-[3rem]">
                  <img src="../../../../assets/images/authentication/3.png" className="authentication-image" alt=""/>
                </div>
                <h6 className="font-semibold text-[1rem]">Create Password</h6>
                <p className="font-normal text-[0.875rem] opacity-[0.7]"> Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Ipsa eligendi expedita aliquam quaerat nulla voluptas facilis. Porro rem
                  voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at ratione.</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-white text-center p-[3rem] flex items-center justify-center">
              <div>
                <div className="mb-[3rem]">
                  <img src="../../../../assets/images/authentication/2.png" className="authentication-image" alt=""/>
                </div>
                <h6 className="font-semibold text-[1rem]">Create Password</h6>
                <p className="font-normal text-[0.875rem] opacity-[0.7]"> Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Ipsa eligendi expedita aliquam quaerat nulla voluptas facilis. Porro rem
                  voluptates possimus, ad, autem quae culpa architecto, quam labore blanditiis at ratione.</p>
              </div>
            </div>
          </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
    </div>
    </div>
    </HelmetProvider>
   </Fragment>
  )
}

Createcover.layout = "Authenticationlayout"

export default Createcover