import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
const Select = dynamic(() => import("react-select"), { ssr: false });

const Searchcompany = () => {

    const [selected1, setSelected1] = useState([]);
    const Data = [
        { value: 'All Categories', label: 'All Categories' },
        { value: 'Software Dveloper', label: 'Software Dveloper' },
        { value: 'Web Developer', label: 'Web Developer' },
        { value: 'Software Architect', label: 'Software Architect' },
        { value: 'IT Hardware', label: 'IT Hardware' },
        { value: 'Network Engineer', label: 'Network Engineer' },
        { value: 'React Developer', label: 'React Developer' },
    ];
    return (
        <Fragment>
            <Seo title={"Search Company"} />
            <Pageheader currentpage="Search Company" activepage="Jobs" mainpage="Search Company" />
            <div className="container">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-3 lg:col-span-5 col-span-12">
                        <div className="box custom-box products-navigation-box">
                            <div className="box-body !p-0">
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Industry Type</h6>
                                    <div className="px-0 py-4 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" value="" id="c-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="c-1">
                                                R &amp; D
                                            </label>
                                            <span className="badge bg-light text-defaulttextcolor  ltr:float-right rtl:float-left">2,712</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" value="" id="c-2" />
                                            <label className="form-check-label" htmlFor="c-2">
                                                Accounting
                                            </label>
                                            <span className="badge bg-light text-defaulttextcolor  ltr:float-right rtl:float-left">536</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" value="" id="c-3" defaultChecked />
                                            <label className="form-check-label" htmlFor="c-3">
                                                Business Process
                                            </label>
                                            <span className="badge bg-light text-defaulttextcolor  ltr:float-right rtl:float-left">18,289</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" value="" id="c-4" defaultChecked />
                                            <label className="form-check-label" htmlFor="c-4">
                                                Consulting
                                            </label>
                                            <span className="badge bg-light text-defaulttextcolor  ltr:float-right rtl:float-left">3,453</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" value="" id="c-5" />
                                            <label className="form-check-label" htmlFor="c-5">
                                                Administrative Support
                                            </label>
                                            <span className="badge bg-light text-defaulttextcolor  ltr:float-right rtl:float-left">7,165</span>
                                        </div>
                                        <div id="hs-show-hide-industry-heading"
                                            className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                                            aria-labelledby="hs-show-hide-indudtry">
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" value="" id="c-8" />
                                                <label className="form-check-label" htmlFor="c-5">
                                                    Human Resources
                                                </label>
                                                <span className="badge bg-light text-defaulttextcolor  ltr:float-right rtl:float-left">7,165</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" value="" id="c-9" />
                                                <label className="form-check-label" htmlFor="c-5">
                                                    Marketing
                                                </label>
                                                <span className="badge bg-light text-defaulttextcolor  ltr:float-right rtl:float-left">7,165</span>
                                            </div>
                                        </div>
                                        <Link className="ecommerce-more-link text-success hs-collapse-toggle inline-flex items-center gap-x-2"
                                            href="#!" id="hs-show-hide-industry"
                                            data-hs-collapse="#hs-show-hide-industry-heading">
                                            <span className="hs-collapse-open:hidden">MORE</span>
                                            <span className="hs-collapse-open:block hidden">MORE</span>
                                            <svg className="hs-collapse-open:rotate-180 w-2.5 h-2.5" width="16"
                                                height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Location</h6>
                                    <div className="px-0 py-4 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" value="" id="available-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="available-1">
                                                Hyderabad
                                            </label>
                                            <span className="badge bg-light text-default  ltr:float-right rtl:float-left">512</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" value="" id="available-2" />
                                            <label className="form-check-label" htmlFor="available-2">
                                                Banglore
                                            </label>
                                            <span className="badge bg-light text-default  ltr:float-right rtl:float-left">2,186</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" value="" id="available-3" />
                                            <label className="form-check-label" htmlFor="available-3">
                                                Chennai
                                            </label>
                                            <span className="badge bg-light text-default  ltr:float-right rtl:float-left">734</span>
                                        </div>
                                        <div id="hs-show-hide-location-heading"
                                            className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                                            aria-labelledby="hs-show-hide-location">
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" value="" id="c-6" />
                                                <label className="form-check-label" htmlFor="c-6">
                                                    Pune
                                                </label>
                                                <span className="badge bg-light text-default  ltr:float-right rtl:float-left">5,964</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" value="" id="c-7" />
                                                <label className="form-check-label" htmlFor="c-7">
                                                    USA
                                                </label>
                                                <span className="badge bg-light text-default  ltr:float-right rtl:float-left">2,123</span>
                                            </div>
                                        </div>
                                        <Link className="ecommerce-more-link text-success hs-collapse-toggle inline-flex items-center gap-x-2"
                                            href="#!" id="hs-show-hide-location"
                                            data-hs-collapse="#hs-show-hide-location-heading">
                                            <span className="hs-collapse-open:hidden">MORE</span>
                                            <span className="hs-collapse-open:block hidden">MORE</span>
                                            <svg className="hs-collapse-open:rotate-180 w-2.5 h-2.5" width="16"
                                                height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Company Size</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" value="" id="bond-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="bond-1">
                                                0-50
                                            </label>
                                            <span className="badge bg-light text-default  ltr:float-right rtl:float-left">145</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" value="" id="bond-2" />
                                            <label className="form-check-label" htmlFor="bond-2">
                                                50 - 100
                                            </label>
                                            <span className="badge bg-light text-default  ltr:float-right rtl:float-left">432</span>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" value="" id="bond-3" />
                                            <label className="form-check-label" htmlFor="bond-3">
                                                100 - 150
                                            </label>
                                            <span className="badge bg-light text-default  ltr:float-right rtl:float-left">123</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Recruiter Type</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" value="" id="Recruiter-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="Recruiter-1">
                                                Direct Company
                                            </label>
                                            <span className="badge bg-light text-default  ltr:float-right rtl:float-left">13</span>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" value="" id="Recruiter-2" />
                                            <label className="form-check-label" htmlFor="Recruiter-2">
                                                Agency
                                            </label>
                                            <span className="badge bg-light text-default  ltr:float-right rtl:float-left">67</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Job Vacancies</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" value="" id="vacancies-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="vacancies-1">
                                                0 -10
                                            </label>
                                            <span className="badge bg-light text-default  ltr:float-right rtl:float-left">13</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" value="" id="vacancies-2" />
                                            <label className="form-check-label" htmlFor="vacancies-2">
                                                10 - 20
                                            </label>
                                            <span className="badge bg-light text-default  ltr:float-right rtl:float-left">67</span>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" value="" id="vacancies-3" />
                                            <label className="form-check-label" htmlFor="vacancies-2">
                                                20 +above
                                            </label>
                                            <span className="badge bg-light text-default  ltr:float-right rtl:float-left">67</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Type of Employement</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" value="" id="j-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="j-1">
                                                Full Time
                                            </label>
                                            <span className="badge bg-light text-default  ltr:float-right rtl:float-left">512</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" value="" id="j-2" defaultChecked />
                                            <label className="form-check-label" htmlFor="j-2">
                                                Part Time
                                            </label>
                                            <span className="badge bg-light text-default  ltr:float-right rtl:float-left">2,186</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" value="" id="j-3" defaultChecked />
                                            <label className="form-check-label" htmlFor="j-3">
                                                Internship
                                            </label>
                                            <span className="badge bg-light text-default  ltr:float-right rtl:float-left">734</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" value="" id="j-4" />
                                            <label className="form-check-label" htmlFor="j-4">
                                                Freelancer
                                            </label>
                                            <span className="badge bg-light text-default  ltr:float-right rtl:float-left">16</span>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input me-2 focus:!shadow-none focus:!ring-0 focus:!ring-offset-0" type="checkbox" value="" id="j-5" />
                                            <label className="form-check-label" htmlFor="j-5">
                                                Remote Job
                                            </label>
                                            <span className="badge bg-light text-default  ltr:float-right rtl:float-left">1,432</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-9 lg:col-span-7 col-span-12">
                        <div className="grid grid-cols-12 align-center mb-4">
                            <div className="lg:col-span-12 col-span-12">
                                <div className="inline-flex !w-full companies-search-input">
                                    <input type="text" className="form-control !rounded-e-none !border-e-0" aria-label="Text input with segmented dropdown button" placeholder="Enter your keyword here" />
                                    <Select name="colors" options={Data} className="search-company ti-form-select !p-0 !rounded-s-none"
                                        menuPlacement='auto' classNamePrefix="Select2" />
                                    <input type="text" className="form-control !rounded-none" aria-label="Text input with segmented dropdown button" placeholder="Search by location" />
                                    <button aria-label="button" type="button" className="ti-btn !mb-0 ti-btn-primary-full !rounded-s-none"><i className="ri-search-line"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box">
                            <div className="box-body">
                                <div className="flex items-center flex-wrap gap-2">
                                    <h5 className="font-semibold mb-0 flex-grow">1287 <span className="font-normal text-[1.125rem]">Companies match for your search</span> </h5>
                                    <div className="btn-group hs-dropdown ti-dropdown">
                                        <button className="ti-btn ti-btn-outline-light border dark:!border-defaultborder/10 dropdown-toggle dark:hover:!bg-light" type="button" aria-expanded="false">
                                            Sort By <i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                        </button>
                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                            <li><Link className="ti-dropdown-item" href="#!">Premium</Link></li>
                                            <li><Link className="ti-dropdown-item" href="#!">Newest</Link></li>
                                            <li><Link className="ti-dropdown-item" href="#!">Most Relevant</Link></li>
                                            <li><Link className="ti-dropdown-item" href="#!">Fresher</Link></li>
                                            <li><Link className="ti-dropdown-item" href="#!">Experienced</Link></li>
                                            <li><Link className="ti-dropdown-item" href="#!">Bond Agreement</Link></li>
                                            <li><Link className="ti-dropdown-item" href="#!">Flexible Shift</Link></li>
                                            <li><Link className="ti-dropdown-item" href="#!">Day Shift</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box">
                            <div className="box-body">
                                <div className="btn-list ltr:float-right rtl:float-left">
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar !rounded-full bg-light !text-defaulttextcolor avatar-sm">
                                            <span><i className="bi bi-heart"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Add to Whislist
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center flex-wrap gap-2">
                                    <span className="avatar avatar-xl bg-white dark:bg-bodybg shadow-sm border dark:border-defaultborder/10 p-2 !rounded-full">
                                        <img src="../../../../assets/images/company-logos/1.png" alt="" />
                                    </span>
                                    <div className="ms-2">
                                        <h5 className="font-semibold mb-0 flex items-center"><Link href="/components/pages/profile/"> Spotech Technical Solutions <i className="bi bi-check-circle-fill text-success text-base" title="Verified company"></i></Link></h5>
                                        <div className="flex gap-2">
                                            <Link href="#!"><i className="bi bi-geo-alt text-[0.6875rem]"></i> Kondapur, Hyderabad, </Link>
                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">Establishment year - 2019</p>
                                        </div>
                                        <div className="flex items-center text-[0.74rem] text-[#8c9097] dark:text-white/50">
                                            <p className="text-[0.75rem] mb-0">Ratings : </p>
                                            <div className="min-w-fit ms-2">
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                            </div>
                                            <Link href="#!" className="ms-1 min-w-fit text-[#8c9097] dark:text-white/50">
                                                <span>(142)</span>
                                                <span>Ratings</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="flex items-center flex-wrap gap-2">
                                    <div className="flex-grow">
                                        <Link href="#!" className="badge  me-2 badge-md !rounded-full bg-info/10 text-info" title="No of employees"><i className="bi bi-people me-1"></i>No. of Emp : 345</Link>
                                        <Link href="#!" className="badge badge-md !rounded-full bg-primary/10 text-primary"><i className="bi bi-briefcase me-1"></i>Vacancies : 50</Link>
                                    </div>
                                    <Link href="#!" className="ti-btn btn-wave ti-btn-primary-full">
                                        View Profile <i className="ri-arrow-right-line"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box">
                            <div className="box-body">
                                <div className="btn-list ltr:float-right rtl:float-left">
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar !rounded-full bg-light !text-defaulttextcolor avatar-sm">
                                            <span><i className="bi bi-heart"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Add to Whislist
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center flex-wrap gap-2">
                                    <span className="avatar avatar-xl bg-white dark:bg-bodybg  shadow-sm border dark:border-defaultborder/10 p-2 !rounded-full">
                                        <img src="../../../../assets/images/company-logos/2.png" alt="" />
                                    </span>
                                    <div className="ms-2">
                                        <h5 className="font-semibold mb-0 flex items-center"><Link href="/components/pages/profile/"> G Technical Solutions <i className="bi bi-check-circle-fill text-success text-base" title="Verified company"></i></Link></h5>
                                        <div className="flex gap-2">
                                            <Link href="#!"><i className="bi bi-geo-alt text-[0.6875rem]"></i> Gachibowli, Hyderabad, </Link>
                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">Establishment year - 2015</p>
                                        </div>
                                        <div className="flex items-center text-[0.75rem] text-[#8c9097] dark:text-white/50">
                                            <p className="text-[0.75rem] mb-0">Ratings : </p>
                                            <div className="min-w-fit ms-2">
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star"></i></span>
                                            </div>
                                            <Link href="#!" className="ms-1 min-w-fit text-[#8c9097] dark:text-white/50">
                                                <span>(134)</span>
                                                <span>Ratings</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="flex items-center flex-wrap gap-2">
                                    <div className="flex-grow">
                                        <Link href="#!" className="badge  me-2 badge-md !rounded-full bg-info/10 text-info" title="No of employees"><i className="bi bi-people me-1"></i>No. of Emp : 345</Link>
                                        <Link href="#!" className="badge badge-md !rounded-full bg-primary/10 text-primary"><i className="bi bi-briefcase me-1"></i>Vacancies : 50</Link>
                                    </div>
                                    <Link href="#!" className="ti-btn btn-wave ti-btn-primary-full">
                                        View Profile <i className="ri-arrow-right-line"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box">
                            <div className="box-body">
                                <div className="btn-list ltr:float-right rtl:float-left">
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar !rounded-full bg-light !text-defaulttextcolor avatar-sm">
                                            <span><i className="bi bi-heart"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Add to Whislist
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center flex-wrap gap-2">
                                    <span className="avatar avatar-xl bg-white dark:bg-bodybg  shadow-sm border dark:border-defaultborder/10 p-2 !rounded-full">
                                        <img src="../../../../assets/images/company-logos/3.png" alt="" />
                                    </span>
                                    <div className="ms-2">
                                        <h5 className="font-semibold mb-0 flex items-center"><Link href="/components/pages/profile/"> Diego Technical Solutions <i className="bi bi-check-circle-fill text-success text-base" title="Verified company"></i></Link></h5>
                                        <div className="flex gap-2">
                                            <Link href="#!"><i className="bi bi-geo-alt text-[0.6875rem]"></i> Gachibowli, Chennai, </Link>
                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">Establishment year - 2013</p>
                                        </div>
                                        <div className="flex items-center text-[0.75rem] text-[#8c9097] dark:text-white/50">
                                            <p className="text-[0.75rem] mb-0">Ratings : </p>
                                            <div className="min-w-fit ms-2">
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star"></i></span>
                                            </div>
                                            <Link href="#!" className="ms-1 min-w-fit text-[#8c9097] dark:text-white/50">
                                                <span>(234)</span>
                                                <span>Ratings</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="flex items-center flex-wrap gap-2">
                                    <div className="flex-grow">
                                        <Link href="#!" className="badge  me-2 badge-md !rounded-full bg-info/10 text-info" title="No of employees"><i className="bi bi-people me-1"></i>No. of Emp : 345</Link>
                                        <Link href="#!" className="badge badge-md !rounded-full bg-primary/10 text-primary"><i className="bi bi-briefcase me-1"></i>Vacancies : 50</Link>
                                    </div>
                                    <Link href="#!" className="ti-btn btn-wave ti-btn-primary-full">
                                        View Profile <i className="ri-arrow-right-line"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box">
                            <div className="box-body">
                                <div className="btn-list ltr:float-right rtl:float-left">
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar !rounded-full bg-light !text-defaulttextcolor avatar-sm">
                                            <span><i className="bi bi-heart"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Add to Whislist
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center flex-wrap gap-2">
                                    <span className="avatar avatar-xl bg-white dark:bg-bodybg  shadow-sm border dark:border-defaultborder/10 p-2 !rounded-full">
                                        <img src="../../../../assets/images/company-logos/7.png" alt="" />
                                    </span>
                                    <div className="ms-2">
                                        <h5 className="font-semibold mb-0 flex items-center"><Link href="/components/pages/profile/"> Spoteck Solutions Pvt Ltd <i className="bi bi-check-circle-fill text-success text-base" title="Verified company"></i></Link></h5>
                                        <div className="flex gap-2">
                                            <Link href="#!"><i className="bi bi-geo-alt text-[0.6875rem]"></i> Gachibowli, Banglore, </Link>
                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">Establishment year - 2002</p>
                                        </div>
                                        <div className="flex items-center text-[0.75rem] text-[#8c9097] dark:text-white/50">
                                            <p className="text-[0.75rem] mb-0">Ratings : </p>
                                            <div className="min-w-fit ms-2">
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                            </div>
                                            <Link href="#!" className="ms-1 min-w-fit text-[#8c9097] dark:text-white/50">
                                                <span>(239)</span>
                                                <span>Ratings</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="flex items-center flex-wrap gap-2">
                                    <div className="flex-grow">
                                        <Link href="#!" className="badge  me-2 badge-md !rounded-full bg-info/10 text-info" title="No of employees"><i className="bi bi-people me-1"></i>No. of Emp : 345</Link>
                                        <Link href="#!" className="badge badge-md !rounded-full bg-primary/10 text-primary"><i className="bi bi-briefcase me-1"></i>Vacancies : 50</Link>
                                    </div>
                                    <Link href="#!" className="ti-btn btn-wave ti-btn-primary-full">
                                        View Profile <i className="ri-arrow-right-line"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box">
                            <div className="box-body">
                                <div className="btn-list ltr:float-right rtl:float-left">
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar !rounded-full bg-light !text-defaulttextcolor avatar-sm   me-2">
                                            <span><i className="bi bi-heart"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Add to Whislist
                                            </span>
                                        </button>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar !rounded-full bg-light !text-defaulttextcolor avatar-sm">
                                            <span><i className="bi bi-share"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Share this Company
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center flex-wrap gap-2">
                                    <span className="avatar avatar-xl bg-white dark:bg-bodybg  shadow-sm border dark:border-defaultborder/10 p-2 !rounded-full">
                                        <img src="../../../../assets/images/company-logos/5.png" alt="" />
                                    </span>
                                    <div className="ms-2">
                                        <h5 className="font-semibold mb-0 flex items-center"><Link href="/components/pages/profile/"> Vehement Capital Partners <i className="bi bi-check-circle-fill text-success text-base" title="Verified company"></i></Link></h5>
                                        <div className="flex gap-2">
                                            <Link href="#!"><i className="bi bi-geo-alt text-[0.6875rem]"></i> Gachibowli, Banglore, </Link>
                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">Establishment year - 2017</p>
                                        </div>
                                        <div className="flex items-center text-[0.75rem] text-[#8c9097] dark:text-white/50">
                                            <p className="text-[0.75rem] mb-0">Ratings : </p>
                                            <div className="min-w-fit ms-2">
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                            </div>
                                            <Link href="#!" className="ms-1 min-w-fit text-[#8c9097] dark:text-white/50">
                                                <span>(239)</span>
                                                <span>Ratings</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="flex items-center flex-wrap gap-2">
                                    <div className="flex-grow">
                                        <Link href="#!" className="badge me-2 badge-md !rounded-full bg-info/10 text-info" title="No of employees"><i className="bi bi-people me-1"></i>No. of Emp : 345</Link>
                                        <Link href="#!" className="badge badge-md !rounded-full bg-primary/10 text-primary"><i className="bi bi-briefcase me-1"></i>Vacancies : 50</Link>
                                    </div>
                                    <Link href="#!" className="ti-btn btn-wave ti-btn-primary-full">
                                        View Profile <i className="ri-arrow-right-line"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box">
                            <div className="box-body">
                                <div className="btn-list ltr:float-right rtl:float-left">
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar !rounded-full bg-light !text-defaulttextcolor avatar-sm  me-2">
                                            <span><i className="bi bi-heart"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Add to Whislist
                                            </span>
                                        </button>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar !rounded-full bg-light !text-defaulttextcolor avatar-sm">
                                            <span><i className="bi bi-share"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Share this Company
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex items-center flex-wrap gap-2">
                                    <span className="avatar avatar-xl bg-white dark:bg-bodybg  shadow-sm border dark:border-defaultborder/10 p-2 !rounded-full">
                                        <img src="../../../../assets/images/company-logos/6.png" alt="" />
                                    </span>
                                    <div className="ms-2">
                                        <h5 className="font-semibold mb-0 flex items-center"><Link href="/components/pages/profile/"> Wonka Industries <i className="bi bi-check-circle-fill text-success text-base" title="Verified company"></i></Link></h5>
                                        <div className="flex gap-2">
                                            <Link href="#!"><i className="bi bi-geo-alt text-[0.6875rem]"></i> Kukatpally, Hyderabad, </Link>
                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">Establishment year - 2000</p>
                                        </div>
                                        <div className="flex items-center text-[0.75rem] text-[#8c9097] dark:text-white/50">
                                            <p className="text-[0.75rem] mb-0">Ratings : </p>
                                            <div className="min-w-fit ms-2">
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                            </div>
                                            <Link href="#!" className="ms-1 min-w-fit text-[#8c9097] dark:text-white/50">
                                                <span>(764)</span>
                                                <span>Ratings</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="flex items-center flex-wrap gap-2">
                                    <div className="flex-grow">
                                        <Link href="#!" className="badge  me-2 badge-md !rounded-full bg-info/10 text-info" title="No of employees"><i className="bi bi-people me-1"></i>No. of Emp : 345</Link>
                                        <Link href="#!" className="badge badge-md !rounded-full bg-primary/10 text-primary"><i className="bi bi-briefcase me-1"></i>Vacancies : 50</Link>
                                    </div>
                                    <Link href="#!" className="ti-btn btn-wave ti-btn-primary-full">
                                        View Profile <i className="ri-arrow-right-line"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <nav aria-label="Page navigation">
                            <ul className="ti-pagination ltr:float-right rtl:float-left  mb-4">
                                <li className="page-item disabled"><Link className="page-link px-3 py-[0.375rem]" href="#!">Previous</Link></li>
                                <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">1</Link></li>
                                <li className="page-item"><Link className="page-link active px-3 py-[0.375rem]" href="#!">2</Link></li>
                                <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">3</Link></li>
                                <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">Next</Link></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Searchcompany.layout = "Contentlayout"

export default Searchcompany