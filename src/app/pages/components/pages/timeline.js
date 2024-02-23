import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React, { Fragment } from 'react'

const Timeline = () => {
    return (
        <Fragment>
            <Seo title={"Timeline"} />
            <Pageheader currentpage="Timeline" activepage="Pages" mainpage="Timeline" />
            <div className="container">
                <ul className="timeline list-none text-[0.813rem] text-defaulttextcolor">
                    <li>
                        <div className="timeline-time text-end">
                            <span className="date">FRIDAY</span>
                            <span className="time inline-block">02:31</span>
                        </div>
                        <div className="timeline-icon">
                            <Link aria-label="anchor" href="#!"></Link>
                        </div>
                        <div className="timeline-body">
                            <div className="flex items-start timeline-main-content flex-wrap mt-0">
                                <div className="avatar avatar-md online me-3 avatar-rounded md:mt-0 mt-6">
                                    <img alt="avatar" src="../../../assets/images/faces/4.jpg" />
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-center">
                                        <div className="sm:mt-0 mt-2">
                                            <p className="mb-0 text-[.875rem] font-semibold">Emperio</p>
                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">Project assigned by the manager all<span className="badge bg-primary/10 text-primary font-semibold mx-1">files</span>and<span className="badge bg-primary/10 text-primary font-semibold mx-1">folders</span>were included</p>
                                        </div>
                                        <div className="ms-auto">
                                            <span className="ltr:float-right rtl:float-left badge !bg-light text-[#8c9097] dark:text-white/50 timeline-badge whitespace-nowrap">
                                                24,Oct 2022
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-time text-end">
                            <span className="date">MONDAY</span>
                            <span className="time inline-block">08:47</span>
                        </div>
                        <div className="timeline-icon">
                            <Link aria-label="anchor" href="#!"></Link>
                        </div>
                        <div className="timeline-body">
                            <div className="flex items-start timeline-main-content flex-wrap mt-0">
                                <div className="avatar avatar-md online me-3 avatar-rounded md:mt-0 mt-6">
                                    <img alt="avatar" src="../../../assets/images/faces/15.jpg" />
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-center">
                                        <div className="sm:mt-0 mt-2">
                                            <p className="mb-0 text-[.875rem] font-semibold">Dwayne Bero</p>
                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">Admin and other team accepted your work request</p>
                                        </div>
                                        <div className="ms-auto">
                                            <span className="ltr:float-right rtl:float-left badge !bg-light text-[#8c9097] dark:text-white/50 timeline-badge whitespace-nowrap">
                                                30,Sep 2022
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-time text-end">
                            <span className="date">YESTERDAY</span>
                            <span className="time inline-block">18:43</span>
                        </div>
                        <div className="timeline-icon">
                            <Link aria-label="anchor" href="#!"></Link>
                        </div>
                        <div className="timeline-body">
                            <div className="flex items-start timeline-main-content flex-wrap mt-0">
                                <div className="avatar avatar-md online me-3 avatar-rounded md:mt-0 mt-6">
                                    <img alt="avatar" src="../../../assets/images/faces/11.jpg" />
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-center">
                                        <div className="sm:mt-0 mt-2">
                                            <p className="mb-0 text-[.875rem] font-semibold">Alister Chuk</p>
                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">Temporary data will be <span className="badge bg-danger/10 text-danger font-semibold mx-1">deleted</span> once dedicated time complated</p>
                                        </div>
                                        <div className="ms-auto">
                                            <span className="ltr:float-right rtl:float-left badge !bg-light text-[#8c9097] dark:text-white/50 timeline-badge whitespace-nowrap">
                                                11,Sep 2021
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-time text-end">
                            <span className="date">TODAY</span>
                            <span className="time inline-block">03:18</span>
                        </div>
                        <div className="timeline-icon">
                            <Link aria-label="anchor" href="#!"></Link>
                        </div>
                        <div className="timeline-body">
                            <div className="flex items-start timeline-main-content flex-wrap mt-0">
                                <div className="avatar avatar-md online me-3 avatar-rounded md:mt-0 mt-6">
                                    <img alt="avatar" src="../../../assets/images/faces/5.jpg" />
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-center">
                                        <div className="sm:mt-0 mt-2">
                                            <p className="mb-0 text-[.875rem] font-semibold">Melissa Blue</p>
                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">Approved date for sanction of loan is verified <i className="ri-checkbox-circle-line text-success ms-1 text-[1rem] align-middle"></i></p>
                                        </div>
                                        <div className="ms-auto">
                                            <span className="ltr:float-right rtl:float-left badge !bg-light text-[#8c9097] dark:text-white/50 timeline-badge whitespace-nowrap">
                                                18,Sep 2021
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-time text-end">
                            <span className="date">TODAY</span>
                            <span className="time inline-block">12:24</span>
                        </div>
                        <div className="timeline-icon">
                            <Link aria-label="anchor" href="#!"></Link>
                        </div>
                        <div className="timeline-body">
                            <div className="flex items-start timeline-main-content flex-wrap mt-0">
                                <div className="avatar avatar-md online me-3 avatar-rounded md:mt-0 mt-6">
                                    <img alt="avatar" src="../../../assets/images/faces/10.jpg" />
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-center">
                                        <div className="sm:mt-0 mt-2">
                                            <p className="mb-0 text-[.875rem] font-semibold">Zack Slayer</p>
                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">Social network accounts are at risk check your <span className="badge bg-success/10 text-success font-semibold mx-1">login</span> details</p>
                                        </div>
                                        <div className="ms-auto">
                                            <span className="ltr:float-right rtl:float-left badge !bg-light text-[#8c9097] dark:text-white/50 timeline-badge whitespace-nowrap">
                                                15,Sep 2021
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-time text-end">
                            <span className="date">TODAY</span>
                            <span className="time inline-block">04:11</span>
                        </div>
                        <div className="timeline-icon">
                            <Link aria-label="anchor" href="#!"></Link>
                        </div>
                        <div className="timeline-body">
                            <div className="flex items-start timeline-main-content flex-wrap mt-0">
                                <div className="avatar avatar-md online me-3 avatar-rounded md:mt-0 mt-6">
                                    <img alt="avatar" src="../../../assets/images/faces/2.jpg" />
                                </div>
                                <div className="flex-grow">
                                    <div className="flex items-center">
                                        <div className="sm:mt-0 mt-2">
                                            <p className="mb-0 text-[.875rem] font-semibold">Monika Karen</p>
                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">Changed the password of gmail 4 hrs ago. <span className="badge bg-secondary text-white">Update</span></p>
                                        </div>
                                        <div className="ms-auto">
                                            <span className="ltr:float-right rtl:float-left badge !bg-light text-[#8c9097] dark:text-white/50 timeline-badge whitespace-nowrap">
                                                12,Sep 2021
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="timeline-loadmore-container text-center">
                    <button type="button" className="ti-btn ti-btn-info ti-btn-loader">
                        Loading
                        <span className="ti-spinner !h-4 !w-4" role="status"></span>
                    </button>
                </div>
            </div>
        </Fragment>
    )
}
Timeline.layout = "Contentlayout"

export default Timeline