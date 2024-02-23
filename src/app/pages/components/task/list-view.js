import Pageheader from '@/shared/layout-components/page-header/pageheader';
import Seo from '@/shared/layout-components/seo/seo';
import React, { useState } from 'react';
const Select = dynamic(() => import("react-select"), {ssr : false});
import { MultiSelect } from 'react-multi-select-component';
import DatePicker from "react-datepicker";
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { TransactionsStatistics } from '@/shared/data/apps/crypto/transactiondata'

const Listview = () => {

    const [startDate, setStartDate] = useState(new Date());
    const handleDateChange = (date) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    const [selected1, setSelected1] = useState([]);
    const Selectdata = [
        { value: 'Angelina May', label: 'Angelina May' },
        { value: 'Kiara advain', label: 'Kiara advain' },
        { value: 'Hercules Jhon', label: 'Hercules Jhon' },
        { value: 'Mayor Kim', label: 'Mayor Kim' },
    ];
    const Option1 = [
        { value: 'New', label: 'New' },
        { value: 'Completed', label: 'Completed' },
        { value: 'Inprogress', label: 'Inprogress' },
        { value: 'Pending', label: 'Pending' }
    ];
    const Option2 = [
        { value: 'High', label: 'High' },
        { value: 'Low', label: 'Low' },
        { value: 'Medium', label: 'Medium' },
    ];
    return (
        <div>
            <Seo title={"List View"} />
            <Pageheader currentpage="List View" activepage="Tasks" mainpage="List View" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-9 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Total Tasks
                            </div>
                            <div className="flex">
                                <button type="button" className="hs-dropdown-toggle ti-btn ti-btn-primary-full !py-1 !px-2 !text-[0.75rem]" data-hs-overlay="#create-task">
                                    <i className="ri-add-line font-semibold align-middle"></i> Create Task
                                </button>
                                <div id="create-task" className="hs-overlay hidden ti-modal">
                                    <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
                                        <div className="ti-modal-content">
                                            <div className="ti-modal-header">
                                                <h6 className="modal-title" id="staticBackdropLabel2">Add Task
                                                </h6>
                                                <button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#create-task">
                                                    <span className="sr-only">Close</span>
                                                    <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="ti-modal-body">
                                                <div className="grid grid-cols-12 gap-2">
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label htmlFor="task-name" className="form-label">Task Name</label>
                                                        <input type="text" className="form-control" id="task-name" placeholder="Task Name" />
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label htmlFor="task-id" className="form-label">Task ID</label>
                                                        <input type="text" className="form-control" id="task-id" placeholder="Task ID" />
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label className="form-label">Assigned Date</label>
                                                        <div className="form-group">
                                                            <div className="input-group !flex-nowrap">
                                                                <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
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
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label className="form-label">Due Date</label>
                                                        <div className="form-group">
                                                            <div className="input-group !flex-nowrap">
                                                                <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
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
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label className="form-label">Status</label>
                                                         <Select  id="choices-single-default1" name="colors" options={Option1} className=""
                                                    menuPlacement='auto' classNamePrefix="Select2" placeholder=""
                                                />
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label className="form-label">Priority</label>
                                                        <Select  id="choices-single-default1" name="colors" options={Option2} className=""
                                                    menuPlacement='auto' classNamePrefix="Select2" placeholder="" defaultValue={[Option2[0]]}
                                                />
                                                    </div>
                                                    <div className="xl:col-span-12 col-span-12">
                                                        <label className="form-label">Assigned To</label>
                                                          <Select isMulti id="choices-multiple-remove-button1" name="choices-multiple-remove-button1" options={Selectdata} className="form-control"
                                                    menuPlacement='auto' classNamePrefix="Select2" placeholder=""
                                                />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ti-modal-footer">
                                                <button type="button" className="hs-dropdown-toggle ti-btn ti-btn-light" data-hs-overlay="#create-task">
                                                    Cancel
                                                </button>
                                                <Link className="ti-btn ti-btn-primary-full" href="#!">
                                                    Add Task
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hs-dropdown ti-dropdown ms-2">
                                    <button type="button" aria-label="button" className="ti-btn ti-btn-secondary ti-btn-sm" aria-expanded="false">
                                        <i className="ti ti-dots-vertical"></i>
                                    </button>
                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="#!">New Tasks</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="#!">Pending Tasks</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="#!">Completed Tasks</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="#!">Inprogress Tasks</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="table-responsive">
                                <table className="table whitespace-nowrap table-bordered min-w-full">
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                <input className="form-check-input check-all" type="checkbox" id="all-tasks" value="" aria-label="..."/>
                                            </th>
                                            <th scope="col" className="text-start">Task</th>
                                            <th scope="col" className="text-start">Task ID</th>
                                            <th scope="col" className="text-start">Assigned Date</th>
                                            <th scope="col" className="text-start">Status</th>
                                            <th scope="col" className="text-start">Due Date</th>
                                            <th scope="col" className="text-start">Priority</th>
                                            <th scope="col" className="text-start">Assigned To</th>
                                            <th scope="col" className="text-start">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border border-defaultborder task-list">
                                            <td className="task-checkbox"><input className="form-check-input" type="checkbox" value="" aria-label="..." /></td>
                                            <td>
                                                <span className="font-semibold">Design New Landing Page</span>
                                            </td>
                                            <td>
                                                <span className="font-semibold">SPK - 01</span>
                                            </td>
                                            <td>
                                                02-06-2023
                                            </td>
                                            <td>
                                                <span className="font-semibold text-primary">New</span>
                                            </td>
                                            <td>
                                                10-06-2023
                                            </td>
                                            <td>
                                                <span className="badge bg-secondary/10 text-secondary">Medium</span>
                                            </td>
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
                                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-white" href="#!">
                                                        +2
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="hs-tooltip ti-main-tooltip">
                                                    <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-primary ti-btn-sm">
                                                        <i className="ri-edit-line"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                            Edit
                                                        </span>
                                                    </button>
                                                </div>
                                                <div className="hs-tooltip ti-main-tooltip">
                                                    <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-danger ms-1 ti-btn-sm task-delete-btn">
                                                        <i className="ri-delete-bin-5-line"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                            Delete
                                                        </span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder task-list">
                                            <td className="task-checkbox"><input className="form-check-input" type="checkbox" value="" aria-label="..." defaultChecked /></td>
                                            <td>
                                                <span className="font-semibold">New Project Buleprint</span>
                                            </td>
                                            <td>
                                                <span className="font-semibold">SPK - 04</span>
                                            </td>
                                            <td>
                                                05-06-2023
                                            </td>
                                            <td>
                                                <span className="font-semibold text-secondary">Inprogress</span>
                                            </td>
                                            <td>
                                                15-06-2023
                                            </td>
                                            <td>
                                                <span className="badge bg-danger/10 text-danger">High</span>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/12.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/11.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-white" href="#!">
                                                        +4
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="hs-tooltip ti-main-tooltip">
                                                    <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-primary ti-btn-sm">
                                                        <i className="ri-edit-line"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                            Edit
                                                        </span>
                                                    </button>
                                                </div>
                                                <div className="hs-tooltip ti-main-tooltip">
                                                    <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-danger ms-1 ti-btn-sm task-delete-btn">
                                                        <i className="ri-delete-bin-5-line"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                            Delete
                                                        </span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder task-list">
                                            <td className="task-checkbox"><input className="form-check-input" type="checkbox" value="" aria-label="..." /></td>
                                            <td>
                                                <span className="font-semibold">Server Side Validation</span>
                                            </td>
                                            <td>
                                                <span className="font-semibold">SPK - 11</span>
                                            </td>
                                            <td>
                                                12-06-2023
                                            </td>
                                            <td>
                                                <span className="font-semibold text-warning">Pending</span>
                                            </td>
                                            <td>
                                                16-06-2023
                                            </td>
                                            <td>
                                                <span className="badge bg-success/10 text-success">Low</span>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/5.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/9.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/13.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-white" href="#!">
                                                        +5
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="hs-tooltip ti-main-tooltip">
                                                    <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-primary ti-btn-sm">
                                                        <i className="ri-edit-line"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                            Edit
                                                        </span>
                                                    </button>
                                                </div>
                                                <div className="hs-tooltip ti-main-tooltip">
                                                    <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-danger ms-1 ti-btn-sm task-delete-btn">
                                                        <i className="ri-delete-bin-5-line"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                            Delete
                                                        </span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder task-list">
                                            <td className="task-checkbox"><input className="form-check-input" type="checkbox" value="" aria-label="..." /></td>
                                            <td>
                                                <span className="font-semibold">New Plugin Development</span>
                                            </td>
                                            <td>
                                                <span className="font-semibold">SPK - 24</span>
                                            </td>
                                            <td>
                                                08-06-2023
                                            </td>
                                            <td>
                                                <span className="font-semibold text-success">Completed</span>
                                            </td>
                                            <td>
                                                17-06-2023
                                            </td>
                                            <td>
                                                <span className="badge bg-success/10 text-success">Low</span>
                                            </td>
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
                                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-white" href="#!">
                                                        +2
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="hs-tooltip ti-main-tooltip">
                                                    <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-primary ti-btn-sm">
                                                        <i className="ri-edit-line"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                            Edit
                                                        </span>
                                                    </button>
                                                </div>
                                                <div className="hs-tooltip ti-main-tooltip">
                                                    <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-danger ms-1 ti-btn-sm task-delete-btn">
                                                        <i className="ri-delete-bin-5-line"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                            Delete
                                                        </span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder task-list">
                                            <td className="task-checkbox"><input className="form-check-input" type="checkbox" value="" aria-label="..." defaultChecked /></td>
                                            <td>
                                                <span className="font-semibold">Designing New Authentication Page</span>
                                            </td>
                                            <td>
                                                <span className="font-semibold">SPK - 16</span>
                                            </td>
                                            <td>
                                                03-06-2023
                                            </td>
                                            <td>
                                                <span className="font-semibold text-secondary">Inprogress</span>
                                            </td>
                                            <td>
                                                08-06-2023
                                            </td>
                                            <td>
                                                <span className="badge bg-secondary/10 text-secondary">Medium</span>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/15.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-white" href="#!">
                                                        +3
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="hs-tooltip ti-main-tooltip">
                                                    <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-primary ti-btn-sm">
                                                        <i className="ri-edit-line"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                            Edit
                                                        </span>
                                                    </button>
                                                </div>
                                                <div className="hs-tooltip ti-main-tooltip">
                                                    <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-danger ms-1 ti-btn-sm task-delete-btn">
                                                        <i className="ri-delete-bin-5-line"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                            Delete
                                                        </span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder task-list">
                                            <td className="task-checkbox"><input className="form-check-input" type="checkbox" value="" aria-label="..." defaultChecked /></td>
                                            <td>
                                                <span className="font-semibold">Documentation For New Template</span>
                                            </td>
                                            <td>
                                                <span className="font-semibold">SPK - 07</span>
                                            </td>
                                            <td>
                                                12-06-2023
                                            </td>
                                            <td>
                                                <span className="font-semibold text-primary">New</span>
                                            </td>
                                            <td>
                                                25-06-2023
                                            </td>
                                            <td>
                                                <span className="badge bg-danger/10 text-danger">High</span>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/12.jpg" alt="img" />
                                                    </span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="hs-tooltip ti-main-tooltip">
                                                    <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-primary ti-btn-sm">
                                                        <i className="ri-edit-line"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                            Edit
                                                        </span>
                                                    </button>
                                                </div>
                                                <div className="hs-tooltip ti-main-tooltip">
                                                    <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-danger ms-1 ti-btn-sm task-delete-btn">
                                                        <i className="ri-delete-bin-5-line"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                            Delete
                                                        </span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder task-list">
                                            <td className="task-checkbox"><input className="form-check-input" type="checkbox" value="" aria-label="..." /></td>
                                            <td>
                                                <span className="font-semibold">Updating Old UI</span>
                                            </td>
                                            <td>
                                                <span className="font-semibold">SPK - 13</span>
                                            </td>
                                            <td>
                                                06-06-2023
                                            </td>
                                            <td>
                                                <span className="font-semibold text-success">Completed</span>
                                            </td>
                                            <td>
                                                12-06-2023
                                            </td>
                                            <td>
                                                <span className="badge bg-success/10 text-success">Low</span>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/11.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/1.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-white" href="#!">
                                                        +1
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="hs-tooltip ti-main-tooltip">
                                                    <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-primary ti-btn-sm">
                                                        <i className="ri-edit-line"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                            Edit
                                                        </span>
                                                    </button>
                                                </div>
                                                <div className="hs-tooltip ti-main-tooltip">
                                                    <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-danger ms-1 ti-btn-sm task-delete-btn">
                                                        <i className="ri-delete-bin-5-line"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                            Delete
                                                        </span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder task-list">
                                            <td className="task-checkbox"><input className="form-check-input" type="checkbox" value="" aria-label="..." defaultChecked /></td>
                                            <td>
                                                <span className="font-semibold">Developing New Events In Plugins</span>
                                            </td>
                                            <td>
                                                <span className="font-semibold">SPK - 20</span>
                                            </td>
                                            <td>
                                                14-06-2023
                                            </td>
                                            <td>
                                                <span className="font-semibold text-warning">Pending</span>
                                            </td>
                                            <td>
                                                19-06-2023
                                            </td>
                                            <td>
                                                <span className="badge bg-danger/10 text-danger">High</span>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/3.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/9.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-white" href="#!">
                                                        +2
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="hs-tooltip ti-main-tooltip">
                                                    <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-primary ti-btn-sm">
                                                        <i className="ri-edit-line"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                            Edit
                                                        </span>
                                                    </button>
                                                </div>
                                                <div className="hs-tooltip ti-main-tooltip">
                                                    <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-danger ms-1 ti-btn-sm task-delete-btn">
                                                        <i className="ri-delete-bin-5-line"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                            Delete
                                                        </span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder task-list">
                                            <td className="task-checkbox"><input className="form-check-input" type="checkbox" value="" aria-label="..." /></td>
                                            <td>
                                                <span className="font-semibold">Fixing Minor Ui Issues</span>
                                            </td>
                                            <td>
                                                <span className="font-semibold">SPK - 26</span>
                                            </td>
                                            <td>
                                                11-06-2023
                                            </td>
                                            <td>
                                                <span className="font-semibold text-success">Completed</span>
                                            </td>
                                            <td>
                                                18-06-2023
                                            </td>
                                            <td>
                                                <span className="badge bg-secondary/10 text-secondary">Medium</span>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/5.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/14.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/12.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/3.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-white" href="#!">
                                                        +1
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="hs-tooltip ti-main-tooltip">
                                                    <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-primary ti-btn-sm">
                                                        <i className="ri-edit-line"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                            Edit
                                                        </span>
                                                    </button>
                                                </div>
                                                <div className="hs-tooltip ti-main-tooltip">
                                                    <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-danger ms-1 ti-btn-sm task-delete-btn">
                                                        <i className="ri-delete-bin-5-line"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                            Delete
                                                        </span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border border-defaultborder task-list">
                                            <td className="task-checkbox"><input className="form-check-input" type="checkbox" value="" aria-label="..." /></td>
                                            <td>
                                                <span className="font-semibold">Designing Of New Ecommerce Website</span>
                                            </td>
                                            <td>
                                                <span className="font-semibold">SPK - 32</span>
                                            </td>
                                            <td>
                                                03-06-2023
                                            </td>
                                            <td>
                                                <span className="font-semibold text-secondary">Inprogress</span>
                                            </td>
                                            <td>
                                                09-06-2023
                                            </td>
                                            <td>
                                                <span className="badge bg-success/10 text-success">Low</span>
                                            </td>
                                            <td>
                                                <div className="avatar-list-stacked">
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/12.jpg" alt="img" />
                                                    </span>
                                                    <span className="avatar avatar-sm avatar-rounded">
                                                        <img src="../../../assets/images/faces/6.jpg" alt="img" />
                                                    </span>
                                                    <Link className="avatar avatar-sm bg-primary avatar-rounded text-white" href="#!">
                                                        +4
                                                    </Link>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="hs-tooltip ti-main-tooltip">
                                                    <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-primary ti-btn-sm">
                                                        <i className="ri-edit-line"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                            Edit
                                                        </span>
                                                    </button>
                                                </div>
                                                <div className="hs-tooltip ti-main-tooltip">
                                                    <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-danger ms-1 ti-btn-sm task-delete-btn">
                                                        <i className="ri-delete-bin-5-line"></i>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                            Delete
                                                        </span>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="box-footer">
                            <nav aria-label="Page navigation">
                                <ul className="ti-pagination justify-end mb-0">
                                    <li className="page-item disabled"><Link className="page-link px-3 py-[0.375rem]" href="#!">Prev</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">1</Link></li>
                                    <li className="page-item"><Link className="page-link active px-3 py-[0.375rem]" href="#!">2</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">3</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">Next</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <div className="box">
                        <div className="box-body !p-0">
                            <div className="!p-6 border-b dark:border-defaultborder/10 border-dashed flex items-start">
                                <div className="svg-icon-background bg-primary/10 me-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" className="svg-primary"><path d="M13,16H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2ZM9,10h2a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Zm12,2H18V3a1,1,0,0,0-.5-.87,1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0l-3,1.72-3-1.72a1,1,0,0,0-1,0A1,1,0,0,0,2,3V19a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V13A1,1,0,0,0,21,12ZM5,20a1,1,0,0,1-1-1V4.73L6,5.87a1.08,1.08,0,0,0,1,0l3-1.72,3,1.72a1.08,1.08,0,0,0,1,0l2-1.14V19a3,3,0,0,0,.18,1Zm15-1a1,1,0,0,1-2,0V14h2Zm-7-7H7a1,1,0,0,0,0,2h6a1,1,0,0,0,0-2Z" /></svg>
                                </div>
                                <div className="flex-grow">
                                    <h6 className="!mb-1 text-[0.75rem]">New Tasks
                                        <span className="badge bg-primary text-white font-semibold ltr:float-right rtl:float-left">
                                            12,345
                                        </span>
                                    </h6>
                                    <div className="pb-0 mt-0">
                                        <div>
                                            <h4 className="text-[1.125rem] font-semibold mb-1"><span className="count-up" data-count="42">42</span><span className="text-muted ltr:float-right rtl:float-left text-[.6875rem] font-normal">Last Year</span></h4>
                                            <p className="text-muted text-[.6875rem] mb-0 leading-none">
                                                <span className="text-success me-1 font-semibold inline-block">
                                                    <i className="ri-arrow-up-s-line me-1 align-middle"></i>3.25%
                                                </span>
                                                <span>this month</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 border-b dark:border-defaultborder/10 border-dashed flex items-start">
                                <div className="svg-icon-background bg-success/10 !fill-success me-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="svg-success"><path d="M11.5,20h-6a1,1,0,0,1-1-1V5a1,1,0,0,1,1-1h5V7a3,3,0,0,0,3,3h3v5a1,1,0,0,0,2,0V9s0,0,0-.06a1.31,1.31,0,0,0-.06-.27l0-.09a1.07,1.07,0,0,0-.19-.28h0l-6-6h0a1.07,1.07,0,0,0-.28-.19.29.29,0,0,0-.1,0A1.1,1.1,0,0,0,11.56,2H5.5a3,3,0,0,0-3,3V19a3,3,0,0,0,3,3h6a1,1,0,0,0,0-2Zm1-14.59L15.09,8H13.5a1,1,0,0,1-1-1ZM7.5,14h6a1,1,0,0,0,0-2h-6a1,1,0,0,0,0,2Zm4,2h-4a1,1,0,0,0,0,2h4a1,1,0,0,0,0-2Zm-4-6h1a1,1,0,0,0,0-2h-1a1,1,0,0,0,0,2Zm13.71,6.29a1,1,0,0,0-1.42,0l-3.29,3.3-1.29-1.3a1,1,0,0,0-1.42,1.42l2,2a1,1,0,0,0,1.42,0l4-4A1,1,0,0,0,21.21,16.29Z" /></svg>
                                </div>
                                <div className="flex-grow">
                                    <h6 className="mb-1 text-[0.75rem]">Completed Tasks
                                        <span className="badge bg-success text-white font-semibold ltr:float-right rtl:float-left">
                                            4,176
                                        </span>
                                    </h6>
                                    <div>
                                        <h4 className="text-[1.125rem] font-semibold mb-1"><span className="count-up" data-count="319">320</span><span className="text-muted ltr:float-right rtl:float-left text-[.6875rem] font-normal">Last Year</span></h4>
                                        <p className="text-muted text-[.6875rem] mb-0 leading-none">
                                            <span className="text-danger me-1 font-semibold inline-block">
                                                <i className="ri-arrow-down-s-line me-1 align-middle"></i>1.16%
                                            </span>
                                            <span>this month</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 border-b dark:border-defaultborder/10 border-dashed flex items-start">
                                <div className="svg-icon-background bg-warning/10 me-4 !fill-warning">
                                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="svg-warning"><path d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z" /></svg>
                                </div>
                                <div className="flex-grow">
                                    <h6 className="mb-1 text-[0.75rem]">Pending Tasks
                                        <span className="badge bg-warning text-white font-semibold ltr:float-right rtl:float-left">
                                            7,064
                                        </span>
                                    </h6>
                                    <div>
                                        <h4 className="text-[1.125rem] font-semibold mb-1"><span className="count-up" data-count="81">82</span><span className="text-muted ltr:float-right rtl:float-left text-[.6875rem] font-normal">Last Year</span></h4>
                                        <p className="text-muted text-[.6875rem] mb-0 leading-none">
                                            <span className="text-success me-1 font-semibold inline-block">
                                                <i className="ri-arrow-up-s-line me-1 align-middle"></i>0.25%
                                            </span>
                                            <span>this month</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 border-b dark:border-defaultborder/10 border-dashed flex items-start">
                                <div className="svg-icon-background bg-secondary/10 text-secondary !fill-secondary me-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24" className="svg-secondary"><path d="M19,12h-7V5c0-0.6-0.4-1-1-1c-5,0-9,4-9,9s4,9,9,9s9-4,9-9C20,12.4,19.6,12,19,12z M12,19.9c-3.8,0.6-7.4-2.1-7.9-5.9C3.5,10.2,6.2,6.6,10,6.1V13c0,0.6,0.4,1,1,1h6.9C17.5,17.1,15.1,19.5,12,19.9z M15,2c-0.6,0-1,0.4-1,1v6c0,0.6,0.4,1,1,1h6c0.6,0,1-0.4,1-1C22,5.1,18.9,2,15,2z M16,8V4.1C18,4.5,19.5,6,19.9,8H16z" /></svg>
                                </div>
                                <div className="flex-grow">
                                    <h6 className="mb-1 text-[0.75rem]">Inprogress Tasks
                                        <span className="badge bg-secondary text-white font-semibold ltr:float-right rtl:float-left">
                                            1,105
                                        </span>
                                    </h6>
                                    <div>
                                        <h4 className="text-[1.125rem] font-semibold mb-1"><span className="count-up" data-count="32">33</span><span className="text-muted ltr:float-right rtl:float-left text-[.6875rem] font-normal">Last Year</span></h4>
                                        <p className="text-muted text-[.6875rem] mb-0 leading-none">
                                            <span className="text-success me-1 font-semibold inline-block">
                                                <i className="ri-arrow-down-s-line me-1 align-middle"></i>0.46%
                                            </span>
                                            <span>this month</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 pb-2">
                                <p className="text-[.9375rem] font-semibold">Tasks Statistics <span className="text-muted font-normal">(Last 6 months) :</span></p>
                                <div id="task-list-stats">
                                <TransactionsStatistics />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
Listview.layout = "Contentlayout"

export default Listview