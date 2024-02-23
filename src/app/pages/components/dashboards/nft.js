import { NFTStatistics, TopCollectors, Totalbalance, TrendingNFTs, TrendingNFTs1, Trendingauctions } from '@/shared/data/dashboards/nftdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React, { Fragment } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
    Autoplay
} from 'swiper/modules';

const Nft = () => {
    return (
        <Fragment>
            <Seo title={"NFT"} />
            <Pageheader currentpage="NFT" activepage="Dashboards" mainpage="NFT" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-6 col-span-12">
                    <div className="xxl:col-span-12 col-span-12">
                        <div className="box overflow-hidden">
                            <div className="box-body">
                                <div className="grid grid-cols-12 gap-3 sm:gap-0">
                                    <div className="sm:col-span-8 pe-2 col-span-12 my-auto">
                                        <div className="my-auto">
                                            <h4 className="font-semibold mb-2 text-[1.5rem] leading-6">Discover, collect and sell
                                                your <span className="text-primary">NFTs</span> at one place</h4>
                                            <p className="mb-6 text-[#8c9097] dark:text-white/50 text-[0.875rem] opacity-[0.7]">
                                                NFT means non-fungible tokens (NFTs), which are generally created
                                                using the same type of programming used for cryptocurrencies.It is
                                                is a unique digital identifier that cannot be copied.
                                            </p>
                                            <div className="btn-list pt-1">
                                                <button type="button" className="ti-btn ti-btn-primary !text-white ti-btn-wave m-1 !bg-primary waves-effect waves-light">Discover Now</button>
                                                <button type="button" className="ti-btn ti-btn-outline-primary ti-btn-wave m-1 waves-effect waves-light">Create Yours</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="sm:col-span-4 col-span-12 sm:ps-3 my-auto">
                                        <div className="featured-nft">
                                            <img src="../../../assets/images/nft-images/1.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="xxl:col-span-2 col-span-12">
                    <div className="xxl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-body">
                                <div className="flex flex-wrap items-start">
                                    <div className="me-4 leading-none">
                                        <span className="avatar avatar-lg bg-primary">
                                            <svg className="svg-white" xmlns="http://www.w3.org/2000/svg" height="24px"
                                                viewBox="0 0 24 24" width="24px" fill="#000000">
                                                <path d="M0 0h24v24H0V0z" fill="none" />
                                                <path
                                                    d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM9 4h2v5l-1-.75L9 9V4zm9 16H6V4h1v9l3-2.25L13 13V4h5v16z" />
                                            </svg>
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-[#8c9097] dark:text-white/50">Total Assets</p>
                                        <h5 className="mb-1 font-semibold text-[1.25rem]">596</h5>
                                        <p className="text-[0.6875rem] text-[#8c9097] dark:text-white/50 mb-0"><span
                                            className="text-success font-semibold">0.25%<i
                                                className="ri-arrow-up-s-line align-middle mx-1"></i></span>
                                            This month
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-12  col-span-12">
                        <div className="box">
                            <div className="box-body">
                                <div className="flex flex-wrap items-start">
                                    <div className="me-4 leading-none">
                                        <span className="avatar avatar-lg bg-success">
                                            <svg className="svg-white" xmlns="http://www.w3.org/2000/svg"
                                                enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24"
                                                width="24px" fill="#000000">
                                                <g>
                                                    <path d="M0,0h24v24H0V0z" fill="none" />
                                                </g>
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M21.41,11.41l-8.83-8.83C12.21,2.21,11.7,2,11.17,2H4C2.9,2,2,2.9,2,4v7.17c0,0.53,0.21,1.04,0.59,1.41l8.83,8.83 c0.78,0.78,2.05,0.78,2.83,0l7.17-7.17C22.2,13.46,22.2,12.2,21.41,11.41z M12.83,20L4,11.17V4h7.17L20,12.83L12.83,20z" />
                                                        <circle cx="6.5" cy="6.5" r="1.5" />
                                                    </g>
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-[#8c9097] dark:text-white/50">Total Sales</p>
                                        <h5 className="font-semibold mb-1 text-[1.25rem]">821</h5>
                                        <p className="text-[0.6875rem] text-[#8c9097] dark:text-white/50 mb-0"><span
                                            className="text-success font-semibold">1.52%<i
                                                className="ri-arrow-up-s-line  align-middle mx-1"></i></span>
                                            This month</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-2 col-span-12">
                    <div className="xxl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-body">
                                <div className="flex flex-wrap items-start">
                                    <div className="me-4 leading-none">
                                        <span className="avatar avatar-lg bg-secondary">
                                            <svg className="svg-white" xmlns="http://www.w3.org/2000/svg"
                                                enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24"
                                                width="24px" fill="#000000">
                                                <path d="M0,0h24v24H0V0z" fill="none" />
                                                <g>
                                                    <path
                                                        d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M15,20H6c-0.55,0-1-0.45-1-1v-1h10V20z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z" />
                                                    <rect height="2" width="6" x="9" y="7" />
                                                    <rect height="2" width="2" x="16" y="7" />
                                                    <rect height="2" width="6" x="9" y="10" />
                                                    <rect height="2" width="2" x="16" y="10" />
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                    <div>
                                        <p className="text-[#8c9097] dark:text-white/50">Total Value</p>
                                        <h5 className="font-semibold mb-1 text-[1.25rem]">$1,298</h5>
                                        <p className="text-[0.6875rem] text-[#8c9097] dark:text-white/50 mb-0"><span
                                            className="text-success font-semibold">0.74%<i
                                                className="ri-arrow-up-s-line  align-middle mx-1"></i></span>
                                            This month</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-body">
                                <div className="flex flex-wrap items-start">
                                    <div className="me-4 leading-none">
                                        <span className="avatar avatar-lg bg-warning">
                                            <svg className="svg-white" xmlns="http://www.w3.org/2000/svg"
                                                enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24"
                                                width="24px" fill="#000000">
                                                <g>
                                                    <rect fill="none" height="24" width="24" />
                                                </g>
                                                <g>
                                                    <path
                                                        d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M12,20c-4.41,0-8-3.59-8-8c0-4.41,3.59-8,8-8 s8,3.59,8,8C20,16.41,16.41,20,12,20z M12.89,11.1c-1.78-0.59-2.64-0.96-2.64-1.9c0-1.02,1.11-1.39,1.81-1.39 c1.31,0,1.79,0.99,1.9,1.34l1.58-0.67c-0.15-0.44-0.82-1.91-2.66-2.23V5h-1.75v1.26c-2.6,0.56-2.62,2.85-2.62,2.96 c0,2.27,2.25,2.91,3.35,3.31c1.58,0.56,2.28,1.07,2.28,2.03c0,1.13-1.05,1.61-1.98,1.61c-1.82,0-2.34-1.87-2.4-2.09L8.1,14.75 c0.63,2.19,2.28,2.78,3.02,2.96V19h1.75v-1.24c0.52-0.09,3.02-0.59,3.02-3.22C15.9,13.15,15.29,11.93,12.89,11.1z" />
                                                </g>
                                            </svg>
                                        </span>
                                    </div>
                                    <div>
                                        <p className=" text-[#8c9097] dark:text-white/50">Total Revenue</p>
                                        <h5 className="font-semibold mb-1 text-[1.25rem]">$7,63,129.09</h5>
                                        <p className="text-[0.6875rem] text-[#8c9097] dark:text-white/50 mb-0"><span
                                            className="text-danger font-semibold">0.124%<i
                                                className="ri-arrow-up-s-line  align-middle mx-1"></i></span> This
                                            month</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-2 col-span-12">
                    <div className="box">
                        <div className="box-body">
                            <div className="flex flex-wrap items-center justify-between mb-2">
                                <div>
                                    <p className="mb-0 text-[#8c9097] dark:text-white/50">Your Balance</p>
                                    <h5 className="font-semibold text-[1.25rem]">$19,867.96</h5>
                                </div>
                                <div>
                                    <span className="avatar avatar-md bg-primary/10">
                                        <svg className="svg-primary" xmlns="http://www.w3.org/2000/svg" height="24px"
                                            viewBox="0 0 24 24" width="24px" fill="#000000">
                                            <path d="M0 0h24v24H0V0z" fill="none" />
                                            <path
                                                d="M21 7.28V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" />
                                            <circle cx="16" cy="12" r="1.5" />
                                        </svg>
                                    </span>
                                </div>
                            </div>
                            <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.6875rem] opacity-[0.7]">Top offers on USD-27,981
                                <span className="text-success font-semibold">(+29.09%)</span></p>
                            <div id="nft-balance-chart" className="px-4 py-6">
                                <Totalbalance />
                            </div>
                            <div className="grid mt-3">
                                <button type="button" className="ti-btn !py-1 !px-2 ti-btn-success ti-btn-wave !text-[0.75rem] !font-semibold">Top Up Wallet</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-8 xl:col-span-12 lg:col-span-12 col-span-12">
                    <div className="mb-4 flex items-center justify-between">
                        <h6 className="font-semibold mb-0 text-[1rem] text-defaulttextcolor">Trending Auctions :</h6>
                        <div>
                            <button type="button" className="tibtn !py-1 !px-[0.5rem] rounded-sm  text-[0.75rem] ti-btn-primary ti-btn-wave">View All</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-x-4">
                        {Trendingauctions.map((idx) => (
                            <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-12" key={Math.random()}>
                                <div className="box">
                                    <img src={idx.src1} className="card-img-top" alt="..." />
                                    <div className="flex items-center justify-between nft-like-section w-full px-4">
                                        <div className="flex-grow">
                                            <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-icon bg-success text-white !rounded-full ti-btn-wave">
                                                <i className="ri-heart-fill"></i>
                                            </button>
                                        </div>
                                        <div>
                                            <span className="badge nft-like-badge text-white"><i
                                                className="ri-heart-fill me-1 text-danger align-middle inline-block"></i>{idx.likes}</span>
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <div className="flex items-center mb-3">
                                            <img src={idx.src2} alt="" className="avatar avatar-md rounded-md me-2 leading-none !mb-0" />
                                            <div>
                                                <p className="mb-0 font-semibold">{idx.name}</p>
                                                <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-0">{idx.mail}</p>
                                            </div>
                                        </div>
                                        <p className="mb-0 text-white nft-auction-time">
                                            04hrs : 24m : 38s
                                        </p>
                                        <p className="text-[0.9375rem] font-semibold mb-2">{idx.color}- NFT</p>
                                        <div className="flex flex-wrap itesm-center justify-between mb-4">
                                            <div className="font-semibold">
                                                Highest Bid -
                                            </div>
                                            <div className="flex flex-wrap items-center leading-none">
                                                <span className="avatar avatar-xs me-1">
                                                    <img src="../../../assets/images/crypto-currencies/square-color/Ethereum.svg"
                                                        alt="" />
                                                </span>{idx.bid}
                                            </div>
                                        </div>
                                        <div className="grid">
                                            <button type="button" className="ti-btn ti-btn-primary ti-btn-wave">Place Bid</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="xxl:col-span-4 xl:col-span-12 lg:col-span-12 col-span-12">
                    <div className="box overflow-hidden">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Top Creators
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
                                <table className="table whitespace-nowrap min-w-full">
                                    <thead>
                                        <tr>
                                            <th scope="row" className="text-start">Name</th>
                                            <th scope="row" className="text-start">Items Sold</th>
                                            <th scope="row" className="text-start">Total Value</th>
                                            <th scope="row" className="text-start">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border !border-x-0 border-defaultborder dark:border-defaultborder/10">
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="leading-none">
                                                        <span className="avatar avatar-md avatar-rounded me-2">
                                                            <img src="../../../assets/images/faces/4.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="items-center">
                                                        <p className="mb-0 font-semibold">Amanda Nanes<i
                                                            className="bi bi-patch-check-fill text-success ms-2"></i>
                                                        </p>
                                                        <span
                                                            className="text-[0.75rem] text-[#8c9097] dark:text-white/50">amandananes@</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="items-center">
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Total Sold</span>
                                                    <p className="mb-0 font-semibold">18</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="items-center">
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Sale Value</span>
                                                    <p className="mb-0 font-semibold">$1,982</p>
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button"
                                                    className="ti-btn !py-1 !px-2 !text-[0.75rem] bg-primary text-white ti-btn-wave">Follow</button>
                                            </td>
                                        </tr>
                                        <tr className="border !border-x-0 border-defaultborder dark:border-defaultborder/10">
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="leading-none">
                                                        <span className="avatar avatar-md avatar-rounded me-2">
                                                            <img src="../../../assets/images/faces/15.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="items-center">
                                                        <p className="mb-0 font-semibold">Charles Achilles<i
                                                            className="bi bi-patch-check-fill text-success ms-2"></i>
                                                        </p>
                                                        <span
                                                            className="text-[0.75rem] text-[#8c9097] dark:text-white/50">@charlesachilles</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="items-center">
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Total Sold</span>
                                                    <p className="mb-0 font-semibold">126</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="items-center">
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Sale Value</span>
                                                    <p className="mb-0 font-semibold">$16,982</p>
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button"
                                                    className="ti-btn !py-1 !px-2 !text-[0.75rem] btn-wave ti-btn-primary">Unfollow</button>
                                            </td>
                                        </tr>
                                        <tr className="border !border-x-0 border-defaultborder dark:border-defaultborder/10">
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="leading-none">
                                                        <span className="avatar avatar-md avatar-rounded me-2">
                                                            <img src="../../../assets/images/faces/5.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="items-center">
                                                        <p className="mb-0 font-semibold">Julia Camo<i
                                                            className="bi bi-patch-check-fill text-success ms-2"></i>
                                                        </p>
                                                        <span
                                                            className="text-[0.75rem] text-[#8c9097] dark:text-white/50">@juliacamo</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="items-center">
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Total Sold</span>
                                                    <p className="mb-0 font-semibold">42</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="items-center">
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Sale Value</span>
                                                    <p className="mb-0 font-semibold">$3,432</p>
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button"
                                                    className="ti-btn !py-1 !px-2 bg-primary !text-[0.75rem] text-white ti-btn-wave">Follow</button>
                                            </td>
                                        </tr>
                                        <tr className="border !border-x-0 border-defaultborder dark:border-defaultborder/10">
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="leading-none">
                                                        <span className="avatar avatar-md avatar-rounded me-2">
                                                            <img src="../../../assets/images/faces/12.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="items-center">
                                                        <p className="mb-0 font-semibold">Json Taylor<i
                                                            className="bi bi-patch-check-fill text-success ms-2"></i>
                                                        </p>
                                                        <span
                                                            className="text-[0.75rem] text-[#8c9097] dark:text-white/50">@jsontaylor</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="items-center">
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Total Sold</span>
                                                    <p className="mb-0 font-semibold">63</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="items-center">
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Sale Value</span>
                                                    <p className="mb-0 font-semibold">$9,236</p>
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button"
                                                    className="ti-btn !py-1 1px-2 bg-primary !text-[0.75rem] text-white ti-btn-wave">Follow</button>
                                            </td>
                                        </tr>
                                        <tr className="border !border-x-0 border-defaultborder dark:border-defaultborder/10">
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="leading-none">
                                                        <span className="avatar avatar-md avatar-rounded me-2">
                                                            <img src="../../../assets/images/faces/3.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="items-center">
                                                        <p className="mb-0 font-semibold">Elisha Sean<i
                                                            className="bi bi-patch-check-fill text-success ms-2"></i>
                                                        </p>
                                                        <span
                                                            className="text-[0.75rem] text-[#8c9097] dark:text-white/50">elishasean</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="items-center">
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Total Sold</span>
                                                    <p className="mb-0 font-semibold">59</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="items-center">
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Sale Value</span>
                                                    <p className="mb-0 font-semibold">$7,783</p>
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button"
                                                    className="ti-btn !py-1 !px-2 bg-primary !text-[0.75rem] text-white ti-btn-wave">Follow</button>
                                            </td>
                                        </tr>
                                        <tr className="!border-b-0 !border-x-0 border-defaultborder dark:border-defaultborder/10">
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="leading-none">
                                                        <span className="avatar avatar-md avatar-rounded me-2">
                                                            <img src="../../../assets/images/faces/13.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="items-center">
                                                        <p className="mb-0 font-semibold">Joseph Smith<i
                                                            className="bi bi-patch-check-fill text-success ms-2"></i>
                                                        </p>
                                                        <span
                                                            className="text-[0.75rem] text-[#8c9097] dark:text-white/50">@josephsmith</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="items-center">
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Total Sold</span>
                                                    <p className="mb-0 font-semibold">137</p>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="items-center">
                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Sale Value</span>
                                                    <p className="mb-0 font-semibold">$13,562</p>
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button"
                                                    className="ti-btn !py-1 !px-2 !text-[0.75rem] btn-wave ti-btn-primary">Unfollow</button>
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
                <div className="xxl:col-span-3 xl:col-span-12 lg:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header !border-b-0 justify-between">
                            <div className="box-title">
                                Top Collectors
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
                        <div className="box-body !p-0 max-h-[29.8rem]" id="top-collector">
                            <div className="table-responsive">

                                <table className="table table-hover whitespace-nowrap min-w-full">
                                    <tbody>
                                        {TopCollectors.map((idx) => (
                                            <tr className={`border !border-x-0 border-defaultborder dark:border-defaultborder/10 ${idx.class}`} key={Math.random()}>
                                                <td>
                                                    <div className="flex items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-md p-2 avatar-rounded bg-light">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="font-semibold">{idx.name}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="progress progress-xs progress-animate !w-[3.125rem] nft-collector-progress">
                                                        <div className={`progress-bar bg-primary-gradient ${idx.progress}`} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">{idx.value}</span>
                                                </td>
                                                <td>
                                                    <p className="mb-0 font-semibold">{idx.text1}</p>
                                                    <span className="text-[0.6875rem] font-normal text-success">{idx.text2}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="xxl:col-span-6 xl:col-span-8 lg:col-span-7 md:col-span-12 sm:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between flex-wrap">
                            <div className="box-title">
                                NFTs Statistics
                            </div>
                            <div className="inline-flex rounded-md shadow-sm" role="group" aria-label="Basic example">
                                <button type="button"
                                    className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary-full !text-white">1D</button>
                                <button type="button"
                                    className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary">1W</button>
                                <button type="button"
                                    className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary">1M</button>
                                <button type="button"
                                    className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary">3M</button>
                                <button type="button"
                                    className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary">6M</button>
                                <button type="button"
                                    className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary !rounded-s-none">1Y</button>
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <div className="flex flex-wrap p-3 border-b border-dashed dark:border-defaultborder/10">
                                <div className="me-3">
                                    <span className="avatar avatar-md avatar-rounded p-2 bg-light">
                                        <img src="../../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="" />
                                    </span>
                                </div>
                                <div className="sm:flex flex-wrap justify-evenly flex-grow">
                                    <div className="sm:m-0 m-2">
                                        <span>Symbol</span>
                                        <p className="font-semibold mb-0">ETH</p>
                                    </div>
                                    <div className="sm:m-0 m-2">
                                        <span>Price Benchmark</span>
                                        <p className="font-semibold mb-0">-0.39%</p>
                                    </div>
                                    <div className="sm:m-0 m-2">
                                        <span>Price (USD)</span>
                                        <p className="text-success font-semibold mb-0">$1,212.67</p>
                                    </div>
                                    <div className="sm:m-0 m-2">
                                        <span>Change (24H)</span>
                                        <p className="text-danger font-semibold mb-0">-0.14%</p>
                                    </div>
                                    <div className="sm:m-0 m-2">
                                        <span>Market Cap</span>
                                        <p className="font-semibold mb-0">$148.20B</p>
                                    </div>
                                </div>
                            </div>
                            <div id="nft-statistics" className="p-3">
                                <NFTStatistics />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-4 lg:col-span-5 md:col-span-12 sm:col-span-12 col-span-12">
                    <div className="mb-4 flex items-center justify-between">
                        <h6 className="font-semibold mb-0 text-[1rem] text-defaulttextcolor dark:text-defaulttextcolor/70">Featured Collections :</h6>
                        <div>
                            <button type="button" className="ti-btn !py-1 !px-2 ti-btn-primary !text-[0.75rem] ti-btn-wave waves-effect waves-light">View All</button>
                        </div>
                    </div>
                    <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                        modules={[Autoplay]} className="mySwiper swiper swiper-basic">
                        <SwiperSlide className="rtl:dir-rtl">
                            <div className="box">
                                <div className="box-body">
                                    <div className="grid grid-cols-12 gap-2">
                                        <div className="col-span-6">
                                            <img src="../../../assets/images/nft-images/6.png" alt=""
                                                className="nft-featuredcollect-image" />
                                        </div>
                                        <div className="col-span-6">
                                            <img src="../../../assets/images/nft-images/7.png" alt=""
                                                className="nft-featuredcollect-image" />
                                        </div>
                                        <div className="col-span-6">
                                            <img src="../../../assets/images/nft-images/8.png" alt=""
                                                className="nft-featuredcollect-image" />
                                        </div>
                                        <div className="col-span-6">
                                            <img src="../../../assets/images/nft-images/9.png" alt=""
                                                className="nft-featuredcollect-image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="box-footer">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem] flex items-center">
                                                Collection Rank :
                                                <span
                                                    className="font-semibold text-success text-[0.9375rem] mb-0 ms-1">#1</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="me-2 leading-none">
                                                <span className="avatar avatar-rounded bg-light p-1 avatar-xs">
                                                    <img src="../../../assets/images/crypto-currencies/regular/Ethereum.svg"
                                                        alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="font-semibold">1.0979ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-footer">
                                    <div className="flex items-center">
                                        <div className="flex items-center flex-grow">
                                            <div className="me-2 leading-none">
                                                <span className="avatar avatar-md avatar-rounded">
                                                    <img src="../../../assets/images/faces/15.jpg" alt="" />
                                                    <Link aria-label="anchor" href="#!"
                                                        className="badge !rounded-full !text-white bg-primary avatar-badge"><i
                                                            className="ri-check-line align-middle"></i></Link>
                                                </span>
                                            </div>
                                            <div>
                                                <p className="mb-0 font-semibold"><Link
                                                    href="#!">Simon Cowell</Link></p>
                                                <p className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-0">@simon</p>
                                            </div>
                                        </div>
                                        <div className="hs-dropdown ti-dropdown">
                                            <Link aria-label="anchor" href="#!"
                                                className="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-defaulttextcolor hover:bg-primary hover:text-white !text-[0.8rem] !py-1 !px-2 rounded-sm bg-primary/10 border-light shadow-none !font-medium"
                                                aria-expanded="false">
                                                <i className="fe fe-more-vertical text-[0.8rem]"></i>
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
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="rtl:dir-rtl">
                            <div className="box">
                                <div className="box-body">
                                    <div className="grid grid-cols-12 gap-2">
                                        <div className="col-span-6">
                                            <img src="../../../assets/images/nft-images/11.png" alt=""
                                                className="nft-featuredcollect-image" />
                                        </div>
                                        <div className="col-span-6">
                                            <img src="../../../assets/images/nft-images/12.png" alt=""
                                                className="nft-featuredcollect-image" />
                                        </div>
                                        <div className="col-span-6">
                                            <img src="../../../assets/images/nft-images/13.png" alt=""
                                                className="nft-featuredcollect-image" />
                                        </div>
                                        <div className="col-span-6">
                                            <img src="../../../assets/images/nft-images/14.png" alt=""
                                                className="nft-featuredcollect-image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="box-footer">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem] flex items-center">Collection
                                                Rank :
                                                <span
                                                    className="font-semibold text-success text-[0.9375rem] mb-0 ms-1">#2</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="me-2 leading-none">
                                                <span className="avatar avatar-rounded bg-light p-1 avatar-xs">
                                                    <img src="../../../assets/images/crypto-currencies/regular/Ethereum.svg"
                                                        alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="font-semibold">1.0466ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-footer">
                                    <div className="flex items-center">
                                        <div className="flex items-center flex-grow">
                                            <div className="me-2 leading-none">
                                                <span className="avatar avatar-md avatar-rounded">
                                                    <img src="../../../assets/images/faces/5.jpg" alt="" />
                                                    <Link aria-label="anchor" href="#!"
                                                        className="badge !rounded-full !text-white bg-primary avatar-badge"><i
                                                            className="ri-check-line align-middle"></i></Link>
                                                </span>
                                            </div>
                                            <div>
                                                <p className="mb-0 font-semibold"><Link href="#!">Melissa
                                                    Smith</Link></p>
                                                <p className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-0">@melissa</p>
                                            </div>
                                        </div>
                                        <div className="hs-dropdown ti-dropdown">
                                            <Link aria-label="anchor" href="#!"
                                                className="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-defaulttextcolor hover:bg-primary hover:text-white !text-[0.8rem] !py-1 !px-2 rounded-sm bg-primary/10 border-light shadow-none !font-medium"
                                                aria-expanded="false">
                                                <i className="fe fe-more-vertical text-[0.8rem]"></i>
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
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="rtl:dir-rtl">
                            <div className="box custom-box">
                                <div className="box-body">
                                    <div className="grid grid-cols-12 gap-2">
                                        <div className="col-span-6">
                                            <img src="../../../assets/images/nft-images/10.png" alt=""
                                                className="nft-featuredcollect-image" />
                                        </div>
                                        <div className="col-span-6">
                                            <img src="../../../assets/images/nft-images/15.png" alt=""
                                                className="nft-featuredcollect-image" />
                                        </div>
                                        <div className="col-span-6">
                                            <img src="../../../assets/images/nft-images/17.png" alt=""
                                                className="nft-featuredcollect-image" />
                                        </div>
                                        <div className="col-span-6">
                                            <img src="../../../assets/images/nft-images/16.png" alt=""
                                                className="nft-featuredcollect-image" />
                                        </div>
                                    </div>
                                </div>
                                <div className="box-footer">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <div className="text-[#8c9097] dark:text-white/50 text-[0.75rem] flex items-center">Collection
                                                Rank :
                                                <span
                                                    className="font-semibold text-success text-[0.9375rem] mb-0 ms-1">#3</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center">
                                            <div className="me-2 leading-none">
                                                <span className="avatar avatar-rounded bg-light p-1 avatar-xs">
                                                    <img src="../../../assets/images/crypto-currencies/regular/Ethereum.svg"
                                                        alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="font-semibold">1.0355ETH</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-footer">
                                    <div className="flex items-center">
                                        <div className="flex items-center flex-grow">
                                            <div className="me-2 leading-none">
                                                <span className="avatar avatar-md avatar-rounded">
                                                    <img src="../../../assets/images/faces/10.jpg" alt="" />
                                                    <Link aria-label="anchor" href="#!"
                                                        className="badge !rounded-full !text-white bg-primary avatar-badge"><i
                                                            className="ri-check-line align-middle"></i></Link>
                                                </span>
                                            </div>
                                            <div>
                                                <p className="mb-0 font-semibold"><Link href="#!">Json
                                                    Talor</Link></p>
                                                <p className="text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-0">@taylor</p>
                                            </div>
                                        </div>
                                        <div className="hs-dropdown ti-dropdown">
                                            <Link aria-label="anchor" href="#!"
                                                className="flex items-center justify-center w-[1.75rem] h-[1.75rem] text-defaulttextcolor hover:bg-primary hover:text-white !text-[0.8rem] !py-1 !px-2 rounded-sm bg-primary/10 border-light shadow-none !font-medium"
                                                aria-expanded="false">
                                                <i className="fe fe-more-vertical text-[0.8rem]"></i>
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
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-9 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Trending NFTs
                            </div>
                            <div className="flex">
                                <div className="me-3">
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <div className="hs-dropdown ti-dropdown">
                                    <Link href="#!"
                                        className="ti-btn ti-btn-primary !bg-primary !text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium"
                                        aria-expanded="false">
                                        Sort By<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                    </Link>
                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem]  !text-[0.8125rem] !font-medium block"
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
                                <table className="table table-hover table-bordered whitespace-nowrap min-w-full">
                                    <thead>
                                        <tr>
                                            <th scope="row" className="text-start !min-w-[200px]">Collection</th>
                                            <th scope="row" className="text-start">Rank</th>
                                            <th scope="row" className="text-start min-w-32">Volume</th>
                                            <th scope="row" className="text-start">24h %</th>
                                            <th scope="row" className="text-start">7d %</th>
                                            <th scope="row" className="text-start  min-w-32">Floor Price</th>
                                            <th scope="row" className="text-start">Items</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {TrendingNFTs.map((idx) => (
                                            <tr className="border border-inherit border-solid hover:bg-gray-100 dark:hover:bg-light dark:border-defaultborder/10" key={Math.random()}>
                                                <td className=''>
                                                    <div className="flex items-center">
                                                        <img src={idx.src} alt="" className="avatar avatar-md rounded-md me-2 leading-none !mb-0" />
                                                        <div>
                                                            <p className="mb-0 font-semibold"><Link href="#!" title="nft_name">{idx.name}</Link></p>
                                                            <Link href="#!" className="text-[0.75rem] text-[#8c9097] dark:text-white/50 font-normal" title="creator_name">{idx.mail}</Link>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td><span className="font-semibold text-primary">{idx.rank}</span></td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="" className="avatar avatar-xs avatar-rounded me-2 leading-none" />
                                                        <div>
                                                            <p className="mb-0 font-semibold"><Link href="#!" title="nft_name">{idx.volume}</Link></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className={idx.color1}><i className={`ti ti-trending-${idx.class1} me-1 align-middle inline-block`}></i>{idx.value1}</span>
                                                </td>
                                                <td><span className={idx.color2}><i className={`ti ti-trending-${idx.class2} me-1 align-middle inline-block`}></i>{idx.value2}</span></td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <img src="../../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="" className="avatar avatar-xs avatar-rounded me-2 leading-none" />
                                                        <div>
                                                            <p className="mb-0 font-semibold"><Link href="#!" title="nft_name">{idx.price}</Link></p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>{idx.items}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="box-footer">
                            <div className="sm:flex items-center">
                                <div className="text-defaulttextcolor dark:text-defaulttextcolor/70">
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
                <div className="xxl:col-span-3 col-span-12">
                    <div className="box overflow-hidden">
                        <div className="box-header justify-between !border-b-0">
                            <div className="box-title">
                                Personal Listings
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
                        <div className="box-body !p-0">
                            <ul className="list-group list-group-flush !border-0">
                                {TrendingNFTs1.map((idx) => (
                                    <li className={`list-group-item ${idx.class}`} key={Math.random()}>
                                        <Link href="#!">
                                            <div className="flex flex-wrapitems-center justify-between">
                                                <div className="flex items-center">
                                                    <img src={idx.src} alt="" className="avatar avatar-md rounded-md me-2 leading-none !mb-0" />
                                                    <div>
                                                        <p className="font-semibold mb-0">{idx.name}</p>
                                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">{idx.mail}<span className={`ms-2 text-${idx.color} text-[0.6875rem]`}>{idx.icon}{idx.value}</span></span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <span className="text-[0.625rem] text-[#8c9097] dark:text-white/50 ps-4">PRICE</span>
                                                    <p className="mb-0 font-semibold flex items-center"><span className="avatar avatar-sm p-1 !mb-0"><img src="../../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="" /></span>{idx.price}</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Nft.layout = "Contentlayout"

export default Nft