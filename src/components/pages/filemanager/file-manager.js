import { Filemanagerlist, Folderdata, Myfilesdata, Recentdata } from '@/shared/data/pages/filemanager/filemanagerdata'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React, { Fragment, useEffect, useState } from 'react'
import PerfectScrollbar from 'react-perfect-scrollbar';

const Filemanager = () => {

    const [isFileManagerOpen, setFileManagerOpen] = useState(false);
    const [isFileManagerOpen1, setFileManagerOpen1] = useState(false);

    const toggleFileManager = () => {
        if (window.innerWidth <= 575) {
            setFileManagerOpen(true);
            setFileManagerOpen1(false);
        }
    };

    const toggleFileManager1 = () => {
        setFileManagerOpen(false);
    };

    const handleToggleDetails = () => {
        if (window.innerWidth <= 1200) {
            setFileManagerOpen1(true);
        }
    };

    const handleToggleDetailsClose = () => {
        setFileManagerOpen1(false);
    };

    return (
        <Fragment>
            <Seo title={"File Manager"} />
            <div className="file-manager-container p-2 gap-2 sm:!flex !block text-defaulttextcolor text-defaultsize">

                <div className={`file-manager-navigation ${isFileManagerOpen ? 'close' : ''}`}>
                    <div className="flex items-center justify-between w-full p-4 border-b dark:border-defaultborder/10">
                        <div>
                            <h6 className="font-semibold mb-0 text-[1rem] text-defaulttextcolor">File Manager</h6>
                        </div>
                        <div className="hs-dropdown ti-dropdown">
                            <button className="ti-btn ti-btn-sm ti-btn-primary" aria-label="button" type="button" aria-expanded="false">
                                <i className="ri-settings-3-line"></i>
                            </button>
                            <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" href="#!">Hidden Files</Link></li>
                                <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" href="#!">Another action</Link></li>
                                <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" href="#!">Something else here</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-4 border-b dark:border-defaultborder/10">
                        <div className="input-group">
                            <input type="text" className="form-control !bg-light border-0 !rounded-s-sm" placeholder="Search Files" aria-describedby="button-addon2" />
                            <button aria-label="button" type="button" className="ti-btn ti-btn-light !rounded-s-none !mb-0" id="button-addon2"><i className="ri-search-line text-[#8c9097] dark:text-white/50"></i></button>
                        </div>
                    </div>
                    <div>
                        <PerfectScrollbar>
                            <ul className="list-none files-main-nav" id="files-main-nav">
                                <li className="active files-type" onClick={() => { toggleFileManager() }}>
                                    <a href="#!">
                                        <div className="flex items-center">
                                            <div className="me-2">
                                                <i className="ri-folder-2-line text-[1rem]"></i>
                                            </div>
                                            <span className="flex-grow whitespace-nowrap">
                                                My Files
                                            </span>
                                            <span className="badge bg-primary text-white">322</span>
                                        </div>
                                    </a>
                                </li>
                                <li className="files-type">
                                    <a href="#!">
                                        <div className="flex items-center">
                                            <div className="me-2">
                                                <i className="ri-star-s-line text-[1rem]"></i>
                                            </div>
                                            <span className="flex-grow whitespace-nowrap">
                                                Favouries
                                            </span>
                                        </div>
                                    </a>
                                </li>
                                <li className="files-type">
                                    <a href="#!">
                                        <div className="flex items-center">
                                            <div className="me-2">
                                                <i className="ri-share-forward-line text-[1rem]"></i>
                                            </div>
                                            <span className="flex-grow whitespace-nowrap">
                                                Shared Files
                                            </span>
                                        </div>
                                    </a>
                                </li>
                                <li className="files-type">
                                    <a href="#!">
                                        <div className="flex items-center">
                                            <div className="me-2">
                                                <i className="ri-delete-bin-line text-[1rem]"></i>
                                            </div>
                                            <span className="flex-grow whitespace-nowrap">
                                                Recycle Bin
                                            </span>
                                        </div>
                                    </a>
                                </li>
                                <li className="files-type">
                                    <a href="#!">
                                        <div className="flex items-center">
                                            <div className="me-2">
                                                <i className="ri-history-fill text-[1rem]"></i>
                                            </div>
                                            <span className="flex-grow whitespace-nowrap">
                                                Recent Files
                                            </span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <div className="flex items-center">
                                            <div className="me-2">
                                                <i className="ri-settings-3-line text-[1rem]"></i>
                                            </div>
                                            <span className="flex-grow whitespace-nowrap">
                                                Settings
                                            </span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <div className="flex items-center">
                                            <div className="me-2">
                                                <i className="ri-questionnaire-line text-[1rem]"></i>
                                            </div>
                                            <span className="flex-grow whitespace-nowrap">
                                                Help Center
                                            </span>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#!">
                                        <div className="flex items-center">
                                            <div className="me-2">
                                                <i className="ri-folder-line text-[1rem]"></i>
                                            </div>
                                            <span className="flex-grow whitespace-nowrap">
                                                Version
                                            </span>
                                        </div>
                                    </a>
                                </li>
                                <li className="mb-8">
                                    <a href="#!">
                                        <div className="flex items-center">
                                            <div className="me-2">
                                                <i className="ri-logout-box-line text-[1rem]"></i>
                                            </div>
                                            <span className="flex-grow whitespace-nowrap">
                                                Log out
                                            </span>
                                        </div>
                                    </a>
                                </li>
                                <li className="mb-8">
                                    <div className="text-[#8c9097] dark:text-white/50 mb-2">
                                        <p className="mb-1"><span className="font-bold text-[.875rem]">69.42GB</span> Used</p>
                                        <p className="text-[.75rem] mb-0">58% Used - 51.04Gb free</p>
                                    </div>
                                    <div className="progress progress-xs">
                                        <div className="progress-bar !bg-info w-[58%]" aria-valuenow="58" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                    </div>
                                </li>
                                <li className="flex items-center justify-center">
                                    <div className="filemanager-upgrade-storage">
                                        <span>
                                            <img src="../../../../assets/images/media/file-manager/2.png" alt="" />
                                        </span>
                                        <div className="text-defaulttextcolor">
                                            <span className="text-[.9375rem] font-semibold">Want to <span className="font-bold text-success"><u>Buy</u></span> Storage?</span>
                                        </div>
                                        <div className="mt-4 grid">
                                            <button type="button" className="ti-btn ti-btn-primary-gradient">Upgrade</button>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </PerfectScrollbar>
                    </div>
                </div>

                <div className={`file-manager-folders ${isFileManagerOpen ? 'open' : ''}`}>
                    <div className="flex p-4 flex-wrap gap-2 items-center justify-between border-b dark:border-defaultborder/10">
                        <div>
                            <h6 className="font-semibold mb-0 text-[1rem]">Folders</h6>
                        </div>
                        <div className="flex gap-2">
                            <button aria-label="button" onClick={() => { toggleFileManager1() }} type="button" id="folders-close-btn" className="sm:hidden block btn btn-icon btn-sm btn-danger">
                                <i className="ri-close-fill"></i>
                            </button>
                            <div>
                                <Link href="#!" className="hs-dropdown-toggle ti-btn !gap-0 !py-1 !px-2 !text-[0.75rem] !font-medium bg-primary text-white flex items-center justify-center" data-hs-overlay="#todo-compose">
                                    <i className="ri-add-circle-line align-middle !me-1"></i>Create Folder
                                </Link>
                                <div id="todo-compose" className="hs-overlay hidden ti-modal">
                                    <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
                                        <div className="ti-modal-content w-full">
                                            <div className="ti-modal-header">
                                                <h6 className="modal-title text-[1rem] font-semibold" id="mail-ComposeLabel">Create Folder</h6>
                                                <button type="button" className="hs-dropdown-toggle !text-[1rem] !font-semibold !text-defaulttextcolor" data-hs-overlay="#todo-compose">
                                                    <i className="ri-close-line"></i>
                                                </button>
                                            </div>
                                            <div className="ti-modal-body px-4">
                                                <label htmlFor="create-folder1" className="form-label">Folder Name</label>
                                                <input type="text" className="form-control" id="create-folder1" placeholder="Folder Name" />
                                            </div>
                                            <div className="ti-modal-footer">
                                                <button aria-label="button" type="button"
                                                    className="hs-dropdown-toggle ti-btn  ti-btn-light align-middle"
                                                    data-hs-overlay="#todo-compose">
                                                    <i className="ri-close-fill"></i>
                                                </button>
                                                <button type="button" className="ti-btn ti-btn-success-full text-white !font-medium">Create</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Link href="#!" className="hs-dropdown-toggle ti-btn !gap-0 !py-1 !px-2 !text-[0.75rem] !font-medium bg-secondary text-white flex items-center justify-center" data-hs-overlay="#todo-compose2">
                                    <i className="ri-add-circle-line align-middle !me-1"></i>Create File
                                </Link>
                                <div id="todo-compose2" className="hs-overlay hidden ti-modal">
                                    <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
                                        <div className="ti-modal-content w-full">
                                            <div className="ti-modal-header">
                                                <h6 className="modal-title text-[1rem] font-semibold">Create File</h6>
                                                <button type="button" className="hs-dropdown-toggle !text-[1rem] !font-semibold !text-defaulttextcolor" data-hs-overlay="#todo-compose2">
                                                    <span className="sr-only">Close</span>
                                                    <i className="ri-close-line"></i>
                                                </button>
                                            </div>
                                            <div className="ti-modal-body px-4">
                                                <label htmlFor="create-folder1" className="form-label">Folder Name</label>
                                                <input type="text" className="form-control" placeholder="Folder Name" />
                                            </div>
                                            <div className="ti-modal-footer">
                                                <button aria-label="button" type="button"
                                                    className="hs-dropdown-toggle ti-btn  ti-btn-light align-middle"
                                                    data-hs-overlay="#todo-compose2">
                                                    <i className="ri-close-fill"></i>
                                                </button>
                                                <button type="button" className="ti-btn ti-btn-success-full text-white !font-medium">Create</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 file-folders-container  overflow-scroll" id="file-folders-container">
                        <div className="flex mb-4 items-center justify-between">
                            <p className="mb-0 font-semibold text-[.875rem]">My Files</p>
                            <button type="button" className="btn btn-sm btn-primary-light">View All</button>
                        </div>
                        <div className="grid grid-cols-12 gap-x-6 mb-4">
                            {Myfilesdata.map((idx) => (

                                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12" key={Math.random()}>
                                    <div className="box shadow-none !bg-light">
                                        <div className="box-body !p-4">
                                            <Link href="#!">
                                                <div className="flex justify-between flex-wrap">
                                                    <div className="file-format-icon">
                                                        {idx.class}
                                                    </div>
                                                    <div>
                                                        <span className="font-semibold mb-1">
                                                            {idx.text1}
                                                        </span>
                                                        <span className="text-[.625rem] block text-[#8c9097] dark:text-white/50 text-end">
                                                            {idx.text2}
                                                        </span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex mb-4 items-center justify-between">
                            <p className="mb-0 font-semibold text-[.875rem]">Folders</p>
                            <button type="button" className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium  ti-btn-primary">View All</button>
                        </div>
                        <div className="grid grid-cols-12 gap-x-6 mb-4">
                            {Folderdata.map((idx) => (
                                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12" key={Math.random()}>
                                    <div className="box border dark:border-defaultborder/10  !shadow-none">
                                        <div className={`box-body ${idx.color1}`}>
                                            <div className="mb-4 folder-svg-container flex flex-wrap justify-between items-start">
                                                <div>
                                                    {idx.class}
                                                </div>
                                                <div>
                                                    <div className="hs-dropdown ti-dropdown ltr:[--placement:left-top] rtl:[--placement:right-top]">
                                                        <button className={`ti-btn ti-btn-sm ti-btn-${idx.color2}`} aria-label="button" type="button" aria-expanded="false">
                                                            <i className="ri-more-2-fill"></i>
                                                        </button>
                                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" href="#!">Delete</Link></li>
                                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" href="#!">Rename</Link></li>
                                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" href="#!">Hide Folder</Link></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="text-[.875rem] font-semibold mb-1 leading-none">
                                                <Link href="#!">{idx.text1}</Link>
                                            </p>
                                            <div className="flex items-center justify-between flex-wrap">
                                                <div>
                                                    <span className="text-[#8c9097] dark:text-white/50 text-[.75rem]">
                                                        {idx.text2}
                                                    </span>
                                                </div>
                                                <div>
                                                    <span className="text-default font-semibold">
                                                        {idx.text3}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                        <div className="flex mb-4 items-center justify-between">
                            <p className="mb-0 font-semibold text-[.875rem]">Recents</p>
                            <button type="button" className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-primary">View All</button>
                        </div>
                        <div className="grid grid-cols-12 gap-6">
                            <div className="xl:col-span-12 col-span-12">
                                <div className="table-responsive border border-bottom-0 dark:border-defaultborder/10">
                                    <table className="table whitespace-nowrap table-hover min-w-full">
                                        <thead>
                                            <tr>
                                                <th scope="col" className="text-start">File Name</th>
                                                <th scope="col" className="text-start">Category</th>
                                                <th scope="col" className="text-start">Size</th>
                                                <th scope="col" className="text-start">Date Modified</th>
                                                <th scope="col" className="text-start">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="files-list">
                                            {Recentdata.map((idx) => (
                                                <tr className="border border-inherit border-solid border-x-0 hover:bg-gray-100 dark:border-defaultborder/10 dark:hover:bg-light" key={Math.random()} onClick={handleToggleDetails}>
                                                    <th scope="row">
                                                        <div className="flex items-center">
                                                            <div className="me-2">
                                                                <span className="avatar avatar-xs">
                                                                    <img src="../../../../assets/images/media/file-manager/1.png" alt="" />
                                                                </span>
                                                            </div>
                                                            <div>
                                                                {idx.text1}
                                                            </div>
                                                        </div>
                                                    </th>
                                                    <td>{idx.text2}</td>
                                                    <td>{idx.text3}</td>
                                                    <td>{idx.text4}</td>
                                                    <td>
                                                        <div className="flex flex-row items-center !gap-2 text-[0.9375rem]">
                                                            <Link aria-label="anchor" href="#!"
                                                                className="ti-btn ti-btn-icon ti-btn-wave !rounded-full !border-info/10 !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-info/10 text-info hover:bg-info hover:text-white hover:border-info"><i
                                                                    className="ri-eye-line"></i></Link>
                                                            <Link aria-label="anchor" href="#!"
                                                                className="ti-btn ti-btn-icon ti-btn-wave !rounded-full !border-danger/10 !gap-0 !m-0 !h-[1.75rem] !w-[1.75rem] text-[0.8rem] bg-danger/10 text-danger hover:bg-danger hover:text-white hover:border-danger"><i
                                                                    className="ri-delete-bin-line"></i></Link>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                        <tfoot>
                                            <tr className="">
                                                <td colSpan="5">
                                                    <nav aria-label="Page navigation" className="flex justify-end">
                                                        <ul className="ti-pagination  mb-0">
                                                            <li className="page-item disabled"><Link className="page-link px-3 py-[0.375rem]" href="#!">Previous</Link></li>
                                                            <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">1</Link></li>
                                                            <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">2</Link></li>
                                                            <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">Next</Link></li>
                                                        </ul>
                                                    </nav>
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`selected-file-details ${isFileManagerOpen1 ? 'open' : ''}`}>
                    <div className="flex p-4 items-center justify-between border-b dark:border-defaultborder/10">
                        <div>
                            <h6 className="font-semibold mb-0 text-[1rem]">File Details</h6>
                        </div>
                        <div className="flex items-center">
                            <div className="hs-dropdown ti-dropdown me-1">
                                <button className="ti-btn ti-btn-sm ti-btn-primary" aria-label="button" type="button" aria-expanded="false">
                                    <i className="ri-more-2-fill"></i>
                                </button>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" href="#!">Share</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" href="#!">Copy</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" href="#!">Move</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" href="#!">Delete</Link></li>
                                    <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium" href="#!">Raname</Link></li>
                                </ul>
                            </div>
                            <button onClick={handleToggleDetailsClose} aria-label="button" type="button" id="file-close-btn" className="ti-btn ti-btn-icon ti-btn-sm ti-btn-danger xl:hidden block">
                                <i className="ri-close-fill"></i>
                            </button>
                        </div>
                    </div>
                    <div className="filemanager-file-details overflow-scroll" id="filemanager-file-details">
                        <div className="p-4 text-center border-b border-dashed dark:border-defaultborder/10 ">
                            <div className="file-details mb-4 !inline-flex">
                                <img src="../../../../assets/images/media/file-manager/3.png" alt="" />
                            </div>
                            <div>
                                <p className="mb-0 font-semibold text-[1rem]">AMB-2012.zip</p>
                                <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[.625rem]">422KB | 23,Nov 2022</p>
                            </div>
                        </div>
                        <div className="p-4 border-b border-dashed dark:border-defaultborder/10">
                            <ul className="list-group">
                                <li className="list-group-item">
                                    <div>
                                        <span className="font-semibold">File Format : </span><span className="text-[.75rem] text-[#8c9097] dark:text-white/50">zip</span>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <div>
                                        <p className="font-semibold mb-0">File Description : </p>
                                        <span className="text-[.75rem] text-[#8c9097] dark:text-white/50">This file contains 3 folder ynex.main &amp; ynex.premium &amp; ynex.featured and 42 images and layout styles are added in this update.</span>
                                    </div>
                                </li>
                                <li className="list-group-item">
                                    <p className="font-semibold mb-0">File Location : </p>
                                    <span className="text-[.75rem] text-[#8c9097] dark:text-white/50">Device/Storage/Archives/AMB-2012.zip</span>
                                </li>
                            </ul>
                        </div>
                        <div className="p-4 border-b border-dashed dark:border-defaultborder/10">
                            <p className="mb-1 font-semibold text-[.875rem]">Downloaded from :</p>
                            <Link className="text-primary font-semibold break-words" href="#!">
                                <u>https://themeforest.net/user/spruko/portfolio</u>
                            </Link>
                        </div>
                        <div className="p-4">
                            <p className="mb-2 font-semibold text-[.875rem]">Shared With :</p>
                            <div className="flex items-center p-2 mb-1">
                                <span className="avatar avatar-sm me-2">
                                    <img src="../../../../assets/images/faces/1.jpg" alt="" className="!rounded-md" />
                                </span>
                                <span className="font-semibold flex-grow dark:text-defaulttextcolor/70">Akira Susan</span>
                                <span className="badge bg-success/10 text-success font-normal">28,Nov 2022</span>
                            </div>
                            <div className="flex items-center p-2 mb-1">
                                <span className="avatar avatar-sm me-2">
                                    <img src="../../../../assets/images/faces/15.jpg" alt="" className="!rounded-md" />
                                </span>
                                <span className="font-semibold flex-grow dark:text-defaulttextcolor/70">Khalid Ahmad</span>
                                <span className="badge bg-success/10 text-success font-normal">16,Oct 2022</span>
                            </div>
                            <div className="flex items-center p-2 mb-1">
                                <span className="avatar avatar-sm me-2">
                                    <img src="../../../../assets/images/faces/8.jpg" alt="" className="!rounded-md" />
                                </span>
                                <span className="font-semibold flex-grow dark:text-defaulttextcolor/70">Jeremiah Jackson</span>
                                <span className="badge bg-success/10 text-success font-normal">05,Dec 2022</span>
                            </div>
                            <div className="flex items-center p-2">
                                <span className="avatar avatar-sm me-2">
                                    <img src="../../../../assets/images/faces/13.jpg" alt="" className="!rounded-md" />
                                </span>
                                <span className="font-semibold flex-grow dark:text-defaulttextcolor/70">Brigo Jhonson</span>
                                <span className="badge bg-success/10 text-success font-normal">13,Nov 2022</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Filemanager.layout = "Contentlayout"

export default Filemanager