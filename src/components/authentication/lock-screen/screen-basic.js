import Seo from '@/shared/layout-components/seo/seo';
import Link from 'next/link';
import React, { Fragment, useState } from 'react'

const Screenbasic = () => {

    const [passwordshow1, setpasswordshow1] = useState(false);

  return (
   <Fragment>
    <Seo title={"Lockscreen-Basic"}/>
      <div className="container">
        <div className="flex justify-center authentication authentication-basic items-center h-full text-defaultsize text-defaulttextcolor">
          <div className="grid grid-cols-12">
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-8 col-span-12">
              <div className="my-[2.5rem] flex justify-center">
                  <Link href="/components/dashboards/crm/">
                      <img src="../../../../assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo"/>
                      <img src="../../../../assets/images/brand-logos/desktop-dark.png" alt="logo" className="desktop-dark"/>
                  </Link>
              </div>
              <div className="box">
                  <div className="box-body !p-[3rem]">
                      <p className="h5 font-semibold mb-2 text-center">Lock Screen</p>
                      <p className="mb-4 text-[#8c9097] dark:text-white/50 opacity-[0.7] font-normal text-center">Hello Jhon !</p>
                      <div className="flex items-center mb-4">
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
                          <div className="xl:col-span-12 col-span-12 mb-2">
                              <label htmlFor="lockscreen-password" className="form-label text-default">Password</label>
                              <div className="input-group">
                                  <input type={(passwordshow1) ? 'text' : "password"} className="form-control form-control-lg !rounded-s-md" id="lockscreen-password" placeholder="password"/>
                                  <button onClick={()=>setpasswordshow1(!passwordshow1)} aria-label="button" type="button" className="ti-btn ti-btn-light !mb-0 !rounded-s-none" id="button-addon2"><i className={`${passwordshow1 ? 'ri-eye-line' : 'ri-eye-off-line'} align-middle`}></i></button>
                              </div>
                              <div className="mt-4">
                                  <div className="form-check !ps-0">
                                      <input className="form-check-input " type="checkbox" value="" id="defaultCheck1"/>
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
                          <p className="text-[.75rem] text-[#8c9097] dark:text-white/50 mt-4 mb-0">Try unlock with different methods <Link className="text-success" href="#!"><u>Finger print</u></Link> / <Link className="text-success" href="#!"><u>Face Id</u></Link></p>
                      </div>
                  </div>
              </div>
            </div>
            <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
          </div>
        </div>
    </div>
   </Fragment>
  )
}

Screenbasic.layout = "Authenticationlayout"

export default Screenbasic