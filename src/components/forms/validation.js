import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import DatePicker from "react-datepicker";

const Validation = () => {

  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());


  return (
    <Fragment>
      <Seo title={"Form Validation"} />
      <Pageheader currentpage="Form Validation" activepage="Forms" mainpage="Form Validations" />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Default Validation</h5>
            </div>
            <div className="box-body">
              <form className="ti-validation">
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">First Name</label>
                    <input type="text" className="my-auto ti-form-input  rounded-sm " placeholder="Firstname" required />
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">Last Name</label>
                    <input type="text" className="my-auto ti-form-input  rounded-sm " placeholder="Lastname" required />
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">Phone Number</label>
                    <input type="number" className="my-auto ti-form-input  rounded-sm " placeholder="+91 123-456-789" required />
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">Email Address</label>
                    <input type="email" className="my-auto ti-form-input  rounded-sm" placeholder="your@site.com" required />
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">Password</label>
                    <input type="password" className="ti-form-input  rounded-sm" placeholder="password" required />
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">Confirm Password</label>
                    <input type="password" className="ti-form-input  rounded-sm" placeholder="password" required />
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">Date Of Birth</label>
                    <DatePicker className="ti-form-input" showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">Gender</label>
                    <ul className="flex flex-col sm:flex-row">
                      <li className="ti-list-group w-full gap-x-2.5 py-2 px-4 bg-white dark:bg-bodybg border text-gray-800 sm:-ms-px sm:mt-0 sm:mb-0 mb-2 !rounded-e-none dark:bg-bgdark dark:border-white/10 dark:text-white">
                        <div className="relative flex items-start w-full">
                          <div className="flex items-center h-5">
                            <input id="ti-radio-validation-1" name="ti-radio-validation" type="radio" className="ti-form-radio" defaultChecked required />
                          </div>
                          <label htmlFor="ti-radio-validation-1" className="ms-3 block w-full text-sm text-gray-600 dark:text-[#8c9097] dark:text-white/50">
                            Female
                          </label>
                        </div>
                      </li>

                      <li className="ti-list-group w-full gap-x-2.5 py-2 px-4 bg-white dark:bg-bodybg border text-gray-800 sm:-ms-px sm:mt-0 sm:mb-0 mb-2 !rounded-none  dark:bg-bgdark dark:border-white/10 dark:text-white">
                        <div className="relative flex items-start w-full">
                          <div className="flex items-center h-5">
                            <input id="ti-radio-validation-2" name="ti-radio-validation" type="radio" className="ti-form-radio" required />
                          </div>
                          <label htmlFor="ti-radio-validation-2" className="ms-3 block w-full text-sm text-gray-600 dark:text-[#8c9097] dark:text-white/50">
                            Male
                          </label>
                        </div>
                      </li>

                      <li className="ti-list-group w-full gap-x-2.5 py-2 px-4 bg-white dark:bg-bodybg border text-gray-800 sm:-ms-px sm:mt-0 !rounded-s-none  dark:bg-bgdark dark:border-white/10 dark:text-white">
                        <div className="relative flex items-start w-full">
                          <div className="flex items-center h-5">
                            <input id="ti-radio-validation-3" name="ti-radio-validation" type="radio" className="ti-form-radio" required />
                          </div>
                          <label htmlFor="ti-radio-validation-3" className="ms-3 block w-full text-sm text-gray-600 dark:text-[#8c9097] dark:text-white/50">
                            Others
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="my-5">
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">Address</label>
                    <input type="text" className="my-auto ti-form-input  rounded-sm" placeholder="Address" required />
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">City</label>
                    <input type="text" className="my-auto ti-form-input  rounded-sm" placeholder="city" required />
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">State</label>
                    <input type="text" className="my-auto ti-form-input  rounded-sm" placeholder="state" required />
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">Pincode</label>
                    <input type="number" className="my-auto ti-form-input  rounded-sm" placeholder="pincode" required />
                  </div>
                </div>
                <div className="my-5 flex items-center">
                  <input className="form-check-input" type="checkbox" id="invalidCheck1" required="" value="" equired />
                  <label htmlFor="hs-checkbox-group-1" className="!inline text-sm text-gray-500 ms-3 dark:text-[#8c9097] dark:text-white/50">I agree with the <Link href="#!" className="text-primary hover:underline ms-1">terms and conditions</Link></label>
                </div>
                <button type="submit" className="ti-btn ti-btn-primary-full">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-span-12">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Custom Validation</h5>
            </div>
            <div className="box-body">
              <form className="ti-custom-validation" noValidate>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">First Name</label>
                    <input type="text" className="firstName my-auto ti-form-input  rounded-sm" placeholder="Firstname" defaultValue="John mark" required />
                    <span className="firstNameError text-red-500 text-xs hidden">error</span>
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">Last Name</label>
                    <input type="text" className="lastName my-auto ti-form-input  rounded-sm" placeholder="Lastname" required />
                    <span className="lastNameError text-red-500 text-xs hidden">error</span>
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">Phone Number</label>
                    <input type="number" className="phonenumber my-auto ti-form-input  rounded-sm" placeholder="+91 123-456-789" required />
                    <span className="phoneError text-red-500 text-xs hidden">error</span>
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">Email Address</label>
                    <input type="email" className="email-address my-auto ti-form-input  rounded-sm" placeholder="your@site.com" required />
                    <span className="emailError text-red-500 text-xs hidden">error</span>
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">Password</label>
                    <input type="password" className="password ti-form-input  rounded-sm" placeholder="password" required />
                    <span className="passwordError text-red-500 text-xs hidden">error</span>
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">Confirm Password</label>
                    <input type="password" className="confirmPassword ti-form-input  rounded-sm" placeholder="password" required />
                    <span className="confirmPasswordError text-red-500 text-xs hidden">error</span>
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">Date Of Birth</label>
                    <DatePicker className="ti-form-input" showIcon selected={startDate1} onChange={(date) => setStartDate1(date)} />
                    <span className="dobError text-red-500 text-xs hidden">error</span>
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">Gender</label>
                    <ul className="flex flex-col sm:flex-row">
                      <li className="ti-list-group w-full gap-x-2.5 py-2 px-4 bg-white dark:bg-bodybg border text-gray-800 sm:-ms-px sm:mt-0 sm:mb-0 mb-2 !rounded-e-none dark:bg-bgdark dark:border-white/10 dark:text-white">
                        <div className="relative flex items-start w-full">
                          <div className="flex items-center h-5">
                            <input id="ti-radio-validation-11" name="ti-radio-validation" type="radio" className="ti-form-radio" defaultChecked required />
                          </div>
                          <label htmlFor="ti-radio-validation-11" className="ms-3 block w-full text-sm text-gray-600 dark:text-[#8c9097] dark:text-white/50">
                            Female
                          </label>
                        </div>
                      </li>

                      <li className="ti-list-group w-full gap-x-2.5 py-2 px-4 bg-white dark:bg-bodybg border text-gray-800 sm:-ms-px sm:mt-0 sm:mb-0 mb-2 !rounded-none  dark:bg-bgdark dark:border-white/10 dark:text-white">
                        <div className="relative flex items-start w-full">
                          <div className="flex items-center h-5">
                            <input id="ti-radio-validation-21" name="ti-radio-validation" type="radio" className="ti-form-radio" required />
                          </div>
                          <label htmlFor="ti-radio-validation-21" className="ms-3 block w-full text-sm text-gray-600 dark:text-[#8c9097] dark:text-white/50">
                            Male
                          </label>
                        </div>
                      </li>

                      <li className="ti-list-group w-full gap-x-2.5 py-2 px-4 bg-white dark:bg-bodybg border text-gray-800 sm:-ms-px sm:mt-0 !rounded-s-none  dark:bg-bgdark dark:border-white/10 dark:text-white">
                        <div className="relative flex items-start w-full">
                          <div className="flex items-center h-5">
                            <input id="ti-radio-validation-31" name="ti-radio-validation" type="radio" className="ti-form-radio" required />
                          </div>
                          <label htmlFor="ti-radio-validation-31" className="ms-3 block w-full text-sm text-gray-600 dark:text-[#8c9097] dark:text-white/50">
                            Others
                          </label>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="my-5">
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">Address</label>
                    <input type="text" className="postalAddress my-auto ti-form-input  rounded-sm" placeholder="Address" required />
                    <span className="addressError text-red-500 text-xs hidden">error</span>
                  </div>
                </div>
                <div className="grid lg:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">City</label>
                    <input type="text" className="cityName my-auto ti-form-input  rounded-sm" placeholder="city" required />
                    <span className="cityError text-red-500 text-xs hidden">error</span>
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">State</label>
                    <input type="text" className="stateName my-auto ti-form-input  rounded-sm" placeholder="state" required />
                    <span className="stateError text-red-500 text-xs hidden">error</span>
                  </div>
                  <div className="space-y-2">
                    <label className="ti-form-label dark:text-defaulttextcolor/70 mb-0">Pincode</label>
                    <input type="number" className="pincode my-auto ti-form-input  rounded-sm" placeholder="pincode" required />
                    <span className="pincodeError text-red-500 text-xs hidden">error</span>
                  </div>
                </div>
                <div className="my-5 flex items-center">
                  <input className="form-check-input" type="checkbox" id="invalidCheck1" required="" value="" equired />
                  <span className="checkboxError text-red-500 text-xs hidden">error</span>
                  <label htmlFor="hs-checkbox-group-12" className="!inline text-sm text-gray-500 ms-3 dark:text-[#8c9097] dark:text-white/50">I agree with the <Link href="#!" className="text-primary hover:underline">terms and conditions</Link></label>
                </div>
                <button defaultValue="Login Now" type="submit" className="ti-btn ti-btn-primary-full ti-custom-validate-btn">Submit</button>
              </form>
            </div>
          </div>
        </div>

      </div>
    </Fragment>
  )
}
Validation.layout = "Contentlayout"

export default Validation