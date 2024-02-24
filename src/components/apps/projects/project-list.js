import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import dynamic from 'next/dynamic';
import Link from 'next/link'
import React, { Fragment } from 'react';
const Select = dynamic(() => import("react-select"), { ssr: false });

const Projectlist = () => {

    const Optionsdata = [
        { value: 'Sort By', label: 'Sort By' },
        { value: 'Newest', label: 'Newest' },
        { value: 'Date Added', label: 'Date Added' },
        { value: 'A - Z', label: 'A - Z' },
        { value: 'Type', label: 'Type' },
    ];

    return (
        <Fragment>
            <Seo title={"Project List"} />
            <Pageheader currentpage="Project List" activepage="Projects" mainpage="Project List" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-body p-4">
                            <div className="flex items-center justify-between flex-wrap gap-4">
                                <div className="flex flex-wrap gap-1 newproject">
                                    <Link href="/components/apps/projects/create-project/" className="ti-btn ti-btn-primary-full me-2 !mb-0"><i className="ri-add-line me-1 font-semibold align-middle"></i>New Project</Link>
                                    <Select name="colors" options={Optionsdata} className="!w-40"
                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="Sort By"
                                    />
                                </div>
                                <div className="avatar-list-stacked">
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src="../../../../assets/images/faces/1.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src="../../../../assets/images/faces/2.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src="../../../../assets/images/faces/8.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src="../../../../assets/images/faces/12.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src="../../../../assets/images/faces/10.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src="../../../../assets/images/faces/4.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src="../../../../assets/images/faces/5.jpg" alt="img" />
                                    </span>
                                    <span className="avatar avatar-sm avatar-rounded">
                                        <img src="../../../../assets/images/faces/13.jpg" alt="img" />
                                    </span>
                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-white" href="#!">
                                        +8
                                    </Link>
                                </div>
                                <div className="flex" role="search">
                                    <input className="form-control me-2" type="search" placeholder="Search Project" aria-label="Search" />
                                    <button className="ti-btn ti-btn-light !mb-0" type="submit">Search</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-3 xl:col-span-4 md:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header items-center !justify-start flex-wrap !flex">
                            <div className="me-2">
                                <span className="avatar avatar-rounded p-1 bg-danger/10 text-danger">
                                    <img src="../../../../assets/images/company-logos/1.png" alt="" />
                                </span>
                            </div>
                            <div className="flex-grow">
                                <Link href="#!" className="font-semibold text-[.875rem] block text-truncate project-list-title">Design &amp; Developing New Project</Link>
                                <span className="text-[#8c9097] dark:text-white/50 block text-[0.75rem]">Total <strong className="text-defaulttextcolor">18/22</strong> tasks completed</span>
                            </div>
                            <div className="hs-dropdown ti-dropdown">
                                <Link aria-label="anchor" href="#!" className="ti-btn ti-btn-sm ti-btn-light !mb-0" aria-expanded="false">
                                    <i className="fe fe-more-vertical"></i>
                                </Link>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                    <li><Link className="ti-dropdown-item" href="#!"><i className="ri-eye-line align-middle me-1 inline-flex"></i>View</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!"><i className="ri-edit-line align-middle me-1 inline-flex"></i>Edit</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!"><i className="ri-delete-bin-line me-1 align-middle inline-flex"></i>Delete</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="flex items-center justify-between mb-3">
                                <div>
                                    <div className="font-semibold mb-1">Team :</div>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/2.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/8.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/2.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/10.jpg" alt="img" />
                                        </span>
                                        <Link className="avatar avatar-sm bg-primary avatar-rounded text-white" href="#!">
                                            +2
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="font-semibold mb-1">Priority :</div>
                                    <span className="badge bg-success/10 text-success">Low</span>
                                </div>
                            </div>
                            <div className="font-semibold mb-1">Description :</div>
                            <p className="text-[#8c9097] dark:text-white/50 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.</p>
                            <div className="font-semibold mb-1">Status :</div>
                            <div>
                                <div></div>
                                <div className="progress progress-xs progress-animate" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-primary w-4/5"></div>
                                </div>
                                <div className="mt-1"><span className="text-primary font-semibold">80%</span> Completed</div>
                            </div>
                        </div>
                        <div className="box-footer flex items-center justify-between">
                            <div>
                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem] block">Assigned Date :</span>
                                <span className="font-semibold block">24,May 2023</span>
                            </div>
                            <div className="text-end">
                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem] block">Due Date :</span>
                                <span className="font-semibold block">12,Jul 2023</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-4 md:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header items-center !justify-start flex-wrap !flex">
                            <div className="me-2">
                                <span className="avatar avatar-rounded p-1 bg-warning/10">
                                    <img src="../../../../assets/images/company-logos/2.png" alt="" />
                                </span>
                            </div>
                            <div className="flex-grow">
                                <Link href="#!" className="font-semibold text-[.875rem] block !truncate project-list-title">Content Management System (CMS) Integration</Link>
                                <span className="text-[#8c9097] dark:text-white/50 block text-[0.75rem]">Total <strong className="text-defaulttextcolor">26/68</strong> tasks completed</span>
                            </div>
                            <div className="hs-dropdown ti-dropdown">
                                <Link aria-label="anchor" href="#!" className="ti-btn ti-btn-sm ti-btn-light !mb-0" aria-expanded="false">
                                    <i className="fe fe-more-vertical"></i>
                                </Link>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                    <li><Link className="ti-dropdown-item" href="#!"><i className="ri-eye-line align-middle me-1 inline-flex"></i>View</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!"><i className="ri-edit-line align-middle me-1 inline-flex"></i>Edit</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!"><i className="ri-delete-bin-line me-1 align-middle inline-flex"></i>Delete</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="flex items-center justify-between mb-3">
                                <div>
                                    <div className="font-semibold mb-1">Team :</div>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/12.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/9.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/11.jpg" alt="img" />
                                        </span>
                                        <Link className="avatar avatar-sm bg-primary avatar-rounded text-white" href="#!">
                                            +4
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="font-semibold mb-1">Priority :</div>
                                    <span className="badge bg-info/10 text-info">Medium</span>
                                </div>
                            </div>
                            <div className="font-semibold mb-1">Description :</div>
                            <p className="text-[#8c9097] dark:text-white/50 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.</p>
                            <div className="font-semibold mb-1">Status :</div>
                            <div>
                                <div></div>
                                <div className="progress progress-xs progress-animate" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-primary w-[45%]"></div>
                                </div>
                                <div className="mt-1"><span className="text-primary font-semibold">45%</span> Completed</div>
                            </div>
                        </div>
                        <div className="box-footer flex items-center justify-between">
                            <div>
                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem] block">Assigned Date :</span>
                                <span className="font-semibold block">20,May 2023</span>
                            </div>
                            <div className="text-end">
                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem] block">Due Date :</span>
                                <span className="font-semibold block">10,Jun 2023</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-4 md:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header items-center !justify-start flex-wrap !flex">
                            <div className="me-2">
                                <span className="avatar avatar-rounded p-1 bg-secondary/10">
                                    <img src="../../../../assets/images/company-logos/3.png" alt="" />
                                </span>
                            </div>
                            <div className="flex-grow">
                                <Link href="#!" className="font-semibold text-[.875rem] block text-truncate project-list-title">Task Scheduler and Automation</Link>
                                <span className="text-[#8c9097] dark:text-white/50 block text-[0.75rem]">Total <strong className="text-default">21/45</strong> tasks completed</span>
                            </div>
                            <div className="hs-dropdown ti-dropdown">
                                <Link aria-label="anchor" href="#!" className="ti-btn ti-btn-sm ti-btn-light !mb-0" aria-expanded="false">
                                    <i className="fe fe-more-vertical"></i>
                                </Link>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                    <li><Link className="ti-dropdown-item" href="#!"><i className="ri-eye-line align-middle me-1 inline-flex"></i>View</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!"><i className="ri-edit-line align-middle me-1 inline-flex"></i>Edit</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!"><i className="ri-delete-bin-line me-1 align-middle inline-flex"></i>Delete</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="flex items-center justify-between mb-3">
                                <div>
                                    <div className="font-semibold mb-1">Team :</div>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/5.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/6.jpg" alt="img" />
                                        </span>
                                        <Link className="avatar avatar-sm bg-primary avatar-rounded text-white" href="#!">
                                            +1
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="font-semibold mb-1">Priority :</div>
                                    <span className="badge bg-success/10 text-success">Low</span>
                                </div>
                            </div>
                            <div className="font-semibold mb-1">Description :</div>
                            <p className="text-[#8c9097] dark:text-white/50 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.</p>
                            <div className="font-semibold mb-1">Status :</div>
                            <div>
                                <div></div>
                                <div className="progress progress-xs progress-animate" aria-valuenow="66" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-primary w-[66%]"></div>
                                </div>
                                <div className="mt-1"><span className="text-primary font-semibold">66%</span> Completed</div>
                            </div>
                        </div>
                        <div className="box-footer flex items-center justify-between">
                            <div>
                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem] block">Assigned Date :</span>
                                <span className="font-semibold block">31,May 2023</span>
                            </div>
                            <div className="text-end">
                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem] block">Due Date :</span>
                                <span className="font-semibold block">10,Jul 2023</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-4 md:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header items-center !justify-start flex-wrap !flex">
                            <div className="me-2">
                                <span className="avatar avatar-rounded p-1 bg-success/10 text-success">
                                    <img src="../../../../assets/images/company-logos/5.png" alt="" />
                                </span>
                            </div>
                            <div className="flex-grow">
                                <Link href="#!" className="font-semibold text-[.875rem] block text-truncate project-list-title">Advanced Search and Filtering</Link>
                                <span className="text-[#8c9097] dark:text-white/50 block text-[0.75rem]">Total <strong className="text-default">45/54</strong> tasks completed</span>
                            </div>
                            <div className="hs-dropdown ti-dropdown">
                                <Link aria-label="anchor" href="#!" className="ti-btn ti-btn-sm ti-btn-light !mb-0" aria-expanded="false">
                                    <i className="fe fe-more-vertical"></i>
                                </Link>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                    <li><Link className="ti-dropdown-item" href="#!"><i className="ri-eye-line align-middle me-1 inline-flex"></i>View</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!"><i className="ri-edit-line align-middle me-1 inline-flex"></i>Edit</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!"><i className="ri-delete-bin-line me-1 align-middle inline-flex"></i>Delete</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="flex items-center justify-between mb-3">
                                <div>
                                    <div className="font-semibold mb-1">Team :</div>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/3.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/9.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/12.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/11.jpg" alt="img" />
                                        </span>
                                        <Link className="avatar avatar-sm bg-primary avatar-rounded text-white" href="#!">
                                            +2
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="font-semibold mb-1">Priority :</div>
                                    <span className="badge bg-danger/10 text-danger">High</span>
                                </div>
                            </div>
                            <div className="font-semibold mb-1">Description :</div>
                            <p className="text-[#8c9097] dark:text-white/50 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.</p>
                            <div className="font-semibold mb-1">Status :</div>
                            <div>
                                <div></div>
                                <div className="progress progress-xs progress-animate" aria-valuenow="89" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-primary w-[89%]"></div>
                                </div>
                                <div className="mt-1"><span className="text-primary font-semibold">89%</span> Completed</div>
                            </div>
                        </div>
                        <div className="box-footer flex items-center justify-between">
                            <div>
                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem] block">Assigned Date :</span>
                                <span className="font-semibold block">02,Jun 2023</span>
                            </div>
                            <div className="text-end">
                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem] block">Due Date :</span>
                                <span className="font-semibold block">15,Jun 2023</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-4 md:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header items-center !justify-start flex-wrap !flex">
                            <div className="me-2">
                                <span className="avatar avatar-rounded p-1 bg-primary/10">
                                    <img src="../../../../assets/images/company-logos/8.png" alt="" />
                                </span>
                            </div>
                            <div className="flex-grow">
                                <Link href="#!" className="font-semibold text-[.875rem] block text-truncate project-list-title">Data Export and Reporting</Link>
                                <span className="text-[#8c9097] dark:text-white/50 block text-[0.75rem]">Total <strong className="text-default">14/26</strong> tasks completed</span>
                            </div>
                            <div className="hs-dropdown ti-dropdown">
                                <Link aria-label="anchor" href="#!" className="ti-btn ti-btn-sm ti-btn-light !mb-0" aria-expanded="false">
                                    <i className="fe fe-more-vertical"></i>
                                </Link>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                    <li><Link className="ti-dropdown-item" href="#!"><i className="ri-eye-line align-middle me-1 inline-flex"></i>View</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!"><i className="ri-edit-line align-middle me-1 inline-flex"></i>Edit</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!"><i className="ri-delete-bin-line me-1 align-middle inline-flex"></i>Delete</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="flex items-center justify-between mb-3">
                                <div>
                                    <div className="font-semibold mb-1">Team :</div>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/10.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/2.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/1.jpg" alt="img" />
                                        </span>
                                        <Link className="avatar avatar-sm bg-primary avatar-rounded text-white" href="#!">
                                            +1
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="font-semibold mb-1">Priority :</div>
                                    <span className="badge bg-info/10 text-info">Medium</span>
                                </div>
                            </div>
                            <div className="font-semibold mb-1">Description :</div>
                            <p className="text-[#8c9097] dark:text-white/50 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.</p>
                            <div className="font-semibold mb-1">Status :</div>
                            <div>
                                <div></div>
                                <div className="progress progress-xs progress-animate" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-primary w-3/5"></div>
                                </div>
                                <div className="mt-1"><span className="text-primary font-semibold">60%</span> Completed</div>
                            </div>
                        </div>
                        <div className="box-footer flex items-center justify-between">
                            <div>
                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem] block">Assigned Date :</span>
                                <span className="font-semibold block">29,May 2023</span>
                            </div>
                            <div className="text-end">
                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem] block">Due Date :</span>
                                <span className="font-semibold block">08,Jun 2023</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-4 md:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header items-center !justify-start flex-wrap !flex">
                            <div className="me-2">
                                <span className="avatar avatar-rounded p-1 bg-success/10 text-success">
                                    <img src="../../../../assets/images/company-logos/10.png" alt="" />
                                </span>
                            </div>
                            <div className="flex-grow">
                                <Link href="#!" className="font-semibold text-[.875rem] block text-truncate project-list-title">Activity Log and Audit Trail</Link>
                                <span className="text-[#8c9097] dark:text-white/50 block text-[0.75rem]">Total <strong className="text-default">28/64</strong> tasks completed</span>
                            </div>
                            <div className="hs-dropdown ti-dropdown">
                                <Link aria-label="anchor" href="#!" className="ti-btn ti-btn-sm ti-btn-light !mb-0" aria-expanded="false">
                                    <i className="fe fe-more-vertical"></i>
                                </Link>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                    <li><Link className="ti-dropdown-item" href="#!"><i className="ri-eye-line align-middle me-1 inline-flex"></i>View</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!"><i className="ri-edit-line align-middle me-1 inline-flex"></i>Edit</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!"><i className="ri-delete-bin-line me-1 align-middle inline-flex"></i>Delete</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="flex items-center justify-between mb-3">
                                <div>
                                    <div className="font-semibold mb-1">Team :</div>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/7.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/13.jpg" alt="img" />
                                        </span>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="font-semibold mb-1">Priority :</div>
                                    <span className="badge bg-success/10 text-success">Low</span>
                                </div>
                            </div>
                            <div className="font-semibold mb-1">Description :</div>
                            <p className="text-[#8c9097] dark:text-white/50 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.</p>
                            <div className="font-semibold mb-1">Status :</div>
                            <div>
                                <div></div>
                                <div className="progress progress-xs progress-animate" aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-primary w-[45%]"></div>
                                </div>
                                <div className="mt-1"><span className="text-primary font-semibold">45%</span> Completed</div>
                            </div>
                        </div>
                        <div className="box-footer flex items-center justify-between">
                            <div>
                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem] block">Assigned Date :</span>
                                <span className="font-semibold block">04,Jun 2023</span>
                            </div>
                            <div className="text-end">
                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem] block">Due Date :</span>
                                <span className="font-semibold block">15,Jun 2023</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-4 md:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header items-center !justify-start flex-wrap !flex">
                            <div className="me-2">
                                <span className="avatar avatar-rounded p-1 bg-info/10 text-info">
                                    <img src="../../../../assets/images/company-logos/9.png" alt="" />
                                </span>
                            </div>
                            <div className="flex-grow">
                                <Link href="#!" className="font-semibold text-[.875rem] block text-truncate project-list-title">Role-Based Access Control (RBAC) Implementation</Link>
                                <span className="text-[#8c9097] dark:text-white/50 block text-[0.75rem]">Total <strong className="text-default">86/122</strong> tasks completed</span>
                            </div>
                            <div className="hs-dropdown ti-dropdown">
                                <Link aria-label="anchor" href="#!" className="ti-btn ti-btn-sm ti-btn-light !mb-0" aria-expanded="false">
                                    <i className="fe fe-more-vertical"></i>
                                </Link>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                    <li><Link className="ti-dropdown-item" href="#!"><i className="ri-eye-line align-middle me-1 inline-flex"></i>View</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!"><i className="ri-edit-line align-middle me-1 inline-flex"></i>Edit</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!"><i className="ri-delete-bin-line me-1 align-middle inline-flex"></i>Delete</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="flex items-center justify-between mb-3">
                                <div>
                                    <div className="font-semibold mb-1">Team :</div>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/5.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/14.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/15.jpg" alt="img" />
                                        </span>
                                        <Link className="avatar avatar-sm bg-primary avatar-rounded text-white" href="#!">
                                            +2
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="font-semibold mb-1">Priority :</div>
                                    <span className="badge bg-danger/10 text-danger">High</span>
                                </div>
                            </div>
                            <div className="font-semibold mb-1">Description :</div>
                            <p className="text-[#8c9097] dark:text-white/50 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.</p>
                            <div className="font-semibold mb-1">Status :</div>
                            <div>
                                <div></div>
                                <div className="progress progress-xs progress-animate" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-primary w-[65%]"></div>
                                </div>
                                <div className="mt-1"><span className="text-primary font-semibold">65%</span> Completed</div>
                            </div>
                        </div>
                        <div className="box-footer flex items-center justify-between">
                            <div>
                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem] block">Assigned Date :</span>
                                <span className="font-semibold block">24,Jun 2023</span>
                            </div>
                            <div className="text-end">
                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem] block">Due Date :</span>
                                <span className="font-semibold block">05,Jul 2023</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-4 md:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header items-center !justify-start flex-wrap !flex">
                            <div className="me-2">
                                <span className="avatar avatar-rounded p-1 bg-teal/10">
                                    <img src="../../../../assets/images/company-logos/6.png" alt="" />
                                </span>
                            </div>
                            <div className="flex-grow">
                                <Link href="#!" className="font-semibold text-[.875rem] block text-truncate project-list-title">Customizable Themes and Layouts</Link>
                                <span className="text-[#8c9097] dark:text-white/50 block text-[0.75rem]">Total <strong className="text-default">20/26</strong> tasks completed</span>
                            </div>
                            <div className="hs-dropdown ti-dropdown">
                                <Link aria-label="anchor" href="#!" className="ti-btn ti-btn-sm ti-btn-light !mb-0" aria-expanded="false">
                                    <i className="fe fe-more-vertical"></i>
                                </Link>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                    <li><Link className="ti-dropdown-item" href="#!"><i className="ri-eye-line align-middle me-1 inline-flex"></i>View</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!"><i className="ri-edit-line align-middle me-1 inline-flex"></i>Edit</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!"><i className="ri-delete-bin-line me-1 align-middle inline-flex"></i>Delete</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="flex items-center justify-between mb-3">
                                <div>
                                    <div className="font-semibold mb-1">Team :</div>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/13.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/16.jpg" alt="img" />
                                        </span>
                                        <Link className="avatar avatar-sm bg-primary avatar-rounded text-white" href="#!">
                                            +2
                                        </Link>
                                    </div>
                                </div>
                                <div className="text-end">
                                    <div className="font-semibold mb-1">Priority :</div>
                                    <span className="badge bg-info/10 text-info">Medium</span>
                                </div>
                            </div>
                            <div className="font-semibold mb-1">Description :</div>
                            <p className="text-[#8c9097] dark:text-white/50 mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi maiores similique tempore.</p>
                            <div className="font-semibold mb-1">Status :</div>
                            <div>
                                <div></div>
                                <div className="progress progress-xs progress-animate" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                                    <div className="progress-bar bg-primary w-3/4"></div>
                                </div>
                                <div className="mt-1"><span className="text-primary font-semibold">75%</span> Completed</div>
                            </div>
                        </div>
                        <div className="box-footer flex items-center justify-between">
                            <div>
                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem] block">Assigned Date :</span>
                                <span className="font-semibold block">20,Jun 2023</span>
                            </div>
                            <div className="text-end">
                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem] block">Due Date :</span>
                                <span className="font-semibold block">18,Jul 2023</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <nav aria-label="Page navigation">
                <ul className="ti-pagination ltr:float-right rtl:float-left mb-4">
                    <li className="page-item disabled"><Link className="page-link px-3 py-[0.375rem]" href="#!">Previous</Link></li>
                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">1</Link></li>
                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">2</Link></li>
                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">Next</Link></li>
                </ul>
            </nav>
        </Fragment>
    )
}
Projectlist.layout = "Contentlayout"

export default Projectlist