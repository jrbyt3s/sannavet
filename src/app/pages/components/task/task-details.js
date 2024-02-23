import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React from 'react'

const Taskdetails = () => {
    return (
        <div>
            <Seo title={"Task Details"} />
            <Pageheader currentpage="Task Details" activepage="Tasks" mainpage="Task Details" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-9 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">Task Summary</div>
                            <div className="btn-list">
                                <button aria-label="button" type="button" className="ti-btn bg-success !py-1 !px-2 !font-medium text-white !text-[0.75rem] me-0"><i className="ri-edit-line me-1 align-middle"></i>Edit Task</button>
                            </div>
                        </div>
                        <div className="box-body">
                            <h5 className="font-semibold mb-4 task-title text-[1.25rem]">
                                Update ynex new project design.
                            </h5>
                            <div className="text-[.9375rem] font-semibold mb-2">Task Description :</div>
                            <p className="text-[#8c9097] dark:text-white/50 task-description">The current website design needs a refresh to improve user experience and enhance visual appeal. The goal is to create a modern and responsive design that aligns with the latest web design trends. The updated design should ensure seamless navigation, easy readability, and a cohesive visual identity.</p>
                            <div className="text-[.9375rem] font-semibold mb-2">Key tasks :</div>
                            <div>
                                <ul className="task-details-key-tasks mb-0 !ps-8">
                                    <li>Conducting a comprehensive analysis of the existing website design.</li>
                                    <li>Collaborating with the UI/UX team to develop wireframes and mockups.</li>
                                    <li>Iteratively refining the design based on feedback.</li>
                                    <li>Implementing the finalized design changes using HTML, CSS, and JavaScript.</li>
                                    <li>Testing the website across different devices and browsers.</li>
                                    <li>Conducting a final review to ensure all design elements are consistent and visually appealing.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="box-footer">
                            <div className="flex items-center justify-between gap-2 flex-wrap">
                                <div>
                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">Assigned By</span>
                                    <div className="flex items-center flex-wrap">
                                        <div className="me-2 leading-none">
                                            <span className="avatar avatar-xs avatar-rounded">
                                                <img src="../../../assets/images/faces/15.jpg" alt="" />
                                            </span>
                                        </div>
                                        <span className="block text-[.875rem] dark:text-defaulttextcolor/70 font-semibold">H.J.Taylor</span>
                                    </div>
                                </div>
                                <div>
                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">Assigned Date</span>
                                    <span className="block text-[.875rem] font-semibold dark:text-defaulttextcolor/70">24,June 2023</span>
                                </div>
                                <div>
                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">Due Date</span>
                                    <span className="block text-[.875rem] font-semibold dark:text-defaulttextcolor/70">05,July 2023</span>
                                </div>
                                <div className="task-details-progress">
                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] mb-1">Progress</span>
                                    <div className="flex items-center flex-wrap">
                                        <div className="progress progress-xs progress-animate flex-grow me-2" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                            <div className="progress-bar bg-primary w-[70%]"></div>
                                        </div>
                                        <div className="text-[#8c9097] dark:text-white/50 text-[.6875rem]">70%</div>
                                    </div>
                                </div>
                                <div>
                                    <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem]">Efforts</span>
                                    <span className="block text-[.875rem]  dark:text-defaulttextcolor/70 font-semibold">45H : 35M : 45S</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">Task Discussions</div>
                        </div>
                        <div className="box-body text-defaulttextcolor text-defaultsize">
                            <ul className="list-none profile-timeline">
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm bg-primary/10 !text-primary avatar-rounded profile-timeline-avatar">
                                            E
                                        </span>
                                        <p className="mb-2">
                                            <b>You</b> Commented on <b>Work Process</b> in this task <Link className="text-secondary" href="#!"><u>#New Task</u></Link>.<span className="ltr:float-right rtl:float-left text-[.6875rem] text-[#8c9097] dark:text-white/50">24,Dec 2023 - 14:34</span>
                                        </p>
                                        <p className="text-[#8c9097] dark:text-white/50 mb-0">
                                            Task is important and need to be completed on time to meet company work flow.
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                            <img src="../../../assets/images/faces/11.jpg" alt="" />
                                        </span>
                                        <p className="text-[#8c9097] dark:text-white/50 mb-2">
                                            <span className="text-default"><b>Json Smith</b> reacted to the task 👍</span>.<span className="ltr:float-right rtl:float-left text-[.6875rem] text-[#8c9097] dark:text-white/50">18,Dec 2023 - 12:16</span>
                                        </p>
                                        <p className="text-[#8c9097] dark:text-white/50 mb-0">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, repellendus rem rerum excepturi aperiam ipsam temporibus inventore ullam tempora eligendi libero sequi dignissimos cumque, et a sint tenetur consequatur omnis!
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                            <img src="../../../assets/images/faces/4.jpg" alt="" />
                                        </span>
                                        <p className="text-[#8c9097] dark:text-white/50 mb-2">
                                            <span className="text-default"><b>Alicia Keys</b> shared a document with <b>you</b></span>.<span className="ltr:float-right rtl:float-left text-[.6875rem] text-[#8c9097] dark:text-white/50">21,Dec 2023 - 15:32</span>
                                        </p>
                                        <p className="profile-activity-media mb-0 flex items-center">
                                            <Link aria-label="anchor" href="#!">
                                                <img src="../../../assets/images/media/file-manager/3.png" alt="" />
                                            </Link>
                                            <span className="text-[.6875rem] text-[#8c9097] dark:text-white/50">432.87KB</span>
                                        </p>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm bg-success/10 !text-success avatar-rounded profile-timeline-avatar">
                                            P
                                        </span>
                                        <p className="text-[#8c9097] dark:text-white/50 mb-2">
                                            <span className="text-default"><b>You</b> shared a post with 4 people <b className="sm:text-sm text-[0.7rem]">Simon,Sasha,Anagha,Hishen</b></span>.<span className="ltr:float-right rtl:float-left text-[.6875rem] text-[#8c9097] dark:text-white/50">28,Dec 2023 - 18:46</span>
                                        </p>
                                        <p className="profile-activity-media mb-2">
                                            <Link aria-label="anchor" href="#!">
                                                <img src="../../../assets/images/media/media-18.jpg" alt="" />
                                            </Link>
                                        </p>
                                        <div>
                                            <div className="avatar-list-stacked">
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                </span>
                                                <span className="avatar avatar-sm avatar-rounded">
                                                    <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <div>
                                        <span className="avatar avatar-sm avatar-rounded profile-timeline-avatar">
                                            <img src="../../../assets/images/media/media-39.jpg" alt="" />
                                        </span>
                                        <p className="mb-1">
                                            <b>Json</b> Commented on Task post <Link className="text-secondary" href="#!"><u>#UI Technologies</u></Link>.<span className="ltr:float-right rtl:float-left text-[.6875rem] text-[#8c9097] dark:text-white/50">24,Dec 2023 - 14:34</span>
                                        </p>
                                        <p className="text-[#8c9097] dark:text-white/50">Technology id developing rapidly keep up your work 👌</p>
                                        <p className="profile-activity-media mb-0 flex">
                                            <Link aria-label="anchor" href="#!">
                                                <img src="../../../assets/images/media/media-26.jpg" alt="" />
                                            </Link>
                                            <Link aria-label="anchor" href="#!">
                                                <img src="../../../assets/images/media/media-29.jpg" alt="" />
                                            </Link>
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="box-footer">
                            <div className=" !p-0 !border-0">
                                <div className="sm:flex items-center leading-none ">
                                    <div className="me-4">
                                        <span className="avatar avatar-md avatar-rounded">
                                            <img src="../../../assets/images/faces/9.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="flex-grow me-2">
                                        <div className="inline-flex !w-full">
                                            <input type="text" className="form-control w-full !rounded-e-none" placeholder="Post Anything" aria-label="Recipient's username with two button addons" />
                                            <button aria-label="button" type="button" className="ti-btn ti-btn-light !rounded-none !mb-0"><i className="bi bi-emoji-smile"></i></button>
                                            <button aria-label="button" type="button" className="ti-btn ti-btn-light !rounded-none !mb-0"><i className="bi bi-paperclip"></i></button>
                                            <button aria-label="button" type="button" className="ti-btn ti-btn-light !rounded-none !mb-0"><i className="bi bi-camera"></i></button>
                                            <button className="ti-btn bg-primary text-white !rounded-s-none !mb-0" type="button">Post</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Additional Details
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <div className="table-responsive">
                                <table className="table whitespace-nowrap min-w-full">
                                    <tbody>
                                        <tr className="border-b border-defaultborder">
                                            <td><span className="font-semibold">Task ID :</span></td>
                                            <td>SPK - 123</td>
                                        </tr>
                                        <tr className="border-b border-defaultborder">
                                            <td><span className="font-semibold">Task Tags :</span></td>
                                            <td>
                                                <span className="badge bg-primary/10 me-2 text-primary">UI/Ux</span>
                                                <span className="badge bg-primary/10 me-2 text-primary">Designing</span>
                                                <span className="badge bg-primary/10 text-primary">Development</span>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-defaultborder">
                                            <td><span className="font-semibold">Project Name :</span></td>
                                            <td>
                                                Ynex admin &amp; dashboard template
                                            </td>
                                        </tr>
                                        <tr className="border-b border-defaultborder">
                                            <td><span className="font-semibold">Project Status :</span></td>
                                            <td>
                                                <span className="font-semibold text-secondary">Inprogress</span>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-defaultborder">
                                            <td><span className="font-semibold">Project Priority :</span></td>
                                            <td>
                                                <span className="badge bg-danger/10 text-danger">High</span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><span className="font-semibold">Assigned To :</span></td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/2.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="box overflow-hidden">
                        <div className="box-header justify-between">
                            <div className="box-title">Sub Tasks</div>
                            <div>
                                <button type="button" className="ti-btn ti-btn-secondary !py-1 !px-2 !font-medium !text-[0.75rem]"><i className="ri-add-line  align-middle"></i>Sub Task</button>
                            </div>
                        </div>
                        <div className="box-body">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <div className="flex items-center flex-wrap">
                                        <div className="me-2"><input className="form-check-input form-checked-success " type="checkbox" value="" id="successChecked1" defaultChecked /></div>
                                        <div className="font-semibold">Conduct Website Design Analysis</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center flex-wrap">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked2" /></div>
                                        <div className="font-semibold">Collaborate with UI/UX Team</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center flex-wrap">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked3" /></div>
                                        <div className="font-semibold">Refine Design Iteratively</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center flex-wrap">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked4" /></div>
                                        <div className="font-semibold">Implement Design Changes</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center flex-wrap">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked5" defaultChecked /></div>
                                        <div className="font-semibold">Test Responsive and Cross-Browser Compatibility</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center flex-wrap">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked6" defaultChecked /></div>
                                        <div className="font-semibold">Review and Polish Design Elements</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center flex-wrap">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked7" defaultChecked /></div>
                                        <div className="font-semibold">Incorporate Branding Elements</div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center flex-wrap">
                                        <div className="me-2"><input className="form-check-input form-checked-success" type="checkbox" value="" id="successChecked8" /></div>
                                        <div className="font-semibold">Documentation and Handover</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="box overflow-hidden">
                        <div className="box-header !border-b-0">
                            <div className="box-title">
                                Attachments
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="flex items-center flex-wrap">
                                        <div className="me-2">
                                            <span className="avatar avatar-rounded p-2 bg-light">
                                                <img src="../../../assets/images/media/file-manager/1.png" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <Link href="#!"><span className="block font-semibold">Full Project</span></Link>
                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] font-normal">0.45MB</span>
                                        </div>
                                        <div className="btn-list">
                                            <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-info me-[0.365rem]"><i className="ri-edit-line"></i></button>
                                            <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-danger"><i className="ri-delete-bin-line"></i></button>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center flex-wrap">
                                        <div className="me-2 leading-none">
                                            <span className="avatar avatar-rounded bg-light">
                                                <img src="../../../assets/images/media/file-manager/3.png" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <Link href="#!"><span className="block font-semibold">assets.zip</span></Link>
                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] font-normal">0.99MB</span>
                                        </div>
                                        <div className="btn-list">
                                            <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-info me-[0.365rem]"><i className="ri-edit-line"></i></button>
                                            <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-danger"><i className="ri-delete-bin-line"></i></button>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center flex-wrap">
                                        <div className="me-2 leading-none">
                                            <span className="avatar avatar-rounded p-2 bg-light">
                                                <img src="../../../assets/images/media/file-manager/1.png" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <Link href="#!"><span className="block font-semibold">image-1.png</span></Link>
                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] font-normal">245KB</span>
                                        </div>
                                        <div className="btn-list">
                                            <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-info me-[0.365rem]"><i className="ri-edit-line"></i></button>
                                            <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-danger"><i className="ri-delete-bin-line"></i></button>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center flex-wrap">
                                        <div className="me-2 leading-none">
                                            <span className="avatar avatar-rounded bg-light">
                                                <img src="../../../assets/images/media/file-manager/3.png" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <Link href="#!"><span className="block font-semibold">Docs.zip</span></Link>
                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] font-normal">2MB</span>
                                        </div>
                                        <div className="btn-list">
                                            <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-info me-[0.365rem]"><i className="ri-edit-line"></i></button>
                                            <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-danger"><i className="ri-delete-bin-line"></i></button>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div className="flex items-center flex-wrap">
                                        <div className="me-2 leading-none">
                                            <span className="avatar avatar-rounded bg-light">
                                                <img src="../../../assets/images/media/file-manager/3.png" alt="" />
                                            </span>
                                        </div>
                                        <div className="flex-grow">
                                            <Link href="#!"><span className="block font-semibold">landing.zip</span></Link>
                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.75rem] font-normal">3.46MB</span>
                                        </div>
                                        <div className="btn-list">
                                            <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-info me-[0.365rem]"><i className="ri-edit-line"></i></button>
                                            <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-danger"><i className="ri-delete-bin-line"></i></button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
Taskdetails.layout = "Contentlayout"

export default Taskdetails