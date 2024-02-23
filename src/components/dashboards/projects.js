import { ProjectAnalysis, Team1, Team2, Team3, Team4, Team5 } from '@/shared/data/dashboards/projectsdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React, { Fragment } from 'react'

const Projects = () => {
    return (
        <Fragment>
            <Seo title={"Projects"} />
            <Pageheader currentpage="Projects" activepage="Dashboards" mainpage="Projects" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-9 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xxl:col-span-5 col-span-12">
                            <div className="grid grid-cols-12 gap-x-6">
                                <div className="sm:col-span-6 col-span-12">
                                    <div className="box">
                                        <div className="box-body flex justify-between items-center">
                                            <div>
                                                <p className="mb-1">Completed Projects</p>
                                                <h4 className="font-semibold mb-1 text-[1.5rem]">109</h4>
                                                <span className="badge bg-success/10 text-success">1.5% <i className="ti ti-trending-up"></i></span><span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem] ms-1">this month</span>
                                            </div>
                                            <div>
                                                <span className="avatar avatar-md bg-primary text-white p-2">
                                                    <i className="ti ti-file-check text-[1.25rem] text-white opacity-[0.7]"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-6 col-span-12">
                                    <div className="box">
                                        <div className="box-body flex justify-between items-center">
                                            <div>
                                                <p className="mb-1">Overdue Projects</p>
                                                <h4 className="font-semibold mb-1 text-[1.5rem]">18</h4>
                                                <span className="badge bg-danger/10 text-danger">0.23% <i className="ti ti-trending-down"></i></span><span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem] ms-1">this month</span>
                                            </div>
                                            <div>
                                                <span className="avatar avatar-md bg-secondary text-white p-2">
                                                    <i className="ti ti-briefcase text-[1.25rem] opacity-[0.7]"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-6 col-span-12">
                                    <div className="box">
                                        <div className="box-body flex justify-between items-center">
                                            <div>
                                                <p className="mb-1">Total Projects</p>
                                                <h4 className="font-semibold mb-1 text-[1.5rem]">389</h4>
                                                <span className="badge bg-success/10 text-success">0.67% <i className="ti ti-trending-up"></i></span><span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem] ms-1">this month</span>
                                            </div>
                                            <div>
                                                <span className="avatar avatar-md bg-success text-white p-2">
                                                    <i className="ti ti-album text-[1.25rem] opacity-[0.7]"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="sm:col-span-6 col-span-12">
                                    <div className="box">
                                        <div className="box-body flex justify-between items-center">
                                            <div>
                                                <p className="mb-1">Pending Projects</p>
                                                <h4 className="font-semibold mb-1 text-[1.5rem]">227</h4>
                                                <span className="badge bg-success/10 text-success">0.53% <i className="ti ti-trending-up"></i></span><span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem] ms-1">this month</span>
                                            </div>
                                            <div>
                                                <span className="avatar avatar-md bg-warning text-white p-2">
                                                    <i className="ti ti-chart-pie-2 text-[1.25rem] opacity-[0.7]"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <div className="box">
                                        <div className="box-header justify-between">
                                            <div className="box-title">
                                                Project Analysis
                                            </div>
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
                                        <div className="box-body">
                                            <div id="projectAnalysis">
                                                <ProjectAnalysis />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-4 col-span-12">
                            <div className="grid grid-cols-12 gap-x-6">
                                <div className="xl:col-span-12 col-span-12">
                                    <div className="box">
                                        <div className="box-header justify-between">
                                            <div className="box-title">
                                                Team Members
                                            </div>
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
                                        <div className="box-body">
                                            <ul className="list-none team-members-card mb-0">
                                                <li>
                                                    <Link href="#!">
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-start">
                                                                <span className="avatar avatar-sm leading-none">
                                                                    <img src="../../../assets/images/faces/2.jpg" alt="" className="rounded-md" />
                                                                </span>
                                                                <div className="ms-4 leading-none">
                                                                    <span className="font-semibold">Melissa Smith</span>
                                                                    <span className="block text-[0.6875rem] text-[#8c9097] dark:text-white/50 mt-2">Ui Developer</span>
                                                                </div>
                                                            </div>
                                                            <div id="user1">
                                                                <Team1 />
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#!">
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-start">
                                                                <span className="avatar avatar-sm leading-none">
                                                                    <img src="../../../assets/images/faces/12.jpg" alt="" className="rounded-md" />
                                                                </span>
                                                                <div className="ms-4 leading-none">
                                                                    <span className="font-semibold">Jason Momoa</span>
                                                                    <span className="block text-[0.6875rem] text-[#8c9097] dark:text-white/50 mt-2">React Developer</span>
                                                                </div>
                                                            </div>
                                                            <div id="user2">
                                                                <Team2 />
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#!">
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-start">
                                                                <span className="avatar avatar-sm leading-none">
                                                                    <img src="../../../assets/images/faces/1.jpg" alt="" className="rounded-md" />
                                                                </span>
                                                                <div className="ms-4 leading-none">
                                                                    <span className="font-semibold">Kamala Hars</span>
                                                                    <span className="block text-[0.6875rem] text-[#8c9097] dark:text-white/50 mt-2">Testing</span>
                                                                </div>
                                                            </div>
                                                            <div id="user3">
                                                                <Team3 />
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#!">
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-start">
                                                                <span className="avatar avatar-sm leading-none">
                                                                    <img src="../../../assets/images/faces/15.jpg" alt="" className="rounded-md" />
                                                                </span>
                                                                <div className="ms-4 leading-none">
                                                                    <span className="font-semibold">Diego Sanch</span>
                                                                    <span className="block text-[0.6875rem] text-[#8c9097] dark:text-white/50 mt-2">Angular Developer</span>
                                                                </div>
                                                            </div>
                                                            <div id="user4">
                                                                <Team4 />
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="#!">
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex items-start">
                                                                <span className="avatar avatar-sm leading-none">
                                                                    <img src="../../../assets/images/faces/10.jpg" alt="" className="rounded-md" />
                                                                </span>
                                                                <div className="ms-4 leading-none">
                                                                    <span className="font-semibold">Jake Sully</span>
                                                                    <span className="block text-[0.6875rem] text-[#8c9097] dark:text-white/50 mt-2">Web Designer</span>
                                                                </div>
                                                            </div>
                                                            <div id="user5">
                                                                <Team5 />
                                                            </div>
                                                        </div>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <div className="box">
                                        <div className="box-header justify-between">
                                            <div className="box-title">
                                                Main Tasks
                                            </div>
                                            <div className="hs-dropdown ti-dropdown">
                                                <Link href="#!" className="px-2 font-normal text-[0.75rem] text-[#8c9097] dark:text-white/50"
                                                    aria-expanded="false">
                                                    Today<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                                </Link>
                                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                        href="#!">Weak</Link></li>
                                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                        href="#!">Month</Link></li>
                                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                        href="#!">Year</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="box-body">
                                            <ul className="list-none projects-maintask-card">
                                                <li>
                                                    <div className="flex items-start">
                                                        <div className="flex items-start flex-grow">
                                                            <span className="me-4">
                                                                <input className="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..." />
                                                            </span>
                                                            <div className="flex-grow">
                                                                <span>
                                                                    Designing a landing page
                                                                </span>
                                                                <span className="block mt-1">
                                                                    <span className="avatar-list-stacked">
                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                            <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                                        </span>
                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                            <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                                                        </span>
                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                            <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span className="badge bg-primary/10 text-primary">
                                                                In progress
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex items-start">
                                                        <div className="flex items-start flex-grow">
                                                            <span className="me-4">
                                                                <input className="form-check-input" type="checkbox" id="" value="" aria-label="..." defaultChecked />
                                                            </span>
                                                            <div className="flex-grow">
                                                                <span>
                                                                    Testing of new project ui
                                                                </span>
                                                                <span className="block mt-1">
                                                                    <span className="avatar-list-stacked">
                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                            <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                                                        </span>
                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                            <img src="../../../assets/images/faces/15.jpg" alt="img" />
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span className="badge bg-success/10 text-success">
                                                                Completed
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex items-start">
                                                        <div className="flex items-start flex-grow">
                                                            <span className="me-4">
                                                                <input className="form-check-input" type="checkbox" id="checkboxNoLabel3" value="" aria-label="..." />
                                                            </span>
                                                            <div className="flex-grow">
                                                                <span>
                                                                    Fixing bugs in registration page
                                                                </span>
                                                                <span className="block mt-1">
                                                                    <span className="avatar-list-stacked">
                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                            <img src="../../../assets/images/faces/11.jpg" alt="img" />
                                                                        </span>
                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                            <img src="../../../assets/images/faces/4.jpg" alt="img" />
                                                                        </span>
                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                            <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span className="badge bg-warning/10 text-warning">
                                                                pending
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex items-start">
                                                        <div className="flex items-start flex-grow">
                                                            <span className="me-4">
                                                                <input className="form-check-input" type="checkbox" id="checkboxNoLabel4" value="" aria-label="..." defaultChecked />
                                                            </span>
                                                            <div className="flex-grow">
                                                                <span>
                                                                    Designing new dashboard
                                                                </span>
                                                                <span className="block mt-1">
                                                                    <span className="avatar-list-stacked">
                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                            <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                                                        </span>
                                                                        <span className="avatar avatar-xs avatar-rounded">
                                                                            <img src="../../../assets/images/faces/11.jpg" alt="img" />
                                                                        </span>
                                                                    </span>
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <span className="badge bg-primary/10 text-primary">
                                                                In progress
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-3 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Daily Tasks
                                    </div>
                                    <div className="hs-dropdown ti-dropdown">
                                        <Link href="#!" className="px-2 font-normal text-[0.75rem] text-[#8c9097] dark:text-white/50"
                                            aria-expanded="false">
                                            View All<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                        </Link>
                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">Download</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">Import</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">Export</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <ul className="list-none daily-task-card my-2">
                                        <li>
                                            <div className="box border border-primary/25 shadow-none mb-0">
                                                <div className="box-body">
                                                    <p className="text-[0.875rem] font-semibold mb-2 leadining-none">Home Page Design
                                                        <Link aria-label="anchor" href="#!"><i className="bi bi-plus-square ltr:float-right rtl:float-left text-primary text-[1.125rem]"></i></Link>
                                                    </p>
                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        <span className="badge text-primary bg-primary/10">Framework</span>
                                                        <span className="badge text-secondary bg-secondary/10">Angular</span>
                                                        <span className="badge text-info bg-info/10">Php</span>
                                                    </div>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="box border border-warning/25 shadow-none custom-card">
                                                <div className="box-body">
                                                    <p className="text-[0.875rem] font-semibold mb-2 leadining-none">About Us Page redesign
                                                        <Link aria-label="anchor" href="#!"><i className="bi bi-plus-square ltr:float-right rtl:float-left text-warning text-[1.125rem]"></i></Link>
                                                    </p>
                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        <span className="badge text-danger bg-danger/10">Html</span>
                                                        <span className="badge text-warning bg-warning/10">Symphony</span>
                                                        <span className="badge text-success bg-success/10">Php</span>
                                                    </div>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/6.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/9.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="box border border-success/25 shadow-none custom-card">
                                                <div className="box-body">
                                                    <p className="text-[0.875rem] font-semibold mb-2 leadining-none">About Us Page redesign
                                                        <Link aria-label="anchor" href="#!"><i className="bi bi-plus-square ltr:float-right rtl:float-left text-success text-[1.125rem]"></i></Link>
                                                    </p>
                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        <span className="badge text-danger bg-danger/10">Html</span>
                                                        <span className="badge text-warning bg-warning/10">Symphony</span>
                                                        <span className="badge text-success bg-success/10">Php</span>
                                                    </div>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/6.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/9.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="box border border-secondary/25 shadow-none custom-card !mb-0">
                                                <div className="box-body">
                                                    <p className="text-[0.875rem] font-semibold mb-2 leadining-none">New Project Discussion
                                                        <Link aria-label="anchor" href="#!"><i className="bi bi-plus-square ltr:float-right rtl:float-left text-secondary text-[1.125rem]"></i></Link>
                                                    </p>
                                                    <div className="flex flex-wrap gap-2 mb-4">
                                                        <span className="badge text-info bg-info/10">React</span>
                                                        <span className="badge text-primary bg-primary/10">Typescript</span>
                                                    </div>
                                                    <div className="avatar-list-stacked">
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/3.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/14.jpg" alt="img" />
                                                        </span>
                                                        <span className="avatar avatar-sm avatar-rounded">
                                                            <img src="../../../assets/images/faces/11.jpg" alt="img" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xxl:col-span-12 col-span-12">
                            <div className="box shadow-none projects-tracking-card overflow-hidden text-center">
                                <div className="box-body">
                                    <img src="../../../assets/images/media/media-86.svg" alt="" className="mb-1 inline-flex" />
                                    <div>
                                        <span className="text-[0.9375rem] font-semibold block mt-6 mb-4">Track your work progress here</span>
                                        <button type="button" className="ti-btn !py-1 !px-2 bg-primary !text-[0.75rem] text-white  ti-btn-wave">Track Here</button>
                                    </div>
                                    <span className="shape-1 text-primary"><i className="ti ti-circle text-[1.25rem] font-bold"></i></span>
                                    <span className="shape-2 text-secondary"><i className="ti ti-triangle text-[1.25rem] font-bold"></i></span>
                                    <span className="shape-3 text-warning"><i className="ti ti-square text-[1.25rem] font-bold"></i></span>
                                    <span className="shape-4 text-info"><i className="ti ti-square-rotated text-[1.25rem] font-bold"></i></span>
                                    <span className="shape-5 text-success"><i className="ti ti-pentagon text-[1.25rem] font-bold"></i></span>
                                    <span className="shape-6 text-danger"><i className="ti ti-star text-[1.25rem] font-bold"></i></span>
                                    <span className="shape-7 text-pink"><i className="ti ti-hexagon text-[1.25rem] font-bold"></i></span>
                                    <span className="shape-8 text-teal"><i className="ti ti-octagon text-[1.25rem] font-bold"></i></span>
                                    <span className="shape-9 text-primary"><i className="ti ti-circle text-[1.25rem] font-bold"></i></span>
                                    <span className="shape-10 text-secondary"><i className="ti ti-triangle text-[1.25rem] font-bold"></i></span>
                                    <span className="shape-11 text-warning"><i className="ti ti-square text-[1.25rem] font-bold"></i></span>
                                    <span className="shape-12 text-info"><i className="ti ti-square-rotated text-[1.25rem] font-bold"></i></span>
                                    <span className="shape-13 text-success"><i className="ti ti-pentagon text-[1.25rem] font-bold"></i></span>
                                    <span className="shape-14 text-danger"><i className="ti ti-star text-[1.25rem] font-bold"></i></span>
                                    <span className="shape-15 text-pink"><i className="ti ti-hexagon text-[1.25rem] font-bold"></i></span>
                                    <span className="shape-16 text-teal"><i className="ti ti-octagon text-[1.25rem] font-bold"></i></span>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Recent Transactions
                                    </div>
                                    <div className="hs-dropdown ti-dropdown">
                                        <Link href="#!" className="px-2 font-normal text-[0.75rem] text-[#8c9097] dark:text-white/50"
                                            aria-expanded="false">
                                            View All<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                        </Link>
                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">Download</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">Import</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">Export</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <ul className="list-none project-transactions-card">
                                        <li>
                                            <div className="flex items-start">
                                                <div className="me-3">
                                                    <span className="avatar avatar-rounded font-bold avatar-md !text-primary bg-primary/10">
                                                        S
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <span className="block font-semibold">Simon Cowall</span>
                                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem]">Feb 28,2023 - 12:54PM</span>
                                                </div>
                                                <div>
                                                    <h6 className="font-semibold text-[1rem]">$21,442</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start">
                                                <div className="me-3">
                                                    <span className="avatar avatar-rounded font-bold avatar-md !text-secondary bg-secondary/10">
                                                        M
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <span className="block font-semibold">Melissa Blue</span>
                                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem]">Mar 28,2023 - 10:14AM</span>
                                                </div>
                                                <div>
                                                    <h6 className="font-semibold text-[1rem]">$8,789</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start">
                                                <div className="me-3">
                                                    <span className="avatar avatar-rounded font-bold avatar-md !text-success bg-success/10">
                                                        G
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <span className="block font-semibold">Gabriel Shin</span>
                                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem]">Mar 16,2023 - 05:27PM</span>
                                                </div>
                                                <div>
                                                    <h6 className="font-semibold text-[1rem]">$13,677</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start">
                                                <div className="me-3">
                                                    <span className="avatar avatar-rounded font-bold avatar-md !text-warning bg-warning/10">
                                                        Y
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <span className="block font-semibold">Yohasimi Nakiyaro</span>
                                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem]">Mar 19,2023 - 04:45PM</span>
                                                </div>
                                                <div>
                                                    <h6 className="font-semibold text-[1rem]">$3,543</h6>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start">
                                                <div className="me-3">
                                                    <span className="avatar avatar-rounded font-bold avatar-md !text-info bg-info/10">
                                                        B
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <span className="block font-semibold">Brenda Lynn</span>
                                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem]">Mar 10,2023 - 05:25PM</span>
                                                </div>
                                                <div>
                                                    <h6 className="font-semibold">$7,890</h6>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Projects Summary
                            </div>
                            <div className="flex flex-wrap">
                                <div className="me-4 my-1">
                                    <input className="ti-form-control form-control-sm !rounded-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <div className="hs-dropdown ti-dropdown !py-1 !mb-2">
                                    <Link href="#!"
                                        className="ti-btn ti-btn-primary !bg-primary !text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium"
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
                                <table className="table table-hover whitespace-nowrap table-bordered min-w-full">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="!text-start">S.No</th>
                                            <th scope="col" className="!text-start">Title</th>
                                            <th scope="col" className="!text-start">Assigned To</th>
                                            <th scope="col" className="!text-start">Tasks</th>
                                            <th scope="col" className="!text-start">Progress</th>
                                            <th scope="col" className="!text-start">Status</th>
                                            <th scope="col" className="!text-start">Due Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10">
                                            <th scope="row" className="!text-start">
                                                1
                                            </th>
                                            <td>
                                                Home Page
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-xs bg-primary avatar-rounded text-white text-[0.65rem] font-normal" href="#!">
                                                        +2
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>110/180</td>
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="progress progress-animate progress-xs w-full" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary w-0"></div>
                                                    </div>
                                                    <div className="ms-2">0%</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-primary/10 text-primary">In Progress</span>
                                            </td>
                                            <td>
                                                14-04-2023
                                            </td>
                                        </tr>
                                        <tr className="border border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10">
                                            <th scope="row" className="!text-start">
                                                2
                                            </th>
                                            <td>
                                                Landing Design
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../../assets/images/faces/5.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../../assets/images/faces/6.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../../assets/images/faces/9.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../../assets/images/faces/15.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </td>
                                            <td>95/100</td>
                                            <td>
                                                <div className="flex items-center">
                                                    <div className=" progress progress-animate progress-xs w-full" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary w-[95%]"></div>
                                                    </div>
                                                    <div className="ms-2">95%</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-primary/10 text-primary">In Progress</span>
                                            </td>
                                            <td>
                                                20-04-2023
                                            </td>
                                        </tr>
                                        <tr className="border border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10">
                                            <th scope="row" className="!text-start">
                                                3
                                            </th>
                                            <td>
                                                New Template Design
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../../assets/images/faces/1.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../../assets/images/faces/3.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../../assets/images/faces/4.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </td>
                                            <td>90/100</td>
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="progress progress-animate progress-xs w-full" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary w-0"></div>
                                                    </div>
                                                    <div className="ms-2">0%</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-warning/10 text-warning">Pending</span>
                                            </td>
                                            <td>
                                                29-05-2023
                                            </td>
                                        </tr>
                                        <tr className="border border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10">
                                            <th scope="row" className="!text-start">
                                                4
                                            </th>
                                            <td>
                                                HR Management Template Design
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../../assets/images/faces/11.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../../assets/images/faces/4.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-xs bg-primary avatar-rounded text-white text-[0.65rem] font-normal" href="#!">
                                                        +5
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>26/71</td>
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="progress progress-animate progress-xs w-full" aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary w-[35%]"></div>
                                                    </div>
                                                    <div className="ms-2">35%</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-primary/10 text-primary">In Progress</span>
                                            </td>
                                            <td>
                                                18-04-2023
                                            </td>
                                        </tr>
                                        <tr className="border border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10">
                                            <th scope="row" className="!text-start">
                                                5
                                            </th>
                                            <td>
                                                Designing New Template
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../../assets/images/faces/9.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../../assets/images/faces/16.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-xs bg-primary avatar-rounded text-white text-[0.65rem] font-normal" href="#!">
                                                        +3
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>26/71</td>
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="progress progress-animate progress-xs w-full" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary w-full"></div>
                                                    </div>
                                                    <div className="ms-2">100%</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-success/10 text-success">Completed</span>
                                            </td>
                                            <td>
                                                11-04-2023
                                            </td>
                                        </tr>
                                        <tr className="border border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10">
                                            <th scope="row" className="!text-start">
                                                6
                                            </th>
                                            <td>
                                                Documentation Project
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../../assets/images/faces/4.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../../assets/images/faces/7.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../../assets/images/faces/12.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../../assets/images/faces/13.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs avatar-rounded">
                                                        <img src="../../../assets/images/faces/15.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </td>
                                            <td>45/90</td>
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="progress progress-animate progress-xs w-full" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar progress-bar-striped progress-bar-animated bg-primary w-1/2"></div>
                                                    </div>
                                                    <div className="ms-2">50%</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-primary/10 text-primary">In Progress</span>
                                            </td>
                                            <td>
                                                18-04-2023
                                            </td>
                                        </tr>
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
Projects.layout = "Contentlayout"

export default Projects