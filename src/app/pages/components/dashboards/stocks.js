import { MarketCap, NumberofInvested, Portfoliovalue, Returnsrate, TotalInvested, Totalinvestments } from '@/shared/data/dashboards/stocksdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React, { Fragment } from 'react'

const Stocks = () => {
    return (
        <Fragment>
            <Seo title={"Stocks"} />
            <Pageheader currentpage="Stocks" activepage="Dashboards" mainpage="Stocks" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12  col-span-12">
                    <div className="box">
                        <div className="box-body">
                            <div className="md:flex block flex-wrap items-center justify-between">
                                <div className="flex-grow">
                                    <nav className="nav nav-pills nav-style-3 flex md:mb-0 mb-4" aria-label="Tabs">
                                        <Link href="#!" className="nav-link text-defaulttextcolor !py-[0.35rem] !px-4 text-sm !font-medium text-center rounded-md hover:text-primary active" id="portfolio-item" data-hs-tab="#Stocksportfolio" aria-controls="Stocksportfolio">
                                            Portfolio
                                        </Link>
                                        <Link href="#!" className="nav-link text-defaulttextcolor !py-[0.35rem] !px-4 text-sm !font-medium text-center rounded-md hover:text-primary" id="market-item" data-hs-tab="#Stocksmarket" aria-controls="Stocksmarket">
                                            Market
                                        </Link>
                                    </nav>
                                </div>
                                <div className="flex flex-wrap items-center md:mt-0 justify-evenly gap-6">
                                    <div className="md:text-end">
                                        <span className="block font-semibold">Total Value</span>
                                        <span className="!text-primary">$8.89k</span>
                                    </div>
                                    <div className="md:text-end">
                                        <span className="block font-semibold">Market Value</span>
                                        <span className="!text-warning">$15.9k</span>
                                    </div>
                                    <div className="md:text-end">
                                        <span className="block font-semibold">Yield</span>
                                        <span className="!text-danger">3.4%</span>
                                    </div>
                                    <div className="md:text-end">
                                        <span className="block font-semibold">Dividend</span>
                                        <span className="!text-info">$1.3k</span>
                                    </div>
                                    <div className="md:text-end">
                                        <span className="block font-semibold">Gain</span>
                                        <span className="!text-success">$116</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="tab-content">
                        <div className="tab-pane show active !p-0 !border-0" id="Stocksportfolio" aria-labelledby="portfolio-item" role="tabpanel">
                            <div className="grid grid-cols-12 gap-x-6">
                                <div className="xl:col-span-3 sm:col-span-6 col-span-12">
                                    <div className="box">
                                        <div className="box-body">
                                            <div className="flex gap-3 flex-wrap items-start justify-between">
                                                <div className="flex-grow flex items-start sm:mb-0">
                                                    <div className="me-4">
                                                        <span className="avatar avatar-rounded bg-primary">
                                                            <i className="ti ti-wallet text-[1rem] text-white"></i>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="block text-[#8c9097] dark:text-white/50">Total amount Invested</span>
                                                        <span className="text-[1rem] font-semibold">$23,8998.99</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div id="total-invested">
                                                        <TotalInvested />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-3 sm:col-span-6 col-span-12">
                                    <div className="box">
                                        <div className="box-body">
                                            <div className="flex gap-3 flex-wrap items-start justify-between">
                                                <div className="flex-grow flex items-start  sm:mb-0">
                                                    <div className="me-4">
                                                        <span className="avatar avatar-rounded bg-secondary">
                                                            <i className="ti ti-arrow-big-up-line text-[1rem] text-white"></i>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="block text-[#8c9097] dark:text-white/50">No Of Investments</span>
                                                        <span className="text-[1rem] font-semibold">116</span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div id="total-investments">
                                                        <NumberofInvested />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-3 sm:col-span-6 col-span-12">
                                    <div className="box">
                                        <div className="box-body">
                                            <div className="flex gap-3 flex-wrap items-start justify-between">
                                                <div className="flex-grow flex items-start  sm:mb-0">
                                                    <div className="me-4">
                                                        <span className="avatar avatar-rounded bg-warning">
                                                            <i className="ti ti-wallet text-[1rem] text-white"></i>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="block text-[#8c9097] dark:text-white/50">Portfolio Value</span>
                                                        <span className="text-[1rem] font-semibold">$12,920.20<i className="ti ti-arrow-narrow-up ms-1 text-success"></i></span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div id="portfolio-value">
                                                        <Portfoliovalue />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-3 sm:col-span-6 col-span-12">
                                    <div className="box">
                                        <div className="box-body">
                                            <div className="flex gap-3 flex-wrap items-start justify-between">
                                                <div className="flex-grow flex items-start sm:mb-0">
                                                    <div className="me-4">
                                                        <span className="avatar avatar-rounded bg-success">
                                                            <i className="ti ti-wallet text-[1rem] text-white"></i>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="block text-[#8c9097] dark:text-white/50">Returns Rate</span>
                                                        <span className="text-[1rem] font-semibold">+12.08%<i className="ti ti-arrow-narrow-up ms-1 text-success"></i></span>
                                                    </div>
                                                </div>
                                                <div>
                                                    <div id="returns-rate">
                                                        <Returnsrate />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-x-6">
                                <div className="xl:col-span-8 col-span-12">
                                    <div className="box">
                                        <div className="box-header justify-between">
                                            <div className="box-title mb-2 sm:mb-0">
                                                Total Investments
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
                                        <div className="box-body">
                                            <div className="flex items-center justify-between gap-4 flex-wrap">
                                                <div className="flex flex-wrap flex-grow gap-3 sm:ms-[3rem] ms-0">
                                                    <div>
                                                        <span className="block text-[#8c9097] dark:text-white/50 mb-1">Invested Value</span>
                                                        <span className="block font-semibold">$1,290.94<span className="text-success ms-1 text-[0.75rem]"><i className="ti ti-chevron-up"></i>1.22%</span></span>
                                                    </div>
                                                    <div>
                                                        <span className="block text-[#8c9097] dark:text-white/50 mb-1">Total Returns</span>
                                                        <span className="block font-semibold">$25,458.20<span className="text-success ms-1 text-[0.75rem]"><i className="ti ti-chevron-up"></i>10.14%</span></span>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap gap-3 text-end">
                                                    <div>
                                                        <span className="block text-[#8c9097] dark:text-white/50 mb-1">Today Change</span>
                                                        <span className="block font-semibold">$112.09</span>
                                                    </div>
                                                    <div>
                                                        <span className="block text-[#8c9097] dark:text-white/50 mb-1">Change In %</span>
                                                        <span className="block font-semibold">+0.01%<span className="text-success ms-1 text-[0.75rem]"><i className="ti ti-chevron-up"></i>0.21%</span></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="totalInvestmentsStats">
                                                <Totalinvestments />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-4 col-span-12">
                                    <div className="box">
                                        <div className="box-header justify-between">
                                            <div className="box-title">
                                                My Stocks
                                            </div>
                                            <div className="flex items-center flex-wrap gap-2">
                                                <input className="ti-form-control form-control-sm" type="text" placeholder="Search Any Stock" aria-label=".form-control-sm example" />
                                                <div className="hs-dropdown ti-dropdown !py-0 !mt-0 !mb-0">
                                                    <Link href="#!"
                                                        className="ti-btn ti-btn-primary !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium !mb-0"
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
                                        <div className="box-body !p-0">
                                            <ul className="list-none my-stocks-ul mb-0">
                                                <li>
                                                    <div className="flex items-center flex-grow leading-none">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded bg-light p-2 !mb-0">
                                                                <i className="bi bi-github text-black dark:text-white text-[1.125rem]"></i>
                                                            </span>
                                                        </div>
                                                        <div className="leading-none flex-grow">
                                                            <span className="font-semibold block mb-2">GTHB (Gituhb, Demo Inc.)</span>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">16 Shares</span>
                                                        </div>
                                                        <div className="text-end me-3">
                                                            <span className="block font-semibold mb-1">
                                                                $12,390.02
                                                            </span>
                                                            <span className="block text-success"><i className="ti ti-arrow-narrow-up"></i>0.14%</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-[0.875rem]">
                                                                <i className="bi bi-star-fill text-[#8c9097] dark:text-white/50 opacity-50"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex items-center flex-grow leading-none">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded bg-light p-2 !mb-0">
                                                                <i className="bi bi-twitter text-info text-[1.125rem]"></i>
                                                            </span>
                                                        </div>
                                                        <div className="leading-none flex-grow">
                                                            <span className="font-semibold block mb-2">TTR (Twiter.com, Inc.)</span>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">289 Shares</span>
                                                        </div>
                                                        <div className="text-end me-3">
                                                            <span className="block font-semibold mb-1">
                                                                $15,526.01
                                                            </span>
                                                            <span className="block text-success"><i className="ti ti-arrow-narrow-up"></i>2.14%</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-[0.875rem]">
                                                                <i className="bi bi-star text-[#8c9097] dark:text-white/50 opacity-50"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex items-center flex-grow leading-none">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded bg-light p-2 !mb-0">
                                                                <i className="bi bi-bootstrap-fill text-primary text-[1.125rem]"></i>
                                                            </span>
                                                        </div>
                                                        <div className="leading-none flex-grow">
                                                            <span className="font-semibold block mb-2">BS (Boostrap, Inc.)</span>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">325 shares</span>
                                                        </div>
                                                        <div className="text-end me-3">
                                                            <span className="block font-semibold mb-1">
                                                                $30,500.15
                                                            </span>
                                                            <span className="block text-danger"><i className="ti ti-arrow-narrow-down"></i>2.73%</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-[0.875rem]">
                                                                <i className="bi bi-star-fill text-[#8c9097] dark:text-white/50 opacity-50"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex items-center flex-grow leading-none">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded bg-light p-2 !mb-0">
                                                                <i className="bi bi-windows text-success text-[1.125rem]"></i>
                                                            </span>
                                                        </div>
                                                        <div className="leading-none flex-grow">
                                                            <span className="font-semibold block mb-2">MS (Micorsoft, Inc.)</span>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">1,523 shares</span>
                                                        </div>
                                                        <div className="text-end me-3">
                                                            <span className="block font-semibold mb-1">
                                                                $1,80,520.02
                                                            </span>
                                                            <span className="block text-success"><i className="ti ti-arrow-narrow-up"></i>8.63%</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-[0.875rem]">
                                                                <i className="bi bi-star text-[#8c9097] dark:text-white/50 opacity-50"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex items-center flex-grow leading-none">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded bg-light p-2 !mb-0">
                                                                <i className="bi bi-apple text-warning text-[1.125rem]"></i>
                                                            </span>
                                                        </div>
                                                        <div className="leading-none flex-grow">
                                                            <span className="font-semibold block mb-2">AAPL (Appil, Inc.)</span>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">30 shares</span>
                                                        </div>
                                                        <div className="text-end me-3">
                                                            <span className="block font-semibold mb-1">
                                                                $21,093.20
                                                            </span>
                                                            <span className="block text-danger"><i className="ti ti-arrow-narrow-down"></i>4.10%</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-[0.875rem]">
                                                                <i className="bi bi-star-fill text-[#8c9097] dark:text-white/50 opacity-50"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="flex items-center flex-grow leading-none">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded bg-light p-2 !mb-0">
                                                                <i className="bi bi-currency-bitcoin text-danger text-[1.125rem]"></i>
                                                            </span>
                                                        </div>
                                                        <div className="leading-none flex-grow">
                                                            <span className="font-semibold block mb-2">Bitcoin (Bioset Coin, Inc.)</span>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">118 shares</span>
                                                        </div>
                                                        <div className="text-end me-3">
                                                            <span className="block font-semibold mb-1">
                                                                $14,245.23
                                                            </span>
                                                            <span className="block text-success"><i className="ti ti-arrow-narrow-up"></i>0.79%</span>
                                                        </div>
                                                        <div>
                                                            <span className="text-[0.875rem]">
                                                                <i className="bi bi-star-fill text-[#8c9097] dark:text-white/50 opacity-50"></i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-x-6">
                                <div className="xl:col-span-12 col-span-12">
                                    <h6 className="font-semibold dark:text-defaulttextcolor/70 mb-4 text-[1rem]">
                                        Trending Stocks :
                                    </h6>
                                    <div className="grid grid-cols-12 gap-x-6">
                                        <div className="xxl:col-span-2 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <div className="p-4 box border dark:border-defaultborder/10 bg-white rounded">
                                                <div className="flex gap-2 flex-wrap items-center justify-between mb-4">
                                                    <div className="flex flex-grow items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded bg-light p-2 !mb-0">
                                                                <i className="bi bi-apple text-[#8c9097] dark:text-white/50 text-[1.125rem]"></i>
                                                            </span>
                                                        </div>
                                                        <div className="leading-none">
                                                            <span className="font-semibold block mb-2 text-default">Apple</span>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">$12,289.44</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-success text-[0.75rem] text-end">
                                                        <span className="block">0.14%<i className="ti ti-arrow-bear-right"></i></span>
                                                        <span className="block">+$1,780.80</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2">
                                                    <button type="button" className="ti-btn ti-btn-sm ti-btn-light flex-grow font-medium">Short</button>
                                                    <button type="button" className="ti-btn ti-btn-sm ti-btn-primary flex-grow font-medium">Buy</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xxl:col-span-2 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <div className="p-4 box border dark:border-defaultborder/10 bg-white rounded">
                                                <div className="flex gap-2 flex-wrap items-center justify-between mb-4">
                                                    <div className="flex flex-grow items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded bg-light p-2 !mb-0">
                                                                <i className="bi bi-currency-bitcoin text-warning text-[1.125rem]"></i>
                                                            </span>
                                                        </div>
                                                        <div className="leading-none">
                                                            <span className="font-semibold block mb-2 text-default">Bitcoin</span>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">$58,151.02</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-success text-[0.75rem] text-end">
                                                        <span className="block">2.14%<i className="ti ti-arrow-bear-right"></i></span>
                                                        <span className="block">+$5,745.62</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2">
                                                    <button type="button" className="ti-btn ti-btn-sm ti-btn-light flex-grow font-medium">Short</button>
                                                    <button type="button" className="ti-btn ti-btn-sm ti-btn-primary flex-grow font-medium">Buy</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xxl:col-span-2 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <div className="p-4 box border dark:border-defaultborder/10 bg-white rounded">
                                                <div className="flex gap-2 flex-wrap items-center justify-between mb-4">
                                                    <div className="flex flex-grow items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded bg-light p-2 !mb-0">
                                                                <i className="bi bi-card-list text-success text-[1.125rem]"></i>
                                                            </span>
                                                        </div>
                                                        <div className="leading-none">
                                                            <span className="font-semibold block mb-2 text-default">Tesla</span>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">$14,452.36</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-success text-[0.75rem] text-end">
                                                        <span className="block">4.02%<i className="ti ti-arrow-bear-right"></i></span>
                                                        <span className="block">+$4,125.63</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2">
                                                    <button type="button" className="ti-btn ti-btn-sm ti-btn-light flex-grow font-medium">Short</button>
                                                    <button type="button" className="ti-btn ti-btn-sm ti-btn-primary flex-grow font-medium">Buy</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xxl:col-span-2 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <div className="p-4 box border dark:border-defaultborder/10 bg-white rounded">
                                                <div className="flex gap-2 flex-wrap items-center justify-between mb-4">
                                                    <div className="flex flex-grow items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded bg-light p-2 !mb-0">
                                                                <i className="bi bi-gift text-primary text-[1.125rem]"></i>
                                                            </span>
                                                        </div>
                                                        <div className="leading-none">
                                                            <span className="font-semibold block mb-2 text-default">Amazon</span>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">$63,251.11</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-success text-[0.75rem] text-end">
                                                        <span className="block">5.14%<i className="ti ti-arrow-bear-right"></i></span>
                                                        <span className="block">+$936.30</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2">
                                                    <button type="button" className="ti-btn ti-btn-sm ti-btn-light flex-grow font-medium">Short</button>
                                                    <button type="button" className="ti-btn ti-btn-sm ti-btn-primary flex-grow font-medium">Buy</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xxl:col-span-2 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <div className="p-4 box border dark:border-defaultborder/10 bg-white rounded">
                                                <div className="flex flex-wrap items-center justify-between mb-4">
                                                    <div className="flex flex-grow items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded bg-light p-2 !mb-0">
                                                                <i className="bi bi-truck text-danger text-[1.125rem]"></i>
                                                            </span>
                                                        </div>
                                                        <div className="leading-none">
                                                            <span className="font-semibold block mb-2 text-default">Aliexpress</span>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">$5,401.50</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-success text-[0.75rem] text-end">
                                                        <span className="block">3.32%<i className="ti ti-arrow-bear-right"></i></span>
                                                        <span className="block">+$4,360.65</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2">
                                                    <button type="button" className="ti-btn ti-btn-sm ti-btn-light flex-grow font-medium">Short</button>
                                                    <button type="button" className="ti-btn ti-btn-sm ti-btn-primary flex-grow font-medium">Buy</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xxl:col-span-2 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                            <div className="p-4 box border dark:border-defaultborder/10 bg-white rounded">
                                                <div className="flex flex-wrap items-center justify-between mb-4">
                                                    <div className="flex flex-grow items-center">
                                                        <div className="me-2">
                                                            <span className="avatar avatar-rounded bg-light p-2 !mb-0">
                                                                <i className="bi bi-phone text-secondary text-[1.125rem]"></i>
                                                            </span>
                                                        </div>
                                                        <div className="leading-none">
                                                            <span className="font-semibold block mb-2 text-default">Samsung</span>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">$10,732.12</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-success text-[0.75rem] text-end">
                                                        <span className="block">1.24%<i className="ti ti-arrow-bear-right"></i></span>
                                                        <span className="block">+$3,221.29</span>
                                                    </div>
                                                </div>
                                                <div className="flex gap-2">
                                                    <button type="button" className="ti-btn ti-btn-sm ti-btn-light flex-grow font-medium">Short</button>
                                                    <button type="button" className="ti-btn ti-btn-sm ti-btn-primary flex-grow font-medium">Buy</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 gap-x-6">
                                <div className="xl:col-span-5 col-span-12">
                                    <div className="box">
                                        <div className="box-header justify-between">
                                            <div className="box-title">
                                                Transaction History
                                            </div>
                                            <div className="hs-dropdown ti-dropdown">
                                                <Link href="#!"
                                                    className="ti-btn ti-btn-primary !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium"
                                                    aria-expanded="false">
                                                    All<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                                </Link>
                                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                        href="#!">Buy</Link></li>
                                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                        href="#!">Sell</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="box-body">
                                            <div className="table-responsive">
                                                <table className="table whitespace-nowrap table-bordered border-primary/10 min-w-full">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" className="text-start">Symbol</th>
                                                            <th scope="col" className="text-start">Date</th>
                                                            <th scope="col" className="text-start">Type</th>
                                                            <th scope="col" className="text-start">Amount</th>
                                                            <th scope="col" className="text-start">Shares</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                                                            <th scope="row" className="text-start">
                                                                EPA:THI
                                                            </th>
                                                            <td>
                                                                12-06-2023
                                                            </td>
                                                            <td>
                                                                <span className="badge bg-primary text-white">Buy</span>
                                                            </td>
                                                            <td>
                                                                <span className="text-danger">-$1,290</span>
                                                            </td>
                                                            <td>
                                                                <span className="text-success">+20</span>
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                                                            <th scope="row" className="text-start">
                                                                EPA:SCB
                                                            </th>
                                                            <td>
                                                                11-06-2023
                                                            </td>
                                                            <td>
                                                                <span className="badge bg-primary text-white">Buy</span>
                                                            </td>
                                                            <td>
                                                                <span className="text-danger">-$2,150</span>
                                                            </td>
                                                            <td>
                                                                <span className="text-success">+15</span>
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                                                            <th scope="row" className="text-start">
                                                                EPA:CGIO
                                                            </th>
                                                            <td>
                                                                11-06-2023
                                                            </td>
                                                            <td>
                                                                <span className="badge bg-warning text-white">Sell</span>
                                                            </td>
                                                            <td>
                                                                <span className="text-success">+$22,625</span>
                                                            </td>
                                                            <td>
                                                                <span className="text-danger">-12</span>
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                                                            <th scope="row" className="text-start">
                                                                EPA:NTIX
                                                            </th>
                                                            <td>
                                                                05-06-2023
                                                            </td>
                                                            <td>
                                                                <span className="badge bg-primary text-white">Buy</span>
                                                            </td>
                                                            <td>
                                                                <span className="text-danger">-$3,680</span>
                                                            </td>
                                                            <td>
                                                                <span className="text-success">+36</span>
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                                                            <th scope="row" className="text-start">
                                                                EPA:MOD
                                                            </th>
                                                            <td>
                                                                20-05-2023
                                                            </td>
                                                            <td>
                                                                <span className="badge bg-warning text-white">Sell</span>
                                                            </td>
                                                            <td>
                                                                <span className="text-success">+$30,750</span>
                                                            </td>
                                                            <td>
                                                                <span className="text-danger">-25</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-7 col-span-12">
                                    <div className="box">
                                        <div className="box-header justify-between">
                                            <div className="box-title">
                                                Market Movers
                                            </div>
                                            <div className="flex flex-wrap gap-2">
                                                <div className="me-2">
                                                    <input className="ti-form-control form-control-sm" type="text" placeholder="Search Any Stock" aria-label=".form-control-sm example" />
                                                </div>
                                                <div className="hs-dropdown ti-dropdown">
                                                    <Link href="#!"
                                                        className="ti-btn ti-btn-primary !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium"
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
                                                <table className="table whitespace-nowrap table-bordered border-primary/10 min-w-full">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" className="text-start">Symbol</th>
                                                            <th scope="col" className="text-start">Name</th>
                                                            <th scope="col" className="text-start">Price</th>
                                                            <th scope="col" className="text-start">1D Change</th>
                                                            <th scope="col" className="text-start">1D Return %</th>
                                                            <th scope="col" className="text-start">Volume</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                                                            <th scope="row" className="text-start">
                                                                APPL
                                                            </th>
                                                            <td>
                                                                App1e Inc.<span className="font-normal text-primary text-[.625rem] ms-1">NASDAQ</span>
                                                            </td>
                                                            <td>
                                                                <span>$1,116.90</span>
                                                            </td>
                                                            <td>
                                                                <span className="text-success">$28.9<i className="ti ti-arrow-bear-right"></i></span>
                                                            </td>
                                                            <td>
                                                                <span className="text-success">6.8%</span>
                                                            </td>
                                                            <td>
                                                                12,389.30
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                                                            <th scope="row" className="text-start">
                                                                TTR
                                                            </th>
                                                            <td>
                                                                Twiter.com Inc.<span className="font-normal text-primary text-[.625rem] ms-1">NYSE</span>
                                                            </td>
                                                            <td>
                                                                <span>$993.21</span>
                                                            </td>
                                                            <td>
                                                                <span className="text-success">$11.6<i className="ti ti-arrow-bear-right"></i></span>
                                                            </td>
                                                            <td>
                                                                <span className="text-success">10.25%</span>
                                                            </td>
                                                            <td>
                                                                32,125.03
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                                                            <th scope="row" className="text-start">
                                                                BS
                                                            </th>
                                                            <td>
                                                                Boostrap.com.<span className="font-normal text-primary text-[.625rem] ms-1">NSE</span>
                                                            </td>
                                                            <td>
                                                                <span>$11.00</span>
                                                            </td>
                                                            <td>
                                                                <span className="text-danger">$16.0<i className="ti ti-arrow-narrow-down"></i></span>
                                                            </td>
                                                            <td>
                                                                <span className="text-danger">9.0%</span>
                                                            </td>
                                                            <td>
                                                                27,911.16
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                                                            <th scope="row" className="text-start">
                                                                NFLX
                                                            </th>
                                                            <td>
                                                                Netfilx.com Inc.<span className="font-normal text-primary text-[.625rem] ms-1">LSE</span>
                                                            </td>
                                                            <td>
                                                                <span>$161.72</span>
                                                            </td>
                                                            <td>
                                                                <span className="text-danger">$9.8<i className="ti ti-arrow-narrow-down"></i></span>
                                                            </td>
                                                            <td>
                                                                <span className="text-danger">17.8%</span>
                                                            </td>
                                                            <td>
                                                                27,161.89
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                                                            <th scope="row" className="text-start">
                                                                ION
                                                            </th>
                                                            <td>
                                                                Ion.com Corp.<span className="font-normal text-primary text-[.625rem] ms-1">FSX</span>
                                                            </td>
                                                            <td>
                                                                <span>$52.65</span>
                                                            </td>
                                                            <td>
                                                                <span className="text-success">$14.2<i className="ti ti-arrow-bear-right"></i></span>
                                                            </td>
                                                            <td>
                                                                <span className="text-success">30.2%</span>
                                                            </td>
                                                            <td>
                                                                65,785.01
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
                        <div className="tab-pane hidden !p-0 !border-0" id="Stocksmarket" aria-labelledby="market-item" role="tabpanel">
                            <div className="grid grid-cols-12 gap-x-6">
                                <div className="xxl:col-span-2 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                    <div className="box">
                                        <div className="box-body">
                                            <div className="flex flex-wrap items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className="me-2">
                                                        <span className="avatar bg-danger/10 !text-danger">
                                                            <i className="ti ti-trending-down text-[1.125rem]"></i>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="block font-semibold">Nifty 50</span>
                                                        <span className="block">$12,289.44</span>
                                                    </div>
                                                </div>
                                                <div className="text-end text-danger text-[0.75rem]">
                                                    <span className="block">-0.14%</span>
                                                    <span className="block">-$1,780.80</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xxl:col-span-2 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                    <div className="box">
                                        <div className="box-body">
                                            <div className="flex flex-wrap items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className="me-2">
                                                        <span className="avatar bg-danger/10 !text-danger">
                                                            <i className="ti ti-trending-down text-[1.125rem]"></i>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="block font-semibold">SENSEX</span>
                                                        <span className="block">$12,289.44</span>
                                                    </div>
                                                </div>
                                                <div className="text-end text-danger text-[0.75rem]">
                                                    <span className="block">-0.14%</span>
                                                    <span className="block">-$1,780.80</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xxl:col-span-2 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                    <div className="box">
                                        <div className="box-body">
                                            <div className="flex flex-wrap items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className="me-2">
                                                        <span className="avatar bg-success/10 !text-success">
                                                            <i className="ti ti-trending-up text-[1.125rem]"></i>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="block font-semibold">DJIA</span>
                                                        <span className="block">$12,289.44</span>
                                                    </div>
                                                </div>
                                                <div className="text-end text-danger text-[0.75rem]">
                                                    <span className="block">-0.14%</span>
                                                    <span className="block">-$1,780.80</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xxl:col-span-2 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                    <div className="box">
                                        <div className="box-body">
                                            <div className="flex flex-wrap items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className="me-2">
                                                        <span className="avatar bg-danger/10 !text-danger">
                                                            <i className="ti ti-trending-up text-[1.125rem]"></i>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="block font-semibold">S&amp;P 500</span>
                                                        <span className="block">$12,289.44</span>
                                                    </div>
                                                </div>
                                                <div className="text-end text-danger text-[0.75rem]">
                                                    <span className="block">-0.14%</span>
                                                    <span className="block">-$1,780.80</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xxl:col-span-2 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                    <div className="box">
                                        <div className="box-body">
                                            <div className="flex flex-wrap items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className="me-2">
                                                        <span className="avatar bg-success/10 !text-success">
                                                            <i className="ti ti-trending-up text-[1.125rem]"></i>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="block font-semibold">NASDAQ</span>
                                                        <span className="block">$12,289.44</span>
                                                    </div>
                                                </div>
                                                <div className="text-end text-danger text-[0.75rem]">
                                                    <span className="block">-0.14%</span>
                                                    <span className="block">-$1,780.80</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xxl:col-span-2 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                    <div className="box">
                                        <div className="box-body">
                                            <div className="flex flex-wrap items-center justify-between">
                                                <div className="flex items-center">
                                                    <div className="me-2">
                                                        <span className="avatar bg-success/10 !text-success">
                                                            <i className="ti ti-trending-up text-[1.125rem]"></i>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <span className="block font-semibold">NIFTY IT</span>
                                                        <span className="block">$12,289.44</span>
                                                    </div>
                                                </div>
                                                <div className="text-end text-danger text-[0.75rem]">
                                                    <span className="block">-0.14%</span>
                                                    <span className="block">-$1,780.80</span>
                                                </div>
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
                                                Market Cap
                                            </div>
                                            <div>
                                                <input className="ti-form-control form-control-sm" type="text" placeholder="Search Any Stock Here" aria-label=".form-control-sm example" />
                                            </div>
                                        </div>
                                        <div className="box-body !p-0">
                                            <div className="grid grid-cols-12 gap-x-6">
                                                <div className="xl:col-span-7 col-span-12 border-e dark:border-defaultborder/10">
                                                    <div className="p-4">
                                                        <div className="flex flex-wrap items-center justify-between">
                                                            <div className="flex flex-grow gap-3 ms-[3rem]">
                                                                <div>
                                                                    <h5 className="font-semibold text-primary text-[1.25rem] mb-1">$12,390.02<span className="text-[0.75rem] ms-1 text-danger">0.14%<i className="ti ti-trending-down ms-1"></i></span></h5>
                                                                    <span className="block text-[#8c9097] dark:text-white/50 mb-1 text-[0.75rem]"><span className="text-danger me-1">-89.75</span>. Today</span>
                                                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem]">Jun 17, 2023  11:25 AM  UTC +5:30</span>
                                                                </div>
                                                            </div>
                                                            <div className="flex text-end">
                                                                <div>
                                                                    <h6 className="font-semibold text-[1rem] mb-2">GITUHB</h6>
                                                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem] mb-1">GTHB  INDEXNSE</span>
                                                                    <span className="block"><Link href="#!" className="text-primary font-semibold">+ Compare</Link></span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div id="stocks-marketcap">
                                                            <MarketCap />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="xl:col-span-5 col-span-12">
                                                    <div className="p-4 xl:!ps-0">
                                                        <div className="table-responsive mb-[3rem]">
                                                            <table className="table whitespace-nowrap table-borderless !text-[#8c9097] dark:text-white/50 min-w-full">
                                                                <tbody>
                                                                    <tr className="text-start">
                                                                        <th scope="row">Open</th>
                                                                        <td>125.80</td>
                                                                        <td>Volume</td>
                                                                        <td>1,253.20</td>
                                                                    </tr>
                                                                    <tr className="text-start">
                                                                        <th scope="row">High</th>
                                                                        <td>352.15</td>
                                                                        <td>Avg. Volume</td>
                                                                        <td>1.05M</td>
                                                                    </tr>
                                                                    <tr className="text-start">
                                                                        <th scope="row">Low</th>
                                                                        <td>120.13</td>
                                                                        <td>52 Week High</td>
                                                                        <td>2569.25</td>
                                                                    </tr>
                                                                    <tr className="text-start">
                                                                        <th scope="row">Dividend Yield</th>
                                                                        <td>3.5%</td>
                                                                        <td>52 Week Low</td>
                                                                        <td>1586.20</td>
                                                                    </tr>
                                                                    <tr className="text-start">
                                                                        <th scope="row">P/E Ratio</th>
                                                                        <td>25%</td>
                                                                        <td>Market Cap</td>
                                                                        <td>2.15Cr</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                        <div>
                                                            <h6 className="font-semibold mb-2 text-[1rem]">
                                                                Market Depth:
                                                            </h6>
                                                            <div className="grid grid-cols-12 gap-x-6">
                                                                <div className="xl:col-span-6  col-span-12">
                                                                    <div className="table-responsive">
                                                                        <table className="table whitespace-nowrap table-sm text-center table-borderless !text-[#8c9097] dark:text-white/50 min-w-full">
                                                                            <thead className="text-default">
                                                                                <tr className="!text-defaulttextcolor">
                                                                                    <th scope="col">Qty</th>
                                                                                    <th scope="col">Orders</th>
                                                                                    <th scope="col">Bid</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <th scope="row">
                                                                                        <span className="text-success">20</span>
                                                                                    </th>
                                                                                    <td>2</td>
                                                                                    <td>$12,908</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th scope="row">
                                                                                        <span className="text-success">12</span>
                                                                                    </th>
                                                                                    <td>1</td>
                                                                                    <td>$20,632</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th scope="row">
                                                                                        <span className="text-success">36</span>
                                                                                    </th>
                                                                                    <td>1</td>
                                                                                    <td>$19,102</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th scope="row">
                                                                                        <span className="text-success">10</span>
                                                                                    </th>
                                                                                    <td>3</td>
                                                                                    <td>$16,650</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th scope="row">
                                                                                        <span className="text-success">15</span>
                                                                                    </th>
                                                                                    <td>2</td>
                                                                                    <td>$18,850</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                </div>
                                                                <div className="xl:col-span-6  col-span-12">
                                                                    <div className="table-responsive mb-3">
                                                                        <table className="table whitespace-nowrap table-sm text-center table-borderless !text-[#8c9097] dark:text-white/50 min-w-full">
                                                                            <thead className="text-default">
                                                                                <tr className="!text-defaulttextcolor">
                                                                                    <th scope="col">Qty</th>
                                                                                    <th scope="col">Orders</th>
                                                                                    <th scope="col">Bid</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr>
                                                                                    <th scope="row">
                                                                                        <span className="text-danger">20</span>
                                                                                    </th>
                                                                                    <td>2</td>
                                                                                    <td>$12,908</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th scope="row">
                                                                                        <span className="text-danger">12</span>
                                                                                    </th>
                                                                                    <td>1</td>
                                                                                    <td>$20,632</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th scope="row">
                                                                                        <span className="text-danger">36</span>
                                                                                    </th>
                                                                                    <td>1</td>
                                                                                    <td>$19,102</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th scope="row">
                                                                                        <span className="text-danger">10</span>
                                                                                    </th>
                                                                                    <td>3</td>
                                                                                    <td>$16,650</td>
                                                                                </tr>
                                                                                <tr>
                                                                                    <th scope="row">
                                                                                        <span className="text-danger">15</span>
                                                                                    </th>
                                                                                    <td>2</td>
                                                                                    <td>$18,850</td>
                                                                                </tr>
                                                                            </tbody>
                                                                        </table>
                                                                    </div>
                                                                    <div className="flex gap-3">
                                                                        <button type="button" className="ti-btn-w-sm ti-btn ti-btn-sm bg-primary text-white">Buy</button>
                                                                        <button type="button" className="ti-btn-w-sm ti-btn ti-btn-sm bg-secondary text-white">Sell</button>
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
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Stocks.layout = "Contentlayout"

export default Stocks