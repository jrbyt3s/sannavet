import { Liveauctiondata, Liveauctiondata1 } from '@/shared/data/apps/nft/liveacuationdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React, { Fragment } from 'react'

const Liveauction = () => {
    return (
        <Fragment>
            <Seo title={"Live Auction"} />
            <Pageheader currentpage="Live Auction" activepage="NFT" mainpage="Live Auction" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-9 col-span-12">
                    <div className="flex items-center justify-between flex-wrap gap-2 mb-4">
                        <div className="nft-tag nft-tag-primary active">
                            <Link aria-label="anchor" href="#!" className="stretched-link"></Link>
                            <span className="nft-tag-icon"><i className="ti ti-world text-[1.25rem]"></i></span>
                            <span className="nft-tag-text">All</span>
                        </div>
                        <div className="nft-tag nft-tag-secondary">
                            <Link aria-label="anchor" href="#!" className="stretched-link"></Link>
                            <span className="nft-tag-icon"><i className="ti ti-flame text-[1.25rem]"></i></span>
                            <span className="nft-tag-text">New Trends</span>
                        </div>
                        <div className="nft-tag nft-tag-info">
                            <Link aria-label="anchor" href="#!" className="stretched-link"></Link>
                            <span className="nft-tag-icon"><i className="ti ti-palette text-[1.25rem]"></i></span>
                            <span className="nft-tag-text">Art Work</span>
                        </div>
                        <div className="nft-tag nft-tag-success">
                            <Link aria-label="anchor" href="#!" className="stretched-link"></Link>
                            <span className="nft-tag-icon"><i className="ti ti-device-gamepad-2 text-[1.25rem]"></i></span>
                            <span className="nft-tag-text">Games</span>
                        </div>
                        <div className="nft-tag nft-tag-danger">
                            <Link aria-label="anchor" href="#!" className="stretched-link"></Link>
                            <span className="nft-tag-icon"><i className="ti ti-tie text-[1.25rem]"></i></span>
                            <span className="nft-tag-text">Fashion</span>
                        </div>
                        <div className="nft-tag nft-tag-warning">
                            <Link aria-label="anchor" href="#!" className="stretched-link"></Link>
                            <span className="nft-tag-icon"><i className="ti ti-music text-[1.25rem]"></i></span>
                            <span className="nft-tag-text">Music</span>
                        </div>
                        <div className="nft-tag nft-tag-dark">
                            <Link aria-label="anchor" href="#!" className="stretched-link"></Link>
                            <span className="nft-tag-icon"><i className="ti ti-gift text-[1.25rem]"></i></span>
                            <span className="nft-tag-text">Others</span>
                        </div>
                    </div>
                    <h6 className="font-semibold !text-defaulttextcolor">Live Auction:</h6>
                    <div className="grid grid-cols-12 gap-x-6">
                        {Liveauctiondata.map((idx) => (
                            <div className="xxxl:col-span-3 xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12" key={Math.random()}>
                                <div className="box custom-box">
                                    <div className="box-body !p-4">
                                        <div className="mb-4 overflow-hidden relative">
                                            <Link aria-label="anchor" href="#!" className="stretched-link"></Link>
                                            <img src={idx.src1} alt="img" className="nft-img img-fluid" />
                                            <Link href="#!" className="nft-btn" aria-label="Like"><i className="ti ti-heart"></i></Link>
                                            <span className="nft-timer-container">
                                                <i className="ti ti-bolt text-[.875rem]"></i>
                                                <span className="nft-timer ms-1 text-[0.6875rem]">04 Days 03 : 44 : 04</span>
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-start mb-4 flex-wrap">
                                            <div className="inline-flex items-start relative">
                                                <Link aria-label="anchor" href="/components/pages/profile/" className="stretched-link"></Link>
                                                <div className="me-2">
                                                    <span className="avatar avatar-rounded">
                                                        <img src={idx.src2} alt="img" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <span className="mb-0 block text-[.875rem] font-semibold">{idx.name}</span>
                                                    <span className="text-[.8125rem] text-[#8c9097] dark:text-white/50">{idx.text1}<i className="bi bi-patch-check-fill text-success ms-1 text-[.9375rem]"></i></span>
                                                </div>
                                            </div>
                                            <span className="text-[.8125rem] text-[#8c9097] dark:text-white/50">{idx.text2}</span>
                                        </div>
                                        <div className="text-[.9375rem] font-semibold mb-2"><Link href="#!">{idx.heading}</Link></div>
                                        <div className="flex items-end flex-wrap gap-2">
                                            <div className="flex-grow">
                                                <p className="text-[.875rem] mb-1 text-[#8c9097] dark:text-white/50">Highest Bid</p>
                                                <div className="text-[1rem] mb-0 flex items-center font-semibold">
                                                    <span className="avatar avatar-xs me-1"><img src="../../../../assets/images/nft-images/34.png" alt="" /></span>
                                                    {idx.text3}
                                                </div>
                                            </div>
                                            <Link href="#!" className="ti-btn ti-btn-primary btn-wave">Place Bid</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <nav aria-label="Page navigation">
                        <ul className="ti-pagination justify-end mb-4">
                            <li className="page-item disabled"><Link className="page-link px-3 py-[0.375rem]" href="#!">Previous</Link></li>
                            <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">1</Link></li>
                            <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">2</Link></li>
                            <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">3</Link></li>
                            <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">Next</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="xxl:col-span-3 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box custom-box overflow-hidden">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Featured Creators
                                    </div>
                                    <div>
                                        <button type="button" className="ti-btn ti-btn-primary !py-1 !px-2 !text-[0.75rem] btn-wave">View All</button>
                                    </div>
                                </div>
                                <div className="box-body !p-0">
                                    <ul className="list-group list-group-flush">
                                        {Liveauctiondata1.map((idx) => (
                                            <li className="list-group-item !border-t-0 !border-e-0 !border-s-0" key={Math.random()}>
                                                <div className="flex items-center justify-between flex-wrap gap-2">
                                                    <div className="flex items-center">
                                                        <div className="leading-none">
                                                            <span className="avatar avatar-md avatar-rounded me-2">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="items-center">
                                                            <p className="mb-0 font-semibold">{idx.text1}<i className="bi bi-patch-check-fill text-success ms-2"></i></p>
                                                            <span className="text-[.75rem] text-[#8c9097] dark:text-white/50">{idx.text2}</span>
                                                        </div>
                                                    </div>
                                                    <div className="text-end">
                                                        <span className="block font-semibold text-success">{idx.text3}</span>
                                                        <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem]">{idx.text4}</span>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box custom-box overflow-hidden">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Recent Activity
                                    </div>
                                    <div className="hs-dropdown ti-dropdown">
                                        <Link href="#!" className="p-2 text-[.75rem] text-[#8c9097] dark:text-white/50" aria-expanded="false">
                                            Today<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                        </Link>
                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                            <li><Link className="ti-dropdown-item" href="#!">Today</Link></li>
                                            <li><Link className="ti-dropdown-item" href="#!">This Week</Link></li>
                                            <li><Link className="ti-dropdown-item" href="#!">Last Week</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box-body !p-0">
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item !border-t-0 !border-e-0 !border-s-0">
                                            <div className="flex gap-4 items-center flex-wrap">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-xl">
                                                        <img src="../../../../assets/images/nft-images/31.png" alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="mb-1"><Link href="#!" className="font-semibold">DreamSpace</Link><span className="text-[.75rem] text-[#8c9097] dark:text-white/50 ms-2">24 mins ago</span></div>
                                                    <div className="text-[.8125rem]">Purchsed from you by <Link className="underline" href="#!">Mitchell</Link> for <span className="text-success font-semibold text-[.75rem]">0.57ETH</span>.</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item !border-e-0 !border-s-0">
                                            <div className="flex gap-4 items-center flex-wrap">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-xl">
                                                        <img src="../../../../assets/images/nft-images/25.png" alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="mb-1"><span className="font-semibold">DreamSpace</span><span className="text-[.75rem] text-[#8c9097] dark:text-white/50 ms-2">16 mins ago</span></div>
                                                    <div className="text-[.8125rem]">You started following mark zensberg.</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item !border-e-0 !border-s-0">
                                            <div className="flex gap-4 items-center">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-xl">
                                                        <img src="../../../../assets/images/nft-images/21.png" alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="mb-1"><span className="font-semibold">Neo Nebulae</span><span className="text-[.75rem] text-[#8c9097] dark:text-white/50 ms-2">5 mins ago</span></div>
                                                    <div className="text-[.8125rem]">You showed interest in purchasing <Link href="#!" className="text-[.75rem] text-warning font-semibold">NeoNebulae</Link>.</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-group-item !border-b-0 !border-e-0 !border-s-0">
                                            <div className="flex gap-4 items-center ">
                                                <div className="leading-none">
                                                    <span className="avatar avatar-xl">
                                                        <img src="../../../../assets/images/nft-images/26.png" alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <div className="mb-1"><span className="font-semibold">Neo Nebulae</span><span className="text-[.75rem] text-[#8c9097] dark:text-white/50 ms-2">16 mins ago</span></div>
                                                    <div className="text-[.8125rem]">Purchased from <Link href="#!" className="underline">Cyber Canvas</Link> for <span className="font-semibold text-[.75rem] text-pink">1.345ETH</span>.</div>
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
Liveauction.layout = "Contentlayout"

export default Liveauction