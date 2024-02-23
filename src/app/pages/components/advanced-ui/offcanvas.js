import { offcanvas1, offcanvas2, offcanvas3, offcanvas5, offcanvas6 } from '@/shared/data/prism/advance-uiprism'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'
import Showcode from '@/shared/layout-components/showcode/showcode'

const Offcanvas = () => {
    return (
        <Fragment>
            <Seo title={"offcanvas"} />
            <Pageheader currentpage="offcanvas" activepage=" Advanced Ui" mainpage="offcanvas" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-4 col-span-12">
                    <Showcode className="Live Demo" title="Live Demo" code={offcanvas1} customCardClass="custom-box">
                        <button type="button" className="ti-btn ti-btn-primary-full" data-hs-overlay="#hs-overlay-example">
                            Button
                        </button>
                        <div id="hs-overlay-example" className="hs-overlay hidden ti-offcanvas ti-offcanvas-left !z-[105]" tabIndex="-1">
                            <div className="ti-offcanvas-header">
                                <h6 className="ti-offcanvas-title">
                                    Notifications
                                </h6>
                                <button type="button" className="ti-btn flex-shrink-0 p-0 transition-none text-gray-500 hover:text-gray-700 focus:ring-gray-400 focus:ring-offset-white dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white/80 dark:focus:ring-white/10 dark:focus:ring-offset-white/10" data-hs-overlay="#hs-overlay-example">
                                    <span className="sr-only">Close modal</span>
                                    <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="ti-offcanvas-body !h-[90%] !p-0">
                                <div>
                                    <ul className="list-group list-group-flush mb-0">
                                        <li className="list-group-item !border-t-0">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-primary !rounded-full">
                                                        NW
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">New Website Created<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">20 Nov 2022</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>30 mins ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-danger !rounded-full">
                                                        CH
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Prepare for the new project<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">3 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>2 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info !rounded-full">
                                                        S
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Decide the live discussion<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">17 Feb 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md !rounded-full">
                                                        <img src="../../../assets/images/faces/12.jpg" alt="" className="!rounded-full" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">29 Dec 2022</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-success !rounded-full">
                                                        RC
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Prepare for presentation<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">31 Dec 2022</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md !rounded-full">
                                                        <img src="../../../assets/images/faces/1.jpg" alt="" className="!rounded-full" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Brenda New product launching<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">1 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>7 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-secondary !rounded-full">
                                                        M
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Medeleine Hey! there i'm available<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">5 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info !rounded-full">
                                                        OL
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Olivia New schedule release<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">6 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>45 mins ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-warning !rounded-full">
                                                        A
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">7 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>28 mins ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md !rounded-full">
                                                        <img src="../../../assets/images/faces/6.jpg" alt="" className="!rounded-full" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">10 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>14 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-danger !rounded-full">
                                                        CH
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Prepare for the new project<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">3 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>2 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info !rounded-full">
                                                        S
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Decide the live discussion<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">17 Feb 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md !rounded-full">
                                                        <img src="../../../assets/images/faces/14.jpg" alt="" className="!rounded-full" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">29 Dec 2022</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-success !rounded-full">
                                                        RC
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Prepare for presentation<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">31 Dec 2022</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Body Scrolling" code={offcanvas2} customCardClass="custom-box">
                        <button type="button" className="m-1 ms-0 ti-btn ti-btn-primary-full" data-hs-overlay="#hs-overlay-body-scrolling">
                            Enable body scrolling
                        </button>
                        <div id="hs-overlay-body-scrolling" className="hs-overlay ti-offcanvas ti-offcanvas-left hidden [--body-scroll:true] [--overlay-backdrop:false] !z-[105]" tabIndex="-1">
                            <div className="ti-offcanvas-header">
                                <h6 className="ti-offcanvas-title">
                                    Notifications
                                </h6>
                                <button type="button" className="ti-btn flex-shrink-0 p-0 transition-none text-gray-500 hover:text-gray-700 focus:ring-gray-400 focus:ring-offset-white dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white/80 dark:focus:ring-white/10 dark:focus:ring-offset-white/10" data-hs-overlay="#hs-overlay-body-scrolling">
                                    <span className="sr-only">Close modal</span>
                                    <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="ti-offcanvas-body !h-[90%] !p-0">
                                <div>
                                    <ul className="list-group list-group-flush mb-0">
                                        <li className="list-group-item !border-t-0">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-primary !rounded-full">
                                                        NW
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">New Website Created<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">20 Nov 2022</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>30 mins ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-danger !rounded-full">
                                                        CH
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Prepare for the new project<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">3 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>2 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info !rounded-full">
                                                        S
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Decide the live discussion<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">17 Feb 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md !rounded-full">
                                                        <img src="../../../assets/images/faces/12.jpg" alt="" className="!rounded-full" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">29 Dec 2022</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-success !rounded-full">
                                                        RC
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Prepare for presentation<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">31 Dec 2022</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md !rounded-full">
                                                        <img src="../../../assets/images/faces/1.jpg" alt="" className="!rounded-full" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Brenda New product launching<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">1 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>7 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-secondary !rounded-full">
                                                        M
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Medeleine Hey! there i'm available<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">5 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info !rounded-full">
                                                        OL
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Olivia New schedule release<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">6 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>45 mins ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-warning !rounded-full">
                                                        A
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">7 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>28 mins ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md !rounded-full">
                                                        <img src="../../../assets/images/faces/6.jpg" alt="" className="!rounded-full" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">10 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>14 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-danger !rounded-full">
                                                        CH
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Prepare for the new project<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">3 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>2 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info !rounded-full">
                                                        S
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Decide the live discussion<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">17 Feb 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md !rounded-full">
                                                        <img src="../../../assets/images/faces/14.jpg" alt="" className="!rounded-full" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">29 Dec 2022</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-success !rounded-full">
                                                        RC
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Prepare for presentation<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">31 Dec 2022</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Enable Backdrop" code={offcanvas3} customCardClass="custom-box">
                        <button type="button" className="m-1 ms-0 ti-btn ti-btn-primary-full" data-hs-overlay="#hs-overlay-backdrop-default">
                            Enable backdrop
                        </button>

                        <div id="hs-overlay-backdrop-default" className="hs-overlay ti-offcanvas ti-offcanvas-left hidden !z-[105]" tabIndex="-1">
                            <div className="ti-offcanvas-header">
                                <h6 className="ti-offcanvas-title">
                                    Notifications
                                </h6>
                                <button type="button" className="ti-btn flex-shrink-0 p-0 transition-none text-gray-500 hover:text-gray-700 focus:ring-gray-400 focus:ring-offset-white dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white/80 dark:focus:ring-white/10 dark:focus:ring-offset-white/10" data-hs-overlay="#hs-overlay-backdrop-default">
                                    <span className="sr-only">Close modal</span>
                                    <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="ti-offcanvas-body !h-[90%] !p-0">
                                <div>
                                    <ul className="list-group list-group-flush mb-0">
                                        <li className="list-group-item !border-t-0">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-primary !rounded-full">
                                                        NW
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">New Website Created<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">20 Nov 2022</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>30 mins ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-danger !rounded-full">
                                                        CH
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Prepare for the new project<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">3 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>2 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info !rounded-full">
                                                        S
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Decide the live discussion<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">17 Feb 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md !rounded-full">
                                                        <img src="../../../assets/images/faces/12.jpg" alt="" className="!rounded-full" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">29 Dec 2022</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-success !rounded-full">
                                                        RC
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Prepare for presentation<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">31 Dec 2022</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md !rounded-full">
                                                        <img src="../../../assets/images/faces/1.jpg" alt="" className="!rounded-full" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Brenda New product launching<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">1 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>7 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-secondary !rounded-full">
                                                        M
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Medeleine Hey! there i'm available<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">5 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info !rounded-full">
                                                        OL
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Olivia New schedule release<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">6 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>45 mins ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-warning !rounded-full">
                                                        A
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">7 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>28 mins ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md !rounded-full">
                                                        <img src="../../../assets/images/faces/6.jpg" alt="" className="!rounded-full" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">10 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>14 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-danger !rounded-full">
                                                        CH
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Prepare for the new project<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">3 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>2 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info !rounded-full">
                                                        S
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Decide the live discussion<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">17 Feb 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md !rounded-full">
                                                        <img src="../../../assets/images/faces/14.jpg" alt="" className="!rounded-full" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">29 Dec 2022</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-success !rounded-full">
                                                        RC
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Prepare for presentation<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">31 Dec 2022</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title=" Enable Body scrolling and backdrop" code={offcanvas5} customCardClass="custom-box">
                        <button type="button" className="m-1 ms-0 ti-btn ti-btn-primary-full" data-hs-overlay="#hs-overlay-backdrop-with-scrolling">
                            Enable both scrolling &amp; backdrop
                        </button>

                        <div id="hs-overlay-backdrop-with-scrolling" className="hs-overlay ti-offcanvas ti-offcanvas-left hidden !z-[105] [--body-scroll:true]" tabIndex="-1" data-hs-overlay-scroll="true">
                            <div className="ti-offcanvas-header">
                                <h6 className="ti-offcanvas-title">
                                    Notifications
                                </h6>
                                <button type="button" className="ti-btn flex-shrink-0 p-0 transition-none text-gray-500 hover:text-gray-700 focus:ring-gray-400 focus:ring-offset-white dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white/80 dark:focus:ring-white/10 dark:focus:ring-offset-white/10" data-hs-overlay="#hs-overlay-backdrop-with-scrolling">
                                    <span className="sr-only">Close modal</span>
                                    <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="ti-offcanvas-body !h-[90%] !p-0">
                                <div>
                                    <ul className="list-group list-group-flush mb-0">
                                        <li className="list-group-item !border-t-0">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-primary !rounded-full">
                                                        NW
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">New Website Created<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">20 Nov 2022</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>30 mins ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-danger !rounded-full">
                                                        CH
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Prepare for the new project<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">3 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>2 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info !rounded-full">
                                                        S
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Decide the live discussion<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">17 Feb 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md !rounded-full">
                                                        <img src="../../../assets/images/faces/12.jpg" alt="" className="!rounded-full" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">29 Dec 2022</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-success !rounded-full">
                                                        RC
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Prepare for presentation<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">31 Dec 2022</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md !rounded-full">
                                                        <img src="../../../assets/images/faces/1.jpg" alt="" className="!rounded-full" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Brenda New product launching<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">1 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>7 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-secondary !rounded-full">
                                                        M
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Medeleine Hey! there i'm available<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">5 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info !rounded-full">
                                                        OL
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Olivia New schedule release<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">6 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>45 mins ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-warning !rounded-full">
                                                        A
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">7 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>28 mins ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md !rounded-full">
                                                        <img src="../../../assets/images/faces/6.jpg" alt="" className="!rounded-full" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">10 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>14 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-danger !rounded-full">
                                                        CH
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Prepare for the new project<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">3 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>2 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info !rounded-full">
                                                        S
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Decide the live discussion<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">17 Feb 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md !rounded-full">
                                                        <img src="../../../assets/images/faces/14.jpg" alt="" className="!rounded-full" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">29 Dec 2022</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-success !rounded-full">
                                                        RC
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Prepare for presentation<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">31 Dec 2022</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Placements" code={offcanvas6} customCardClass="custom-box">
                        <button type="button" className="ti-btn ti-btn-primary-full me-2" data-hs-overlay="#hs-overlay-top">
                            Toggle top offcanvas
                        </button>


                        <div id="hs-overlay-top" className="hs-overlay hidden ti-offcanvas ti-offcanvas-top !z-[105]" tabIndex="-1">
                            <div className="ti-offcanvas-header">
                                <h5 className="ti-offcanvas-title">
                                    Offcanvas top
                                </h5>
                                <button type="button" className="ti-btn flex-shrink-0 p-0 transition-none text-gray-500 hover:text-gray-700 focus:ring-gray-400 focus:ring-offset-white dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white/80 dark:focus:ring-white/10 dark:focus:ring-offset-white/10" data-hs-overlay="#hs-overlay-top">
                                    <span className="sr-only">Close modal</span>
                                    <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                                    </svg>
                                </button>
                            </div>
                            <div className="ti-offcanvas-body !h-[90%]">
                                <p className="text-gray-800 dark:text-[#8c9097] dark:text-white/50">
                                    ...
                                </p>
                            </div>
                        </div>
                        <button type="button" className="ti-btn ti-btn-primary-full me-2" data-hs-overlay="#hs-overlay-right">
                            Toggle right offcanvas
                        </button>
                        <div id="hs-overlay-right" className="hs-overlay hidden ti-offcanvas ti-offcanvas-right" tabIndex="-1">
                            <div className="ti-offcanvas-header">
                                <h5 className="ti-offcanvas-title">
                                    Notifications
                                </h5>
                                <button type="button" className="ti-btn flex-shrink-0 p-0 transition-none text-gray-500 hover:text-gray-700 focus:ring-gray-400 focus:ring-offset-white dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white/80 dark:focus:ring-white/10 dark:focus:ring-offset-white/10" data-hs-overlay="#hs-overlay-right">
                                    <span className="sr-only">Close modal</span>
                                    <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor"></path>
                                    </svg>
                                </button>
                            </div>
                            <div className="ti-offcanvas-body !h-[90%] !p-0">
                                <div>
                                    <ul className="list-group list-group-flush mb-0">
                                        <li className="list-group-item !border-t-0">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-primary !rounded-full">
                                                        NW
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">New Website Created<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">20 Nov 2022</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>30 mins ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-danger !rounded-full">
                                                        CH
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Prepare for the new project<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">3 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>2 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info !rounded-full">
                                                        S
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Decide the live discussion<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">17 Feb 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md !rounded-full">
                                                        <img src="../../../assets/images/faces/12.jpg" alt="" className="!rounded-full" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">29 Dec 2022</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-success !rounded-full">
                                                        RC
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Prepare for presentation<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">31 Dec 2022</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md !rounded-full">
                                                        <img src="../../../assets/images/faces/1.jpg" alt="" className="!rounded-full" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Brenda New product launching<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">1 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>7 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-secondary !rounded-full">
                                                        M
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Medeleine Hey! there i'm available<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">5 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info !rounded-full">
                                                        OL
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Olivia New schedule release<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">6 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>45 mins ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-warning !rounded-full">
                                                        A
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Kamala Preparing for new admin launch<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">7 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>28 mins ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md !rounded-full">
                                                        <img src="../../../assets/images/faces/6.jpg" alt="" className="!rounded-full" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Oisha Meeting with clinet for dinner<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">10 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>14 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-danger !rounded-full">
                                                        CH
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Prepare for the new project<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">3 Jan 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>2 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-info !rounded-full">
                                                        S
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Decide the live discussion<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">17 Feb 2023</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>3 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md !rounded-full">
                                                        <img src="../../../assets/images/faces/14.jpg" alt="" className="!rounded-full" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Meeting at 3:00 pm<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">29 Dec 2022</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item">
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-md bg-success !rounded-full">
                                                        RC
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <p className="font-semibold mb-0">Prepare for presentation<span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">31 Dec 2022</span></p>
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4 hrs ago</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="ti-btn ti-btn-primary-full" data-hs-overlay="#hs-overlay-bottom">
                            Toggle bottom offcanvas
                        </button>

                        <div id="hs-overlay-bottom" className="hs-overlay hidden ti-offcanvas ti-offcanvas-bottom !z-[105]" tabIndex="-1">
                            <div className="ti-offcanvas-header">
                                <h5 className="ti-offcanvas-title">
                                    Offcanvas title
                                </h5>
                                <button type="button" className="ti-btn flex-shrink-0 p-0 transition-none text-gray-500 hover:text-gray-700 focus:ring-gray-400 focus:ring-offset-white dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white/80 dark:focus:ring-white/10 dark:focus:ring-offset-white/10" data-hs-overlay="#hs-overlay-bottom">
                                    <span className="sr-only">Close modal</span>
                                    <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                                    </svg>
                                </button>
                            </div>
                            <div className="ti-offcanvas-body !h-[90%]">
                                <p className="text-gray-800 dark:text-[#8c9097] dark:text-white/50">
                                    ...
                                </p>
                            </div>
                        </div>
                    </Showcode>
                </div>
            </div>

        </Fragment>
    )
}
Offcanvas.layout = "Contentlayout"
export default Offcanvas