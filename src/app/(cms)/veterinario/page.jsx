'use client'
import React from 'react'
import Link from 'next/link';
import { RiDownload2Line } from "react-icons/ri";

import { Customers, Deals, Dealsstatistics, Earned, Ratio, Revenue, Revenueanalytics, Sourcedata, Target } from '@/shared/data/dashboards/crmdata';


const Veterinario = () => {

    return (

        <>

            <div class="main-content">
                <div class="md:flex block items-center justify-between my-[1.5rem] page-header-breadcrumb">
                    <div>
                        <p class="font-semibold text-[1.125rem] text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-0 ">Welcome
                            back, Json Taylor !</p>
                        <p class="font-normal text-[#8c9097] dark:text-white/50 text-[0.813rem]">Track your sales activity, leads
                            and deals here.</p>
                    </div>
                    <div class="btn-list md:mt-0 mt-2">
                        <button type="button"
                            class="ti-btn bg-primary text-white btn-wave !font-medium !me-[0.375rem] !ms-0 !text-[0.85rem] !rounded-[0.35rem] !py-[0.51rem] !px-[0.86rem] mb-0 shadow-none">
                            <i class="ri-filter-3-fill  inline-block"></i>Filters</button><button type="button"
                                class="ti-btn ti-btn-outline-secondary btn-wave !font-medium  !me-[0.375rem]  !ms-0 !text-[0.85rem] !rounded-[0.35rem] !py-[0.51rem] !px-[0.86rem] mb-0 shadow-none"><i
                                    class="ri-upload-cloud-line  inline-block"></i>Export</button>
                    </div>
                </div>
                {/* Fin del Header */}

                <div class="grid grid-cols-12 gap-x-6">
                    <div class="xxl:col-span-9 xl:col-span-12  col-span-12">
                        <div class="grid grid-cols-12 gap-x-6">
                            <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
                                <div className="p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                    <div className="box-header justify-between">
                                        <div className="box-title">
                                            Deals Statistics
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            <div>
                                                <input className="ti-form-control form-control-sm bg-slate-200 my-2 rounded-lg p-1" type="text" placeholder="Search Here"
                                                    aria-label=".form-control-sm example" />
                                            </div>
                                            <div className="hs-dropdown ti-dropdown">
                                                <Link href="#!"
                                                    className="ti-btn ti-btn-primary !bg-primary !text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium"
                                                    aria-expanded="false">
                                                    Sort By<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                                </Link>
                                                <ul className="hs-dropdown-menu ti-dropdown-menu !-mt-2 hidden" role="menu">
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
                                        <div className="overflow-x-auto">
                                            <table className="table min-w-full whitespace-nowrap table-hover border table-bordered">
                                                <thead>
                                                    <tr className="border border-inherit border-solid dark:border-defaultborder/10">
                                                        <th scope="row" className="!ps-4 !pe-5"><input className="form-check-input" type="checkbox"
                                                            id="checkboxNoLabel1" value="" aria-label="..." /></th>
                                                        <th scope="col" className="text-sm min-w-[200px]">Sales Rep</th>
                                                        <th scope="col" className="text-sm">Category</th>
                                                        <th scope="col" className="text-sm">Mail</th>
                                                        <th scope="col" className="text-sm">Location</th>
                                                        <th scope="col" className="text-sm">Date</th>
                                                        <th scope="col" className="text-sm">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {Dealsstatistics.map((idx) => (
                                                        <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light text-xs" key={Math.random()}>
                                                            <th scope="row" className="!ps-4 !pe-5"><input className="form-check-input" type="checkbox" defaultChecked={idx.checked === 'defaultChecked'}
                                                                id="" value="" aria-label="..." /></th>
                                                            <td>
                                                                <div className="flex items-center font-semibold">
                                                                    <span className="!me-2 inline-flex justify-center items-center">
                                                                        <img src={idx.src} alt="img"
                                                                            className="w-[1.75rem] h-[1.75rem] leading-[1.75rem] text-[0.65rem]  rounded-full" />
                                                                    </span>{idx.name}
                                                                </div>
                                                            </td>
                                                            <td>{idx.role}</td>
                                                            <td>{idx.mail}</td>
                                                            <td>
                                                                <span
                                                                    className={`inline-flex text-${idx.color} !py-[0.15rem] !px-[0.45rem] rounded-sm !font-semibold !text-[0.75em] bg-${idx.color}/10`}>{idx.location}</span>
                                                            </td>
                                                            <td>{idx.date}</td>
                                                            <td>
                                                                <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                                    <Link aria-label="anchor" href="#!"
                                                                        className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-success/10 text-success hover:bg-success hover:text-white hover:border-success"><i
                                                                            className="ri-download-2-line"></i></Link>
                                                                    <Link aria-label="anchor" href="#!"
                                                                        className="ti-btn ti-btn-icon ti-btn-wave !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-primary/10 text-primary hover:bg-primary hover:text-white hover:border-primary"><i
                                                                            className="ri-edit-line"></i></Link>
                                                                </div>
                                                            </td>
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
                        </div>
                    </div>
                </div>
            </div>
        </>

    );

}

export default Veterinario;