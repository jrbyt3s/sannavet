import { Data1, Data2, SellStatistics } from '@/shared/data/apps/crypto/buy&selldata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { Fragment } from 'react';
const Select = dynamic(() => import("react-select"), { ssr: false });

const Buysell = () => {
    return (
        <Fragment>
            <Seo title={"Buy & Sell"} />
            <Pageheader currentpage="Buy & Sell" activepage="Crypto" mainpage="Buy & Sell" />
            <div className="container">
                <div className="sm:grid grid-cols-12 gap-6">
                    <div className="xl:col-span-4 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">
                                    Buy Crypto
                                </div>
                            </div>
                            <div className="box-body crypto-data">
                                <div>
                                    <div className="input-group mb-4 sm:flex block flex-nowrap crypto-buy-sell">
                                        <input type="text" className="form-control crypto-buy-sell-input border-e-0 form-control-sm" aria-label="crypto buy select" placeholder="Select Currency" />
                                        <Select name="colors" options={Data1} className="" placeholder="BTC"
                                            menuPlacement='auto' classNamePrefix="Select2"
                                        />
                                    </div>
                                    <div className="input-group mb-4 sm:flex block flex-nowrap crypto-buy-sell">
                                        <input type="text" className="form-control crypto-buy-sell-input border-e-0 form-control-sm" aria-label="crypto buy select" placeholder="36,335.00" />
                                        <Select name="colors" options={Data2} className="" placeholder="USD"
                                            menuPlacement='auto' classNamePrefix="Select2"
                                        />
                                    </div>
                                    <div>
                                        <div className="text-[.875rem] py-2"><span className="font-semibold text-dark">Price:</span><span className="text-[#8c9097] dark:text-white/50 ms-2 text-[.875rem] inline-block">6.003435</span><span className="text-dark font-semibold ltr:float-right rtl:float-left">BTC</span></div>
                                        <div className="text-[.875rem] py-2"><span className="font-semibold text-dark">Amount:</span><span className="text-[#8c9097] dark:text-white/50 ms-2 text-[.875rem] inline-block">2,34,4543.00</span><span className="text-dark font-semibold ltr:float-right rtl:float-left">LTC</span></div>
                                        <div className="font-semibold text-[.875rem] py-2">Total: <span className="text-[.875rem] inline-block">22.00 BTC</span></div>
                                        <div className="text-[0.75rem] text-success">Additional Charges: 0.32%(0.0001231 BTC)</div>
                                        <label className="font-semibold text-[0.75rem] mt-4 mb-2">SELECT PAYMENT METHOD :</label>
                                        <div className="grid grid-cols-12 gap-2">
                                            <div className="xl:col-span-6 col-span-12">
                                                <div className="!p-2 border dark:border-defaultborder/10 rounded-md">
                                                    <div className="form-check !ps-0 !mb-0 !min-h-[auto]">
                                                        <input className="form-check-input !align-middle" type="radio" name="flexRadioDefault" id="flexRadioDefault1" defaultChecked />
                                                        <label className="form-check-label text-[0.75rem]" htmlFor="flexRadioDefault1">
                                                            Credit / Debit Cards
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-6 col-span-12">
                                                <div className="!p-2 border dark:border-defaultborder/10 rounded-md">
                                                    <div className="form-check !ps-0 !mb-0 !min-h-[auto]">
                                                        <input className="form-check-input !align-middle" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                                        <label className="form-check-label text-[0.75rem]" htmlFor="flexRadioDefault2">
                                                            Paypal
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-12 col-span-12">
                                                <div className="!p-2 border dark:border-defaultborder/10 rounded-md">
                                                    <div className="form-check !ps-0 !mb-0 !min-h-[auto]">
                                                        <input className="form-check-input !align-middle" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
                                                        <label className="form-check-label text-[0.75rem]" htmlFor="flexRadioDefault3">
                                                            Wallet
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grid mt-6 pt-1">
                                        <button type="button" className="ti-btn ti-btn-primary-full btn-wave ti-btn-lg dark:border-defaultborder/10">BUY</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-4 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">
                                    Sell Crypto
                                </div>
                            </div>
                            <div className="box-body crypto-data">
                                <div className="tab-pane !border-0 !p-0" id="sell-crypto1" role="tabpanel"
                                    aria-labelledby="sell-crypto1">
                                    <div className="input-group mb-4 sm:flex block flex-nowrap crypto-buy-sell">
                                        <input type="text" className="form-control crypto-buy-sell-input border-e-0 form-control-sm" aria-label="crypto buy select" placeholder="Select Currency" />
                                        <Select name="colors" options={Data1} className="!rounded-s-none" placeholder="BTC"
                                            menuPlacement='auto' classNamePrefix="Select2"
                                        />
                                    </div>
                                    <div className="input-group mb-4 sm:flex block flex-nowrap crypto-buy-sell">
                                        <input type="text" className="form-control crypto-buy-sell-input border-e-0 form-control-sm" aria-label="crypto buy select" placeholder="36,335.00" />
                                        <Select name="colors" options={Data2} className="" placeholder="USD"
                                            menuPlacement='auto' classNamePrefix="Select2"
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <span className="form-label">Crypto Value :</span>
                                        <div className="relative">
                                            <Link aria-label="anchor" href="#!" className="stretched-link"></Link>
                                            <div className="p-2 border dark:border-defaultborder/10 rounded-md flex items-center justify-between gap-4 mt-1">
                                                <div className="gap-2 flex items-center">
                                                    <div className="leading-none">
                                                        <span className="avatar bg-light p-2">
                                                            <img src="../../../../assets/images/crypto-currencies/regular/Bitcoin.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="font-semibold">Bitcoin - BTC</div>
                                                </div>
                                                <div className="text-end">
                                                    <span className="font-semibold block">0.374638535 BTC</span>
                                                    <span className="text-[#8c9097] dark:text-white/50">$5,364.65</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <span className="form-label">Deposit To :</span>
                                        <div className="relative">
                                            <Link aria-label="anchor" href="#!" className="stretched-link"></Link>
                                            <div className="p-2 border dark:border-defaultborder/10 rounded-md flex items-center gap-2 mt-1">
                                                <div className="leading-none">
                                                    <span className="avatar bg-light p-2">
                                                        <i className="ri-bank-line text-info text-xl"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="font-semibold block">Banking</span>
                                                    <span className="text-[#8c9097] dark:text-white/50">Checking ...</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="text-[.875rem] py-2"><span className="font-semibold text-dark">Price:</span><span className="text-[#8c9097] dark:text-white/50 ms-2 text-[.875rem]">6.003435</span><span className="text-dark font-semibold ltr:float-right rtl:float-left">BTC</span></div>
                                        <div className="text-[.875rem] py-2"><span className="font-semibold text-dark">Amount:</span><span className="text-[#8c9097] dark:text-white/50 ms-2 text-[.875rem]">2,34,4543.00</span><span className="text-dark font-semibold ltr:float-right rtl:float-left">LTC</span></div>
                                    </div>
                                    <div className="grid mt-6">
                                        <button type="button" className="ti-btn ti-btn-danger-full btn-wave ti-btn-lg dark:border-defaultborder/10">SELL</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-4 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">
                                    Quick Secure Transfer
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="tab-pane border-0 !p-0" id="sell-crypto" role="tabpanel"
                                    aria-labelledby="sell-crypto">
                                    <div className="mb-4">
                                        <span className="form-label">Crypto Value :</span>
                                        <div className="relative">
                                            <Link aria-label="anchor" href="#!" className="stretched-link"></Link>
                                            <div className="p-2 border dark:border-defaultborder/10 rounded flex items-center justify-between gap-4 mt-1 rounded-md">
                                                <div className="gap-2 flex items-center">
                                                    <div className="leading-none">
                                                        <span className="avatar bg-light p-2">
                                                            <img src="../../../../assets/images/crypto-currencies/regular/Bitcoin.svg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="font-semibold">Bitcoin - BTC</div>
                                                </div>
                                                <div className="text-end">
                                                    <span className="font-semibold block">0.374638535 BTC</span>
                                                    <span className="text-[#8c9097] dark:text-white/50">$5,364.65</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <span className="form-label">Deposit To :</span>
                                        <div className="relative">
                                            <Link aria-label="anchor" href="#!" className="stretched-link"></Link>
                                            <div className="p-2 border dark:border-defaultborder/10 rounded flex items-center gap-2 mt-1 rounded-md">
                                                <div className="leading-none">
                                                    <span className="avatar bg-light p-2">
                                                        <i className="ri-bank-line text-info text-xl"></i>
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="font-semibold block">Banking</span>
                                                    <span className="text-[#8c9097] dark:text-white/50">Checking ...</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <span className="block font-semibold">Amount :</span>
                                        <div className="flex items-center justify-between text-[#8c9097] dark:text-white/50">
                                            <div>Weekly Bank Limit</div>
                                            <div>$10,000 remaining</div>
                                        </div>
                                    </div>
                                    <div className="input-group mb-4 sm:flex block flex-nowrap crypto-buy-sell">
                                        <input type="text" className="form-control crypto-buy-sell-input border-e-0" aria-label="crypto buy select" placeholder="36,335.00" />
                                        <Select name="colors" options={Data2} className="" placeholder="USD"
                                            menuPlacement='auto' classNamePrefix="Select2"
                                        />
                                    </div>
                                    <div>
                                        <div className="text-[.875rem] py-2"><span className="font-semibold text-dark">Price:</span><span className="text-[#8c9097] dark:text-white/50 ms-2 text-[.875rem]">6.003435</span><span className="text-dark font-semibold ltr:float-right rtl:float-left">BTC</span></div>
                                        <div className="text-[.875rem] py-2"><span className="font-semibold text-dark">Amount:</span><span className="text-[#8c9097] dark:text-white/50 ms-2 text-[.875rem]">2,34,4543.00</span><span className="text-dark font-semibold ltr:float-right rtl:float-left">LTC</span></div>
                                    </div>
                                    <div className="grid mt-6">
                                        <button type="button" className="ti-btn ti-btn-success-full btn-wave ti-btn-lg dark:border-defaultborder/10">Transfer</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header justify-between">
                                <div className="box-title">
                                    Buy &amp; Sell Statistics
                                </div>
                                <div className="btn-group inline-flex flex-wrap" role="group" aria-label="Basic example">
                                    <button type="button" className="ti-btn ti-btn-primary-full !rounded-e-none btn-wave">1D</button>
                                    <button type="button" className="ti-btn ti-btn-primary !rounded-none  btn-wave">1W</button>
                                    <button type="button" className="ti-btn ti-btn-primary !rounded-none  btn-wave">1M</button>
                                    <button type="button" className="ti-btn ti-btn-primary !rounded-none  btn-wave">3M</button>
                                    <button type="button" className="ti-btn ti-btn-primary !rounded-none  btn-wave">6M</button>
                                    <button type="button" className="ti-btn ti-btn-primary !rounded-s-none  btn-wave">1Y</button>
                                </div>
                            </div>
                            <div className="box-body !p-0">
                                <div className="grid grid-cols-12 gap-6">
                                    <div className="xl:col-span-8 col-span-12 pe-0 border-e border-dashed dark:border-defaultborder/10">
                                        <div className="flex flex-wrap items-center border-b border-dashed dark:border-defaultborder/10 mb-4 p-4 gap-4 ps-[3rem]">
                                            <div>
                                                <span className="block text-[0.75rem]">Total Buy</span>
                                                <span className="block font-semibold text-[.9375rem] text-success">$324.25 USD</span>
                                            </div>
                                            <div>
                                                <span className="block text-[0.75rem]">Total Sell</span>
                                                <span className="block font-semibold text-[.9375rem] text-danger">$4,235.25 USD</span>
                                            </div>
                                            <div>
                                                <span className="block text-[0.75rem]">Available Balance</span>
                                                <span className="block font-semibold text-[.9375rem] text-primary">$22,803.92 USD</span>
                                            </div>
                                            <div>
                                                <span className="block text-[0.75rem]">Total Crypto Asset Value</span>
                                                <span className="block font-semibold text-[.9375rem] text-warning">$4,56,683.00 USD</span>
                                            </div>
                                            <div></div>
                                        </div>
                                        <div id="buy_sell-statistics" className="px-3">
                                            <SellStatistics />
                                        </div>
                                    </div>
                                    <div className="xl:col-span-4 col-span-12 xl:ps-0">
                                        <div className="p-4">
                                            <div className="box custom-box !bg-light shadow-none">
                                                <div className="box-body">
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-2">BTC/USD</span>
                                                            <span className="font-semibold h6 mb-0">27.53612</span>
                                                            <span className="text-danger block text-[0.75rem] mt-1">-0.06%</span>
                                                        </div>
                                                        <div>
                                                            <span className="avatar avatar-xl avatar-rounded">
                                                                <img src="../../../../assets/images/crypto-currencies/square-color/Bitcoin.svg" alt="" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box custom-box !bg-light shadow-none">
                                                <div className="box-body">
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-2">ETH/USD</span>
                                                            <span className="font-semibold h6 mb-0">20.6782</span>
                                                            <span className="text-success block text-[0.75rem] mt-1">+2.86%</span>
                                                        </div>
                                                        <div>
                                                            <span className="avatar avatar-xl avatar-rounded">
                                                                <img src="../../../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box custom-box !bg-light shadow-none mb-0">
                                                <div className="box-body">
                                                    <div className="flex items-center justify-between">
                                                        <div>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-2">LTC/USD</span>
                                                            <span className="font-semibold h6 mb-0">54.2912</span>
                                                            <span className="text-success block text-[0.75rem] mt-1">+15.93%</span>
                                                        </div>
                                                        <div>
                                                            <span className="avatar avatar-xl avatar-rounded">
                                                                <img src="../../../../assets/images/crypto-currencies/square-color/Litecoin.svg" alt="" />
                                                            </span>
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
Buysell.layout = "Contentlayout"
export default Buysell