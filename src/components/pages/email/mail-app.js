import { Mails, Mails1 } from '@/shared/data/pages/mail/mailappdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import React, { Fragment, useEffect, useState } from 'react'
const Select = dynamic(() => import("react-select"), { ssr: false });
import PerfectScrollbar from 'react-perfect-scrollbar';
import SimpleBar from 'simplebar-react'
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

const Mailapp = () => {

    const Mailoptions = [
        { value: 'jay@gmail.com', label: 'jay@gmail.com' },
        { value: 'kia@gmail.com', label: 'kia@gmail.com' },
        { value: 'don@gmail.com', label: 'don@gmail.com' },
        { value: 'kimo@gmail.com', label: 'kimo@gmail.com' },
    ];

    const [isMailNavigationVisible, setMailNavigationVisible] = useState(false);
    const [isTotalMailsVisible, setTotalMailsVisible] = useState(true);
    const [isTotalMailsHidden, setTotalMailsHidden] = useState(false);
    const [isMailsInformationVisible, setMailsInformationVisible] = useState(false);

    const Toggle1 = () => {
        if (innerWidth <= 992) {
            setMailNavigationVisible(true);
            setTotalMailsVisible(false);
            // Set isTotalMailsHidden to true when clicking Toggle1
            setTotalMailsHidden(true);
        }
    };

    const Toggle2 = () => {
        if (innerWidth <= 992) {
            setTotalMailsVisible(true);
            setMailNavigationVisible(false);
            // Set isTotalMailsHidden to false when clicking Toggle2
            setTotalMailsHidden(false);
        }
    };

    const Medium = () => {
        if (innerWidth <= 1399) {
            setMailsInformationVisible(true);
            setTotalMailsVisible(false);
            // Set isTotalMailsHidden to true when clicking Medium
            setTotalMailsHidden(true);
        }
    };

    const Close = () => {
        if (innerWidth <= 1399) {
            setMailsInformationVisible(false);
            setTotalMailsVisible(true);
            // Set isTotalMailsHidden to false when clicking Close
            setTotalMailsHidden(false);
        }
    };

    return (
        <Fragment>
            <Seo title={"Mail App"} />
            <Pageheader currentpage="Mail App" activepage="Emails" mainpage="Mail App" />
            <div className="container-fluid">
                <div className="main-mail-container !p-2 gap-x-2 flex">
                    <div className={`mail-navigation ${isMailNavigationVisible ? '!block' : ''} border dark:border-defaultborder/10`}>
                        <div className="grid items-start !p-4 border-b dark:border-defaultborder/10">
                            <Link href="#!" className="hs-dropdown-toggle ti-btn !bg-success text-white flex items-center justify-center !font-medium" data-hs-overlay="#todo-compose"><i className="ri-add-circle-line text-[1rem] align-middle"></i>Compose Mail
                            </Link>
                            <div id="todo-compose" className="hs-overlay hidden ti-modal">
                                <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out lg:!max-w-4xl lg:w-full m-3 lg:!mx-auto">
                                    <div className="ti-modal-content">
                                        <div className="ti-modal-header">
                                            <h6 className="modal-title text-[1rem] font-semibold text-defaulttextcolor" id="mail-ComposeLabel">Compose Mail</h6>
                                            <button type="button" className="hs-dropdown-toggle !text-[1rem] !font-semibold !text-defaulttextcolor dark:!text-defaulttextcolor/70" data-hs-overlay="#todo-compose">
                                                <span className="sr-only">Close</span>
                                                <i className="ri-close-line"></i>
                                            </button>
                                        </div>
                                        <div className="ti-modal-body px-4">
                                            <div className="grid grid-cols-12 gap-6">
                                                <div className="xl:col-span-6 col-span-12 mb-2">
                                                    <label htmlFor="fromMail" className="form-label">From<sup className="top-[0.5em]"><i className="ri-star-s-fill text-success text-[0.5rem]"></i></sup></label>
                                                    <input type="email" className="form-control" id="fromMail" defaultValue="jsontaylor2345@gmail.com" />
                                                </div>
                                                <div className="xl:col-span-6 col-span-12 mb-2">
                                                    <label htmlFor="toMail" className="form-label">To<sup className="top-[0.5em]"><i className="ri-star-s-fill text-success text-[0.5rem]"></i></sup></label>
                                                    <Select isMulti name="colors" options={Mailoptions} className="basic-multi-select"
                                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Mailoptions[0]]}
                                                    />
                                                </div>
                                                <div className="xl:col-span-6 col-span-12 mb-2">
                                                    <label htmlFor="mailCC" className="form-label text-dark font-semibold">Cc</label>
                                                    <input type="email" className="form-control" id="mailCC" />
                                                </div>
                                                <div className="xl:col-span-6 col-span-12 mb-2">
                                                    <label htmlFor="mailBcc" className="form-label text-dark font-semibold">Bcc</label>
                                                    <input type="email" className="form-control" id="mailBcc" />
                                                </div>
                                                <div className="xl:col-span-12 col-span-12 mb-2">
                                                    <label htmlFor="Subject" className="form-label">Subject</label>
                                                    <input type="text" className="form-control" id="Subject" placeholder="Subject" />
                                                </div>
                                                <div className="xl:col-span-12 col-span-12">
                                                    <label className="col-form-label">Content :</label>
                                                    <div className="mail-compose">
                                                        <div id="mail-compose-editor">
                                                            <ReactQuill />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="ti-modal-footer">
                                            <button type="button"
                                                className="hs-dropdown-toggle ti-btn  ti-btn-secondary-full align-middle"
                                                data-hs-overlay="#todo-compose">
                                                Close
                                            </button>
                                            <button type="button" className="ti-btn bg-primary text-white !font-medium">Send</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-start !p-4 !bg-primary">
                            <div>
                                <span className="avatar avatar-md online avatar-rounded">
                                    <img src="../../../../assets/images/faces/9.jpg" alt="" />
                                </span>
                            </div>
                            <div className="ms-2">
                                <p className="font-semibold mb-0 text-white">Json Taylor</p>
                                <p className="text-white opacity-[0.7] text-[.6875rem] mb-0" >jsontaylor1992@gmail.com</p>
                            </div>
                        </div>
                        <div>
                            <PerfectScrollbar>
                                <ul className="list-none mail-main-nav !text-[0.813rem]" id="mail-main-nav">
                                    <li className="!px-0 !pt-0">
                                        <span className="text-[.6875rem] text-[#8c9097] dark:text-white/50 opacity-[0.7] font-semibold">MAILS</span>
                                    </li>
                                    {Mails.map((idx) => (
                                        <li className={`mail-type ${idx.class1}`} onClick={() => Toggle2()} key={Math.random()}>
                                            <Link href="#!">
                                                <div className="flex items-center">
                                                    <span className="me-2 leading-none">
                                                        <i className={`ri-${idx.icon} align-middle text-[.875rem]`}></i>
                                                    </span>
                                                    <span className="flex-grow whitespace-nowrap">
                                                        {idx.text1}
                                                    </span>
                                                    <span className={idx.class}>{idx.text2}</span>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                    <li className="px-0">
                                        <span className="text-[.6875rem] text-[#8c9097] dark:text-white/50 opacity-[0.7] font-semibold">ONLINE USERS</span>
                                    </li>
                                    <li>
                                        <Link href="#!">
                                            <div className="flex items-start leading-none">
                                                <div className="me-2">
                                                    <span className="avatar avatar-sm online avatar-rounded">
                                                        <img src="../../../../assets/images/faces/4.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="text-defaulttextcolor font-semibold mb-1">Angelica</p>
                                                    <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-0">Hello this is angelica.</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="#!">
                                            <div className="flex items-start leading-none">
                                                <div className="me-2">
                                                    <span className="avatar avatar-sm online avatar-rounded">
                                                        <img src="../../../../assets/images/faces/6.jpg" alt="" />
                                                    </span>
                                                </div>
                                                <div>
                                                    <p className="text-defaulttextcolor font-semibold mb-1">Rexha</p>
                                                    <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-0">Thanks for sharing file 😀.</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            </PerfectScrollbar>
                        </div>
                    </div>
                    <div className={`total-mails ${isTotalMailsVisible ? '!block' : ''} ${isTotalMailsHidden ? '!hidden' : ''} border dark:border-defaultborder/10`}>
                        <div className="!p-4 flex items-center border-b dark:border-defaultborder/10">
                            <div className="me-4">
                                <input className="form-check-input" type="checkbox" id="checkAll" value="" aria-label="..." />
                            </div>
                            <div className="flex-grow">
                                <h6 className="font-semibold mb-0 text-[1rem] !text-defaulttextcolor dark:!text-defaulttextcolor/70">All Mails</h6>
                            </div>
                            <button onClick={() => Toggle1()} aria-label="button" type="button" className="ti-btn ti-btn-icon ti-btn-light me-1 lg:hidden block total-mails-close !mb-0">
                                <i className="ri-close-line"></i>
                            </button>
                            <div className="hs-dropdown ti-dropdown  hidden">
                                <button aria-label="button" className="!w-[2.313rem] !h-[2.313rem]  rounded-sm ti-btn-icon ti-btn-light" type="button"
                                    aria-expanded="false">
                                    <i className="ti ti-dots-vertical"></i>
                                </button>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" href="#!">Recent</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" href="#!">Unread</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" href="#!">Mark All Read</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" href="#!">Spam</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" href="#!">Delete All</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="p-4">
                            <div className="input-group">
                                <input type="text" className="form-control !bg-light !border-0 !rounded-s-md" placeholder="Search Email" aria-describedby="button-addon2" />
                                <button aria-label="button" className="ti-btn ti-btn-light !rounded-s-none !mb-0" type="button" id="button-addon2"><i className="ri-search-line text-[#8c9097] dark:text-white/50"></i></button>
                            </div>
                        </div>
                        <SimpleBar>
                            <div className="mail-messages" id="mail-messages">
                                <ul className="list-none mb-0 mail-messages-container text-defaulttextcolor text-defaultsize">
                                    {Mails1.map((idx) => (
                                        <li className={`!border-x-0 ${idx.bordercls}`} onClick={() => Medium()} key={Math.random()}>
                                            <div className="flex items-start">
                                                <div className="me-4 mt-1">
                                                    <input className="form-check-input" type="checkbox" id="checkboxNoLabel1"
                                                        defaultChecked={idx.checked === 'defaultChecked'}
                                                        defaultValue="" aria-label="..." />
                                                </div>
                                                <div className="me-1 leading-none">
                                                    <span
                                                        className={`avatar avatar-md ${idx.active} me-2 avatar-rounded mail-msg-avatar`}>
                                                        <img src={idx.img} alt="" />
                                                    </span>
                                                </div>
                                                <div className="flex-grow">
                                                    <Link href="#!">
                                                        <p className="mb-1 text-[0.75rem] space-x-2">
                                                            {idx.name}
                                                            <span className={idx.badge}>{idx.badgetxt}</span>
                                                            <span
                                                                className="ltr:float-right rtl:float-left text-[#8c9097] dark:text-white/50 font-normal text-[.6875rem]">
                                                                <span className="me-2">
                                                                    <i className={idx.icon}></i></span>
                                                                {idx.time}</span>
                                                        </p>
                                                    </Link>
                                                    <p className="mail-msg mb-0">
                                                        <span className="block mb-0 font-semibold ">{idx.title}</span>
                                                        <span
                                                            className="text-[.6875rem] text-[#8c9097] dark:text-white/50 text-wrap ">Lorem
                                                            ipsum dolor sit amet consectetur adipisicing elit
                                                            <button aria-label="button" type="button"
                                                                className={`btn p-0 leading-none mail-starred ${idx.star} border-0 ltr:float-right rtl:float-left`}>
                                                                <i className="ri-star-fill text-[.875rem]"></i>
                                                            </button>
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </SimpleBar>
                    </div>
                    <div className={`mails-information ${isMailsInformationVisible ? '!block' : ''} border dark:border-defaultborder/10 text-defaulttextcolor text-defaultsize`}>
                        <div className="mail-info-header flex flex-wrap gap-2 items-center">
                            <div className="me-1">
                                <span className="avatar avatar-md online me-2 avatar-rounded mail-msg-avatar">
                                    <img src="../../../../assets/images/faces/12.jpg" alt="" />
                                </span>
                            </div>
                            <div className="flex-grow">
                                <h6 className="mb-0 font-semibold text-[1rem] dark:text-defaulttextcolor/70">Michael Jeremy</h6>
                                <span className="text-[#8c9097] dark:text-white/50 text-[0.75rem]">michaeljeremy2194@gmail.com</span>
                            </div>
                            <div className="mail-action-icons">
                                <div className="hs-tooltip ti-main-tooltip">
                                    <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-icon ti-btn-light">
                                        <i className="ri-star-line"></i>
                                        <span
                                            className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                            role="tooltip">
                                            Starred
                                        </span>
                                    </button>
                                </div>
                                <div className="hs-tooltip ti-main-tooltip">
                                    <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-icon ti-btn-light">
                                        <i className="ri-inbox-archive-line"></i>
                                        <span
                                            className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                            role="tooltip">
                                            Archive
                                        </span>
                                    </button>
                                </div>
                                <div className="hs-tooltip ti-main-tooltip">
                                    <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-icon ti-btn-light">
                                        <i className="ri-spam-2-line"></i>
                                        <span
                                            className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                            role="tooltip">
                                            Spam
                                        </span>
                                    </button>
                                </div>
                                <div className="hs-tooltip ti-main-tooltip">
                                    <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-icon ti-btn-light">
                                        <i className="ri-delete-bin-line"></i>
                                        <span
                                            className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                            role="tooltip">
                                            Delete
                                        </span>
                                    </button>
                                </div>
                                <div className="hs-tooltip ti-main-tooltip">
                                    <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-icon ti-btn-light">
                                        <i className="ri-reply-line"></i>
                                        <span
                                            className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                            role="tooltip">
                                            Reply
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="responsive-mail-action-icons">
                                <div className="hs-dropdown ti-dropdown  hidden me-1">
                                    <button aria-label="button" className="!w-[2.313rem] !h-[2.313rem]  rounded-sm ti-btn-icon ti-btn-light" type="button" aria-expanded="false">
                                        <i className="ti ti-dots-vertical"></i>
                                    </button>
                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" href="#!"><i className="inline-flex ri-star-line me-1 align-middle"></i>Starred</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" href="#!"><i className="inline-flex ri-inbox-archive-line me-1 align-middle"></i>Archive</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" href="#!"><i className="inline-flex ri-spam-2-line me-1 align-middle"></i>Report Spam</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" href="#!"><i className="inline-flex ri-delete-bin-line me-1 align-middle"></i>Delete</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" href="#!"><i className="inline-flex ri-reply-line me-1 align-middle"></i>Reply</Link></li>
                                    </ul>
                                </div>
                                <button onClick={() => Close()} aria-label="button" type="button" className="ti-btn ti-btn-icon ti-btn-light ms-1">
                                    <i className="ri-close-line"></i>
                                </button>
                            </div>
                        </div>

                        <div className="mail-info-body  dark:!border-defaultborder/10 p-6 overflow-scroll" id="mail-info-body">
                            <div className="sm:flex block items-center justify-between mb-6">
                                <div>
                                    <p className="text-[1.25rem] font-semibold mb-0">History of planets are discovered yesterday.</p>
                                </div>
                                <div className="ltr:float-right rtl:float-left">
                                    <span className="me-2 text-[0.75rem] text-[#8c9097] dark:text-white/50">Oct-22-2022,03:05PM</span>
                                </div>
                            </div>
                            <div className="main-mail-content mb-6">
                                <p className="text-[.875rem] font-semibold mb-4">Hi, Json Taylor Greetings 🖐</p>
                                <p className="mb-2 text-[0.75rem] text-[#8c9097] dark:text-white/50">Earth, our home, is the third planet from the sun. While scientists continue to hunt for clues of life beyond Earth, our home planet remains the only place in the universe where we've ever identified living organisms. .</p>
                                <p className="mb-2 text-[0.75rem] text-[#8c9097] dark:text-white/50">Earth has a diameter of roughly 8,000 miles (13,000 kilometers) and is mostly round because gravity generally pulls matter into a ball. But the spin of our home planet causes it to be squashed at its poles and swollen at the equator, making the true shape of the Earth an "oblate spheroid.".</p>
                                <p className="mb-0 mt-4">
                                    <span className="block">Regards,</span>
                                    <span className="block">Michael Jeremy</span>
                                </p>
                            </div>
                            <div className="mail-attachments mb-6">
                                <div className="flex justify-between items-center">
                                    <div className="mb-0">
                                        <span className="text-[.875rem] font-semibold dark:!text-defaulttextcolor/70"><i className="ri-attachment-2 me-1 align-middle"></i>Attachments (1.8mb):</span>
                                    </div>
                                    <div>
                                        <button type="button" className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-success">Download All</button>
                                    </div>
                                </div>
                                <div className="mt-2 flex items-center flex-wrap">
                                    <Link href="#!" className="mail-attachment border dark:border-defaultborder/10 mb-1 me-2">
                                        <div className="attachment-icon"><svg xmlns="http://www.w3.org/2000/svg" baseProfile="tiny" viewBox="0 0 512 512"><path fill="#FFF" d="M422.3 477.9c0 7.6-6.2 13.8-13.8 13.8h-305c-7.6 0-13.8-6.2-13.8-13.8V34.1c0-7.6 6.2-13.8 13.8-13.8h230.1V109h88.7v368.9z" /><path fill="#2B669F" d="M333.6 6H103.5C88 6 75.4 18.6 75.4 34.1v443.8c0 15.5 12.6 28.1 28.1 28.1h305c15.5 0 28.1-12.6 28.1-28.1V109.1L333.6 6zm88.7 471.9c0 7.6-6.2 13.8-13.8 13.8h-305c-7.6 0-13.8-6.2-13.8-13.8V34.1c0-7.6 6.2-13.8 13.8-13.8h230.1V109h88.7v368.9z" /><path fill="#084272" d="M333.6 6v103.1h103z" /><g><path fill="#084272" d="M465.9 450.8H46.1V308c0-9.8 7.9-17.7 17.7-17.7h384.3c9.8 0 17.7 7.9 17.7 17.7v142.8z" /><path fill="#1A252D" d="M436.6 450.8v19.5l29.3-19.5zM75.4 450.8v19.5l-29.3-19.5z" /><path fill="#2B669F" d="M64.1 308.4h383.7v124.5H64.1z" /></g><g fill="#2B669F"><path d="M298.3 78.6h-177a6.7 6.7 0 010-13.4h177a6.7 6.7 0 010 13.4zM298.3 110.6h-177a6.7 6.7 0 010-13.4h177a6.7 6.7 0 010 13.4zM391.8 142.5H121.3a6.7 6.7 0 010-13.4h270.5a6.7 6.7 0 010 13.4zM391.8 174.5H121.3a6.7 6.7 0 010-13.4h270.5a6.7 6.7 0 010 13.4zM391.8 206.5H121.3a6.7 6.7 0 010-13.4h270.5a6.7 6.7 0 010 13.4zM391.8 238.4H121.3a6.7 6.7 0 010-13.4h270.5a6.7 6.7 0 010 13.4zM391.8 270.4H121.3a6.7 6.7 0 010-13.4h270.5a6.7 6.7 0 010 13.4z" /></g><g fill="#FFF"><path d="M229.3 373.3c0 6.9-1.6 12.5-4.7 16.7-3.1 4.2-7.5 6.3-13.2 6.3-2.2 0-4.2-.4-5.9-1.3-1.7-.9-3.2-2.1-4.5-3.7v21.8h-14.4v-63.8h13.6l.4 5c1.3-1.9 2.8-3.3 4.6-4.3 1.8-1 3.8-1.5 6.1-1.5 5.7 0 10.1 2.2 13.3 6.6 3.1 4.4 4.7 10.2 4.7 17.4v.8zm-14.3-.9c0-3.9-.6-7-1.7-9.4-1.1-2.4-3-3.5-5.4-3.5-1.6 0-3 .3-4.1.9-1.1.6-2 1.5-2.7 2.6v19.2c.7 1 1.6 1.7 2.7 2.2 1.1.5 2.5.7 4.1.7 2.5 0 4.3-1 5.4-3.1 1.1-2.1 1.6-5 1.6-8.7v-.9zM239.8 372.4c0-7.2 1.6-13 4.7-17.4 3.1-4.4 7.6-6.6 13.3-6.6 2.1 0 4 .5 5.8 1.5 1.7 1 3.3 2.4 4.6 4.2V329h14.4v66.4H270l-1-5.6c-1.4 2.1-3 3.7-4.9 4.8-1.9 1.1-4 1.7-6.4 1.7-5.7 0-10.1-2.1-13.2-6.3-3.1-4.2-4.7-9.7-4.7-16.6v-1zm14.4.9c0 3.7.5 6.7 1.6 8.7 1.1 2.1 2.9 3.1 5.5 3.1 1.5 0 2.8-.3 4-.8 1.1-.6 2.1-1.4 2.8-2.4v-18.6c-.7-1.2-1.7-2.2-2.8-2.8-1.1-.7-2.4-1-3.9-1-2.6 0-4.4 1.2-5.5 3.5-1.1 2.4-1.7 5.5-1.7 9.4v.9zM300 395.4v-36.1h-6.6v-10h6.6v-4.8c0-5.3 1.6-9.3 4.8-12.2 3.2-2.9 7.7-4.3 13.5-4.3 1.1 0 2.2.1 3.3.2 1.1.2 2.4.4 3.8.7l-1.1 10.6c-.8-.1-1.5-.2-2.1-.3-.6-.1-1.3-.1-2.2-.1-1.8 0-3.2.5-4.2 1.4-1 .9-1.4 2.3-1.4 4v4.8h9.1v10h-9.1v36.1H300z" /></g></svg>
                                        </div>
                                        <div className="leading-none">
                                            <p className="mb-1 attachment-name truncate dark:border-defaultborder/10">
                                                Earth_Archeology_2.21-4.pdf
                                            </p>
                                            <p className="mb-0 text-[.6875rem] text-[#8c9097] dark:text-white/50">
                                                0.85MB
                                            </p>
                                        </div>
                                    </Link>
                                    <Link href="#!" className="mail-attachment border dark:border-defaultborder/10">
                                        <div className="attachment-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#FFF" d="M422.3 477.9c0 7.6-6.2 13.8-13.8 13.8h-305c-7.6 0-13.8-6.2-13.8-13.8V34.1c0-7.6 6.2-13.8 13.8-13.8h230.1V109h88.7v368.9z" /><path fill="#24A885" d="M333.6 6H103.5C88 6 75.4 18.6 75.4 34.1v443.8c0 15.5 12.6 28.1 27.1 28.1h305c16.5 0 29.1-12.6 29.1-28.1V109.1L333.6 6zm88.7 471.9c0 7.6-6.2 13.8-13.8 13.8h-305c-7.6 0-13.8-6.2-13.8-13.8V34.1c0-7.6 6.2-13.8 13.8-13.8h230.1V109h88.7v368.9z" /><path fill="#16876B" d="M333.6 6v103.1h103zM465.9 450.8H46.1V308c0-9.8 7.9-17.7 17.7-17.7h384.3c9.8 0 17.7 7.9 17.7 17.7v142.8z" /><path fill="#59E0B9" d="M436.6 450.8v19.5l29.3-19.5zM75.4 450.8v19.5l-29.3-19.5z" /><path fill="#2EBA98" d="M64.1 308.4h383.7v124.5H64.1z" /><path fill="#16876B" d="M298.3 78.6h-177a6.7 6.7 0 0 1 0-13.4h177a6.7 6.7 0 0 1 0 13.4zM298.3 110.6h-177a6.7 6.7 0 0 1 0-13.4h177a6.7 6.7 0 0 1 0 13.4zM391.8 142.5H121.3a6.7 6.7 0 0 1 0-13.4h270.5a6.7 6.7 0 0 1 0 13.4zM391.8 174.5H121.3a6.7 6.7 0 0 1 0-13.4h270.5a6.7 6.7 0 0 1 0 13.4zM391.8 206.5H121.3a6.7 6.7 0 0 1 0-13.4h270.5a6.7 6.7 0 0 1 0 13.4zM391.8 238.4H121.3a6.7 6.7 0 0 1 0-13.4h270.5a6.7 6.7 0 0 1 0 13.4zM391.8 270.4H121.3a6.7 6.7 0 0 1 0-13.4h270.5a6.7 6.7 0 0 1 0 13.4z" /><path fill="#FFF" d="M191.3 349.7v43.9c0 5.4-1.4 9.6-4.3 12.5-2.9 2.9-6.9 4.4-12.1 4.4-1.2 0-2.2-.1-3.2-.2s-2-.3-3.1-.5l.6-10.2c.8.2 1.4.3 2 .4s1.2.1 2.1.1c1.5 0 2.6-.5 3.4-1.6.8-1.1 1.2-2.7 1.2-4.8v-43.9h13.4zm-.2-10h-13.6v-9.1h13.6v9.1zM244.8 372.3c0 6.5-1.5 11.7-4.4 15.7-2.9 3.9-7.1 5.9-12.4 5.9-2.1 0-3.9-.4-5.5-1.2-1.6-.8-3-2-4.2-3.5v20.5h-13.5v-60h12.8l.4 4.7c1.2-1.8 2.6-3.1 4.3-4.1 1.7-1 3.6-1.4 5.7-1.4 5.4 0 9.5 2.1 12.5 6.2s4.4 9.6 4.4 16.3v.9zm-13.5-.8c0-3.7-.5-6.6-1.6-8.8-1.1-2.2-2.8-3.3-5.1-3.3-1.5 0-2.8.3-3.9.8-1.1.6-1.9 1.4-2.5 2.4v18.1c.6.9 1.5 1.6 2.5 2.1 1.1.5 2.4.7 3.9.7 2.4 0 4.1-1 5.1-2.9 1-2 1.5-4.7 1.5-8.2v-.9zM275.7 393.9c-6.6 0-11.7-2-15.4-6-3.7-4-5.6-9-5.6-15.1v-1.5c0-6.6 1.8-12 5.3-16.2 3.5-4.2 8.6-6.2 15.2-6.2 5.8 0 10.4 1.7 13.6 5.2 3.2 3.5 4.8 8.3 4.8 14.4v7.1h-24.8l-.1.2c.2 2.3 1.1 4.1 2.5 5.5 1.5 1.4 3.6 2.1 6.3 2.1 2.6 0 4.7-.2 6.5-.6 1.7-.4 3.7-1.1 5.9-2l3.2 8.3c-1.9 1.4-4.4 2.5-7.5 3.4-3.1 1-6.4 1.4-9.9 1.4zm-.5-34.5c-2.2 0-3.8.7-4.8 2.1-1 1.4-1.6 3.2-1.8 5.6l.1.2h11.7v-1c0-2.2-.4-3.9-1.2-5.1-.7-1.3-2.1-1.8-4-1.8zM303.3 371.5c0-6.8 1.5-12.2 4.4-16.3 3-4.1 7.1-6.2 12.5-6.2 2.3 0 4.3.5 6 1.6 1.7 1.1 3.2 2.6 4.5 4.6l.9-5.4h11.9v42.9c0 5.7-2 10.1-5.9 13.3-3.9 3.1-9.3 4.7-16.2 4.7-2.2 0-4.6-.3-7.1-.9-2.5-.6-4.8-1.4-7.1-2.5l2.3-10c1.9.9 3.8 1.5 5.6 1.9 1.8.4 3.8.6 6.1.6 2.9 0 5-.6 6.4-1.7 1.4-1.1 2.1-3 2.1-5.4v-3.4c-1.2 1.6-2.7 2.8-4.3 3.6-1.6.8-3.5 1.2-5.5 1.2-5.3 0-9.5-2-12.4-5.9-2.9-4-4.4-9.2-4.4-15.7v-1zm13.5.8c0 3.5.5 6.3 1.5 8.2 1 2 2.8 2.9 5.2 2.9 1.5 0 2.7-.2 3.8-.7 1.1-.5 1.9-1.1 2.6-2v-18.2c-.7-1-1.5-1.8-2.6-2.4-1-.5-2.3-.8-3.7-.8-2.4 0-4.1 1.1-5.2 3.3-1.1 2.2-1.6 5.2-1.6 8.8v.9z" /></svg>
                                        </div>
                                        <div className="leading-none">
                                            <p className="mb-1 attachment-name truncate dark:border-defaultborder/10">
                                                Planets_Image.Jpeg
                                            </p>
                                            <p className="mb-0 text-[.6875rem] text-[#8c9097] dark:text-white/50">
                                                457KB
                                            </p>
                                        </div>
                                    </Link>
                                    <Link aria-label="anchor" href="#!" className="!w-[2.75rem] !h-[2.75rem] ti-btn-icon ti-btn-outline-light dark:hover:!bg-light  flex items-center justify-center !rounded-md dark:!border-defaultborder/10 !ms-2 !text-[1.2rem] !text-defaulttextcolor dark:!text-defaulttextcolor/70 border">
                                        <i className="ri-attachment-2"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="text-[.875rem] font-semibold"><i className="ri-reply-all-line me-1 align-middle inline-block"></i>Reply:</span>
                            </div>
                            <div className="mail-reply dark:border-defaultborder/10">
                                <div id="mail-reply-editor">
                                    <ReactQuill />
                                </div>
                            </div>
                        </div>

                        <div className="mail-info-footer  dark:!border-defaultborder/10 flex flex-wrap gap-2 items-center justify-between">
                            <div>
                                <div className="hs-tooltip ti-main-tooltip">
                                    <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-icon ti-btn-light">
                                        <i className="ri-printer-line"></i>
                                        <span
                                            className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                            role="tooltip">
                                            Print
                                        </span>
                                    </button>
                                </div>
                                <div className="hs-tooltip ti-main-tooltip">
                                    <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-icon ti-btn-light">
                                        <i className="ri-mail-open-line"></i>
                                        <span
                                            className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                            role="tooltip">
                                            Mark as read
                                        </span>
                                    </button>
                                </div>
                                <div className="hs-tooltip ti-main-tooltip">
                                    <button type="button" className="hs-tooltip-toggle ti-btn ti-btn-icon ti-btn-light">
                                        <i className="ri-refresh-line"></i>
                                        <span
                                            className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                            role="tooltip">
                                            Reload
                                        </span>
                                    </button>
                                </div>
                            </div>
                            <div className="space-x-2 rtl:space-x-reverse">
                                <button type="button" className="ti-btn ti-btn-secondary-full">
                                    <i className="ri-share-forward-line me-1 inline-block align-middle"></i>Forward
                                </button>
                                <button type="button" className="ti-btn ti-btn-danger-full ms-1">
                                    <i className="ri-reply-all-line me-1 inline-block align-middle"></i>Reply
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mail-recepients border dark:border-defaultborder/10">
                        <div className="p-4 border-b  dark:border-defaultborder/10">
                            <div className="hs-tooltip ti-main-tooltip">
                                <button aria-label="anchor" type="button" className="hs-tooltip-toggle ti-btn ti-btn-light ti-btn-icon !rounded-full" ><i className="ri-add-line"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                        role="tooltip">
                                        Add Recepient
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="p-4 flex flex-column items-center total-mail-recepients overflow-scroll" id="mail-recepients">
                            <div className="hs-tooltip ti-main-tooltip [--placement:left]">
                                <Link href="#!" className="mail-recepeint-person hs-tooltip-toggle">
                                    <span className="avatar online avatar-rounded">
                                        <img src="../../../../assets/images/faces/5.jpg" alt="" />
                                    </span>
                                    <span className="hs-tooltip-content ti-main-tooltip-content !py-[0.2rem] px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                        role="tooltip">
                                        Sujika
                                    </span>
                                </Link>
                            </div>
                            <div className="hs-tooltip ti-main-tooltip [--placement:left]">
                                <Link href="#!" className="mail-recepeint-person hs-tooltip-toggle">
                                    <span className="avatar online avatar-rounded">
                                        <img src="../../../../assets/images/faces/7.jpg" alt="" />
                                    </span>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content !py-[0.2rem] px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                        role="tooltip">
                                        Samantha May
                                    </span>
                                </Link>
                            </div>
                            <div className="hs-tooltip ti-main-tooltip [--placement:left]">
                                <Link href="#!" className="mail-recepeint-person hs-tooltip-toggle">
                                    <span className="avatar offline avatar-rounded">
                                        <img src="../../../../assets/images/faces/4.jpg" alt="" />
                                    </span>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content !py-[0.2rem] px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                        role="tooltip">
                                        Brenda
                                    </span>
                                </Link>
                            </div>
                            <div className="hs-tooltip ti-main-tooltip [--placement:left]">
                                <Link href="#!" className="mail-recepeint-person hs-tooltip-toggle">
                                    <span className="avatar offline online avatar-rounded">
                                        <img src="../../../../assets/images/faces/8.jpg" alt="" />
                                    </span>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content !py-[0.2rem] px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                        role="tooltip">
                                        Monika
                                    </span>
                                </Link>
                            </div>
                            <div className="hs-tooltip ti-main-tooltip [--placement:left]">
                                <Link href="#!" className="mail-recepeint-person hs-tooltip-toggle">
                                    <span className="avatar offline avatar-rounded">
                                        <img src="../../../../assets/images/faces/3.jpg" alt="" />
                                    </span>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content !py-[0.2rem] px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                        role="tooltip">
                                        Kiran Jah
                                    </span>
                                </Link>
                            </div>
                            <div className="hs-tooltip ti-main-tooltip [--placement:left]">
                                <Link href="#!" className="mail-recepeint-person hs-tooltip-toggle">
                                    <span className="avatar offline avatar-rounded">
                                        <img src="../../../../assets/images/faces/11.jpg" alt="" />
                                    </span>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content !py-[0.2rem] px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                        role="tooltip">
                                        Sujika
                                    </span>
                                </Link>
                            </div>
                            <div className="hs-tooltip ti-main-tooltip [--placement:left]">
                                <Link href="#!" className="mail-recepeint-person hs-tooltip-toggle">
                                    <span className="avatar offline avatar-rounded">
                                        <img src="../../../../assets/images/faces/11.jpg" alt="" />
                                    </span>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content !py-[0.2rem] px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                        role="tooltip">
                                        Kim Noh
                                    </span>
                                </Link>
                            </div>
                            <div className="hs-tooltip ti-main-tooltip [--placement:left]">
                                <Link href="#!" className="mail-recepeint-person hs-tooltip-toggle">
                                    <span className="avatar online avatar-rounded">
                                        <img src="../../../../assets/images/faces/16.jpg" alt="" />
                                    </span>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content !py-[0.2rem] px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                        role="tooltip">
                                        Sujika
                                    </span>
                                </Link>
                            </div>
                            <div className="hs-tooltip ti-main-tooltip [--placement:left]">
                                <Link href="#!" className="mail-recepeint-person hs-tooltip-toggle">
                                    <span className="avatar offline avatar-rounded">
                                        <img src="../../../../assets/images/faces/10.jpg" alt="" />
                                    </span>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content !py-[0.2rem] px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                        role="tooltip">
                                        Professer
                                    </span>
                                </Link>
                            </div>
                            <div className="hs-tooltip ti-main-tooltip [--placement:left]">
                                <Link href="#!" className="mail-recepeint-person hs-tooltip-toggle">
                                    <span className="avatar offline avatar-rounded">
                                        <img src="../../../../assets/images/faces/15.jpg" alt="" />
                                    </span>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content !py-[0.2rem] px-2 !bg-black !text-xs !font-medium !text-white shadow-sm dark:bg-slate-700"
                                        role="tooltip">
                                        Alex
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}
Mailapp.layout = "Contentlayout"

export default Mailapp