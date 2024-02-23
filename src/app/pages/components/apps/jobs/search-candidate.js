import LabeledTwoThumbs1 from '@/shared/data/apps/jobs/searchcandidatedata';
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { Fragment } from 'react';
import { connect } from 'react-redux';
const Select = dynamic(() => import("react-select"), { ssr: false });

const Searchcandidate = ({ local_varaiable }) => {

    const Data = [
        { value: 'All Categories', label: 'All Categories' },
        { value: 'Software Dveloper', label: 'Software Dveloper' },
        { value: 'Web Developer', label: 'Web Developer' },
        { value: 'Software Architect', label: 'Software Architect' },
        { value: 'IT Hardware', label: 'IT Hardware' },
        { value: 'Network Engineer', label: 'Network Engineer' },
        { value: 'React Developer', label: 'React Developer' },
    ];
    const Data2 = [
        { value: 'Fresher', label: 'Fresher' },
        { value: '1 Year Exp', label: '1 Year Exp' },
        { value: '2 Year Exp', label: '2 Year Exp' },
        { value: '3 Year Exp', label: '3 Year Exp' },
        { value: '4 Year Exp', label: '4 Year Exp' },
        { value: '5+ Year Exp', label: '5+ Year Exp' },
    ];

    return (
        <Fragment>
            <Seo title={"Search Candidate"} />
            <Pageheader currentpage="Search Candidate" activepage="Jobs" mainpage="Search Candidate" />
            <div className="container">
                <div className="grid grid-cols-12 gap-6">
                    <div className="xxl:col-span-3 xl:col-span-4 col-span-12">
                        <div className="box custom-box products-navigation-box">
                            <div className="box-body !p-0">
                                <div className="!p-6 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Categories</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="" id="c-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="c-1">
                                                R &amp; D
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">2,712</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="c-2" />
                                            <label className="form-check-label" htmlFor="c-2">
                                                Accounting
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">536</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="c-3" defaultChecked />
                                            <label className="form-check-label" htmlFor="c-3">
                                                Business Process
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">18,289</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="c-4" defaultChecked />
                                            <label className="form-check-label" htmlFor="c-4">
                                                Consulting
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">3,453</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="c-5" />
                                            <label className="form-check-label" htmlFor="c-5">
                                                Administrative Support
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">7,165</span>
                                        </div>
                                        <div id="hs-show-hide-categeories-heading"
                                            className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                                            aria-labelledby="hs-show-hide-categeories">
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="c-6" />
                                                <label className="form-check-label" htmlFor="c-6">
                                                    Human Resources
                                                </label>
                                                <span className="badge bg-light me-1 text-defaulttextcolor  ltr:float-right rtl:float-left">7,165</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="c-7" />
                                                <label className="form-check-label" htmlFor="c-7">
                                                    Marketing
                                                </label>
                                                <span className="badge bg-light me-1 text-defaulttextcolor  ltr:float-right rtl:float-left">7,165</span>
                                            </div>
                                        </div>
                                        <Link className="ecommerce-more-link text-success hs-collapse-toggle inline-flex items-center gap-x-2"
                                            href="#!" id="hs-show-hide-categeories"
                                            data-hs-collapse="#hs-show-hide-categeories-heading">
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
                                    <h6 className="font-semibold mb-0">Availability</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="available-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="available-1">
                                                Immediate
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">512</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="available-2" />
                                            <label className="form-check-label" htmlFor="available-2">
                                                30 Days
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">2,186</span>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="available-3" />
                                            <label className="form-check-label" htmlFor="available-3">
                                                3 Months
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">734</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Bond Agreement</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="bond-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="bond-1">
                                                1 Year
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">512</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="bond-2" />
                                            <label className="form-check-label" htmlFor="bond-2">
                                                2 Years
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">512</span>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="bond-3" />
                                            <label className="form-check-label" htmlFor="bond-3">
                                                3 Years
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">512</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Languages</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="languages-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="languages-1">
                                                English
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">13</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="languages-2" />
                                            <label className="form-check-label" htmlFor="languages-2">
                                                Hindi
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">67</span>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="languages-3" />
                                            <label className="form-check-label" htmlFor="languages-3">
                                                Telugu
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">58</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Job Type</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="j-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="j-1">
                                                Full Time
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">512</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="j-2" defaultChecked />
                                            <label className="form-check-label" htmlFor="j-2">
                                                Part Time
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">2,186</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="j-3" defaultChecked />
                                            <label className="form-check-label" htmlFor="j-3">
                                                Internship
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">734</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="j-4" />
                                            <label className="form-check-label" htmlFor="j-4">
                                                Freelancer
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">16</span>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="j-5" />
                                            <label className="form-check-label" htmlFor="j-5">
                                                Remote Job
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">1,432</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Salary Range</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <LabeledTwoThumbs1 rtl={local_varaiable.dir == 'rtl'} />
                                        <div className="flex mt-4">
                                            <div className="font-semibold h6 mb-0">$<span id="lower-value">8000.00</span></div> &nbsp; -- &nbsp; <div className="font-semibold h6 mb-0">$<span id="upper-value">40000.00</span></div> </div>
                                    </div>
                                </div>
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Qualification</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="q-1" />
                                            <label className="form-check-label" htmlFor="q-1">
                                                All Education Levels
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">16,563</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="q-2" defaultChecked />
                                            <label className="form-check-label" htmlFor="q-2">
                                                10th Pass and Above
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">15,234</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="q-3" />
                                            <label className="form-check-label" htmlFor="q-3">
                                                12th Pass and Above
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">6,278</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="q-4" defaultChecked />
                                            <label className="form-check-label" htmlFor="q-4">
                                                Diploma and Graduate
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">4,531</span>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="q-5" />
                                            <label className="form-check-label" htmlFor="q-5">
                                                Post Graduate
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">2,405</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Experience</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="e-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="e-1">
                                                Fresher
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">23,156</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="e-2" />
                                            <label className="form-check-label" htmlFor="e-2">
                                                Less than 1 year
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">15,632</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="e-3" defaultChecked />
                                            <label className="form-check-label" htmlFor="e-3">
                                                Less than 2 year
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">15,032</span>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="e-4" defaultChecked />
                                            <label className="form-check-label" htmlFor="e-4">
                                                More than 3 years
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">7,154</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h6 className="font-semibold mb-0">Skills</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="s-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="s-1">
                                                HTML5
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">23,156</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="s-2" defaultChecked />
                                            <label className="form-check-label" htmlFor="s-2">
                                                Javascript
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">15,632</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="s-3" />
                                            <label className="form-check-label" htmlFor="s-3">
                                                PHP
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">15,032</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" defaultValue="" id="s-4" defaultChecked />
                                            <label className="form-check-label" htmlFor="s-4">
                                                CSS3
                                            </label>
                                            <span className="badge bg-light me-1 text-default font-500 ltr:float-right rtl:float-left">7,154</span>
                                        </div>
                                        <div id="hs-show-hide-skills-heading"
                                            className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                                            aria-labelledby="hs-show-skills-categeories">
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="s-5" />
                                                <label className="form-check-label" htmlFor="s-5">
                                                    Tailwind
                                                </label>
                                                <span className="badge bg-light me-1 !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">5,946</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="s-6" />
                                                <label className="form-check-label" htmlFor="s-6">
                                                    Angular
                                                </label>
                                                <span className="badge bg-light me-1 !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">3,267</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" defaultValue="" id="s-7" />
                                                <label className="form-check-label" htmlFor="s-7">
                                                    React
                                                </label>
                                                <span className="badge bg-light me-1 !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">578</span>
                                            </div>
                                        </div>
                                        <Link className="ecommerce-more-link text-success hs-collapse-toggle inline-flex items-center gap-x-2"
                                            href="#!" id="hs-show-hide-skills"
                                            data-hs-collapse="#hs-show-hide-skills-heading">
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
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-9 xl:col-span-8 col-span-12">
                        <div className="grid grid-cols-12 gap-6 items-center mb-6">
                            <div className="lg:col-span-12 col-span-12">
                                <div className="inline-flex !w-full companies-search-input">
                                    <input type="text" className="form-control !rounded-e-none border-e-0" aria-label="Text input with segmented dropdown button" placeholder="Enter your keyword here" />
                                    <Select name="state" options={Data} className="w-full !rounded-none" isSearchable
                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Data[0]]}
                                    />
                                    <input type="text" className="form-control !rounded-none border-x-0" aria-label="Text input with segmented dropdown button" placeholder="Search by location" />
                                    <Select name="state" options={Data2} className="w-full !rounded-none p-0" isSearchable
                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Data2[0]]}
                                    />
                                    <button type="button" aria-label="button" className="ti-btn ti-btn-primary-full !mb-0 !rounded-s-none"><i className="ri-search-line"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box">
                            <div className="box-body">
                                <div className="sm:flex items-center">
                                    <h5 className="font-semibold mb-0 flex-grow">1287 <span className="font-normal text-[1.125rem]">Candidates match your job search</span> </h5>
                                    <div className="btn-group hs-dropdown ti-dropdown">
                                        <button className="ti-btn ti-btn-light border dropdown-toggle" type="button" aria-expanded="false">
                                            Sort By<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
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
                                <div className="btn-list ltr:float-right rtl:float-left space-x-2 rtl:space-x-reverse">
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar !rounded-full avatar-sm bg-primary text-white">
                                            <span><i className="bi bi-download"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Download Resume
                                            </span>
                                        </button>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar !rounded-full avatar-sm bg-light !text-defaulttextcolor">
                                            <span><i className="bi bi-heart"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Whislist
                                            </span>
                                        </button>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar !rounded-full avatar-sm bg-light !text-defaulttextcolor">
                                            <span><i className="bi bi-eye"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                View Profile
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex mb-3 items-center">
                                    <span className="avatar avatar-lg ">
                                        <img src="../../../../assets/images/faces/1.jpg" alt="" className="!rounded-full" />
                                    </span>
                                    <div className="ms-2">
                                        <h5 className="font-semibold mb-0 flex items-center"><Link href="/components/apps/jobs/candidate-details/"> Brenda Simpson <i className="bi bi-check-circle-fill text-success text-base" title="Verified candidate"></i></Link></h5>
                                        <div className="sm:flex gap-2">
                                            <Link href="#!">Software Developer</Link>
                                            <p className="mb-0 text-xs text-[#8c9097] dark:text-white/50"><i className="bi bi-geo-alt text-[.6875rem]"></i> Kondapur, Hyderabad</p>
                                        </div>
                                        <div className="flex items-center text-xs text-[#8c9097] dark:text-white/50">
                                            <p className="text-xs mb-0">Ratings : </p>
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
                                <div className="popular-tags mb-4">
                                    <Link href="#!" className="badge !rounded-full bg-light me-1 text-default"><i className="bi bi-mortarboard text-[#8c9097] dark:text-white/50 me-1"></i> Graduate</Link>
                                    <Link href="#!" className="badge !rounded-full bg-light me-1 text-default"><i className="bi bi-moon-stars text-[#8c9097] dark:text-white/50 me-1"></i> flexible-shift</Link>
                                    <Link href="#!" className="badge !rounded-full bg-light me-1 text-default"><i className="bi bi-clock text-[#8c9097] dark:text-white/50 me-1"></i> Immediate Joinee</Link>
                                    <Link href="#!" className="badge !rounded-full bg-light me-1 text-default"><i className="bi bi-broadcast text-[#8c9097] dark:text-white/50 me-1"></i> Good at English</Link>
                                </div>
                                <div className="flex items-center">
                                    <p className="mb-0 flex-grow"><span className="text-[#8c9097] dark:text-white/50">Package (Yearly) :</span> <span className="font-semibold" title="Current"> $2,300</span> - <span className="font-semibold" title="Expected"> $3,678</span> </p>
                                    <p className="mb-0"><span className="text-[#8c9097] dark:text-white/50"> Languages :</span> <span className="font-semibold"> English, Hindi, Telugu</span></p>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="sm:flex items-center gap-3">
                                    <h6 className="mb-0 font-semibold">Skills :</h6>
                                    <div className="popular-tags flex-grow">
                                        <Link href="#!" className="badge !rounded-full bg-light me-1 text-default">HTML</Link>
                                        <Link href="#!" className="badge !rounded-full bg-light me-1 text-default">CSS</Link>
                                        <Link href="#!" className="badge !rounded-full bg-light me-1 text-default">Javascript</Link>
                                        <Link href="#!" className="badge !rounded-full bg-primary/10 text-primary">More</Link>
                                    </div>
                                    <div>
                                        <div className="hs-tooltip ti-main-tooltip">
                                            <Link href="#!" className="hs-tooltip-toggle badge badge-md !rounded-full bg-info/10 me-1 text-info">
                                                <i className="bi bi-hand-thumbs-up me-1"></i>1 year bond accepted
                                                <span className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm" role="tooltip">
                                                    1 year bond accepted
                                                </span>
                                            </Link>
                                        </div>
                                        <Link href="#!" className="badge badge-md !rounded-full bg-primary/10 text-primary"><i className="bi bi-briefcase me-1"></i>Exp : 2 Years</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box">
                            <div className="box-body">
                                <div className="btn-list ltr:float-right rtl:float-left space-x-2 rtl:space-x-reverse">
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar !rounded-full avatar-sm bg-primary text-white">
                                            <span><i className="bi bi-download"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Download Resume
                                            </span>
                                        </button>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar !rounded-full avatar-sm bg-light !text-defaulttextcolor">
                                            <span><i className="bi bi-heart"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Whislist
                                            </span>
                                        </button>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar !rounded-full avatar-sm bg-light !text-defaulttextcolor">
                                            <span><i className="bi bi-eye"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                View Profile
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex mb-3 items-center">
                                    <span className="avatar avatar-lg !rounded-full">
                                        <img src="../../../../assets/images/faces/3.jpg" alt="" className="!rounded-full" />
                                    </span>
                                    <div className="ms-2">
                                        <h5 className="font-semibold mb-0 flex items-center"><Link href="/components/apps/jobs/candidate-details/"> Dwayne Stort <i className="bi bi-check-circle-fill text-success text-base" title="Verified candidate"></i></Link></h5>
                                        <div className="sm:flex gap-2">
                                            <Link href="#!">Web Developer</Link>
                                            <p className="mb-0 text-xs text-[#8c9097] dark:text-white/50"><i className="bi bi-geo-alt text-[.6875rem]"></i> Gachibowli, Hyderabad</p>
                                        </div>
                                        <div className="flex items-center text-xs text-[#8c9097] dark:text-white/50">
                                            <p className="text-xs mb-0">Ratings : </p>
                                            <div className="min-w-fit ms-2">
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star"></i></span>
                                                <span className="text-warning"><i className="bi bi-star"></i></span>
                                            </div>
                                            <Link href="#!" className="mb-0 ms-1 min-w-fit text-[#8c9097] dark:text-white/50">
                                                <span>(35)</span>
                                                <span>Ratings</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="popular-tags mb-4">
                                    <Link href="#!" className="badge !rounded-full bg-light me-1 text-defaulttextcolor"><i className="bi bi-mortarboard text-[#8c9097] dark:text-white/50 me-1"></i> Post Graduate</Link>
                                    <Link href="#!" className="badge !rounded-full bg-light me-1 text-defaulttextcolor"><i className="bi bi-moon-stars text-[#8c9097] dark:text-white/50 me-1"></i> flexible-shift</Link>
                                    <Link href="#!" className="badge !rounded-full bg-light me-1 text-defaulttextcolor"><i className="bi bi-clock text-[#8c9097] dark:text-white/50 me-1"></i> Within 10 Days</Link>
                                    <Link href="#!" className="badge !rounded-full bg-light me-1 text-defaulttextcolor"><i className="bi bi-broadcast text-[#8c9097] dark:text-white/50 me-1"></i> Good at English</Link>
                                </div>
                                <div className="flex items-center">
                                    <p className="mb-0 flex-grow"><span className="text-[#8c9097] dark:text-white/50">Package (Yearly) :</span> <span className="font-semibold" title="Current"> $3,600</span> - <span className="font-semibold" title="Expected"> $4,700</span> </p>
                                    <p className="mb-0"><span className="text-[#8c9097] dark:text-white/50"> Languages :</span> <span className="font-semibold"> English, Telugu</span></p>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="sm:flex items-center gap-3">
                                    <h6 className="mb-0 font-semibold">Skills :</h6>
                                    <div className="popular-tags flex-grow">
                                        <Link href="#!" className="badge !rounded-full bg-light me-1 text-defaulttextcolor">React</Link>
                                        <Link href="#!" className="badge !rounded-full bg-light me-1 text-defaulttextcolor">React Native</Link>
                                        <Link href="#!" className="badge !rounded-full bg-primary/10 text-primary">More</Link>
                                    </div>
                                    <div>
                                        <div className="hs-tooltip ti-main-tooltip">
                                            <Link href="#!" className="hs-tooltip-toggle badge badge-md !rounded-full bg-info/10 me-1 text-info">
                                                <i className="bi bi-hand-thumbs-up me-1"></i>2 year bond accepted
                                                <span className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm" role="tooltip">
                                                    2 year bond accepted
                                                </span>
                                            </Link>
                                        </div>
                                        <Link href="#!" className="badge badge-md !rounded-full bg-primary/10 text-primary"><i className="bi bi-briefcase me-1"></i>Exp : 4 Years</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box">
                            <div className="box-body">
                                <div className="btn-list ltr:float-right rtl:float-left space-x-2 rtl:space-x-reverse">
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar !rounded-full avatar-sm bg-primary text-white">
                                            <span><i className="bi bi-download"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Download Resume
                                            </span>
                                        </button>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar !rounded-full avatar-sm bg-light !text-defaulttextcolor">
                                            <span><i className="bi bi-heart"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Whislist
                                            </span>
                                        </button>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar !rounded-full avatar-sm bg-light !text-defaulttextcolor">
                                            <span><i className="bi bi-eye"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                View Profile
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="sm:flex mb-3 items-center">
                                    <span className="avatar avatar-lg !rounded-full">
                                        <img src="../../../../assets/images/faces/21.jpg" alt="" className="!rounded-full" />
                                    </span>
                                    <div className="ms-2">
                                        <h5 className="font-semibold mb-0 flex items-center"><Link href="/components/apps/jobs/candidate-details/"> Jasmine Kova <i className="bi bi-check-circle-fill text-success text-base" title="Verified candidate"></i></Link></h5>
                                        <div className="flex gap-2">
                                            <Link href="#!">Python Developer</Link>
                                            <p className="mb-0 text-xs text-[#8c9097] dark:text-white/50"><i className="bi bi-geo-alt text-[.6875rem]"></i> Gachibowli, Chennai</p>
                                        </div>
                                        <div className="flex items-center text-xs text-[#8c9097] dark:text-white/50">
                                            <p className="text-xs mb-0">Ratings : </p>
                                            <div className="min-w-fit ms-2">
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star"></i></span>
                                                <span className="text-warning"><i className="bi bi-star"></i></span>
                                            </div>
                                            <Link href="#!" className="mb-0 ms-1 min-w-fit text-[#8c9097] dark:text-white/50">
                                                <span>(56)</span>
                                                <span>Ratings</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="popular-tags mb-4">
                                    <Link href="#!" className="badge !rounded-full bg-light me-1 text-defaulttextcolor"><i className="bi bi-mortarboard text-[#8c9097] dark:text-white/50 me-1"></i> MBA</Link>
                                    <Link href="#!" className="badge !rounded-full bg-light me-1 text-defaulttextcolor"><i className="bi bi-moon-stars text-[#8c9097] dark:text-white/50 me-1"></i> Day-shift</Link>
                                    <Link href="#!" className="badge !rounded-full bg-light me-1 text-defaulttextcolor"><i className="bi bi-clock text-[#8c9097] dark:text-white/50 me-1"></i> Within 30 Days</Link>
                                    <Link href="#!" className="badge !rounded-full bg-light me-1 text-defaulttextcolor"><i className="bi bi-broadcast text-[#8c9097] dark:text-white/50 me-1"></i> Avg at English</Link>
                                </div>
                                <div className="flex items-center">
                                    <p className="mb-0 flex-grow"><span className="text-[#8c9097] dark:text-white/50">Package (Yearly) :</span> <span className="font-semibold" title="Current"> $4,300</span> - <span className="font-semibold" title="Expected"> $5,000</span> </p>
                                    <p className="mb-0"><span className="text-[#8c9097] dark:text-white/50"> Languages :</span> <span className="font-semibold"> English, Hindi</span></p>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="sm:flex items-center gap-3">
                                    <h6 className="mb-0 font-semibold">Skills :</h6>
                                    <div className="popular-tags flex-grow">
                                        <Link href="#!" className="badge !rounded-full bg-light me-1 text-default">Python</Link>
                                        <Link href="#!" className="badge !rounded-full bg-light me-1 text-default">Java</Link>
                                        <Link href="#!" className="badge !rounded-full bg-light me-1 text-default">React</Link>
                                        <Link href="#!" className="badge !rounded-full bg-primary/10 text-primary">More</Link>
                                    </div>
                                    <div>
                                        <Link href="#!" className="badge badge-md !rounded-full bg-primary/10 text-primary"><i className="bi bi-briefcase me-1"></i>Exp : 5 Years</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box">
                            <div className="box-body">
                                <div className="btn-list ltr:float-right rtl:float-left space-x-2 rtl:space-x-reverse">
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar !rounded-full avatar-sm bg-primary text-white">
                                            <span><i className="bi bi-download"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Download Resume
                                            </span>
                                        </button>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar !rounded-full avatar-sm bg-light !text-defaulttextcolor">
                                            <span><i className="bi bi-heart"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Whislist
                                            </span>
                                        </button>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar !rounded-full avatar-sm bg-light !text-defaulttextcolor">
                                            <span><i className="bi bi-eye"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                View Profile
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="sm:flex mb-3 items-center">
                                    <span className="avatar avatar-lg !rounded-full">
                                        <img src="../../../../assets/images/faces/5.jpg" alt="" className="!rounded-full" />
                                    </span>
                                    <div className="ms-2">
                                        <h5 className="font-semibold mb-0 flex items-center"><Link href="/components/apps/jobs/candidate-details/"> Kiara Advain <i className="bi bi-check-circle-fill text-success text-base" title="Verified candidate"></i></Link></h5>
                                        <div className="flex gap-2">
                                            <Link href="#!">Java Developer</Link>
                                            <p className="mb-0 text-xs text-[#8c9097] dark:text-white/50"><i className="bi bi-geo-alt text-[.6875rem]"></i> Gachibowli, Banglore</p>
                                        </div>
                                        <div className="flex items-center text-xs text-[#8c9097] dark:text-white/50">
                                            <p className="text-xs mb-0">Ratings : </p>
                                            <div className="min-w-fit ms-2">
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star"></i></span>
                                                <span className="text-warning"><i className="bi bi-star"></i></span>
                                            </div>
                                            <Link href="#!" className="mb-0 ms-1 min-w-fit text-[#8c9097] dark:text-white/50">
                                                <span>(13)</span>
                                                <span>Ratings</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="popular-tags mb-4">
                                    <Link href="#!" className="badge !rounded-full bg-light me-1 text-defaulttextcolor"><i className="bi bi-mortarboard text-[#8c9097] dark:text-white/50 me-1"></i> MBA</Link>
                                    <Link href="#!" className="badge !rounded-full bg-light me-1 text-defaulttextcolor"><i className="bi bi-moon-stars text-[#8c9097] dark:text-white/50 me-1"></i> Day-shift</Link>
                                    <Link href="#!" className="badge !rounded-full bg-light me-1 text-defaulttextcolor"><i className="bi bi-clock text-[#8c9097] dark:text-white/50 me-1"></i> Within 30 Days</Link>
                                    <Link href="#!" className="badge !rounded-full bg-light me-1 text-defaulttextcolor"><i className="bi bi-broadcast text-[#8c9097] dark:text-white/50 me-1"></i> Good at English</Link>
                                </div>
                                <div className="sm:flex items-center">
                                    <p className="mb-0 flex-grow"><span className="text-[#8c9097] dark:text-white/50">Package (Yearly) :</span><span className="font-semibold" title="Expected"> $3,678</span> </p>
                                    <p className="mb-0"><span className="text-[#8c9097] dark:text-white/50"> Languages :</span> <span className="font-semibold"> English, Hindi, Telugu</span></p>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="sm:flex items-center gap-3">
                                    <h6 className="mb-0 font-semibold">Skills :</h6>
                                    <div className="popular-tags flex-grow">
                                        <Link href="#!" className="badge !rounded-full bg-light me-1 text-default">Java</Link>
                                        <Link href="#!" className="badge !rounded-full bg-light me-1 text-default">Core Java</Link>
                                        <Link href="#!" className="badge !rounded-full bg-primary/10 text-primary">More</Link>
                                    </div>
                                    <div>
                                        <div className="hs-tooltip ti-main-tooltip">
                                            <Link href="#!" className="hs-tooltip-toggle badge badge-md !rounded-full bg-info/10 me-1 text-info">
                                                <i className="bi bi-hand-thumbs-up me-1"></i>2 year bond accepted
                                                <span className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm" role="tooltip">
                                                    2 year bond accepted
                                                </span>
                                            </Link>
                                        </div>
                                        <Link href="#!" className="badge badge-md !rounded-full bg-primary/10 text-primary"><i className="bi bi-briefcase me-1"></i>Fresher</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box">
                            <div className="box-body">
                                <div className="btn-list ltr:float-right rtl:float-left space-x-2 rtl:space-x-reverse">
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar !rounded-full avatar-sm bg-primary text-white">
                                            <span><i className="bi bi-download"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Download Resume
                                            </span>
                                        </button>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar !rounded-full avatar-sm bg-light !text-defaulttextcolor">
                                            <span><i className="bi bi-heart"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Whislist
                                            </span>
                                        </button>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar !rounded-full avatar-sm bg-light !text-defaulttextcolor">
                                            <span><i className="bi bi-eye"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                View Profile
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="sm:flex mb-3 items-center">
                                    <span className="avatar avatar-lg !rounded-full">
                                        <img src="../../../../assets/images/faces/13.jpg" alt="" className="!rounded-full" />
                                    </span>
                                    <div className="ms-2">
                                        <h5 className="font-semibold mb-0 flex items-center"><Link href="/components/apps/jobs/candidate-details/"> Json Taylor <i className="bi bi-check-circle-fill text-success text-base" title="Verified candidate"></i></Link></h5>
                                        <div className="sm:flex gap-2">
                                            <Link href="#!">Angular Developer</Link>
                                            <p className="mb-0 text-xs text-[#8c9097] dark:text-white/50"><i className="bi bi-geo-alt text-[.6875rem]"></i> Gachibowli, Nellore</p>
                                        </div>
                                        <div className="flex items-center text-xs text-[#8c9097] dark:text-white/50">
                                            <p className="text-xs mb-0">Ratings : </p>
                                            <div className="min-w-fit ms-2">
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star"></i></span>
                                            </div>
                                            <Link href="#!" className="mb-0 ms-1 min-w-fit text-[#8c9097] dark:text-white/50">
                                                <span>(18)</span>
                                                <span>Ratings</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="popular-tags mb-4">
                                    <Link href="#!" className="badge !rounded-full bg-light me-1 text-defaulttextcolor"><i className="bi bi-mortarboard text-[#8c9097] dark:text-white/50 me-1"></i> MCA</Link>
                                    <Link href="#!" className="badge !rounded-full bg-light me-1 text-defaulttextcolor"><i className="bi bi-moon-stars text-[#8c9097] dark:text-white/50 me-1"></i> flexible-shift</Link>
                                    <Link href="#!" className="badge !rounded-full bg-light me-1 text-defaulttextcolor"><i className="bi bi-clock text-[#8c9097] dark:text-white/50 me-1"></i> Within 15 Days</Link>
                                    <Link href="#!" className="badge !rounded-full bg-light me-1 text-defaulttextcolor"><i className="bi bi-broadcast text-[#8c9097] dark:text-white/50 me-1"></i> Fluent at English</Link>
                                </div>
                                <div className="sm:flex items-center">
                                    <p className="mb-0 flex-grow"><span className="text-[#8c9097] dark:text-white/50">Package (Yearly) :</span> <span className="font-semibold" title="Current"> $3,600</span> - <span className="font-semibold" title="Expected"> $4,700</span> </p>
                                    <p className="mb-0"><span className="text-[#8c9097] dark:text-white/50"> Languages :</span> <span className="font-semibold"> English, Telugu</span></p>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="sm:flex items-center gap-3">
                                    <h6 className="mb-0 font-semibold">Skills :</h6>
                                    <div className="popular-tags flex-grow">
                                        <Link href="#!" className="badge !rounded-full bg-light me-1 text-defaulttextcolor">Angular</Link>
                                        <Link href="#!" className="badge !rounded-full bg-light me-1 text-defaulttextcolor">Advanced Java</Link>
                                        <Link href="#!" className="badge !rounded-full bg-primary/10 text-primary">More</Link>
                                    </div>
                                    <div>
                                        <div className="hs-tooltip ti-main-tooltip">
                                            <Link href="#!" className="hs-tooltip-toggle badge badge-md !rounded-full bg-info/10 me-1 text-info">
                                                <i className="bi bi-hand-thumbs-up me-1"></i>2 year bond accepted
                                                <span className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm" role="tooltip">
                                                    2 year bond accepted
                                                </span>
                                            </Link>
                                        </div>
                                        <Link href="#!" className="badge badge-md !rounded-full bg-primary/10 text-primary"><i className="bi bi-briefcase me-1"></i>Exp : 5 Years</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box">
                            <div className="box-body">
                                <div className="btn-list ltr:float-right rtl:float-left space-x-2 rtl:space-x-reverse">
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar !rounded-full avatar-sm bg-primary text-white">
                                            <span><i className="bi bi-download"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Download Resume
                                            </span>
                                        </button>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar !rounded-full avatar-sm bg-light !text-defaulttextcolor">
                                            <span><i className="bi bi-heart"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Whislist
                                            </span>
                                        </button>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar !rounded-full avatar-sm bg-light !text-defaulttextcolor">
                                            <span><i className="bi bi-eye"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                View Profile
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="sm:flex mb-3 items-center">
                                    <span className="avatar avatar-lg !rounded-full">
                                        <img src="../../../../assets/images/faces/21.jpg" alt="" className="!rounded-full" />
                                    </span>
                                    <div className="ms-2">
                                        <h5 className="font-semibold mb-0 flex items-center"><Link href="/components/apps/jobs/candidate-details/"> Diego Sanch <i className="bi bi-check-circle-fill text-success text-base" title="Verified candidate"></i></Link></h5>
                                        <div className="sm:flex gap-2">
                                            <Link href="#!">AWS Developer</Link>
                                            <p className="mb-0 text-xs text-[#8c9097] dark:text-white/50"><i className="bi bi-geo-alt text-[.6875rem]"></i> Kukatpally, Hyderabad</p>
                                        </div>
                                        <div className="flex items-center text-xs text-[#8c9097] dark:text-white/50">
                                            <p className="text-xs mb-0">Ratings : </p>
                                            <div className="min-w-fit ms-2">
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                <span className="text-warning"><i className="bi bi-star"></i></span>
                                                <span className="text-warning"><i className="bi bi-star"></i></span>
                                            </div>
                                            <Link href="#!" className="mb-0 ms-1 min-w-fit text-[#8c9097] dark:text-white/50">
                                                <span>(13)</span>
                                                <span>Ratings</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="popular-tags mb-4">
                                    <Link href="#!" className="badge !rounded-full bg-light me-1 text-defaulttextcolor"><i className="bi bi-mortarboard text-[#8c9097] dark:text-white/50 me-1"></i> MBA</Link>
                                    <Link href="#!" className="badge !rounded-full bg-light me-1 text-defaulttextcolor"><i className="bi bi-moon-stars text-[#8c9097] dark:text-white/50 me-1"></i> Day-shift</Link>
                                    <Link href="#!" className="badge !rounded-full bg-light me-1 text-defaulttextcolor"><i className="bi bi-clock text-[#8c9097] dark:text-white/50 me-1"></i> Within 30 Days</Link>
                                    <Link href="#!" className="badge !rounded-full bg-light me-1 text-defaulttextcolor"><i className="bi bi-broadcast text-[#8c9097] dark:text-white/50 me-1"></i> Good at English</Link>
                                </div>
                                <div className="flex items-center">
                                    <p className="mb-0 flex-grow"><span className="text-[#8c9097] dark:text-white/50">Package (Yearly) :</span><span className="font-semibold" title="Expected"> $8,900</span> </p>
                                    <p className="mb-0"><span className="text-[#8c9097] dark:text-white/50"> Languages :</span> <span className="font-semibold"> English, Hindi, Telugu</span></p>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="sm:flex items-center gap-3">
                                    <h6 className="mb-0 font-semibold">Skills :</h6>
                                    <div className="popular-tags flex-grow">
                                        <Link href="#!" className="badge !rounded-full bg-light me-1 text-defaulttextcolor">AWS Lambda</Link>
                                        <Link href="#!" className="badge !rounded-full bg-light me-1 text-defaulttextcolor">Athena</Link>
                                        <Link href="#!" className="badge !rounded-full bg-light me-1 text-defaulttextcolor">Linux</Link>
                                        <Link href="#!" className="badge !rounded-full bg-primary/10 text-primary">More</Link>
                                    </div>
                                    <div>
                                        <Link href="#!" className="badge badge-md !rounded-full bg-primary/10 text-primary"><i className="bi bi-briefcase me-1"></i>Fresher</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className="ti-pagination mb-4 justify-end">
                            <li className="page-item disabled">
                                <Link className="page-link px-3 py-[0.375rem]" href="#!">
                                    Prev
                                </Link>
                            </li>
                            <li className="page-item active"><Link className="page-link px-3 py-[0.375rem]" href="#!">1</Link></li>
                            <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">2</Link></li>
                            <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">3</Link></li>
                            <li className="page-item">
                                <Link className="page-link px-3 py-[0.375rem] text-primary" href="#!">
                                    next
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Searchcandidate.layout = "Contentlayout"

const mapStateToProps = (state) => ({
    local_varaiable: state
});
export default connect(mapStateToProps,)(Searchcandidate);