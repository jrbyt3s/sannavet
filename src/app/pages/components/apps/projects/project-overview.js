import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React, { Fragment } from 'react'

const Projectoverview = () => {
    return (
        <Fragment>
            <Seo title={"Project Overview"} />
            <Pageheader currentpage="Project Overview" activepage="Projects" mainpage="Project Overview" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-9 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header justify-between flex">
                            <div className="box-title">
                                Project Details
                            </div>
                            <div>
                                <Link href="/components/apps/projects/create-project/" className="ti-btn !py-1 !px-2 !text-[0.75rem] ti-btn-secondary btn-wave"><i className="ri-add-line align-middle me-1 font-semibold"></i>Create Project</Link>
                            </div>
                        </div>
                        <div className="box-body">
                            <h5 className="font-semibold mb-4 task-title">
                                Ynex new angular project.
                            </h5>
                            <div className="text-[.9375rem] font-semibold mb-2">Project Description :</div>
                            <p className="text-[#8c9097] dark:text-white/50 task-description">The current website design needs a refresh to improve user experience and enhance visual appeal. The goal is to create a modern and responsive design that aligns with the latest web design trends. The updated design should ensure seamless navigation, easy readability, and a cohesive visual identity.</p>
                            <div className="text-[.9375rem] font-semibold mb-2">Key tasks :</div>
                            <div className="mb-3">
                                <ul className="task-details-key-tasks ps-[2rem] mb-0">
                                    <li>Conducting a comprehensive analysis of the existing website design.</li>
                                    <li>Collaborating with the UI/UX team to develop wireframes and mockups.</li>
                                    <li>Iteratively refining the design based on feedback.</li>
                                    <li>Implementing the finalized design changes using HTML, CSS, and JavaScript.</li>
                                    <li>Testing the website across different devices and browsers.</li>
                                    <li>Conducting a final review to ensure all design elements are consistent and visually appealing.</li>
                                </ul>
                            </div>
                            <div className="text-[.9375rem] font-semibold mb-2">Skills :</div>
                            <div>
                                <span className="badge me-2 bg-light text-default">UI/Ux</span>
                                <span className="badge me-2 bg-light text-default">JavaScript</span>
                                <span className="badge me-2 bg-light text-default">Responsive Design</span>
                                <span className="badge me-2 bg-light text-default">Web Accessibility</span>
                                <span className="badge me-2 bg-light text-default">Front-End Build Tools</span>
                                <span className="badge me-2 bg-light text-default">RESTful APIs</span>
                                <span className="badge me-2 bg-light text-default">Performance Testing</span>
                                <span className="badge me-2 bg-light text-default">Angular</span>
                                <span className="badge bg-light text-default">Vue.js</span>
                            </div>
                        </div>
                        <div className="box-footer">
                            <div className="flex items-center justify-between gap-2 flex-wrap">
                                <div>
                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">Project Manager</span>
                                    <div className="flex items-center">
                                        <div className="me-2 leading-none">
                                            <span className="avatar avatar-xs !rounded-full">
                                                <img src="../../../../assets/images/faces/13.jpg" alt="" />
                                            </span>
                                        </div>
                                        <span className="block text-[.875rem] font-semibold">S.K.Jacob</span>
                                    </div>
                                </div>
                                <div>
                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">Start Date</span>
                                    <span className="block text-[.875rem] font-semibold">22,June 2023</span>
                                </div>
                                <div>
                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">End Date</span>
                                    <span className="block text-[.875rem] font-semibold">10,July 2023</span>
                                </div>
                                <div>
                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">Assigned To</span>
                                    <div className="avatar-list-stacked">
                                        <span className="avatar avatar-sm !rounded-full">
                                            <img src="../../../../assets/images/faces/2.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm !rounded-full">
                                            <img src="../../../../assets/images/faces/8.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm !rounded-full">
                                            <img src="../../../../assets/images/faces/5.jpg" alt="img" />
                                        </span>
                                        <span className="avatar avatar-sm !rounded-full">
                                            <img src="../../../../assets/images/faces/10.jpg" alt="img" />
                                        </span>
                                    </div>
                                </div>
                                <div>
                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">Status</span>
                                    <span className="block"><span className="badge bg-primary/10 text-primary">In Progress</span></span>
                                </div>
                                <div>
                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">Priority</span>
                                    <span className="block text-[.875rem] font-semibold"><span className="badge bg-success/10 text-success">Low</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Project Discussions</div>
                        </div>
                        <div className="box-body">
                            <ul className="list-unstyled profile-timeline">
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm bg-primary/10 !text-primary !rounded-full profile-timeline-avatar">
                                            E
                                        </span>
                                        <p className="mb-2">
                                            <b>You</b> Commented on <b>Work Process</b> in this project <Link className="text-secondary" href="#!"><u>#New Project</u></Link>.<span className="float-end text-[0.6875rem] text-[#8c9097] dark:text-white/50">24,Dec 2023 - 14:34</span>
                                        </p>
                                        <p className="text-[#8c9097] dark:text-white/50 mb-0">
                                            Project is important and need to be completed on time to meet company work flow.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm  profile-timeline-avatar">
                                            <img src="../../../../assets/images/faces/11.jpg" alt="" className="!rounded-full" />
                                        </span>
                                        <p className="text-[#8c9097] dark:text-white/50 mb-2">
                                            <span className="text-default"><b>Json Smith</b> reacted to the project 👍</span>.<span className="float-end text-[0.6875rem] text-[#8c9097] dark:text-white/50">18,Dec 2023 - 12:16</span>
                                        </p>
                                        <p className="text-[#8c9097] dark:text-white/50 mb-0">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, repellendus rem rerum excepturi aperiam ipsam temporibus inventore ullam tempora eligendi libero sequi dignissimos cumque, et a sint tenetur consequatur omnis!
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm  profile-timeline-avatar">
                                            <img src="../../../../assets/images/faces/4.jpg" alt="" className="!rounded-full" />
                                        </span>
                                        <p className="text-[#8c9097] dark:text-white/50 mb-2">
                                            <span className="text-default"><b>Alicia Keys</b> shared a document with <b>you</b></span>.<span className="float-end text-[0.6875rem] text-[#8c9097] dark:text-white/50">21,Dec 2023 - 15:32</span>
                                        </p>
                                        <p className="profile-activity-media flex items-center mb-0">
                                            <Link aria-label="anchor" href="#!">
                                                <img src="../../../../assets/images/media/file-manager/3.png" alt="" />
                                            </Link>
                                            <span className="text-[.6875rem] text-[#8c9097] dark:text-white/50">432.87KB</span>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm bg-success/10 !text-success !rounded-full profile-timeline-avatar">
                                            P
                                        </span>
                                        <p className="text-[#8c9097] dark:text-white/50 mb-2 text-truncate">
                                            <span className="text-default"><b>You</b> shared a post with 4 people <b>Simon,Sasha,Anagha,Hishen</b></span>.<span className="float-end text-[0.6875rem] text-[#8c9097] dark:text-white/50">28,Dec 2023 - 18:46</span>
                                        </p>
                                        <p className="profile-activity-media mb-2">
                                            <Link aria-label="anchor" href="#!">
                                                <img src="../../../../assets/images/media/media-18.jpg" alt="" />
                                            </Link>
                                        </p>
                                        <div>
                                            <div className="avatar-list-stacked">
                                                <span className="avatar avatar-sm !rounded-full">
                                                    <img src="../../../../assets/images/faces/2.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm !rounded-full">
                                                    <img src="../../../../assets/images/faces/8.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm !rounded-full">
                                                    <img src="../../../../assets/images/faces/5.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm !rounded-full">
                                                    <img src="../../../../assets/images/faces/10.jpg" alt="img" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm profile-timeline-avatar">
                                            <img src="../../../../assets/images/media/media-39.jpg" alt="" className="!rounded-full" />
                                        </span>
                                        <p className="mb-1">
                                            <b>Json</b> Commented on Project <Link className="text-secondary" href="#!"><u>#UI Technologies</u></Link>.<span className="float-end text-[0.6875rem] text-[#8c9097] dark:text-white/50">24,Dec 2023 - 14:34</span>
                                        </p>
                                        <p className="text-[#8c9097] dark:text-white/50">Technology id developing rapidly keep up your work 👌</p>
                                        <p className="profile-activity-media flex items-center mb-0">
                                            <Link aria-label="anchor" href="#!">
                                                <img src="../../../../assets/images/media/media-26.jpg" alt="" />
                                            </Link>
                                            <Link aria-label="anchor" href="#!">
                                                <img src="../../../../assets/images/media/media-29.jpg" alt="" />
                                            </Link>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="box-footer">
                            <div className="list-group-item">
                                <div className="sm:flex items-center leading-none">
                                    <div className="me-4">
                                        <span className="avatar avatar-md ">
                                            <img src="../../../../assets/images/faces/9.jpg" alt="" className="!rounded-full" />
                                        </span>
                                    </div>
                                    <div className="flex-grow">
                                        <div className="inline-flex !w-full">
                                            <input type="text" className="form-control !w-full !rounded-e-none" placeholder="Post Anything" aria-label="Recipient's username with two button addons" />
                                            <button aria-label="button" type="button" className="!hidden sm:!flex ti-btn ti-btn-light !rounded-none !mb-0"><i className="bi bi-emoji-smile"></i></button>
                                            <button aria-label="button" type="button" className="!hidden sm:!flex ti-btn ti-btn-light !rounded-none !mb-0"><i className="bi bi-paperclip"></i></button>
                                            <button aria-label="button" type="button" className="!hidden sm:!flex ti-btn ti-btn-light !rounded-none !mb-0"><i className="bi bi-camera"></i></button>
                                            <button className="ti-btn bg-primary text-white !mb-0 !rounded-s-none" type="button">Post</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Project Team
                            </div>
                            <div>
                                <button type="button" className="ti-btn ti-btn-light !py-1 !px-2 !text-[0.75rem]"><i className="ri-add-line align-middle me-1 font-semibold"></i>Add Member</button>
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <div className="table-responsive">
                                <table className="table whitespace-nowrap min-w-full">
                                    <thead>
                                        <tr>
                                            <th scope="row" className="text-start">Name</th>
                                            <th scope="row" className="text-start">Designation</th>
                                            <th scope="row" className="text-start">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border border-defaultborder">
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="me-2 leading-none">
                                                        <span className="avatar avatar-sm ">
                                                            <img src="../../../../assets/images/faces/2.jpg" alt="" className="!rounded-full" />
                                                        </span>
                                                    </div>
                                                    <div className="font-semibold">Simon Conway</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-primary/10 text-primary">UI Developer</span>
                                            </td>
                                            <td>
                                                <div className="inline-flex">
                                                    <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-info me-[0.375rem]"><i className="ri-edit-line"></i></button>
                                                    <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-danger"><i className="ri-delete-bin-line"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder">
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="me-2 leading-none">
                                                        <span className="avatar avatar-sm !rounded-full">
                                                            <img src="../../../../assets/images/faces/8.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="font-semibold">Sasha Banks</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-pink/10 text-pink">Ui Designer</span>
                                            </td>
                                            <td>
                                                <div className="inline-flex">
                                                    <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-info me-[0.375rem]"><i className="ri-edit-line"></i></button>
                                                    <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-danger"><i className="ri-delete-bin-line"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder">
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="me-2 leading-none">
                                                        <span className="avatar avatar-sm !rounded-full">
                                                            <img src="../../../../assets/images/faces/5.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="font-semibold">Anagha May</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-warning/10 text-warning">UI Tester</span>
                                            </td>
                                            <td>
                                                <div className="inline-flex">
                                                    <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-info me-[0.375rem]"><i className="ri-edit-line"></i></button>
                                                    <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-danger"><i className="ri-delete-bin-line"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder">
                                            <td>
                                                <div className="flex items-center">
                                                    <div className="me-2 leading-none">
                                                        <span className="avatar avatar-sm !rounded-full">
                                                            <img src="../../../../assets/images/faces/10.jpg" alt="" />
                                                        </span>
                                                    </div>
                                                    <div className="font-semibold">Hishen Stuart</div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="badge bg-success/10 text-success">Angular Developer</span>
                                            </td>
                                            <td>
                                                <div className="inline-flex">
                                                    <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-info me-[0.375rem]"><i className="ri-edit-line"></i></button>
                                                    <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-danger"><i className="ri-delete-bin-line"></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="box custom-box">
                        <div className="box-header justify-between">
                            <div className="box-title">Project Goals</div>
                            <div className="ti-btn !py-1 !px-2 !text-[0.75rem] ti-btn-light btn-wave"><i className="ri-add-line align-middle me-1 font-semibold"></i>Add Goal</div>
                        </div>
                        <div className="box-body">
                            <ul className="list-group ">
                                <li className="list-group-item">
                                    <div className="flex items-center">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked1" defaultChecked /></div>
                                        <div className="font-semibold">Increase Efficiency</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked2" /></div>
                                        <div className="font-semibold">Enhance Customer Satisfaction</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked3" /></div>
                                        <div className="font-semibold">Expand Market Reach</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked4" /></div>
                                        <div className="font-semibold">Improve Profitability</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked5" defaultChecked /></div>
                                        <div className="font-semibold">Enhance Product/Service Quality</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked6" defaultChecked /></div>
                                        <div className="font-semibold">Develop Innovative Solutions</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked7" defaultChecked /></div>
                                        <div className="font-semibold">Increase Employee Engagement</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked8" /></div>
                                        <div className="font-semibold">Enhance Brand Reputation</div>
                                    </div>
                                </li>
                            </ul>
                            <div className="mt-4 text-center">
                                <button type="button" className="ti-btn ti-btn-success-full btn-wave">View All</button>
                            </div>
                        </div>
                    </div>
                    <div className="box custom-box overflow-hidden">
                        <div className="box-header">
                            <div className="box-title">
                                Project Documents
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="flex items-center flex-wrap">
                                        <div className="me-2">
                                            <span className="avatar !rounded-full p-2 bg-light">
                                                <img src="../../../../assets/images/media/file-manager/1.png" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <Link href="#!"><span className="block font-semibold">Full Project</span></Link>
                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] font-normal">0.45MB</span>
                                        </div>
                                        <div className="inline-flex">
                                            <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-info me-[0.375rem]"><i className="ri-edit-line"></i></button>
                                            <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-danger"><i className="ri-delete-bin-line"></i></button>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center flex-wrap">
                                        <div className="me-2 leading-none">
                                            <span className="avatar !rounded-full bg-light">
                                                <img src="../../../../assets/images/media/file-manager/3.png" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <Link href="#!"><span className="block font-semibold">assets.zip</span></Link>
                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] font-normal">0.99MB</span>
                                        </div>
                                        <div className="inline-flex">
                                            <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-info me-[0.375rem]"><i className="ri-edit-line"></i></button>
                                            <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-danger"><i className="ri-delete-bin-line"></i></button>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center flex-wrap">
                                        <div className="me-2 leading-none">
                                            <span className="avatar !rounded-full p-2 bg-light">
                                                <img src="../../../../assets/images/media/file-manager/1.png" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <Link href="#!"><span className="block font-semibold">image-1.png</span></Link>
                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] font-normal">245KB</span>
                                        </div>
                                        <div className="inline-flex">
                                            <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-info me-[0.375rem]"><i className="ri-edit-line"></i></button>
                                            <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-danger"><i className="ri-delete-bin-line"></i></button>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center flex-wrap">
                                        <div className="me-2 leading-none">
                                            <span className="avatar !rounded-full bg-light">
                                                <img src="../../../../assets/images/media/file-manager/3.png" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <Link href="#!"><span className="block font-semibold">doc.zip</span></Link>
                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] font-normal">2MB</span>
                                        </div>
                                        <div className="inline-flex">
                                            <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-info me-[0.375rem]"><i className="ri-edit-line"></i></button>
                                            <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-danger"><i className="ri-delete-bin-line"></i></button>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center flex-wrap">
                                        <div className="me-2 leading-none">
                                            <span className="avatar !rounded-full bg-light">
                                                <img src="../../../../assets/images/media/file-manager/3.png" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <Link href="#!"><span className="block font-semibold">landing.zip</span></Link>
                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] font-normal">3.46MB</span>
                                        </div>
                                        <div className="inline-flex">
                                            <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-info me-[0.375rem]"><i className="ri-edit-line"></i></button>
                                            <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-danger"><i className="ri-delete-bin-line"></i></button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Projectoverview.layout = "Contentlayout"

export default Projectoverview