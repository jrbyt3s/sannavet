import LabeledTwoThumbs1 from '@/shared/data/apps/jobs/searchjobsdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { connect } from 'react-redux'

const Searchjobs = ({ local_varaiable }) => {
    return (
        <Fragment>
            <Seo title={"Search Jobs"} />
            <Pageheader currentpage="Search Jobs" activepage="Jobs" mainpage="Search Jobs" />
            <div className="container">
                <div className="grid grid-cols-12 gap-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box custom-box">
                            <div className="box-body p-3">
                                <div className="grid grid-cols-12 items-center">
                                    <div className="lg:col-span-8 col-span-12">
                                        <div className="flex">
                                            <h5 className="font-semibold mb-0"><span className="font-normal">Showing</span> 3456 Jobs</h5>
                                        </div>
                                    </div>
                                    <div className="lg:col-span-4 col-span-12 text-end">
                                        <div className="btn-group hs-dropdown ti-dropdown">
                                            <button className="ti-btn ti-btn-light border dark:border-defaultborder/10 dropdown-toggle" type="button" aria-expanded="false">
                                                Sort By<i className="ri-arrow-down-s-line align-middle inline-block"></i>
                                            </button>
                                            <ul className="hs-dropdown-menu ti-dropdown-menu hidden !text-end">
                                                <li><Link className="ti-dropdown-item !text-start" href="#!">Featured</Link></li>
                                                <li><Link className="ti-dropdown-item !text-start" href="#!">Newest</Link></li>
                                                <li><Link className="ti-dropdown-item !text-start" href="#!">Most Relevant</Link></li>
                                                <li><Link className="ti-dropdown-item !text-start" href="#!">Best Rated</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="xxl:col-span-3 lg:col-span-5 col-span-12">
                        <div className="box custom-box products-navigation-box">
                            <div className="box-body !p-0">
                                <div className="p-6 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Categories</h6>
                                    <div className="px-2 py-4 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="" id="c-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="c-1">
                                                R &amp; D
                                            </label>
                                            <span className="badge bg-light !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">2,712</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="" id="c-2" />
                                            <label className="form-check-label" htmlFor="c-2">
                                                Accounting
                                            </label>
                                            <span className="badge bg-light !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">536</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="" id="c-3" defaultChecked />
                                            <label className="form-check-label" htmlFor="c-3">
                                                Business Process
                                            </label>
                                            <span className="badge bg-light !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">18,289</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="" id="c-4" defaultChecked />
                                            <label className="form-check-label" htmlFor="c-4">
                                                Consulting
                                            </label>
                                            <span className="badge bg-light !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">3,453</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="" id="c-5" />
                                            <label className="form-check-label" htmlFor="c-5">
                                                Administrative Support
                                            </label>
                                            <span className="badge bg-light !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">7,165</span>
                                        </div>
                                        <div id="hs-show-hide-categeories-heading"
                                            className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                                            aria-labelledby="hs-show-hide-categeories">
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="c-6" />
                                                <label className="form-check-label" htmlFor="c-6">
                                                    Human Resources
                                                </label>
                                                <span className="badge bg-light text-defaulttextcolor  ltr:float-right rtl:float-left">7,165</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="c-7" />
                                                <label className="form-check-label" htmlFor="c-7">
                                                    Marketing
                                                </label>
                                                <span className="badge bg-light text-defaulttextcolor  ltr:float-right rtl:float-left">7,165</span>
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
                                    <h6 className="font-semibold mb-0">Job Type</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="" id="j-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="j-1">
                                                Full Time
                                            </label>
                                            <span className="badge bg-light !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">512</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="" id="j-2" defaultChecked />
                                            <label className="form-check-label" htmlFor="j-2">
                                                Part Time
                                            </label>
                                            <span className="badge bg-light !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">2,186</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="" id="j-3" defaultChecked />
                                            <label className="form-check-label" htmlFor="j-3">
                                                Internship
                                            </label>
                                            <span className="badge bg-light !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">734</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="" id="j-4" />
                                            <label className="form-check-label" htmlFor="j-4">
                                                Freelancer
                                            </label>
                                            <span className="badge bg-light !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">16</span>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="j-5" />
                                            <label className="form-check-label" htmlFor="j-5">
                                                Remote Job
                                            </label>
                                            <span className="badge bg-light !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">1,432</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Salary Range</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <LabeledTwoThumbs1 rtl={local_varaiable.dir == 'rtl'} />
                                        <div className="flex mt-4">
                                            <div className="font-semibold h6 mb-0">$<span id="lower-value">8000.00</span></div>
                                            &nbsp; -- &nbsp;
                                            <div className="font-semibold h6 mb-0">$<span id="upper-value">40000.00</span></div>
                                        </div>

                                    </div>
                                </div>
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Qualification</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="" id="q-1" />
                                            <label className="form-check-label" htmlFor="q-1">
                                                All Education Levels
                                            </label>
                                            <span className="badge bg-light !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">16,563</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="" id="q-2" defaultChecked />
                                            <label className="form-check-label" htmlFor="q-2">
                                                10th Pass and Above
                                            </label>
                                            <span className="badge bg-light !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">15,234</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="" id="q-3" />
                                            <label className="form-check-label" htmlFor="q-3">
                                                12th Pass and Above
                                            </label>
                                            <span className="badge bg-light !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">6,278</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="" id="q-4" defaultChecked />
                                            <label className="form-check-label" htmlFor="q-4">
                                                Diploma and Graduate
                                            </label>
                                            <span className="badge bg-light !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">4,531</span>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="q-5" />
                                            <label className="form-check-label" htmlFor="q-5">
                                                Post Graduate
                                            </label>
                                            <span className="badge bg-light !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">2,405</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <h6 className="font-semibold mb-0">Experience</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="" id="e-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="e-1">
                                                Fresher
                                            </label>
                                            <span className="badge bg-light !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">23,156</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="" id="e-2" />
                                            <label className="form-check-label" htmlFor="e-2">
                                                Less than 1 year
                                            </label>
                                            <span className="badge bg-light !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">15,632</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="" id="e-3" defaultChecked />
                                            <label className="form-check-label" htmlFor="e-3">
                                                Less than 2 year
                                            </label>
                                            <span className="badge bg-light !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">15,032</span>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="e-4" defaultChecked />
                                            <label className="form-check-label" htmlFor="e-4">
                                                More than 3 years
                                            </label>
                                            <span className="badge bg-light !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">7,154</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <h6 className="font-semibold mb-0">Skills</h6>
                                    <div className="px-2 py-3 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="" id="s-1" defaultChecked />
                                            <label className="form-check-label" htmlFor="s-1">
                                                HTML5
                                            </label>
                                            <span className="badge bg-light !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">23,156</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="" id="s-2" defaultChecked />
                                            <label className="form-check-label" htmlFor="s-2">
                                                Javascript
                                            </label>
                                            <span className="badge bg-light !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">15,632</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="" id="s-3" />
                                            <label className="form-check-label" htmlFor="s-3">
                                                PHP
                                            </label>
                                            <span className="badge bg-light !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">15,032</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="" id="s-4" defaultChecked />
                                            <label className="form-check-label" htmlFor="s-4">
                                                CSS3
                                            </label>
                                            <span className="badge bg-light !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">7,154</span>
                                        </div>
                                        <div id="hs-show-hide-skills-heading"
                                            className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                                            aria-labelledby="hs-show-skills-categeories">
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" value="" id="s-5" />
                                                <label className="form-check-label" htmlFor="s-5">
                                                    Tailwind
                                                </label>
                                                <span className="badge bg-light !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">5,946</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" value="" id="s-6" />
                                                <label className="form-check-label" htmlFor="s-6">
                                                    Angular
                                                </label>
                                                <span className="badge bg-light !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">3,267</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" value="" id="s-7" />
                                                <label className="form-check-label" htmlFor="s-7">
                                                    React
                                                </label>
                                                <span className="badge bg-light !text-defaulttextcolor font-500 ltr:float-right rtl:float-left">578</span>
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
                        <div className="box custom-box">
                            <div className="box-body">
                                <div className="">
                                    <h5 className="font-semibold mb-4">Get Latest Job Alerts</h5>
                                    <p className="mb-4">Latest jobs updates on the go to recieved direct to your email. Stay updated with your latest new jobs.</p>
                                    <div className="input-group mb-4">
                                        <input type="text" className="form-control" placeholder="Email Here" aria-label="blog-email" aria-describedby="blog-subscribe" />
                                        <button className="ti-btn ti-btn-primary-full !mb-0" type="button" id="blog-subscribe">Subscribe</button>
                                    </div>
                                    <label className="form-check-label" htmlFor="invalidCheck">
                                        By Subscribing you accept to <Link href="#!" className="text-success"><u>privacy policy</u></Link>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-9 lg:col-span-7 col-span-12">
                        <div className="box custom-box featured-jobs">
                            <div className="box-body">
                                <div className="btn-list ltr:float-right rtl:float-left">
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar avatar-sm !rounded-full bg-light !text-defaulttextcolor">
                                            <span><i className="bi bi-heart"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Add to Whislist
                                            </span>
                                        </button>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar avatar-sm !rounded-full !bg-warning/10 !text-warning">
                                            <span><i className="bi bi-star-fill"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Featured Jobs
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex mb-4 flex-wrap gap-2 items-center">
                                    <span className="avatar avatar-lg !rounded-full bg-primary/10 !fill-primary border dark:border-defaultborder/10"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="var(--primary-color)" d="M21.46777,2.3252A1.00007,1.00007,0,0,0,20.73,2H3.27a1.00039,1.00039,0,0,0-.99609,1.08887l1.52,17a.99944.99944,0,0,0,.72851.87451l7.2002,2A.99628.99628,0,0,0,11.99023,23a1.01206,1.01206,0,0,0,.26709-.03613l7.21973-2a1.00055,1.00055,0,0,0,.729-.875l1.52-17A1,1,0,0,0,21.46777,2.3252Zm-3.19238,16.896L11.99072,20.9624,5.72461,19.22168,4.36328,4H19.63672ZM7.81982,13h6.895l-.32714,3.271-2.56788.917L8.65625,16.05811a1.00017,1.00017,0,1,0-.67285,1.88378l3.5,1.25a1.00291,1.00291,0,0,0,.67285,0l3.5-1.25a1.00044,1.00044,0,0,0,.65869-.84228l.5-5A1.00064,1.00064,0,0,0,15.81982,11H8.72461L8.4248,8h7.895a1,1,0,0,0,0-2h-9a1.00064,1.00064,0,0,0-.99511,1.09961l.5,5A1.00012,1.00012,0,0,0,7.81982,13Z"></path></svg></span>
                                    <div>
                                        <h5 className="font-semibold mb-0 flex items-center"><Link href="#!"> HTML Developer - Fresher</Link></h5>
                                        <Link href="#!">Spotech Technical Solutions</Link>
                                    </div>
                                </div>
                                <div className="popular-tags mb-4">
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-geo-alt text-muted me-1"></i> Hyderabad</Link>
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-briefcase text-muted me-1"></i> 13 Openings</Link>
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-mortarboard text-muted me-1"></i> Graduate</Link>
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-clock text-muted me-1"></i> Min - 2Years</Link>
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-moon-stars text-muted me-1"></i> flexible-shift</Link>
                                </div>
                                <div className="flex justify-between">
                                    <h6 className="font-semibold mb-0">$25,000 - $35,000</h6>
                                    <Link href="" className="text-primary font-semibold text-[.875rem] inline-flex items-center">
                                        Apply Now <i className="fe fe-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box featured-jobs">
                            <div className="box-body">
                                <div className="btn-list ltr:float-right rtl:float-left">
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar avatar-sm !rounded-full bg-light !text-defaulttextcolor">
                                            <span><i className="bi bi-heart"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Add to Whislist
                                            </span>
                                        </button>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar avatar-sm !rounded-full !bg-warning/10 !text-warning">
                                            <span><i className="bi bi-star-fill"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Featured Jobs
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex mb-4 flex-wrap gap-2 items-center">
                                    <span className="avatar avatar-lg !rounded-full bg-primary/10 !fill-primary border dark:border-defaultborder/10"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="var(--primary-color)" d="M11.103,10.43793a1.78593,1.78593,0,1,0,2.43957.65362A1.786,1.786,0,0,0,11.103,10.43793Zm8.0047,1.93768q-.17587-.201-.37116-.40308.13641-.14337.264-.28649c1.60583-1.80427,2.28357-3.61371,1.65558-4.70154-.60217-1.043-2.39343-1.35382-4.63593-.91779q-.33132.06482-.659.14624-.06272-.21624-.13343-.43C14.467,3.49042,13.2381,1.99921,11.98206,2,10.77765,2.00055,9.61359,3.39709,8.871,5.5575q-.10959.31969-.20276.64471-.21908-.05375-.44-.0993c-2.366-.48578-4.27167-.16584-4.89844.9226-.601,1.04376.02753,2.74982,1.52851,4.47211q.22329.25562.45922.49976c-.18542.191-.361.38189-.52465.57171-1.4646,1.698-2.05719,3.37616-1.45716,4.41541.61969,1.07348,2.49854,1.42437,4.7854.97436q.278-.05511.55292-.124.10071.35156.22095.697c.73932,2.11706,1.89685,3.46863,3.097,3.4682,1.23944-.00073,2.48194-1.45288,3.23474-3.65875.05945-.17432.11573-.35535.16907-.54175q.35514.08835.71485.1568c2.20336.41687,3.95251.089,4.55145-.951C21.28058,15.93109,20.64288,14.12933,19.10767,12.37561ZM4.07019,7.45184c.38586-.67,1.94324-.93139,3.98608-.512q.19584.04027.39838.09a20.464,20.464,0,0,0-.42126,2.67767,20.88659,20.88659,0,0,0-2.10389,1.6936q-.21945-.22695-.42718-.4649l.00006.00006C4.21631,9.46057,3.708,8.08081,4.07019,7.45184Zm3.88666,5.72809c-.51056-.3866-.98505-.78265-1.41571-1.181.43036-.39587.90515-.79059,1.41467-1.17615q-.02746.58915-.02722,1.1792Q7.929,12.59117,7.95685,13.17993Zm-.00061,3.94061a7.23675,7.23675,0,0,1-2.63971.09314,1.766,1.766,0,0,1-1.241-.65631c-.36407-.63067.11176-1.978,1.36432-3.43023q.23621-.273.48791-.53174a20.49026,20.49026,0,0,0,2.10712,1.70007,20.80226,20.80226,0,0,0,.42621,2.712Q8.21011,17.07023,7.95624,17.12054Zm7.10113-8.03936q-.50309-.317-1.01861-.61365-.5073-.292-1.0268-.56207c.593-.24933,1.17591-.46228,1.73865-.63581A18.21775,18.21775,0,0,1,15.05737,9.08118ZM9.679,5.83521c.63623-1.85114,1.57763-2.98053,2.30352-2.98084.77308-.00037,1.77753,1.21826,2.43433,3.19763q.064.19355.121.38928a20.478,20.478,0,0,0-2.52716.9712,20.06145,20.06145,0,0,0-2.519-.98194Q9.578,6.13062,9.679,5.83521ZM9.27863,7.259a18.30717,18.30717,0,0,1,1.72967.642Q9.95746,8.4433,8.96094,9.0824C9.0412,8.4444,9.148,7.83313,9.27863,7.259ZM8.9624,14.91968q.49695.31813,1.00843.61273.52174.30039,1.05737.57556a18.19577,18.19577,0,0,1-1.74445.66492C9.15161,16.1908,9.04364,15.56879,8.9624,14.91968Zm5.45569,3.14551A7.23556,7.23556,0,0,1,13.18,20.39844l-.00006.00006a1.76585,1.76585,0,0,1-1.18841.747c-.72821.00042-1.65766-1.085-2.28992-2.89545q-.11169-.32108-.20551-.648a20.10863,20.10863,0,0,0,2.52918-1.0097,20.79976,20.79976,0,0,0,2.54736.97851Q14.50141,17.81983,14.41809,18.06519Zm.36224-1.32422c-.56921-.176-1.16058-.39252-1.76214-.64551q.50867-.2677,1.02472-.56543.52955-.30579,1.0321-.62689A18.1524,18.1524,0,0,1,14.78033,16.741Zm.44629-4.74268q.00111.91095-.05688,1.82044c-.49268.33343-1.01282.659-1.554.97143-.53894.31116-1.07293.59711-1.59674.8559q-.82682-.39624-1.62176-.854-.79047-.455-1.54468-.969-.06894-.90921-.06946-1.82172l.00012.00019q-.00063-.91187.06794-1.82184c.49255-.33637,1.00891-.66168,1.54278-.96991.53632-.30969,1.077-.59442,1.61469-.85248q.81664.39688,1.60382.85065.78992.454,1.549.95868.06519.91443.06524,1.83166Zm.95673-5.09283c1.92133-.37372,3.37-.12232,3.73291.50622.3866.66962-.16748,2.1485-1.55383,3.70636l-.00006.00006q-.1149.12891-.23841.25891A20.06118,20.06118,0,0,0,15.98,9.68915a20.04054,20.04054,0,0,0-.40546-2.64893Q15.88486,6.96387,16.18335,6.90546Zm-.12988,3.8847A18.16447,18.16447,0,0,1,17.51483,11.978a18.11912,18.11912,0,0,1-1.45672,1.20831q.02325-.59391.02288-1.18842Q16.08072,11.39389,16.05347,10.79016Zm3.8681,5.78876c-.36346.63116-1.76788.89435-3.65222.53784q-.32391-.06115-.66474-.14557a20.069,20.069,0,0,0,.38746-2.68176,19.93914,19.93914,0,0,0,2.13708-1.71588q.17643.18329.33563.36487v-.00007a7.23437,7.23437,0,0,1,1.40308,2.23792A1.76563,1.76563,0,0,1,19.92157,16.57892Z"></path></svg></span>
                                    <div>
                                        <h5 className="font-semibold mb-0 flex items-center"><Link href="#!"> React Lead Developer</Link></h5>
                                        <Link href="#!">Infratech PVT LTD</Link>
                                    </div>
                                </div>
                                <div className="popular-tags mb-4">
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-geo-alt text-muted me-1"></i> Hyderabad</Link>
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-briefcase text-muted me-1"></i> 13 Openings</Link>
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-mortarboard text-muted me-1"></i> Graduate</Link>
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-clock text-muted me-1"></i> Min - 2Years</Link>
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-moon-stars text-muted me-1"></i> flexible-shift</Link>
                                </div>
                                <div className="flex justify-between">
                                    <h6 className="font-semibold mb-0">$25,000 - $35,000</h6>
                                    <Link href="" className="text-primary font-semibold text-[.875rem] inline-flex items-center">
                                        Apply Now <i className="fe fe-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box featured-jobs">
                            <div className="box-body">
                                <div className="btn-list ltr:float-right rtl:float-left">
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar avatar-sm !rounded-full bg-light !text-defaulttextcolor">
                                            <span><i className="bi bi-heart"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Add to Whislist
                                            </span>
                                        </button>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar avatar-sm !rounded-full !bg-warning/10 !text-warning">
                                            <span><i className="bi bi-star-fill"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Featured Jobs
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex mb-4 flex-wrap gap-2 items-center">
                                    <span className="avatar avatar-lg !rounded-full bg-primary/10 !fill-primary border dark:border-defaultborder/10"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="var(--primary-color)" d="M22.86723,3.374a.99906.99906,0,0,0-.86622-.50195l-4.97064-.00391-.00738-.001-3.64356.001a1.00172,1.00172,0,0,0-.81787.42481l-.55859.7959L11.43851,3.291a.9983.9983,0,0,0-.81591-.42286l-3.646-.001H6.97611l-.00146.00018-.00147-.00018H6.96781l-4.97314.02734a.99989.99989,0,0,0-.85742,1.50586L11.15678,21.50586A1.00068,1.00068,0,0,0,12.01957,22h.001a1.00062,1.00062,0,0,0,.86328-.49609L22.8643,4.376A1.00212,1.00212,0,0,0,22.86723,3.374ZM10.10453,4.86816l1.085,1.53321a.99856.99856,0,0,0,.81641.42285h.00146a1.00252,1.00252,0,0,0,.8169-.42481l1.07519-1.53125,1.36267-.001-3.244,5.45373L8.7432,4.86719Zm1.9126,14.14942L3.7393,4.88477l2.66992-.01465,4.75342,7.918a1.00082,1.00082,0,0,0,.85742.48535H12.022l.001-.00012.001.00012h.002a1,1,0,0,0,.85742-.48926l4.708-7.916,2.66949.00293Z"></path></svg></span>
                                    <div>
                                        <h5 className="font-semibold mb-0 flex items-center"><Link href="#!"> Vuejs Frontend Developer</Link></h5>
                                        <Link href="#!">G Technical Solutions</Link>
                                    </div>
                                </div>
                                <div className="popular-tags mb-4">
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-geo-alt text-muted me-1"></i> Hyderabad</Link>
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-briefcase text-muted me-1"></i> 13 Openings</Link>
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-mortarboard text-muted me-1"></i> Graduate</Link>
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-clock text-muted me-1"></i> Min - 2Years</Link>
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-moon-stars text-muted me-1"></i> flexible-shift</Link>
                                </div>
                                <div className="flex justify-between">
                                    <h6 className="font-semibold mb-0">$25,000 - $35,000</h6>
                                    <Link href="" className="text-primary font-semibold text-[.875rem] inline-flex items-center">
                                        Apply Now <i className="fe fe-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box featured-jobs">
                            <div className="box-body">
                                <div className="btn-list ltr:float-right rtl:float-left">
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar avatar-sm !rounded-full bg-light !text-defaulttextcolor">
                                            <span><i className="bi bi-heart"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Add to Whislist
                                            </span>
                                        </button>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar avatar-sm !rounded-full !bg-warning/10 !text-warning">
                                            <span><i className="bi bi-star-fill"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Featured Jobs
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex mb-4 flex-wrap gap-2 items-center">
                                    <span className="avatar avatar-lg !rounded-full bg-primary/10 !fill-primary border dark:border-defaultborder/10"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="var(--primary-color)" d="M12,2a10.00009,10.00009,0,1,0,10,9.99976A10.01117,10.01117,0,0,0,12,2ZM3.00928,11.99976a8.95547,8.95547,0,0,1,.77844-3.659L8.07654,20.09131A8.99123,8.99123,0,0,1,3.00928,11.99976ZM12,20.99121a8.98726,8.98726,0,0,1-2.54-.36633l2.69788-7.83869,2.7633,7.57135a.84386.84386,0,0,0,.06446.12391A8.97138,8.97138,0,0,1,12,20.99121ZM13.239,7.78436c.54126-.02844,1.02906-.08539,1.02906-.08539a.37165.37165,0,0,0-.05738-.741s-1.4563.11432-2.39648.11432c-.8833,0-2.3678-.11432-2.3678-.11432a.37165.37165,0,0,0-.057.741s.4585.05695.943.08539l1.40075,3.838-1.968,5.90087L6.49133,7.78436C7.033,7.75592,7.52026,7.699,7.52026,7.699a.37166.37166,0,0,0-.05749-.741s-1.45593.11432-2.39612.11432c-.1687,0-.36768-.00415-.57861-.01093A8.98815,8.98815,0,0,1,18.07117,5.36957c-.0387-.00238-.07654-.0072-.11634-.0072A1.55669,1.55669,0,0,0,16.445,6.958a4.21016,4.21016,0,0,0,.88317,2.1087,4.73577,4.73577,0,0,1,.74122,2.47955,10.88314,10.88314,0,0,1-.68409,2.9065l-.897,2.99634ZM16.52,19.771l2.74609-7.9397A8.489,8.489,0,0,0,19.94983,8.611a6.9105,6.9105,0,0,0-.06043-.92456A8.99224,8.99224,0,0,1,16.52,19.771Z"></path></svg></span>
                                    <div>
                                        <h5 className="font-semibold mb-0 flex items-center"><Link href="#!"> Wordpress Developer - Remote</Link></h5>
                                        <Link href="#!">Hardware Private Solutions</Link>
                                    </div>
                                </div>
                                <div className="popular-tags mb-4">
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-geo-alt text-muted me-1"></i> Hyderabad</Link>
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-briefcase text-muted me-1"></i> 13 Openings</Link>
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-mortarboard text-muted me-1"></i> Graduate</Link>
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-clock text-muted me-1"></i> Min - 2Years</Link>
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-moon-stars text-muted me-1"></i> flexible-shift</Link>
                                </div>
                                <div className="flex justify-between">
                                    <h6 className="font-semibold mb-0">$25,000 - $35,000</h6>
                                    <Link href="" className="text-primary font-semibold text-[.875rem] inline-flex items-center">
                                        Apply Now <i className="fe fe-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box featured-jobs">
                            <div className="box-body">
                                <div className="btn-list ltr:float-right rtl:float-left">
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar avatar-sm !rounded-full bg-light !text-defaulttextcolor">
                                            <span><i className="bi bi-heart"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Add to Whislist
                                            </span>
                                        </button>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar avatar-sm !rounded-full !bg-warning/10 !text-warning">
                                            <span><i className="bi bi-star-fill"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Featured Jobs
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex mb-4 flex-wrap gap-2 items-center">
                                    <span className="avatar avatar-lg !rounded-full bg-primary/10 !fill-primary border dark:border-defaultborder/10"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="var(--primary-color)" d="M21.46777,2.3252A1.00007,1.00007,0,0,0,20.73,2H3.27a1.00039,1.00039,0,0,0-.99609,1.08887l1.52,17a.99944.99944,0,0,0,.72851.87451l7.2002,2A.99628.99628,0,0,0,11.99023,23a1.01206,1.01206,0,0,0,.26709-.03613l7.21973-2a1.00055,1.00055,0,0,0,.729-.875l1.52-17A1,1,0,0,0,21.46777,2.3252Zm-3.19238,16.896L11.99072,20.9624,5.72461,19.22168,4.36328,4H19.63672ZM7.81982,13h6.895l-.32714,3.271-2.56788.917L8.65625,16.05811a1.00017,1.00017,0,1,0-.67285,1.88378l3.5,1.25a1.00291,1.00291,0,0,0,.67285,0l3.5-1.25a1.00044,1.00044,0,0,0,.65869-.84228l.5-5A1.00064,1.00064,0,0,0,15.81982,11H8.72461L8.4248,8h7.895a1,1,0,0,0,0-2h-9a1.00064,1.00064,0,0,0-.99511,1.09961l.5,5A1.00012,1.00012,0,0,0,7.81982,13Z"></path></svg></span>
                                    <div>
                                        <h5 className="font-semibold mb-0 flex items-center"><Link href="#!"> HTML Developer - Fresher</Link></h5>
                                        <Link href="#!">Spotech Technical Solutions</Link>
                                    </div>
                                </div>
                                <div className="popular-tags mb-4">
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-geo-alt text-muted me-1"></i> Hyderabad</Link>
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-briefcase text-muted me-1"></i> 13 Openings</Link>
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-mortarboard text-muted me-1"></i> Graduate</Link>
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-clock text-muted me-1"></i> Min - 2Years</Link>
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-moon-stars text-muted me-1"></i> flexible-shift</Link>
                                </div>
                                <div className="flex justify-between">
                                    <h6 className="font-semibold mb-0">$25,000 - $35,000</h6>
                                    <Link href="" className="text-primary font-semibold text-[.875rem] inline-flex items-center">
                                        Apply Now <i className="fe fe-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box featured-jobs">
                            <div className="box-body">
                                <div className="btn-list ltr:float-right rtl:float-left">
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar avatar-sm !rounded-full bg-light !text-defaulttextcolor">
                                            <span><i className="bi bi-heart"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Add to Whislist
                                            </span>
                                        </button>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar avatar-sm !rounded-full !bg-warning/10 !text-warning">
                                            <span><i className="bi bi-star-fill"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Featured Jobs
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex mb-4 flex-wrap gap-2 items-center">
                                    <span className="avatar avatar-lg !rounded-full bg-primary/10 !fill-primary border dark:border-defaultborder/10"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="var(--primary-color)" d="M11.103,10.43793a1.78593,1.78593,0,1,0,2.43957.65362A1.786,1.786,0,0,0,11.103,10.43793Zm8.0047,1.93768q-.17587-.201-.37116-.40308.13641-.14337.264-.28649c1.60583-1.80427,2.28357-3.61371,1.65558-4.70154-.60217-1.043-2.39343-1.35382-4.63593-.91779q-.33132.06482-.659.14624-.06272-.21624-.13343-.43C14.467,3.49042,13.2381,1.99921,11.98206,2,10.77765,2.00055,9.61359,3.39709,8.871,5.5575q-.10959.31969-.20276.64471-.21908-.05375-.44-.0993c-2.366-.48578-4.27167-.16584-4.89844.9226-.601,1.04376.02753,2.74982,1.52851,4.47211q.22329.25562.45922.49976c-.18542.191-.361.38189-.52465.57171-1.4646,1.698-2.05719,3.37616-1.45716,4.41541.61969,1.07348,2.49854,1.42437,4.7854.97436q.278-.05511.55292-.124.10071.35156.22095.697c.73932,2.11706,1.89685,3.46863,3.097,3.4682,1.23944-.00073,2.48194-1.45288,3.23474-3.65875.05945-.17432.11573-.35535.16907-.54175q.35514.08835.71485.1568c2.20336.41687,3.95251.089,4.55145-.951C21.28058,15.93109,20.64288,14.12933,19.10767,12.37561ZM4.07019,7.45184c.38586-.67,1.94324-.93139,3.98608-.512q.19584.04027.39838.09a20.464,20.464,0,0,0-.42126,2.67767,20.88659,20.88659,0,0,0-2.10389,1.6936q-.21945-.22695-.42718-.4649l.00006.00006C4.21631,9.46057,3.708,8.08081,4.07019,7.45184Zm3.88666,5.72809c-.51056-.3866-.98505-.78265-1.41571-1.181.43036-.39587.90515-.79059,1.41467-1.17615q-.02746.58915-.02722,1.1792Q7.929,12.59117,7.95685,13.17993Zm-.00061,3.94061a7.23675,7.23675,0,0,1-2.63971.09314,1.766,1.766,0,0,1-1.241-.65631c-.36407-.63067.11176-1.978,1.36432-3.43023q.23621-.273.48791-.53174a20.49026,20.49026,0,0,0,2.10712,1.70007,20.80226,20.80226,0,0,0,.42621,2.712Q8.21011,17.07023,7.95624,17.12054Zm7.10113-8.03936q-.50309-.317-1.01861-.61365-.5073-.292-1.0268-.56207c.593-.24933,1.17591-.46228,1.73865-.63581A18.21775,18.21775,0,0,1,15.05737,9.08118ZM9.679,5.83521c.63623-1.85114,1.57763-2.98053,2.30352-2.98084.77308-.00037,1.77753,1.21826,2.43433,3.19763q.064.19355.121.38928a20.478,20.478,0,0,0-2.52716.9712,20.06145,20.06145,0,0,0-2.519-.98194Q9.578,6.13062,9.679,5.83521ZM9.27863,7.259a18.30717,18.30717,0,0,1,1.72967.642Q9.95746,8.4433,8.96094,9.0824C9.0412,8.4444,9.148,7.83313,9.27863,7.259ZM8.9624,14.91968q.49695.31813,1.00843.61273.52174.30039,1.05737.57556a18.19577,18.19577,0,0,1-1.74445.66492C9.15161,16.1908,9.04364,15.56879,8.9624,14.91968Zm5.45569,3.14551A7.23556,7.23556,0,0,1,13.18,20.39844l-.00006.00006a1.76585,1.76585,0,0,1-1.18841.747c-.72821.00042-1.65766-1.085-2.28992-2.89545q-.11169-.32108-.20551-.648a20.10863,20.10863,0,0,0,2.52918-1.0097,20.79976,20.79976,0,0,0,2.54736.97851Q14.50141,17.81983,14.41809,18.06519Zm.36224-1.32422c-.56921-.176-1.16058-.39252-1.76214-.64551q.50867-.2677,1.02472-.56543.52955-.30579,1.0321-.62689A18.1524,18.1524,0,0,1,14.78033,16.741Zm.44629-4.74268q.00111.91095-.05688,1.82044c-.49268.33343-1.01282.659-1.554.97143-.53894.31116-1.07293.59711-1.59674.8559q-.82682-.39624-1.62176-.854-.79047-.455-1.54468-.969-.06894-.90921-.06946-1.82172l.00012.00019q-.00063-.91187.06794-1.82184c.49255-.33637,1.00891-.66168,1.54278-.96991.53632-.30969,1.077-.59442,1.61469-.85248q.81664.39688,1.60382.85065.78992.454,1.549.95868.06519.91443.06524,1.83166Zm.95673-5.09283c1.92133-.37372,3.37-.12232,3.73291.50622.3866.66962-.16748,2.1485-1.55383,3.70636l-.00006.00006q-.1149.12891-.23841.25891A20.06118,20.06118,0,0,0,15.98,9.68915a20.04054,20.04054,0,0,0-.40546-2.64893Q15.88486,6.96387,16.18335,6.90546Zm-.12988,3.8847A18.16447,18.16447,0,0,1,17.51483,11.978a18.11912,18.11912,0,0,1-1.45672,1.20831q.02325-.59391.02288-1.18842Q16.08072,11.39389,16.05347,10.79016Zm3.8681,5.78876c-.36346.63116-1.76788.89435-3.65222.53784q-.32391-.06115-.66474-.14557a20.069,20.069,0,0,0,.38746-2.68176,19.93914,19.93914,0,0,0,2.13708-1.71588q.17643.18329.33563.36487v-.00007a7.23437,7.23437,0,0,1,1.40308,2.23792A1.76563,1.76563,0,0,1,19.92157,16.57892Z"></path></svg></span>
                                    <div>
                                        <h5 className="font-semibold mb-0 flex items-center"><Link href="#!"> React Lead Developer</Link></h5>
                                        <Link href="#!">Infratech PVT LTD</Link>
                                    </div>
                                </div>
                                <div className="popular-tags mb-4">
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-geo-alt text-muted me-1"></i> Hyderabad</Link>
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-briefcase text-muted me-1"></i> 13 Openings</Link>
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-mortarboard text-muted me-1"></i> Graduate</Link>
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-clock text-muted me-1"></i> Min - 2Years</Link>
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-moon-stars text-muted me-1"></i> flexible-shift</Link>
                                </div>
                                <div className="flex justify-between">
                                    <h6 className="font-semibold mb-0">$25,000 - $35,000</h6>
                                    <Link href="" className="text-primary font-semibold text-[.875rem] inline-flex items-center">
                                        Apply Now <i className="fe fe-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box featured-jobs">
                            <div className="box-body">
                                <div className="btn-list ltr:float-right rtl:float-left">
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar avatar-sm !rounded-full bg-light !text-defaulttextcolor">
                                            <span><i className="bi bi-heart"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Add to Whislist
                                            </span>
                                        </button>
                                    </div>
                                    <div className="hs-tooltip ti-main-tooltip">
                                        <button type="button" className="hs-tooltip-toggle avatar avatar-sm !rounded-full !bg-warning/10 !text-warning">
                                            <span><i className="bi bi-star-fill"></i></span>
                                            <span
                                                className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                role="tooltip">
                                                Featured Jobs
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex mb-4 flex-wrap gap-2 items-center">
                                    <span className="avatar avatar-lg !rounded-full bg-primary/10 !fill-primary border dark:border-defaultborder/10"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path fill="var(--primary-color)" d="M22.86723,3.374a.99906.99906,0,0,0-.86622-.50195l-4.97064-.00391-.00738-.001-3.64356.001a1.00172,1.00172,0,0,0-.81787.42481l-.55859.7959L11.43851,3.291a.9983.9983,0,0,0-.81591-.42286l-3.646-.001H6.97611l-.00146.00018-.00147-.00018H6.96781l-4.97314.02734a.99989.99989,0,0,0-.85742,1.50586L11.15678,21.50586A1.00068,1.00068,0,0,0,12.01957,22h.001a1.00062,1.00062,0,0,0,.86328-.49609L22.8643,4.376A1.00212,1.00212,0,0,0,22.86723,3.374ZM10.10453,4.86816l1.085,1.53321a.99856.99856,0,0,0,.81641.42285h.00146a1.00252,1.00252,0,0,0,.8169-.42481l1.07519-1.53125,1.36267-.001-3.244,5.45373L8.7432,4.86719Zm1.9126,14.14942L3.7393,4.88477l2.66992-.01465,4.75342,7.918a1.00082,1.00082,0,0,0,.85742.48535H12.022l.001-.00012.001.00012h.002a1,1,0,0,0,.85742-.48926l4.708-7.916,2.66949.00293Z"></path></svg></span>
                                    <div>
                                        <h5 className="font-semibold mb-0 flex items-center"><Link href="#!"> Vuejs Frontend Developer</Link></h5>
                                        <Link href="#!">G Technical Solutions</Link>
                                    </div>
                                </div>
                                <div className="popular-tags mb-4">
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-geo-alt text-muted me-1"></i> Hyderabad</Link>
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-briefcase text-muted me-1"></i> 13 Openings</Link>
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-mortarboard text-muted me-1"></i> Graduate</Link>
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-clock text-muted me-1"></i> Min - 2Years</Link>
                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-moon-stars text-muted me-1"></i> flexible-shift</Link>
                                </div>
                                <div className="flex justify-between">
                                    <h6 className="font-semibold mb-0">$25,000 - $35,000</h6>
                                    <Link href="" className="text-primary font-semibold text-[.875rem] inline-flex items-center">
                                        Apply Now <i className="fe fe-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <nav aria-label="Page navigation">
                            <ul className="ti-pagination ltr:float-right rtl:float-left mb-4">
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
Searchjobs.layout = "Contentlayout"

const mapStateToProps = (state) => ({
    local_varaiable: state
});
export default connect(mapStateToProps,)(Searchjobs);