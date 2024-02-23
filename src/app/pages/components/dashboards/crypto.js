import { CryptoBTC, CryptoETH, Cryptobitcoin, Cryptodash, Cryptodash1, Cryptoetherium, Cryptoiota, Cryptoneo, Cryptoripple, Recentactivity, Selectdata1, Selectdata2, Statistics } from '@/shared/data/dashboards/cryptodata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { Fragment } from 'react';
const Select = dynamic(() => import("react-select"), { ssr: false });

const Crypto = () => {
    return (
        <Fragment>
            <Seo title={"Crypto"} />
            <Pageheader currentpage="Crypto" activepage="Dashboards" mainpage="Crypto" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-9 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-body">
                                    <div className="flex items-center mb-5">
                                        <div className="flex items-center">
                                            <div className="me-2">
                                                <span className="avatar avatar-md avatar-rounded bg-light p-2">
                                                    <img src="../../../assets/images/crypto-currencies/regular/Bitcoin.svg"
                                                        alt="" />
                                                </span>
                                            </div>
                                            <div className="mb-0 font-semibold">
                                                Bitcoin - BTC
                                            </div>
                                        </div>
                                        <div className="ms-auto">
                                            <div id="btc-chart">
                                                <CryptoBTC />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-end">
                                        <div>
                                            <p className="mb-1">BTC / USD</p>
                                            <p className="text-[1.25rem] mb-0 font-semibold leading-none !text-primary">
                                                $35,876.29</p>
                                        </div>
                                        <div className="ms-auto text-end">
                                            <p className="mb-0">$0.04</p>
                                            <p className="mb-0 text-[#8c9097] dark:text-white/50"><span
                                                className="text-[#8c9097] dark:text-white/50">Vol:</span>(+2.33%)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-body">
                                    <div className="flex items-center mb-5">
                                        <div className="flex items-center">
                                            <div className="me-2">
                                                <span className="avatar avatar-md avatar-rounded bg-light p-2">
                                                    <img src="../../../assets/images/crypto-currencies/regular/Ethereum.svg"
                                                        alt="" />
                                                </span>
                                            </div>
                                            <div className="mb-0 font-semibold">
                                                Etherium - ETH
                                            </div>
                                        </div>
                                        <div className="ms-auto">
                                            <div id="eth-chart">
                                                <CryptoETH />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-end">
                                        <div>
                                            <p className="mb-1">ETH / USD</p>
                                            <p className="text-[1.25rem] mb-0 font-semibold leading-none !text-primary">
                                                $31,244.12</p>
                                        </div>
                                        <div className="ms-auto text-end">
                                            <p className="mb-0">$2.57</p>
                                            <p className="mb-0 text-[#8c9097] dark:text-white/50"><span
                                                className="text-[#8c9097] dark:text-white/50">Vol:</span>(+13.45%)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-body">
                                    <div className="flex items-center mb-5">
                                        <div className="flex items-center">
                                            <div className="me-2">
                                                <span className="avatar avatar-md avatar-rounded bg-light p-2">
                                                    <img src="../../../assets/images/crypto-currencies/regular/Dash.svg"
                                                        alt="" />
                                                </span>
                                            </div>
                                            <div className="mb-0 fw-semibold">
                                                Dash - DASH
                                            </div>
                                        </div>
                                        <div className="ms-auto">
                                            <div id="dash-chart">
                                                <Cryptodash />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-end">
                                        <div>
                                            <p className="mb-1">DASH / USD</p>
                                            <p className="text-[1.25rem] mb-0 font-semibold leading-none !text-primary">
                                                $26,345.000</p>
                                        </div>
                                        <div className="ms-auto text-end">
                                            <p className="mb-0">$12.32</p>
                                            <p className="mb-0 text-[#8c9097] dark:text-white/50"><span
                                                className="text-[#8c9097] dark:text-white/50">Vol:</span>(+112.95%)</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-8 xl:col-span-7 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between flex-wrap">
                                    <div className="box-title">
                                        Crypto Statistics
                                    </div>
                                    <div className="inline-flex rounded-md shadow-sm" role="group"
                                        aria-label="Basic example">
                                        <button type="button"
                                            className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary-full text-white">1D</button>
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
                                    <div className="flex flex-wrap p-4 border-b border-dashed dark:border-defaultborder/10">
                                        <div className="me-3">
                                            <span className="avatar avatar-md avatar-rounded p-2 bg-light">
                                                <img src="../../../assets/images/crypto-currencies/regular/Bitcoin.svg"
                                                    alt="" />
                                            </span>
                                        </div>
                                        <div className="flex flex-wrap sm:justify-evenly flex-grow">
                                            <div className="sm:m-0 m-2">
                                                <span>Symbol</span>
                                                <p className="font-semibold mb-0">BTC</p>
                                            </div>
                                            <div className="sm:m-0 m-2">
                                                <span>Price Benchmark</span>
                                                <p className="font-semibold mb-0">128.00%</p>
                                            </div>
                                            <div className="sm:m-0 m-2">
                                                <span>Price (USD)</span>
                                                <p className="text-success font-semibold mb-0">$4,253.49</p>
                                            </div>
                                            <div className="sm:m-0 m-2">
                                                <span>Change (24H)</span>
                                                <p className="text-danger font-semibold mb-0">-0.24%</p>
                                            </div>
                                            <div className="sm:m-0 m-2">
                                                <span>Market Cap</span>
                                                <p className="font-semibold mb-0">$179.12B</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="crypto" className="p-4">
                                        <Statistics />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-4 xl:col-span-5 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">Recent Transactions</div>
                                    <div className="hs-dropdown ti-dropdown">
                                        <Link aria-label="anchor" href="#!"
                                            className="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                                            aria-expanded="false"><i
                                                className="fe fe-more-vertical text-[0.8rem]"></i>
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
                                <div className="box-body">
                                    <ul className="list-none mb-0">
                                        <li className="mb-4">
                                            <Link href="#!">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <img src="../../../assets/images/crypto-currencies/square-color/Bitcoin.svg" alt="" className="w-[1.75rem] h-[1.75rem] me-2" />
                                                        <div>
                                                            <p className="mb-0 font-semibold">Bitcoin</p>
                                                            <p className="mb-0 text-[0.6875rem] text-success font-semibold">
                                                                Sell</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-0 font-semibold">
                                                            +$19,123.02
                                                        </p>
                                                        <p className="mb-0 opacity-[0.7] text-[#8c9097] dark:text-white/50  text-[0.6875rem]">
                                                            BTC 0.0823.45
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link href="#!">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <img src="../../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" className="w-[1.75rem] h-[1.75rem] me-2" />
                                                        <div>
                                                            <p className="mb-0 font-semibold">Etherium</p>
                                                            <p
                                                                className="mb-0  text-[0.6875rem] text-primary font-semibold">
                                                                Buy</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-0 font-semibold">
                                                            -$1,430.92
                                                        </p>
                                                        <p className="mb-0 opacity-[0.7] text-[#8c9097] dark:text-white/50  text-[0.6875rem]">
                                                            ETH 10,783.23
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link href="#!">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex tems-center">
                                                        <img src="../../../assets/images/crypto-currencies/square-color/Dash.svg" alt="" className="w-[1.75rem] h-[1.75rem] me-2" />
                                                        <div>
                                                            <p className="mb-0 font-semibold">Dash</p>
                                                            <p
                                                                className="mb-0  text-[0.6875rem] text-success font-semibold">
                                                                Sell</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-0 font-semibold">
                                                            +$5,236.53
                                                        </p>
                                                        <p className="mb-0 opacity-[0.7] text-[#8c9097] dark:text-white/50  text-[0.6875rem]">
                                                            DASH 12,456.98
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link href="#!">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <img src="../../../assets/images/crypto-currencies/square-color/Bytecoin.svg" alt="" className="w-[1.75rem] h-[1.75rem] me-2" />
                                                        <div>
                                                            <p className="mb-0 font-semibold">Bytecoin</p>
                                                            <p
                                                                className="mb-0  text-[0.6875rem] text-primary font-semibold">
                                                                Buy</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-0 font-semibold">
                                                            -$1,810.93
                                                        </p>
                                                        <p className="mb-0 opacity-[0.7] text-[#8c9097] dark:text-white/50  text-[0.6875rem]">
                                                            BYTE 8,154.00
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link href="#!">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <img src="../../../assets/images/crypto-currencies/square-color/Golem.svg" alt="" className="w-[1.75rem] h-[1.75rem] me-2" />
                                                        <div>
                                                            <p className="mb-0 font-semibold">Golem</p>
                                                            <p
                                                                className="mb-0  text-[0.6875rem] text-success font-semibold">
                                                                Sell</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-0 font-semibold">
                                                            +$5,046.34
                                                        </p>
                                                        <p className="mb-0 opacity-[0.7] text-[#8c9097] dark:text-white/50 text-[0.6875rem]">
                                                            GOLEM 9,384.73
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link href="#!">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <img src="../../../assets/images/crypto-currencies/square-color/Siacoin.svg" alt="" className="w-[1.75rem] h-[1.75rem] me-2" />
                                                        <div>
                                                            <p className="mb-0 font-semibold">SiaCoin</p>
                                                            <p
                                                                className="mb-0  text-[0.6875rem] text-success font-semibold">
                                                                Sell</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-0 font-semibold">
                                                            +$2,625.50
                                                        </p>
                                                        <p className="mb-0 opacity-[0.7] text-[#8c9097] dark:text-white/50  text-[0.6875rem]">
                                                            SIA 3,151.09
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="">
                                            <Link href="#!">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <img src="../../../assets/images/crypto-currencies/square-color/Monero.svg" alt="" className="w-[1.75rem] h-[1.75rem] me-2" />
                                                        <div>
                                                            <p className="mb-0 font-semibold">Monero</p>
                                                            <p
                                                                className="mb-0  text-[0.6875rem] text-success font-semibold">
                                                                Sell</p>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <p className="mb-0 font-semibold">
                                                            +$1,256.24
                                                        </p>
                                                        <p className="mb-0 opacity-[0.7] text-[#8c9097] dark:text-white/50  text-[0.6875rem]">
                                                            XMR 2,799.06
                                                        </p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header">
                                    <div>
                                        <div className="mb-1">Wallet Value<span
                                            className="text-[0.625rem] badge bg-success/10 text-success p-1 ms-2"><i
                                                className="ri-arrow-up-s-line align-middle me-1"></i>12.2%</span></div>
                                        <div className="text-[1.25rem] font-semibold">$132,12933.000</div>
                                        <small className="text-[#8c9097] dark:text-white/50 font-semibold">12 BTC</small>
                                    </div>
                                    <div className="ms-auto">
                                        <span className="avatar avatar-xxl">
                                            <img className="buy-sell-image" src="../../../assets/images/media/media-82.png" alt="" />
                                        </span>
                                    </div>
                                </div>
                                <div className="box-body crypto-data">
                                    <nav className="tab-style-1 sm:flex bg-light p-[0.65rem] rounded-sm mb-4" aria-label="Tabs">
                                        <Link href="#!" className="hs-tab-active:bg-primary hs-tab-active:text-white text-defaulttextcolor py-[0.35rem] px-4 flex-grow  text-sm font-medium text-center rounded-md hover:text-primary active" id="buy-crypto" data-hs-tab="#buy-crypto2" aria-controls="buycrypto">
                                            Buy
                                        </Link>
                                        <Link href="#!" className="hs-tab-active:bg-primary hs-tab-active:text-white text-defaulttextcolor py-[0.35rem] px-4 text-sm flex-grow font-medium text-center  rounded-md hover:text-primary " id="sell-crypto" data-hs-tab="#sell-crypto2" aria-controls="sellcrypto">
                                            Sell
                                        </Link>
                                    </nav>
                                    <div className="tab-content">
                                        <div className="tab-pane !border-0 show active !p-0" id="buy-crypto2" role="tabpanel">
                                            <div className="input-group mb-4 flex !flex-nowrap">
                                                <input type="text"
                                                    className="form-control form-control-sm crypto-buy-sell-input !rounded-s-md  !border-e-0"
                                                    aria-label="crypto buy select" placeholder="Select Currency" />
                                                <Select name="colors" data-trigger id="choices-single-default" options={Selectdata1} className="!rounded-e-md"
                                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectdata1[0]]}
                                                />
                                            </div>
                                            <div className="input-group mb-4 flex !flex-nowrap">
                                                <input type="text"
                                                    className="form-control form-control-sm crypto-buy-sell-input !rounded-s-md  !border-e-0"
                                                    aria-label="crypto buy select" placeholder="36,335.00" />
                                                <Select name="colors" data-trigger id="choices-single-default1" options={Selectdata2} className="!rounded-e-md"
                                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectdata2[0]]}
                                                />
                                            </div>
                                            <div>
                                                <div className="text-[0.875rem] py-2"><span
                                                    className="font-semibold text-dark dark:text-defaulttextcolor/70">Price:</span><span
                                                        className="text-[#8c9097] dark:text-white/50 ms-2 text-[0.875rem] inline-block">6.003435</span><span
                                                            className="text-dark font-semibold ltr:float-right rtl:float-left dark:text-defaulttextcolor/70">BTC</span></div>
                                                <div className="text-[0.875rem] py-2"><span
                                                    className="font-semibold text-dark dark:text-defaulttextcolor/70">Amount:</span><span
                                                        className="text-[#8c9097] dark:text-white/50 ms-2 text-[0.875rem] inline-block ">2,34,4543.00</span><span
                                                            className="text-dark font-semibold ltr:float-right rtl:float-left dark:text-defaulttextcolor/70">LTC</span></div>
                                                <div className="font-semibold text-[0.875rem] py-3 dark:text-defaulttextcolor/70">Total: <span
                                                    className="text-[0.875rem] inline-block dark:text-defaulttextcolor/70">22.00 BTC</span></div>
                                                <div className="text-[0.75rem] text-success !mb-3">Additional Charges:
                                                    0.32%(0.0001231 BTC)</div>
                                                <label className="font-semibold text-[0.75rem] !mt-2 !mb-2  dark:text-defaulttextcolor/70">SELECT PAYMENT
                                                    METHOD :</label>
                                                <div className="sm:grid grid-cols-12 sm:gap-2 ">
                                                    <div className="sm:col-span-6 col-span-12 sm:me-2 mb-2 sm:mb-0">
                                                        <div className="p-2 border rounded-md dark:border-defaultborder/10">
                                                            <div className="form-check !ps-0 !mb-0 !flex items-center">
                                                                <input className="form-check-input" type="radio"
                                                                    name="flexRadioDefault" id="flexRadioDefault1" />
                                                                <label className="form-check-label text-[0.75rem]"
                                                                    htmlFor="flexRadioDefault1">
                                                                    Credit / Debit Cards
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sm:col-span-6 col-span-12">
                                                        <div className="p-2 border rounded-md dark:border-defaultborder/10">
                                                            <div className="form-check !ps-0 !mb-0 !flex items-center">
                                                                <input className="form-check-input" type="radio"
                                                                    name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                                                <label className="form-check-label text-[0.75rem]"
                                                                    htmlFor="flexRadioDefault2">
                                                                    Paypal
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid  pt-3">
                                                <button type="button"
                                                    className="ti-btn bg-primary text-white ti-btn-wave">BUY</button>
                                            </div>
                                        </div>
                                        <div className="tab-pane !border-0 !p-0 hidden" id="sell-crypto2" role="tabpanel"
                                            aria-labelledby="sell-crypto">
                                            <div className="input-group mb-4 sm:flex block flex-nowrap">
                                                <input type="text"
                                                    className="form-control form-control-sm crypto-buy-sell-input !rounded-s-md !border-e-0"
                                                    aria-label="crypto buy select" placeholder="Select Currency" />
                                                <Select name="colors" data-trigger id="choices-single-default" options={Selectdata1} className="!rounded-e-md"
                                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectdata1[0]]}
                                                />
                                            </div>
                                            <div className="input-group mb-4 sm:flex block flex-nowrap">
                                                <input type="text"
                                                    className="form-control form-control-sm crypto-buy-sell-input !rounded-s-md !border-e-0"
                                                    aria-label="crypto buy select" placeholder="36,335.00" />
                                                <Select name="colors" data-trigger id="choices-single-default1" options={Selectdata2} className="!rounded-e-md"
                                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Selectdata2[0]]}
                                                />
                                            </div>
                                            <div>
                                                <div className="text-[0.875rem] py-2"><span
                                                    className="font-semibold text-dark dark:text-defaulttextcolor/70">Price:</span><span
                                                        className="text-[#8c9097] ms-2 text-[0.875rem] dark:text-defaulttextcolor/70">6.003435</span><span
                                                            className="text-dark font-semibold ltr:float-right rtl:float-left dark:text-defaulttextcolor/70">BTC</span></div>
                                                <div className="text-[0.875rem] py-2"><span
                                                    className="font-semibold text-dark dark:text-defaulttextcolor/70">Amount:</span><span
                                                        className="text-[#8c9097] ms-2 text-[0.875rem] dark:text-defaulttextcolor/70">2,34,4543.00</span><span
                                                            className="text-dark font-semibold ltr:float-right rtl:float-left dark:text-defaulttextcolor/70">LTC</span></div>
                                                <div className="font-semibold text-[0.875rem] py-3">Total: <span
                                                    className="text-[0.875rem]">22.00 BTC</span></div>
                                                <div className="text-[0.75rem] text-success !mb-3">Additional Charges:
                                                    0.32%(0.0001231 BTC)</div>
                                                <label className="font-semibold text-[0.75rem] mt-2 mb-2 dark:text-defaulttextcolor/70">SELECT PAYMENT
                                                    METHOD :</label>
                                                <div className="sm:grid grid-cols-12 sm:gap-2 ">
                                                    <div className="sm:col-span-6 col-span-12 sm:me-2 mb-2 sm:mb-0">
                                                        <div className="p-2 border rounded-md dark:border-defaultborder/10">
                                                            <div className="form-check !ps-0 !mb-0 !flex items-center">
                                                                <input className="form-check-input" type="radio"
                                                                    name="flexRadioDefault" id="flexRadioDefault11"
                                                                    defaultChecked />
                                                                <label className="form-check-label text-[0.75rem]"
                                                                    htmlFor="flexRadioDefault11">
                                                                    Credit / Debit Cards
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="sm:col-span-6 col-span-12">
                                                        <div className="p-2 border rounded-md dark:border-defaultborder/10">
                                                            <div className="form-check !ps-0 !mb-0 !flex items-center">
                                                                <input className="form-check-input" type="radio"
                                                                    name="flexRadioDefault" id="flexRadioDefault12" />
                                                                <label className="form-check-label text-[0.75rem]"
                                                                    htmlFor="flexRadioDefault12">
                                                                    Paypal
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="grid  pt-3">
                                                <button type="button"
                                                    className="ti-btn bg-danger text-white ti-btn-wave">SELL</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-5 col-span-12">
                    <div className="xxl:col-span-5 xl:col-span-5 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Recent Activity
                                </div>
                                <div className="hs-dropdown ti-dropdown">
                                    <Link aria-label="anchor" href="#!"
                                        className="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium" aria-expanded="false"><i
                                            className="fe fe-more-vertical text-[0.8rem]"></i>
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
                            <div className="box-body  !p-0">
                                <div className="table-responsive">
                                    <table className="table box-table min-w-full table-vcenter whitespace-nowrap mb-0">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="text-center">Date</th>
                                                <th scope="col" className="text-start">Currency</th>
                                                <th scope="col" className="text-start">From / To</th>
                                                <th scope="col" className="text-start">Time &amp; Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="active-tab">
                                            {Recentactivity.map((idx) => (
                                                <tr className="border-t border-inherit border-solid  dark:border-defaultborder/10" key={Math.random()}>
                                                    <td>
                                                        <div className="text-center">
                                                            <p className="text-[#8c9097] dark:text-white/50 mb-0 font-semibold">{idx.month}</p>
                                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">{idx.day}</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="flex items-center">
                                                            <img src={idx.src1} alt="" className="leading-none avatar avatar-md avatar-rounded me-2 p-2 bg-light !my-auto" />
                                                            <div className="items-center">
                                                                <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Currency</span>
                                                                <p className="mb-0">{idx.text1} - <span
                                                                    className="text-[#8c9097] dark:text-white/50"> {idx.text2}</span></p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="items-center text-center">
                                                            <div className="flex items-center font-semibold">
                                                                <span className="avatar avatar-sm avatar-rounded">
                                                                    <img src={idx.src2} alt="" />
                                                                </span>
                                                                <span className="ms-2">{idx.name}</span>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="items-center">
                                                            <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-1">{idx.status}</span>
                                                            <p className="mb-0">{idx.time} -
                                                                <span
                                                                    className={`text-[0.6875rem] text-${idx.color} font-semibold`}> {idx.class}</span>
                                                            </p>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header md:justify-between flex-wrap">
                            <div className="box-title">
                                Bitcoin Price Statistics
                            </div>
                            <div className="">
                                <button type="button"
                                    className="ti-btn ti-btn-success-full ti-btn-wave !py-1 !px-2 !text-[0.75rem]  me-2 !mb-0">Buy
                                    Now</button>
                                <div className="hs-dropdown ti-dropdown">
                                    <Link aria-label="anchor" href="#!"
                                        className="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium" aria-expanded="false"><i
                                            className="fe fe-more-vertical text-[0.8rem]"></i>
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
                        <div className="box-body !p-0">
                            <ul className="border-0">
                                <li className="py-[0.8rem] px-[1.25rem] border-b dark:border-defaultborder/10">
                                    <Link href="#!" className=" flex-column items-start">
                                        <div className="flex w-full justify-between items-center">
                                            <p className="tx-14 mb-0 font-normal text-dark">Bitcoin value in USD</p>
                                            <p className="text-dark mb-0 font-normal tx-15">
                                                <span className="numberfont">$29,472.60</span>
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                                <li className="py-[0.8rem] px-[1.25rem] border-b dark:border-defaultborder/10">
                                    <Link href="#!" className=" flex-column items-start">
                                        <div className="flex w-full justify-between items-center">
                                            <p className="tx-14 mb-0 font-normal text-dark">Price Change <span
                                                className="badge bg-primary/10 ms-3 text-primary">Increased</span>
                                            </p>
                                            <p className="text-success mb-0 font-normal tx-13">
                                                <span className="numberfont">+280.30(0.96%)</span> <i
                                                    className="fa fa-arrow-up"></i> today
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                                <li className="py-[0.8rem] px-[1.25rem] border-b dark:border-defaultborder/10">
                                    <Link href="#!" className="flex-column items-start">
                                        <div className="flex w-full justify-between items-center">
                                            <p className="tx-14 mb-0 font-normal text-dark">Trade Value</p>
                                            <p className="text-dark mb-0 tx-15">
                                                <span className="numberfont">$245,36,465.652</span>
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                                <li className="py-[0.8rem] px-[1.25rem] border-b dark:border-defaultborder/10">
                                    <Link href="#!" className=" flex-column items-start">
                                        <div className="flex w-full justify-between items-center">
                                            <p className="tx-14 mb-0 font-normal text-dark">Market Rank<span
                                                className="badge bg-secondary/10 ms-3 text-secondary">3 Years</span>
                                            </p>
                                            <p className="text-dark mb-0 tx-15">
                                                <span className="numberfont">#1</span>
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                                <li className="py-[0.8rem] px-[1.25rem] border-b dark:border-defaultborder/10">
                                    <Link href="#!" className=" flex-column items-start">
                                        <div className="flex w-full justify-between items-center">
                                            <p className="tx-14 mb-0 font-normal text-dark">This Week High</p>
                                            <p className="text-success mb-0 tx-15">
                                                <span className="numberfont">$68,990.90</span>
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                                <li className="py-[0.8rem] px-[1.25rem] border-b dark:border-defaultborder/10">
                                    <Link href="#!" className=" flex-column items-start">
                                        <div className="flex w-full justify-between items-center">
                                            <p className="tx-14 mb-0 font-normal text-dark">This Week Low</p>
                                            <p className="text-danger mb-0 tx-15">
                                                <span className="numberfont">$28,825.76</span>
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                                <li className="py-[0.8rem] px-[1.25rem] border-b dark:border-defaultborder/10">
                                    <Link href="#!" className=" flex-column items-start">
                                        <div className="flex w-full justify-between items-center">
                                            <p className="tx-14 mb-0 font-normal text-dark">Market Dominance</p>
                                            <p className="text-dark mb-0 tx-15">
                                                <span className="numberfont">70%</span>
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                                <li className="py-[0.8rem] px-[1.25rem]">
                                    <Link href="#!" className=" flex-column items-start border-0">
                                        <div className="flex w-full justify-between items-center">
                                            <p className="tx-14 mb-0 font-normal text-dark">Alltime High</p>
                                            <p className="text-info mb-0 tx-15">
                                                <span className="numberfont">$68,990.90</span>
                                            </p>
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Top Traders
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
                        <div className="box-body">
                            <ul className="list-none my-1">
                                <li className="mb-4">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="me-2 leading-none">
                                                <span className="avatar avatar-md avatar-rounded p-2 bg-light">
                                                    <img src="../../../assets/images/faces/11.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="mb-0 font-semibold">Json Taylor</p>
                                                <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">Bought 0.008213
                                                    Bitcoin using ****9808</p>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <p className="mb-0 font-semibold text-success">
                                                0.09251821409 <span className="text-default">- BTC</span>
                                            </p>
                                            <p className="mb-0 opacity-[0.7] text-[#8c9097] dark:text-white/50 text-[0.6875rem]">
                                                $1,203.92
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="me-2 leading-none">
                                                <span className="avatar avatar-md avatar-rounded p-2 bg-light">
                                                    <img src="../../../assets/images/faces/4.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="mb-0 font-semibold">Alicia Smith</p>
                                                <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">Sold - 0.7902400
                                                    Litecoin</p>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <p className="mb-0 font-semibold text-success">
                                                0.2362333001 <span className="text-default">- LTC</span>
                                            </p>
                                            <p className="mb-0 opacity-[0.7] text-[#8c9097] dark:text-white/50 text-[0.6875rem]">
                                                $19,092.56
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="me-2 leading-none">
                                                <span className="avatar avatar-md avatar-rounded p-2 bg-light">
                                                    <img src="../../../assets/images/faces/15.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="mb-0 font-semibold">Branco Eliga</p>
                                                <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">Bought +12.9092 Euro
                                                    coin</p>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <p className="mb-0 font-semibold text-success">
                                                0.009823487 <span className="text-default">- EUROC</span>
                                            </p>
                                            <p className="mb-0 opacity-[0.7] text-[#8c9097] dark:text-white/50 text-[0.6875rem]">
                                                $8,977.46
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="me-2 leading-none">
                                                <span className="avatar avatar-md avatar-rounded p-2 bg-light">
                                                    <img src="../../../assets/images/faces/12.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="mb-0 font-semibold">Alec Carey</p>
                                                <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">Bought 32.09472944
                                                    Dash using wallet</p>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <p className="mb-0 font-semibold text-success">
                                                8.88234590 <span className="text-default">- DASH</span>
                                            </p>
                                            <p className="mb-0 opacity-[0.7] text-[#8c9097] dark:text-white/50 text-[0.6875rem]">
                                                $9,772.46
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="me-2 leading-none">
                                                <span className="avatar avatar-md avatar-rounded p-2 bg-light">
                                                    <img src="../../../assets/images/faces/5.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="mb-0 font-semibold">Sia Linda</p>
                                                <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">Sent 0.00662 Bitcoin
                                                    to Ravos Chan</p>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <p className="mb-0 font-semibold text-success">
                                                58.6225600 <span className="text-default">- BTC</span>
                                            </p>
                                            <p className="mb-0 opacity-[0.7] text-[#8c9097] dark:text-white/50 text-[0.6875rem]">
                                                $9,772.46
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="mb-0">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="me-2 leading-none">
                                                <span className="avatar avatar-md avatar-rounded p-2 bg-light">
                                                    <img src="../../../assets/images/faces/10.jpg" alt="" />
                                                </span>
                                            </div>
                                            <div>
                                                <p className="mb-0 font-semibold">Ryan Ranolds</p>
                                                <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">Bought 2.098123
                                                    Etherium</p>
                                            </div>
                                        </div>
                                        <div className="text-end">
                                            <p className="mb-0 font-semibold text-success">
                                                190.0092773 <span className="text-default">- ETH</span>
                                            </p>
                                            <p className="mb-0 opacity-[0.7] text-[#8c9097] dark:text-white/50 text-[0.6875rem]">
                                                $18,283982.00
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-col-12 col-span-12">
                    <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header justify-between flex-wrap">
                                <div className="box-title mb-2 sm:mb-0">
                                    Crypto currencies Market Value
                                </div>
                                <div className="inline-flex rounded-md shadow-sm" role="group" aria-label="Basic example">
                                    <button type="button"
                                        className="ti-btn-group !border-0 !text-xs !py-2 !px-3 ti-btn-primary-full text-white">1D</button>
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
                                <div className="table-responsive">
                                    <table className="table table-hover whitespace-nowrap min-w-full table-bordered">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="text-start">S.No</th>
                                                <th scope="col" className="text-start">Name</th>
                                                <th scope="col" className="text-start">Symbol</th>
                                                <th scope="col" className="text-start">Price</th>
                                                <th scope="col" className="text-start">Market Cap</th>
                                                <th scope="col" className="text-start">Price Graph</th>
                                                <th scope="col" className="text-start">Volume</th>
                                                <th scope="col" className="text-start">Price Change</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light">
                                                <td>1</td>
                                                <td>Bitcoin</td>
                                                <td>
                                                    <div className="leading-none flex items-center">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/regular/Bitcoin.svg"
                                                                alt="" />
                                                        </span> - BTC
                                                    </div>
                                                </td>
                                                <td>
                                                    $16,839.10
                                                </td>
                                                <td>
                                                    324.01B
                                                </td>
                                                <td>
                                                    <div id="bitcoin-price-graph">
                                                        <Cryptobitcoin />
                                                    </div>
                                                </td>
                                                <td>
                                                    14,674,311,168
                                                </td>
                                                <td>
                                                    <span className="text-success">0.30% <i
                                                        className="ti ti-arrow-big-up-lines ms-1"></i></span>
                                                </td>
                                            </tr>
                                            <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light">
                                                <td>2</td>
                                                <td>Etherium</td>
                                                <td>
                                                    <div className="leading-none flex items-center">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/regular/Ethereum.svg"
                                                                alt="" />
                                                        </span> - ETH
                                                    </div>
                                                </td>
                                                <td>
                                                    1,217.96
                                                </td>
                                                <td>
                                                    $149,316,232,699
                                                </td>
                                                <td>
                                                    <div id="etherium-price-graph">
                                                        <Cryptoetherium />
                                                    </div>
                                                </td>
                                                <td>
                                                    $4,758,554,801
                                                </td>
                                                <td>
                                                    <span className="text-success">0.30% <i
                                                        className="ti ti-arrow-big-up-lines ms-1"></i></span>
                                                </td>
                                            </tr>
                                            <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light">
                                                <td>3</td>
                                                <td>Dash</td>
                                                <td>
                                                    <div className="leading-none flex items-center">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/regular/Dash.svg"
                                                                alt="" />
                                                        </span> - DASH
                                                    </div>
                                                </td>
                                                <td>
                                                    $43.49
                                                </td>
                                                <td>
                                                    $480,799,847
                                                </td>
                                                <td>
                                                    <div id="dash-price-graph">
                                                        <Cryptodash1 />
                                                    </div>
                                                </td>
                                                <td>
                                                    $52,626,563
                                                </td>
                                                <td>
                                                    <span className="text-success">0.45% <i
                                                        className="ti ti-arrow-big-up-lines ms-1"></i></span>
                                                </td>
                                            </tr>
                                            <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light">
                                                <td>4</td>
                                                <td>Ripple</td>
                                                <td>
                                                    <div className="leading-none flex items-center">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/regular/Ripple.svg"
                                                                alt="" />
                                                        </span> - XRP
                                                    </div>
                                                </td>
                                                <td>
                                                    $0.3531
                                                </td>
                                                <td>
                                                    $17,791,969,465
                                                </td>
                                                <td>
                                                    <div id="ripple-price-graph">
                                                        <Cryptoripple />
                                                    </div>
                                                </td>
                                                <td>
                                                    $511,598,941
                                                </td>
                                                <td>
                                                    <span className="text-success">0.97% <i
                                                        className="ti ti-arrow-big-up-lines ms-1"></i></span>
                                                </td>
                                            </tr>
                                            <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light">
                                                <td>5</td>
                                                <td>Iota</td>
                                                <td>
                                                    <div className="leading-none flex items-center">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/regular/IOTA.svg"
                                                                alt="" />
                                                        </span> - IOTA
                                                    </div>
                                                </td>
                                                <td>
                                                    $0.169741
                                                </td>
                                                <td>
                                                    $471,800,600
                                                </td>
                                                <td>
                                                    <div id="iota-price-graph">
                                                        <Cryptoiota />
                                                    </div>
                                                </td>
                                                <td>
                                                    $5,524,385
                                                </td>
                                                <td>
                                                    <span className="text-success">0.93% <i
                                                        className="ti ti-arrow-big-up-lines ms-1"></i></span>
                                                </td>
                                            </tr>
                                            <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light">
                                                <td>6</td>
                                                <td>Neo</td>
                                                <td>
                                                    <div className="leading-none flex items-center">
                                                        <span className="avatar avatar-xs avatar-rounded">
                                                            <img src="../../../assets/images/crypto-currencies/regular/Neo.svg"
                                                                alt="" />
                                                        </span> - NEO
                                                    </div>
                                                </td>
                                                <td>
                                                    $6.43
                                                </td>
                                                <td>
                                                    $453,601,667
                                                </td>
                                                <td>
                                                    <div id="neo-price-graph">
                                                        <Cryptoneo />
                                                    </div>
                                                </td>
                                                <td>
                                                    $12,904,320
                                                </td>
                                                <td>
                                                    <span className="text-danger">0.49% <i
                                                        className="ti ti-arrow-big-down-lines ms-1"></i></span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="sm:flex items-center">
                                    <div className="dark:text-defaulttextcolor/70">
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
            </div>
        </Fragment>
    )
}
Crypto.layout = "Contentlayout"

export default Crypto