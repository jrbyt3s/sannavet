import { InvoiceStats, Manageinvoicedata } from '@/shared/data/pages/invoice/invoicelistdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import dynamic from 'next/dynamic';
import Link from 'next/link'
import React, { Fragment, useState } from 'react';
const CountUp = dynamic(() => import("react-countup"), { ssr: false });
const Invoicelist = () => {
    const [manageInvoiceData, setManageInvoiceData] = useState([...Manageinvoicedata]);
    const handleDelete = (idToRemove) => {
        const updatedInvoiceData = manageInvoiceData.filter((item) => item.id !== idToRemove);
        setManageInvoiceData(updatedInvoiceData);
    };
    return (
        <Fragment>
            <Seo title={"Invoice List"} />
            <Pageheader currentpage="Invoice List" activepage="Invoice" mainpage="Invoice List" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-9 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Manage Invoices
                            </div>
                            <div className="flex">
                                <button type="button" className="ti-btn !py-1 !px-2 !text-[0.75rem] !text-white !font-medium bg-primary"><i className="ri-add-line font-semibold align-middle me-1"></i> Create Invoice</button>
                                <div className="hs-dropdown ti-dropdown ms-2">
                                    <button aria-label="button" type="button" className="ti-btn ti-btn-secondary ti-btn-sm" aria-expanded="false">
                                        <i className="ti ti-dots-vertical"></i>
                                    </button>
                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="#!">All Invoices</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="#!">Paid Invoices</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="#!">Pending Invoices</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="#!">Overdue Invoices</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="table-responsive">
                                <table className="table whitespace-nowrap table-bordered min-w-full">
                                    <thead>
                                        <tr>
                                            <th scope="col" className="text-start">Client</th>
                                            <th scope="col" className="text-start">Invoice ID</th>
                                            <th scope="col" className="text-start">Issued Date</th>
                                            <th scope="col" className="text-start">Amount</th>
                                            <th scope="col" className="text-start">Status</th>
                                            <th scope="col" className="text-start">Due Date</th>
                                            <th scope="col" className="text-start">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {manageInvoiceData.map((idx) => (
                                            <tr className="invoice-list border border-defaultborder dark:border-defaultborder/10" key={Math.random()}>
                                                <td>
                                                    <div className="flex items-center">
                                                        <div className="me-2 leading-none">
                                                            <span className="avatar avatar-sm avatar-rounded">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <p className="mb-0 font-semibold">{idx.name}</p>
                                                            <p className="mb-0 text-[.6875rem] text-[#8c9097] dark:text-white/50">{idx.mail}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <Link href="#!" className="font-semibold text-primary">
                                                        {idx.invoiceid}
                                                    </Link>
                                                </td>
                                                <td>
                                                    {idx.date}
                                                </td>
                                                <td>
                                                    {idx.amount}
                                                </td>
                                                <td>
                                                    <span className={`badge bg-${idx.color}/10 text-${idx.color}`}>{idx.badge}</span>
                                                </td>
                                                <td>
                                                    {idx.due}
                                                </td>
                                                <td>
                                                    <button aria-label="button" type="button" className="ti-btn ti-btn-primary ti-btn-icon ti-btn-sm me-2"><i className="ri-printer-line"></i></button>
                                                    <button onClick={() => handleDelete(idx.id)} aria-label="button" type="button" className="ti-btn ti-btn-danger ti-btn-icon ms-1 ti-btn-sm invoice-btn" ><i className="ri-delete-bin-5-line"></i></button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="box-footer">
                            <nav aria-label="Page navigation">
                                <ul className="ti-pagination ltr:float-right rtl:float-left mb-0">
                                    <li className="page-item disabled"><Link className="page-link px-3 py-[0.375rem]" href="#!">Previous</Link></li>
                                    <li className="page-item"><Link className="page-link active px-3 py-[0.375rem]" href="#!">1</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">2</Link></li>
                                    <li className="page-item hidden sm:block"><Link className="page-link px-3 py-[0.375rem]" href="#!">3</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">Next</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <div className="box">
                        <div className="box-body !p-0">
                            <div className="p-6 border-b border-dashed dark:border-defaultborder/10 flex items-start">
                                <div className="svg-icon-background bg-primary/10 me-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className="svg-primary"><path d="M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z" /></svg>
                                </div>
                                <div className="flex-grow">
                                    <h6 className="mb-1 text-[0.75rem]">Total Invoices Amount
                                        <span className="badge bg-primary text-white font-semibold ltr:float-right rtl:float-left">
                                            12,345
                                        </span>
                                    </h6>
                                    <div className="pb-0 mt-0">
                                        <div>
                                            <h4 className="text-[1.125rem] font-semibold mb-2">$<span className="count-up" data-count="192"><CountUp
                                                end={192}
                                                start={0}
                                                duration={4.94}
                                            /></span>.87k</h4>
                                            <p className="text-[#8c9097] dark:text-white/50 text-[.6875rem] mb-0 leading-none">
                                                <span className="text-success me-1 font-semibold">
                                                    <i className="ri-arrow-up-s-line me-1 align-middle"></i>3.25%
                                                </span>
                                                <span>this month</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 border-b border-dashed dark:border-defaultborder/10 flex items-start">
                                <div className="svg-icon-background bg-success/10 !fill-success me-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="svg-success"><path d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z" /></svg>
                                </div>
                                <div className="flex-grow">
                                    <h6 className="mb-1 text-[0.75rem]">Total Paid Invoices
                                        <span className="badge bg-success text-white font-semibold ltr:float-right rtl:float-left">
                                            4,176
                                        </span>
                                    </h6>
                                    <div>
                                        <h4 className="text-[1.125rem] font-semibold mb-2">$<span className="count-up" data-count="68.83"><CountUp
                                            end={68.83}
                                            start={0}
                                            duration={4.94}
                                        /></span>K</h4>
                                        <p className="text-[#8c9097] dark:text-white/50 text-[.6875rem] mb-0 leading-none">
                                            <span className="text-danger me-1 font-semibold">
                                                <i className="ri-arrow-down-s-line me-1 align-middle"></i>1.16%
                                            </span>
                                            <span>this month</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start p-6 border-b dark:border-defaultborder/10 border-dashed">
                                <div className="svg-icon-background bg-warning/10 !fill-warning me-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="svg-warning"><path d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z" /></svg>
                                </div>
                                <div className="flex-grow">
                                    <h6 className="mb-1 text-[0.75rem]">Pending Invoices
                                        <span className="badge bg-warning text-white font-semibold ltr:float-right rtl:float-left">
                                            7,064
                                        </span>
                                    </h6>
                                    <div>
                                        <h4 className="text-[1.125rem] font-semibold mb-2">$<span className="count-up" data-count="81.57"><CountUp
                                            end={81.57}
                                            start={0}
                                            duration={4.94}
                                        /></span>K</h4>
                                        <p className="text-[#8c9097] dark:text-white/50 text-[.6875rem] mb-0 leading-none">
                                            <span className="text-success me-1 font-semibold">
                                                <i className="ri-arrow-up-s-line me-1 align-middle"></i>0.25%
                                            </span>
                                            <span>this month</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-start p-6 border-b dark:border-defaultborder/10 border-dashed">
                                <div className="svg-icon-background !bg-light me-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="svg-dark dark:fill-white"><path d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z" /></svg>
                                </div>
                                <div className="flex-grow">
                                    <h6 className="mb-1 text-[0.75rem]">Overdue Invoices
                                        <span className="badge bg-light text-default font-semibold ltr:float-right rtl:float-left">
                                            1,105
                                        </span>
                                    </h6>
                                    <div>
                                        <h4 className="text-[1.125rem] font-semibold mb-2">$<span className="count-up" data-count="32.47"><CountUp
                                            end={32.47}
                                            start={0}
                                            duration={4.94}
                                        /></span>K</h4>
                                        <p className="text-[#8c9097] dark:text-white/50 text-[.6875rem] mb-0 leading-none">
                                            <span className="text-success me-1 font-semibFold">
                                                <i className="ri-arrow-down-s-line me-1 align-middle"></i>0.46%
                                            </span>
                                            <span>this month</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6">
                                <p className="text-[.9375rem] font-semibold">Invoice Stats <span className="text-[#8c9097] dark:text-white/50 font-normal">(Last 6 months) :</span></p>
                                <div id="invoice-list-stats">
                                    <InvoiceStats />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Invoicelist.layout = "Contentlayout"

export default Invoicelist