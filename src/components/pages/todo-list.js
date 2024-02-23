import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import DatePicker from "react-datepicker";
import { MultiSelect } from 'react-multi-select-component';
const Select = dynamic(() => import("react-select"), {ssr : false});

const Todolist = () => {

    const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const Option1 = [
        { value: 'Angelina May', label: 'Angelina May' },
        { value: 'Kiara advain', label: 'Kiara advain' },
        { value: 'Hercules Jhon', label: 'Hercules Jhon' },
        { value: 'Mayor Kim', label: 'Mayor Kim' },
    ];
    const [selected1, setSelected1] = useState([]);
    const Option2 = [
        { value: 'Select', label: 'Select' },
        { value: 'Critical', label: 'Critical' },
        { value: 'High', label: 'High' },
        { value: 'Medium', label: 'Medium' },
        { value: 'Low', label: 'Low' }
    ];

    return (
        <Fragment>
            <Seo title={"Todo List"} />
            <Pageheader currentpage="Todo List" activepage="Pages" mainpage="Todo List" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-3 col-span-12">
                    <div className="box">
                        <div className="box-body !p-0">
                            <div className="p-4 grid border-b border-dashed dark:border-defaultborder/10">
                                <Link href="#!" className="hs-dropdown-toggle py-2  px-3 ti-btn bg-primary text-white !font-medium w-full !mb-0" data-hs-overlay="#todo-compose"><i className="ri-add-circle-line !text-[1rem]"></i>Create New Task
                                </Link>
                                <div id="todo-compose" className="hs-overlay hidden ti-modal">
                                    <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
                                        <div className="ti-modal-content">
                                            <div className="ti-modal-header">
                                                <h6 className="modal-title text-[1rem] font-semibold" id="mail-ComposeLabel">Create Task</h6>
                                                <button type="button" className="hs-dropdown-toggle !text-[1rem] !font-semibold !text-defaulttextcolor" data-hs-overlay="#todo-compose">
                                                    <span className="sr-only">Close</span>
                                                    <i className="ri-close-line"></i>
                                                </button>
                                            </div>
                                            <div className="ti-modal-body !overflow-visible px-4">
                                                <div className="grid grid-cols-12 gap-2">
                                                    <div className="xl:col-span-12 col-span-12">
                                                        <label htmlFor="task-name" className="ti-form-label">Task Name</label>
                                                        <input type="text" className="form-control w-full" id="task-name" placeholder="Task Name" />
                                                    </div>
                                                    <div className="xl:col-span-12 col-span-12">
                                                        <label className="ti-form-label">Assigned To</label>
                                                         <Select isMulti name="colors" options={Option1} className="ti-form-select !p-0 !rounded-s-none"
                                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Option1[0]]} />
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label className="ti-form-label">Assigned Date</label>
                                                        <div className="inline-flex w-full">
                                                            <div className="input-group-text text-[#8c9097] dark:text-white/50 !rounded-e-none border border-defaultborder"> <i className="ri-calendar-line"></i> </div>
                                                            <DatePicker
                                                                selected={startDate}
                                                                onChange={handleDateChange}
                                                                timeInputLabel="Time:"
                                                                dateFormat="yy/MM/dd h:mm aa"
                                                                placeholderText='Choose date and time'
                                                                showTimeInput
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label className="ti-form-label">Target Date</label>
                                                        <div className="inline-flex w-full">
                                                            <div className="input-group-text text-[#8c9097] dark:text-white/50 !rounded-e-none border border-defaultborder"> <i className="ri-calendar-line"></i> </div>
                                                            <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startDate} onChange={(date) => setStartDate(date)} />
                                                            
                                                        </div>
                                                    </div>
                                                    <div className="xl:col-span-12 col-span-12">
                                                        <label className="ti-form-label">Priority</label>
                                                             <Select isMulti name="colors" options={Option2} className="ti-form-select !p-0 !rounded-s-none"
                                                    menuPlacement='auto' classNamePrefix="Select2"/>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ti-modal-footer">
                                                <button type="button"
                                                    className="hs-dropdown-toggle ti-btn  ti-btn-light align-middle"
                                                    data-hs-overlay="#todo-compose">
                                                    Cancel
                                                </button>
                                                <button type="button" className="ti-btn bg-primary text-white !font-medium">Create</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-b border-dashed dark:border-defaultborder/10">
                                <div className="input-group">
                                    <input type="text" className="form-control w-full !rounded-md !bg-light border-0 !rounded-e-none" placeholder="Search Task Here" aria-describedby="button-addon2" />
                                    <button type="button" aria-label="button" className="ti-btn ti-btn-light !rounded-s-none !mb-0" id="button-addon2"><i className="ri-search-line text-[#8c9097] dark:text-white/50"></i></button>
                                </div>
                            </div>
                            <div className="p-4 task-navigation border-b border-dashed dark:border-defaultborder/10">
                                <ul className="list-none task-main-nav mb-0">
                                    <li className="!px-0 !pt-0">
                                        <span className="text-[.6875rem] text-[#8c9097] dark:text-white/50 opacity-[0.7] font-semibold">TASKS</span>
                                    </li>
                                    <li className="active">
                                        <Link href="#!">
                                            <div className="flex items-center">
                                                <span className="me-2 leading-none">
                                                    <i className="ri-task-line align-middle text-[.875rem]"></i>
                                                </span>
                                                <span className="flex-grow whitespace-nowrap">
                                                    All Tasks
                                                </span>
                                                <span className="badge bg-success/10 text-success rounded-full">167</span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!">
                                            <div className="flex items-center">
                                                <span className="me-2 leading-none">
                                                    <i className="ri-star-line align-middle text-[.875rem]"></i>
                                                </span>
                                                <span className="flex-grow whitespace-nowrap">
                                                    Starred
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!">
                                            <div className="flex items-center">
                                                <span className="me-2 leading-none">
                                                    <i className="ri-delete-bin-5-line align-middle text-[.875rem]"></i>
                                                </span>
                                                <span className="flex-grow whitespace-nowrap">
                                                    Trash
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="!px-0 !pt-2">
                                        <span className="text-[.6875rem] text-[#8c9097] dark:text-white/50 op-7 font-semibold">CATEGORIES</span>
                                    </li>
                                    <li>
                                        <Link href="#!">
                                            <div className="flex items-center">
                                                <span className="me-2 leading-none">
                                                    <i className="ri-price-tag-line align-middle text-[.875rem] font-semibold text-primary"></i>
                                                </span>
                                                <span className="flex-grow whitespace-nowrap">
                                                    Personal
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!">
                                            <div className="flex items-center">
                                                <span className="me-2 leading-none">
                                                    <i className="ri-price-tag-line align-middle text-[.875rem] font-semibold text-secondary"></i>
                                                </span>
                                                <span className="flex-grow whitespace-nowrap">
                                                    Work
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!">
                                            <div className="flex items-center">
                                                <span className="me-2 leading-none">
                                                    <i className="ri-price-tag-line align-middle text-[.875rem] font-semibold text-warning"></i>
                                                </span>
                                                <span className="flex-grow whitespace-nowrap">
                                                    Health &amp; Fitness
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!">
                                            <div className="flex items-center">
                                                <span className="me-2 leading-none">
                                                    <i className="ri-price-tag-line align-middle text-[.875rem] font-semibold text-success"></i>
                                                </span>
                                                <span className="flex-grow whitespace-nowrap">
                                                    Daily Goals
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!">
                                            <div className="flex items-center">
                                                <span className="me-2 leading-none">
                                                    <i className="ri-price-tag-line align-middle text-[.875rem] font-semibold text-danger"></i>
                                                </span>
                                                <span className="flex-grow whitespace-nowrap">
                                                    Financial Management
                                                </span>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="p-4 !flex items-center justify-center">
                                <img src="../../../assets/images/media/media-66.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-9 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-body !p-0">
                                    <div className="md:flex px-4 py-6 items-center justify-between">
                                        <div>
                                            <h6 className="font-semibold mb-0 text-[1rem]">Tasks</h6>
                                        </div>
                                        <div className="mt-2 md:mt-0">
                                            <nav className="-mb-0.5 sm:flex sm:space-x-6 rtl:space-x-reverse flex-wrap">
                                                <Link className="w-full flex sm:w-auto active hs-tab-active:font-semibold  hs-tab-active:text-primary hs-tab-active:bg-primary/10 rounded-md py-2 px-3 text-sm" href="#!" id="alltasks-item" data-hs-tab="#all-tasks" aria-controls="all-tasks">
                                                    All Tasks
                                                </Link>
                                                <Link className="w-full flex sm:w-auto hs-tab-active:font-semibold  hs-tab-active:text-primary hs-tab-active:bg-primary/10 rounded-md  py-2 px-3  text-sm" href="#!" id="pending-item" data-hs-tab="#pending" aria-controls="pending">
                                                    Pending
                                                </Link>
                                                <Link className="w-full flex sm:w-auto hs-tab-active:font-semibold  hs-tab-active:text-primary hs-tab-active:bg-primary/10 rounded-md  py-2 px-3  text-sm" href="#!" id="in-progress-item" data-hs-tab="#in-progress" aria-controls="in-progress">
                                                    In Progress
                                                </Link>
                                                <Link className="w-full flex sm:w-auto hs-tab-active:font-semibold  hs-tab-active:text-primary hs-tab-active:bg-primary/10 rounded-md  py-2 px-3 text-sm" href="#!" id="completed-item" data-hs-tab="#completed" aria-controls="completed">
                                                    Completed
                                                </Link>
                                            </nav>
                                        </div>
                                        <div className="mt-2 md:mt-0">
                                            <div className="hs-dropdown ti-dropdown">
                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm ti-btn-light !mb-0" aria-expanded="false">
                                                    <i className="ti ti-dots-vertical"></i>
                                                </button>
                                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="#!">Select All</Link></li>
                                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="#!">Share All</Link></li>
                                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="#!">Delete All</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="tab-content task-tabs-container">
                                <div className="tab-pane show active !p-0" id="all-tasks" aria-labelledby="alltasks-item"
                                    role="tabpanel">
                                    <div className="grid grid-cols-12 gap-x-6" id="tasks-container">
                                        <div className="xl:col-span-4 col-span-12 task-card">
                                            <div className="box task-pending-card">
                                                <div className="box-body">
                                                    <div className="flex justify-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="font-semibold mb-4 flex items-center"><Link aria-label="anchor" href="#!"><i className="ri-star-s-fill text-[1rem] opacity-[0.5] me-1 text-[#8c9097] dark:text-white/50"></i></Link>New Project Blueprint</p>
                                                            <p className="mb-4">Assigned On : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">13,Nov 2022</span></p>
                                                            <p className="mb-4">Target Date : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">20,Nov 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
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
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm  ti-btn-primary me-[0.375rem]"><i className="ri-edit-line"></i></button>
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm ti-btn-danger me-0"><i className="ri-delete-bin-line"></i></button>
                                                            </div>
                                                            <span className="badge bg-warning/10 text-warning block">High</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box task-inprogress-card">
                                                <div className="box-body">
                                                    <div className="flex justify-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="font-semibold mb-4 flex items-center"><Link aria-label="anchor" href="#!"><i className="ri-star-s-fill text-[1rem] me-1 text-warning"></i></Link>Designing New Authentication Pages</p>
                                                            <p className="mb-4">Assigned On : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">26,Nov 2022</span></p>
                                                            <p className="mb-4">Target Date : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">12,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/6.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/15.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm  ti-btn-primary me-[0.375rem]"><i className="ri-edit-line"></i></button>
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm ti-btn-danger me-0"><i className="ri-delete-bin-line"></i></button>
                                                            </div>
                                                            <span className="badge bg-success/10 text-success block">Low</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box task-completed-card">
                                                <div className="box-body">
                                                    <div className="flex justify-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="font-semibold mb-4 flex items-center">
                                                                <Link aria-label="anchor" href="#!"><i className="ri-star-s-fill text-[1rem] opacity-[0.5] me-1 text-[#8c9097] dark:text-white/50"></i></Link>Developing New Events in Plugin</p>
                                                            <p className="mb-4">Assigned On : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">5,Dec 2022</span></p>
                                                            <p className="mb-4">Target Date : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">10,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/5.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/11.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm  ti-btn-primary me-[0.375rem]"><i className="ri-edit-line"></i></button>
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm ti-btn-danger me-0"><i className="ri-delete-bin-line"></i></button>
                                                            </div>
                                                            <span className="badge bg-primary/10 text-primary block">Medium</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-4 col-span-12 task-card">
                                            <div className="box task-inprogress-card">
                                                <div className="box-body">
                                                    <div className="flex justify-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="font-semibold mb-4 flex items-center"><Link aria-label="anchor" href="#!"><i className="ri-star-s-fill text-[1rem] me-1 text-warning"></i></Link>Design New Landing Pages </p>
                                                            <p className="mb-4">Assigned On : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">21,Nov 2022</span></p>
                                                            <p className="mb-4">Target Date : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">28,Nov 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/1.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/5.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/12.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm  ti-btn-primary me-[0.375rem]"><i className="ri-edit-line"></i></button>
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm ti-btn-danger me-0"><i className="ri-delete-bin-line"></i></button>
                                                            </div>
                                                            <span className="badge bg-primary/10 text-primary block">Medium</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box task-completed-card">
                                                <div className="box-body">
                                                    <div className="flex justify-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="font-semibold mb-4 flex items-center"><Link aria-label="anchor" href="#!"><i className="ri-star-s-fill text-[1rem] opacity-[0.5] me-1 text-[#8c9097] dark:text-white/50"></i></Link>New Plugin Development</p>
                                                            <p className="mb-4">Assigned On : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">28,Oct 2022</span></p>
                                                            <p className="mb-4">Target Date : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">28,Nov 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/3.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/9.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm  ti-btn-primary me-[0.375rem]"><i className="ri-edit-line"></i></button>
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm ti-btn-danger me-0"><i className="ri-delete-bin-line"></i></button>
                                                            </div>
                                                            <span className="badge bg-success/10 text-success block">Low</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box task-completed-card">
                                                <div className="box-body">
                                                    <div className="flex justify-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="font-semibold mb-4 flex items-center"><Link aria-label="anchor" href="#!"><i className="ri-star-s-fill text-[1rem] opacity-[0.5] me-1 text-[#8c9097] dark:text-white/50"></i></Link>Documentation For New Template</p>
                                                            <p className="mb-4">Assigned On : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">25,Nov 2022</span></p>
                                                            <p className="mb-4">Target Date : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">10,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/11.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm  ti-btn-primary me-[0.375rem]"><i className="ri-edit-line"></i></button>
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm ti-btn-danger me-0"><i className="ri-delete-bin-line"></i></button>
                                                            </div>
                                                            <span className="badge bg-danger/10 text-danger block">Critical</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-4 col-span-12 task-card">
                                            <div className="box task-pending-card">
                                                <div className="box-body">
                                                    <div className="flex justify-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="font-semibold mb-4 flex items-center">
                                                                <Link aria-label="anchor" href="#!"><i className="ri-star-s-fill text-[1rem] me-1 text-warning"></i></Link>Updating Old Ui</p>
                                                            <p className="mb-4">Assigned On : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">30,Nov 2022</span></p>
                                                            <p className="mb-4">Target Date : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">05,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/14.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/13.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/21.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/16.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm  ti-btn-primary me-[0.375rem]"><i className="ri-edit-line"></i></button>
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm ti-btn-danger me-0"><i className="ri-delete-bin-line"></i></button>
                                                            </div>
                                                            <span className="badge bg-warning/10 text-warning block">High</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box task-completed-card">
                                                <div className="box-body">
                                                    <div className="flex justify-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="font-semibold mb-4 flex items-center"><Link aria-label="anchor" href="#!"><i className="ri-star-s-fill text-[1rem] opacity-[0.5] me-1 text-[#8c9097] dark:text-white/50"></i></Link>Designing Of New Ecommerce Pages</p>
                                                            <p className="mb-4">Assigned On : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">1,Dec 2022</span></p>
                                                            <p className="mb-4">Target Date : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">15,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/1.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/3.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/6.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm  ti-btn-primary me-[0.375rem]"><i className="ri-edit-line"></i></button>
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm ti-btn-danger me-0"><i className="ri-delete-bin-line"></i></button>
                                                            </div>
                                                            <span className="badge bg-success/10 text-success block">Low</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="box task-inprogress-card">
                                                <div className="box-body">
                                                    <div className="flex justify-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="font-semibold mb-4 flex items-center"><Link aria-label="anchor" href="#!"><i className="ri-star-s-fill text-[1rem] me-1 text-warning"></i></Link>Improving Ui Of Updated Templates</p>
                                                            <p className="mb-4">Assigned On : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">4,Dec 2022</span></p>
                                                            <p className="mb-4">Target Date : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">20,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/9.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/13.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm  ti-btn-primary me-[0.375rem]"><i className="ri-edit-line"></i></button>
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm ti-btn-danger me-0"><i className="ri-delete-bin-line"></i></button>
                                                            </div>
                                                            <span className="badge bg-primary/10 text-primary block">Medium</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane !p-0 hidden" id="pending" aria-labelledby="pending-item"
                                    role="tabpanel">
                                    <div className="grid grid-cols-12 gap-6">
                                        <div className="xl:col-span-4 col-span-12">
                                            <div className="box task-pending-card">
                                                <div className="box-body">
                                                    <div className="flex justify-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="font-semibold mb-4 flex items-center"><Link aria-label="anchor" href="#!"><i className="ri-star-s-fill text-[1rem] opacity-[0.5] me-1 text-[#8c9097] dark:text-white/50"></i></Link>New Project Blueprint</p>
                                                            <p className="mb-4">Assigned On : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">13,Nov 2022</span></p>
                                                            <p className="mb-4">Target Date : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">20,Nov 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
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
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm  ti-btn-primary me-[0.375rem]"><i className="ri-edit-line"></i></button>
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm ti-btn-danger me-0"><i className="ri-delete-bin-line"></i></button>
                                                            </div>
                                                            <span className="badge bg-warning/10 text-warning block">High</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-4 col-span-12">
                                            <div className="box task-pending-card">
                                                <div className="box-body">
                                                    <div className="flex justify-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="font-semibold mb-4 flex items-center">
                                                                <Link aria-label="anchor" href="#!"><i className="ri-star-s-fill text-[1rem] me-1 text-warning"></i></Link>Updating Old Ui</p>
                                                            <p className="mb-4">Assigned On : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">30,Nov 2022</span></p>
                                                            <p className="mb-4">Target Date : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">05,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/14.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/13.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/21.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/16.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm  ti-btn-primary me-[0.375rem]"><i className="ri-edit-line"></i></button>
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm ti-btn-danger me-0"><i className="ri-delete-bin-line"></i></button>
                                                            </div>
                                                            <span className="badge bg-warning/10 text-warning block">High</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane !p-0 hidden" id="in-progress" aria-labelledby="inprocess-item"
                                    role="tabpanel">
                                    <div className="grid grid-cols-12 gap-x-6">
                                        <div className="xl:col-span-4 col-span-12">
                                            <div className="box task-inprogress-card">
                                                <div className="box-body">
                                                    <div className="flex justify-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="font-semibold mb-4 flex items-center"><Link aria-label="anchor" href="#!"><i className="ri-star-s-fill text-[1rem] me-1 text-warning"></i></Link>Design New Landing Pages </p>
                                                            <p className="mb-4">Assigned On : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">21,Nov 2022</span></p>
                                                            <p className="mb-4">Target Date : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">28,Nov 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/1.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/5.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/12.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm  ti-btn-primary me-[0.375rem]"><i className="ri-edit-line"></i></button>
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm ti-btn-danger me-0"><i className="ri-delete-bin-line"></i></button>
                                                            </div>
                                                            <span className="badge bg-primary/10 text-primary block">Medium</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-4 col-span-12">
                                            <div className="box task-inprogress-card">
                                                <div className="box-body">
                                                    <div className="flex justify-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="font-semibold mb-4 flex items-center"><Link aria-label="anchor" href="#!"><i className="ri-star-s-fill text-[1rem] me-1 text-warning"></i></Link>Designing New Authentication Pages</p>
                                                            <p className="mb-4">Assigned On : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">26,Nov 2022</span></p>
                                                            <p className="mb-4">Target Date : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">12,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/6.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/15.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm  ti-btn-primary me-[0.375rem]"><i className="ri-edit-line"></i></button>
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm ti-btn-danger me-0"><i className="ri-delete-bin-line"></i></button>
                                                            </div>
                                                            <span className="badge bg-success/10 text-success block">Low</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-4 col-span-12">
                                            <div className="box task-inprogress-card">
                                                <div className="box-body">
                                                    <div className="flex justify-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="font-semibold mb-4 flex items-center"><Link aria-label="anchor" href="#!"><i className="ri-star-s-fill text-[1rem] me-1 text-warning"></i></Link>Improving Ui Of Updated Templates</p>
                                                            <p className="mb-4">Assigned On : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">4,Dec 2022</span></p>
                                                            <p className="mb-4">Target Date : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">20,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/9.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/13.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm  ti-btn-primary me-[0.375rem]"><i className="ri-edit-line"></i></button>
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm ti-btn-danger me-0"><i className="ri-delete-bin-line"></i></button>
                                                            </div>
                                                            <span className="badge bg-primary/10 text-primary block">Medium</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane !p-0 hidden" id="completed" aria-labelledby="completed-item"
                                    role="tabpanel">
                                    <div className="grid grid-cols-12 gap-x-6">
                                        <div className="xl:col-span-4 col-span-12">
                                            <div className="box task-completed-card">
                                                <div className="box-body">
                                                    <div className="flex justify-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="font-semibold mb-4 flex items-center"><Link aria-label="anchor" href="#!"><i className="ri-star-s-fill text-[1rem] opacity-[0.5] me-1 text-[#8c9097] dark:text-white/50"></i></Link>New Plugin Development</p>
                                                            <p className="mb-4">Assigned On : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">28,Oct 2022</span></p>
                                                            <p className="mb-4">Target Date : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">28,Nov 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/3.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/9.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm  ti-btn-primary me-[0.375rem]"><i className="ri-edit-line"></i></button>
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm ti-btn-danger me-0"><i className="ri-delete-bin-line"></i></button>
                                                            </div>
                                                            <span className="badge bg-success/10 text-success block">Low</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-4 col-span-12">
                                            <div className="box task-completed-card">
                                                <div className="box-body">
                                                    <div className="flex justify-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="font-semibold mb-4 flex items-center"><Link aria-label="anchor" href="#!"><i className="ri-star-s-fill text-[1rem] opacity-[0.5] me-1 text-[#8c9097] dark:text-white/50"></i></Link>Documentation For New Template</p>
                                                            <p className="mb-4">Assigned On : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">25,Nov 2022</span></p>
                                                            <p className="mb-4">Target Date : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">10,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/11.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm  ti-btn-primary me-[0.375rem]"><i className="ri-edit-line"></i></button>
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm ti-btn-danger me-0"><i className="ri-delete-bin-line"></i></button>
                                                            </div>
                                                            <span className="badge bg-danger/10 text-danger block">Critical</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-4 col-span-12">
                                            <div className="box task-completed-card">
                                                <div className="box-body">
                                                    <div className="flex justify-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="font-semibold mb-4 flex items-center">
                                                                <Link aria-label="anchor" href="#!"><i className="ri-star-s-fill text-[1rem] opacity-[0.5] me-1 text-[#8c9097] dark:text-white/50"></i></Link>Developing New Events in Plugin</p>
                                                            <p className="mb-4">Assigned On : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">5,Dec 2022</span></p>
                                                            <p className="mb-4">Target Date : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">10,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/5.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/11.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm  ti-btn-primary me-[0.375rem]"><i className="ri-edit-line"></i></button>
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm ti-btn-danger me-0"><i className="ri-delete-bin-line"></i></button>
                                                            </div>
                                                            <span className="badge bg-primary/10 text-primary block">Medium</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-4 col-span-12">
                                            <div className="box task-completed-card">
                                                <div className="box-body">
                                                    <div className="flex justify-between flex-wrap gap-2">
                                                        <div>
                                                            <p className="font-semibold mb-4 flex items-center"><Link aria-label="anchor" href="#!"><i className="ri-star-s-fill text-[1rem] opacity-[0.5] me-1 text-[#8c9097] dark:text-white/50"></i></Link>Designing Of New Ecommerce Pages</p>
                                                            <p className="mb-4">Assigned On : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">1,Dec 2022</span></p>
                                                            <p className="mb-4">Target Date : <span className="text-[0.75rem] mb-1 text-[#8c9097] dark:text-white/50">15,Dec 2022</span></p>
                                                            <p className="mb-0">Assigned To :
                                                                <span className="avatar-list-stacked ms-1">
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/1.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/3.jpg" alt="img" />
                                                                    </span>
                                                                    <span className="avatar avatar-sm avatar-rounded">
                                                                        <img src="../../../assets/images/faces/6.jpg" alt="img" />
                                                                    </span>
                                                                </span>
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <div className="btn-list">
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm  ti-btn-primary me-[0.375rem]"><i className="ri-edit-line"></i></button>
                                                                <button type="button" aria-label="button" className="ti-btn ti-btn-sm ti-btn-danger me-0"><i className="ri-delete-bin-line"></i></button>
                                                            </div>
                                                            <span className="badge bg-success/10 text-success block">Low</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                </div>
            </div>
        </Fragment>
    )
}
Todolist.layout = "Contentlayout"

export default Todolist