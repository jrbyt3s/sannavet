'use client'
import React from 'react'
import Link from 'next/link';
import { RiDownload2Line } from "react-icons/ri";

import { Customers, Deals, Dealsstatistics, Earned, Ratio, Revenue, Revenueanalytics, Sourcedata, Target } from '@/shared/data/dashboards/crmdata';


const Veterinario = () => {

    return (

        <>
            <div className="md:flex block items-center justify-between my-[1.5rem] page-header-breadcrumb">
                <div>
                    <p className="font-semibold text-[1.125rem] text-defaulttextcolor dark:text-defaulttextcolor/70 !mb-0 ">Welcome back, Json Taylor !</p>
                    <p className="font-normal text-[#8c9097] dark:text-white/50 text-[0.813rem]">Track your sales activity, leads and deals here.</p>
                </div>
                <div className="btn-list md:mt-0 mt-2">
                    <button type="button"
                        className="ti-btn bg-primary text-white btn-wave !font-medium !me-[0.375rem] !ms-0 !text-[0.85rem] !rounded-[0.35rem] !py-[0.51rem] !px-[0.86rem] mb-0 shadow-none">
                        <i className="ri-filter-3-fill  inline-block"></i>Filters
                    </button>
                    <button type="button"
                        className="ti-btn ti-btn-outline-secondary btn-wave !font-medium  !me-[0.375rem]  !ms-0 !text-[0.85rem] !rounded-[0.35rem] !py-[0.51rem] !px-[0.86rem] mb-0 shadow-none">
                        <i className="ri-upload-cloud-line  inline-block"></i>Export
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-9 xl:col-span-12  col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        
                        <div className="xxl:col-span-12 xl:col-span-12 col-span-12">
                            <div className="p-4 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="box-header justify-between">
                                    <div className="box-title my-2">
                                        Deals Statistics
                                    </div>
                                    <div className="flex flex-wrap gap-2 my-4">
                                        <div>
                                            <input className="ti-form-control form-control-sm bg-slate-200 my-2 p-1 rounded-lg " type="text" placeholder="Search Here"
                                                aria-label=".form-control-sm example" />
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
                                                    <th scope="col" className="!text-start !text-[0.85rem] min-w-[200px]">Sales Rep</th>
                                                    <th scope="col" className="!text-start !text-[0.85rem]">Category</th>
                                                    <th scope="col" className="!text-start !text-[0.85rem]">Mail</th>
                                                    <th scope="col" className="!text-start !text-[0.85rem]">Location</th>
                                                    <th scope="col" className="!text-start !text-[0.85rem]">Date</th>
                                                    <th scope="col" className="!text-start !text-[0.85rem]">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Dealsstatistics.map((idx) => (
                                                    <tr className="border border-inherit border-solid hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light" key={Math.random()}>
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
                                <div className="flex-auto">
                                    <div className="sm:flex items-center">
                                        <div className="text-defaulttextcolor dark:text-defaulttextcolor/70">
                                            Showing 5 Entries <i className="bi bi-arrow-right ms-2 font-semibold"></i>
                                        </div>
                                        <div className="ms-auto">
                                            <nav aria-label="Page navigation" className="pagination-style-4">
                                                <ul className=" m-4 flex flex-col md:flex-row md:items-center md:gap-[4vw] gap-2">
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

        </>

    );

}

export default Veterinario;