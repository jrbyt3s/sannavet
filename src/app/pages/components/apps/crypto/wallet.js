import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'

const Wallet = () => {
    return (
        <Fragment>
            <Seo title={"Wallet"} />
            <Pageheader currentpage="Wallet" activepage="Crypto" mainpage="Wallet" />
            <div className="container">
                <div className="grid grid-cols-12 gap-6">
                    <div className="xl:col-span-4 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">
                                    BTC WALLET
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                        <div className="leading-none">
                                            <span className="avatar avatar-rounded">
                                                <img src="../../../../assets/images/crypto-currencies/square-color/Bitcoin.svg" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] font-normal">Available BTC</span>
                                            <span className="font-semibold">0.05437 BTC</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="font-semibold">$1646.94 USD</span>
                                        <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] font-normal">In USD</span>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="btn-list text-center">
                                    <button type="button" className="ti-btn ti-btn-primary min-w-[9.375rem] me-1 btn-wave">Deposit</button>
                                    <button type="button" className="ti-btn ti-btn-success min-w-[9.375rem] btn-wave">Withdraw</button>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">
                                    ETH WALLET
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                        <div className="leading-none">
                                            <span className="avatar avatar-rounded">
                                                <img src="../../../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] font-normal">Available ETH</span>
                                            <span className="font-semibold">2.3892 ETH</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="font-semibold">$4581.24 USD</span>
                                        <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] font-normal">In USD</span>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="btn-list text-center">
                                    <button type="button" className="ti-btn ti-btn-primary min-w-[9.375rem] me-1 btn-wave">Deposit</button>
                                    <button type="button" className="ti-btn ti-btn-success min-w-[9.375rem] btn-wave">Withdraw</button>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">
                                    XRP WALLET
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                        <div className="leading-none">
                                            <span className="avatar avatar-rounded">
                                                <img src="../../../../assets/images/crypto-currencies/square-color/Ripple.svg" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] font-normal">Available XRP</span>
                                            <span className="font-semibold">234.943 XRP</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="font-semibold">$192.29 USD</span>
                                        <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] font-normal">In USD</span>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="btn-list text-center">
                                    <button type="button" className="ti-btn ti-btn-primary min-w-[9.375rem] me-1 btn-wave">Deposit</button>
                                    <button type="button" className="ti-btn ti-btn-success min-w-[9.375rem] btn-wave">Withdraw</button>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">
                                    LTC WALLET
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="flex items-center justify-between gap-2">
                                    <div className="flex items-center gap-2">
                                        <div className="leading-none">
                                            <span className="avatar avatar-rounded">
                                                <img src="../../../../assets/images/crypto-currencies/square-color/Litecoin.svg" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] font-normal">Available LTC</span>
                                            <span className="font-semibold">37.254 LTC</span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="font-semibold">$3519.01 USD</span>
                                        <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] font-normal">In USD</span>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="btn-list text-center">
                                    <button type="button" className="ti-btn ti-btn-primary min-w-[9.375rem] me-1 btn-wave">Deposit</button>
                                    <button type="button" className="ti-btn ti-btn-success min-w-[9.375rem] btn-wave">Withdraw</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-8 col-span-12">
                        <div className="grid grid-cols-12 gap-6">
                            <div className="xl:col-span-12 col-span-12">
                                <div className="box custom-box">
                                    <div className="box-header justify-between">
                                        <div className="box-title">
                                            BTC Wallet Address
                                        </div>
                                        <div>
                                            <button type="button" className="ti-btn ti-btn-outline-primary ti-btn-wave">Connect</button>
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <div className="flex items-center flex-wrap justify-between gap-4 mb-3">
                                            <div className="flex-grow">
                                                <label htmlFor="btc-wallet-address1" className="form-label">Wallet Address</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" id="btc-wallet-address1" defaultValue="afb0dc8bc84625587b85415c86ef43ed8df" placeholder="Placeholder" />
                                                    <button type="button" className="ti-btn ti-btn-primary-full !mb-0">Copy</button>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="avatar avatar-xxl border dark:border-defaultborder/10">
                                                    <img src="../../../../assets/images/media/media-89.png" className="p-1 qr-image" alt="" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-12 gap-4">
                                            <div className="xl:col-span-4 col-span-12">
                                                <div className="rounded-md p-4 bg-light">
                                                    <div className="flex items-center gap-4">
                                                        <div className="leading-none">
                                                            <span className="avatar bg-success/10 !text-success">
                                                                <i className="ti ti-arrow-narrow-down text-[1.25rem]"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="block text-[#8c9097] dark:text-white/50">Received</span>
                                                            <span className="block font-semibold">6.2834 <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50 font-normal">BTC</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-4 col-span-12">
                                                <div className="rounded-md p-4 bg-light">
                                                    <div className="flex items-center gap-3">
                                                        <div className="leading-none">
                                                            <span className="avatar bg-danger/10 !text-danger">
                                                                <i className="ti ti-arrow-narrow-up text-[1.25rem]"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="block text-[#8c9097] dark:text-white/50">Sent</span>
                                                            <span className="block font-semibold">2.7382 <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50 font-normal">BTC</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-4 col-span-12">
                                                <div className="rounded-md p-4 bg-light">
                                                    <div className="flex items-center gap-3">
                                                        <div className="leading-none">
                                                            <span className="avatar bg-secondary/10 !text-secondary">
                                                                <i className="ti ti-wallet text-[1.25rem]"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="block text-[#8c9097] dark:text-white/50">Wallet Balance</span>
                                                            <span className="block font-semibold">12.5232 <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50 font-normal">BTC</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box custom-box">
                                    <div className="box-header justify-between">
                                        <div className="box-title">
                                            ETH Wallet Address
                                        </div>
                                        <div>
                                            <button type="button" className="ti-btn ti-btn-outline-primary ti-btn-wave">Connect</button>
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <div className="flex items-center flex-wrap justify-between gap-4 mb-4">
                                            <div className="flex-grow">
                                                <label htmlFor="btc-wallet-address2" className="form-label">Wallet Address</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" id="btc-wallet-address2" defaultValue="afb0dc8bc84625587b85415c86ef43ed8df" placeholder="Placeholder" />
                                                    <button type="button" className="ti-btn ti-btn-primary-full !mb-0">Copy</button>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="avatar avatar-xxl border dark:border-defaultborder/10">
                                                    <img src="../../../../assets/images/media/media-89.png" className="p-1 qr-image" alt="" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-12 gap-4">
                                            <div className="xl:col-span-4 col-span-12">
                                                <div className="rounded-md p-4 bg-light">
                                                    <div className="flex items-center gap-4">
                                                        <div className="leading-none">
                                                            <span className="avatar bg-success/10 ">
                                                                <i className="ti ti-arrow-narrow-down text-[1.25rem] !text-success"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="block text-[#8c9097] dark:text-white/50">Received</span>
                                                            <span className="block font-semibold">6.2834 <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50 font-normal">ETH</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-4 col-span-12">
                                                <div className="rounded-md p-4 bg-light">
                                                    <div className="flex items-center gap-4">
                                                        <div className="leading-none">
                                                            <span className="avatar !bg-danger/10 ">
                                                                <i className="ti ti-arrow-narrow-up text-[1.25rem] !text-danger"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="block text-[#8c9097] dark:text-white/50">Sent</span>
                                                            <span className="block font-semibold">2.7382 <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50 font-normal">ETH</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-4 col-span-12">
                                                <div className="rounded-md p-4 bg-light">
                                                    <div className="flex items-center gap-4">
                                                        <div className="leading-none">
                                                            <span className="avatar !bg-secondary/10 ">
                                                                <i className="ti ti-wallet text-[1.25rem] !text-secondary"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="block text-[#8c9097] dark:text-white/50">Wallet Balance</span>
                                                            <span className="block font-semibold">12.5232 <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50 font-normal">ETH</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box custom-box">
                                    <div className="box-header justify-between">
                                        <div className="box-title">
                                            LTC Wallet Address
                                        </div>
                                        <div>
                                            <button type="button" className="ti-btn ti-btn-outline-primary ti-btn-wave">Connect</button>
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <div className="flex items-center flex-wrap justify-between gap-4 mb-4">
                                            <div className="flex-grow">
                                                <label htmlFor="btc-wallet-address3" className="form-label">Wallet Address</label>
                                                <div className="input-group">
                                                    <input type="text" className="form-control" id="btc-wallet-address3" defaultValue="afb0dc8bc84625587b85415c86ef43ed8df" placeholder="Placeholder" />
                                                    <button type="button" className="ti-btn ti-btn-primary-full !mb-0">Copy</button>
                                                </div>
                                            </div>
                                            <div>
                                                <span className="avatar avatar-xxl border dark:border-defaultborder/10">
                                                    <img src="../../../../assets/images/media/media-89.png" className="p-1 qr-image" alt="" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="grid grid-cols-12 gap-4">
                                            <div className="xl:col-span-4 col-span-12">
                                                <div className="rounded-md p-4 bg-light">
                                                    <div className="flex items-center gap-4">
                                                        <div className="leading-none">
                                                            <span className="avatar bg-success/10 !text-success">
                                                                <i className="ti ti-arrow-narrow-down text-[1.25rem]"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="block text-[#8c9097] dark:text-white/50">Received</span>
                                                            <span className="block font-semibold">6.2834 <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50 font-normal">LTC</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-4 col-span-12">
                                                <div className="rounded-md p-4 bg-light">
                                                    <div className="flex items-center gap-4">
                                                        <div className="leading-none">
                                                            <span className="avatar bg-danger/10 !text-danger">
                                                                <i className="ti ti-arrow-narrow-up text-[1.25rem]"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="block text-[#8c9097] dark:text-white/50">Sent</span>
                                                            <span className="block font-semibold">2.7382 <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50 font-normal">LTC</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-4 col-span-12">
                                                <div className="rounded-md p-4 bg-light">
                                                    <div className="flex items-center gap-4">
                                                        <div className="leading-none">
                                                            <span className="avatar bg-secondary/10 !text-secondary">
                                                                <i className="ti ti-wallet text-[1.25rem]"></i>
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="block text-[#8c9097] dark:text-white/50">Wallet Balance</span>
                                                            <span className="block font-semibold">12.5232 <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50 font-normal">LTC</span></span>
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
Wallet.layout = "Contentlayout"

export default Wallet