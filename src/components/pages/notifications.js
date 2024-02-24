import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React, { Fragment } from 'react'

const Notifications = () => {
    return (
        <Fragment>
            <Seo title={"Notifications"} />
            <Pageheader currentpage="Notifications" activepage="Pages" mainpage="Notifications" />
            <div className="container">
                <div className="grid grid-cols-12 gap-6 !mx-auto">
                    <div className="xxl:col-span-2 col-span-12"></div>
                    <div className="xxl:col-span-8 xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                        <ul className="list-none mb-0 notification-container">
                            <li>
                                <div className="box un-read">
                                    <div className="box-body !p-4">
                                        <Link href="#!">
                                            <div className="flex items-start mt-0 flex-wrap">
                                                <div className="leading-top">
                                                    <span className="avatar avatar-md online me-4 avatar-rounded">
                                                        <img alt="avatar" src="../../../assets/images/faces/4.jpg" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <div className="sm:flex items-center">
                                                        <div className="sm:mt-0 mt-2">
                                                            <p className="mb-0 text-[.875rem] font-semibold">Emperio</p>
                                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">Project assigned by the manager all<span className="badge bg-primary/10 text-primary font-semibold mx-1">files</span>and<span className="badge bg-primary/10 text-primary font-semibold mx-1">folders</span>were included</p>
                                                            <span className="mb-0 block text-[#8c9097] dark:text-white/50 text-[0.75rem]">12 mins ago</span>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <span className="ltr:float-right rtl:float-left badge bg-light text-[#8c9097] dark:text-white/50 whitespace-nowrap">
                                                                24,Oct 2022
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="box un-read">
                                    <div className="box-body !p-4">
                                        <Link href="#!">
                                            <div className="flex items-start mt-0 flex-wrap">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-md offline me-4 avatar-rounded">
                                                        <img alt="avatar" src="../../../assets/images/faces/15.jpg" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <div className="sm:flex items-center">
                                                        <div className="sm:mt-0 mt-2">
                                                            <p className="mb-0 text-[.875rem] font-semibold">Dwayne Bero</p>
                                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">Admin and other team accepted your work request</p>
                                                            <span className="mb-0 block text-[#8c9097] dark:text-white/50 text-[0.75rem]">17 mins ago</span>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <span className="ltr:float-right rtl:float-left badge bg-light text-[#8c9097] dark:text-white/50 whitespace-nowrap">
                                                                30,Sep 2022
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="box un-read">
                                    <div className="box-body !p-4">
                                        <Link href="#!">
                                            <div className="flex items-start mt-0 flex-wrap">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-md offline me-4 avatar-rounded">
                                                        <img alt="avatar" src="../../../assets/images/faces/11.jpg" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <div className="sm:flex items-center">
                                                        <div className="sm:mt-0 mt-2">
                                                            <p className="mb-0 text-[.875rem] font-semibold">Alister Chuk</p>
                                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">Temporary data will be <span className="badge bg-danger/10 text-danger font-semibold mx-1">deleted</span> once dedicated time complated</p>
                                                            <span className="mb-0 block text-[#8c9097] dark:text-white/50 text-[0.75rem]">4 hrs ago</span>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <span className="ltr:float-right rtl:float-left badge bg-light text-[#8c9097] dark:text-white/50 whitespace-nowrap">
                                                                11,Sep 2021
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="box un-read">
                                    <div className="box-body !p-4">
                                        <Link href="#!">
                                            <div className="flex items-start mt-0 flex-wrap">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-md online me-4 avatar-rounded">
                                                        <img alt="avatar" src="../../../assets/images/faces/5.jpg" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <div className="sm:flex items-center">
                                                        <div className="sm:mt-0 mt-2">
                                                            <p className="mb-0 text-[.875rem] font-semibold">Melissa Blue</p>
                                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">Approved date for sanction of loan is verified <i className="ri-checkbox-circle-line text-success ms-1 text-[1rem] align-middle"></i></p>
                                                            <span className="mb-0 block text-[#8c9097] dark:text-white/50 text-[0.75rem]">5 hrs ago</span>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <span className="ltr:float-right rtl:float-left badge bg-light text-[#8c9097] dark:text-white/50 whitespace-nowrap">
                                                                18,Sep 2021
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="box un-read">
                                    <div className="box-body !p-4">
                                        <Link href="#!">
                                            <div className="flex items-start mt-0 flex-wrap">
                                                <div className="avatar avatar-md bg-primary online me-4 avatar-rounded !text-white">
                                                    ZS
                                                </div>
                                                <div className="flex-grow">
                                                    <div className="sm:flex items-center">
                                                        <div className="sm:mt-0 mt-2">
                                                            <p className="mb-0 text-[.875rem] font-semibold">Zack Slayer</p>
                                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">Social network accounts are at risk check your <span className="badge bg-success/10 text-success font-semibold mx-1">login</span> details</p>
                                                            <span className="mb-0 block text-[#8c9097] dark:text-white/50 text-[0.75rem]">9 hrs ago</span>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <span className="ltr:float-right rtl:float-left badge bg-light text-[#8c9097] dark:text-white/50 whitespace-nowrap">
                                                                15,Sep 2021
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="box un-read">
                                    <div className="box-body !p-4">
                                        <Link href="#!">
                                            <div className="flex items-start mt-0 flex-wrap">
                                                <div className="avatar avatar-md online me-4 avatar-rounded">
                                                    <img alt="avatar" src="../../../assets/images/faces/2.jpg" />
                                                </div>
                                                <div className="flex-grow">
                                                    <div className="sm:flex items-center">
                                                        <div className="sm:mt-0 mt-2">
                                                            <p className="mb-0 text-[.875rem] font-semibold">Monika Karen</p>
                                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">Changed the password of gmail 4 hrs ago. <span className="badge bg-secondary text-white">Update</span></p>
                                                            <span className="mb-0 block text-[#8c9097] dark:text-white/50 text-[0.75rem]">12 hrs ago</span>
                                                        </div>
                                                        <div className="ms-auto">
                                                            <span className="ltr:float-right rtl:float-left badge bg-light text-[#8c9097] dark:text-white/50 whitespace-nowrap">
                                                                12,Sep 2021
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <div className="!text-center mb-4">
                            <button type="button" className="ti-btn ti-btn-info ti-btn-loader">Loading
                                <span className="ti-spinner !h-4 !w-4" role="status"></span>
                            </button>
                        </div>
                    </div>
                    <div className="xxl:col-span-2 col-span-12"></div>
                </div>

            </div>
        </Fragment>
    )
}
Notifications.layout = "Contentlayout"

export default Notifications