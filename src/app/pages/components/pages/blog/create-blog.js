import { Recentblogdata, option, option1, option2 } from '@/shared/data/pages/blogs/createblogdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
const Select = dynamic(() => import("react-select"), { ssr: false });
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import { FilePond } from 'react-filepond';
import DatePicker from "react-datepicker";

const Createblog = () => {

    //Filepond 
    const [files, setFiles] = useState([]);
    const [startDate, setStartDate] = useState(new Date()); //React date picker
    return (
        <Fragment>
            <Seo title={"Create Blog"} />
            <Pageheader currentpage="Create Blog" activepage="Blog" mainpage="Create Blog" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-9 xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">New Blog</div>
                        </div>
                        <div className="box-body">
                            <div className="grid grid-cols-12 gap-4">
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="blog-title" className="form-label">Blog Title</label>
                                    <input type="text" className="form-control block w-full text-[0.875rem] !rounded-md" id="blog-title" placeholder="Blog Title" />
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="blog-category" className="form-label">Blog Category</label>
                                    <Select id="blog-category" name="blog-category" options={option2} className="block w-full text-[0.875rem] !rounded-md"
                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="Select Category"
                                    />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="blog-author" className="form-label">Blog Author</label>
                                    <input type="text" className="form-control block w-full text-[0.875rem] !rounded-md" id="blog-author" placeholder="Enter Name" />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="blog-author-email" className="form-label">Email</label>
                                    <input type="text" className="form-control block w-full text-[0.875rem] !rounded-md" id="blog-author-email" placeholder="Enter Email" />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="publish-date" className="form-label">Publish Date</label>
                                    <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="publish-time" className="form-label">Publish Time</label>
                                    <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startDate} onChange={(date) => setStartDate(date)} showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="product-status-add" className="form-label">Published Status</label>
                                    <Select name="product-status-add" id="product-status-add" options={option1} className="block w-full text-[0.875rem] !rounded-md"
                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="Select Category"
                                    />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="blog-tags" className="form-label">Blog Tags</label>
                                    <Select id="blog-tags" isMulti name="blog-tags" options={option} className="block w-full text-[0.875rem] !rounded-md"
                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="Select Category" defaultValue={[option[3], option[0]]}
                                    />
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label className="form-label">Blog Content</label>
                                    <div id="blog-content">
                                        <ReactQuill />
                                    </div>
                                </div>
                                <div className="xl:col-span-12 col-span-12 blog-images-container">
                                    <label htmlFor="blog-author-email" className="form-label">Blog Images</label>
                                    <FilePond
                                        files={files}
                                        onupdatefiles={setFiles}
                                        allowMultiple={true}
                                        maxFiles={3}
                                        server="/api"
                                        name="files"
                                        labelIdle='Drag & Drop your file here or click '
                                    />
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label className="form-label">Blog Type</label>
                                    <div className="flex items-center">
                                        <div className="form-check !ps-0 me-4">
                                            <input className="form-check-input" type="radio" name="blog-type" id="blog-free1" defaultChecked />
                                            <label className="form-check-label" htmlFor="blog-free1">
                                                Free
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="blog-type" id="blog-paid1" />
                                            <label className="form-check-label" htmlFor="blog-paid1">
                                                Paid
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-footer">
                            <div className="text-end">
                                <button type="button" className="ti-btn !py-1 !px-2 ti-btn-light !text-[0.75rem] !font-medium me-2">Save As Draft</button>
                                <button type="button" className="ti-btn bg-primary text-white !py-1 !px-2 !text-[0.75rem] !font-medium">Post Blog</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Recent Blogs
                            </div>
                        </div>
                        <div className="box-body">
                            <ul className="list-group">
                                {Recentblogdata.map((idx) => (
                                    <li className="list-group-item" key={Math.random()}>
                                        <div className="flex gap-2 flex-wrap items-center">
                                            <span className="avatar avatar-xl me-1">
                                                <img src={idx.src} className="img-fluid !rounded-md" alt="..." />
                                            </span>
                                            <div className="flex-grow">
                                                <Link href="#!" className="text-[0.875rem] font-semibold mb-0">{idx.title}</Link>
                                                <p className="mb-1 popular-blog-content text-truncate">
                                                    {idx.text}
                                                </p>
                                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">{idx.time}</span>
                                            </div>
                                            <div>
                                                <button aria-label="button" type="button" className="ti-btn ti-btn-light ti-btn-sm rtl:rotate-180"><i className="ri-arrow-right-s-line"></i></button>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                                <li className="list-group-item text-center">
                                    <button type="button" className="ti-btn ti-btn-primary !font-medium">Load more</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Createblog.layout = "Contentlayout"
export default Createblog