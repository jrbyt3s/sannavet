import { Courselist, Earningsreport, Payouts } from '@/shared/data/dashboards/coursedata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React, { Fragment } from 'react'

const Courses = () => {
    return (
        <Fragment>
            <Seo title={"Courses"} />
            <Pageheader currentpage="Courses" activepage="Dashboards" mainpage="Courses" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-7 xl:col-span-7 lg:col-span-12  col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Top Categories
                                    </div>
                                    <div>
                                        <button type="button" className="ti-btn ti-btn-light !py-1 !text-[0.75rem] !px-2">View All</button>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="grid grid-cols-12 xl:gap-y-0 gap-4">
                                        <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12">
                                            <div>
                                                <Link href="#!" className="category-link primary text-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="category-svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0V0z" fill="none"></path><path d="M5 5h4v6H5zm10 8h4v6h-4zM5 17h4v2H5zM15 5h4v2h-4z" opacity=".3"></path><path d="M3 13h8V3H3v10zm2-8h4v6H5V5zm8 16h8V11h-8v10zm2-8h4v6h-4v-6zM13 3v6h8V3h-8zm6 4h-4V5h4v2zM3 21h8v-6H3v6zm2-4h4v2H5v-2z"></path></svg>
                                                    <p className="text-[0.875rem] mb-1 text-default font-semibold text-defaulttextcolor">UI/UX Design</p>
                                                    <span className="text-[.6875rem] text-[#8c9097] dark:text-white/50">1000+ Courses</span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12">
                                            <div>
                                                <Link href="#!" className="category-link secondary text-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="category-svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><g><rect fill="none" height="24" width="24"></rect></g><g><g opacity=".3"><path d="M6.71,18.71c-0.28,0.28-2.17,0.76-2.17,0.76s0.47-1.88,0.76-2.17C5.47,17.11,5.72,17,6,17c0.55,0,1,0.45,1,1 C7,18.28,6.89,18.53,6.71,18.71z M7.41,10.83L5.5,10.01l1.97-1.97l1.44,0.29C8.34,9.16,7.83,10.03,7.41,10.83z M13.99,18.5 l-0.82-1.91c0.8-0.42,1.67-0.93,2.49-1.5l0.29,1.44L13.99,18.5z M19.99,4.01c0,0-3.55-0.69-8.23,3.99 c-1.32,1.32-2.4,3.38-2.73,4.04l2.93,2.93c0.65-0.32,2.71-1.4,4.04-2.73C20.68,7.56,19.99,4.01,19.99,4.01z M15,11 c-1.1,0-2-0.9-2-2c0-1.1,0.9-2,2-2s2,0.9,2,2C17,10.1,16.1,11,15,11z"></path></g><g><path d="M6,15c-0.83,0-1.58,0.34-2.12,0.88C2.7,17.06,2,22,2,22s4.94-0.7,6.12-1.88C8.66,19.58,9,18.83,9,18C9,16.34,7.66,15,6,15 z M6.71,18.71c-0.28,0.28-2.17,0.76-2.17,0.76s0.47-1.88,0.76-2.17C5.47,17.11,5.72,17,6,17c0.55,0,1,0.45,1,1 C7,18.28,6.89,18.53,6.71,18.71z M17.42,13.65L17.42,13.65c6.36-6.36,4.24-11.31,4.24-11.31s-4.95-2.12-11.31,4.24l-2.49-0.5 C7.21,5.95,6.53,6.16,6.05,6.63L2,10.69l5,2.14L11.17,17l2.14,5l4.05-4.05c0.47-0.47,0.68-1.15,0.55-1.81L17.42,13.65z M7.41,10.83L5.5,10.01l1.97-1.97l1.44,0.29C8.34,9.16,7.83,10.03,7.41,10.83z M13.99,18.5l-0.82-1.91 c0.8-0.42,1.67-0.93,2.49-1.5l0.29,1.44L13.99,18.5z M16,12.24c-1.32,1.32-3.38,2.4-4.04,2.73l-2.93-2.93 c0.32-0.65,1.4-2.71,2.73-4.04c4.68-4.68,8.23-3.99,8.23-3.99S20.68,7.56,16,12.24z M15,11c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2 S13.9,11,15,11z"></path></g></g></svg>
                                                    <p className="text-[0.875rem] mb-1 text-default font-semibold text-defaulttextcolor">Digital Marketing</p>
                                                    <span className="text-[.6875rem] text-[#8c9097] dark:text-white/50">90+ Courses</span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12">
                                            <div>
                                                <Link href="#!" className="category-link warning text-center">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="category-svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" id="swatchbook"><path opacity="0.2" d="M9 22H5a3.003 3.003 0 0 1-3-3V5a3.003 3.003 0 0 1 3-3h4a3.003 3.003 0 0 1 3 3v14a3.003 3.003 0 0 1-3 3z"></path><path opacity="0.4" d="m20.293 6.535-2.828-2.828a3.004 3.004 0 0 0-4.243 0l-1.229 1.228c0 .022.007.043.007.065v14c0 .027-.007.052-.008.08l8.301-8.302a3.004 3.004 0 0 0 0-4.243z"></path><circle cx="7" cy="17" r="1" opacity="1"></circle><path opacity="1" d="m19.065 12.007-7.073 7.072c0-.027.008-.052.008-.079a3.003 3.003 0 0 1-3 3h10a3.003 3.003 0 0 0 3-3v-4a3 3 0 0 0-2.935-2.993z"></path></svg>
                                                    <p className="text-[0.875rem] mb-1 text-default font-semibold text-defaulttextcolor">Web Development</p>
                                                    <span className="text-[.6875rem] text-[#8c9097] dark:text-white/50">250+ Courses</span>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12">
                                            <div>
                                                <Link href="#!" className="category-link success">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="category-svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><rect fill="none" height="24" width="24"></rect><g opacity=".3"><path d="M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"></path></g><g><path d="M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"></path></g></svg>
                                                    <p className="text-[0.875rem] mb-1 text-default font-semibold text-defaulttextcolor">Stocks &amp; Trading</p>
                                                    <span className="text-[.6875rem] text-[#8c9097] dark:text-white/50">100+ Courses</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">Earnings Report</div>
                                    <div className="inline-flex rounded-md shadow-sm" role="group" aria-label="Basic example">
                                        <button type="button"
                                            className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary-full !text-white !rounded-e-none">1M</button>
                                        <button type="button"
                                            className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary">6M</button>
                                        <button type="button"
                                            className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary">1Y</button>
                                        <button type="button"
                                            className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary !rounded-s-none">All</button>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div id="courses-earnings">
                                        <Earningsreport />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-5 xl:col-span-5 lg:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-body">
                                    <div className="flex flex-wrap items-start gap-2">
                                        <div className="me-1">
                                            <span className="avatar avatar-lg bg-primary">
                                                <i className="ti ti-wallet text-[1.25rem] text-white"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <h5 className="block font-semibold text-[1.125rem]">$98,312</h5>
                                            <div className="flex justify-between items-center">
                                                <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">YTD Earnings</div>
                                                <div className="text-success"><i className="ti ti-trending-up text-[1rem] me-1 align-middle inline-flex"></i>+2.02%</div>
                                            </div>
                                            <Link href="#!" className="text-primary text-[0.75rem]">View All<i className="ti ti-arrow-narrow-right ms-2 font-semibold inline-block"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-body">
                                    <div className="flex flex-wrap gap-2 items-start">
                                        <div className="me-1">
                                            <span className="avatar avatar-lg bg-secondary text-white">
                                                <i className="ti ti-users text-[1.25rem]"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <h5 className="block font-semibold text-[1.125rem] ">35,393</h5>
                                            <div className="flex justify-between items-center">
                                                <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">Total Students</div>
                                                <div className="text-danger"><i className="ti ti-trending-down text-[1rem] me-1 align-middle inline-flex"></i>-0.24%</div>
                                            </div>
                                            <Link href="#!" className="text-secondary text-[0.75rem]">View All<i className="ti ti-arrow-narrow-right ms-2 font-semibold inline-block"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-body">
                                    <div className="flex flex-wrap gap-2 items-start">
                                        <div className="me-1">
                                            <span className="avatar avatar-lg bg-warning text-white">
                                                <i className="ti ti-id text-[1.25rem]"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <h5 className="block font-semibold text-[1.125rem] ">573</h5>
                                            <div className="flex justify-between items-center">
                                                <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">Total Instructors</div>
                                                <div className="text-danger"><i className="ti ti-trending-down text-[1rem] me-1 align-middle inline-flex"></i>-1.32%</div>
                                            </div>
                                            <Link href="#!" className="text-warning text-[0.75rem]">View All<i className="ti ti-arrow-narrow-right ms-2 font-semibold inline-block"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-body">
                                    <div className="flex flex-wrap gap-2 items-start">
                                        <div className="me-1">
                                            <span className="avatar avatar-lg bg-danger text-white">
                                                <i className="ti ti-gift text-[1.25rem]"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <h5 className="block font-semibold text-[1.125rem] ">2,389</h5>
                                            <div className="flex justify-between items-center">
                                                <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">Total Courses</div>
                                                <div className="text-success"><i className="ti ti-trending-up text-[1rem] me-1 align-middle inline-flex"></i>+0.89%</div>
                                            </div>
                                            <Link href="#!" className="text-danger text-[0.75rem]">View All<i className="ti ti-arrow-narrow-right ms-2 font-semibold inline-block"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box overflow-hidden">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        My Courses
                                    </div>
                                    <div>
                                        <button type="button" className="ti-btn ti-btn-light !py-1 !text-[0.75rem] !px-2">View All</button>
                                    </div>
                                </div>
                                <div className="box-body !p-0">
                                    <div className="table-responsive">
                                        <table className="table whitespace-nowrap min-w-full">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="text-start">Course Title</th>
                                                    <th scope="col" className="text-start">Status</th>
                                                    <th scope="col" className="text-start">Duration</th>
                                                    <th scope="col" className="text-start">Type</th>
                                                    <th scope="col" className="text-start">Instructor</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-t border-defaultborder dark:border-defaultborder/10">
                                                    <th scope="row">
                                                        <div className="flex items-center">
                                                            <div className="me-2">
                                                                <span className="items-center"></span>
                                                            </div>
                                                            <div>
                                                                ui/ux Designing
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="flex items-center">
                                                            <div className="progress progress-xs  course-status-progress progress-animate me-2" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                                                <div className="progress-bar progress-bar-striped !bg-primary w-3/5"></div>
                                                            </div>
                                                            <div>60%</div>
                                                        </div>
                                                    </td>
                                                    <td>3 Months</td>
                                                    <td><span className="badge bg-outline-primary">Full Time</span></td>
                                                    <td>
                                                        <div className="flex items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <img src="../../../assets/images/faces/2.jpg" alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="font-semibold">Sarah Taylor</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="border-t border-defaultborder dark:border-defaultborder/10">
                                                    <th scope="row">
                                                        <div className="flex items-center">
                                                            <div className="me-2">
                                                                <span className="items-center"></span>
                                                            </div>
                                                            <div>
                                                                Project Management
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="flex items-center">
                                                            <div className="progress progress-xs course-status-progress progress-animate me-2" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                                                <div className="progress-bar progress-bar-striped !bg-success w-full"></div>
                                                            </div>
                                                            <div>100%</div>
                                                        </div>
                                                    </td>
                                                    <td>45 Days</td>
                                                    <td><span className="badge bg-outline-success">Completed</span></td>
                                                    <td>
                                                        <div className="flex items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <img src="../../../assets/images/faces/11.jpg" alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="font-semibold">Jason Smith</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="border-t border-defaultborder dark:border-defaultborder/10">
                                                    <th scope="row">
                                                        <div className="flex items-center">
                                                            <div className="me-2">
                                                                <span className="items-center"></span>
                                                            </div>
                                                            <div>
                                                                Python
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="flex items-center">
                                                            <div className="progress progress-xs course-status-progress progress-animate me-2" aria-valuenow="38" aria-valuemin="0" aria-valuemax="100">
                                                                <div className="progress-bar progress-bar-striped !bg-warning w-[38%]"></div>
                                                            </div>
                                                            <div>38%</div>
                                                        </div>
                                                    </td>
                                                    <td>90 Days</td>
                                                    <td><span className="badge bg-outline-warning">Part Time</span></td>
                                                    <td>
                                                        <div className="flex items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <img src="../../../assets/images/faces/14.jpg" alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="font-semibold">Alex Perira</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="border-t border-defaultborder dark:border-defaultborder/10">
                                                    <th scope="row">
                                                        <div className="flex items-center">
                                                            <div className="me-2">
                                                                <span className="items-center"></span>
                                                            </div>
                                                            <div>
                                                                Digital Marketing
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="flex items-center">
                                                            <div className="progress progress-xs course-status-progress progress-animate me-2" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                                                <div className="progress-bar progress-bar-striped !bg-info w-3/4"></div>
                                                            </div>
                                                            <div>75%</div>
                                                        </div>
                                                    </td>
                                                    <td>24 Days</td>
                                                    <td><span className="badge bg-outline-info">Week End</span></td>
                                                    <td>
                                                        <div className="flex items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <img src="../../../assets/images/faces/8.jpg" alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="font-semibold">Kamala Singh</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="border-t border-defaultborder dark:border-defaultborder/10">
                                                    <th scope="row">
                                                        <div className="flex items-center">
                                                            <div className="me-2">
                                                                <span className="items-center"></span>
                                                            </div>
                                                            <div>
                                                                Full Stack Development
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>
                                                        <div className="flex items-center">
                                                            <div className="progress progress-xs course-status-progress progress-animate me-2" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                                                                <div className="progress-bar progress-bar-striped !bg-primary w-[55%]"></div>
                                                            </div>
                                                            <div>55%</div>
                                                        </div>
                                                    </td>
                                                    <td>6 Months</td>
                                                    <td><span className="badge bg-outline-primary">Full Time</span></td>
                                                    <td>
                                                        <div className="flex items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <img src="../../../assets/images/faces/4.jpg" alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="font-semibold">Jessica Leon</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr className="border-t border-defaultborder dark:border-defaultborder/10">
                                                    <th scope="row" className="border-bottom-0">
                                                        <div className="flex items-center">
                                                            <div className="me-2">
                                                                <span className="items-center"></span>
                                                            </div>
                                                            <div>
                                                                Stocks &amp; Trading
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td className="border-bottom-0">
                                                        <div className="flex items-center">
                                                            <div className="progress progress-xs course-status-progress progress-animate me-2" aria-valuenow="29" aria-valuemin="0" aria-valuemax="100">
                                                                <div className="progress-bar progress-bar-striped !bg-danger w-[29%]"></div>
                                                            </div>
                                                            <div>29%</div>
                                                        </div>
                                                    </td>
                                                    <td className="border-bottom-0">1 Month</td>
                                                    <td className="border-bottom-0"><span className="badge bg-outline-danger">Stopped</span></td>
                                                    <td className="border-bottom-0">
                                                        <div className="flex items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <img src="../../../assets/images/faces/12.jpg" alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="font-semibold">Israel Khan</div>
                                                        </div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-3 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">Top Instructors</div>
                        </div>
                        <div className="box-body">
                            <ul className="list-none courses-instructors mb-0">
                                <li>
                                    <div className="flex">
                                        <div className="flex flex-grow items-center">
                                            <div className="me-2">
                                                <span className="avatar avatar-rounded">
                                                    <img src="../../../assets/images/faces/1.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="block font-semibold">John Henry</span>
                                                <span className="text-[#8c9097] dark:text-white/50">M.Tech</span>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <span className="block text-primary font-semibold">321 Classes</span>
                                            <span className="text-[#8c9097] dark:text-white/50">Digital Marketing</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex">
                                        <div className="flex flex-grow items-center">
                                            <div className="me-2">
                                                <span className="avatar avatar-rounded">
                                                    <img src="../../../assets/images/faces/5.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="block font-semibold">Mortal Yun</span>
                                                <span className="text-[#8c9097] dark:text-white/50">P.H.D</span>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <span className="block text-primary font-semibold">25 Classes</span>
                                            <span className="text-[#8c9097] dark:text-white/50">Stocks &amp; Trading</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex">
                                        <div className="flex flex-grow items-center">
                                            <div className="me-2">
                                                <span className="avatar avatar-rounded">
                                                    <img src="../../../assets/images/faces/8.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="block font-semibold">Trex Con</span>
                                                <span className="text-[#8c9097] dark:text-white/50">MBBS</span>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <span className="block text-primary font-semibold">39 Classes</span>
                                            <span className="text-[#8c9097] dark:text-white/50">Science</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex">
                                        <div className="flex flex-grow items-center">
                                            <div className="me-2">
                                                <span className="avatar avatar-rounded">
                                                    <img src="../../../assets/images/faces/12.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="block font-semibold">Saiu Sarah</span>
                                                <span className="text-[#8c9097] dark:text-white/50">P.H.D</span>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <span className="block text-primary font-semibold">11 Classes</span>
                                            <span className="text-[#8c9097] dark:text-white/50">Science</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div className="flex">
                                        <div className="flex flex-grow items-center">
                                            <div className="me-2">
                                                <span className="avatar avatar-rounded">
                                                    <img src="../../../assets/images/faces/15.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="block font-semibold">Ion Hau</span>
                                                <span className="text-[#8c9097] dark:text-white/50">M.Tech</span>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <span className="block text-primary font-semibold">124 Classes</span>
                                            <span className="text-[#8c9097] dark:text-white/50">Web Development</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-5 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                New Students
                            </div>
                            <div>
                                <button type="button" className="btn btn-sm btn-light">View All</button>
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <div className="table-responsive">
                                <table className="table whitespace-nowrap min-w-full">
                                    <thead className="bg-light">
                                        <tr>
                                            <th scope="col" className="text-start">Name</th>
                                            <th scope="col" className="text-start">Courses</th>
                                            <th scope="col" className="text-start">Completed</th>
                                            <th scope="col" className="text-start">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <div className="flex items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-rounded">
                                                            <img src="../../../assets/images/faces/13.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="blockfont-semibold">Richard Dom</span>
                                                        <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">richarddom1116@demo.com</span>
                                                    </div>
                                                </div>
                                            </th>
                                            <td>9</td>
                                            <td>1</td>
                                            <td>
                                                <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                    <Link aria-label="anchor" href="#!"
                                                        className="ti-btn  ti-btn-wave !rounded-full !border-info/10 !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"><i
                                                            className="ri-pencil-line"></i></Link>
                                                    <Link aria-label="anchor" href="#!"
                                                        className="ti-btn  ti-btn-wave !rounded-full !border-danger/10 !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"><i
                                                            className="ri-delete-bin-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-t border-defaultborder dark:border-defaultborder/10">
                                            <th scope="row">
                                                <div className="flex items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-rounded">
                                                            <img src="../../../assets/images/faces/5.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="blockfont-semibold">Alicia Keys</span>
                                                        <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">aliciakeys89@gmail.com</span>
                                                    </div>
                                                </div>
                                            </th>
                                            <td>1</td>
                                            <td>0</td>
                                            <td>
                                                <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                    <Link aria-label="anchor" href="#!"
                                                        className="ti-btn  ti-btn-wave !rounded-full !border-info/10 !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"><i
                                                            className="ri-pencil-line"></i></Link>
                                                    <Link aria-label="anchor" href="#!"
                                                        className="ti-btn  ti-btn-wave !rounded-full !border-danger/10 !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"><i
                                                            className="ri-delete-bin-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-t border-defaultborder dark:border-defaultborder/10">
                                            <th scope="row">
                                                <div className="flex items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-rounded">
                                                            <img src="../../../assets/images/faces/10.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="blockfont-semibold">Robert Brook</span>
                                                        <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">robertbrook95@gmail.com</span>
                                                    </div>
                                                </div>
                                            </th>
                                            <td>15</td>
                                            <td>0</td>
                                            <td>
                                                <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                    <Link aria-label="anchor" href="#!"
                                                        className="ti-btn  ti-btn-wave !rounded-full !border-info/10 !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"><i
                                                            className="ri-pencil-line"></i></Link>
                                                    <Link aria-label="anchor" href="#!"
                                                        className="ti-btn  ti-btn-wave !rounded-full !border-danger/10 !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"><i
                                                            className="ri-delete-bin-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-t border-defaultborder dark:border-defaultborder/10">
                                            <th scope="row" className="border-bottom-0">
                                                <div className="flex items-center">
                                                    <div className="me-2">
                                                        <span className="avatar avatar-rounded">
                                                            <img src="../../../assets/images/faces/9.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="blockfont-semibold">Alex Boi</span>
                                                        <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">alexboi555@gmail.com</span>
                                                    </div>
                                                </div>
                                            </th>
                                            <td className="border-bottom-0">16</td>
                                            <td className="border-bottom-0">3</td>
                                            <td>
                                                <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                    <Link aria-label="anchor" href="#!"
                                                        className="ti-btn  ti-btn-wave !rounded-full !border-info/10 !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"><i
                                                            className="ri-pencil-line"></i></Link>
                                                    <Link aria-label="anchor" href="#!"
                                                        className="ti-btn  ti-btn-wave !rounded-full !border-danger/10 !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"><i
                                                            className="ri-delete-bin-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Payouts
                            </div>
                            <div className="inline-flex rounded-md shadow-sm" role="group" aria-label="Basic example">
                                <button type="button"
                                    className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary-full !text-white">1M</button>
                                <button type="button"
                                    className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary">6M</button>
                                <button type="button"
                                    className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary !rounded-s-none">1Y</button>
                            </div>
                        </div>
                        <div className="box-body">
                            <div id="course-payouts">
                                <Payouts />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Course List
                            </div>
                            <div className="flex items-center flex-wrap">
                                <div className="me-3 my-1">
                                    <input className="ti-form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <div className="hs-dropdown ti-dropdown py-1">
                                    <Link href="#!"
                                        className="ti-btn ti-btn-primary-full !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium"
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
                                            <th scope="col" className="text-start">S.No</th>
                                            <th scope="col" className="text-start">Course</th>
                                            <th scope="col" className="text-start">Category</th>
                                            <th scope="col" className="text-start">Classes</th>
                                            <th scope="col" className="text-start">Last Updated</th>
                                            <th scope="col" className="text-start">Instructor</th>
                                            <th scope="col" className="text-start">Students</th>
                                            <th scope="col" className="text-start">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Courselist.map((idx) => (
                                            <tr className="border-t border-defaultborder dark:border-defaultborder/10" key={Math.random()}>
                                                <td>
                                                    {idx.id}
                                                </td>
                                                <td>
                                                    <div className="flex items-center leading-none">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-xs ">
                                                                <img src={idx.src} alt="" className="!rounded-md" />
                                                            </span>
                                                        </div>
                                                        <div>{idx.name}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {idx.category}
                                                </td>
                                                <td>
                                                    {idx.classes}
                                                </td>
                                                <td>
                                                    {idx.last}
                                                </td>
                                                <td>
                                                    {idx.instructor}
                                                </td>
                                                <td>
                                                    {idx.students}
                                                </td>
                                                <td>
                                                    <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                        <Link aria-label="anchor" href="#!"
                                                            className="ti-btn  ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"><i
                                                                className="ri-pencil-line"></i></Link>
                                                        <Link aria-label="anchor" href="#!"
                                                            className="ti-btn  ti-btn-wave  !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"><i
                                                                className="ri-delete-bin-line"></i></Link>
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
                                <div className="text-defaulttextcolor dark:text-defaulttextcolor/70">
                                    Showing 6 Entries <i className="bi bi-arrow-right ms-2 font-semibold"></i>
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
Courses.layout = "Contentlayout"

export default Courses