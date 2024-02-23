import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Link from 'next/link';

const Twocover = () => {

    const [inputValues, setInputValues] = useState({
		one: "",
		two: "",
		three: "",
		four: "",
	});

	const handleChange = (currentId, nextId, value) => {
		setInputValues((prevValues) => ({
			...prevValues,
			[currentId]: value,
		}));
		const nextInput = document.getElementById(nextId);
    
		if (nextInput) {
			nextInput.focus();
		}
	};

  return (
   <Fragment>
    <Seo title={"Twostepverification-cover"}/>
     <div className="grid grid-cols-12 authentication mx-0 text-defaulttextcolor text-defaultsize">

<div className="xxl:col-span-7 xl:col-span-7 lg:col-span-12 col-span-12">
    <div className="grid grid-cols-12  items-center h-full">
      <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-2"></div>
        <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-8 col-span-12">
            <div className="p-[3rem]">
                <div className="mb-4">
                    <Link aria-label="anchor" href="/components/dashboards/crm/">
                        <img src="../../../../assets/images/brand-logos/desktop-logo.png" alt="" className="authentication-brand desktop-logo"/>
                        <img src="../../../../assets/images/brand-logos/desktop-dark.png" alt="" className="authentication-brand desktop-dark"/>
                    </Link>
                </div>
                <p className="font-semibold mb-2 text-xl">Verify Your Account</p>
                <p className="mb-4 text-[#8c9097] dark:text-white/50 opacity-[0.7] font-normal">Enter the 4 digit code sent to the registered email Id.</p>
                <div className="grid grid-cols-12 gap-4">
                    <div className="xl:col-span-12 col-span-12 mb-4">
                        <div className="grid grid-cols-12 gap-4">
                            <div className="col-span-3 px-1">
                                <input type="text" className="!px-0 form-control form-control-lg w-full !rounded-md !text-[1rem] text-center" required id="one" maxLength="1" value={inputValues.one} onChange={(e) => handleChange("one", "two", e.target.value)} />
                            </div>
                            <div className="col-span-3 px-1">
                            <input type="text" className="!px-0 form-control form-control-lg w-full !rounded-md !text-[1rem] text-center" required id="two" maxLength="1" value={inputValues.two} onChange={(e) => handleChange("two", "three", e.target.value)} />
                            </div>
                            <div className="col-span-3 px-1">
                            <input type="text" className="!px-0 form-control form-control-lg w-full !rounded-md !text-[1rem] text-center" required id="three" maxLength="1" value={inputValues.three} onChange={(e) => handleChange("three", "four", e.target.value)} />
                            </div>
                            <div className="col-span-3 px-1">
                            <input type="text" className="!px-0 form-control form-control-lg w-full !rounded-md !text-[1rem] text-center" required id="four" maxLength="1" value={inputValues.four} onChange={(e) => handleChange("four", null, e.target.value)} />
                            </div>
                        </div>
                        <div className="form-check mt-2 mb-0 !ps-0">
                            <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                Did not recieve a code ?<Link href="/components/pages/email/mail-app/" className="text-primary ms-2 inline-block">Resend</Link>
                            </label>
                        </div>
                    </div>
                    <div className="xl:col-span-12 col-span-12 grid">
                        <Link href="/components/dashboards/crm/" className="ti-btn ti-btn-lg bg-primary text-white !font-medium dark:border-defaultborder/10">Verify</Link>
                    </div>
                </div>
                <div className="text-center">
                    <p className="text-[0.75rem] text-danger mt-4"><sup><i className="ri-asterisk"></i></sup>Don't share the verification code with anyone !</p>
                </div>
            </div>
        </div>
        <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-2 "></div>
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
                                <h6 className="font-semibold text-[1rem]">Verify Your Account</h6>
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
                                <h6 className="font-semibold text-[1rem]">Verify Your Account</h6>
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
                                <h6 className="font-semibold text-[1rem]">Verify Your Account</h6>
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
   </Fragment>
  )
}

Twocover.layout = "Authenticationlayout"

export default Twocover