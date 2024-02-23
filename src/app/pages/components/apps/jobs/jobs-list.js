import { Joblistdata } from '@/shared/data/apps/jobs/joblistdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React, { Fragment } from 'react'

const Jobslist = () => {
    return (
        <Fragment>
            <Seo title={"Job List"} />
            <Pageheader currentpage="Job List" activepage="Jobs" mainpage="Job List" />
            <div className="grid grid-cols-12">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box  overflow-hidden">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                All Jobs List
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Link href="/components/apps/jobs/jobs-list/" className="ti-btn ti-btn-primary-full !py-1 !px-2 !text-[0.75rem]">
                                    <i className="ri-add-line  align-middle"></i>Post Job
                                </Link>
                                <div>
                                    <input className="form-control form-control-sm" type="text" placeholder="Search Here" aria-label=".form-control-sm example" />
                                </div>
                                <div className="hs-dropdown ti-dropdown">
                                    <Link href="#!" className="ti-btn ti-btn-primary-full !py-1 !px-2 !text-[0.75rem]" aria-expanded="false">
                                        Sort By<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                    </Link>
                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                        <li><Link className="ti-dropdown-item" href="#!">Posted Date</Link></li>
                                        <li><Link className="ti-dropdown-item" href="#!">Status</Link></li>
                                        <li><Link className="ti-dropdown-item" href="#!">Department</Link></li>
                                        <li><Link className="ti-dropdown-item" href="#!">Job Type</Link></li>
                                        <li><Link className="ti-dropdown-item" href="#!">Newest</Link></li>
                                        <li><Link className="ti-dropdown-item" href="#!">Oldest</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <div className="table-responsive">

                                <table className="table table-hover whitespace-nowrap min-w-full">
                                    <thead>
                                        <tr>
                                            <th scope="row" className="!ps-6"><input className="form-check-input" type="checkbox" id="checkboxNoLabeljob1" defaultValue="" aria-label="..." /></th>
                                            <th scope="col" className="text-start">Job Title</th>
                                            <th scope="col" className="text-start">Company</th>
                                            <th scope="col" className="text-start">Department</th>
                                            <th scope="col" className="text-start">Applications</th>
                                            <th scope="col" className="text-start">Vacancies</th>
                                            <th scope="col" className="text-start">Status</th>
                                            <th scope="col" className="text-start">Job Type</th>
                                            <th scope="col" className="text-start">Posted Date</th>
                                            <th scope="col" className="text-start">Expires on</th>
                                            <th scope="col" className="text-start">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Joblistdata.map((idx) => (
                                            <tr className="border-t hover:bg-gray-200 dark:hover:bg-light" key={Math.random()}>
                                                <td className="!ps-6">{idx.checked}</td>
                                                <td>
                                                    <div className="flex">
                                                        <span className={`avatar avatar-md !rounded-full bg-primary/10 !fill-primary`}><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="var(--primary-color)" d={idx.class2}></path></svg></span>
                                                        <div className="ms-2">
                                                            <p className="font-semibold mb-0 flex items-center"><Link href="/components/apps/jobs/job-details/">{idx.class}</Link></p>
                                                            <p className="text-[0.75rem] text-muted mb-0">{idx.class1}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="flex items-center">
                                                        <span className="avatar avatar-sm p-1 me-1 bg-light !rounded-full">
                                                            <img src={idx.src} alt="" />
                                                        </span>
                                                        <Link href="#!" className="font-semibold mb-0">{idx.text1}</Link>
                                                    </div>
                                                </td>
                                                <td>
                                                    {idx.text3}
                                                </td>
                                                <td>{idx.number}</td>
                                                <td>{idx.number1}</td>
                                                <td><span className={`badge !rounded-full bg-${idx.color1}/10 text-${idx.color1}`}>{idx.text}</span></td>
                                                <td>{idx.data}</td>
                                                <td>
                                                    {idx.data1}
                                                </td>
                                                <td><span className={`badge bg-${idx.color1}/10 text-${idx.color1}`}><i className="bi bi-clock me-1"></i>{idx.text2}</span></td>
                                                <td>
                                                    <Link aria-label="anchor" href="/components/apps/jobs/job-details/" className="ti-btn ti-btn-icon ti-btn-sm ti-btn-primary  me-2">
                                                        <i className="ri-eye-line"></i>
                                                    </Link>
                                                    <Link aria-label="anchor" href="#!" className="ti-btn ti-btn-icon ti-btn-sm ti-btn-info  me-2">
                                                        <i className="ri-edit-line"></i>
                                                    </Link>
                                                    <Link aria-label="anchor" href="#!" className="ti-btn ti-btn-icon ti-btn-sm ti-btn-danger">
                                                        <i className="ri-delete-bin-line"></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="box-footer border-t-0">
                            <div className="flex items-center flex-wrap overflow-auto">
                                <div className="mb-2 sm:mb-0">
                                    Showing <b>1</b> to <b>10</b> of <b>10</b> entries <i className="bi bi-arrow-right ms-2 font-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation">
                                        <ul className="ti-pagination  mb-0">
                                            <li className="page-item disabled"><Link className="page-link px-3 py-[0.375rem]" href="#!">Previous</Link></li>
                                            <li className="page-item"><Link className="page-link active px-3 py-[0.375rem]" href="#!">1</Link></li>
                                            <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">2</Link></li>
                                            <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">3</Link></li>
                                            <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">4</Link></li>
                                            <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">5</Link></li>
                                            <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">Next</Link></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Jobslist.layout = "Contentlayout"

export default Jobslist