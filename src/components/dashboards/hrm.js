import { Billssummary, JobsSummary, Performancebycategory } from '@/shared/data/dashboards/hrmdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React, { Fragment } from 'react'

const Hrm = () => {
    return (
        <Fragment>
            <Seo title={"HRM"} />
            <Pageheader currentpage="HRM" activepage="Dashboards" mainpage="HRM" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-5 xl:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <div className="box hrm-main-card primary">
                                <div className="box-body">
                                    <div className="flex items-start">
                                        <div className="me-4">
                                            <span className="avatar bg-primary !text-white">
                                                <i className="ri-team-line text-[1.125rem]"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <span className="font-semibold text-[#8c9097] dark:text-white/50 block mb-1">Total
                                                Employees</span>
                                            <h5 className="font-semibold mb-1 text-[1.25rem]">22,124</h5>
                                            <p className="mb-0">
                                                <span className="badge bg-primary/10 text-primary">This Month</span>
                                            </p>
                                        </div>
                                        <div>
                                            <span className="text-[0.875rem] font-semibold text-success">+1.03%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <div className="box hrm-main-card secondary">
                                <div className="box-body">
                                    <div className="flex items-start">
                                        <div className="me-4">
                                            <span className="avatar bg-secondary !text-white">
                                                <i className="ri-user-unfollow-line text-[1.125rem]"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <span className="font-semibold text-[#8c9097] dark:text-white/50 block mb-1">Employees In
                                                Leave</span>
                                            <h5 className="font-semibold mb-1 text-[1.25rem]">528</h5>
                                            <p className="mb-0">
                                                <span className="badge bg-secondary/10 text-secondary">This Month</span>
                                            </p>
                                        </div>
                                        <div>
                                            <span className="text-[0.875rem] font-semibold text-success">+0.36%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <div className="box  hrm-main-card warning">
                                <div className="box-body">
                                    <div className="flex items-start">
                                        <div className="me-4">
                                            <span className="avatar bg-warning !text-white">
                                                <i className="ri-service-line text-[1.125rem]"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <span className="font-semibold text-[#8c9097] dark:text-white/50 block mb-1">Total
                                                Clients</span>
                                            <h5 className="font-semibold mb-1 text-[1.25rem]">8,289</h5>
                                            <p className="mb-0">
                                                <span className="badge bg-warning/10 text-warning">This Month</span>
                                            </p>
                                        </div>
                                        <div>
                                            <span className="text-[0.875rem] font-semibold text-danger">-1.28%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                            <div className="box hrm-main-card danger">
                                <div className="box-body">
                                    <div className="flex items-start">
                                        <div className="me-4">
                                            <span className="avatar bg-danger !text-white">
                                                <i className="ri-contacts-line text-[1.125rem]"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <span className="font-semibold text-[#8c9097] dark:text-white/50 block mb-1">New Leads</span>
                                            <h5 className="font-semibold mb-1 text-[1.25rem]">1,453</h5>
                                            <p className="mb-0">
                                                <span className="badge bg-danger/10 text-danger">This Month</span>
                                            </p>
                                        </div>
                                        <div>
                                            <span className="text-[0.875rem] font-semibold text-success">+4.25%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header">
                                    <div className="box-title">Applicants Summary</div>
                                </div>
                                <div className="box-body">
                                    <div className="sm:grid grid-cols-12 md:gap-y-0 gap-y-3">
                                        <div
                                            className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12">
                                            <div className="flex items-start">
                                                <div className="me-3">
                                                    <span className="avatar avatar-rounded bg-light !text-primary">
                                                        <i className="ti ti-files text-[1.125rem]"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="block mb-1 text-[#8c9097] dark:text-white/50">New Applicants</span>
                                                    <h6 className="font-semibold mb-0 text-[1rem]">2,981</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12">
                                            <div className="flex items-start">
                                                <div className="me-3">
                                                    <span className="avatar avatar-rounded bg-light !text-secondary">
                                                        <i className="ti ti-file-check text-[1.125rem]"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="block mb-1 text-[#8c9097] dark:text-white/50">Selected
                                                        Candidates</span>
                                                    <h6 className="font-semibold mb-0 text-[1rem]">2,981</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-12">
                                            <div className="flex items-start">
                                                <div className="me-3">
                                                    <span className="avatar avatar-rounded bg-light !text-warning">
                                                        <i className="ti ti-file-dislike text-[1.125rem]"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="block mb-1 text-[#8c9097] dark:text-white/50">Rejected
                                                        Candidates</span>
                                                    <h6 className="font-semibold mb-0 text-[1rem]">2,981</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-7 xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between items-center sm:flex block">
                            <div className="box-title sm:mb-0 mb-2">
                                Performance By Category
                            </div>
                            <div className="inline-flex rounded-md shadow-sm" role="group" aria-label="Basic example">
                                <button type="button"
                                    className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary">1W</button>
                                <button type="button"
                                    className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary">1M</button>
                                <button type="button"
                                    className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary">6M</button>
                                <button type="button"
                                    className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary-full !rounded-s-none !text-white">1Y</button>
                            </div>
                        </div>
                        <div className="box-body">
                            <div id="performanceReport">
                                <Performancebycategory />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6 col-span-12">
                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Jobs Summary
                            </div>
                        </div>
                        <div className="box-body !p-6">
                            <div id="jobs-summary">
                                <JobsSummary />
                            </div>
                        </div>
                        <div className="box-footer !py-6 !px-4 !mt-2">
                            <div className="grid xxxl:grid-cols-4 grid-cols-4">
                                <div className="col p-0">
                                    <div className="text-center">
                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 hrm-jobs-legend published inline-block ms-2">Published
                                        </span>
                                        <div><span className="text-[1rem] font-semibold">1,624</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col p-0">
                                    <div className="text-center">
                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 hrm-jobs-legend private inline-block ms-2">Private
                                        </span>
                                        <div><span className="text-[1rem] font-semibold">1,267</span></div>
                                    </div>
                                </div>
                                <div className="col p-0">
                                    <div className="text-center">
                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 hrm-jobs-legend closed inline-block ms-2">Closed
                                        </span>
                                        <div><span className="text-[1rem] font-semibold">1,153</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col p-0">
                                    <div className="text-center">
                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1 hrm-jobs-legend onhold inline-block ms-2">On Hold
                                        </span>
                                        <div><span className="text-[1rem] font-semibold">1,153</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-4 xl:col-span-6 lg:col-span-6 md:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">Upcoming Events</div>
                        </div>
                        <div className="box-body">
                            <ul className="list-none timeline-widget mb-0 my-5">
                                <li className="timeline-widget-list">
                                    <div className="flex items-start">
                                        <div className="me-[3rem] text-center">
                                            <span className="block text-[1.25rem] font-semibold text-primary">02</span>
                                            <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">Mon</span>
                                        </div>
                                        <div className="flex flex-wrap flex-grow items-start justify-between">
                                            <div>
                                                <p className="mb-1 sm:text-truncate timeline-widget-content text-wrap">You have an announcement - Ipsum Est Diam Eirmod</p>
                                                <p className="mb-0 text-[0.75rem] leading-none text-[#8c9097] dark:text-white/50">10:00AM<span className="badge bg-primary/10 text-primary ms-2">Announcement</span></p>
                                            </div>
                                            <div>
                                                <div className="hs-dropdown ti-dropdown">
                                                    <Link aria-label="anchor" href="#!" className="text-[1rem] text-[#8c9097] dark:text-white/50">
                                                        <i className="fe fe-more-vertical"></i>
                                                    </Link>
                                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            href="#!">Week</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            href="#!">Month</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            href="#!">Year</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-widget-list">
                                    <div className="flex items-start">
                                        <div className="me-[3rem] text-center">
                                            <span className="block text-[1.25rem] font-semibold text-primary">15</span>
                                            <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">Sun</span>
                                        </div>
                                        <div className="flex flex-wrap flex-grow items-start justify-between">
                                            <div>
                                                <p className="mb-1 sm:text-truncate timeline-widget-content text-wrap">National holiday - Vero Jayanti</p>
                                                <p className="mb-0 text-[0.75rem] leading-none text-[#8c9097] dark:text-white/50"><span className="badge text-warning bg-warning/10">Holiday</span></p>
                                            </div>
                                            <div>
                                                <div className="hs-dropdown ti-dropdown">
                                                    <Link aria-label="anchor" href="#!" className="text-[1rem] text-[#8c9097] dark:text-white/50">
                                                        <i className="fe fe-more-vertical"></i>
                                                    </Link>
                                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            href="#!">Week</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            href="#!">Month</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            href="#!">Year</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-widget-list">
                                    <div className="flex items-start">
                                        <div className="me-[3rem] text-center">
                                            <span className="block text-[1.25rem] font-semibold text-primary">23</span>
                                            <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">Mon</span>
                                        </div>
                                        <div className="flex flex-wrap flex-grow items-start justify-between">
                                            <div>
                                                <p className="mb-1 sm:text-truncate timeline-widget-content text-wrap">John pup birthday - Team Member</p>
                                                <p className="mb-4 text-[0.75rem] leading-none text-[#8c9097] dark:text-white/50">09:00AM<span className="badge text-success bg-success/10 ms-2">Birthday</span></p>
                                                <p className="mb-1 sm:text-truncate timeline-widget-content text-wrap">Amet sed no dolor kasd - Et Dolores Tempor Erat</p>
                                                <p className="mb-0 text-[0.75rem] leading-none text-[#8c9097] dark:text-white/50">04:00PM<span className="badge text-primary bg-primary/10 ms-2">Announcement</span></p>
                                            </div>
                                            <div>
                                                <div className="hs-dropdown ti-dropdown">
                                                    <Link aria-label="anchor" href="#!" className="text-[1rem] text-[#8c9097] dark:text-white/50">
                                                        <i className="fe fe-more-vertical"></i>
                                                    </Link>
                                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            href="#!">Week</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            href="#!">Month</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            href="#!">Year</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-widget-list">
                                    <div className="flex items-start">
                                        <div className="me-[3rem] text-center">
                                            <span className="block text-[1.25rem] font-semibold text-primary">31</span>
                                            <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">Tue</span>
                                        </div>
                                        <div className="flex flex-wrap flex-grow items-start justify-between">
                                            <div>
                                                <p className="mb-1 sm:text-truncate timeline-widget-content text-wrap">National Holiday - Dolore Ipsum</p>
                                                <p className="mb-0 text-[0.75rem] leading-none text-[#8c9097] dark:text-white/50"><span className="badge text-warning bg-warning/10">Holiday</span></p>
                                            </div>
                                            <div>
                                                <div className="hs-dropdown ti-dropdown">
                                                    <Link aria-label="anchor" href="#!" className="text-[1rem] text-[#8c9097] dark:text-white/50">
                                                        <i className="fe fe-more-vertical"></i>
                                                    </Link>
                                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            href="#!">Week</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            href="#!">Month</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            href="#!">Year</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-5 xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">Clients</div>
                        </div>
                        <div className="box-body !p-0">
                            <div className="table-responsive">
                                <table className="table whitespace-nowrap min-w-full">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="text-start !min-w-[200px]">Client</th>
                                            <th scope="col" className="text-start">Mail</th>
                                            <th scope="col" className="text-start">Status</th>
                                            <th scope="col" className="text-start">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-t border-defaultborder dark:border-defaultborder/10">
                                            <th scope="col">
                                                <div className="flex items-center leading-none">
                                                    <img src="../../../assets/images/faces/2.jpg" alt="" className="avatar avatar-rounded me-4 !mb-0" />
                                                    <div>
                                                        <span className="block font-semibold mb-1">Diana Aise</span>
                                                        <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] text-start">C.E.O</span>
                                                    </div>
                                                </div>
                                            </th>
                                            <td>diana.1116@demo.com</td>
                                            <td>
                                                <div className="hs-dropdown ti-dropdown">
                                                    <Link aria-label="anchor" href="#!" className="ti-btn ti-btn-outline-light text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium">
                                                        Active <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                                    </Link>
                                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            href="#!">Active</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            href="#!">In Active</Link></li>
                                                    </ul>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                    <Link aria-label="anchor" href="#!"
                                                        className="ti-btn ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-primary/10 text-primary hover:bg-primary hover:text-white hover:border-primary"><i
                                                            className="ri-pencil-line"></i></Link>
                                                    <Link aria-label="anchor" href="#!"
                                                        className="ti-btn ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-success/10 text-success hover:bg-success hover:text-white hover:border-success"><i
                                                            className="ri-delete-bin-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-t border-defaultborder dark:border-defaultborder/10">
                                            <th scope="row">
                                                <div className="flex items-center leading-none">
                                                    <img src="../../../assets/images/faces/8.jpg" alt="" className="avatar avatar-rounded me-4 !mb-0" />
                                                    <div>
                                                        <span className="block font-semibold mb-1">Rose Mary</span>
                                                        <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] text-start">C.E.O</span>
                                                    </div>
                                                </div>
                                            </th>
                                            <td>rose756@demo.com</td>
                                            <td>
                                                <div className="hs-dropdown ti-dropdown">
                                                    <Link aria-label="anchor" href="#!" className="ti-btn ti-btn-outline-light text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium">
                                                        Active <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                                    </Link>
                                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            href="#!">Active</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            href="#!">In Active</Link></li>
                                                    </ul>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                    <Link aria-label="anchor" href="#!"
                                                        className="ti-btn ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-primary/10 text-primary hover:bg-primary hover:text-white hover:border-primary"><i
                                                            className="ri-pencil-line"></i></Link>
                                                    <Link aria-label="anchor" href="#!"
                                                        className="ti-btn ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-success/10 text-success hover:bg-success hover:text-white hover:border-success"><i
                                                            className="ri-delete-bin-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-t border-defaultborder dark:border-defaultborder/10">
                                            <th scope="row">
                                                <div className="flex items-center leading-none">
                                                    <img src="../../../assets/images/faces/13.jpg" alt="" className="avatar avatar-rounded me-4 !mb-0" />
                                                    <div>
                                                        <span className="block font-semibold mb-1">Gretchen Iox</span>
                                                        <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] text-start">Manager</span>
                                                    </div>
                                                </div>
                                            </th>
                                            <td>gretchen.1.25@demo.com</td>
                                            <td>
                                                <div className="hs-dropdown ti-dropdown">
                                                    <Link aria-label="anchor" href="#!" className="ti-btn ti-btn-outline-light text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium">
                                                        Active <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                                    </Link>
                                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            href="#!">Active</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            href="#!">In Active</Link></li>
                                                    </ul>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                    <Link aria-label="anchor" href="#!"
                                                        className="ti-btn ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-primary/10 text-primary hover:bg-primary hover:text-white hover:border-primary"><i
                                                            className="ri-pencil-line"></i></Link>
                                                    <Link aria-label="anchor" href="#!"
                                                        className="ti-btn ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-success/10 text-success hover:bg-success hover:text-white hover:border-success"><i
                                                            className="ri-delete-bin-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-t border-defaultborder dark:border-defaultborder/10">
                                            <th scope="row">
                                                <div className="flex items-center leading-none">
                                                    <img src="../../../assets/images/faces/11.jpg" alt="" className="avatar avatar-rounded me-4 !mb-0" />
                                                    <div>
                                                        <span className="block font-semibold mb-1">Gray Noal</span>
                                                        <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] text-start">Manager</span>
                                                    </div>
                                                </div>
                                            </th>
                                            <td>gray12gray@demo.com</td>
                                            <td>
                                                <div className="hs-dropdown ti-dropdown">
                                                    <Link aria-label="anchor" href="#!" className="ti-btn ti-btn-outline-light text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium">
                                                        Active <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                                    </Link>
                                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            href="#!">Active</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            href="#!">In Active</Link></li>
                                                    </ul>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                    <Link aria-label="anchor" href="#!"
                                                        className="ti-btn ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-primary/10 text-primary hover:bg-primary hover:text-white hover:border-primary"><i
                                                            className="ri-pencil-line"></i></Link>
                                                    <Link aria-label="anchor" href="#!"
                                                        className="ti-btn ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-success/10 text-success hover:bg-success hover:text-white hover:border-success"><i
                                                            className="ri-delete-bin-line"></i></Link>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-t border-defaultborder dark:border-defaultborder/10">
                                            <th scope="row" className="border-bottom-0">
                                                <div className="flex items-center leading-none">
                                                    <img src="../../../assets/images/faces/5.jpg" alt="" className="avatar avatar-rounded me-4 !mb-0" />
                                                    <div>
                                                        <span className="block font-semibold mb-1">Isa Bella</span>
                                                        <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] text-start">C.E.O</span>
                                                    </div>
                                                </div>
                                            </th>
                                            <td className="border-bottom-0">isa158@demo.com</td>
                                            <td className="border-bottom-0">
                                                <div className="hs-dropdown ti-dropdown">
                                                    <Link aria-label="anchor" href="#!" className="ti-btn ti-btn-outline-light text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium">
                                                        Active <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                                    </Link>
                                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            href="#!">Active</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            href="#!">In Active</Link></li>
                                                    </ul>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                    <Link aria-label="anchor" href="#!"
                                                        className="ti-btn ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-primary/10 text-primary hover:bg-primary hover:text-white hover:border-primary"><i
                                                            className="ri-pencil-line"></i></Link>
                                                    <Link aria-label="anchor" href="#!"
                                                        className="ti-btn ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-success/10 text-success hover:bg-success hover:text-white hover:border-success"><i
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
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between flex-wrap">
                            <div className="box-title">
                                Bills Summary
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <div className="me-3">
                                    <input className="ti-form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <div className="hs-dropdown ti-dropdown">
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
                                            <th scope="col" className="text-start">S.No</th>
                                            <th scope="col" className="text-start">Invoice ID</th>
                                            <th scope="col" className="text-start">Client</th>
                                            <th scope="col" className="text-start">Due Date</th>
                                            <th scope="col" className="text-start">Status</th>
                                            <th scope="col" className="text-start">Amount</th>
                                            <th scope="col" className="text-start">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Billssummary.map((idx) => (
                                            <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light" key={Math.random()}>
                                                <td>{idx.id}</td>
                                                <td>{idx.invoiceid}</td>
                                                <td>
                                                    <div className="flex items-center leading-none">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md avatar-rounded">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="block font-semibold mb-1">{idx.name}</span>
                                                            <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">{idx.mail}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {idx.duedate}
                                                </td>
                                                <td>
                                                    <span className={`badge bg-${idx.color} text-white`}>{idx.status}</span>
                                                </td>
                                                <td>
                                                    {idx.amount}
                                                </td>
                                                <td>
                                                    <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                        <Link aria-label="anchor" href="#!"
                                                            className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"><i
                                                                className="ri-pencil-line"></i></Link>
                                                        <Link aria-label="anchor" href="#!"
                                                            className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"><i
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
                                <div className="text-defaulttextcolor/70">
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
Hrm.layout = "Contentlayout"

export default Hrm