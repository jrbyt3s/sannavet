import { jobpost1, jobpost10, jobpost11, jobpost2, jobpost3, jobpost4, jobpost5, jobpost6, jobpost7, jobpost8, jobpost9 } from '@/shared/data/apps/jobs/jobpostdata';
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment, useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
const Select = dynamic(() => import("react-select"), { ssr: false });
import DatePicker from "react-datepicker";
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Jobpost = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [selected1, setSelected1] = useState([]);
    const [selected2, setSelected2] = useState([]);
    const [selected3, setSelected3] = useState([]);
    const [selected4, setSelected4] = useState([]);
    const [selected5, setSelected5] = useState([]);

    //Datepicker function
    const handleDateChange = (date) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };

    return (
        <Fragment>
            <Seo title={"Job Post"} />
            <Pageheader currentpage="Job Post" activepage="Jobs" mainpage="Job Post" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xxl:col-span-9 xl:col-span-8 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Post New Job
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="grid grid-cols-12 sm:gap-6 mb-4">
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="job-title" className="form-label">Job Title</label>
                                    <input type="text" className="form-control" id="job-title" placeholder="Job Title" defaultValue="Web Developer" />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="Job Category" className="form-label">Job Category</label>
                                    <Select isMulti name="colors" options={jobpost1} className="ti-form-select !p-0 !rounded-s-none"
                                        menuPlacement='auto' classNamePrefix="Select2" />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="Experience" className="form-label">Working Experience</label>
                                    <Select isMulti name="colors" options={jobpost2} className="ti-form-select !p-0 !rounded-s-none"
                                        menuPlacement='auto' classNamePrefix="Select2" />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="jobtype" className="form-label">Job Type</label>
                                    <Select isMulti name="colors" options={jobpost2} className="ti-form-select !p-0 !rounded-s-none"
                                        menuPlacement='auto' classNamePrefix="Select2" />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="Priority" className="form-label">Priority</label>
                                    <Select options={jobpost3} classNamePrefix='Select2' menuPlacement='auto' className=""
                                        placeholder="" defaultValue={[jobpost3[0]]} />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="Vacancies" className="form-label">Vacancies</label>
                                    <Select isMulti name="colors" options={jobpost4} className="ti-form-select !p-0 !rounded-s-none"
                                        menuPlacement='auto' classNamePrefix="Select2" />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="Salary" className="form-label">Salary</label>
                                    <Select options={jobpost5} classNamePrefix='Select2' menuPlacement='auto' className="" placeholder="" defaultValue={[jobpost5[0]]} />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="skills" className="form-label">Skills :</label>
                                    <Select isMulti name="colors" options={jobpost6} className="" classNamePrefix="Select2"
                                        defaultValue={[jobpost6[0], jobpost6[1], jobpost6[2]]} />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="Job-Deadline" className="form-label">Job Deadline</label>
                                    <DatePicker selected={startDate} onChange={handleDateChange} placeholderText="Job Deadline" />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="gender" className="form-label">Gender Requirement</label>
                                    <Select name="colors" options={jobpost7} className="" classNamePrefix="Select2"
                                        defaultValue={[jobpost7[0]]} />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="language" className="form-label">Languages :</label>
                                    <Select isMulti name="colors" options={jobpost8} className="" classNamePrefix="Select2"
                                        defaultValue={[jobpost8[0], jobpost8[3]]} />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="Qualification" className="form-label">Qualification :</label>
                                    <Select isMulti name="colors" options={jobpost9} className="" classNamePrefix="Select2"
                                        defaultValue={[jobpost9[0], jobpost9[2], jobpost9[3]]} />
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="bio" className="form-label">Job Description :</label>
                                    <textarea className="form-control" id="job-description" rows="4" defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit impedit, officiis non minima saepe voluptates a magnam enim sequi porro veniam ea suscipit dolorum vel mollitia voluptate iste nemo!" />
                                </div>
                            </div>
                        </div>
                        <div className="box-footer text-end">
                            <Link href="#!" className="ti-btn ti-btn-primary-full btn-wave waves-effect waves-light">
                                <i className="bi bi-plus-circle"></i> Post Job
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-4 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Assign To Employer</div>
                        </div>
                        <div className="box-body">
                            <div className="xl:col-span-12 col-span-12">
                                <label htmlFor="Employer Name" className="form-label">Employer Name</label>
                                <Select isMulti name="colors" options={jobpost10} className="ti-form-select !p-0 !rounded-s-none"
                                    menuPlacement='auto' classNamePrefix="Select2" />
                            </div>
                        </div>
                    </div>
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Company Details</div>
                        </div>
                        <div className="box-body">
                            <div className="grid grid-cols-12 gap-4">
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="Company Name" className="form-label">Company Name</label>
                                    <input type="text" className="form-control" placeholder="Company Name" defaultValue="Obligation Pvt.Ltd" />
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="Company Website" className="form-label">Company Website</label>
                                    <input type="text" className="form-control" placeholder="Company Website" defaultValue="http//www.obligationpvtltd.com" />
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="Country" className="form-label">Country</label>
                                    <Select name="colors" options={jobpost11} className="" classNamePrefix="Select2" defaultValue={[jobpost11[0]]}
                                    />
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="Company Address" className="form-label">Address</label>
                                    <input type="text" className="form-control" placeholder="Company Address" defaultValue="USA" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Jobpost.layout = "Contentlayout"

export default Jobpost