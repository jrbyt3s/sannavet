import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link';
import React, { Fragment, useState } from 'react'

const Twobasic = () => {

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
      <Seo title={"Twostepverification-basic"}/>
      <div className="container">
    <div className="flex justify-center authentication authentication-basic items-center h-full text-defaultsize text-defaulttextcolor">
      <div className="grid grid-cols-12">
        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-3 sm:col-span-2"></div>
        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-6 sm:col-span-8 col-span-12 flex flex-col">
          <div className="my-[3rem] flex justify-center">
            <Link href="/components/dashboards/crm/">
              <img src="../../../../assets/images/brand-logos/desktop-logo.png" alt="logo" className="desktop-logo"/>
              <img src="../../../../assets/images/brand-logos/desktop-dark.png" alt="logo" className="desktop-dark"/>
            </Link>
          </div>
          <div className="box">
            <div className="box-body sm:!p-[3rem]">
              <p className="font-semibold mb-2 text-center text-xl">Verify Your Account</p>
              <p className="mb-4 text-[#8c9097] dark:text-white/50 opacity-[0.7] font-normal text-center">Enter the 4 digit code sent to the
                registered email Id.</p>
              <div className="grid grid-cols-12 gap-y-4">
                <div className="xl:col-span-12 col-span-12 mb-2">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="col-span-3 px-1">
                        <input type="text" className="!px-0 form-control w-full !rounded-md form-control-lg text-center !text-[1rem]" required id="one" maxLength="1" value={inputValues.one}
											onChange={(e) => handleChange("one", "two", e.target.value)} />
                    </div>
                    <div className="col-span-3 px-1">
                    <input type="text" className="!px-0 form-control w-full !rounded-md form-control-lg text-center !text-[1rem]" required id="two" maxLength="1" value={inputValues.two}
											onChange={(e) => handleChange("two", "three", e.target.value)} />
                    </div>
                    <div className="col-span-3 px-1">
                    <input type="text" className="!px-0 form-control w-full !rounded-md form-control-lg text-center !text-[1rem]" required id="three" maxLength="1" value={inputValues.three}
											onChange={(e) => handleChange("three", "four", e.target.value)} />
                    </div>
                    <div className="col-span-3 px-1">
                    <input type="text" className="!px-0 form-control w-full !rounded-md form-control-lg text-center !text-[1rem]" required id="four" maxLength="1" value={inputValues.four}
											onChange={(e) => handleChange("four", null, e.target.value)} />
                    </div>
                  </div>
                  <div className="form-check mt-2 mb-0 !ps-0">
                      <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                      <label className="form-check-label" htmlFor="defaultCheck1">
                          Did not recieve a code ?<Link href="/components/pages/email/mail-app/" className="text-primary ms-2 inline-block">Resend</Link>
                      </label>
                  </div>
                </div>
                <div className="xl:col-span-12 col-span-12 grid mt-2">
                  <Link href="/components/dashboards/crm/"
                    className="ti-btn ti-btn-lg bg-primary text-white !font-medium dark:border-defaultborder/10">Verify</Link>
                </div>
              </div>
              <div className="text-center">
                <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mt-4 text-danger"><sup><i className="ri-asterisk"></i></sup>Don't share
                  the verification code with anyone !</p>
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

Twobasic.layout = "Authenticationlayout"

export default Twobasic