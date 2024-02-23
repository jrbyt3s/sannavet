import { CapBTC, CapBitcoin, CapDASH, CapETH, CapEtherium } from '@/shared/data/apps/crypto/marcketcapdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React, { Fragment } from 'react'

const Marketcap = () => {
    return (
        <Fragment>
            <Seo title={"Marketcap"} />
            <Pageheader currentpage="Marketcap" activepage="Crypto" mainpage="Marketcap" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="sm:flex items-center mb-4">
                                <div className="flex items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md avatar-rounded bg-light p-2">
                                            <img src="../../../../assets/images/crypto-currencies/regular/Bitcoin.svg" alt="" />
                                        </span>
                                    </div>
                                    <div className="mb-0 font-semibold">
                                        Bitcoin - BTC
                                    </div>
                                </div>
                                <div className="ms-auto">
                                    <div id="bitcoin-chart">
                                        <CapBTC />
                                    </div>
                                </div>
                            </div>
                            <div className="sm:flex items-end">
                                <div>
                                    <p className="mb-1">BTC / USD</p>
                                    <p className="text-[1.25rem] mb-0 font-semibold leading-none text-primary">$35,876.29</p>
                                </div>
                                <div className="sm:ms-auto sm:text-end mt-2 sm:mt-0">
                                    <p className="mb-0">$0.04</p>
                                    <p className="mb-0 text-[#8c9097] dark:text-white/50"><span className="text-[#8c9097] dark:text-white/50">Vol:</span>(+2.33%)</p>
                                </div>
                            </div>
                        </div>
                        <div className="box-footer !p-0">
                            <div className="list-group border-0">
                                <Link href="#!" className="py-3 !px-[1.25rem] flex flex-col items-start border-t-0 border-x-0 !border-b dark:border-defaultborder/10 ">
                                    <div className="sm:flex w-full justify-between items-center">
                                        <p className="tx-14 mb-0 font-weight-semibold text-dark">Price Change <span className="badge bg-primary/10  ms-4 text-primary">Increased</span></p>
                                        <p className="text-success mb-0 font-weight-normal tx-13">
                                            <span className="numberfont">+280.30(0.96%)</span> <i className="fa fa-arrow-up"></i> today
                                        </p>
                                    </div>
                                </Link>
                                <Link href="#!" className="py-3 !px-[1.25rem] flex flex-col items-start border-t-0 border-x-0 ">
                                    <div className="flex w-full justify-between items-center">
                                        <p className="tx-14 mb-0 font-weight-semibold text-dark">Market Rank<span className="badge bg-secondary/10 text-secondary ms-4">3 Years</span></p>
                                        <p className="text-dark mb-0 tx-15">
                                            <span className="numberfont">#1</span>
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="sm:flex items-center mb-4">
                                <div className="flex items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md avatar-rounded bg-light p-2">
                                            <img src="../../../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="" />
                                        </span>
                                    </div>
                                    <div className="mb-0 font-semibold">
                                        Etherium - ETH
                                    </div>
                                </div>
                                <div className="ms-auto">
                                    <div id="etherium-chart">
                                        <CapETH />
                                    </div>
                                </div>
                            </div>
                            <div className="sm:flex items-end">
                                <div>
                                    <p className="mb-1">ETH / USD</p>
                                    <p className="text-[1.25rem] mb-0 font-semibold leading-none text-primary">$31,244.12</p>
                                </div>
                                <div className="sm:ms-auto sm:text-end mt-2 sm:mt-0">
                                    <p className="mb-0">$2.57</p>
                                    <p className="mb-0 text-[#8c9097] dark:text-white/50"><span className="text-[#8c9097] dark:text-white/50">Vol:</span>(+13.45%)</p>
                                </div>
                            </div>
                        </div>
                        <div className="box-footer !p-0">
                            <div className="list-group border-0">
                                <Link href="#!" className="py-3 px-[1.25rem] flex flex-col items-start border-t-0 border-x-0 border-b dark:border-defaultborder/10">
                                    <div className="sm:flex w-full justify-between items-center">
                                        <p className="tx-14 mb-0 font-weight-semibold text-dark">Price Change <span className="badge bg-primary/10 ms-3 text-primary">Increased</span></p>
                                        <p className="text-success mb-0 font-weight-normal tx-13">
                                            <span className="numberfont">+2,044.24(1.32%)</span> <i className="fa fa-arrow-up"></i> today
                                        </p>
                                    </div>
                                </Link>
                                <Link href="#!" className="py-3 px-[1.25rem] flex flex-col items-start border-topacity-0 border-start-0 border-end-0 ">
                                    <div className="flex w-full justify-between items-center">
                                        <p className="tx-14 mb-0 font-weight-semibold text-dark">Market Rank</p>
                                        <p className="text-dark mb-0 tx-15">
                                            <span className="numberfont">#2</span>
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="sm:flex items-center mb-4">
                                <div className="flex items-center">
                                    <div className="me-2">
                                        <span className="avatar avatar-md avatar-rounded bg-light p-2">
                                            <img src="../../../../assets/images/crypto-currencies/regular/Dash.svg" alt="" />
                                        </span>
                                    </div>
                                    <div className="mb-0 font-semibold">
                                        Dash - DASH
                                    </div>
                                </div>
                                <div className="ms-auto">
                                    <div id="dashcoin-chart">
                                        <CapDASH />
                                    </div>
                                </div>
                            </div>
                            <div className="sm:flex items-end">
                                <div>
                                    <p className="mb-1">DASH / USD</p>
                                    <p className="text-[1.25rem] mb-0 font-semibold leading-none text-primary">$26,345.000</p>
                                </div>
                                <div className="sm:ms-auto sm:text-end mt-2 sm:mt-0">
                                    <p className="mb-0">$12.32</p>
                                    <p className="mb-0 text-[#8c9097] dark:text-white/50"><span className="text-[#8c9097] dark:text-white/50">Vol:</span>(+112.95%)</p>
                                </div>
                            </div>
                        </div>
                        <div className="box-footer !p-0">
                            <div className="list-group">
                                <Link href="#!" className="py-3 px-[1.25rem] flex flex-col items-start border-t-0 border-x-0 border-b dark:border-defaultborder/10">
                                    <div className="sm:flex w-full justify-between items-center">
                                        <p className="tx-14 mb-0 font-weight-semibold text-dark">Price Change <span className="badge bg-primary/10 ms-3 text-primary">Increased</span></p>
                                        <p className="text-success mb-0 font-weight-normal tx-13">
                                            <span className="numberfont">+40.17 (1.52%)</span> <i className="fa fa-arrow-up"></i> today
                                        </p>
                                    </div>
                                </Link>
                                <Link href="#!" className="py-3 px-[1.25rem] flex flex-col items-start border-t-0 border-x-0 !border-b-0 ">
                                    <div className="flex w-full justify-between items-center">
                                        <p className="tx-14 mb-0 font-weight-semibold text-dark">Market Rank</p>
                                        <p className="text-dark mb-0 tx-15">
                                            <span className="numberfont">#105</span>
                                        </p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-12 col-span-12">
                    <div className="box custom-box overflow-hidden">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                My Top Currencies
                            </div>
                            <div>
                                <button type="button" className="ti-btn ti-btn-info !py-1 !px-2 !text-[0.75rem] btn-wave">View All</button>
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <ul className="list-group list-group-flush">
                                <li className="!py-1 !px-[1.25rem] border-b border-defaultborder dark:border-defaultborder/10">
                                    <div className="sm:flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-sm p-1 bg-light">
                                                    <img src="../../../../assets/images/crypto-currencies/regular/Bitcoin.svg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="block font-semibold">Bitcoin</span>
                                                <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] font-normal">$29,948.80</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Max Limit</span>
                                            <span className="font-semibold block">50 BTC</span>
                                        </div>
                                        <div>
                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">My Volume</span>
                                            <span className="font-semibold block">31.2450 BTC</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 px-[1.25rem] border-b border-defaultborder dark:border-defaultborder/10">
                                    <div className="sm:flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-sm p-1 bg-light">
                                                    <img src="../../../../assets/images/crypto-currencies/regular/litecoin.svg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="block font-semibold">Litecon</span>
                                                <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] font-normal">$92.98</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Max Limit</span>
                                            <span className="font-semibold block">200 LTC</span>
                                        </div>
                                        <div className="">
                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">My Volume</span>
                                            <span className="font-semibold block">38.0023 LTC</span>
                                        </div>
                                    </div>
                                </li>
                                <li className="py-3 px-[1.25rem]">
                                    <div className="sm:flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <div>
                                                <span className="avatar avatar-sm p-1 bg-light">
                                                    <img src="../../../../assets/images/crypto-currencies/regular/Ethereum.svg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <span className="block font-semibold">Etherium</span>
                                                <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] font-normal">$1,895.96</span>
                                            </div>
                                        </div>
                                        <div>
                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Max Limit</span>
                                            <span className="font-semibold block">100 ETH</span>
                                        </div>
                                        <div>
                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">My Volume</span>
                                            <span className="font-semibold block">69.2412 BTC</span>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Crypto MarketCap
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <div>
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <div className="hs-dropdown ti-dropdown">
                                    <Link href="#!" className="ti-btn ti-btn-primary-full !py-1 !px-2 !text-[0.75rem]" aria-expanded="false">
                                        Sort By<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                    </Link>
                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                        <li><Link className="ti-dropdown-item" href="#!">Market Cap</Link></li>
                                        <li><Link className="ti-dropdown-item" href="#!">Price</Link></li>
                                        <li><Link className="ti-dropdown-item" href="#!">Trading Volume</Link></li>
                                        <li><Link className="ti-dropdown-item" href="#!">Price Change (24h)</Link></li>
                                        <li><Link className="ti-dropdown-item" href="#!">Rank</Link></li>
                                        <li><Link className="ti-dropdown-item" href="#!">A - Z</Link></li>
                                        <li><Link className="ti-dropdown-item" href="#!">All-Time High (ATH)</Link></li>
                                    </ul>
                                </div>
                                <div>
                                    <button type="button" className="ti-btn ti-btn-secondary-full !py-1 !px-2 !text-[0.75rem]">View All</button>
                                </div>
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <div className="table-responsive">
                                <table className="table whitespace-nowrap min-w-full">
                                    <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col" className="font-semibold text-start">#</th>
                                            <th scope="col" className="text-start">Crypto Name</th>
                                            <th scope="col" className="text-start">MarketCap</th>
                                            <th scope="col" className="text-start">Price<span className="text-[#8c9097] dark:text-white/50 ms-1">(USD)</span></th>
                                            <th scope="col" className="text-start">1h Change</th>
                                            <th scope="col" className="text-start">24h Change</th>
                                            <th scope="col" className="text-start">Volume (24h)</th>
                                            <th scope="col" className="text-start">Circulating Supply</th>
                                            <th scope="col" className="text-start">last 1Week</th>
                                            <th scope="col" className="text-start">Trade</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border border-defaultborder">
                                            <td className="text-center">
                                                <Link aria-label="anchor" href="#!"><i className="ri-star-line text-[1rem] text-[#8c9097] dark:text-white/50"></i></Link>
                                            </td>
                                            <td>1</td>
                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <div className="leading-none">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../../assets/images/crypto-currencies/square-color/Bitcoin.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="font-semibold"><Link href="#!">Bitcoin (BTC)</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="font-semibold">$582.23B</span>
                                            </td>
                                            <td>
                                                <span className="font-semibold">
                                                    <Link href="#!">$29,948.80</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-danger font-semibold"><i className="ti ti-arrow-narrow-down text-[.9375rem] font-semibold"></i>0.483%</span>
                                            </td>
                                            <td>
                                                <span className="text-success font-semibold"><i className="ti ti-arrow-narrow-up text-[.9375rem] font-semibold"></i>0.239%</span>
                                            </td>
                                            <td>
                                                <Link href="#!">
                                                    <span className="block font-semibold">$11.79B USD</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!">
                                                    <span className="font-semibold block mb-2">
                                                        19.43M of (21M)
                                                    </span>
                                                    <div className="progress-stacked progress-xs w-[75%] mb-4 flex">
                                                        <div className="progress-bar !bg-success opacity-[0.5] w-[88%]"
                                                            aria-valuenow="88" aria-valuemin="0" aria-valuemax="100"></div>
                                                        <div className="progress-bar !rounded-s-none !rounded-e-full !bg-danger opacity-[0.5] w-[12%]"
                                                            aria-valuenow="12" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="btc-chart">
                                                    <CapBitcoin />
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button" className="ti-btn ti-btn-success !py-1 !px-2 !text-[0.75rem]">Trade</button>
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder">
                                            <td className="text-center">
                                                <Link aria-label="anchor" href="#!"><i className="ri-star-line text-[1rem] text-[#8c9097] dark:text-white/50"></i></Link>
                                            </td>
                                            <td>2</td>
                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <div className="leading-none">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="font-semibold"><Link href="#!">Etherium (ETH)</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="font-semibold">$226.91B</span>
                                            </td>
                                            <td>
                                                <span className="font-semibold">
                                                    <Link href="#!">$1,895.96</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-danger font-semibold"><i className="ti ti-arrow-narrow-down text-[.9375rem] font-semibold"></i>0.87%</span>
                                            </td>
                                            <td>
                                                <span className="text-danger font-semibold"><i className="ti ti-arrow-narrow-down text-[.9375rem] font-semibold"></i>0.29%</span>
                                            </td>
                                            <td>
                                                <Link href="#!">
                                                    <span className="block font-semibold">$2.83B USD</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!">
                                                    <span className="font-semibold block">
                                                        120M
                                                    </span>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="eth-chart">
                                                    <CapEtherium />
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button" className="ti-btn ti-btn-success !py-1 !px-2 !text-[0.75rem]">Trade</button>
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder">
                                            <td className="text-center">
                                                <Link aria-label="anchor" href="#!"><i className="ri-star-line text-[1rem] text-[#8c9097] dark:text-white/50"></i></Link></td>
                                            <td>3</td>
                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <div className="leading-none">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../../assets/images/crypto-currencies/square-color/Golem.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="font-semibold"><Link href="#!">Golem (GLM)</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="font-semibold">$202.07M</span>
                                            </td>
                                            <td>
                                                <span className="font-semibold">
                                                    <Link href="#!">$0.201472</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-success font-semibold"><i className="ti ti-arrow-narrow-up text-[.9375rem] font-semibold"></i>0.61%</span>
                                            </td>
                                            <td>
                                                <span className="text-danger font-semibold"><i className="ti ti-arrow-narrow-down text-[.9375rem] font-semibold"></i>34.96%</span>
                                            </td>
                                            <td>
                                                <Link href="#!">
                                                    <span className="block font-semibold">$2,112,645 USD</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!">
                                                    <span className="font-semibold block mb-2">
                                                        1,000M
                                                    </span>
                                                    <div className="progress-stacked  progress-xs w-[75%] mb-4 flex">
                                                        <div className="progress-bar !rounded-full !bg-success opacity-[0.5] w-full"
                                                            aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="glm-chart">
                                                    <CapEtherium />
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button" className="ti-btn ti-btn-success !py-1 !px-2 !text-[0.75rem]">Trade</button>
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder">
                                            <td className="text-center">
                                                <Link aria-label="anchor" href="#!"><i className="ri-star-line text-[1rem] text-[#8c9097] dark:text-white/50"></i></Link></td>
                                            <td>4</td>
                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <div className="leading-none">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../../assets/images/crypto-currencies/square-color/Dash.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="font-semibold"><Link href="#!">Dash (DASH)</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="font-semibold">$365.877M</span>
                                            </td>
                                            <td>
                                                <span className="font-semibold">
                                                    <Link href="#!">$32.13</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-success font-semibold"><i className="ti ti-arrow-narrow-up text-[.9375rem] font-semibold"></i>0.59%</span>
                                            </td>
                                            <td>
                                                <span className="text-success font-semibold"><i className="ti ti-arrow-narrow-down text-[.9375rem] font-semibold"></i>1.24%</span>
                                            </td>
                                            <td>
                                                <Link href="#!">
                                                    <span className="block font-semibold">$3.61M USD</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!">
                                                    <span className="font-semibold block mb-2">
                                                        11.37M of (18.92M)
                                                    </span>
                                                    <div className="progress-stacked  progress-xs w-[75%] mb-4 flex">
                                                        <div className="progress-bar !bg-success opacity-[0.5] w-[56%]"
                                                            aria-valuenow="56" aria-valuemin="0" aria-valuemax="100"></div>
                                                        <div className="progress-bar !rounded-s-none !rounded-e-full !rounded-full !bg-danger opacity-[0.5] w-[44%]"
                                                            aria-valuenow="44" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="dash-chart">
                                                    <CapEtherium />
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button" className="ti-btn ti-btn-success !py-1 !px-2 !text-[0.75rem]">Trade</button>
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder">
                                            <td className="text-center">
                                                <Link aria-label="anchor" href="#!"><i className="ri-star-line text-[1rem] text-[#8c9097] dark:text-white/50"></i></Link></td>
                                            <td>5</td>
                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <div className="leading-none">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../../assets/images/crypto-currencies/square-color/Litecoin.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="font-semibold"><Link href="#!">Litecoin (LTC)</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="font-semibold">$6.80B</span>
                                            </td>
                                            <td>
                                                <span className="font-semibold">
                                                    <Link href="#!">$92.98</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-danger font-semibold"><i className="ti ti-arrow-narrow-up text-[.9375rem] font-semibold"></i>0.90%</span>
                                            </td>
                                            <td>
                                                <span className="text-success font-semibold"><i className="ti ti-arrow-narrow-down text-[.9375rem] font-semibold"></i>2.22%</span>
                                            </td>
                                            <td>
                                                <Link href="#!">
                                                    <span className="block font-semibold">$11.46B USD</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!">
                                                    <span className="font-semibold block mb-2">
                                                        73.40M
                                                    </span>
                                                    <div className="progress-stacked  progress-xs w-[75%] mb-4 flex">
                                                        <div className="progress-bar !bg-success !rounded-full opacity-[0.5] w-full"
                                                            aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="lite-chart">
                                                    <CapBitcoin />
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button" className="ti-btn ti-btn-success !py-1 !px-2 !text-[0.75rem]">Trade</button>
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder">
                                            <td className="text-center">
                                                <Link aria-label="anchor" href="#!"><i className="ri-star-line text-[1rem] text-[#8c9097] dark:text-white/50"></i></Link></td>
                                            <td>6</td>
                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <div className="leading-none">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../../assets/images/crypto-currencies/square-color/Ripple.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="font-semibold"><Link href="#!">Ripple (XRP)</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="font-semibold">$42.48B</span>
                                            </td>
                                            <td>
                                                <span className="font-semibold">
                                                    <Link href="#!">$0.83</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-success font-semibold"><i className="ti ti-arrow-narrow-up text-[.9375rem] font-semibold"></i>0.01%</span>
                                            </td>
                                            <td>
                                                <span className="text-success font-semibold"><i className="ti ti-arrow-narrow-down text-[.9375rem] font-semibold"></i>0.91%</span>
                                            </td>
                                            <td>
                                                <Link href="#!">
                                                    <span className="block font-semibold">$2.99B USD</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!">
                                                    <span className="font-semibold block mb-2">
                                                        52.54B of (100B)
                                                    </span>
                                                    <div className="progress-stacked  progress-xs w-[75%] mb-4 flex">
                                                        <div className="progress-bar !bg-success opacity-[0.5] w-[52%]"
                                                            aria-valuenow="52" aria-valuemin="0" aria-valuemax="100"></div>
                                                        <div className="progress-bar !rounded-s-none !rounded-e-full !bg-danger opacity-[0.5] w-[48%]"
                                                            aria-valuenow="48" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="ripple-chart">
                                                    <CapEtherium />
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button" className="ti-btn ti-btn-success !py-1 !px-2 !text-[0.75rem]">Trade</button>
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder">
                                            <td className="text-center">
                                                <Link aria-label="anchor" href="#!"><i className="ri-star-line text-[1rem] text-[#8c9097] dark:text-white/50"></i></Link></td>
                                            <td>7</td>
                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <div className="leading-none">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../../assets/images/crypto-currencies/square-color/EOS.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="font-semibold"><Link href="#!">EOS</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="font-semibold">$85.2M</span>
                                            </td>
                                            <td>
                                                <span className="font-semibold">
                                                    <Link href="#!">$0.765957</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-danger font-semibold"><i className="ti ti-arrow-narrow-up text-[.9375rem] font-semibold"></i>0.61%</span>
                                            </td>
                                            <td>
                                                <span className="text-danger font-semibold"><i className="ti ti-arrow-narrow-down text-[.9375rem] font-semibold"></i>20.65%</span>
                                            </td>
                                            <td>
                                                <Link href="#!">
                                                    <span className="block font-semibold">$116.91M USD</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!">
                                                    <span className="font-semibold block mb-2">
                                                        10.1B of (105B)
                                                    </span>
                                                    <div className="progress-stacked  progress-xs w-[75%] mb-4 flex">
                                                        <div className="progress-bar !bg-success opacity-[0.5] w-[10%]"
                                                            aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                                                        <div className="progress-bar !rounded-s-none !rounded-e-full  !bg-danger opacity-[0.5] w-[90%]"
                                                            aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="eos-chart">
                                                    <CapEtherium />
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button" className="ti-btn ti-btn-success !py-1 !px-2 !text-[0.75rem]">Trade</button>
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder">
                                            <td className="text-center">
                                                <Link aria-label="anchor" href="#!"><i className="ri-star-line text-[1rem] text-[#8c9097] dark:text-white/50"></i></Link></td>
                                            <td>8</td>
                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <div className="leading-none">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../../assets/images/crypto-currencies/square-color/Bytecoin.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="font-semibold"><Link href="#!">Bytecoin (BCN)</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="font-semibold">$6.2M</span>
                                            </td>
                                            <td>
                                                <span className="font-semibold">
                                                    <Link href="#!">$0.00039</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-danger font-semibold"><i className="ti ti-arrow-narrow-up text-[.9375rem] font-semibold"></i>25.24%</span>
                                            </td>
                                            <td>
                                                <span className="text-danger font-semibold"><i className="ti ti-arrow-narrow-down text-[.9375rem] font-semibold"></i>27.12%</span>
                                            </td>
                                            <td>
                                                <Link href="#!">
                                                    <span className="block font-semibold">$6,184 USD</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!">
                                                    <span className="font-semibold block mb-2">
                                                        184.02B of (184.07B)
                                                    </span>
                                                    <div className="progress-stacked  progress-xs w-[75%] mb-4 flex">
                                                        <div className="progress-bar !bg-success opacity-[0.5] w-[99%]"
                                                            aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"></div>
                                                        <div className="progress-bar !rounded-s-none !rounded-e-full  !bg-danger opacity-[0.5] w-[1%]"
                                                            aria-valuenow="1" aria-valuemin="0" aria-valuemax="100"></div>
                                                    </div>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="bytecoin-chart">
                                                    <CapBitcoin />
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button" className="ti-btn ti-btn-success !py-1 !px-2 !text-[0.75rem]">Trade</button>
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder">
                                            <td className="text-center">
                                                <Link aria-label="anchor" href="#!"><i className="ri-star-line text-[1rem] text-[#8c9097] dark:text-white/50"></i></Link></td>
                                            <td>9</td>
                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <div className="leading-none">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../../assets/images/crypto-currencies/square-color/IOTA.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="font-semibold"><Link href="#!">IOTA</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="font-semibold">$510.429M</span>
                                            </td>
                                            <td>
                                                <span className="font-semibold">
                                                    <Link href="#!">$0.184992</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-danger font-semibold"><i className="ti ti-arrow-narrow-up text-[.9375rem] font-semibold"></i>1.08%</span>
                                            </td>
                                            <td>
                                                <span className="text-danger font-semibold"><i className="ti ti-arrow-narrow-down text-[.9375rem] font-semibold"></i>1.41%</span>
                                            </td>
                                            <td>
                                                <Link href="#!">
                                                    <span className="block font-semibold">$7.50M USD</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!">
                                                    <span className="font-semibold block">
                                                        2.78B
                                                    </span>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="iota-chart">
                                                    <CapBitcoin />
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button" className="ti-btn ti-btn-success !py-1 !px-2 !text-[0.75rem]">Trade</button>
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder">
                                            <td className="text-center">
                                                <Link aria-label="anchor" href="#!"><i className="ri-star-line text-[1rem] text-[#8c9097] dark:text-white/50"></i></Link></td>
                                            <td>10</td>
                                            <td>
                                                <div className="flex items-center gap-2">
                                                    <div className="leading-none">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../../assets/images/crypto-currencies/square-color/Monero.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="font-semibold"><Link href="#!">Monero</Link></div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="font-semibold">$3.062B</span>
                                            </td>
                                            <td>
                                                <span className="font-semibold">
                                                    <Link href="#!">$165.76</Link>
                                                </span>
                                            </td>
                                            <td>
                                                <span className="text-danger font-semibold"><i className="ti ti-arrow-narrow-up text-[.9375rem] font-semibold"></i>3.22%</span>
                                            </td>
                                            <td>
                                                <span className="text-danger font-semibold"><i className="ti ti-arrow-narrow-down text-[.9375rem] font-semibold"></i>3.48%</span>
                                            </td>
                                            <td>
                                                <Link href="#!">
                                                    <span className="block font-semibold">$105.8M USD</span>
                                                </Link>
                                            </td>
                                            <td>
                                                <Link href="#!">
                                                    <span className="font-semibold block">
                                                        18.15M
                                                    </span>
                                                </Link>
                                            </td>
                                            <td>
                                                <div id="monero-chart">
                                                    <CapEtherium />
                                                </div>
                                            </td>
                                            <td>
                                                <button type="button" className="ti-btn ti-btn-success !py-1 !px-2 !text-[0.75rem]">Trade</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="box-footer !border-t-0">
                            <nav aria-label="Page navigation">
                                <ul className="ti-pagination  mb-0 justify-end">
                                    <li className="page-item disabled"><Link className="page-link px-3 py-[0.375rem]" href="#!">Previous</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">1</Link></li>
                                    <li className="page-item"><Link className="page-link active px-3 py-[0.375rem]" href="#!">2</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">Next</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Marketcap.layout = "Contentlayout"

export default Marketcap