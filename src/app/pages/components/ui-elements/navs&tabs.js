import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React from 'react'

const Navstabs = () => {
  return (
    <div>
      <Seo title={"Navs & Tabs"} />
      <Pageheader currentpage="Navs & Tabs" activepage="Ui Elements" mainpage="Navs & Tabs" />
      <div className="grid grid-cols-12 gap-x-6">
        <div className="col-span-12 xl:col-span-6">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Basic Nav</h5>
            </div>
            <div className="box-body">
              <nav className="sm:flex space-x-6 rtl:space-x-reverse">
                <Link className="px-1 inline-flex items-center gap-2 text-sm whitespace-nowrap text-primary hover:text-primary" href="#!">
                  Link
                </Link>
                <Link className="px-1 inline-flex items-center gap-2 text-sm font-medium whitespace-nowrap text-primary hover:text-primary" href="#!" aria-current="page">
                  Active
                </Link>
                <Link className="px-1 inline-flex items-center gap-2 text-sm whitespace-nowrap text-primary hover:text-primary" href="#!">
                  Link
                </Link>
                <Link className="px-1 inline-flex items-center gap-2 text-sm whitespace-nowrap text-gray-400 pointer-events-none dark:text-white/50" href="#!">
                  Disabled
                </Link>
              </nav>
            </div>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-6">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Basic Nav With List</h5>
            </div>
            <div className="box-body">
              <ul className="list-disc space-x-6 rtl:space-x-reverse">
                <li className="inline-block"><Link className="px-1 inline-flex items-center gap-2 text-sm whitespace-nowrap text-primary hover:text-primary" href="#!">
                  Link
                </Link></li>
                <li className="inline-block"><Link className="px-1 inline-flex items-center gap-2 text-sm font-medium whitespace-nowrap text-primary hover:text-primary" href="#!" aria-current="page">
                  Active
                </Link></li>
                <li className="inline-block"><Link className="px-1 inline-flex items-center gap-2 text-sm whitespace-nowrap text-primary hover:text-primary" href="#!">
                  Link
                </Link></li>
                <li className="inline-block"><Link className="px-1 inline-flex items-center gap-2 text-sm whitespace-nowrap text-gray-400 pointer-events-none dark:text-white/50" href="#!">
                  Disabled
                </Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-x-6">
        <div className="col-span-12 md:col-span-6 xxl:!col-span-4">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Basic Tabs</h5>
            </div>
            <div className="box-body">
              <div className="border-b-0 border-gray-200 dark:border-white/10">
                <nav className="flex space-x-2 rtl:space-x-reverse" aria-label="Tabs">
                  <button type="button" className="hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-primary dark:hs-tab-active:bg-transparent dark:hs-tab-active:border-b-white/10 dark:hs-tab-active:text-primary -mb-px py-2 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-defaulttextcolor rounded-t-sm hover:text-primary dark:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-300 active" id="hs-tab-js-behavior-item-1" data-hs-tab="#hs-tab-js-behavior-1" aria-controls="hs-tab-js-behavior-1">
                    Tab 1
                  </button>
                  <button type="button" className="hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-primary dark:hs-tab-active:bg-transparent dark:hs-tab-active:border-b-white/10 dark:hs-tab-active:text-primary -mb-px py-2 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-defaulttextcolor rounded-t-sm hover:text-primary dark:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-300" id="hs-tab-js-behavior-item-2" data-hs-tab="#hs-tab-js-behavior-2" aria-controls="hs-tab-js-behavior-2">
                    Tab 2
                  </button>
                  <button type="button" className="hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-primary dark:hs-tab-active:bg-transparent dark:hs-tab-active:border-b-white/10 dark:hs-tab-active:text-primary -mb-px py-2 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-defaulttextcolor rounded-t-sm hover:text-primary dark:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-300" id="hs-tab-js-behavior-item-3" data-hs-tab="#hs-tab-js-behavior-3" aria-controls="hs-tab-js-behavior-3">
                    Tab 3
                  </button>
                </nav>
              </div>

              <div className="">
                <div id="hs-tab-js-behavior-1" role="tabpanel" aria-labelledby="hs-tab-js-behavior-item-1">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-ss-none rounded-sm dark:border-white/10 border-gray-200">
                    How hotel deals can help you live a better life. How celebrity cruises aren't as bad as you think. How cultural solutions can help you predict the future. How to cheat at dog friendly hotels and get away with it. 17 problems with summer activities. How to cheat at travel agents and get away with it. How not knowing family trip ideas makes you a rookie. What everyone is saying about daily deals. How twitter can teach you about carnival cruises. How to start using cultural solutions.
                  </p>
                </div>
                <div id="hs-tab-js-behavior-2" className="hidden" role="tabpanel" aria-labelledby="hs-tab-js-behavior-item-2">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-ss-none rounded-sm dark:border-white/10 border-gray-200">
                    How travel coupons make you a better lover. Why cultural solutions are the new black. Why mom was right about travel insurances. How family trip ideas can help you predict the future. How carnival cruises make you a better lover. Why you'll never succeed at daily deals. 11 ways cheapest flights can find you the love of your life. The complete beginner's guide to mission trips. If you read one article about cultural notes read this one. Why you shouldn't eat vacation package in bed.
                  </p>
                </div>
                <div id="hs-tab-js-behavior-3" className="hidden" role="tabpanel" aria-labelledby="hs-tab-js-behavior-item-3">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-ss-none rounded-sm dark:border-white/10 border-gray-200">
                    Unbelievable healthy snack success stories. 12 facts about safe food handling tips that will impress your friends. Restaurant weeks by the numbers. Will mexican food ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks can make you sick. The complete beginner's guide to cooking healthy food. Unbelievable food stamp success stories. How whole foods markets are making the world a better place. 16 things that won't happen in dish reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xxl:!col-span-4">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Basic Vertical Tabs</h5>
            </div>
            <div className="box-body">
              <div className="flex">
                <div className="border-e border-gray-200 dark:border-white/10">
                  <nav className="flex flex-col space-y-2 whitespace-nowrap" aria-label="Tabs" data-hs-tabs-vertical="true">
                    <button type="button" className="hs-tab-active:bg-white hs-tab-active:border-e-transparent  hs-tab-active:text-primary dark:hs-tab-active:bg-bodybg2 dark:hs-tab-active:border-e-transparent dark:hs-tab-active:text-primary -me-px py-2 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-defaulttextcolor  rounded-s-sm hover:text-primary dark:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-300 active" id="hs-tab-js-vertical-item-1" data-hs-tab="#hs-tab-js-vertical-1" aria-controls="hs-tab-js-vertical-1">
                      Tab 1
                    </button>
                    <button type="button" className="hs-tab-active:bg-white hs-tab-active:border-e-transparent  hs-tab-active:text-primary dark:hs-tab-active:bg-bodybg2 dark:hs-tab-active:border-e-transparent dark:hs-tab-active:text-primary -me-px py-2 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-defaulttextcolor  rounded-s-sm hover:text-primary dark:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-300" id="hs-tab-js-vertical-item-2" data-hs-tab="#hs-tab-js-vertical-2" aria-controls="hs-tab-js-vertical-2">
                      Tab 2
                    </button>
                    <button type="button" className="hs-tab-active:bg-white hs-tab-active:border-e-transparent  hs-tab-active:text-primary dark:hs-tab-active:bg-bodybg2 dark:hs-tab-active:border-e-transparent dark:hs-tab-active:text-primary -me-px py-2 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-defaulttextcolor rounded-s-sm hover:text-primary dark:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-300" id="hs-tab-js-vertical-item-3" data-hs-tab="#hs-tab-js-vertical-3" aria-controls="hs-tab-js-vertical-3">
                      Tab 3
                    </button>
                  </nav>
                </div>

                <div className="">
                  <div id="hs-tab-js-vertical-1" role="tabpanel" aria-labelledby="hs-tab-js-vertical-item-1">
                    <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border border-s-0 rounded-sm rounded-ss-none dark:border-white/10 border-gray-200">
                      How hotel deals can help you live a better life. How celebrity cruises aren't as bad as you think. How cultural solutions can help you predict the future. How to cheat at dog friendly hotels and get away with it. 17 problems with summer activities. How to cheat at travel agents and get away with it. How not knowing family trip ideas makes you a rookie. What everyone is saying about daily deals. How twitter can teach you about carnival cruises. How to start using cultural solutions.
                    </p>
                  </div>
                  <div id="hs-tab-js-vertical-2" className="hidden" role="tabpanel" aria-labelledby="hs-tab-js-vertical-item-2">
                    <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border border-s-0 rounded-sm rounded-ss-none dark:border-white/10 border-gray-200">
                      How travel coupons make you a better lover. Why cultural solutions are the new black. Why mom was right about travel insurances. How family trip ideas can help you predict the future. How carnival cruises make you a better lover. Why you'll never succeed at daily deals. 11 ways cheapest flights can find you the love of your life. The complete beginner's guide to mission trips. If you read one article about cultural notes read this one. Why you shouldn't eat vacation package in bed.
                    </p>
                  </div>
                  <div id="hs-tab-js-vertical-3" className="hidden" role="tabpanel" aria-labelledby="hs-tab-js-vertical-item-3">
                    <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border border-s-0 rounded-sm rounded-ss-none dark:border-white/10 border-gray-200">
                      Unbelievable healthy snack success stories. 12 facts about safe food handling tips that will impress your friends. Restaurant weeks by the numbers. Will mexican food ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks can make you sick. The complete beginner's guide to cooking healthy food. Unbelievable food stamp success stories. How whole foods markets are making the world a better place. 16 things that won't happen in dish reviews.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xxl:!col-span-4">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Resize Tabs</h5>
            </div>
            <div className="box-body">
              <select id="tab-select" className="mb-5 sm:hidden py-2 px-3 pe-9 block w-full border-gray-200 rounded-sm text-sm focus:border-primary focus:ring-primary dark:bg-bgdark dark:border-white/10 dark:text-[#8c9097] dark:text-white/50" aria-label="Tabs">
                <option value="#hs-tab-to-select-1">Tab 1</option>
                <option value="#hs-tab-to-select-2">Tab 2</option>
                <option value="#hs-tab-to-select-3">Tab 3</option>
              </select>

              <div className="hidden sm:block border-b-0 border-gray-200 dark:border-white/10">
                <nav className="flex space-x-2 rtl:space-x-reverse" aria-label="Tabs">
                  <button type="button" className="hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-primary dark:hs-tab-active:bg-transparent dark:hs-tab-active:border-b-white/10 dark:hs-tab-active:text-primary -mb-px py-2 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-defaulttextcolor rounded-t-sm hover:text-primary dark:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-300 active" id="hs-tab-to-select-item-1" data-hs-tab="#hs-tab-to-select-1" aria-controls="hs-tab-to-select-1">
                    Tab 1
                  </button>
                  <button type="button" className="hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-primary dark:hs-tab-active:bg-transparent dark:hs-tab-active:border-b-white/10 dark:hs-tab-active:text-primary -mb-px py-2 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-defaulttextcolor rounded-t-sm hover:text-primary dark:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-300" id="hs-tab-to-select-item-2" data-hs-tab="#hs-tab-to-select-2" aria-controls="hs-tab-to-select-2">
                    Tab 2
                  </button>
                  <button type="button" className="hs-tab-active:bg-white hs-tab-active:border-b-transparent hs-tab-active:text-primary dark:hs-tab-active:bg-transparent dark:hs-tab-active:border-b-white/10 dark:hs-tab-active:text-primary -mb-px py-2 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-defaulttextcolor rounded-t-sm hover:text-primary dark:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-300" id="hs-tab-to-select-item-3" data-hs-tab="#hs-tab-to-select-3" aria-controls="hs-tab-to-select-3">
                    Tab 3
                  </button>
                </nav>
              </div>

              <div className="">
                <div id="hs-tab-to-select-1" role="tabpanel" aria-labelledby="hs-tab-to-select-item-1">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm  sm:rounded-ss-none dark:border-white/10 border-gray-200">
                    How hotel deals can help you live a better life. How celebrity cruises aren't as bad as you think. How cultural solutions can help you predict the future. How to cheat at dog friendly hotels and get away with it. 17 problems with summer activities. How to cheat at travel agents and get away with it. How not knowing family trip ideas makes you a rookie. What everyone is saying about daily deals. How twitter can teach you about carnival cruises. How to start using cultural solutions.
                  </p>
                </div>
                <div id="hs-tab-to-select-2" className="hidden" role="tabpanel" aria-labelledby="hs-tab-to-select-item-2">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm  sm:rounded-ss-none dark:border-white/10 border-gray-200">
                    How travel coupons make you a better lover. Why cultural solutions are the new black. Why mom was right about travel insurances. How family trip ideas can help you predict the future. How carnival cruises make you a better lover. Why you'll never succeed at daily deals. 11 ways cheapest flights can find you the love of your life. The complete beginner's guide to mission trips. If you read one article about cultural notes read this one. Why you shouldn't eat vacation package in bed.
                  </p>
                </div>
                <div id="hs-tab-to-select-3" className="hidden" role="tabpanel" aria-labelledby="hs-tab-to-select-item-3">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm  sm:rounded-ss-none dark:border-white/10 border-gray-200">
                    Unbelievable healthy snack success stories. 12 facts about safe food handling tips that will impress your friends. Restaurant weeks by the numbers. Will mexican food ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks can make you sick. The complete beginner's guide to cooking healthy food. Unbelievable food stamp success stories. How whole foods markets are making the world a better place. 16 things that won't happen in dish reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xxl:!col-span-4">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Tabs With Underline</h5>
            </div>
            <div className="box-body">
              <div className="border-b-2 border-gray-200 dark:border-white/10">
                <nav className="-mb-0.5 flex space-x-6 rtl:space-x-reverse">
                  <Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-primary active" href="#!" id="underline-item-1" data-hs-tab="#underline-1" aria-controls="underline-1">
                    Tab 1
                  </Link>
                  <Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-primary" href="#!" id="underline-item-2" data-hs-tab="#underline-2" aria-controls="underline-2">
                    Tab 2
                  </Link>
                  <Link className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor  dark:text-[#8c9097] dark:text-white/50 hover:text-primary" href="#!" id="underline-item-3" data-hs-tab="#underline-3" aria-controls="underline-3">
                    Tab 3
                  </Link>
                </nav>
              </div>

              <div className="mt-3">
                <div id="underline-1" role="tabpanel" aria-labelledby="underline-item-1">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    How hotel deals can help you live a better life. How celebrity cruises aren't as bad as you think. How cultural solutions can help you predict the future. How to cheat at dog friendly hotels and get away with it. 17 problems with summer activities. How to cheat at travel agents and get away with it. How not knowing family trip ideas makes you a rookie. What everyone is saying about daily deals. How twitter can teach you about carnival cruises. How to start using cultural solutions.
                  </p>
                </div>
                <div id="underline-2" className="hidden" role="tabpanel" aria-labelledby="underline-item-2">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    How travel coupons make you a better lover. Why cultural solutions are the new black. Why mom was right about travel insurances. How family trip ideas can help you predict the future. How carnival cruises make you a better lover. Why you'll never succeed at daily deals. 11 ways cheapest flights can find you the love of your life. The complete beginner's guide to mission trips. If you read one article about cultural notes read this one. Why you shouldn't eat vacation package in bed.
                  </p>
                </div>
                <div id="underline-3" className="hidden" role="tabpanel" aria-labelledby="underline-item-3">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    Unbelievable healthy snack success stories. 12 facts about safe food handling tips that will impress your friends. Restaurant weeks by the numbers. Will mexican food ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks can make you sick. The complete beginner's guide to cooking healthy food. Unbelievable food stamp success stories. How whole foods markets are making the world a better place. 16 things that won't happen in dish reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xxl:!col-span-4">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Tabs With Icons</h5>
            </div>
            <div className="box-body">
              <div className="sm:border-b-2 border-gray-200 dark:border-white/10">
                <nav className="-mb-0.5 sm:flex sm:space-x-6 rtl:space-x-reverse">
                  <Link className="w-full sm:w-auto hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50 hover:text-primary" href="#!" id="icon-item-1" data-hs-tab="#icon-1" aria-controls="icon-1">
                    <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                      <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                    </svg>
                    Tab 1
                  </Link>
                  <Link className="w-full sm:w-auto hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50 hover:text-primary active" href="#!" id="icon-item-2" data-hs-tab="#icon-2" aria-controls="icon-2">
                    <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                      <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                    Tab 2
                  </Link>
                  <Link className="w-full sm:w-auto hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor dark:text-[#8c9097] dark:text-white/50 hover:text-primary" href="#!" id="icon-item-3" data-hs-tab="#icon-3" aria-controls="icon-3">
                    <svg className="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z" />
                      <path d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z" />
                    </svg>
                    Tab 3
                  </Link>
                </nav>
              </div>

              <div className="mt-3">
                <div id="icon-1" className="hidden" role="tabpanel" aria-labelledby="icon-item-1">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    How hotel deals can help you live a better life. How celebrity cruises aren't as bad as you think. How cultural solutions can help you predict the future. How to cheat at dog friendly hotels and get away with it. 17 problems with summer activities. How to cheat at travel agents and get away with it. How not knowing family trip ideas makes you a rookie. What everyone is saying about daily deals. How twitter can teach you about carnival cruises. How to start using cultural solutions.
                  </p>
                </div>
                <div id="icon-2" role="tabpanel" aria-labelledby="icon-item-2">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    How travel coupons make you a better lover. Why cultural solutions are the new black. Why mom was right about travel insurances. How family trip ideas can help you predict the future. How carnival cruises make you a better lover. Why you'll never succeed at daily deals. 11 ways cheapest flights can find you the love of your life. The complete beginner's guide to mission trips. If you read one article about cultural notes read this one. Why you shouldn't eat vacation package in bed.
                  </p>
                </div>
                <div id="icon-3" className="hidden" role="tabpanel" aria-labelledby="icon-item-3">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    Unbelievable healthy snack success stories. 12 facts about safe food handling tips that will impress your friends. Restaurant weeks by the numbers. Will mexican food ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks can make you sick. The complete beginner's guide to cooking healthy food. Unbelievable food stamp success stories. How whole foods markets are making the world a better place. 16 things that won't happen in dish reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xxl:!col-span-4">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Tabs With Badges</h5>
            </div>
            <div className="box-body">
              <div className="sm:border-b border-gray-200 dark:border-white/10">
                <nav className="sm:flex sm:space-x-2 sm:rtl:space-x-reverse" aria-label="Tabs">
                  <button type="button" className="w-full sm:w-auto hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor hover:text-primary dark:text-[#8c9097] dark:text-white/50 active" id="tabs-with-badges-item-1" data-hs-tab="#tabs-with-badges-1" aria-controls="tabs-with-badges-1">
                    Tab 1 <span className="hs-tab-active:bg-primary hs-tab-active:text-white dark:hs-tab-active:bg-primary dark:hs-tab-active:text-white ms-1 py-0.5 px-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-300">99+</span>
                  </button>
                  <button type="button" className="w-full sm:w-auto hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor hover:text-primary dark:text-[#8c9097] dark:text-white/50" id="tabs-with-badges-item-2" data-hs-tab="#tabs-with-badges-2" aria-controls="tabs-with-badges-2">
                    Tab 2 <span className="hs-tab-active:bg-primary hs-tab-active:text-white dark:hs-tab-active:bg-primary dark:hs-tab-active:text-white ms-1 py-0.5 px-1.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-black/20 dark:text-gray-300">99+</span>
                  </button>
                  <button type="button" className="w-full sm:w-auto hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor hover:text-primary dark:text-[#8c9097] dark:text-white/50" id="tabs-with-badges-item-3" data-hs-tab="#tabs-with-badges-3" aria-controls="tabs-with-badges-3">
                    Tab 3
                  </button>
                </nav>
              </div>

              <div className="mt-3">
                <div id="tabs-with-badges-1" role="tabpanel" aria-labelledby="tabs-with-badges-item-1">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    How hotel deals can help you live a better life. How celebrity cruises aren't as bad as you think. How cultural solutions can help you predict the future. How to cheat at dog friendly hotels and get away with it. 17 problems with summer activities. How to cheat at travel agents and get away with it. How not knowing family trip ideas makes you a rookie. What everyone is saying about daily deals. How twitter can teach you about carnival cruises. How to start using cultural solutions.
                  </p>
                </div>
                <div id="tabs-with-badges-2" className="hidden" role="tabpanel" aria-labelledby="tabs-with-badges-item-2">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    How travel coupons make you a better lover. Why cultural solutions are the new black. Why mom was right about travel insurances. How family trip ideas can help you predict the future. How carnival cruises make you a better lover. Why you'll never succeed at daily deals. 11 ways cheapest flights can find you the love of your life. The complete beginner's guide to mission trips. If you read one article about cultural notes read this one. Why you shouldn't eat vacation package in bed.
                  </p>
                </div>
                <div id="tabs-with-badges-3" className="hidden" role="tabpanel" aria-labelledby="tabs-with-badges-item-3">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    Unbelievable healthy snack success stories. 12 facts about safe food handling tips that will impress your friends. Restaurant weeks by the numbers. Will mexican food ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks can make you sick. The complete beginner's guide to cooking healthy food. Unbelievable food stamp success stories. How whole foods markets are making the world a better place. 16 things that won't happen in dish reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xxl:!col-span-4">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Card type tab</h5>
            </div>
            <div className="box-body">
              <div className="border-b-0 border-gray-200 dark:border-white/10">
                <nav className="flex space-x-2 rtl:space-x-reverse">
                  <Link className="hs-tab-active:!bg-transparent hs-tab-active:!text-primary -mb-px py-2 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-defaulttextcolor rounded-t-sm hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-300 active" href="#!" id="card-type-item-1" data-hs-tab="#card-type-1" aria-controls="card-type-1">
                    Active
                  </Link>
                  <Link className="hs-tab-active:!bg-transparent hs-tab-active:!text-primary -mb-px py-2 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-defaulttextcolor rounded-t-sm hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-300" href="#!" id="card-type-item-2" data-hs-tab="#card-type-2" aria-controls="card-type-2">
                    Tab 1
                  </Link>
                  <Link className="hs-tab-active:!bg-transparent hs-tab-active:!text-primary -mb-px py-2 px-3 inline-flex items-center gap-2 bg-gray-50 text-sm font-medium text-center border text-defaulttextcolor rounded-t-sm hover:text-gray-700 dark:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-gray-300" href="#!" id="card-type-item-3" data-hs-tab="#card-type-3" aria-controls="card-type-3">
                    Tab 2
                  </Link>
                </nav>
              </div>

              <div className="">
                <div id="card-type-1" role="tabpanel" aria-labelledby="card-type-item-1">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm rounded-ss-none dark:border-white/10 border-gray-200">
                    How hotel deals can help you live a better life. How celebrity cruises aren't as bad as you think. How cultural solutions can help you predict the future. How to cheat at dog friendly hotels and get away with it. 17 problems with summer activities. How to cheat at travel agents and get away with it. How not knowing family trip ideas makes you a rookie. What everyone is saying about daily deals. How twitter can teach you about carnival cruises. How to start using cultural solutions.
                  </p>
                </div>
                <div id="card-type-2" className="hidden" role="tabpanel" aria-labelledby="card-type-item-2">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm rounded-ss-none dark:border-white/10 border-gray-200">
                    How travel coupons make you a better lover. Why cultural solutions are the new black. Why mom was right about travel insurances. How family trip ideas can help you predict the future. How carnival cruises make you a better lover. Why you'll never succeed at daily deals. 11 ways cheapest flights can find you the love of your life. The complete beginner's guide to mission trips. If you read one article about cultural notes read this one. Why you shouldn't eat vacation package in bed.
                  </p>
                </div>
                <div id="card-type-3" className="hidden" role="tabpanel" aria-labelledby="card-type-item-3">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm rounded-ss-none dark:border-white/10 border-gray-200">
                    Unbelievable healthy snack success stories. 12 facts about safe food handling tips that will impress your friends. Restaurant weeks by the numbers. Will mexican food ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks can make you sick. The complete beginner's guide to cooking healthy food. Unbelievable food stamp success stories. How whole foods markets are making the world a better place. 16 things that won't happen in dish reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xxl:!col-span-4">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Segment</h5>
            </div>
            <div className="box-body">
              <div className="sm:flex bg-gray-100 hover:bg-gray-200 rounded-sm transition p-1 dark:bg-black/20 dark:hover:bg-black/20">
                <nav className="sm:flex sm:space-x-2 sm:rtl:space-x-reverse">
                  <Link className="w-full sm:w-auto hs-tab-active:bg-white hs-tab-active:text-gray-700 dark:hs-tab-active:bg-light dark:hs-tab-active:text-defaulttextcolor/70 py-2 px-3 inline-flex items-center gap-2 bg-transparent text-sm text-defaulttextcolor hover:text-gray-700 font-medium rounded-sm hover:hover:text-primary dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white active" href="#!" id="segment-item-1" data-hs-tab="#segment-1" aria-controls="segment-1">
                    Active
                  </Link>
                  <Link className="w-full sm:w-auto hs-tab-active:bg-white hs-tab-active:text-gray-700 dark:hs-tab-active:bg-light dark:hs-tab-active:text-defaulttextcolor/70 py-2 px-3 inline-flex items-center gap-2 bg-transparent text-sm text-defaulttextcolor hover:text-gray-700 font-medium rounded-sm hover:hover:text-primary dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white" href="#!" id="segment-item-2" data-hs-tab="#segment-2" aria-controls="segment-2">
                    Link
                  </Link>
                  <Link className="w-full sm:w-auto hs-tab-active:bg-white hs-tab-active:text-gray-700 dark:hs-tab-active:bg-light dark:hs-tab-active:text-defaulttextcolor/70 py-2 px-3 inline-flex items-center gap-2 bg-transparent text-sm text-defaulttextcolor hover:text-gray-700 font-medium rounded-sm hover:hover:text-primary dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white" href="#!" id="segment-item-3" data-hs-tab="#segment-3" aria-controls="segment-3">
                    Link
                  </Link>
                  <Link className="w-full sm:w-auto hs-tab-active:bg-white hs-tab-active:text-gray-700 dark:hs-tab-active:bg-light dark:hs-tab-active:text-defaulttextcolor/70 py-2 px-3 inline-flex items-center gap-2 bg-transparent text-sm text-defaulttextcolor font-medium rounded-sm pointer-events-none dark:text-white/50 dark:hover:text-white" href="#!" id="segment-item-4" data-hs-tab="#segment-4">
                    Disabled
                  </Link>
                </nav>
              </div>

              <div className="mt-3">
                <div id="segment-1" role="tabpanel" aria-labelledby="segment-item-1">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    How hotel deals can help you live a better life. How celebrity cruises aren't as bad as you think. How cultural solutions can help you predict the future. How to cheat at dog friendly hotels and get away with it. 17 problems with summer activities. How to cheat at travel agents and get away with it. How not knowing family trip ideas makes you a rookie. What everyone is saying about daily deals. How twitter can teach you about carnival cruises. How to start using cultural solutions.
                  </p>
                </div>
                <div id="segment-2" className="hidden" role="tabpanel" aria-labelledby="segment-item-2">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    How travel coupons make you a better lover. Why cultural solutions are the new black. Why mom was right about travel insurances. How family trip ideas can help you predict the future. How carnival cruises make you a better lover. Why you'll never succeed at daily deals. 11 ways cheapest flights can find you the love of your life. The complete beginner's guide to mission trips. If you read one article about cultural notes read this one. Why you shouldn't eat vacation package in bed.
                  </p>
                </div>
                <div id="segment-3" className="hidden" role="tabpanel" aria-labelledby="segment-item-3">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    Unbelievable healthy snack success stories. 12 facts about safe food handling tips that will impress your friends. Restaurant weeks by the numbers. Will mexican food ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks can make you sick. The complete beginner's guide to cooking healthy food. Unbelievable food stamp success stories. How whole foods markets are making the world a better place. 16 things that won't happen in dish reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xxl:!col-span-4">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Bar with underline</h5>
            </div>
            <div className="box-body">
              <nav className="relative z-0 sm:flex border rounded-sm divide-y sm:divide-y-0 sm:divide-x rtl:divide-x-reverse divide-gray-200 overflow-hidden dark:border-white/10 dark:divide-white/10 ">
                <Link className="justify-center items-center sm:flex inline-flex w-full sm:w-auto hs-tab-active:border-b-2 hs-tab-active:!border-b-primary hs-tab-active:text-gray-900 dark:hs-tab-active:text-defaulttextcolor/70 group relative min-w-0 flex-1 bg-white dark:bg-black py-4 px-4 text-defaulttextcolor hover:text-gray-700 text-sm font-medium text-center overflow-hidden dark:text-[#8c9097] dark:text-white/50 hover:bg-gray-50 focus:z-10 dark:bg-bgdark dark:hover:bg-black/20 dark:hover:text-white active" href="#!" id="bar-item-1" data-hs-tab="#bar-1" aria-controls="bar-1">
                  Active
                </Link>

                <Link className="justify-center items-center sm:flex inline-flex w-full sm:w-auto hs-tab-active:border-b-2 hs-tab-active:!border-b-primary hs-tab-active:text-gray-900 dark:hs-tab-active:text-defaulttextcolor/70 group relative min-w-0 flex-1 bg-white dark:bg-black py-4 px-4 text-defaulttextcolor hover:text-gray-700 text-sm font-medium text-center overflow-hidden dark:text-[#8c9097] dark:text-white/50 hover:bg-gray-50 focus:z-10 dark:bg-bgdark dark:hover:bg-black/20 dark:hover:text-white" href="#!" id="bar-item-2" data-hs-tab="#bar-2" aria-controls="bar-2">
                  Link
                </Link>

                <Link className="justify-center items-center sm:flex inline-flex w-full sm:w-auto hs-tab-active:border-b-2 hs-tab-active:!border-b-primary hs-tab-active:text-gray-900 dark:hs-tab-active:text-defaulttextcolor/70 group relative min-w-0 flex-1 bg-white dark:bg-black py-4 px-4 text-defaulttextcolor hover:text-gray-700 text-sm font-medium text-center overflow-hidden dark:text-[#8c9097] dark:text-white/50 hover:bg-gray-50 focus:z-10 dark:bg-bgdark dark:hover:bg-black/20 dark:hover:text-white" href="#!" id="bar-item-3" data-hs-tab="#bar-3" aria-controls="bar-3">
                  Link
                </Link>

                <Link className="justify-center items-center sm:flex inline-flex w-full sm:w-auto hs-tab-active:border-b-2 hs-tab-active:!border-b-primary hs-tab-active:text-gray-900 dark:hs-tab-active:text-defaulttextcolor/70 group relative min-w-0 flex-1 bg-white dark:bg-black py-4 px-4 text-gray-400 text-sm font-medium text-center pointer-events-none overflow-hidden focus:z-10 dark:bg-bgdark dark:text-white/50" href="#!" id="bar-item-4" data-hs-tab="#bar-4">
                  Disabled
                </Link>
              </nav>

              <div className="mt-3">
                <div id="bar-1" role="tabpanel" aria-labelledby="bar-item-1">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    How hotel deals can help you live a better life. How celebrity cruises aren't as bad as you think. How cultural solutions can help you predict the future. How to cheat at dog friendly hotels and get away with it. 17 problems with summer activities. How to cheat at travel agents and get away with it. How not knowing family trip ideas makes you a rookie. What everyone is saying about daily deals. How twitter can teach you about carnival cruises. How to start using cultural solutions.
                  </p>
                </div>
                <div id="bar-2" className="hidden" role="tabpanel" aria-labelledby="bar-item-2">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    How travel coupons make you a better lover. Why cultural solutions are the new black. Why mom was right about travel insurances. How family trip ideas can help you predict the future. How carnival cruises make you a better lover. Why you'll never succeed at daily deals. 11 ways cheapest flights can find you the love of your life. The complete beginner's guide to mission trips. If you read one article about cultural notes read this one. Why you shouldn't eat vacation package in bed.
                  </p>
                </div>
                <div id="bar-3" className="hidden" role="tabpanel" aria-labelledby="bar-item-3">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    Unbelievable healthy snack success stories. 12 facts about safe food handling tips that will impress your friends. Restaurant weeks by the numbers. Will mexican food ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks can make you sick. The complete beginner's guide to cooking healthy food. Unbelievable food stamp success stories. How whole foods markets are making the world a better place. 16 things that won't happen in dish reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xxl:!col-span-4">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Tabs Pills On Gray Color</h5>
            </div>
            <div className="box-body">
              <nav className="flex space-x-2 rtl:space-x-reverse" aria-label="Tabs">
                <button type="button" className="hs-tab-active:bg-gray-200 hs-tab-active:text-gray-800 hs-tab-active:hover:text-gray-800 dark:hs-tab-active:bg-light dark:hs-tab-active:text-white dark:hs-tab-active:hover:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-defaulttextcolor rounded-sm hover:text-primary dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white active" id="pills-on-gray-color-item-1" data-hs-tab="#pills-on-gray-color-1" aria-controls="pills-on-gray-color-1">
                  Tab 1
                </button>
                <button type="button" className="hs-tab-active:bg-gray-200 hs-tab-active:text-gray-800 hs-tab-active:hover:text-gray-800 dark:hs-tab-active:bg-light dark:hs-tab-active:text-white dark:hs-tab-active:hover:text-whitepy-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-defaulttextcolor rounded-sm hover:text-primary dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white" id="pills-on-gray-color-item-2" data-hs-tab="#pills-on-gray-color-2" aria-controls="pills-on-gray-color-2">
                  Tab 2
                </button>
                <button type="button" className="hs-tab-active:bg-gray-200 hs-tab-active:text-gray-800 hs-tab-active:hover:text-gray-800 dark:hs-tab-active:bg-light dark:hs-tab-active:text-white dark:hs-tab-active:hover:text-whitepy-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-defaulttextcolor rounded-sm hover:text-primary dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white" id="pills-on-gray-color-item-3" data-hs-tab="#pills-on-gray-color-3" aria-controls="pills-on-gray-color-3">
                  Tab 3
                </button>
              </nav>

              <div className="mt-3">
                <div id="pills-on-gray-color-1" role="tabpanel" aria-labelledby="pills-on-gray-color-item-1">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    How hotel deals can help you live a better life. How celebrity cruises aren't as bad as you think. How cultural solutions can help you predict the future. How to cheat at dog friendly hotels and get away with it. 17 problems with summer activities. How to cheat at travel agents and get away with it. How not knowing family trip ideas makes you a rookie. What everyone is saying about daily deals. How twitter can teach you about carnival cruises. How to start using cultural solutions.
                  </p>
                </div>
                <div id="pills-on-gray-color-2" className="hidden" role="tabpanel" aria-labelledby="pills-on-gray-color-item-2">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    How travel coupons make you a better lover. Why cultural solutions are the new black. Why mom was right about travel insurances. How family trip ideas can help you predict the future. How carnival cruises make you a better lover. Why you'll never succeed at daily deals. 11 ways cheapest flights can find you the love of your life. The complete beginner's guide to mission trips. If you read one article about cultural notes read this one. Why you shouldn't eat vacation package in bed.
                  </p>
                </div>
                <div id="pills-on-gray-color-3" className="hidden" role="tabpanel" aria-labelledby="pills-on-gray-color-item-3">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    Unbelievable healthy snack success stories. 12 facts about safe food handling tips that will impress your friends. Restaurant weeks by the numbers. Will mexican food ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks can make you sick. The complete beginner's guide to cooking healthy food. Unbelievable food stamp success stories. How whole foods markets are making the world a better place. 16 things that won't happen in dish reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xxl:!col-span-4">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Tabs Pills On Brand Color</h5>
            </div>
            <div className="box-body">
              <nav className="flex space-x-2 rtl:space-x-reverse" aria-label="Tabs">
                <button type="button" className="hs-tab-active:bg-primary hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-defaulttextcolor rounded-sm hover:text-primary  dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white active" id="pills-with-brand-color-item-1" data-hs-tab="#pills-with-brand-color-1" aria-controls="pills-with-brand-color-1">
                  Tab 1
                </button>
                <button type="button" className="hs-tab-active:bg-primary hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-defaulttextcolor rounded-sm hover:text-primary  dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white" id="pills-with-brand-color-item-2" data-hs-tab="#pills-with-brand-color-2" aria-controls="pills-with-brand-color-2">
                  Tab 2
                </button>
                <button type="button" className="hs-tab-active:bg-primary hs-tab-active:text-white py-3 px-4 inline-flex items-center gap-2 bg-transparent text-sm font-medium text-center text-defaulttextcolor rounded-sm hover:text-primary  dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white" id="pills-with-brand-color-item-3" data-hs-tab="#pills-with-brand-color-3" aria-controls="pills-with-brand-color-3">
                  Tab 3
                </button>
              </nav>

              <div className="mt-3">
                <div id="pills-with-brand-color-1" role="tabpanel" aria-labelledby="pills-with-brand-color-item-1">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    How hotel deals can help you live a better life. How celebrity cruises aren't as bad as you think. How cultural solutions can help you predict the future. How to cheat at dog friendly hotels and get away with it. 17 problems with summer activities. How to cheat at travel agents and get away with it. How not knowing family trip ideas makes you a rookie. What everyone is saying about daily deals. How twitter can teach you about carnival cruises. How to start using cultural solutions.
                  </p>
                </div>
                <div id="pills-with-brand-color-2" className="hidden" role="tabpanel" aria-labelledby="pills-with-brand-color-item-2">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    How travel coupons make you a better lover. Why cultural solutions are the new black. Why mom was right about travel insurances. How family trip ideas can help you predict the future. How carnival cruises make you a better lover. Why you'll never succeed at daily deals. 11 ways cheapest flights can find you the love of your life. The complete beginner's guide to mission trips. If you read one article about cultural notes read this one. Why you shouldn't eat vacation package in bed.
                  </p>
                </div>
                <div id="pills-with-brand-color-3" className="hidden" role="tabpanel" aria-labelledby="pills-with-brand-color-item-3">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    Unbelievable healthy snack success stories. 12 facts about safe food handling tips that will impress your friends. Restaurant weeks by the numbers. Will mexican food ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks can make you sick. The complete beginner's guide to cooking healthy food. Unbelievable food stamp success stories. How whole foods markets are making the world a better place. 16 things that won't happen in dish reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xxl:!col-span-4">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Tabs Fill And Justify </h5>
            </div>
            <div className="box-body">
              <nav className="sm:flex sm:space-x-2 rtl:space-x-reverse" aria-label="Tabs">
                <button type="button" className="w-full hs-tab-active:bg-primary hs-tab-active:text-white flex-auto py-3 px-4 inline-flex justify-center items-center gap-2 bg-transparent text-center text-sm font-medium text-defaulttextcolor rounded-sm hover:text-primary dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white active" id="fill-and-justify-item-1" data-hs-tab="#fill-and-justify-1" aria-controls="fill-and-justify-1">
                  Tab 1
                </button>
                <button type="button" className="w-full hs-tab-active:bg-primary hs-tab-active:text-white flex-auto py-3 px-4 inline-flex justify-center items-center gap-2 bg-transparent text-center text-sm font-medium text-defaulttextcolor rounded-sm hover:text-primary dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white" id="fill-and-justify-item-2" data-hs-tab="#fill-and-justify-2" aria-controls="fill-and-justify-2">
                  This is the longest link I've seen
                </button>
                <button type="button" className="w-full hs-tab-active:bg-primary hs-tab-active:text-white flex-auto py-3 px-4 inline-flex justify-center items-center gap-2 bg-transparent text-center text-sm font-medium text-defaulttextcolor rounded-sm hover:text-primary dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white" id="fill-and-justify-item-3" data-hs-tab="#fill-and-justify-3" aria-controls="fill-and-justify-3">
                  Tab 3
                </button>
              </nav>

              <div className="mt-3">
                <div id="fill-and-justify-1" role="tabpanel" aria-labelledby="fill-and-justify-item-1">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    How hotel deals can help you live a better life. How celebrity cruises aren't as bad as you think. How cultural solutions can help you predict the future. How to cheat at dog friendly hotels and get away with it. 17 problems with summer activities. How to cheat at travel agents and get away with it. How not knowing family trip ideas makes you a rookie. What everyone is saying about daily deals. How twitter can teach you about carnival cruises. How to start using cultural solutions.
                  </p>
                </div>
                <div id="fill-and-justify-2" className="hidden" role="tabpanel" aria-labelledby="fill-and-justify-item-2">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    How travel coupons make you a better lover. Why cultural solutions are the new black. Why mom was right about travel insurances. How family trip ideas can help you predict the future. How carnival cruises make you a better lover. Why you'll never succeed at daily deals. 11 ways cheapest flights can find you the love of your life. The complete beginner's guide to mission trips. If you read one article about cultural notes read this one. Why you shouldn't eat vacation package in bed.
                  </p>
                </div>
                <div id="fill-and-justify-3" className="hidden" role="tabpanel" aria-labelledby="fill-and-justify-item-3">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    Unbelievable healthy snack success stories. 12 facts about safe food handling tips that will impress your friends. Restaurant weeks by the numbers. Will mexican food ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks can make you sick. The complete beginner's guide to cooking healthy food. Unbelievable food stamp success stories. How whole foods markets are making the world a better place. 16 things that won't happen in dish reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xxl:!col-span-4">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Tabs With Equal-width elements </h5>
            </div>
            <div className="box-body">
              <nav className="flex space-x-2 rtl:space-x-reverse" aria-label="Tabs">
                <button type="button" className="hs-tab-active:bg-primary hs-tab-active:text-white basis-0 grow py-3 px-4 inline-flex justify-center items-center gap-2 bg-transparent text-center text-sm font-medium text-defaulttextcolor rounded-sm hover:text-primary dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white active" id="equal-width-elements-item-1" data-hs-tab="#equal-width-elements-1" aria-controls="equal-width-elements-1">
                  Tab 1
                </button>
                <button type="button" className="hs-tab-active:bg-primary hs-tab-active:text-white basis-0 grow py-3 px-4 inline-flex justify-center items-center gap-2 bg-transparent text-center text-sm font-medium text-defaulttextcolor rounded-sm hover:text-primary dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white" id="equal-width-elements-item-2" data-hs-tab="#equal-width-elements-2" aria-controls="equal-width-elements-2">
                  This is the longest link I've seen
                </button>
                <button type="button" className="hs-tab-active:bg-primary hs-tab-active:text-white basis-0 grow py-3 px-4 inline-flex justify-center items-center gap-2 bg-transparent text-center text-sm font-medium text-defaulttextcolor rounded-sm hover:text-primary dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white" id="equal-width-elements-item-3" data-hs-tab="#equal-width-elements-3" aria-controls="equal-width-elements-3">
                  Tab 3
                </button>
              </nav>

              <div className="mt-3">
                <div id="equal-width-elements-1" role="tabpanel" aria-labelledby="equal-width-elements-item-1">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    How hotel deals can help you live a better life. How celebrity cruises aren't as bad as you think. How cultural solutions can help you predict the future. How to cheat at dog friendly hotels and get away with it. 17 problems with summer activities. How to cheat at travel agents and get away with it. How not knowing family trip ideas makes you a rookie. What everyone is saying about daily deals. How twitter can teach you about carnival cruises. How to start using cultural solutions.
                  </p>
                </div>
                <div id="equal-width-elements-2" className="hidden" role="tabpanel" aria-labelledby="equal-width-elements-item-2">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    How travel coupons make you a better lover. Why cultural solutions are the new black. Why mom was right about travel insurances. How family trip ideas can help you predict the future. How carnival cruises make you a better lover. Why you'll never succeed at daily deals. 11 ways cheapest flights can find you the love of your life. The complete beginner's guide to mission trips. If you read one article about cultural notes read this one. Why you shouldn't eat vacation package in bed.
                  </p>
                </div>
                <div id="equal-width-elements-3" className="hidden" role="tabpanel" aria-labelledby="equal-width-elements-item-3">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    Unbelievable healthy snack success stories. 12 facts about safe food handling tips that will impress your friends. Restaurant weeks by the numbers. Will mexican food ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks can make you sick. The complete beginner's guide to cooking healthy food. Unbelievable food stamp success stories. How whole foods markets are making the world a better place. 16 things that won't happen in dish reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xxl:!col-span-4">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Tabs With Horizontal Center Alignment</h5>
            </div>
            <div className="box-body">
              <div className="border-b border-gray-200 dark:border-white/10">
                <nav className="-mb-0.5 flex justify-center space-x-6 rtl:space-x-reverse" aria-label="Tabs">
                  <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor hover:text-primary dark:text-[#8c9097] dark:text-white/50 active" id="horizontal-alignment-item-1" data-hs-tab="#horizontal-alignment-1" aria-controls="horizontal-alignment-1">
                    Tab 1
                  </button>
                  <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor hover:text-primary dark:text-[#8c9097] dark:text-white/50" id="horizontal-alignment-item-2" data-hs-tab="#horizontal-alignment-2" aria-controls="horizontal-alignment-2">
                    Tab 2
                  </button>
                  <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor hover:text-primary dark:text-[#8c9097] dark:text-white/50" id="horizontal-alignment-item-3" data-hs-tab="#horizontal-alignment-3" aria-controls="horizontal-alignment-3">
                    Tab 3
                  </button>
                </nav>
              </div>

              <div className="mt-3">
                <div id="horizontal-alignment-1" role="tabpanel" aria-labelledby="horizontal-alignment-item-1">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    How hotel deals can help you live a better life. How celebrity cruises aren't as bad as you think. How cultural solutions can help you predict the future. How to cheat at dog friendly hotels and get away with it. 17 problems with summer activities. How to cheat at travel agents and get away with it. How not knowing family trip ideas makes you a rookie. What everyone is saying about daily deals. How twitter can teach you about carnival cruises. How to start using cultural solutions.
                  </p>
                </div>
                <div id="horizontal-alignment-2" className="hidden" role="tabpanel" aria-labelledby="horizontal-alignment-item-2">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    How travel coupons make you a better lover. Why cultural solutions are the new black. Why mom was right about travel insurances. How family trip ideas can help you predict the future. How carnival cruises make you a better lover. Why you'll never succeed at daily deals. 11 ways cheapest flights can find you the love of your life. The complete beginner's guide to mission trips. If you read one article about cultural notes read this one. Why you shouldn't eat vacation package in bed.
                  </p>
                </div>
                <div id="horizontal-alignment-3" className="hidden" role="tabpanel" aria-labelledby="horizontal-alignment-item-3">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    Unbelievable healthy snack success stories. 12 facts about safe food handling tips that will impress your friends. Restaurant weeks by the numbers. Will mexican food ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks can make you sick. The complete beginner's guide to cooking healthy food. Unbelievable food stamp success stories. How whole foods markets are making the world a better place. 16 things that won't happen in dish reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 xxl:!col-span-4">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Tabs With Horizontal Right Alignment</h5>
            </div>
            <div className="box-body">
              <div className="border-b border-gray-200 dark:border-white/10">
                <nav className="-mb-0.5 flex justify-end space-x-6 rtl:space-x-reverse" aria-label="Tabs">
                  <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor hover:text-primary dark:text-[#8c9097] dark:text-white/50 active" id="horizontal-right-alignment-item-1" data-hs-tab="#horizontal-right-alignment-1" aria-controls="horizontal-right-alignment-1">
                    Tab 1
                  </button>
                  <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor hover:text-primary dark:text-[#8c9097] dark:text-white/50" id="horizontal-right-alignment-item-2" data-hs-tab="#horizontal-right-alignment-2" aria-controls="horizontal-right-alignment-2">
                    Tab 2
                  </button>
                  <button type="button" className="hs-tab-active:font-semibold hs-tab-active:border-primary hs-tab-active:text-primary py-4 px-1 inline-flex items-center gap-2 border-b-[3px] border-transparent text-sm whitespace-nowrap text-defaulttextcolor hover:text-primary dark:text-[#8c9097] dark:text-white/50" id="horizontal-right-alignment-item-3" data-hs-tab="#horizontal-right-alignment-3" aria-controls="horizontal-right-alignment-3">
                    Tab 3
                  </button>
                </nav>
              </div>

              <div className="mt-3">
                <div id="horizontal-right-alignment-1" role="tabpanel" aria-labelledby="horizontal-right-alignment-item-1">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    How hotel deals can help you live a better life. How celebrity cruises aren't as bad as you think. How cultural solutions can help you predict the future. How to cheat at dog friendly hotels and get away with it. 17 problems with summer activities. How to cheat at travel agents and get away with it. How not knowing family trip ideas makes you a rookie. What everyone is saying about daily deals. How twitter can teach you about carnival cruises. How to start using cultural solutions.
                  </p>
                </div>
                <div id="horizontal-right-alignment-2" className="hidden" role="tabpanel" aria-labelledby="horizontal-right-alignment-item-2">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    How travel coupons make you a better lover. Why cultural solutions are the new black. Why mom was right about travel insurances. How family trip ideas can help you predict the future. How carnival cruises make you a better lover. Why you'll never succeed at daily deals. 11 ways cheapest flights can find you the love of your life. The complete beginner's guide to mission trips. If you read one article about cultural notes read this one. Why you shouldn't eat vacation package in bed.
                  </p>
                </div>
                <div id="horizontal-right-alignment-3" className="hidden" role="tabpanel" aria-labelledby="horizontal-right-alignment-item-3">
                  <p className="text-gray-500 dark:text-[#8c9097] dark:text-white/50 p-5 border rounded-sm dark:border-white/10 border-gray-200">
                    Unbelievable healthy snack success stories. 12 facts about safe food handling tips that will impress your friends. Restaurant weeks by the numbers. Will mexican food ever rule the world? The 10 best thai restaurant youtube videos. How restaurant weeks can make you sick. The complete beginner's guide to cooking healthy food. Unbelievable food stamp success stories. How whole foods markets are making the world a better place. 16 things that won't happen in dish reviews.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
Navstabs.layout = "Contentlayout"

export default Navstabs