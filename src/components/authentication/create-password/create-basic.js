
import Seo from '@/shared/layout-components/seo/seo';
import Link from 'next/link';
import React, { Fragment, useState } from 'react'

const Createbasic = () => {

    const [passwordshow1, setpasswordshow1] = useState(false);
    const [passwordshow2, setpasswordshow2] = useState(false);

  return (
   <Fragment>
    <Seo title={"Createpassword-basic"}/>
     <div className="container">
        <div className="grid grid-cols-12 authentication authentication-basic items-center h-full w-full mx-auto">
            <div className="xxl:col-span-4 xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-2 col-span-12"></div>
            <div className="xxl:col-span-4 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-8 col-span-12">
                <div className="my-[3rem] flex justify-center">
                    <Link href="/components/dashboards/crm/">
                        <img src="../../../../assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo"/>
                        <img src="../../../../assets/images/brand-logos/desktop-dark.png" alt="logo" className="desktop-dark"/>
                    </Link>
                </div>
                <div className="box">
                    <div className="box-body !p-[3rem]">
                        <p className="h5 font-semibold mb-2 text-center">Create Password</p>
                        <p className="mb-4 text-[#8c9097] dark:text-white/50 opacity-[0.7] font-normal text-center">Hello Jhon !</p>
                        <div className="grid grid-cols-12 gap-y-4">
                            <div className="xl:col-span-12 col-span-12">
                                <label htmlFor="create-password" className="form-label text-default">Password</label>
                                <div className="input-group">
                                    <input type={(passwordshow1) ? 'text' : "password"} className="form-control form-control-lg !rounded-s-md !border-e-0" id="create-password" placeholder="password"/>
                                    <button onClick={()=>setpasswordshow1(!passwordshow1)} aria-label="button" type="button" className="ti-btn ti-btn-light !mb-0 !rounded-s-none dark:border-white/10 !border-s-0" ><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></button>
                                </div>
                            </div>
                            <div className="xl:col-span-12 col-span-12 mb-2">
                                <label htmlFor="create-confirmpassword" className="form-label text-default">Confirm Password</label>
                                <div className="input-group">
                                    <input type={(passwordshow2) ? 'text' : "password"} className="form-control form-control-lg !rounded-s-md !border-e-0" id="create-confirmpassword" placeholder="password"/>
                                    <button onClick={()=>setpasswordshow2(!passwordshow2)} aria-label="button" type="button" className="ti-btn ti-btn-light !mb-0  !rounded-s-none dark:border-white/10 !border-s-0" ><i className={`${passwordshow2 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></button>
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
                                <button type="button" className="ti-btn ti-btn-lg bg-primary text-white !font-medium dark:border-defaultborder/10">Save Password</button>
                            </div>
                        </div>
                        <div className="text-center">
                            <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50  mt-4">Back to home ? <Link href="/components/dashboards/crm" className="text-primary">Click Here</Link></p>
                        </div>
                        <div className="text-center my-4 authentication-barrier">
                            <span>OR</span>
                        </div>
                        <div className="btn-list text-center">
                            <button aria-label="button" type="button" className="ti-btn ti-btn-icon ti-btn-light me-[0.365rem]">
                                <i className="ri-facebook-line font-bold text-dark opacity-[0.7]"></i>
                            </button>
                            <button aria-label="button" type="button" className="ti-btn ti-btn-icon ti-btn-light me-[0.365rem]">
                                <i className="ri-google-line font-bold text-dark opacity-[0.7]"></i>
                            </button>
                            <button aria-label="button" type="button" className="ti-btn ti-btn-icon ti-btn-light me-[0.365rem]">
                                <i className="ri-twitter-line font-bold text-dark opacity-[0.7]"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="xxl:col-span-4 xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-2 col-span-12"></div>
        </div>
    </div>
   </Fragment>
  )
}

Createbasic.layout = "Authenticationlayout"

export default Createbasic