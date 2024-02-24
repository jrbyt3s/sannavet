import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'

const Faqs = () => {
  return (
    <Fragment>
      <Seo title={"FAQ's"} />
      <Pageheader currentpage="FAQ's" activepage="Pages" mainpage="FAQ's" />
      <div className="grid grid-cols-12 mb-[3rem] !mx-auto">
        <div className="xl:col-span-12 col-span-12">
          <div className="grid grid-cols-12 !mx-auto">
            <div className="xl:col-span-3 col-span-12"></div>
            <div className="xl:col-span-6 col-span-12">
              <div className="text-center p-4 faq-header mb-6">
                <h5 className="mb-1 text-[1.25rem] text-primary opacity-[5] font-semibold">F.A.Q's</h5>
                <h4 className="mb-1 text-[1.5rem] text-defaulttextcolor font-semibold">Frequently Asked Questions</h4>
                <p className="text-[.9375rem] text-[#8c9097] dark:text-white/50 opacity-[7]">We have shared some of the most frequently asked questions to help you out! </p>
              </div>
            </div>
            <div className="xl:col-span-3 col-span-12"></div>
          </div>
        </div>
        <div className="xl:col-span-1 col-span-12"></div>
        <div className="xl:col-span-10 col-span-12">
          <div className="grid grid-cols-12 gap-x-6">
            <div className="xl:col-span-6 col-span-12">
              <div className="box">
                <div className="box-header">
                  <div className="box-title">
                    General Topics ?
                  </div>
                </div>
                <div className="box-body">
                  <div className="hs-accordion-group">
                    <div className="hs-accordion active overflow-hidden  border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-1">
                      <button
                        className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                        aria-controls="hs-accordion-collapse-1" type="button">
                        Where can I subscribe to your newsletter?
                        <svg
                          className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-5 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                          width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <svg
                          className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-5 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                          width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                      <div id="hs-accordion-collapse-1"
                        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-accordion-heading-1">
                        <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                          <strong>This is the first item's accordion body.</strong> It is shown by
                          default, until the collapse plugin adds the appropriate classes that we
                          use to style each element
                          <code>.accordion-body</code>, though the transition does limit overflow.
                        </p>
                      </div>
                    </div>
                    <div className="hs-accordion overflow-hidden  border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-2">
                      <button
                        className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                        aria-controls="hs-accordion-collapse-2" type="button">
                        Where can in edit my address?
                        <svg
                          className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-5 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                          width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <svg
                          className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-5 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                          width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                      <div id="hs-accordion-collapse-2"
                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-accordion-heading-2">
                        <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                          <strong>This is the first item's accordion body.</strong> It is shown by
                          default, until the collapse plugin adds the appropriate classes that we
                          use to style each element
                          <code>.accordion-body</code>, though the transition does limit overflow.
                        </p>
                      </div>
                    </div>
                    <div className="hs-accordion overflow-hidden  border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-3">
                      <button
                        className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                        aria-controls="hs-accordion-collapse-3" type="button">
                        What are your opening hours?
                        <svg
                          className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-5 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                          width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <svg
                          className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-5 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                          width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                      <div id="hs-accordion-collapse-3"
                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-accordion-heading-3">
                        <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                          <strong>This is the first item's accordion body.</strong> It is shown by
                          default, until the collapse plugin adds the appropriate classes that we
                          use to style each element
                          <code>.accordion-body</code>, though the transition does limit overflow.
                        </p>
                      </div>
                    </div>
                    <div className="hs-accordion overflow-hidden  border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-4">
                      <button
                        className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                        aria-controls="hs-accordion-collapse-4" type="button">
                        Do I have the right to return an item?
                        <svg
                          className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-5 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                          width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <svg
                          className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-5 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                          width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                      <div id="hs-accordion-collapse-4"
                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-accordion-heading-4">
                        <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                          <strong>This is the first item's accordion body.</strong> It is shown by
                          default, until the collapse plugin adds the appropriate classes that we
                          use to style each element
                          <code>.accordion-body</code>, though the transition does limit overflow.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-6 col-span-12">
              <div className="box">
                <div className="box-header">
                  <div className="box-title">
                    Customer Support ?
                  </div>
                </div>
                <div className="box-body">
                  <div className="hs-accordion-group">
                    <div className="hs-accordion active overflow-hidden  border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-one">
                      <button
                        className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                        aria-controls="hs-accordion-collapse-one" type="button">
                        What is the order procedure?
                        <svg
                          className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-5 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                          width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <svg
                          className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-5 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                          width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                      <div id="hs-accordion-collapse-one"
                        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-accordion-heading-one">
                        <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                          <strong>This is the first item's accordion body.</strong> It is shown by
                          default, until the collapse plugin adds the appropriate classes that we
                          use to style each element
                          <code>.accordion-body</code>, though the transition does limit overflow.
                        </p>
                      </div>
                    </div>
                    <div className="hs-accordion overflow-hidden  border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-two">
                      <button
                        className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                        aria-controls="hs-accordion-collapse-two" type="button">
                        How and when do I receive the invoices?
                        <svg
                          className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-5 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                          width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <svg
                          className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-5 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                          width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                      <div id="hs-accordion-collapse-two"
                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-accordion-heading-two">
                        <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                          <strong>This is the first item's accordion body.</strong> It is shown by
                          default, until the collapse plugin adds the appropriate classes that we
                          use to style each element
                          <code>.accordion-body</code>, though the transition does limit overflow.
                        </p>
                      </div>
                    </div>
                    <div className="hs-accordion overflow-hidden  border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-three">
                      <button
                        className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                        aria-controls="hs-accordion-collapse-three" type="button">
                        Which method of ordering is best for me?
                        <svg
                          className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-5 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                          width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <svg
                          className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-5 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                          width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                      <div id="hs-accordion-collapse-three"
                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-accordion-heading-three">
                        <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                          <strong>This is the first item's accordion body.</strong> It is shown by
                          default, until the collapse plugin adds the appropriate classes that we
                          use to style each element
                          <code>.accordion-body</code>, though the transition does limit overflow.
                        </p>
                      </div>
                    </div>
                    <div className="hs-accordion overflow-hidden  border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-four">
                      <button
                        className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                        aria-controls="hs-accordion-collapse-four" type="button">
                        What does an order cost?
                        <svg
                          className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-5 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                          width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                        <svg
                          className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-5 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                          width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </button>
                      <div id="hs-accordion-collapse-four"
                        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                        aria-labelledby="hs-accordion-heading-four">
                        <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                          <strong>This is the first item's accordion body.</strong> It is shown by
                          default, until the collapse plugin adds the appropriate classes that we
                          use to style each element
                          <code>.accordion-body</code>, though the transition does limit overflow.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:col-span-12 col-span-12">
              <div className="box">
                <div className="box-header">
                  <div className="box-title">
                    Still Have Questions ?
                    <span className="subtitle font-normal text-[#8c9097] dark:text-white/50 block text-[0.75rem]">
                      You can post your questions here,our support team is always active.
                    </span>
                  </div>
                </div>
                <div className="box-body">
                  <div className="grid grid-cols-12 gap-4">
                    <div className="xl:col-span-6 col-span-12">
                      <label htmlFor="user-name" className="form-label">Your Name</label>
                      <input type="text" className="form-control w-full !rounded-md form-control-light" id="user-name" placeholder="Enter Your Name" />
                    </div>
                    <div className="xl:col-span-6 col-span-12">
                      <label htmlFor="user-email" className="form-label">Email Id</label>
                      <input type="text" className="form-control w-full !rounded-md form-control-light" id="user-email" placeholder="Enter Email" />
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                      <label htmlFor="text-area" className="form-label">Textarea</label>
                      <textarea className="form-control w-full !rounded-md form-control-light" placeholder="Enter your question here" id="text-area" rows="2"></textarea>
                    </div>
                  </div>
                </div>
                <div className="box-footer">
                  <button type="button" className="ti-btn bg-primary text-white ltr:float-right rtl:float-left">Send</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1"></div>
      </div>
    </Fragment>
  )
}
Faqs.layout = "Contentlayout"

export default Faqs