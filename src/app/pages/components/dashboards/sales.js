import { Salesoverview, Salevalue, Trendingorders } from '@/shared/data/dashboards/salesdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React, { Fragment, useEffect, useState } from 'react';
import WorldMap from "react-svg-worldmap";

const Sales = () => {

    const [clientRender, setClientRender] = useState(false);

    useEffect(() => {
        setClientRender(true);
    }, []);

    const data = [
        { country: "cn", value: 1389618778 }, // china
        { country: "in", value: 1311559204 }, // india
        { country: "us", value: 331883986 }, // united states
        { country: "id", value: 264935824 }, // indonesia
        { country: "pk", value: 210797836 }, // pakistan
        { country: "br", value: 210301591 }, // brazil
        { country: "ng", value: 208679114 }, // nigeria
        { country: "bd", value: 161062905 }, // bangladesh
        { country: "ru", value: 141944641 }, // russia
        { country: "mx", value: 127318112 }, // mexico
    ];


    return (
        <Fragment>
            <Seo title={"Sales"} />
            <Pageheader currentpage="Sales" activepage="Dashboards" mainpage="Sales" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-body">
                            <div className="grid grid-cols-12">
                                <div className="col-span-6 pe-0">
                                    <p className="mb-2">
                                        <span className="text-[1rem]">Sales Statistics</span>
                                    </p>
                                    <p className="mb-2 text-[0.75rem]">
                                        <span className="text-[1.5625rem] font-semibold leading-none vertical-bottom mb-0">153</span>
                                        <span className="block text-[0.625rem] font-semibold text-[#8c9097] dark:text-white/50">THIS MONTH</span>
                                    </p>
                                    <Link href="#!" className="text-[0.75rem] mb-0 text-primary">Show full stats<i className="ti ti-chevron-right ms-1"></i></Link>
                                </div>
                                <div className="col-span-6">
                                    <p className="badge bg-success/10 !text-success ltr:float-right rtl:float-left inline-flex"><i className="ti ti-caret-up me-1"></i>42%</p>
                                    <p className="main-card-icon mb-0"><svg className="svg-primary" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z" opacity=".3" /><path d="M0,0h24v24H0V0z" fill="none" /><g><path d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z" /><rect height="2" width="6" x="9" y="7" /><rect height="2" width="2" x="16" y="7" /><rect height="2" width="6" x="9" y="10" /><rect height="2" width="2" x="16" y="10" /></g></svg></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-body">
                            <div className="grid grid-cols-12">
                                <div className="col-span-6 pe-0">
                                    <p className="mb-2">
                                        <span className="text-[1rem]">Total Revenue</span>
                                    </p>
                                    <p className="mb-2 text-[0.75rem]">
                                        <span className="text-[1.5625rem] font-semibold leading-none vertical-bottom mb-0">$4,32,474</span>
                                        <span className="block text-[0.625rem] font-semibold text-[#8c9097] dark:text-white/50">THIS MONTH</span>
                                    </p>
                                    <Link href="#!" className="text-[0.75rem] mb-0 !text-primary">Show full stats<i className="ti ti-chevron-right ms-1"></i></Link>
                                </div>
                                <div className="col-span-6">
                                    <p className="badge bg-danger/10 !text-danger ltr:float-right rtl:float-left inline-flex"><i className="ti ti-caret-down me-1"></i>12%</p>
                                    <p className="main-card-icon mb-0">
                                        <svg className="svg-primary" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><path d="M12,6c-3.87,0-7,3.13-7,7s3.13,7,7,7s7-3.13,7-7S15.87,6,12,6z M13,14h-2V8h2V14z" opacity=".3" /><rect height="2" width="6" x="9" y="1" /><path d="M19.03,7.39l1.42-1.42c-0.43-0.51-0.9-0.99-1.41-1.41l-1.42,1.42C16.07,4.74,14.12,4,12,4c-4.97,0-9,4.03-9,9 c0,4.97,4.02,9,9,9s9-4.03,9-9C21,10.88,20.26,8.93,19.03,7.39z M12,20c-3.87,0-7-3.13-7-7s3.13-7,7-7s7,3.13,7,7S15.87,20,12,20z" /><rect height="6" width="2" x="11" y="8" /></g></g></svg>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-body">
                            <div className="grid grid-cols-12">
                                <div className="col-span-6 pe-0">
                                    <p className="mb-2">
                                        <span className="text-[1rem]">Page Views</span>
                                    </p>
                                    <p className="mb-2 text-[0.75rem]">
                                        <span className="text-[1.5625rem] font-semibold leading-none vertical-bottom mb-0">27,146</span>
                                        <span className="block text-[0.625rem] font-semibold text-[#8c9097] dark:text-white/50">THIS MONTH</span>
                                    </p>
                                    <Link href="#!" className="text-[0.75rem] mb-0 text-primary">Show full stats<i className="ti ti-chevron-right ms-1"></i></Link>
                                </div>
                                <div className="col-span-6">
                                    <p className="badge bg-success/10 !text-success ltr:float-right rtl:float-left inline-flex"><i className="ti ti-caret-up me-1"></i>27%</p>
                                    <p className="main-card-icon mb-0">
                                        <svg className="svg-primary" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M13 4H6v16h12V9h-5V4zm3 14H8v-2h8v2zm0-6v2H8v-2h8z" opacity=".3" /><path d="M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" /></svg>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6  col-span-12">
                    <div className="box">
                        <div className="box-body">
                            <div className="grid grid-cols-12">
                                <div className="col-span-6 pe-0">
                                    <p className="mb-2">
                                        <span className="text-[1rem]">Profit By Sale</span>
                                    </p>
                                    <p className="mb-2 text-[0.75rem]">
                                        <span className="text-[1.5625rem] font-semibold leading-none vertical-bottom mb-0">$563</span>
                                        <span className="block text-[0.625rem] font-semibold text-[#8c9097] dark:text-white/50">THIS MONTH</span>
                                    </p>
                                    <Link href="#!" className="text-[0.75rem] mb-0 text-primary">Show full stats<i className="ti ti-chevron-right ms-1"></i></Link>
                                </div>
                                <div className="col-span-6">
                                    <p className="badge bg-success/10 !text-success ltr:float-right rtl:float-left inline-flex"><i className="ti ti-caret-up me-1"></i>32.5%</p>
                                    <p className="main-card-icon mb-0">
                                        <svg className="svg-primary" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 4c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8zm1.23 13.33V19H10.9v-1.69c-1.5-.31-2.77-1.28-2.86-2.97h1.71c.09.92.72 1.64 2.32 1.64 1.71 0 2.1-.86 2.1-1.39 0-.73-.39-1.41-2.34-1.87-2.17-.53-3.66-1.42-3.66-3.21 0-1.51 1.22-2.48 2.72-2.81V5h2.34v1.71c1.63.39 2.44 1.63 2.49 2.97h-1.71c-.04-.97-.56-1.64-1.94-1.64-1.31 0-2.1.59-2.1 1.43 0 .73.57 1.22 2.34 1.67 1.77.46 3.66 1.22 3.66 3.42-.01 1.6-1.21 2.48-2.74 2.77z" opacity=".3" /><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm.31-8.86c-1.77-.45-2.34-.94-2.34-1.67 0-.84.79-1.43 2.1-1.43 1.38 0 1.9.66 1.94 1.64h1.71c-.05-1.34-.87-2.57-2.49-2.97V5H10.9v1.69c-1.51.32-2.72 1.3-2.72 2.81 0 1.79 1.49 2.69 3.66 3.21 1.95.46 2.34 1.15 2.34 1.87 0 .53-.39 1.39-2.1 1.39-1.6 0-2.23-.72-2.32-1.64H8.04c.1 1.7 1.36 2.66 2.86 2.97V19h2.34v-1.67c1.52-.29 2.72-1.16 2.73-2.77-.01-2.2-1.9-2.96-3.66-3.42z" /></svg>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-3 xl:col-span-12  col-span-12">
                    <div className="box recent-transactions-card overflow-hidden">
                        <div className="box-header justify-between">
                            <div className="box-title">Recent Transactions</div>
                            <div className="hs-dropdown ti-dropdown">
                                <Link aria-label="anchor" href="#!"
                                    className="flex items-center justify-center w-[1.75rem] h-[1.75rem] !!text-defaulttextcolortextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                                    aria-expanded="false"><i
                                        className="fe fe-more-vertical text-[0.8rem]"></i>
                                </Link>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        href="#!">Action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        href="#!">Another action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        href="#!">Something else here</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="card-body !p-0">
                            <div className="list-group">
                                <Link href="#!" className="!border-0">
                                    <div className="list-group-item !border-0">
                                        <div className="flex items-start">
                                            <span className="tansaction-icon bg-primary">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-white" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" /><path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z" /></g></svg>
                                            </span>
                                            <div className="w-full">
                                                <div className="flex items-start justify-between">
                                                    <div className="mt-0">
                                                        <p className="mb-0 font-semibold"><span className="me-3">Shopping</span></p>
                                                        <span className="mb-0 text-[0.75rem] text-[#8c9097] dark:text-white/50">card</span>
                                                    </div>
                                                    <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem] text-center"></div>
                                                    <span className="ms-auto">
                                                        <span className="text-end text-danger block">
                                                            -$256.99
                                                        </span>
                                                        <span className="text-end text-[#8c9097] dark:text-white/50 block text-[0.75rem]">Mar 12,2022</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link href="#!" className="!border-0">
                                    <div className="list-group-item !border-0">
                                        <div className="flex items-start">
                                            <span className="tansaction-icon bg-info">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-white" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><path d="M20,2H4C3,2,2,2.9,2,4v3.01C2,7.73,2.43,8.35,3,8.7V20c0,1.1,1.1,2,2,2h14c0.9,0,2-0.9,2-2V8.7c0.57-0.35,1-0.97,1-1.69V4 C22,2.9,21,2,20,2z M19,20H5V9h14V20z M20,7H4V4h16V7z" /><rect height="2" width="6" x="9" y="12" /></g></g></svg>
                                            </span>
                                            <div className="w-full">
                                                <div className="flex items-start justify-between">
                                                    <div className="mt-0">
                                                        <p className="mb-0 font-semibold"><span className="me-3">Stock Market</span></p>
                                                        <span className="mb-0 text-[0.75rem] text-[#8c9097] dark:text-white/50">Transfer</span>
                                                    </div>
                                                    <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem] text-center"></div>
                                                    <span className="ms-auto">
                                                        <span className="text-end text-success block">
                                                            +$18,567.00
                                                        </span>
                                                        <span className="text-end text-[#8c9097] dark:text-white/50 block text-[0.75rem]">Mar 10,2022</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link href="#!" className="!border-0">
                                    <div className="list-group-item !border-0">
                                        <div className="flex items-start">
                                            <span className="tansaction-icon bg-warning">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-white" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-1.45-5c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6z" /></svg>
                                            </span>
                                            <div className="w-full">
                                                <div className="flex items-start justify-between">
                                                    <div className="mt-0">
                                                        <p className="mb-0 font-semibold"><span className="me-3">Grocery</span></p>
                                                        <span className="mb-0 text-[0.75rem] text-[#8c9097] dark:text-white/50">card</span>
                                                    </div>
                                                    <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem] text-center"></div>
                                                    <span className="ms-auto">
                                                        <span className="text-end text-danger block">
                                                            -$256.99
                                                        </span>
                                                        <span className="text-end text-[#8c9097] dark:text-white/50 block text-[0.75rem]">Apr 23,2022</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link href="#!" className="!border-0">
                                    <div className="list-group-item !border-0">
                                        <div className="flex items-start">
                                            <span className="tansaction-icon bg-danger">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-white" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g /><g><path d="M21.9,8.89l-1.05-4.37c-0.22-0.9-1-1.52-1.91-1.52H5.05C4.15,3,3.36,3.63,3.15,4.52L2.1,8.89 c-0.24,1.02-0.02,2.06,0.62,2.88C2.8,11.88,2.91,11.96,3,12.06V19c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2v-6.94 c0.09-0.09,0.2-0.18,0.28-0.28C21.92,10.96,22.15,9.91,21.9,8.89z M18.91,4.99l1.05,4.37c0.1,0.42,0.01,0.84-0.25,1.17 C19.57,10.71,19.27,11,18.77,11c-0.61,0-1.14-0.49-1.21-1.14L16.98,5L18.91,4.99z M13,5h1.96l0.54,4.52 c0.05,0.39-0.07,0.78-0.33,1.07C14.95,10.85,14.63,11,14.22,11C13.55,11,13,10.41,13,9.69V5z M8.49,9.52L9.04,5H11v4.69 C11,10.41,10.45,11,9.71,11c-0.34,0-0.65-0.15-0.89-0.41C8.57,10.3,8.45,9.91,8.49,9.52z M4.04,9.36L5.05,5h1.97L6.44,9.86 C6.36,10.51,5.84,11,5.23,11c-0.49,0-0.8-0.29-0.93-0.47C4.03,10.21,3.94,9.78,4.04,9.36z M5,19v-6.03C5.08,12.98,5.15,13,5.23,13 c0.87,0,1.66-0.36,2.24-0.95c0.6,0.6,1.4,0.95,2.31,0.95c0.87,0,1.65-0.36,2.23-0.93c0.59,0.57,1.39,0.93,2.29,0.93 c0.84,0,1.64-0.35,2.24-0.95c0.58,0.59,1.37,0.95,2.24,0.95c0.08,0,0.15-0.02,0.23-0.03V19H5z" /></g></g></svg>
                                            </span>
                                            <div className="w-full">
                                                <div className="flex items-start justify-between">
                                                    <div className="mt-0">
                                                        <p className="mb-0 font-semibold"><span className="me-3">Business</span></p>
                                                        <span className="mb-0 text-[0.75rem] text-[#8c9097] dark:text-white/50">transfer</span>
                                                    </div>
                                                    <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem] text-center"></div>
                                                    <span className="ms-auto">
                                                        <span className="text-end text-success block">
                                                            +$256.99
                                                        </span>
                                                        <span className="text-end text-[#8c9097] dark:text-white/50 block text-[0.75rem]">May 4,2022</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link href="#!" className="!border-0">
                                    <div className="list-group-item !border-0">
                                        <div className="flex items-start">
                                            <span className="tansaction-icon bg-success">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-white" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H8V4h12v12zM10 9h8v2h-8zm0 3h4v2h-4zm0-6h8v2h-8z" /></svg>
                                            </span>
                                            <div className="w-full">
                                                <div className="flex items-start justify-between">
                                                    <div className="mt-0">
                                                        <p className="mb-0 font-semibold"><span className="me-3">Books</span></p>
                                                        <span className="mb-0 text-[0.75rem] text-[#8c9097] dark:text-white/50">card</span>
                                                    </div>
                                                    <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem] text-center"></div>
                                                    <span className="ms-auto">
                                                        <span className="text-end text-danger block">
                                                            -$256.99
                                                        </span>
                                                        <span className="text-end text-[#8c9097] dark:text-white/50 block text-[0.75rem]">May 18,2022</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                                <Link href="#!" className="!border-0">
                                    <div className="list-group-item !border-0">
                                        <div className="flex items-start">
                                            <span className="tansaction-icon bg-pink">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-white" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" /></g><g><g><path d="M21.58,16.09l-1.09-7.66C20.21,6.46,18.52,5,16.53,5H7.47C5.48,5,3.79,6.46,3.51,8.43l-1.09,7.66 C2.2,17.63,3.39,19,4.94,19h0c0.68,0,1.32-0.27,1.8-0.75L9,16h6l2.25,2.25c0.48,0.48,1.13,0.75,1.8,0.75h0 C20.61,19,21.8,17.63,21.58,16.09z M19.48,16.81C19.4,16.9,19.27,17,19.06,17c-0.15,0-0.29-0.06-0.39-0.16L15.83,14H8.17 l-2.84,2.84C5.23,16.94,5.09,17,4.94,17c-0.21,0-0.34-0.1-0.42-0.19c-0.08-0.09-0.16-0.23-0.13-0.44l1.09-7.66 C5.63,7.74,6.48,7,7.47,7h9.06c0.99,0,1.84,0.74,1.98,1.72l1.09,7.66C19.63,16.58,19.55,16.72,19.48,16.81z" /><polygon points="9,8 8,8 8,10 6,10 6,11 8,11 8,13 9,13 9,11 11,11 11,10 9,10" /><circle cx="17" cy="12" r="1" /><circle cx="15" cy="9" r="1" /></g></g></svg>
                                            </span>
                                            <div className="w-full">
                                                <div className="flex items-start justify-between">
                                                    <div className="mt-0">
                                                        <p className="mb-0 font-semibold"><span className="me-3">Sports</span></p>
                                                        <span className="mb-0 text-[0.75rem] text-[#8c9097] dark:text-white/50">card</span>
                                                    </div>
                                                    <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem] text-center"></div>
                                                    <span className="ms-auto">
                                                        <span className="text-end text-danger block">
                                                            -$256.99
                                                        </span>
                                                        <span className="text-end text-[#8c9097] dark:text-white/50 block text-[0.75rem]">Apr 30,2022</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-6 sm:col-span-12 md:col-span-6 xxl:col-span-6 xl:col-span-8  col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Sales Overview
                            </div>
                            <div className="hs-dropdown ti-dropdown">
                                <Link aria-label="anchor" href="#!"
                                    className="flex items-center justify-center w-[1.75rem] h-[1.75rem] !!text-defaulttextcolortextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                                    aria-expanded="false"><i
                                        className="fe fe-more-vertical text-[0.8rem]"></i>
                                </Link>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        href="#!">Action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        href="#!">Another action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        href="#!">Something else here</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="box-body">
                            <div id="salesOverview">
                                <Salesoverview />
                            </div>
                        </div>
                    </div>

                </div>
                <div className="lg:col-span-6 sm:col-span-12 md:col-span-6 xxl:col-span-3 xl:col-span-4 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">Activities</div>
                            <div className="hs-dropdown ti-dropdown">
                                <Link href="#!" className="px-2 font-normal text-[0.75rem] text-[#8c9097] dark:text-white/50"
                                    aria-expanded="false">
                                    View All<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                </Link>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        href="#!">Today</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        href="#!">This Week</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        href="#!">Last Week</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="box-body mt-0 latest-timeline" id="latest-timeline">
                            <ul className="timeline-main mb-0 list-unstyled">
                                <li>
                                    <div className="featured_icon1 featured-danger"></div>
                                </li>
                                <li className="mt-0 activity">
                                    <Link href="#!" className="text-[0.75rem]">
                                        <p className="mb-0"><span className="font-semibold">#Anita</span> <span className="ms-2 text-[0.75rem]">Lorem ipsum dolor, sit amet consectetur adipisicing  .</span></p>
                                    </Link>
                                    <small className="text-[#8c9097] dark:text-white/50 mt-0 mb-0 text-[0 .625rem]">12 mins ago.</small>
                                </li>
                                <li>
                                    <div className="featured_icon1 featured-success"> </div>
                                </li>
                                <li className="mt-0 activity">
                                    <Link href="#!" className="text-[0.75rem]">
                                        <p className="mb-0"><span className="me-2 text-[0.75rem]">New Product reveived.</span><span className="font-semibold">#FX-321</span> </p>
                                    </Link>
                                    <small className="text-[#8c9097] dark:text-white/50 mt-0 mb-0 text-[0 .625rem]">28 mins ago.</small>
                                </li>
                                <li>
                                    <div className="featured_icon1 featured-danger"></div>
                                </li>
                                <li className="mt-0 activity">
                                    <div className="text-[0.75rem]">
                                        <p className="mb-0">
                                            <span className="font-semibold text-primary">#Zlatan</span>
                                            <span className="ms-2 text-[0.75rem]">shared a page
                                                <Link href="https://themeforest.net/user/spruko/portfolio" target="_blank" className="text-success underline text-[0.6875rem]"> https://themeforest.net/user/spruko/ portfolio</Link>
                                            </span>
                                        </p>
                                    </div>
                                    <small className="text-[#8c9097] dark:text-white/50 mt-0 mb-0 text-[0 .625rem]">37 mins ago.</small>
                                </li>
                                <li>
                                    <div className="featured_icon1 featured-success"></div>
                                </li>
                                <li className="mt-0 activity">
                                    <div className="text-[0.75rem]">
                                        <p className="mb-0"><span className="font-semibold text-primary">#Hussain</span> <span className="ms-2 text-[0.75rem]">shared a file. </span></p>
                                        <small className="text-[#8c9097] dark:text-white/50 mt-0 mb-0 text-[0 .625rem]">1 day ago.</small>
                                        <p className="p-1 border border-dotted dark:border-defaultborder/10 wp-50 br-5 mb-0">
                                            <Link href="#!">
                                                <span className="badge bg-success  text-white me-2">PPT</span> <span className="text-[0.6875rem]">Project_discussion</span>
                                            </Link>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div className="featured_icon1 featured-danger"></div>
                                </li>
                                <li className="mt-0 activity">
                                    <Link href="#!" className="text-[0.75rem]">
                                        <p className="mb-0">
                                            <span className="font-semibold">#Emiley</span>
                                            <span className="ms-2 text-[0.75rem]">Lorem ipsum dolor, sit amet consectetur adipisicing ipsum dolor...</span>
                                            <span className="font-semibold ms-2">More</span>
                                        </p>
                                    </Link>
                                    <small className="text-[#8c9097] dark:text-white/50 mt-0 mb-0 text-[0 .625rem]">14 Mar 2022.</small>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-6 xl:col-span-12 md:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header sm:flex block">
                            <div className="box-title">Task List</div>
                            <div className="tab-menu-heading border-0 p-0 ms-auto sm:mt-0 mt-2">
                                <div className="tabs-menu-task me-3">
                                    <nav className="" aria-label="Tabs">
                                        <Link href="#!" className="hs-tab-active:bg-secondary/10 hs-tab-active:text-secondary cursor-pointer text-defaulttextcolor px-2 py-2 flex-grow  text-[0.75rem] font-medium text-center rounded-md hover:text-secondary active" id="active-item" data-hs-tab="#Active" aria-controls="Active">
                                            Active Tasks
                                        </Link>
                                        <Link href="#!" className="hs-tab-active:bg-secondary/10 hs-tab-active:text-secondary cursor-pointer text-defaulttextcolor px-2 py-2 text-[0.75rem] flex-grow font-medium text-center  rounded-md hover:text-secondary " id="Complete-item" data-hs-tab="#Complete" aria-controls="Complete">
                                            Completed Tasks
                                        </Link>
                                    </nav>
                                </div>
                            </div>
                            <div className="sm:mt-0 mt-2">
                                <button type="button" className="btn btn-sm btn-light"><i className="ti ti-plus me-1 font-semibold align-middle inline-block"></i>Add Task</button>
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <div className="tab-content !p-0">
                                <div className="tab-pane show active !p-0 !border-0" id="Active" aria-labelledby="active-item" role="tabpanel">
                                    <div className="table-responsive">
                                        <table className="table whitespace-nowrap table-hover min-w-full">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="text-center">
                                                        <span>
                                                            <input className="form-check-input" type="checkbox" id="checkAll" value="" aria-label="..." />
                                                        </span>
                                                    </th>
                                                    <th scope="col" className="text-start">Task details</th>
                                                    <th scope="col" className="text-start">Assigned date</th>
                                                    <th scope="col" className="text-start">Target</th>
                                                    <th scope="col" className="text-start">Assigned to</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-t border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10">
                                                    <td className="text-center">
                                                        <span>
                                                            <input className="form-check-input" type="checkbox" id="check1" value="" aria-label="..." />
                                                        </span>
                                                    </td>
                                                    <td>Design task page for new template</td>
                                                    <td className="text-[#8c9097] dark:text-white/50">12.43pm</td>
                                                    <td><span className="badge bg-primary text-white">Today</span></td>
                                                    <td>
                                                        <div className="avatar-list-stacked !mb-0">
                                                            <span className="avatar avatar-xs !mb-0">
                                                                <img src="../../../assets/images/faces/2.jpg" alt="img" className="rounded-full" />
                                                            </span>
                                                            <span className="avatar avatar-xs !mb-0">
                                                                <img src="../../../assets/images/faces/8.jpg" alt="img" className="rounded-full" />
                                                            </span>
                                                            <span className="avatar avatar-xs !mb-0">
                                                                <img src="../../../assets/images/faces/2.jpg" alt="img" className="rounded-full" />
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="border-t border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10">
                                                    <td className="text-center">
                                                        <span>
                                                            <input className="form-check-input" type="checkbox" id="check2" value="" aria-label="..." defaultChecked />
                                                        </span>
                                                    </td>
                                                    <td>Solve UI issues in new template</td>
                                                    <td className="text-[#8c9097] dark:text-white/50">11.25am</td>
                                                    <td><span className="badge bg-secondary text-white">Tomorrow</span></td>
                                                    <td>
                                                        <div className="avatar-list-stacked !mb-0">
                                                            <span className="avatar avatar-xs !mb-0">
                                                                <img src="../../../assets/images/faces/6.jpg" alt="img" className="rounded-full" />
                                                            </span>
                                                            <span className="avatar avatar-xs !mb-0">
                                                                <img src="../../../assets/images/faces/9.jpg" alt="img" className="rounded-full" />
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="border-t border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10">
                                                    <td className="text-center">
                                                        <span>
                                                            <input className="form-check-input" type="checkbox" id="check3" value="" aria-label="..." />
                                                        </span>
                                                    </td>
                                                    <td>prepare pre requisites</td>
                                                    <td className="text-[#8c9097] dark:text-white/50">9.56am</td>
                                                    <td><span className="badge bg-primary text-white">Today</span></td>
                                                    <td>
                                                        <div className="avatar-list-stacked !mb-0">
                                                            <span className="avatar avatar-xs !mb-0">
                                                                <img src="../../../assets/images/faces/3.jpg" alt="img" className="rounded-full" />
                                                            </span>
                                                            <span className="avatar avatar-xs !mb-0">
                                                                <img src="../../../assets/images/faces/5.jpg" alt="img" className="rounded-full" />
                                                            </span>
                                                            <span className="avatar avatar-xs !mb-0">
                                                                <img src="../../../assets/images/faces/10.jpg" alt="img" className="rounded-full" />
                                                            </span>
                                                            <span className="avatar avatar-xs !mb-0">
                                                                <img src="../../../assets/images/faces/15.jpg" alt="img" className="rounded-full" />
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="border-t border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10">
                                                    <td className="text-center">
                                                        <span>
                                                            <input className="form-check-input" type="checkbox" id="check4" value="" aria-label="..." />
                                                        </span>
                                                    </td>
                                                    <td>Change total styles od that dashboard</td>
                                                    <td className="text-[#8c9097] dark:text-white/50">8.15am</td>
                                                    <td><span className="badge bg-primary text-white">Today</span></td>
                                                    <td>
                                                        <div className="avatar-list-stacked !mb-0">
                                                            <span className="avatar avatar-xs !mb-0">
                                                                <img src="../../../assets/images/faces/11.jpg" alt="img" className="rounded-full" />
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="border-t border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10">
                                                    <td className="text-center">
                                                        <span>
                                                            <input className="form-check-input" type="checkbox" id="check5" value="" aria-label="..." />
                                                        </span>
                                                    </td>
                                                    <td>Update color theme</td>
                                                    <td className="text-[#8c9097] dark:text-white/50">4.20pm</td>
                                                    <td><span className="badge bg-secondary text-white">Tomorrow</span></td>
                                                    <td>
                                                        <div className="avatar-list-stacked !mb-0">
                                                            <span className="avatar avatar-xs !mb-0">
                                                                <img src="../../../assets/images/faces/13.jpg" alt="img" className="rounded-full" />
                                                            </span>
                                                            <span className="avatar avatar-xs !mb-0">
                                                                <img src="../../../assets/images/faces/16.jpg" alt="img" className="rounded-full" />
                                                            </span>
                                                            <span className="avatar avatar-xs !mb-0">
                                                                <img src="../../../assets/images/faces/8.jpg" alt="img" className="rounded-full" />
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="border-t border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10">
                                                    <td className="text-center">
                                                        <span>
                                                            <input className="form-check-input" type="checkbox" id="check11" value="" aria-label="..." />
                                                        </span>
                                                    </td>
                                                    <td>New dashboard design update</td>
                                                    <td className="text-[#8c9097] dark:text-white/50">8.29am</td>
                                                    <td><span className="badge bg-primary text-white">Today</span></td>
                                                    <td>
                                                        <div className="avatar-list-stacked !mb-0">
                                                            <span className="avatar avatar-xs !mb-0">
                                                                <img src="../../../assets/images/faces/10.jpg" alt="img" className="rounded-full" />
                                                            </span>
                                                            <span className="avatar avatar-xs !mb-0">
                                                                <img src="../../../assets/images/faces/5.jpg" alt="img" className="rounded-full" />
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane !p-0 hidden !border-0" id="Complete" aria-labelledby="complete-item" role="tabpanel">
                                    <div className="table-responsive">
                                        <table className="table whitespace-nowrap table-hover min-w-full">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="text-center">
                                                        <span>
                                                            <input className="form-check-input" type="checkbox" id="checkAll1" value="" aria-label="..." />
                                                        </span>
                                                    </th>
                                                    <th scope="col" className="text-start">Task details</th>
                                                    <th scope="col" className="text-start">Assigned date</th>
                                                    <th scope="col" className="text-start">Completed</th>
                                                    <th scope="col" className="text-start">Assigned to</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-t border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10">
                                                    <td className="text-center">
                                                        <span>
                                                            <input className="form-check-input" type="checkbox" id="check6" value="" aria-label="..." />
                                                        </span>
                                                    </td>
                                                    <td>New landing page ui update</td>
                                                    <td className="text-[#8c9097] dark:text-white/50">24 Nov 2022</td>
                                                    <td><span className="badge bg-success text-white">4 hrs ago</span></td>
                                                    <td>
                                                        <div className="avatar-list-stacked !mb-0">
                                                            <span className="avatar avatar-xs !mb-0">
                                                                <img src="../../../assets/images/faces/5.jpg" alt="img" className="rounded-full" />
                                                            </span>
                                                            <span className="avatar avatar-xs !mb-0">
                                                                <img src="../../../assets/images/faces/9.jpg" alt="img" className="rounded-full" />
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="border-t border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10">
                                                    <td className="text-center">
                                                        <span>
                                                            <input className="form-check-input" type="checkbox" id="check7" value="" aria-label="..." />
                                                        </span>
                                                    </td>
                                                    <td>Job portal dashboard redesign</td>
                                                    <td className="text-[#8c9097] dark:text-white/50">30 Nov 2022</td>
                                                    <td><span className="badge bg-success text-white">Today</span></td>
                                                    <td>
                                                        <div className="avatar-list-stacked !mb-0">
                                                            <span className="avatar avatar-xs !mb-0">
                                                                <img src="../../../assets/images/faces/11.jpg" alt="img" className="rounded-full" />
                                                            </span>
                                                            <span className="avatar avatar-xs !mb-0">
                                                                <img src="../../../assets/images/faces/12.jpg" alt="img" className="rounded-full" />
                                                            </span>
                                                            <span className="avatar avatar-xs !mb-0">
                                                                <img src="../../../assets/images/faces/13.jpg" alt="img" className="rounded-full" />
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="border-t border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10">
                                                    <td className="text-center">
                                                        <span>
                                                            <input className="form-check-input" type="checkbox" id="check8" value="" aria-label="..." />
                                                        </span>
                                                    </td>
                                                    <td>New template layout update</td>
                                                    <td className="text-[#8c9097] dark:text-white/50">11 Dec 2022</td>
                                                    <td><span className="badge bg-success text-white">Yesterday</span></td>
                                                    <td>
                                                        <div className="avatar-list-stacked !mb-0">
                                                            <span className="avatar avatar-xs !mb-0">
                                                                <img src="../../../assets/images/faces/4.jpg" alt="img" className="rounded-full" />
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="border-t border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10">
                                                    <td className="text-center">
                                                        <span>
                                                            <input className="form-check-input" type="checkbox" id="check29" value="" aria-label="..." />
                                                        </span>
                                                    </td>
                                                    <td>All dashboard licenses page update</td>
                                                    <td className="text-[#8c9097] dark:text-white/50">6 Dec 2022</td>
                                                    <td><span className="badge bg-success text-white">Yesterday</span></td>
                                                    <td>
                                                        <div className="avatar-list-stacked !mb-0">
                                                            <span className="avatar avatar-xs !mb-0">
                                                                <img src="../../../assets/images/faces/1.jpg" alt="img" className="rounded-full" />
                                                            </span>
                                                            <span className="avatar avatar-xs !mb-0">
                                                                <img src="../../../assets/images/faces/2.jpg" alt="img" className="rounded-full" />
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="border-t border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10">
                                                    <td className="text-center">
                                                        <span>
                                                            <input className="form-check-input" type="checkbox" id="check19" value="" aria-label="..." />
                                                        </span>
                                                    </td>
                                                    <td>Update color theme of ynex template</td>
                                                    <td className="text-[#8c9097] dark:text-white/50">8 Dec 2022</td>
                                                    <td><span className="badge bg-success text-white">Yesterday</span></td>
                                                    <td>
                                                        <div className="avatar-list-stacked !mb-0">
                                                            <span className="avatar avatar-xs !mb-0">
                                                                <img src="../../../assets/images/faces/5.jpg" alt="img" className="rounded-full" />
                                                            </span>
                                                            <span className="avatar avatar-xs !mb-0">
                                                                <img src="../../../assets/images/faces/3.jpg" alt="img" className="rounded-full" />
                                                            </span>
                                                            <span className="avatar avatar-xs !mb-0">
                                                                <img src="../../../assets/images/faces/11.jpg" alt="img" className="rounded-full" />
                                                            </span>
                                                            <span className="avatar avatar-xs !mb-0">
                                                                <img src="../../../assets/images/faces/12.jpg" alt="img" className="rounded-full" />
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="border-t border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10">
                                                    <td className="text-center">
                                                        <span>
                                                            <input className="form-check-input" type="checkbox" id="check9" value="" aria-label="..." />
                                                        </span>
                                                    </td>
                                                    <td>New pages list noted</td>
                                                    <td className="text-[#8c9097] dark:text-white/50">21 Dec 2022</td>
                                                    <td><span className="badge bg-success text-white">Today</span></td>
                                                    <td>
                                                        <div className="avatar-list-stacked !mb-0">
                                                            <span className="avatar avatar-xs !mb-0">
                                                                <img src="../../../assets/images/faces/1.jpg" alt="img" className="rounded-full" />
                                                            </span>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-footer">
                            <div className="sm:flex items-center">
                                <div className="dark:text-defaulttextcolor/70">
                                    Showing 5 Entries <i className="bi bi-arrow-right ms-2 font-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="ti-pagination mb-0">
                                            <li className="page-item disabled">
                                                <Link className="page-link" href="#!">
                                                    Prev
                                                </Link>
                                            </li>
                                            <li className="page-item"><Link className="page-link active" href="#!">1</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
                                            <li className="page-item">
                                                <Link className="page-link !text-primary" href="#!">
                                                    next
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-6 xl:col-span-12 md:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Visitors By Countries
                            </div>
                            <div className="hs-dropdown ti-dropdown">
                                <Link aria-label="anchor" href="#!"
                                    className="flex items-center justify-center w-[1.75rem] h-[1.75rem] !!text-defaulttextcolortextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                                    aria-expanded="false"><i
                                        className="fe fe-more-vertical text-[0.8rem]"></i>
                                </Link>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        href="#!">Action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        href="#!">Another action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        href="#!">Something else here</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <div className="grid grid-cols-12 gap-x-4">
                                <div className="xxl:col-span-4 xl:col-span-12  col-span-12 sales-visitors-countries">
                                    <div className="mt-2">
                                        <ul className="list-none p-6 my-auto">
                                            <li className="mb-4">
                                                <span className="text-[0.75rem]"><i className="ri-checkbox-blank-circle-fill align-middle me-2 inline-block text-primary"></i>Usa</span><span className="font-semibold ltr:float-right rtl:float-left">3,201</span>
                                            </li>
                                            <li className="mb-4">
                                                <span className="text-[0.75rem]"><i className="ri-checkbox-blank-circle-fill align-middle me-2 inline-block text-secondary"></i>India</span><span className="font-semibold ltr:float-right rtl:float-left">2,345</span>
                                            </li>
                                            <li className="mb-4">
                                                <span className="text-[0.75rem]"><i className="ri-checkbox-blank-circle-fill align-middle me-2 inline-block text-danger"></i>Vatican City</span><span className="font-semibold ltr:float-right rtl:float-left">106</span>
                                            </li>
                                            <li className="mb-4">
                                                <span className="text-[0.75rem]"><i className="ri-checkbox-blank-circle-fill align-middle me-2 inline-block text-info"></i>Canada</span><span className="font-semibold ltr:float-right rtl:float-left">2,857</span>
                                            </li>
                                            <li className="mb-4">
                                                <span className="text-[0.75rem]"><i className="ri-checkbox-blank-circle-fill align-middle me-2 inline-block text-orange"></i>Mauritius</span><span className="font-semibold ltr:float-right rtl:float-left">169</span>
                                            </li>
                                            <li className="mb-4">
                                                <span className="text-[0.75rem]"><i className="ri-checkbox-blank-circle-fill align-middle me-2 inline-block text-warning"></i>Singapore</span><span className="font-semibold ltr:float-right rtl:float-left">1,950</span>
                                            </li>
                                            <li className="mb-4">
                                                <span className="text-[0.75rem]"><i className="ri-checkbox-blank-circle-fill align-middle me-2 inline-block text-success"></i>Palau</span><span className="font-semibold ltr:float-right rtl:float-left">224</span>
                                            </li>
                                            <li className="mb-4">
                                                <span className="text-[0.75rem]"><i className="ri-checkbox-blank-circle-fill align-middle me-2 inline-block text-pink"></i>Maldives</span><span className="font-semibold ltr:float-right rtl:float-left">147</span>
                                            </li>
                                            <li className="mb-0">
                                                <span className="text-[0.75rem]"><i className="ri-checkbox-blank-circle-fill align-middle me-2 inline-block"></i>São Tomé and Príncipe</span><span className="font-semibold ltr:float-right rtl:float-left">182</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="xxl:col-span-8 xl:col-span-12  col-span-12 text-center">
                                    <div id="visitors-countries">
                                        {clientRender && (
                                            <WorldMap color="#5a66f1" tooltipBgColor='#5a66f1' value-suffix="people" size="lg" data={data} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">Customers</div>
                            <div className="hs-dropdown ti-dropdown">
                                <Link aria-label="anchor" href="#!"
                                    className="flex items-center justify-center w-[1.75rem] h-[1.75rem] !!text-defaulttextcolortextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                                    aria-expanded="false"><i
                                        className="fe fe-more-vertical text-[0.8rem]"></i>
                                </Link>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        href="#!">Action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        href="#!">Another action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        href="#!">Something else here</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="box-body !p-0 customers">
                            <ul className="list-group my-1">
                                <li className="list-group-item !py-3 !border-0">
                                    <Link href="#!" className="!border-0">
                                        <div className="flex items-start">
                                            <img className="avatar avatar-md me-4 my-auto" src="../../../assets/images/faces/2.jpg" alt="Image description" />
                                            <div className="mt-0">
                                                <p className="mb-1 font-semibold">Samantha Melon</p>
                                                <p className="mb-0 text-[0.6875rem] text-success">User ID: #1234</p>
                                            </div>
                                            <span className="ms-auto text-[0.75rem]">
                                                <span className="ltr:float-right rtl:float-left text-[#8c9097] dark:text-white/50 font-semibold">11.43am</span>
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="list-group-item !py-3 !border-0">
                                    <Link href="#!" className="!border-0">
                                        <div className="flex items-start">
                                            <img className="avatar avatar-md me-4 my-auto" src="../../../assets/images/faces/1.jpg" alt="Image description" />
                                            <div className="mt-0">
                                                <p className="mb-1 font-semibold">Allie Grater</p>
                                                <p className="mb-0 text-[0.6875rem] text-success">User ID: #3432</p>
                                            </div>
                                            <span className="ms-auto text-[0.75rem]">
                                                <span className="ltr:float-right rtl:float-left text-[#8c9097] dark:text-white/50 font-semibold">12.35pm</span>
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="list-group-item !py-3 !border-0">
                                    <Link href="#!" className="!border-0">
                                        <div className="flex items-start">
                                            <img className="avatar avatar-md me-4 my-auto" src="../../../assets/images/faces/5.jpg" alt="Image description" />
                                            <div className="mt-0">
                                                <p className="mb-1 font-semibold">Gabe Lackmen</p>
                                                <p className="mb-0 text-[0.6875rem] text-success">User ID: #2312</p>
                                            </div>
                                            <span className="ms-auto text-[0.75rem]">
                                                <span className="ltr:float-right rtl:float-left text-[#8c9097] dark:text-white/50 font-semibold">Yeserday</span>
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="list-group-item !py-3 !border-0">
                                    <Link href="#!" className="!border-0">
                                        <div className="flex items-start">
                                            <img className="avatar avatar-md me-4 my-auto" src="../../../assets/images/faces/7.jpg" alt="Image description" />
                                            <div className="mt-0">
                                                <p className="mb-1 font-semibold">Manuel Labor</p>
                                                <p className="mb-0 text-[0.6875rem] text-success">User ID: #4231</p>
                                            </div>
                                            <span className="ms-auto text-[0.75rem]">
                                                <span className="ltr:float-right rtl:float-left text-[#8c9097] dark:text-white/50 font-semibold">24 Mar 2022</span>
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="list-group-item !py-3 !border-0">
                                    <Link href="#!" className="!border-0">
                                        <div className="flex items-start">
                                            <img className="avatar avatar-md me-4 my-auto" src="../../../assets/images/faces/9.jpg" alt="Image description" />
                                            <div className="mt-0">
                                                <p className="mb-1 font-semibold">Hercules Bing</p>
                                                <p className="mb-0 text-[0.6875rem] text-success">User ID: #1754</p>
                                            </div>
                                            <span className="ms-auto text-[0.75rem]">
                                                <span className="ltr:float-right rtl:float-left text-[#8c9097] dark:text-white/50 font-semibold">18 Mar 2022</span>
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                                <li className="list-group-item !py-3 !border-0">
                                    <Link href="#!" className="!border-0">
                                        <div className="flex items-start">
                                            <img className="avatar avatar-md me-4 my-auto" src="../../../assets/images/faces/11.jpg" alt="Image description" />
                                            <div className="mt-0">
                                                <p className="mb-1 font-semibold">Manuel Labor</p>
                                                <p className="mb-0 text-[0.6875rem] text-success">User ID: #1345</p>
                                            </div>
                                            <span className="ms-auto text-[0.75rem]">
                                                <span className="ltr:float-right rtl:float-left text-[#8c9097] dark:text-white/50 font-semibold">15 Mar 2022</span>
                                            </span>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">Billing</div>
                            <div className="tab-menu-heading !border-0 !p-0 ms-auto">
                                <div className="tabs-menu-billing my-1">
                                    <nav className="" aria-label="Tabs">
                                        <Link href="#!" className="hs-tab-active:bg-success/10 hs-tab-active:text-success text-defaulttextcolor py-[0.35rem] px-4 flex-grow  text-[0.75rem] font-medium text-center rounded-md hover:text-success active" id="Invoice-item" data-hs-tab="#Invoice" aria-controls="Invoice">
                                            Invoices
                                        </Link>
                                        <Link href="#!" className="hs-tab-active:bg-success/10 hs-tab-active:text-success text-defaulttextcolor py-[0.35rem] px-4 text-[0.75rem] flex-grow font-medium text-center  rounded-md hover:text-success " id="Revenue-item" data-hs-tab="#Revenue" aria-controls="Revenue">
                                            Revenue
                                        </Link>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <div className="tab-content">
                                <div className="tab-pane show active !border-0 !p-0" id="Invoice" aria-labelledby="Invoice-item" role="tabpanel">
                                    <ul className="list-group border-0 py-2 my-2">
                                        <li className="list-group-item items-start !border-0 mb-2">
                                            <Link href="#!">
                                                <div className="flex w-full justify-between">
                                                    <div>
                                                        <span className="badge bg-info text-white me-4">Processing</span>
                                                    </div>
                                                    <div className="billing-invoice-details">
                                                        <span className="mb-0 font-semibold me-2">Invoice #A12-005 _ <span className="text-[0.75rem] ">$1,938</span></span>
                                                        <span className="small text-[#8c9097] dark:text-white/50 text-[0.6875rem] block">Nov 24,2022</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-group-item items-start !border-0 mb-2">
                                            <Link href="#!">
                                                <div className="flex w-full justify-between">
                                                    <div>
                                                        <span className="badge bg-success text-white me-4">Sent</span>
                                                    </div>
                                                    <div className="billing-invoice-details">
                                                        <span className="mb-0 font-semibold me-2">Invoice #A12-006 _ <span className="text-[0.75rem]">$1,098</span></span>
                                                        <span className="small text-[#8c9097] dark:text-white/50 text-[0.6875rem] block">Nov 28,2022</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-group-item items-start !border-0 mb-2">
                                            <Link href="#!">
                                                <div className="flex w-full justify-between">
                                                    <div>
                                                        <span className="badge bg-warning text-white me-4">Pending</span>
                                                    </div>
                                                    <div className="billing-invoice-details">
                                                        <span className="mb-0 font-semibold me-2">Invoice #A12-007 _ <span className="text-[0.75rem] ">$3,672</span></span>
                                                        <span className="small text-[#8c9097] dark:text-white/50 text-[0.6875rem] block">Dec 20,2022</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-group-item items-start !border-0 mb-2">
                                            <Link href="#!">
                                                <div className="flex w-full justify-between">
                                                    <div>
                                                        <span className="badge bg-info text-white me-4">Processing</span>
                                                    </div>
                                                    <div className="billing-invoice-details">
                                                        <span className="mb-0 font-semibold me-2">Invoice #A12-008 _ <span className="text-[0.75rem] ">$4,362</span></span>
                                                        <span className="small text-[#8c9097] dark:text-white/50 text-[0.6875rem] block">Dec 16,2022</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-group-item items-start !border-0 mb-2">
                                            <Link href="#!">
                                                <div className="flex w-full justify-between">
                                                    <div>
                                                        <span className="badge bg-success text-white me-4">Sent</span>
                                                    </div>
                                                    <div className="billing-invoice-details">
                                                        <span className="mb-0 font-semibold me-2">Invoice #A12-009 _ <span className="text-[0.75rem] ">$2,389</span></span>
                                                        <span className="small text-[#8c9097] dark:text-white/50 text-[0.6875rem] block">Dec 10,2022</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-group-item items-start !border-0">
                                            <Link href="#!">
                                                <div className="flex w-full justify-between">
                                                    <div>
                                                        <span className="badge bg-success text-white me-4">Sent</span>
                                                    </div>
                                                    <div className="billing-invoice-details">
                                                        <span className="mb-0 font-semibold me-2">Invoice #A12-002 _ <span className="text-[0.75rem] ">$4,390</span></span>
                                                        <span className="small text-[#8c9097] dark:text-white/50 text-[0.6875rem] block">Nov 30,2022</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-pane hidden !border-0 !p-0" id="Revenue" aria-labelledby="Revenue-item" role="tabpanel">
                                    <ul className="list-group border-0 py-2">
                                        <li className="list-group-item items-start !border-0 mb-1">
                                            <Link href="#!">
                                                <div className="flex w-full justify-between">
                                                    <p className="mb-0 font-semibold">Order Picking</p>
                                                    <p className="mb-0 font-semibold text-success text-[0.875rem]">+$3,876</p>
                                                </div>
                                                <div className="flex w-full justify-between">
                                                    <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem]"><i className="ri-arrow-up-fill align-middle text-success me-1"></i> <span className="text-success me-2">03%</span></span>
                                                    <span className="text-[#8c9097] dark:text-white/50  text-[0.6875rem]">5 days ago</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-group-item flex-col items-start !border-0 mb-1">
                                            <Link href="#!">
                                                <div className="flex w-full justify-between">
                                                    <p className="mb-0 font-semibold">Storage</p>
                                                    <p className="mb-0 font-semibold text-danger text-[0.875rem]">-$2,178</p>
                                                </div>
                                                <div className="flex w-full justify-between">
                                                    <span className="text-[#8c9097] dark:text-white/50  text-[0.75rem]"><i className="ri-arrow-down-fill align-middle text-danger me-1"></i><span className="text-danger"> 16%</span></span>
                                                    <span className="text-[#8c9097] dark:text-white/50  text-[0.6875rem]">2 days ago</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-group-item flex-col items-start !border-0 mb-1">
                                            <Link href="#!">
                                                <div className="flex w-full justify-between">
                                                    <p className="mb-0 font-semibold">Shipping</p>
                                                    <p className="mb-0 font-semibold text-success text-[0.875rem]">+$1,367</p>
                                                </div>
                                                <div className="flex w-full justify-between">
                                                    <span className="text-[#8c9097] dark:text-white/50  text-[0.75rem]"><i className="ri-arrow-up-fill align-middle text-success me-1"></i><span className="text-success"> 06%</span></span>
                                                    <span className="text-[#8c9097] dark:text-white/50  text-[0.6875rem]">1 days ago</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-group-item flex-col items-start !border-0 mb-1">
                                            <Link href="#!">
                                                <div className="flex w-full justify-between">
                                                    <p className="mb-0 font-semibold">Receiving</p>
                                                    <p className="mb-0 font-semibold text-danger text-sm">-$678</p>
                                                </div>
                                                <div className="flex w-full justify-between">
                                                    <span className="text-[#8c9097] dark:text-white/50  text-[0.75rem]"><i className="ri-arrow-down-fill align-middle text-danger me-1"></i><span className="text-danger"> 25%</span></span>
                                                    <span className="text-[#8c9097] dark:text-white/50  text-[0.6875rem]">10 days ago</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-group-item flex-col items-start !border-0 mb-1">
                                            <Link href="#!">
                                                <div className="flex w-full justify-between">
                                                    <p className="mb-0 font-semibold">Review</p>
                                                    <p className="mb-0 font-semibold text-success text-sm">+$578</p>
                                                </div>
                                                <div className="flex w-full justify-between">
                                                    <span className="text-[#8c9097] dark:text-white/50  text-[0.75rem]"><i className="ri-arrow-up-fill align-middle text-success me-1"></i><span className="text-success"> 55%</span></span>
                                                    <span className="text-[#8c9097] dark:text-white/50  text-[0.6875rem]">11 days ago</span>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-group-item flex-col items-start !border-0 mb-0">
                                            <Link href="#!">
                                                <div className="flex w-full justify-between">
                                                    <p className="mb-0 font-semibold">Profit</p>
                                                    <p className="mb-0 font-semibold text-success text-sm">+$27,215</p>
                                                </div>
                                                <div className="flex w-full justify-between">
                                                    <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem]"><i className="ri-arrow-up-fill align-middle text-success me-1"></i><span className="text-success"> 32%</span></span>
                                                    <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">11 days ago</span>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Sale Value
                            </div>
                            <div className="hs-dropdown ti-dropdown">
                                <Link aria-label="anchor" href="#!"
                                    className="flex items-center justify-center w-[1.75rem] h-[1.75rem] !!text-defaulttextcolortextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                                    aria-expanded="false"><i
                                        className="fe fe-more-vertical text-[0.8rem]"></i>
                                </Link>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        href="#!">Action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        href="#!">Another action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        href="#!">Something else here</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="box-body !p-0 px-1">
                            <div id="sale-value" className="p-5">
                                <Salevalue />
                            </div>
                            <div className="grid grid-cols-12 pt-3 ">
                                <div className="xl:col-span-12  col-span-12 border-b dark:border-defaultborder/10 pb-5 text-center flex flex-wrap justify-center"><span className="font-semibold ms-2 text-primary px-4">60% Increase in sale value since last week</span></div>
                                <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-6 border-e dark:border-defaultborder/10 p-4 text-center">
                                    <p className="mb-1">Sale Items</p>
                                    <h5 className="mb-1 font-semibold">567</h5>
                                    <p className="text-[0.6875rem] text-[#8c9097] dark:text-white/50 mb-0">Increased<span className="text-success ms-2"><i className="ri-arrow-up-s-line me-2 font-bold align-middle inline-block"></i><span className="badge bg-success/10 text-success !text-[0.6875rem]">0.9%</span></span></p>
                                </div>
                                <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-6  p-4 text-center">
                                    <p className="mb-1">Sale Revenue</p>
                                    <h5 className="mb-1 font-semibold">$11,197</h5>
                                    <p className="text-[0.6875rem] text-[#8c9097] dark:text-white/50 mb-0">Profit<span className="text-success ms-2"><i className="ri-arrow-down-s-line me-2 font-bold align-middle inline-block"></i><span className="badge bg-success/10 text-success !text-[0.6875rem]">0.15%</span></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">Profitable Categories</div>
                            <div className="hs-dropdown ti-dropdown">
                                <Link aria-label="anchor" href="#!"
                                    className="flex items-center justify-center w-[1.75rem] h-[1.75rem] !!text-defaulttextcolortextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                                    aria-expanded="false"><i
                                        className="fe fe-more-vertical text-[0.8rem]"></i>
                                </Link>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        href="#!">Action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        href="#!">Another action</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                        href="#!">Something else here</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="box-body">
                            <ul className="mb-0 !rounded-[0.375rem]">
                                <li className="list-group-item">
                                    <div className="flex items-center">
                                        <div className="me-2">
                                            <span className="avatar avatar-sm bg-light !text-defaulttextcolor font-semibold !mb-0">
                                                1
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <p className="mb-0 font-semibold">Clothing</p>
                                        </div>
                                        <div>
                                            <span className="text-success">$123.45M</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center">
                                        <div className="me-2">
                                            <span className="avatar avatar-sm bg-light !text-defaulttextcolor font-semibold !mb-0">
                                                2
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <p className="mb-0 font-semibold">Electronics</p>
                                        </div>
                                        <div>
                                            <span className="text-success">$765.89K</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center">
                                        <div className="me-2">
                                            <span className="avatar avatar-sm bg-light !text-defaulttextcolor font-semibold !mb-0">
                                                3
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <p className="mb-0 font-semibold">Grocery</p>
                                        </div>
                                        <div>
                                            <span className="text-success">$289.00M</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center">
                                        <div className="me-2">
                                            <span className="avatar avatar-sm bg-light !text-defaulttextcolor font-semibold !mb-0">
                                                4
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <p className="mb-0 font-semibold">Mobiles</p>
                                        </div>
                                        <div>
                                            <span className="text-success">$662.97K</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center">
                                        <div className="me-2">
                                            <span className="avatar avatar-sm bg-light !text-defaulttextcolor font-semibold !mb-0">
                                                5
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <p className="mb-0 font-semibold">Kitchen Appliances</p>
                                        </div>
                                        <div>
                                            <span className="text-success">$1.2B</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center">
                                        <div className="me-2">
                                            <span className="avatar avatar-sm bg-light !text-defaulttextcolor font-semibold !mb-0">
                                                6
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <p className="mb-0 font-semibold">Automobiles</p>
                                        </div>
                                        <div>
                                            <span className="text-success">$109.23k</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item text-center !py-3">
                                    <button type="button" className="ti-btn ti-btn-lg !mb-0 !text-[0.75rem] !font-semibold ti-btn-primary ti-btn-wave">See All Activity</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Orders
                            </div>
                            <div className="flex flex-wrap">
                                <div className="me-3 my-1">
                                    <input className="ti-form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <div className="hs-dropdown ti-dropdown !py-1">
                                    <Link href="#!"
                                        className="ti-btn ti-btn-primary !py-1 !bg-primary !text-white !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium"
                                        aria-expanded="false">
                                        Sort By<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                    </Link>
                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            href="#!">New</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            href="#!">Popular</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            href="#!">Relevant</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="table-responsive">
                                <table className="table whitespace-nowrap table-bordered min-w-full">
                                    <thead>
                                        <tr>
                                            <td>
                                                <span>
                                                    <input className="form-check-input" type="checkbox" id="order_1" value="" aria-label="..." />
                                                </span>
                                            </td>
                                            <th scope="col" className="text-start">Order Id </th>
                                            <th scope="col" className="text-start">Customer</th>
                                            <th scope="col" className="text-start">Quantity</th>
                                            <th scope="col" className="text-start">Price</th>
                                            <th scope="col" className="text-start">Status</th>
                                            <th scope="col" className="text-start">Ordered Date</th>
                                            <th scope="col" className="text-start">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Trendingorders.map((idx) => (
                                            <tr className="border-t border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10" key={Math.random()}>
                                                <td>
                                                    <span>
                                                        <input className="form-check-input" type="checkbox" id="order_2" value="" aria-label="..." />
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="text-success font-semibold">{idx.orderid}</span>
                                                </td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <div className="me-2 lh-1">
                                                            <span className="avatar avatar-sm">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="text-sm">{idx.name}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {idx.quantity}
                                                </td>
                                                <td>
                                                    <span className="font-semibold text-sm">{idx.price}</span>
                                                </td>
                                                <td>
                                                    <span className={`badge bg-${idx.bg} text-${idx.color}`}>{idx.status}</span>
                                                </td>
                                                <td>
                                                    <span className="text-muted">{idx.date}</span>
                                                </td>
                                                <td>
                                                    <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                        <Link aria-label="anchor" href="#!"
                                                            className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-success/10 text-success hover:bg-success hover:text-white hover:border-success"><i
                                                                className="ri-download-2-line"></i></Link>
                                                        <Link aria-label="anchor" href="#!"
                                                            className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-primary/10 text-primary hover:bg-primary hover:text-white hover:border-primary"><i
                                                                className="ri-edit-line"></i></Link>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="box-footer">
                            <div className="sm:flex items-center">
                                <div>
                                    Showing 5 Entries <i className="bi bi-arrow-right ms-2 font-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="ti-pagination mb-0">
                                            <li className="page-item disabled">
                                                <Link className="page-link" href="#!">
                                                    Prev
                                                </Link>
                                            </li>
                                            <li className="page-item"><Link className="page-link active" href="#!">1</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
                                            <li className="page-item">
                                                <Link className="page-link !text-primary" href="#!">
                                                    next
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Sales.layout = "Contentlayout"

export default Sales