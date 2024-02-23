import { Sleeptracking, Watertracking } from '@/shared/data/dashboards/personaldata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React, { Fragment } from 'react'

const Personal = () => {
    return (
        <Fragment>
            <Seo title={"Personal"} />
            <Pageheader currentpage="Personal" activepage="Dashboards" mainpage="Personal" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-9 xl:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-7 col-span-12">
                            <div className="grid grid-cols-12 gap-x-6">
                                <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                                    <div className="box overflow-hidden">
                                        <div className="box-body !p-0">
                                            <div className="p-6">
                                                <div className="flex items-center justify-between">
                                                    <div className="mb-4">
                                                        <span className="block font-semibold text-[0.9375rem]">Water Tracking</span>
                                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] block">87 Points</span>
                                                    </div>
                                                    <div>
                                                        <span className="avatar bg-primary text-white">
                                                            <i className="bi bi-droplet text-[1.125rem]"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="mb-0">
                                                        <span className="text-[1.5rem] font-semibold">8.1</span>
                                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] ms-1">Lt</span>
                                                    </p>
                                                    <span className="text-[#8c9097] dark:text-white/50">0.9 Lt more to reach goal</span>
                                                </div>
                                            </div>
                                            <div id="waterTrack">
                                                <Watertracking />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                                    <div className="box overflow-hidden">
                                        <div className="box-body !p-0">
                                            <div className="p-6">
                                                <div className="flex items-center justify-between">
                                                    <div className="mb-4">
                                                        <span className="block font-semibold text-[0.9375rem]">Sleep Tracking</span>
                                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] block">54 Points</span>
                                                    </div>
                                                    <div>
                                                        <span className="avatar bg-success text-white">
                                                            <i className="bi bi-alarm text-[1.125rem]"></i>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <p className="mb-0">
                                                        <span className="text-[1.5rem] font-semibold">5.2</span>
                                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] ms-1">Hrs</span>
                                                    </p>
                                                    <span className="text-[#8c9097] dark:text-white/50">2.8 Hrs more to reach goal</span>
                                                </div>
                                            </div>
                                            <div id="sleepTrack">
                                                <Sleeptracking />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-5 col-span-12">
                            <div className="box">
                                <div className="box-body !p-0">
                                    <div className="flex flex-wrap items-center border-b border-dashed dark:border-defaultborder/10">
                                        <div className="px-6 py-4 flex-grow border-e border-dashed dark:border-defaultborder/10">
                                            <div className="flex items-center justify-between">
                                                <p className="mb-0 flex-grow text-[0.875rem] font-semibold">Instagram</p>
                                                <div className="ms-0">
                                                    <span className="avatar bg-light !text-danger"><i className="bi bi-instagram text-[1rem]"></i></span>
                                                </div>
                                            </div>
                                            <p className="mb-2 text-[1.5rem] font-semibold">121K</p>
                                            <div className="flex-between">
                                                <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem]  inline-block">6 min ago</span>
                                                <span className="text-danger"><i className="bi bi-arrow-down-right me-1 text-[0.625rem] ms-1"></i>1.5%</span>
                                            </div>
                                        </div>
                                        <div className="px-6 py-4 flex-grow border-b-0 border-dashed dark:border-defaultborder/10">
                                            <div className="flex items-center justify-between">
                                                <p className="mb-0 flex-grow text-[0.875rem] font-semibold">Facebook</p>
                                                <div className="ms-2">
                                                    <span className="avatar bg-light !text-warning"><i className="bi bi-facebook text-[1rem]"></i></span>
                                                </div>
                                            </div>
                                            <p className="mb-2 text-[1.5rem] font-semibold">2.1K</p>
                                            <div className="flex-between">
                                                <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem]  inline-block">1 hr ago</span>
                                                <span className="text-warning"><i className="bi bi-arrow-down-right me-1 text-[0.625rem] ms-1"></i>1.9%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap items-center">
                                        <div className="px-6 py-4 flex-grow border-e border-dashed dark:border-defaultborder/10">
                                            <div className="flex items-center justify-between">
                                                <p className="mb-0 flex-grow text-[0.875rem] font-semibold">Youtube</p>
                                                <div className="ms-1">
                                                    <span className="avatar bg-light !text-info"><i className="bi bi-youtube text-[1rem]"></i></span>
                                                </div>
                                            </div>
                                            <p className="mb-2 text-[1.5rem] font-semibold">1.1M</p>
                                            <div className="flex-between">
                                                <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem]  inline-block">1 day ago</span>
                                                <span className="text-info"><i className="bi bi-arrow-up-right me-1 text-[0.625rem] ms-1"></i>1.9%</span>
                                            </div>
                                        </div>
                                        <div className="px-6 py-4 flex-grow border-dashed dark:border-defaultborder/10">
                                            <div className="flex items-center justify-between">
                                                <p className="mb-0 flex-grow text-[0.875rem] font-semibold">Twitter</p>
                                                <div className="ms-2">
                                                    <span className="avatar bg-light !text-purple"><i className="bi bi-twitter text-[1rem]"></i></span>
                                                </div>
                                            </div>
                                            <p className="mb-2 text-[1.5rem] font-semibold">2.1K</p>
                                            <div className="flex-between">
                                                <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem] inline-block">1 week ago</span>
                                                <span className="text-purple"><i className="bi bi-arrow-up-right me-1 text-[0.625rem] ms-1 "></i>1.9%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-4 col-span-12">
                            <div className="grid grid-cols-12 gap-x-6">
                                <div className="xl:col-span-12 col-span-12">
                                    <div className="box">
                                        <div className="box-body">
                                            <div className="flex justify-between mb-6">
                                                <div className="me-1">
                                                    <h6 className="text-[0.9375rem] font-medium mb-1">Primary Account</h6>
                                                    <Link href="#!" className="text-[0.75rem] text-primary opacity-[8]">Change<i className="bi bi-box-arrow-up-right text-[0.6875rem] ms-1"></i></Link>
                                                </div>
                                                <div className="min-w-fit">
                                                    <div className="avatar bg-primary/10 !text-primary">
                                                        <i className="ri-paypal-fill text-[1.125rem]"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-[1.5rem] font-semibold mb-4">$1,29,389.00</p>
                                            <p className="mb-1 text-[0.875rem]">Sarah Jahn SP</p>
                                            <div className="flex justify-between text-[#8c9097] dark:text-white/50">
                                                <span>XXXX XXXX XXXX 1116</span>
                                                <span>12/24</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <div className="box">
                                        <div className="box-header justify-between">
                                            <div className="box-title">Quick Transfer</div>
                                            <Link href="#!" className="text-primary">View History<i className="bi bi-box-arrow-up-right text-[0.6875rem] ms-2"></i></Link>
                                        </div>
                                        <div className="box-body">
                                            <div className="avatar-list-stacked mb-6">
                                                <span className="avatar avatar-rounded">
                                                    <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src="../../../assets/images/faces/4.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src="../../../assets/images/faces/13.jpg" alt="img" />
                                                </span>
                                                <Link aria-label="anchor" className="avatar bg-light !text-defaulttextcolor avatar-rounded" href="#!">
                                                    <i className="ri-arrow-right-s-line text-[1.125rem]"></i>
                                                </Link>
                                            </div>
                                            <div className="mt-2">
                                                <div className="mt-2">
                                                    <label className="text-[#8c9097] dark:text-white/50 mb-1">Send / Receive</label>
                                                    <div className="input-group inline-flex">
                                                        <span className="input-group-text  !border-e-0 ">Send To</span>
                                                        <input type="text" defaultValue="11167731611" aria-label="First name" className="form-control !border-x-0 border-defaultborder dark:bg-bodybg dark:border-defaultborder/10" />
                                                        <button className="ti-btn ti-btn-light !mb-0" type="button">Check</button>
                                                    </div>
                                                    <label className="text-success text-[0.75rem]">Say Hii</label>
                                                </div>
                                                <div className="input-group mt-4 !flex-nowrap">
                                                    <span className="input-group-text !border-e-0">Amount</span>
                                                    <input type="text" defaultValue="2000" aria-label="First name" className="ti-form-control flex-auto w-full block" />
                                                </div>
                                            </div>
                                            <div className="flex gap-4 mt-6">
                                                <button type="button" aria-label="button" className="ti-btn ti-btn-icon  ti-btn-primary"><i className="bi bi-arrow-down-up"></i></button>
                                                <button type="button" className="ti-btn bg-primary text-white flex-grow">Proceed To Pay</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-8 col-span-12">
                            <div className="grid grid-cols-12 gap-x-6">
                                <div className="xl:col-span-12 col-span-12">
                                    <div className="box">
                                        <div className="box-header">
                                            <div className="box-title">
                                                Discover
                                            </div>
                                        </div>
                                        <div className="box-body">
                                            <div className="grid grid-cols-12 md:gap-y-0 gap-y-4">
                                                <div className="xxl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-4 text-center">
                                                    <Link aria-label="anchor" href="#!" className="ti-btn ti-btn-info !border-0 !px-6 !py-4 leading-none rounded">
                                                        <i className="bi bi-cash-coin text-[1.375rem]"></i>
                                                    </Link>
                                                    <Link href="#!" className="block pt-2 text-[#8c9097] dark:text-white/50 font-semibold">Bills</Link>
                                                </div>
                                                <div className="xxl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-4 text-center">
                                                    <Link aria-label="anchor" href="#!" className="ti-btn ti-btn-primary !border-0 !px-6 !py-4 leading-none rounded">
                                                        <i className="bi bi-shop-window text-[1.375rem]"></i>
                                                    </Link>
                                                    <Link href="#!" className="block pt-2 text-[#8c9097] dark:text-white/50 font-semibold">Shopping</Link>
                                                </div>
                                                <div className="xxl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-4 text-center">
                                                    <Link aria-label="anchor" href="#!" className="ti-btn ti-btn-warning !border-0 !px-6 !py-4 leading-none rounded">
                                                        <i className="bi bi-compass text-[1.375rem]"></i>
                                                    </Link>
                                                    <Link href="#!" className="block pt-2 text-[#8c9097] dark:text-white/50 font-semibold">Travel</Link>
                                                </div>
                                                <div className="xxl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-4 text-center">
                                                    <Link aria-label="anchor" href="#!" className="ti-btn ti-btn-secondary !border-0 !px-6 !py-4 leading-none rounded">
                                                        <i className="bi bi-gift text-[1.375rem]"></i>
                                                    </Link>
                                                    <Link href="#!" className="block pt-2 text-[#8c9097] dark:text-white/50 font-semibold">Food</Link>
                                                </div>
                                                <div className="xxl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-4 text-center">
                                                    <Link aria-label="anchor" href="#!" className="ti-btn ti-btn-danger !border-0 !px-6 !py-4 leading-none rounded">
                                                        <i className="bi bi-currency-bitcoin text-[1.375rem]"></i>
                                                    </Link>
                                                    <Link href="#!" className="block pt-2 text-[#8c9097] dark:text-white/50 font-semibold">Stocks</Link>
                                                </div>
                                                <div className="xxl:col-span-2 xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-4 text-center">
                                                    <Link aria-label="anchor" href="#!" className="ti-btn ti-btn-light !border-0 !px-6 !py-4 leading-none rounded">
                                                        <i className="bi bi-three-dots text-[1.375rem]"></i>
                                                    </Link>
                                                    <Link href="#!" className="block pt-2 text-[#8c9097] dark:text-white/50 font-semibold">Others</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <div className="box">
                                        <div className="box-header justify-between">
                                            <div className="box-title">
                                                Upcoming Events
                                            </div>
                                            <button type="button" className="ti-btn !py-1 !px-2 !text-[0.75rem] ti-btn-light">View All</button>
                                        </div>
                                        <div className="box-body">
                                            <ul className="list-none mb-0 personal-upcoming-events">
                                                <li>
                                                    <div className="flex items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded bg-light">
                                                                <i className="bi bi-calendar2-heart text-[1rem] text-primary"></i>
                                                            </span>
                                                        </div>
                                                        <div className="flex-grow">
                                                            <span>Meeting with <span className="text-primary font-semibold">Umar Xai</span></span>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">2 Hours</span>
                                                        </div>
                                                        <div>
                                                            <span className="badge bg-primary/10 text-primary whitespace-nowrap">11-06-2023</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded">
                                                                <img src="../../../assets/images/faces/2.jpg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-grow">
                                                            <span><span className="text-primary font-semibold">Shin Map</span> Birthday Party</span>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">5 Hours</span>
                                                        </div>
                                                        <div>
                                                            <span className="badge bg-success/10 text-success whitespace-nowrap">15-06-2023</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded bg-light">
                                                                <i className="bi bi-compass text-[1rem] text-pink"></i>
                                                            </span>
                                                        </div>
                                                        <div className="flex-grow">
                                                            <span>Holiday Trip To Italy</span>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">1 Week</span>
                                                        </div>
                                                        <div>
                                                            <span className="badge bg-danger/10 text-danger whitespace-nowrap">20-06-2023</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded bg-light">
                                                                <i className="bi bi-balloon-heart text-[1rem] text-success"></i>
                                                            </span>
                                                        </div>
                                                        <div className="flex-grow">
                                                            <span>Wedding Anniversary</span>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">1 Day</span>
                                                        </div>
                                                        <div>
                                                            <span className="badge bg-secondary/10 text-secondary whitespace-nowrap">24-07-2023</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded">
                                                                <img src="../../../assets/images/faces/7.jpg" alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-grow">
                                                            <span>Meeting with <span className="text-primary font-semibold">Irav Ert</span></span>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">45 Minutes</span>
                                                        </div>
                                                        <div>
                                                            <span className="badge bg-warning/10 text-warning whitespace-nowrap">15-06-2023</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <div className="box">
                                        <div className="box-header justify-between">
                                            <div className="box-title">
                                                Recent Messages
                                            </div>
                                            <button type="button" className="ti-btn ti-btn-light !py-1 !px-2 !text-[0.75rem]">View All</button>
                                        </div>
                                        <div className="box-body">
                                            <div className="avatar-list-stacked mb-6">
                                                <span className="avatar avatar-rounded">
                                                    <img src="../../../assets/images/faces/1.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src="../../../assets/images/faces/9.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src="../../../assets/images/faces/3.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src="../../../assets/images/faces/11.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src="../../../assets/images/faces/6.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-rounded">
                                                    <img src="../../../assets/images/faces/14.jpg" alt="img" />
                                                </span>
                                                <Link aria-label="anchor" className="avatar bg-light !text-defaulttextcolor avatar-rounded" href="#!">
                                                    <i className="ri-arrow-right-s-line text-[1.125rem]"></i>
                                                </Link>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="font-semibold">Messages</div>
                                                <div><i className="ri-check-double-line me-1 align-middle text-[#8c9097] dark:text-white/50 inline-flex"></i>Mark as read</div>
                                            </div>
                                            <div className="mt-6">
                                                <ul className="list-none mb-0 personal-messages-list">
                                                    <li>
                                                        <div className="flex flex-wrap items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded">
                                                                    <img src="../../../assets/images/faces/12.jpg" alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="flex-grow">
                                                                <span className="font-semibold block">Elin Misk</span>
                                                                <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50 block text-truncate message">Hello there! How are you doing? Call me when...</span>
                                                            </div>
                                                            <div className="text-end">
                                                                <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">2 min</span>
                                                                <span className="badge bg-primary !rounded-full text-white">2</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="flex flex-wrap items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-rounded">
                                                                    <img src="../../../assets/images/faces/2.jpg" alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="flex-grow">
                                                                <span className="font-semibold block">Shakira Shen</span>
                                                                <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50 block text-truncate message">I would like to discuss about that assets...</span>
                                                            </div>
                                                            <div className="text-end">
                                                                <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">9:43Pm</span>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="flex flex-wrap items-center">
                                                            <div className="me-2">
                                                                <span className="avatar bg-primary/10 !text-primary avatar-rounded">
                                                                    <i className="ri-user-line text-[1.125rem]"></i>
                                                                </span>
                                                            </div>
                                                            <div className="flex-grow">
                                                                <span className="font-semibold block">Sebastian</span>
                                                                <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50 block text-truncate message">Shall we go to the cafe at downtown...</span>
                                                            </div>
                                                            <div className="text-end">
                                                                <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">Yesterday</span>
                                                                <span className="badge bg-primary !rounded-full text-white">2</span>
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
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xxl:col-span-12 xl:col-span-4 col-span-12">
                            <div className="box">
                                <div className="box-body">
                                    <div className="flex items-start justify-between mb-6">
                                        <div>
                                            <span className="block text-[0.9375rem] font-semibold">My Profile</span>
                                            <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">67% Completed - <Link href="#!" className="text-center text-primary">Click Here<i className="bi bi-box-arrow-up-right text-[0.625rem] ms-2 align-middle"></i></Link></span>
                                        </div>
                                        <div>
                                            <div className="hs-dropdown ti-dropdown">
                                                <Link aria-label="anchor" href="#!"
                                                    className="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                                                    aria-expanded="false">
                                                    <i className="fe fe-more-vertical text-[0.8rem]"></i>
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
                                    <div className="text-center mb-4">
                                        <div className="mb-4">
                                            <span className="avatar avatar-xxl avatar-rounded circle-progress p-1">
                                                <img src="../../../assets/images/faces/9.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <h5 className="font-semibold !mb-0 text-[1.25rem]">Json Taylor</h5>
                                            <p className="text-[.8125rem] text-[#8c9097] dark:text-white/50">jsontaylor345@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className=" text-center">
                                        <Link href="/components/pages/profile/" className="ti-btn ti-btn-primary !me-[0.375rem] !font-medium !py-1 !px-2 !text-[0.75rem]">
                                            Edit Profile
                                        </Link>
                                        <Link href="/components/pages/profile/" className="ti-btn bg-primary text-white !py-1 !px-2 !text-[0.75rem]">
                                            View Profile
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-12 xl:col-span-4 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">My Goals</div>
                                    <button type="button" className="ti-btn ti-btn-light !py-1 !px-2 !text-[0.75rem]">View All</button>
                                </div>
                                <div className="box-body">
                                    <ul className="list-none personal-goals-list mb-0">
                                        <li>
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-rounded bg-secondary/10 !text-secondary">
                                                        <i className="bi bi-globe2 text-[1.125rem]"></i>
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="block font-semibold">Maldives Trip</span>
                                                        <span className="block text-secondary">80%</span>
                                                    </div>
                                                    <div className="progress progress-animate progress-xs" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar progress-bar-striped !bg-secondary w-[80%]"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-rounded bg-warning/10 !text-warning">
                                                        <i className="bi bi-balloon-heart text-[1.125rem]"></i>
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="block font-semibold">Savings For Birthday</span>
                                                        <span className="block text-warning">90%</span>
                                                    </div>
                                                    <div className="progress progress-animate progress-xs" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar progress-bar-striped !bg-warning w-[90%]"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar avatar-rounded bg-primary/10 !text-primary">
                                                        <i className="bi bi-lightning text-[1.125rem]"></i>
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <div className="flex items-center justify-between mb-2">
                                                        <span className="block font-semibold">Join Guitar Class</span>
                                                        <span className="block text-primary">80%</span>
                                                    </div>
                                                    <div className="progress progress-animate progress-xs" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                                        <div className="progress-bar progress-bar-striped bg-primary w-[40%]"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-12 xl:col-span-4 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Favourite Contacts
                                    </div>
                                    <button type="button" className="ti-btn ti-btn-light !py-1 !px-2 !text-[0.75rem]">View All</button>
                                </div>
                                <div className="box-body">
                                    <ul className="list-none personal-favourite-contacts mb-0">
                                        <li>
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar">
                                                        <img src="../../../assets/images/faces/2.jpg" alt="" className="rounded-md" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <span className="font-semibold block mb-1">Kiara Advain</span>
                                                    <span className="text-[#8c9097] dark:text-white/50 block text-[0.75rem]">+(72)-8765700876</span>
                                                </div>
                                                <div>
                                                    <Link aria-label="anchor" href="#!" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                    <div className="hs-dropdown ti-dropdown">
                                                        <Link aria-label="anchor" href="#!"
                                                            className="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-[#8c9097] dark:text-white/50 !text-[0.8rem] !py-1 !px-2  !font-medium"
                                                            aria-expanded="false">
                                                            <i className="bi bi-three-dots text-[0.8rem]"></i>
                                                        </Link>
                                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                            <li className="!mb-0"><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                                href="#!">Action</Link></li>
                                                            <li className="!mb-0"><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                                href="#!">Another Action</Link></li>
                                                            <li className="!mb-0"><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                                href="#!">Something Else Here</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar">
                                                        <img src="../../../assets/images/faces/9.jpg" alt="" className="rounded-md" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <span className="font-semibold block mb-1">Jason Mama</span>
                                                    <span className="text-[#8c9097] dark:text-white/50 block text-[0.75rem]">+(72)-234226333</span>
                                                </div>
                                                <div>
                                                    <Link aria-label="anchor" href="#!" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                    <div className="hs-dropdown ti-dropdown">
                                                        <Link aria-label="anchor" href="#!"
                                                            className="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-[#8c9097] dark:text-white/50 !text-[0.8rem] !py-1 !px-2  !font-medium"
                                                            aria-expanded="false">
                                                            <i className="bi bi-three-dots text-[0.8rem]"></i>
                                                        </Link>
                                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                            <li className="!mb-0"><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                                href="#!">Action</Link></li>
                                                            <li className="!mb-0"><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                                href="#!">Another Action</Link></li>
                                                            <li className="!mb-0"><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                                href="#!">Something Else Here</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-center">
                                                <div className="me-2">
                                                    <span className="avatar">
                                                        <img src="../../../assets/images/faces/10.jpg" alt="" className="rounded-md" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <span className="font-semibold block mb-1">Stuart Edward</span>
                                                    <span className="text-[#8c9097] dark:text-white/50 block text-[0.75rem]">+(11)-16743256</span>
                                                </div>
                                                <div>
                                                    <Link aria-label="anchor" href="#!" className="text-danger me-2"><i className="bi bi-heart-fill"></i></Link>
                                                    <div className="hs-dropdown ti-dropdown">
                                                        <Link aria-label="anchor" href="#!"
                                                            className="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-[#8c9097] dark:text-white/50 !text-[0.8rem] !py-1 !px-2  !font-medium"
                                                            aria-expanded="false">
                                                            <i className="bi bi-three-dots text-[0.8rem]"></i>
                                                        </Link>
                                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                            <li className="!mb-0"><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                                href="#!">Action</Link></li>
                                                            <li className="!mb-0"><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                                href="#!">Another Action</Link></li>
                                                            <li className="!mb-0"><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                                href="#!">Something Else Here</Link></li>
                                                        </ul>
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
            </div>
        </Fragment>
    )
}
Personal.layout = "Contentlayout"

export default Personal