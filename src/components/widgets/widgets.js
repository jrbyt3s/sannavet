
import { Applicants, Bitcoin, Dash, Ethereum, Golem, Sessions, Targetreport, TotalRevenue, WorldMap } from '@/shared/data/widgets/widgetsdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import store from '@/shared/redux/store'
import Link from 'next/link'
import React, { Fragment, useEffect } from 'react'

const Widgets = () => {

    return (
        <Fragment>
            <Seo title={"Widgets"} />
            <Pageheader currentpage="Widgets" activepage="Widgets" mainpage="Widgets" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-6 md:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="flex items-start">
                                <div className="me-4">
                                    <span className="avatar avatar-sm shadow-sm !rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-info" viewBox="0 0 128 128"><path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z" /><path fill="#fff" d="M94.3 71.4c-.5-3.6-2.3-6.4-5.4-8.2-1.4-.8-3.1-1.4-4.7-2.1.2-.1.3-.3.4-.3 7.9-4.1 7.2-16.3 1.5-20.5-2.3-1.7-4.9-2.8-7.7-3.4-2-.4-3.9-.7-6-1.1 0-3.5.1-8.5.1-12.4H65c0 3.8-.1 8.7-.1 12.1H59c0-3.5 0-8.3.1-12.1h-7.4c0 4-.1 8.8-.1 12.3-5.1 0-10-.1-15-.1 0 2.7 0 5.3-.1 7.9h3c.9 0 1.9 0 2.8.1 2.6.2 3.9 1.6 3.9 4.2l-.3 31.9c0 2.3-1 3.3-3.3 3.3h-5c-.5 3-1 5.9-1.6 8.9 5 .1 10 .1 15 .2 0 3.8 0 8.7-.1 12.7h7.4c0-4 .1-8.7.1-12.5 2.1.1 4 .1 5.9.2 0 3.8-.1 8.4-.1 12.3h7.4c0-4 .1-8.7.1-12.4.3 0 .5-.1.6-.1 3.5-.6 7.2-.9 10.6-1.7 4.5-1.1 8.1-3.7 9.9-8.2 1.7-3.6 2-7.2 1.5-11zM59 44.3c4.6 0 9.1-.4 13.4 1.5 2.8 1.2 4.2 3.5 4 6.3-.2 2.9-1.9 5-4.8 6-4.1 1.3-8.3 1.3-12.7 1.1 0-5 .1-9.8.1-14.9zm16.2 37.1c-4.1 1.8-8.5 1.8-12.8 1.9-1.2 0-2.4-.1-3.8-.1.1-5.5.1-10.9.2-16.4 5.6 0 11.2-.4 16.5 1.9 2.7 1.2 4.3 3.3 4.3 6.4 0 3.1-1.6 5.1-4.4 6.3z" /></svg>
                                    </span>
                                </div>
                                <div className="flex-grow">
                                    <div className="flex flex-wrap items-center justify-between text-[.875rem] mb-1">
                                        <span className="flex-grow">Bitcoin</span>
                                        <span className="ms-1 text-[#8c9097] dark:text-white/50">BTC</span>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between">
                                        <h5 className="font-semibold mb-0">$12,800</h5>
                                        <div className="flex-grow">
                                            <span className="ms-2 badge bg-success/10 text-success rounded-full">+25.8%</span>
                                        </div>
                                        <div id="btcCoin">
                                            <Bitcoin />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-6 md:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="flex items-start">
                                <div className="me-4">
                                    <span className="avatar avatar-sm shadow-sm !rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-success" viewBox="0 0 128 128"><path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z" /><path fill="#fff" d="M65.2 87.2v22.7l28.1-39.5zM92.3 63.1l-27.1-45v32.7zM65.2 53.3v28l26.9-15.7zM35.8 63.1l27-45v32.7zM62.8 53.3v28L35.9 65.6zM62.8 87.2v22.7L34.7 70.4z" /></svg>
                                    </span>
                                </div>
                                <div className="flex-grow">
                                    <div className="flex flex-wrap items-center justify-between text-[.875rem] mb-1">
                                        <span className="flex-grow">Ethereum</span>
                                        <span className="ms-1 text-[#8c9097] dark:text-white/50">ETH</span>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between">
                                        <h5 className="font-semibold mb-0">$18,600</h5>
                                        <div className="flex-grow">
                                            <span className="ms-2 badge bg-success/10 text-success rounded-full">+12.9%</span>
                                        </div>
                                        <div id="ethCoin">
                                            <Ethereum />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-6 md:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="flex items-start">
                                <div className="me-4">
                                    <span className="avatar avatar-sm shadow-sm !rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-danger" viewBox="0 0 128 128"><path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z" /><path fill="#fff" d="M20.8 89.3c1.4-4.1 2.7-7.9 4.1-11.8.1-.4.9-.7 1.3-.7 2.3-.1 4.7 0 7 0H79c1.2 0 1.8-.4 2.1-1.5 2.5-7.5 5.2-15 7.8-22.5.1-.4.2-.8.4-1.4H33.8c1.4-4.2 2.8-8.1 4.1-12 .1-.3.7-.6 1.1-.6 1.4-.1 2.8 0 4.2 0 18.8 0 37.6.1 56.3-.1 5.6-.1 11.6 4.3 9.2 12.5-1.8 6.1-4.1 12.1-6.2 18.2-.7 2.1-1.4 4.1-2.1 6.2-2.6 7.2-7.9 11.6-15.2 13.6-.7.2-1.4.2-2.1.2H22.3c-.4-.1-.8-.1-1.5-.1z" /><path fill="#fff" d="M55.9 58.1c-1.4 4-2.8 7.7-4.2 11.4-.1.3-.7.5-1 .5H19.2c-.1 0-.3-.1-.6-.2 1.3-3.7 2.6-7.3 4-10.9.1-.3.7-.7 1-.7 10.7-.1 21.4-.1 32.3-.1z" /></svg>
                                    </span>
                                </div>
                                <div className="flex-grow">
                                    <div className="flex flex-wrap items-center justify-between text-[.875rem] mb-1">
                                        <span className="flex-grow">Dash</span>
                                        <span className="ms-1 text-[#8c9097] dark:text-white/50">DSH</span>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between">
                                        <h5 className="font-semibold mb-0">$16,580</h5>
                                        <div className="flex-grow">
                                            <span className="ms-2 badge bg-success/10 text-success rounded-full">+15.7%</span>
                                        </div>
                                        <div id="dshCoin">
                                            <Dash />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-6 md:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="flex items-start">
                                <div className="me-4">
                                    <span className="avatar avatar-sm shadow-sm !rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-warning" viewBox="0 0 128 128"><path d="M64 128C28.7 128 0 99.3 0 64S28.7 0 64 0s64 28.7 64 64-28.7 64-64 64z" /><path fill="#fff" d="M63.8 22.6c3.7-.1 7.2.6 10.2 2.7 1.4.9 2.4.8 3.6-.5 2.4-2.6 5-5 7.5-7.6.9-.9 1.8-1.5 2.9-.2 1.1 1.1.8 2-.2 2.9-2.6 2.6-5 5.2-7.6 7.8-1.1 1.1-1.3 1.9-.5 3.3 5.8 10.4 2.9 22.5-8.6 28.1-1.1.5-2.3.8-3.5 1-1.4.3-1.9 1-1.9 2.5.1 3 .1 6 0 8.9 0 1.6.5 2.3 2.1 2.7 6.2 1.5 10.6 5.2 13.3 10.9 2.6 5.5 1.9 15.4-3.8 21.3-4.8 4.9-13.2 6.9-19.5 4.4-7.5-3-12.1-9.6-12.2-17.5-.1-9.6 5.1-16.4 14.3-19 1.4-.4 2.2-1 2.1-2.5-.1-3.4 0-6.8-.2-10.2 0-.6-1.1-1.4-1.8-1.6-6-1.6-10.4-5.2-12.9-10.8-5.6-13 4.3-27.4 16.7-26.6zM79 92.8c0-7.9-6.9-15.1-14.5-15.1-8-.1-15.3 7-15.4 15-.1 7.9 7.3 15.6 14.9 15.5 8.1-.1 15-7.2 15-15.4zM49.3 41.1c0 8.6 6.6 15.6 14.9 15.6 7.7 0 14.8-7.1 14.8-15.1 0-7.4-5.5-15.2-14.7-15-8.4.1-14.9 6.3-15 14.5z" /></svg>
                                    </span>
                                </div>
                                <div className="flex-grow">
                                    <div className="flex flex-wrap items-center justify-between text-[.875rem] mb-1">
                                        <span className="flex-grow">Golem</span>
                                        <span className="ms-1 text-[#8c9097] dark:text-white/50">GLM</span>
                                    </div>
                                    <div className="flex flex-wrap items-center justify-between">
                                        <h5 className="font-semibold mb-0">$12,545</h5>
                                        <div className="flex-grow">
                                            <span className="ms-2 badge bg-success/10 text-success rounded-full">+12.1%</span>
                                        </div>
                                        <div id="glmCoin">
                                            <Golem />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xxl:col-span-2 xl:col-span-4 lg:col-span-12 col-span-12">
                    <div className="">
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box custom-box">
                                <div className="box-body">
                                    <div className="flex flex-wrap items-start justify-between ">
                                        <div className="flex-grow">
                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">Total Candidates</p>
                                            <div className="flex items-center">
                                                <span className="text-[1.25rem] font-semibold">9,231</span>
                                                <span className="text-[0.75rem] text-success ms-2"><i className="ti ti-trending-up me-1 inline-block"></i>0.5%</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="avatar avatar-md !rounded-full bg-primary/10 !text-primary text-[1.125rem]">
                                                <i className="bi bi-people-fill text-[1rem]"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box custom-box">
                                <div className="box-body">
                                    <div className="flex flex-wrap items-start justify-between">
                                        <div className="flex-grow">
                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">Total Subscriptions</p>
                                            <div className="flex items-center">
                                                <span className="text-[1.25rem] font-semibold">3,571</span>
                                                <span className="text-[0.75rem] text-success ms-2"><i className="ti ti-trending-up me-1 inline-block"></i>0.42%</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="avatar avatar-md !rounded-full bg-secondary/10 !text-secondary text-[1.125rem]">
                                                <i className="bi bi-person-lines-fill text-[1rem]"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box custom-box">
                                <div className="box-body">
                                    <div className="flex flex-wrap items-start justify-between">
                                        <div className="flex-grow">
                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">Page Views</p>
                                            <div className="flex items-center">
                                                <span className="text-[1.25rem] font-semibold">1,986</span>
                                                <span className="text-[0.75rem] text-success ms-2"><i className="ti ti-trending-up me-1 inline-block"></i>5.1%</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="avatar avatar-md !rounded-full bg-success/10 !text-success text-[1.125rem]">
                                                <i className="bi bi-eye-fill text-[1rem]"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box custom-box">
                                <div className="box-body">
                                    <div className="flex flex-wrap items-start justify-between">
                                        <div className="flex-grow">
                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">New Registrations</p>
                                            <div className="flex items-center">
                                                <span className="text-[1.25rem] font-semibold">773</span>
                                                <span className="text-[0.75rem] text-success ms-2"><i className="ti ti-trending-up me-1 inline-block"></i>3.5%</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="avatar avatar-md !rounded-full bg-info/10 !text-info text-[1.125rem]">
                                                <i className="bi bi-file-earmark-text-fill text-[1rem]"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-5 xl:col-span-8 lg:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-6 col-span-12">
                            <div className="box custom-box">
                                <div className="box-body">
                                    <div className="flex flex-wrap items-start mb-2">
                                        <div className="flex-grow">
                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">Total Recruiters</p>
                                        </div>
                                        <div className="ms-2">
                                            <span className="avatar avatar-md !bg-info text-[1.125rem]">
                                                <i className="bi bi-person-square"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <span className="text-[1.25rem] font-semibold">9,231</span>
                                    <span className="text-[0.75rem] text-success ms-1"><i className="ti ti-trending-up me-1 inline-block"></i>0.5%</span>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                            <div className="box custom-box box-bg-primary">
                                <div className="box-body">
                                    <div className="flex items-start mb-2">
                                        <div className="flex-grow">
                                            <p className="mb-0 opacity-[0.7] !text-white">Premium Recruiters</p>
                                        </div>
                                        <div className="ms-2">
                                            <span className="avatar avatar-md bg-secondary shadow-sm text-[1.125rem]">
                                                <i className="bi bi-person-square"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <span className="text-[1.25rem] font-semibold !text-white">9,231</span>
                                    <span className="text-[0.75rem] opacity-[0.7] ms-1 !text-white"><i className="ti ti-trending-up me-1 inline-block"></i>0.5%</span>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                            <div className="box custom-box overflow-hidden">
                                <div className="box-body !p-0">
                                    <div className="p-4">
                                        <div className="flex items-center mb-2">
                                            <span className="avatar avatar-md !rounded-full bg-secondary me-2">
                                                <i className="bi bi-receipt text-[1rem]"></i>
                                            </span>
                                            <p className="mb-0 flex-grow text-[#8c9097] dark:text-white/50">Total Revenue</p>
                                        </div>
                                        <span className="text-[1.25rem] font-semibold">$12,897</span>
                                        <span className="text-[0.75rem] text-success ms-1"><i className="ti ti-trending-up me-1 inline-block"></i>3.5%</span>
                                    </div>
                                    <div id="totalRevenue">
                                        <TotalRevenue />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                            <div className="box custom-box">
                                <div className="box-body">
                                    <div className="flex items-center mb-4">
                                        <span className="avatar avatar-md !rounded-full bg-success me-2">
                                            <i className="bi bi-people text-[1rem]"></i>
                                        </span>
                                        <p className="mb-0 flex-grow text-[#8c9097] dark:text-white/50">Active Members</p>
                                    </div>
                                    <span className="text-[1.25rem] font-semibold">$12,897</span>
                                    <span className="text-[0.75rem] text-success ms-1"><i className="ti ti-trending-up me-1 inline-block"></i>3.5%</span>
                                    <div className="font-normal flex items-center mb-2 mt-3">
                                        <p className="mb-0 flex-grow">Active Candidates</p>
                                        <span>3,274</span>
                                    </div>
                                    <div className="progress progress-xs mb-4">
                                        <div className="progress-bar !bg-success w-1/4" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <div className="font-normal flex items-center mb-2">
                                        <p className="mb-0 flex-grow">Active Recruiters</p>
                                        <span>8,726</span>
                                    </div>
                                    <div className="progress progress-xs mb-2">
                                        <div className="progress-bar !bg-success w-3/4" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="box-footer text-center">
                                    <div className="grid">
                                        <Link href="#!" className="text-primary">View Details <i className="ti ti-external-link"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-7 lg:col-span-7 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box custom-box">
                                <div className="box-body">
                                    <div className="flex items-center mb-4">
                                        <div className="flex-grow flex items-center">
                                            <div className="me-2">
                                                <span className="avatar rounded-[0.375rem] !bg-primary !text-white text-[1.25rem]"><i className="bi bi-people"></i></span>
                                            </div>
                                            <div className="flex-grow">
                                                <p className="mb-0 ">Premium Recruiters</p>
                                                <span className="text-success text-[0.75rem]">7 New</span>
                                            </div>
                                        </div>
                                        <div>
                                            <Link href="#!" className="ti-btn ti-btn-icon ti-btn-primary !rounded-full btn-wave mb-0" aria-label="View All"><i className="bi bi-chevron-right rtl:rotate-180"></i></Link>
                                        </div>
                                    </div>
                                    <p className="mb-3 text-[1.25rem] font-semibold">386</p>
                                    <p className="mb-2 text-[#8c9097] dark:text-white/50 font-normal">Recents</p>
                                    <div className="flex items-center justify-between">
                                        <div className="avatar-list-stacked">
                                            <Link href="#!" className="avatar avatar-sm rounded-circle overflow-hidden" aria-label="Mis x matched"><img src="../../../assets/images/faces/2.jpg" alt="img" className="w-full" /></Link>
                                            <Link href="#!" className="avatar avatar-sm rounded-circle overflow-hidden" aria-label="Barbel Bob"><img src="../../../assets/images/faces/12.jpg" alt="img" className="w-full" /></Link>
                                            <Link href="#!" className="avatar avatar-sm rounded-circle overflow-hidden" aria-label="Phan Rel"><img src="../../../assets/images/faces/20.jpg" alt="img" className="w-full" /></Link>
                                            <Link href="#!" className="avatar avatar-sm rounded-circle overflow-hidden bg-primary text-white" >+4</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box custom-box">
                                <div className="box-body">
                                    <div className="flex items-center">
                                        <div className="flex-grow">
                                            <p className="mb-1 text-[1.25rem] font-semibold text-default">1,773</p>
                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">Active Members</p>
                                            <p className="mb-0 text-[.6875rem]"><Link href="#!" className="text-success underline">View All</Link></p>
                                        </div>
                                        <div className="ms-2">
                                            <span className="avatar !bg-info !text-white !rounded-full text-[1.25rem]"><i className="bi bi-people-fill"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box custom-box">
                                <div className="box-body">
                                    <div className="flex items-center">
                                        <div className="flex-grow">
                                            <p className="mb-1 text-[1.25rem] font-semibold text-default">116</p>
                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">Registrations</p>
                                            <p className="mb-0 text-[.6875rem]"><Link href="#!" className="text-success underline">View All</Link></p>
                                        </div>
                                        <div className="ms-2">
                                            <span className="avatar !bg-success !text-white !rounded-full text-[1.25rem]"><i className="bi bi-file-earmark-text"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-2 xl:col-span-5 lg:col-span-5 col-span-12">
                    <div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box custom-box box-bg-primary">
                                <div className="box-header !bg-white/20 !border-b-0 justify-between">
                                    <div className="box-title !text-white before:hidden">
                                        Premium Recruiters
                                    </div>
                                    <div>
                                        <button aria-label="button" type="button" className="ti-btn ti-btn-sm !bg-primary !mb-0"><i className="ti ti-chevron-right rtl:rotate-180"></i></button>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="flex flex-wrap items-start">
                                        <div className="flex-grow overflow-hidden">
                                            <p className="mb-2 leading-none text-[1.25rem] font-semibold !text-white">9,231</p>
                                            <p className="mb-0 text-[0.75rem] text-white opacity-[0.7]">
                                                <span className="!text-white"><i className="bi bi-caret-up-fill !text-white"></i> 2.3%</span>
                                                <span className="opacity-[0.7] ms-1 !text-white">From Last Month</span>
                                            </p>
                                        </div>
                                        <div>
                                            <span className="avatar avatar-sm bg-success !rounded-full"><i className="bi bi-people-fill"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box custom-box">
                                <div className="box-body !p-0">
                                    <div className="p-4">
                                        <div className="flex flex-wrap mb-1">
                                            <Link aria-label="anchor" href="#!" className="pe-2">
                                                <span className="avatar border text-[#8c9097] dark:text-white/50 !text-primary dark:border-defaultborder/10"><i className="ri-apple-fill text-[1.125rem]"></i></span>
                                            </Link>
                                            <div className="flex-grow">
                                                <div className="flex flex-wrap items-center justify-between mb-1">
                                                    <span className="font-semibold">Apple</span>
                                                    <span className="!text-success text-end"><i className="ti ti-trending-up text-[.6875rem] me-1 inline-block"></i>0.14%</span>
                                                </div>
                                                <div className="flex flex-wrap items-center justify-between text-[0.75rem] mb-4">
                                                    <span className="text-[#8c9097] dark:text-white/50">$12,289.44</span>
                                                    <span className="text-success text-end">+$1,780.80</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <Link href="#!" className="flex-grow ti-btn !py-1 !px-2 !text-[0.75rem] ti-btn-light me-2">Short</Link>
                                            <Link href="#!" className="flex-grow ti-btn !py-1 !px-2 !text-[0.75rem] ti-btn-primary">Buy</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box custom-box">
                                <div className="box-body !p-0">
                                    <div className="p-4">
                                        <div className="flex flex-wrap mb-1">
                                            <Link aria-label="anchor" href="#!" className="pe-2">
                                                <span className="avatar border text-[#8c9097] dark:text-white/50 !text-primary dark:border-defaultborder/10"><i className="ri-bit-coin-fill text-[1.125rem]"></i></span>
                                            </Link>
                                            <div className="flex-grow">
                                                <div className="flex flex-wrap items-center justify-between mb-1">
                                                    <span className="font-semibold">Bitcoin</span>
                                                    <span className="text-success text-end"><i className="ti ti-trending-up text-[.6875rem] me-1 inline-block"></i>2.14%</span>
                                                </div>
                                                <div className="flex flex-wrap items-center justify-between text-[0.75rem] mb-3">
                                                    <span className="text-[#8c9097] dark:text-white/50">$58,151.02</span>
                                                    <span className="text-success text-end">+$5,745.62</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <Link href="#!" className="flex-grow ti-btn !py-1 !px-2 !text-[0.75rem] ti-btn-light me-2">Short</Link>
                                            <Link href="#!" className="flex-grow ti-btn !py-1 !px-2 !text-[0.75rem] ti-btn-primary">Buy</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xxl:col-span-3 sm:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex-grow flex items-start">
                                    <div className="me-2">
                                        <span className="avatar avatar-md !text-primary border bg-light dark:border-defaultborder/10"><i className="ti ti-users text-[1.125rem]"></i></span>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="font-semibold text-[.875rem] mb-0">Total Candidates</p>
                                        <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem] opacity-[0.7]">Magna sit elitr kasd consetetur.</p>
                                    </div>
                                </div>
                                <div className="hs-dropdown ti-dropdown">
                                    <Link aria-label="anchor" href="#!" className="ti-btn ti-btn-icon ti-btn-sm ti-btn-light"><i className="ti ti-dots"></i></Link>
                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                        <li><Link href="#!" className="ti-dropdown-item">Action</Link></li>
                                        <li><Link href="#!" className="ti-dropdown-item">Another Action</Link></li>
                                        <li><Link href="#!" className="ti-dropdown-item">Something Else Here</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-center mb-0">
                                <p className="mb-0 text-[1.25rem] font-semibold">2,460</p>
                                <span className="text-[#8c9097] dark:text-white/50 ms-2"><i className="ti ti-trending-up align-middle text-success me-1 inline-block"></i>2.5%</span>
                            </div>
                            <div className="flex items-center">
                                <div className="flex-grow">
                                    <div className="progress progress-xs">
                                        <div className="progress-bar bg-primary w-[14%]" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="ms-3">
                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">14% Target</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 sm:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex-grow flex items-start">
                                    <div className="me-2">
                                        <span className="avatar avatar-md !text-secondary border bg-light dark:border-defaultborder/10"><i className="ti ti-user-circle text-[1.125rem]"></i></span>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="font-semibold text-[.875rem] mb-0">Recruiters</p>
                                        <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem] opacity-[0.7]">Elitr at gubergren sit sed.</p>
                                    </div>
                                </div>
                                <div className="hs-dropdown ti-dropdown">
                                    <Link aria-label="anchor" href="#!" className="ti-btn ti-btn-icon ti-btn-sm ti-btn-light"><i className="ti ti-dots"></i></Link>
                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                        <li><Link href="#!" className="ti-dropdown-item">Action</Link></li>
                                        <li><Link href="#!" className="ti-dropdown-item">Another Action</Link></li>
                                        <li><Link href="#!" className="ti-dropdown-item">Something Else Here</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-center mb-0">
                                <p className="mb-0 text-[1.25rem] font-semibold">7,539</p>
                                <span className="text-[#8c9097] dark:text-white/50 ms-2"><i className="ti ti-trending-up align-middle text-success me-1 inline-block"></i>3.1%</span>
                            </div>
                            <div className="flex items-center">
                                <div className="flex-grow">
                                    <div className="progress progress-xs">
                                        <div className="progress-bar !bg-secondary w-[55%]" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="ms-3">
                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">55% Target</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 sm:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex-grow flex items-start">
                                    <div className="me-2">
                                        <span className="avatar avatar-md !text-success border bg-light dark:border-defaultborder/10"><i className="ti ti-view-360 text-[1.125rem]"></i></span>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="font-semibold text-[.875rem] mb-0">Page Views</p>
                                        <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem] opacity-[0.7]">Sed duo ut sanctus gubergren.</p>
                                    </div>
                                </div>
                                <div className="hs-dropdown ti-dropdown">
                                    <Link aria-label="anchor" href="#!" className="ti-btn ti-btn-icon ti-btn-sm ti-btn-light"><i className="ti ti-dots"></i></Link>
                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                        <li><Link href="#!" className="ti-dropdown-item">Action</Link></li>
                                        <li><Link href="#!" className="ti-dropdown-item">Another Action</Link></li>
                                        <li><Link href="#!" className="ti-dropdown-item">Something Else Here</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-center mb-0">
                                <p className="mb-0 text-[1.25rem] font-semibold">13,693</p>
                                <span className="text-[#8c9097] dark:text-white/50 ms-2"><i className="ti ti-trending-up align-middle text-success me-1 inline-block"></i>5.4%</span>
                            </div>
                            <div className="flex items-center">
                                <div className="flex-grow">
                                    <div className="progress progress-xs">
                                        <div className="progress-bar !bg-success w-[24%]" aria-valuenow="24" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="ms-3">
                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">24% Target</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 sm:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="flex items-start justify-between mb-6">
                                <div className="flex-grow flex items-start">
                                    <div className="me-2">
                                        <span className="avatar avatar-md !text-indigo border bg-light dark:border-defaultborder/10"><i className="ti ti-view-360 text-[1.125rem]"></i></span>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="font-semibold text-[.875rem] mb-0">Total Subscriptions</p>
                                        <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem] opacity-[0.7]">Invidunt magna voluptua.</p>
                                    </div>
                                </div>
                                <div className="hs-dropdown ti-dropdown">
                                    <Link aria-label="anchor" href="#!" className="ti-btn ti-btn-icon ti-btn-sm ti-btn-light"><i className="ti ti-dots"></i></Link>
                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                        <li><Link href="#!" className="ti-dropdown-item">Action</Link></li>
                                        <li><Link href="#!" className="ti-dropdown-item">Another Action</Link></li>
                                        <li><Link href="#!" className="ti-dropdown-item">Something Else Here</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex items-center mb-0">
                                <p className="mb-0 text-[1.25rem] font-semibold">1,116</p>
                                <span className="text-[#8c9097] dark:text-white/50 ms-2"><i className="ti ti-trending-down align-middle text-danger me-1 inline-block"></i>3.2%</span>
                            </div>
                            <div className="flex items-center">
                                <div className="flex-grow">
                                    <div className="progress progress-xs">
                                        <div className="progress-bar !bg-indigo w-[67%]" aria-valuenow="67" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <div className="ms-3">
                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">67% Target</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-9 col-span-12">
                    <div className="box custom-box">
                        <div className="box-body !p-0">
                            <div className="grid grid-cols-12 gap-x-6">
                                <div className="xl:col-span-3 col-span-12 border-e border-dashed dark:border-defaultborder/10">
                                    <div className="flex flex-wrap items-start p-6">
                                        <div className="me-4 leading-none">
                                            <span className="avatar avatar-md !rounded-full !bg-primary shadow-sm">
                                                <i className="ti ti-package text-[1.125rem]"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <h5 className="font-semibold ">45,280</h5>
                                            <p className="text-[#8c9097] dark:text-white/50 mb-0 text-[0.75rem]">Total Products</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-success/10 text-success"><i className="ri-arrow-up-s-line align-middle me-1 inline-block"></i>1.31%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-3 col-span-12 border-e border-dashed dark:border-defaultborder/10">
                                    <div className="flex flex-wrap items-start p-6">
                                        <div className="me-3 leading-none">
                                            <span className="avatar avatar-md !rounded-full bg-secondary shadow-sm">
                                                <i className="ti ti-rocket text-[1.125rem]"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <h5 className="font-semibold ">10,500</h5>
                                            <p className="text-[#8c9097] dark:text-white/50 mb-0 text-[0.75rem]">Total Sales</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-danger/10 text-danger"><i className="ri-arrow-down-s-line align-middle me-1"></i>1.14%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-3 col-span-12 border-e border-dashed dark:border-defaultborder/10">
                                    <div className="flex flex-wrap items-start p-6">
                                        <div className="me-3 leading-none">
                                            <span className="avatar avatar-md !rounded-full bg-success shadow-sm">
                                                <i className="ti ti-wallet text-[1.125rem]"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <h5 className="font-semibold ">$69,270</h5>
                                            <p className="text-[#8c9097] dark:text-white/50 mb-0 text-[0.75rem]">Income</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-success/10 text-success"><i className="ri-arrow-up-s-line align-middle me-1 inline-block"></i>2.58%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-3 col-span-12 ">
                                    <div className="flex flex-wrap items-start p-6">
                                        <div className="me-3 leading-none">
                                            <span className="avatar avatar-md !rounded-full bg-warning shadow-sm">
                                                <i className="ti ti-packge-import text-[1.125rem]"></i>
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <h5 className="font-semibold ">12,088</h5>
                                            <p className="text-[#8c9097] dark:text-white/50 mb-0 text-[0.75rem]">Total Orders</p>
                                        </div>
                                        <div>
                                            <span className="badge bg-success/10 text-success"><i className="ri-arrow-up-s-line align-middle me-1 inline-block"></i>12.05%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <div className="box custom-box box-bg-primary text-white">
                        <div className="box-body !p-0">
                            <div className="flex items-start p-6 flex-wrap">
                                <div className="me-4 leading-none">
                                    <span className="avatar avatar-md !rounded-full bg-white dark:bg-bodybg !text-primary shadow-sm">
                                        <i className="ti ti-coin text-[1.125rem]"></i>
                                    </span>
                                </div>
                                <div className="flex-grow">
                                    <h5 className="font-semibold mb-1 !text-white">$21,520</h5>
                                    <p className="opacity-[0.7] mb-0 text-[0.75rem] !text-white">Expenses</p>
                                </div>
                                <div>
                                    <span className="badge bg-success text-white"><i className="ri-arrow-up-s-line align-middle me-1 inline-block"></i>14.69%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-2 col-span-12">
                    <div className="box custom-box border-t-[0.188rem] border-solid !border-t-primary !rounded-none">
                        <div className="box-body">
                            <div className="text-center">
                                <span className="avatar avatar-md bg-primary shadow-sm !rounded-full mb-2">
                                    <i className="ri-briefcase-2-line text-[1rem]"></i>
                                </span>
                                <p className="text-[.875rem] font-semibold mb-2">Total Sales</p>
                                <div className="flex items-center justify-center flex-wrap">
                                    <h5 className="mb-0 font-semibold">15,800</h5>
                                    <span className="badge bg-success/10 text-success rounded-full ms-1">+25.8%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 col-span-12">
                    <div className="box custom-box border-t-[0.188rem] border-solid !border-t-secondary !rounded-none">
                        <div className="box-body">
                            <div className="text-center">
                                <span className="avatar avatar-md bg-secondary shadow-sm !rounded-full mb-2">
                                    <i className="ri-bill-line text-[1rem]"></i>
                                </span>
                                <p className="text-[.875rem] font-semibold mb-2">Total Tax</p>
                                <div className="flex items-center justify-center flex-wrap">
                                    <h5 className="mb-0 font-semibold">$12,650</h5>
                                    <span className="badge bg-success/10 text-success rounded-full ms-1">+12.2%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 col-span-12">
                    <div className="box custom-box border-t-[0.188rem] border-solid border-t-success !rounded-none">
                        <div className="box-body">
                            <div className="text-center">
                                <span className="avatar avatar-md bg-success shadow-sm !rounded-full mb-2">
                                    <i className="ri-wallet-2-line text-[1rem]"></i>
                                </span>
                                <p className="text-[.875rem] font-semibold mb-2">Total Income</p>
                                <div className="flex items-center justify-center flex-wrap">
                                    <h5 className="mb-0 font-semibold">$14,800</h5>
                                    <span className="badge bg-success/10 text-success rounded-full ms-1">+7.45%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 col-span-12">
                    <div className="box custom-box border-t-[0.188rem] border-solid border-t-info !rounded-none">
                        <div className="box-body">
                            <div className="text-center">
                                <span className="avatar avatar-md bg-info shadow-sm !rounded-full mb-2">
                                    <i className="ri-line-chart-line text-[1rem]"></i>
                                </span>
                                <p className="text-[.875rem] font-semibold mb-2">Total Expenses</p>
                                <div className="flex items-center justify-center flex-wrap">
                                    <h5 className="mb-0 font-semibold">$7,566</h5>
                                    <span className="badge bg-danger/10 text-danger rounded-full ms-1">-3.21%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 col-span-12">
                    <div className="box custom-box border-t-[0.188rem] border-solid border-t-warning !rounded-none">
                        <div className="box-body">
                            <div className="text-center">
                                <span className="avatar avatar-md bg-warning shadow-sm !rounded-full mb-2">
                                    <i className="ri-money-dollar-box-line text-[1rem]"></i>
                                </span>
                                <p className="text-[.875rem] font-semibold mb-2">Sales Profit</p>
                                <div className="flex items-center justify-center flex-wrap">
                                    <h5 className="mb-0 font-semibold">$7,474</h5>
                                    <span className="badge bg-success/10 text-success rounded-full ms-1">+36.03%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-2 col-span-12">
                    <div className="box custom-box border-t-[0.188rem] border-solid border-t-danger !rounded-none">
                        <div className="box-body">
                            <div className="text-center">
                                <span className="avatar avatar-md bg-danger shadow-sm !rounded-full mb-2">
                                    <i className="ri-profile-line text-[1rem]"></i>
                                </span>
                                <p className="text-[.875rem] font-semibold mb-2">Opex Ratio</p>
                                <div className="flex items-center justify-center flex-wrap">
                                    <h5 className="mb-0 font-semibold">32%</h5>
                                    <span className="badge bg-success/10 text-success rounded-full ms-1">+0.89%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-4 md:col-span-6  col-span-12">
                    <div className="box custom-box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Upcoming Events
                            </div>
                            <div>
                                <button type="button" className="ti-btn !py-1 !px-2 !text-[0.75rem] ti-btn-primary">View All</button>
                            </div>
                        </div>
                        <div className="box-body">
                            <nav className="flex flex-wrap xxxl:flex-nowrap justify-start sm:justify-between" aria-label="Tabs">
                                <button type="button" className="xxxl:w-full hs-tab-active:bg-primary hs-tab-active:text-white py-3 px-2 block items-center gap-2 bg-transparent text-sm font-medium text-center text-defaulttextcolor rounded-sm hover:text-primary  dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white active" id="mon" data-hs-tab="#mon-1" aria-controls="mon-1">
                                    <span className="block mb-1">09</span>
                                    <span className="block mb-0 opacity-[0.7] text-[0.75rem]">Mon</span>
                                </button>
                                <button type="button" className="xxxl:w-full hs-tab-active:bg-primary hs-tab-active:text-white py-3 px-2 block items-center gap-2 bg-transparent text-sm font-medium text-center text-defaulttextcolor rounded-sm hover:text-primary  dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white" id="tue" data-hs-tab="#tue-1" aria-controls="tue-1">
                                    <span className="block mb-1">10</span>
                                    <span className="block mb-0 opacity-[0.7] text-[0.75rem]">Tue</span>
                                </button>
                                <button type="button" className="xxxl:w-full hs-tab-active:bg-primary hs-tab-active:text-white py-3 px-2 block items-center gap-2 bg-transparent text-sm font-medium text-center text-defaulttextcolor rounded-sm hover:text-primary  dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white" id="wed" data-hs-tab="#wed-1" aria-controls="wed-1">
                                    <span className="block mb-1">11</span>
                                    <span className="block mb-0 opacity-[0.7] text-[0.75rem]">Wed</span>
                                </button>
                                <button type="button" className="xxxl:w-full hs-tab-active:bg-primary hs-tab-active:text-white py-3 px-2 block items-center gap-2 bg-transparent text-sm font-medium text-center text-defaulttextcolor rounded-sm hover:text-primary  dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white" id="thu" data-hs-tab="#thu-1" aria-controls="thu-1">
                                    <span className="block mb-1">12</span>
                                    <span className="block mb-0 opacity-[0.7] text-[0.75rem]">Thu</span>
                                </button>
                                <button type="button" className="xxxl:w-full hs-tab-active:bg-primary hs-tab-active:text-white py-3 px-2 block items-center gap-2 bg-transparent text-sm font-medium text-center text-defaulttextcolor rounded-sm hover:text-primary  dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white" id="fri" data-hs-tab="#fri-1" aria-controls="fri-1">
                                    <span className="block mb-1">13</span>
                                    <span className="block mb-0 opacity-[0.7] text-[0.75rem]">Fri</span>
                                </button>
                                <button type="button" className="xxxl:w-full hs-tab-active:bg-primary hs-tab-active:text-white py-3 px-2 block items-center gap-2 bg-transparent text-sm font-medium text-center text-defaulttextcolor rounded-sm hover:text-primary  dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white" id="sat" data-hs-tab="#sat-1" aria-controls="sat-1">
                                    <span className="block mb-1">14</span>
                                    <span className="block mb-0 opacity-[0.7] text-[0.75rem]">Sat</span>
                                </button>
                                <button type="button" className="xxxl:w-full hs-tab-active:bg-primary hs-tab-active:text-white py-3 px-2 block items-center gap-2 bg-transparent text-sm font-medium text-center text-defaulttextcolor rounded-sm hover:text-primary  dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white" id="sun" data-hs-tab="#sun-1" aria-controls="sun-1">
                                    <span className="block mb-1">15</span>
                                    <span className="block mb-0 opacity-[0.7] text-[0.75rem]">Sun</span>
                                </button>
                            </nav>
                            <div className="tab-content pt-4 my-4">
                                <div id="mon-1" role="tabpanel" aria-labelledby="mon-1">
                                    <ul className="list-unstyled mb-0 upcoming-events-list">
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Meeting with client</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Video Conference</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block "></i>9:00am - 10:00am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Lunch with team members</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Dolores Ait Labore Sit</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>12:00pm - 12:45am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">General board meeting</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Golden PArk</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4:00pm - 5:30pm</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Create New Registration Page</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">2UA Project</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>5:00pm - 5:45pm</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div id="tue-1" className="hidden" role="tabpanel" aria-labelledby="tue-1">
                                    <ul className="list-unstyled mb-0 upcoming-events-list">
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Meeting with client</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Video Conference</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>9:00am - 10:00am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Lunch with team members</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Dolores Ait Labore Sit</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>12:00pm - 12:45am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">General board meeting</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Golden PArk</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4:00pm - 5:30pm</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Create New Registration Page</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">2UA Project</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>5:00pm - 5:45pm</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div id="wed-1" className="hidden" role="tabpanel" aria-labelledby="wed-1">
                                    <ul className="list-unstyled mb-0 upcoming-events-list">
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Meeting with client</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Video Conference</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>9:00am - 10:00am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Lunch with team members</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Dolores Ait Labore Sit</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>12:00pm - 12:45am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">General board meeting</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Golden PArk</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4:00pm - 5:30pm</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Create New Registration Page</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">2UA Project</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>5:00pm - 5:45pm</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div id="thu-1" className="hidden" role="tabpanel" aria-labelledby="thu-1">
                                    <ul className="list-unstyled mb-0 upcoming-events-list">
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Meeting with client</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Video Conference</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>9:00am - 10:00am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Lunch with team members</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Dolores Ait Labore Sit</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>12:00pm - 12:45am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">General board meeting</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Golden PArk</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4:00pm - 5:30pm</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Create New Registration Page</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">2UA Project</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>5:00pm - 5:45pm</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div id="fri-1" className="hidden" role="tabpanel" aria-labelledby="fri-1">
                                    <ul className="list-unstyled mb-0 upcoming-events-list">
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Meeting with client</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Video Conference</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>9:00am - 10:00am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Lunch with team members</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Dolores Ait Labore Sit</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>12:00pm - 12:45am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">General board meeting</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Golden PArk</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4:00pm - 5:30pm</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Create New Registration Page</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">2UA Project</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>5:00pm - 5:45pm</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div id="sat-1" className="hidden" role="tabpanel" aria-labelledby="sat-1">
                                    <ul className="list-unstyled mb-0 upcoming-events-list">
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Meeting with client</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Video Conference</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>9:00am - 10:00am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Lunch with team members</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Dolores Ait Labore Sit</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>12:00pm - 12:45am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">General board meeting</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Golden PArk</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4:00pm - 5:30pm</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Create New Registration Page</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">2UA Project</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>5:00pm - 5:45pm</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div id="sun-1" className="hidden" role="tabpanel" aria-labelledby="sun-1">
                                    <ul className="list-unstyled mb-0 upcoming-events-list">
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Meeting with client</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Video Conference</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>9:00am - 10:00am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Lunch with team members</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Dolores Ait Labore Sit</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>12:00pm - 12:45am</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">General board meeting</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Golden PArk</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>4:00pm - 5:30pm</span>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="flex items-start justify-conent-between">
                                                <div className="flex-grow">
                                                    <p className="mb-0 text-[.875rem]">Create New Registration Page</p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">2UA Project</p>
                                                </div>
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50"><i className="ri-time-line align-middle me-1 inline-block"></i>5:00pm - 5:45pm</span>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4  md:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Timeline
                            </div>
                            <div>
                                <button type="button" className="ti-btn !py-1 !px-2 !text-[0.75rem] ti-btn-primary">View All</button>
                            </div>
                        </div>
                        <div className="box-body">
                            <ul className="list-unstyled timeline-widget mb-0 my-3">
                                <li className="timeline-widget-list">
                                    <div className="flex items-start">
                                        <div className="me-[3rem] text-center">
                                            <span className="block text-[1.25rem] font-semibold">02</span>
                                            <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">Mon</span>
                                        </div>
                                        <div className="flex flex-wrap flex-grow items-center justify-between">
                                            <div>
                                                <p className="mb-1  timeline-widget-content text-wrap">You have an announcement - Ipsum Est Diam Eirmod</p>
                                                <p className="mb-0 text-[0.75rem] leading-none text-[#8c9097] dark:text-white/50">10:00AM<span className="badge bg-primary/10 text-primary ms-2">Announcement</span></p>
                                            </div>
                                            <div className="hs-dropdown ti-dropdown">
                                                <Link aria-label="anchor" href="#!" className="p-2 text-[1rem] text-[#8c9097] dark:text-white/50">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Link>
                                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                    <li><Link className="ti-dropdown-item" href="#!">Action</Link></li>
                                                    <li><Link className="ti-dropdown-item" href="#!">Another action</Link></li>
                                                    <li><Link className="ti-dropdown-item" href="#!">Something else here</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-widget-list">
                                    <div className="flex items-start">
                                        <div className="me-[3rem] text-center">
                                            <span className="block text-[1.25rem] font-semibold">15</span>
                                            <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">Sun</span>
                                        </div>
                                        <div className="flex flex-wrap flex-grow items-center justify-between">
                                            <div>
                                                <p className="mb-1 sm:text-truncate timeline-widget-content text-wrap">National holiday - Vero Jayanti</p>
                                                <p className="mb-0 text-[0.75rem] leading-none text-[#8c9097] dark:text-white/50"><span className="badge bg-warning/10 text-warning">Holiday</span></p>
                                            </div>
                                            <div className="hs-dropdown ti-dropdown">
                                                <Link aria-label="anchor" href="#!" className="p-2 text-[1rem] text-[#8c9097] dark:text-white/50">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Link>
                                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                    <li><Link className="ti-dropdown-item" href="#!">Action</Link></li>
                                                    <li><Link className="ti-dropdown-item" href="#!">Another action</Link></li>
                                                    <li><Link className="ti-dropdown-item" href="#!">Something else here</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-widget-list">
                                    <div className="flex items-start">
                                        <div className="me-[3rem] text-center">
                                            <span className="block text-[1.25rem] font-semibold">23</span>
                                            <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">Mon</span>
                                        </div>
                                        <div className="flex flex-wrap flex-grow items-center justify-between">
                                            <div>
                                                <p className="mb-1 sm:text-truncate timeline-widget-content text-wrap">John pup birthday - Team Member</p>
                                                <p className="mb-4 text-[0.75rem] leading-none text-[#8c9097] dark:text-white/50">09:00AM<span className="badge bg-success/10 text-success ms-2">Birthday</span></p>
                                                <p className="mb-1 sm:text-truncate timeline-widget-content text-wrap">Amet sed no dolor kasd - Et Dolores Tempor Erat</p>
                                                <p className="mb-0 text-[0.75rem] leading-none text-[#8c9097] dark:text-white/50">04:00PM<span className="badge bg-primary/10 text-primary ms-2">Announcement</span></p>
                                            </div>
                                            <div className="hs-dropdown ti-dropdown">
                                                <Link aria-label="anchor" href="#!" className="p-2 text-[1rem] text-[#8c9097] dark:text-white/50">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Link>
                                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                    <li><Link className="ti-dropdown-item" href="#!">Action</Link></li>
                                                    <li><Link className="ti-dropdown-item" href="#!">Another action</Link></li>
                                                    <li><Link className="ti-dropdown-item" href="#!">Something else here</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-widget-list">
                                    <div className="flex items-start">
                                        <div className="me-[3rem] text-center">
                                            <span className="block text-[1.25rem] font-semibold">31</span>
                                            <span className="block text-[0.75rem] text-[#8c9097] dark:text-white/50">Tue</span>
                                        </div>
                                        <div className="flex flex-wrap flex-grow items-center justify-between">
                                            <div>
                                                <p className="mb-1 sm:text-truncate timeline-widget-content text-wrap">National Holiday - Dolore Ipsum</p>
                                                <p className="mb-0 text-[0.75rem] leading-none text-[#8c9097] dark:text-white/50"><span className="badge bg-warning/10 text-warning">Holiday</span></p>
                                            </div>
                                            <div className="hs-dropdown ti-dropdown">
                                                <Link aria-label="anchor" href="#!" className="p-2 text-[1rem] text-[#8c9097] dark:text-white/50">
                                                    <i className="fe fe-more-vertical"></i>
                                                </Link>
                                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                    <li><Link className="ti-dropdown-item" href="#!">Action</Link></li>
                                                    <li><Link className="ti-dropdown-item" href="#!">Another action</Link></li>
                                                    <li><Link className="ti-dropdown-item" href="#!">Something else here</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Traffic Sources
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="table-responsive">
                                <table className="table table-bordered table-hover whitespace-nowrap min-w-full">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="text-start">Browser</th>
                                            <th scope="col" className="text-start">Sessions</th>
                                            <th scope="col" className="text-start">Views</th>
                                            <th scope="col" className="text-start">Traffic</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border border-defaultborder ">
                                            <td>
                                                <div className="flex items-center">
                                                    <span className="avatar !rounded-full avatar-sm p-2 bg-primary me-2">
                                                        <i className="ri-google-fill text-[1.125rem] text-white"></i>
                                                    </span>
                                                    <div className="font-semibold">Google</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span><i className="ri-arrow-up-s-fill me-1 text-success align-middle text-[1.125rem]"></i>23,379</span>
                                            </td>
                                            <td>
                                                <span>16,890</span>
                                            </td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-primary w-[34%]" aria-valuenow="34" aria-valuemin="0" aria-valuemax="100">
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder ">
                                            <td>
                                                <div className="flex items-center">
                                                    <span className="avatar !rounded-full avatar-sm p-2 bg-primary me-2">
                                                        <i className="ri-safari-line text-[1.125rem] text-white"></i>
                                                    </span>
                                                    <div className="font-semibold">Safari</div>
                                                </div>

                                            </td>
                                            <td>
                                                <span><i className="ri-arrow-up-s-fill me-1 text-success align-middle text-[1.125rem]"></i>78,973</span>
                                            </td>
                                            <td>
                                                <span>29,906</span>
                                            </td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-primary w-[58%]" aria-valuenow="58" aria-valuemin="0" aria-valuemax="100">
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder ">
                                            <td>
                                                <div className="flex items-center">
                                                    <span className="avatar !rounded-full avatar-sm p-2 bg-primary me-2">
                                                        <i className="ri-opera-fill text-[1.125rem] text-white"></i>
                                                    </span>
                                                    <div className="font-semibold">Opera</div>
                                                </div>

                                            </td>
                                            <td>
                                                <span><i className="ri-arrow-up-s-fill me-1 text-success align-middle text-[1.125rem]"></i>12,457</span>
                                            </td>
                                            <td>
                                                <span>8,674</span>
                                            </td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-primary w-[62%]" aria-valuenow="62" aria-valuemin="0" aria-valuemax="100">
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder ">
                                            <td>
                                                <div className="flex items-center">
                                                    <span className="avatar !rounded-full avatar-sm p-2 bg-primary me-2">
                                                        <i className="ri-edge-fill text-[1.125rem] text-white"></i>
                                                    </span>
                                                    <div className="font-semibold">Edge</div>
                                                </div>

                                            </td>
                                            <td>
                                                <span><i className="ri-arrow-up-s-fill me-1 text-success align-middle text-[1.125rem]"></i>8,570</span>
                                            </td>
                                            <td>
                                                <span>4,980</span>
                                            </td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-primary w-[71%]" aria-valuenow="71" aria-valuemin="0" aria-valuemax="100">
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder ">
                                            <td>
                                                <div className="flex items-center">
                                                    <span className="avatar !rounded-full avatar-sm p-2 bg-primary me-2">
                                                        <i className="ri-firefox-fill text-[1.125rem] text-white"></i>
                                                    </span>
                                                    <div className="font-semibold">Firefox</div>
                                                </div>

                                            </td>
                                            <td>
                                                <span><i className="ri-arrow-up-s-fill me-1 text-success align-middle text-[1.125rem]"></i>6,135</span>
                                            </td>
                                            <td>
                                                <span>4,436</span>
                                            </td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-primary w-[48%]" aria-valuenow="48" aria-valuemin="0" aria-valuemax="100">
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder ">
                                            <td>
                                                <div className="flex items-center">
                                                    <span className="avatar !rounded-full avatar-sm p-2 bg-primary me-2">
                                                        <i className="ri-ubuntu-fill text-[1.125rem] text-white"></i>
                                                    </span>
                                                    <div className="font-semibold">Ubuntu</div>
                                                </div>

                                            </td>
                                            <td>
                                                <span><i className="ri-arrow-up-s-fill me-1 text-success align-middle text-[1.125rem]"></i>4,789</span>
                                            </td>
                                            <td>
                                                <span>2,447</span>
                                            </td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar bg-primary w-[28%]" aria-valuenow="28" aria-valuemin="0" aria-valuemax="100">
                                                    </div>
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
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Users By Country
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="flex flex-wrap justify-between mb-[3rem]">
                                <div className="me-[3rem] flex items-center">
                                    <div className="me-2">
                                        <span className="avatar !rounded-full bg-primary/10 !text-primary"><i className="ri-user-3-line text-[1rem]"></i></span>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-[1.125rem] mb-0 text-primary font-semibold">25,350</p>
                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">This month</span>
                                    </div>
                                </div>
                                <div className="me-4 flex items-center">
                                    <div className="me-2">
                                        <span className="avatar !rounded-full bg-light !text-defaulttextcolor"><i className="ri-user-3-line text-[1rem]"></i></span>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-[1.125rem] mb-0 font-semibold">19,200</p>
                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">Last month</span>
                                    </div>
                                </div>
                                <div className="me-4 flex items-center">
                                    <div className="me-2">
                                        <span className="avatar !rounded-full bg-success/10 !text-success"><i className="ri-user-3-line text-[1rem]"></i></span>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-[1.125rem] mb-0 text-success font-semibold">1,24,890</p>
                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">This Year</span>
                                    </div>
                                </div>
                                <div className="me-4 flex items-center">
                                    <div className="me-2">
                                        <span className="avatar !rounded-full bg-secondary/10 !text-secondary"><i className="ri-user-3-line text-[1rem]"></i></span>
                                    </div>
                                    <div className="flex-grow">
                                        <p className="text-[1.125rem] mb-0 text-secondary font-semibold">97,799</p>
                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">Last Year</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 sm:gap-6">
                                <div className="xl:col-span-5 col-span-12">
                                    <div className="h-full my-auto">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <div className="flex flex-wrap items-center justify-between">
                                                    <div><i className="ri-checkbox-blank-circle-fill text-primary text-[0.5rem] me-1 align-middle inline-block"></i>Brazil</div>
                                                    <div>1,290</div>
                                                    <div className="text-success"><i className="ri-arrow-up-s-line align-middle me-1 inline-block"></i>2.90%</div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="flex flex-wrap items-center justify-between">
                                                    <div><i className="ri-checkbox-blank-circle-fill text-secondary text-[0.5rem] me-1 align-middle inline-block"></i>Greenland</div>
                                                    <div>2,596</div>
                                                    <div className="text-danger"><i className="ri-arrow-down-s-line align-middle me-1 inline-block"></i>1.1%</div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="flex flex-wrap items-center justify-between">
                                                    <div><i className="ri-checkbox-blank-circle-fill text-success text-[0.5rem] me-1 align-middle inline-block"></i>Russia</div>
                                                    <div>3,710</div>
                                                    <div className="text-success"><i className="ri-arrow-up-s-line align-middle me-1 inline-block"></i>0.8%</div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="flex flex-wrap items-center justify-between">
                                                    <div><i className="ri-checkbox-blank-circle-fill text-warning text-[0.5rem] me-1 align-middle inline-block"></i>Palestine</div>
                                                    <div>1,116</div>
                                                    <div className="text-danger"><i className="ri-arrow-up-s-line align-middle me-1 inline-block"></i>10.06%</div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="flex flex-wrap items-center justify-between">
                                                    <div><i className="ri-checkbox-blank-circle-fill text-danger text-[0.5rem] me-1 align-middle inline-block"></i>Canada</div>
                                                    <div>12,150</div>
                                                    <div className="text-success"><i className="ri-arrow-up-s-line align-middle me-1 inline-block"></i>9.05%</div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="xl:col-span-7 col-span-12">
                                    <div id="users-map">
                                        <WorldMap />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Recent Tasks
                            </div>
                            <div className="hs-dropdown ti-dropdown">
                                <Link href="#!" className="p-2 text-[0.75rem] text-[#8c9097] dark:text-white/50">
                                    View All<i className="ri-arrow-down-s-line align-middle ms-1"></i>
                                </Link>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                    <li><Link className="ti-dropdown-item" href="#!">Download</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Import</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Export</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="table-responsive">
                                <table className="table whitespace-nowrap table-bordered min-w-full">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="text-start">S.No</th>
                                            <th scope="col" className="text-start">Title</th>
                                            <th scope="col" className="text-start">Assigned To</th>
                                            <th scope="col" className="text-start">Progress</th>
                                            <th scope="col" className="text-start">Status</th>
                                            <th scope="col" className="text-start">Due Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border border-defaultborder">
                                            <td>01</td>
                                            <td>Server Side Validation</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-xs bg-primary !rounded-full text-white" href="#!">
                                                        +2
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar progress-bar-striped progress-bar-animated w-3/5" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-primary/10 text-primary">In Progress</span>
                                            </td>
                                            <td>
                                                17-04-2023
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder">
                                            <td>02</td>
                                            <td>Multipurpose Dashboard Template</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src="../../../assets/images/faces/6.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar progress-bar-striped progress-bar-animated w-0" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-warning/10 text-warning">Pending</span>
                                            </td>
                                            <td>
                                                14-05-2023
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder">
                                            <td>03</td>
                                            <td>Documentation Project</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src="../../../assets/images/faces/4.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src="../../../assets/images/faces/15.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src="../../../assets/images/faces/11.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-xs bg-primary !rounded-full text-white" href="#!">
                                                        +1
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar progress-bar-striped progress-bar-animated w-full" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-success/10 text-success">Completed</span>
                                            </td>
                                            <td>
                                                20-04-2023
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder">
                                            <td>04</td>
                                            <td>HR Management Template Design</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src="../../../assets/images/faces/5.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src="../../../assets/images/faces/12.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src="../../../assets/images/faces/13.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar progress-bar-striped progress-bar-animated w-1/2" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-primary/10 text-primary">In Progress</span>
                                            </td>
                                            <td>
                                                29-05-2023
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder">
                                            <td>05</td>
                                            <td>Developing Backend</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src="../../../assets/images/faces/1.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src="../../../assets/images/faces/9.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-xs bg-primary !rounded-full text-white" href="#!">
                                                        +3
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar progress-bar-striped progress-bar-animated w-1/2" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-primary/10 text-primary">In Progress</span>
                                            </td>
                                            <td>
                                                25-05-2023
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder">
                                            <td>06</td>
                                            <td>	Design New Dashboard Template</td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src="../../../assets/images/faces/4.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src="../../../assets/images/faces/12.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-xs !rounded-full">
                                                        <img src="../../../assets/images/faces/16.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-xs bg-primary !rounded-full text-white" href="#!">
                                                        +3
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="progress progress-xs">
                                                    <div className="progress-bar progress-bar-striped progress-bar-animated w-full" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-success/10 text-success">Completed</span>
                                            </td>
                                            <td>
                                                04-05-2023
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-4 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Recent Applicants</div>
                        </div>
                        <div className="box-body">
                            <div id="views">
                                <Applicants />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Sessions By Device</div>
                        </div>
                        <div className="box-body">
                            <div id="sessionsByDevice">
                                <Sessions />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Target Report</div>
                            <div className="ms-auto hs-dropdown ti-dropdown">
                                <Link href="#!" className="ti-btn !py-1 !px-2 !text-[0.75rem] ti-btn-primary dropdown-toggle" aria-expanded="false">
                                    Details
                                </Link>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                    <li><Link className="ti-dropdown-item" href="#!">Action</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Another action</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Something else here</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="box-body pb-4">
                            <div className="mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="ltr:float-right rtl:float-left text-primary" fill="currentColor" width="36px" height="36px" viewBox="0 0 24 24"><path fill="currentColor" d="M11,9h4a1,1,0,0,0,0-2H13V6a1,1,0,0,0-2,0V7a3,3,0,0,0,0,6h2a1,1,0,0,1,0,2H9a1,1,0,0,0,0,2h2v1a1,1,0,0,0,2,0V17a3,3,0,0,0,0-6H11a1,1,0,0,1,0-2Zm1-8A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z" /></svg>
                                <p className="text-primary font-500 mb-2">Revenue by week</p>
                                <h4 className="mb-2 font-semibold">$54,125.03</h4>
                                <span className="text-danger me-1 text-[.875rem]"> - 1.3%<i className="ri-arrow-down-s-fill align-middle ms-1"></i>  </span>
                                <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">33% of target reached</span>
                            </div>
                            <div id="report">
                                <Targetreport />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Widgets.layout = "Contentlayout"

export default Widgets