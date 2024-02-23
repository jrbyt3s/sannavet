import { Candidatesdata, Recentemployers, Registersbycountry, Subscriptions, TopCompanies } from '@/shared/data/dashboards/jobsdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar';

const Jobs = () => {

    // for User search function
    const [Data, setData] = useState(Recentemployers);

    const userdata = [];

    const myfunction = (idx) => {
        let Data;
        for (Data of Recentemployers) {
            if (Data.name[0] == " ") {
                Data.name = Data.name.trim();
            }
            if (Data.name.toLowerCase().includes(idx.toLowerCase())) {
                if (Data.name.toLowerCase().startsWith(idx.toLowerCase())) {
                    userdata.push(Data);
                }
            }

        }
        setData(userdata);
    };

    return (
        <Fragment>
            <Seo title={"Jobs"} />
            <Pageheader currentpage="Jobs" activepage="Dashboards" mainpage="Jobs" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxxl:col-span-6 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xxl:col-span-4 md:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-body !pb-[0.9rem]">
                                    <div className="flex items-start">
                                        <div className="me-4 gap-0">
                                            <span className="avatar avatar-md p-2 bg-primary">
                                                <svg className="svg-white" xmlns="http://www.w3.org/2000/svg"
                                                    height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                                    <path
                                                        d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex mb-1 items-start justify-between">
                                                <h5 className="font-semibold mb-0 leading-none text-[1.25rem]">256</h5>
                                                <div className="text-danger font-semibold"><i
                                                    className="ri-arrow-down-s-fill me-1 align-middle"></i>-1.05%</div>
                                            </div>
                                            <p className="mb-0 text-[0.625rem] opacity-[0.7] text-[#8c9097] dark:text-white/50 font-semibold">TOTAL EMPLOYERS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-4 md:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-body !pb-[0.9rem]">
                                    <div className="flex items-start">
                                        <div className="me-4">
                                            <span className="avatar avatar-md p-2 bg-secondary">
                                                <svg className="svg-white" xmlns="http://www.w3.org/2000/svg"
                                                    enableBackground="new 0 0 24 24" height="24px"
                                                    viewBox="0 0 24 24" width="24px" fill="#000000">
                                                    <rect fill="none" height="24" width="24" />
                                                    <g>
                                                        <path
                                                            d="M4,13c1.1,0,2-0.9,2-2c0-1.1-0.9-2-2-2s-2,0.9-2,2C2,12.1,2.9,13,4,13z M5.13,14.1C4.76,14.04,4.39,14,4,14 c-0.99,0-1.93,0.21-2.78,0.58C0.48,14.9,0,15.62,0,16.43V18l4.5,0v-1.61C4.5,15.56,4.73,14.78,5.13,14.1z M20,13c1.1,0,2-0.9,2-2 c0-1.1-0.9-2-2-2s-2,0.9-2,2C18,12.1,18.9,13,20,13z M24,16.43c0-0.81-0.48-1.53-1.22-1.85C21.93,14.21,20.99,14,20,14 c-0.39,0-0.76,0.04-1.13,0.1c0.4,0.68,0.63,1.46,0.63,2.29V18l4.5,0V16.43z M16.24,13.65c-1.17-0.52-2.61-0.9-4.24-0.9 c-1.63,0-3.07,0.39-4.24,0.9C6.68,14.13,6,15.21,6,16.39V18h12v-1.61C18,15.21,17.32,14.13,16.24,13.65z M8.07,16 c0.09-0.23,0.13-0.39,0.91-0.69c0.97-0.38,1.99-0.56,3.02-0.56s2.05,0.18,3.02,0.56c0.77,0.3,0.81,0.46,0.91,0.69H8.07z M12,8 c0.55,0,1,0.45,1,1s-0.45,1-1,1s-1-0.45-1-1S11.45,8,12,8 M12,6c-1.66,0-3,1.34-3,3c0,1.66,1.34,3,3,3s3-1.34,3-3 C15,7.34,13.66,6,12,6L12,6z" />
                                                    </g>
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex mb-1 items-start justify-between">
                                                <h5 className="font-semibold mb-0 leading-none text-[1.25rem]">4,026</h5>
                                                <div className="text-success font-semibold"><i
                                                    className="ri-arrow-up-s-fill me-1 align-middle"></i>+0.40%</div>
                                            </div>
                                            <p className="mb-0 text-[0.625rem] opacity-[0.7] text-[#8c9097] dark:text-white/50  font-semibold">TOTAL CANDIDATES</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="xxl:col-span-4 md:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-body !pb-[0.9rem]">
                                    <div className="flex items-start">
                                        <div className="me-3">
                                            <span className="avatar avatar-md p-2 bg-warning">
                                                <svg className="svg-white" xmlns="http://www.w3.org/2000/svg"
                                                    height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                                    <path
                                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-.61.08-1.21.21-1.78L8.99 15v1c0 1.1.9 2 2 2v1.93C7.06 19.43 4 16.07 4 12zm13.89 5.4c-.26-.81-1-1.4-1.9-1.4h-1v-3c0-.55-.45-1-1-1h-6v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41C17.92 5.77 20 8.65 20 12c0 2.08-.81 3.98-2.11 5.4z" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex mb-1 items-start justify-between">
                                                <h5 className="font-semibold mb-0 leading-none text-[1.25rem]">48</h5>
                                                <div className="text-success font-semibold"><i
                                                    className="ri-arrow-up-s-fill me-1 align-middle"></i>+0.82%</div>
                                            </div>
                                            <p className="mb-0 text-[0.625rem] opacity-[0.7] text-[#8c9097] dark:text-white/50 font-semibold">TOTAL LOCATIONS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="xxl:col-span-4 md:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-body !pb-[0.9rem]">
                                    <div className="flex items-start">
                                        <div className="me-3">
                                            <span className="avatar avatar-md p-2 bg-success">
                                                <svg className="svg-white" xmlns="http://www.w3.org/2000/svg"
                                                    enableBackground="new 0 0 24 24" height="24px"
                                                    viewBox="0 0 24 24" width="24px" fill="#000000">
                                                    <g>
                                                        <rect fill="none" height="24" width="24" />
                                                    </g>
                                                    <g>
                                                        <g>
                                                            <path
                                                                d="M9,14c1.65,0,3-1.35,3-3s-1.35-3-3-3s-3,1.35-3,3S7.35,14,9,14z M9,10c0.54,0,1,0.46,1,1s-0.46,1-1,1s-1-0.46-1-1 S8.46,10,9,10z" />
                                                            <path
                                                                d="M22,3H2C0.9,3,0,3.9,0,5v14c0,1.1,0.9,2,2,2h20c1.1,0,1.99-0.9,1.99-2L24,5C24,3.9,23.1,3,22,3z M4.54,19 c1.1-1.22,2.69-2,4.46-2s3.36,0.78,4.46,2H4.54z M22,19h-6.08c-1.38-2.39-3.96-4-6.92-4s-5.54,1.61-6.92,4H2V5h20V19z" />
                                                            <polygon
                                                                points="15.78,11.15 17.25,10.3 17.25,12 18.75,12 18.75,10.3 20.22,11.15 20.97,9.85 19.5,9 20.97,8.15 20.22,6.85 18.75,7.7 18.75,6 17.25,6 17.25,7.7 15.78,6.85 15.03,8.15 16.5,9 15.03,9.85" />
                                                        </g>
                                                    </g>
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex mb-1 items-start justify-between">
                                                <h5 className="font-semibold mb-0 leading-none text-[1.25rem]">1,116</h5>
                                                <div className="text-success font-semibold"><i
                                                    className="ri-arrow-up-s-fill me-1 align-middle"></i>+0.21%</div>
                                            </div>
                                            <p className="mb-0 text-[0.625rem] opacity-[0.7] text-[#8c9097] dark:text-white/50 font-semibold">TOTAL RECRUITERS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-4 md:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-body !pb-[0.9rem]">
                                    <div className="flex items-start">
                                        <div className="me-3">
                                            <span className="avatar avatar-md p-2 bg-pink">
                                                <svg className="svg-white" xmlns="http://www.w3.org/2000/svg"
                                                    height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                                                    <path d="M0 0h24v24H0V0z" fill="none" />
                                                    <path
                                                        d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z" />
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex mb-1 items-start justify-between">
                                                <h5 className="font-semibold mb-0 leading-none text-[1.25rem]">1,468</h5>
                                                <div className="text-danger font-semibold"><i
                                                    className="ri-arrow-down-s-fill me-1 align-middle"></i>-0.153%</div>
                                            </div>
                                            <p className="mb-0 text-[0.625rem] opacity-[0.7] text-[#8c9097] dark:text-white/50 font-semibold">TOTAL SUBSCRIPTIONS</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="xxl:col-span-4 md:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-body !pb-[0.9rem]">
                                    <div className="flex items-start">
                                        <div className="me-3">
                                            <span className="avatar avatar-md p-2 bg-pink">
                                                <svg className="svg-white" xmlns="http://www.w3.org/2000/svg"
                                                    enableBackground="new 0 0 24 24" height="24px"
                                                    viewBox="0 0 24 24" width="24px" fill="#000000">
                                                    <g>
                                                        <rect fill="none" height="24" width="24" />
                                                        <g>
                                                            <path
                                                                d="M19,5v14H5V5H19 M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3L19,3z" />
                                                        </g>
                                                        <path
                                                            d="M14,17H7v-2h7V17z M17,13H7v-2h10V13z M17,9H7V7h10V9z" />
                                                    </g>
                                                </svg>
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex mb-1 items-start justify-between">
                                                <h5 className="font-semibold mb-0 leading-none text-[1.25rem]">34%</h5>
                                                <div className="text-success font-semibold"><i
                                                    className="ri-arrow-up-s-fill me-1 align-middle"></i>+0.165%</div>
                                            </div>
                                            <p className="mb-0  text-[0.625rem] opacity-[0.7] text-[#8c9097] dark:text-white/50 font-semibold">RESSUME UPLOAD RATIO</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12">
                            <div className="box overflow-hidden">
                                <div className="box-header justify-between">
                                    <div className="box-title">Subscriptions Overview</div>
                                    <div className="hs-dropdown ti-dropdown">
                                        <Link href="#!" className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
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
                                <div className="box-body !p-0">
                                    <div className="grid grid-cols-12 border-bottom border-block-end-dashed">
                                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-12">
                                            <div className="p-3 sm:border-e !border-0 sm:text-start text-center">
                                                <p className="text-[1.25rem] font-semibold mb-0">1,117</p>
                                                <p className="mb-0 text-[#8c9097] dark:text-white/50">Total Subscriptions</p>
                                            </div>
                                        </div>
                                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-12">
                                            <div className="p-3 sm:border-e !border-0 sm:text-start text-center">
                                                <p className="text-[1.25rem] font-semibold mb-0"><span className="basic-subscription">742</span></p>
                                                <p className="mb-0 text-[#8c9097] dark:text-white/50">Basic Subscriptions</p>
                                            </div>
                                        </div>
                                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-12">
                                            <div className="p-3 sm:text-start !border-0 text-center">
                                                <p className="text-[1.25rem] font-semibold mb-0"><span className="pro-subscription">259</span></p>
                                                <p className="mb-0 text-[#8c9097] dark:text-white/50">Pro Subscriptions</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="subscriptionOverview" className="px-3 sm:mt-0 mt-3">
                                        <Subscriptions />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="xxxl:col-span-6 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xxl:col-span-6 col-span-12">
                            <div className="box overflow-hidden">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Recent Jobs
                                    </div>
                                    <div className="hs-dropdown ti-dropdown">
                                        <Link href="#!" className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
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
                                <div className="box-body !p-0 ">
                                    <ul className="list-group list-group-flush max-h-[22.5rem] overflow-auto" id="recent-jobs">
                                        <li className="list-group-item !border-t-0 !border-s-0 !border-e-0">
                                            <Link href="#!">
                                                <div className="flex items-center">
                                                    <div className="me-2 leading-none">
                                                        <span className="!text-primary inline-flex items-center justify-center avatar avatar-md avatar-rounded bg-primary/10">
                                                            AC
                                                        </span>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <p className="mb-0 font-semibold">Ui Developer</p>
                                                        <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-0">Achies - 12 hrs ago</p>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-0 text-[0.75rem]">Full Time</p>
                                                        <span className="badge bg-success/10 !text-success">Fresher</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-group-item !border-x-0">
                                            <Link href="#!">
                                                <div className="flex items-center">
                                                    <div className="me-2 leading-none">
                                                        <span className="!text-secondary inline-flex items-center justify-center avatar  avatar-md avatar-rounded bg-secondary/10">
                                                            SI
                                                        </span>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <p className="mb-0 font-semibold">AWS Engineer</p>
                                                        <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-0">Siachles - 2 hrs ago</p>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-0 text-[0.75rem]">Part Time</p>
                                                        <span className="badge bg-info/10 text-info">+1 yrs - Experience</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-group-item !border-x-0">
                                            <Link href="#!">
                                                <div className="flex items-center">
                                                    <div className="me-2 leading-none">
                                                        <span className="!text-white inline-flex items-center justify-center avatar avatar-md avatar-rounded bg-success">
                                                            LS
                                                        </span>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <p className="mb-0 font-semibold">React Developer</p>
                                                        <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-0">LifeSpace - 6 hrs ago</p>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-0 text-[0.75rem] text-primary font-semibold">Freelancer</p>
                                                        <span className="badge bg-success/10 text-success">Fresher</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-group-item !border-x-0">
                                            <Link href="#!">
                                                <div className="flex items-center">
                                                    <div className="me-2 leading-none">
                                                        <span className="!text-warning inline-flex items-center justify-center avatar avatar-md avatar-rounded bg-warning/10">
                                                            MS
                                                        </span>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <p className="mb-0 font-semibold">Angular Developer</p>
                                                        <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-0">MegaSoft - 14 hrs ago</p>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-0 text-[0.75rem]">Full Time</p>
                                                        <span className="badge bg-info/10 text-info">+2 yrs - Experience</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-group-item !border-x-0">
                                            <Link href="#!">
                                                <div className="flex items-center">
                                                    <div className="me-2 leading-none">
                                                        <span className="!text-danger inline-flex items-center justify-center avatar avatar-md avatar-rounded bg-danger/10">
                                                            J
                                                        </span>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <p className="mb-0 font-semibold">UI Tester</p>
                                                        <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-0">Joggle - 2 days ago</p>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-0 text-[0.75rem]">Full Time</p>
                                                        <span className="badge bg-info/10 text-info">+3 yrs - Experience</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="list-group-item !border-s-0 !border-e-0 !border-b-0">
                                            <Link href="#!">
                                                <div className="flex items-center">
                                                    <div className="me-2 leading-none">
                                                        <span className="inline-flex items-center justify-center !text-info avatar avatar-md avatar-rounded bg-info/10">
                                                            NL
                                                        </span>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <p className="mb-0 font-semibold">Php - Laravel Develope</p>
                                                        <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-0">Nirlog - 2 days ago</p>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-0 text-[0.75rem]">Part Time Time</p>
                                                        <span className="badge bg-success/10 text-success">Fresher</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </div>
                        <div className="xxl:col-span-6 col-span-12">
                            <div className="box overflow-hidden">
                                <div className="box-header justify-between">
                                    <div className="box-title">Candidates</div>
                                    <div className="hs-dropdown ti-dropdown">
                                        <Link href="#!" className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
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
                                <div className="box-body !p-0">
                                    <div id="candidates-chart" className="p-3">
                                        <Candidatesdata />
                                    </div>
                                    <div className="grid grid-cols-2 border-t border-dashed dark:border-defaultborder/10">
                                        <div className="col">
                                            <div className="!p-4 border-e border-dashed dark:border-defaultborder/10">
                                                <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem] text-center mb-1">Male Candidates
                                                </div>
                                                <div className="flex justify-center items-center"> <span
                                                    className="me-3 text-[1.625rem] font-semibold">1,234</span> <span
                                                        className="text-success font-semibold"><i
                                                            className="ri-arrow-up-s-fill align-middle me-1"></i>0.23%</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="!p-4">
                                                <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem] text-center mb-1">Female Candidates
                                                </div>
                                                <div className="flex justify-center items-center"> <span
                                                    className="me-3 text-[1.625rem] font-semibold">1,754</span> <span
                                                        className="text-danger font-semibold"><i
                                                            className="ri-arrow-down-s-fill align-middle me-1"></i>0.11%</span> </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Recent Recruiter Registrations
                                    </div>
                                    <div className="hs-dropdown ti-dropdown">
                                        <Link href="#!" className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
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
                                <div className="box-body !p-0 recruiter">
                                    <div className="sm:grid xxxl:grid-cols-3 xxl:grid-cols-2 md:grid-cols-3 ">
                                        <div className="col">
                                            <div className="p-4 md:border-e border-inline-e-dashed dark:border-white/10">
                                                <div className="flex items-start !mb-6">
                                                    <div className="me-2 leading-none">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../../assets/images/faces/4.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <div className="recent-recruiter">
                                                            <Link href="#!" className="font-semibold mb-0 text-truncate">Hr@Spruko</Link>
                                                            <p className="mb-0 text-[0.75rem] text-[#8c9097] dark:text-white/50 text-truncate">hr.spruko@gmail.com</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button aria-label="button" type="button" className="rtl:rotate-180 ti-btn ti-btn-sm ti-btn-light ti-btn-wave">
                                                            <i className="ri-arrow-right-s-line"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="flex items-start justify-between mb-2">
                                                    <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">
                                                        Vacancies
                                                    </div>
                                                    <div className="font-semibold">
                                                        07
                                                    </div>
                                                </div>
                                                <div className="flex items-start justify-between mb-0">
                                                    <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">
                                                        Position
                                                    </div>
                                                    <div>
                                                        <span className="badge text-info bg-info/10">Aws Engineer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="p-4 md:border-e border-inline-e-dashed dark:border-white/10">
                                                <div className="flex items-start !mb-6">
                                                    <div className="me-2 leading-none">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../../assets/images/faces/21.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <div className="recent-recruiter">
                                                            <Link href="#!" className="font-semibold mb-0 text-truncate">Hr@Nicero</Link>
                                                            <p className="mb-0 text-[0.75rem] text-[#8c9097] dark:text-white/50 text-truncate">nicero.help@gmail.com</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button type="button" aria-label="button" className="rtl:rotate-180 ti-btn ti-btn-sm ti-btn-light ti-btn-wave">
                                                            <i className="ri-arrow-right-s-line"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="flex items-start justify-between mb-2">
                                                    <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">
                                                        Vacancies
                                                    </div>
                                                    <div className="font-semibold">
                                                        16
                                                    </div>
                                                </div>
                                                <div className="flex items-start justify-between mb-0">
                                                    <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">
                                                        Position
                                                    </div>
                                                    <div>
                                                        <span className="badge bg-warning/10 text-warning">React Developer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="p-4">
                                                <div className="flex items-start !mb-6">
                                                    <div className="me-2 leading-none">
                                                        <span className="avatar avatar-md avatar-rounded">
                                                            <img src="../../../assets/images/faces/15.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="flex-grow">
                                                        <div className="recent-recruiter">
                                                            <Link href="#!" className="font-semibold mb-0 text-truncate">JosephSmith</Link>
                                                            <p className="mb-0 text-[0.75rem] text-[#8c9097] dark:text-white/50 text-truncate">josephsmith@gmail.com</p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button type="button" aria-label="button" className="rtl:rotate-180 ti-btn ti-btn-sm ti-btn-light ti-btn-wave">
                                                            <i className="ri-arrow-right-s-line"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="flex items-start justify-between mb-2">
                                                    <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">
                                                        Vacancies
                                                    </div>
                                                    <div className="font-semibold">
                                                        32
                                                    </div>
                                                </div>
                                                <div className="flex items-start justify-between mb-0">
                                                    <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">
                                                        Position
                                                    </div>
                                                    <div>
                                                        <span className="badge bg-primary/10 text-primary">UI Developer</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-4 col-span-12">
                    <div className="box overflow-hidden">
                        <div className="box-header">
                            <div className="box-title">
                                Registers By Country
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <div className="table-responsive">
                                <table className="table whitespace-nowrap min-w-full">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="text-start min-w-[130px]">Country</th>
                                            <th scope="col" className="text-start">Date</th>
                                            <th scope="col" className="text-start">Total Registers</th>
                                            <th scope="col" className="text-start">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Registersbycountry.map((idx) => (
                                            <tr className="border border-defaultborder dark:border-defaultborder/10 !border-x-0" key={Math.random()}>
                                                <th scope="row">
                                                    <div className="flex items-center">
                                                        <img src={idx.src} alt="" className="w-[1.25rem] h-[1.25rem] rounded-full me-2 leading-none" />
                                                        <div>
                                                            <span className="font-semibold">
                                                                {idx.city}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>{idx.date}</td>
                                                <td>{idx.total}</td>
                                                <td>
                                                    <button type="button" className=" ti-btn-success  !px-2 !py-1 rounded-sm ti-btn-wave ti-btn-sm">View</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="xxl:col-span-5 col-span-12">
                    <div className="box overflow-hidden">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Top Companies
                            </div>
                            <div className="hs-dropdown ti-dropdown">
                                <Link href="#!" className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
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
                        <div className="box-body !p-0">
                            <div className="table-responsive">
                                <table className="table table-hover whitespace-nowrap min-w-full">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="text-start">Name</th>
                                            <th scope="col" className="text-start">Subscription</th>
                                            <th scope="col" className="text-start">Total Employees</th>
                                            <th scope="col" className="text-start">Recruiter Since</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {TopCompanies.map((idx) => (
                                            <tr className="border hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10 border-defaultborder !border-x-0" key={Math.random()}>
                                                <th scope="col">
                                                    <div className="flex items-center">
                                                        <img src={idx.src} alt="" className="avatar avatar-md p-1 bg-light avatar-rounded me-2 !mb-0" />
                                                        <div>
                                                            <p className="font-semibold mb-0">{idx.text1}</p>
                                                            <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-0">Remote/Onsite</p>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td>
                                                    <span className={` badge text-${idx.color} bg-${idx.color}/10`}>{idx.text2}</span>
                                                </td>
                                                <td>{idx.total}</td>
                                                <td>{idx.date}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Acquisitions
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="progress progress-lg mb-6 flex w-full">
                                <div className="flex flex-col justify-center text-center text-[8px] text-white overflow-hidden rounded-s-sm bg-primary w-[52%]" aria-valuenow="52" aria-valuemin="0" aria-valuemax="100">52%</div>
                                <div className="flex flex-col justify-center text-center text-[8px] text-white overflow-hidden rounded-none bg-secondary w-[12%]" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100">12%</div>
                                <div className="flex flex-col justify-center text-center text-[8px] text-white overflow-hidden rounded-none bg-success w-[16%]" aria-valuenow="16" aria-valuemin="0" aria-valuemax="100">16%</div>
                                <div className="flex flex-col justify-center text-center text-[8px] text-white overflow-hidden rounded-none bg-warning w-[12%]" aria-valuenow="12" aria-valuemin="0" aria-valuemax="100">12%</div>
                                <div className="flex flex-col justify-center text-center text-[8px] text-white overflow-hidden rounded-e-sm bg-danger w-[8%]" aria-valuenow="8" aria-valuemin="0" aria-valuemax="100">8%</div>
                            </div>
                            <ul className="list-group">
                                <li className="list-group-item !py-3">
                                    Total Applications
                                    <span className="badge ltr:float-right rtl:float-left bg-primary/10 text-primary">1,982</span>
                                </li>
                                <li className="list-group-item !py-3">
                                    Recruited
                                    <span className="badge ltr:float-right rtl:float-left bg-secondary/10 text-secondary">214</span>
                                </li>
                                <li className="list-group-item !py-3">
                                    Short Listed
                                    <span className="badge ltr:float-right rtl:float-left bg-success/10 text-success">262</span>
                                </li>
                                <li className="list-group-item !py-3">
                                    Rejected
                                    <span className="badge ltr:float-right rtl:float-left bg-warning/10 text-warning">395</span>
                                </li>
                                <li className="list-group-item !py-3 flex-grow">
                                    Blocked
                                    <span className="badge ltr:float-right rtl:float-left bg-danger/10 text-danger m-auto">79</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
                    <div className="box box-card">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Recent Employers
                            </div>
                            <div className="sm:flex">
                                <div className="me-3 mb-2 sm:mb-0">
                                    <input className="ti-form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" onChange={(ele) => { myfunction(ele.target.value); }} />
                                </div>
                                <div className="hs-dropdown ti-dropdown">
                                    <Link href="#!"
                                        className="ti-btn ti-btn-primary-full !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium  !hover:text-white"
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
                                <table className="table whitespace-nowrap table-hover border table-bordered min-w-full">
                                    <thead>
                                        <tr>
                                            <th scope="row" className="ps-6"><input className="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..." /></th>
                                            <th scope="col" className="text-start">Employer</th>
                                            <th scope="col" className="text-start">Category</th>
                                            <th scope="col" className="text-start">Role</th>
                                            <th scope="col" className="text-start">Mail</th>
                                            <th scope="col" className="text-start">Location</th>
                                            <th scope="col" className="text-start">Date</th>
                                            <th scope="col" className="text-start">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Data.map((idx) => (
                                            <tr className="border hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10 border-defaultborder !border-x-0" key={Math.random()}>
                                                <th scope="row" className="ps-6"><input className="form-check-input" type="checkbox" id="checkboxNoLabel12" defaultChecked={idx.checked === 'defaultChecked'} value="" aria-label="..." /></th>
                                                <td>
                                                    <div className="flex items-center font-semibold">
                                                        <span className="avatar avatar-sm me-2 avatar-rounded">
                                                            <img src={idx.src} alt="img" />
                                                        </span>{idx.name}
                                                    </div>
                                                </td>
                                                <td>{idx.place}</td>
                                                <td><span className={`badge bg-${idx.color}/10 text-${idx.color}`}>{idx.role}</span></td>
                                                <td>{idx.mail}</td>
                                                <td>
                                                    <div className="inline-flex items-center">
                                                        <i className="ri-map-pin-fill text-[#8c9097] dark:text-white/50 text-[0.625rem]"></i>
                                                        <span className="ms-1">{idx.location}</span>
                                                    </div>
                                                </td>
                                                <td>{idx.date}</td>
                                                <td>
                                                    <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                        <Link aria-label="anchor" href="#!"
                                                            className="ti-btn ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-success/10 text-success hover:bg-success hover:text-white hover:border-success"><i
                                                                className="ri-download-2-line"></i></Link>
                                                        <Link aria-label="anchor" href="#!"
                                                            className="ti-btn ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-primary/10 text-primary hover:bg-primary hover:text-white hover:border-primary"><i
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

            </div>
        </Fragment>
    )
}
Jobs.layout = "Contentlayout"

export default Jobs