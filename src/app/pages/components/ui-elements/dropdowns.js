import { dropdown1, dropdown10, dropdown11, dropdown12, dropdown13, dropdown14, dropdown15, dropdown16, dropdown17, dropdown18, dropdown19, dropdown2, dropdown20, dropdown21, dropdown22, dropdown3, dropdown4, dropdown5, dropdown6, dropdown7, dropdown8, dropdown9, group4, group5 } from '@/shared/data/prism/uielementsprism'
import { SingleButtons } from '@/shared/data/ui-elements/dropdownsdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Showcode from '@/shared/layout-components/showcode/showcode'
import Link from 'next/link'
import React from 'react'

const Dropdowns = () => {
    return (
        <div>
            <Seo title={"Dropdowns"} />
            <Pageheader currentpage="Dropdowns" activepage="Ui Elements" mainpage="Dropdowns" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <Showcode title="Dropdowns" code={dropdown1}>
                        <div className="ti-btn-list flex align-center flex-wrap">
                            <div className="hs-dropdown ti-dropdown me-2">
                                <button className="ti-btn ti-btn-primary-full ti-dropdown-toggle !py-2"
                                    type="button" id="dropdownMenuButton1"
                                    aria-expanded="false">
                                    Dropdown button<i
                                        className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                </button>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden"
                                    aria-labelledby="dropdownMenuButton1">
                                    <li><Link className="ti-dropdown-item" href="#!">Action</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Another
                                        action</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Something else
                                        here</Link></li>
                                </ul>
                            </div>
                            <div className="hs-dropdown ti-dropdown">
                                <Link className="ti-btn ti-btn-secondary-full ti-dropdown-toggle !py-2"
                                    href="#!" id="dropdownMenuLink" aria-expanded="false">
                                    Dropdown link<i
                                        className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                </Link>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden"
                                    aria-labelledby="dropdownMenuLink">
                                    <li><Link className="ti-dropdown-item" href="#!">Action</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Another
                                        action</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Something else
                                        here</Link></li>
                                </ul>
                            </div>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Single Button dropdowns" code={dropdown2}>
                        <div className="ti-btn-list">
                            {SingleButtons.map((idx) => (
                                <div className="ti-btn-group" key={Math.random()}>
                                    <div className="hs-dropdown ti-dropdown">
                                        <button className={`ti-btn ti-btn-${idx.class}-full ti-dropdown-toggle`} type="button"
                                            id="dropdownMenuButton2"
                                            aria-expanded="false">
                                            Action<i
                                                className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                        </button>
                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden"
                                            aria-labelledby="dropdownMenuButton2">
                                            <li><Link className="ti-dropdown-item" href="#!">Action</Link>
                                            </li>
                                            <li><Link className="ti-dropdown-item" href="#!">Another
                                                action</Link></li>
                                            <li><Link className="ti-dropdown-item" href="#!">Something
                                                else here</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Rounded Dropdown Buttons" code={dropdown3}>
                        <div className="ti-btn-list">
                            {SingleButtons.map((idx) => (
                                <div className="ti-btn-group" key={Math.random()}>
                                    <div className="hs-dropdown ti-dropdown">
                                        <button className={`ti-btn ti-btn-${idx.class}-full ti-dropdown-toggle !rounded-full`} type="button"
                                            id="dropdownMenuButton2"
                                            aria-expanded="false">
                                            Action<i
                                                className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                        </button>
                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden"
                                            aria-labelledby="dropdownMenuButton2">
                                            <li><Link className="ti-dropdown-item" href="#!">Action</Link>
                                            </li>
                                            <li><Link className="ti-dropdown-item" href="#!">Another
                                                action</Link></li>
                                            <li><Link className="ti-dropdown-item" href="#!">Something
                                                else here</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Outline Button Dropdowns" code={dropdown4}>
                        <div className="ti-btn-list">
                            {SingleButtons.map((idx) => (
                                <div className="ti-btn-group" key={Math.random()}>
                                    <div className="hs-dropdown ti-dropdown">
                                        <button className={`ti-btn ti-btn-outline-${idx.class} ti-dropdown-toggle `} type="button"
                                            id="dropdownMenuButton2"
                                            aria-expanded="false">
                                            Action<i
                                                className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                        </button>
                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden"
                                            aria-labelledby="dropdownMenuButton2">
                                            <li><Link className="ti-dropdown-item" href="#!">Action</Link>
                                            </li>
                                            <li><Link className="ti-dropdown-item" href="#!">Another
                                                action</Link></li>
                                            <li><Link className="ti-dropdown-item" href="#!">Something
                                                else here</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Showcode>

                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Outline Button Dropdowns" code={dropdown5}>
                        <div className="ti-btn-list">
                            {SingleButtons.map((idx) => (
                                <div className="ti-btn-group" key={Math.random()}>
                                    <div className="hs-dropdown ti-dropdown">
                                        <button className={`ti-btn ti-btn-outline-${idx.class} ti-dropdown-toggle !rounded-full`} type="button"
                                            id="dropdownMenuButton2"
                                            aria-expanded="false">
                                            Action<i
                                                className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                        </button>
                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden"
                                            aria-labelledby="dropdownMenuButton2">
                                            <li><Link className="ti-dropdown-item" href="#!">Action</Link>
                                            </li>
                                            <li><Link className="ti-dropdown-item" href="#!">Another
                                                action</Link></li>
                                            <li><Link className="ti-dropdown-item" href="#!">Something
                                                else here</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Showcode>

                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Spilt Dropdowns" code={dropdown6}>

                        <div className="ti-btn-list">
                            {SingleButtons.map((idx) => (
                                <div className="ti-btn-group !m-0" key={Math.random()}>
                                    <div className="hs-dropdown ti-dropdown">
                                        <button
                                            className={`ti-btn ti-btn-${idx.class}-full !me-0 !rounded-e-none ti-dropdown-toggle`}
                                            type="button" id="dropdownMenuButton26"
                                            aria-expanded="false">
                                            Action
                                        </button>
                                        <button type="button" aria-label="button"
                                            className={`ti-btn ti-btn-${idx.class}-full opacity-[0.85] !rounded-s-none`}><i
                                                className="ri-arrow-down-s-line align-middle inline-block"></i></button>

                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden"
                                            aria-labelledby="dropdownMenuButton26">
                                            <li><Link className="ti-dropdown-item" href="#!">Action</Link>
                                            </li>
                                            <li><Link className="ti-dropdown-item" href="#!">Another
                                                action</Link></li>
                                            <li><Link className="ti-dropdown-item" href="#!">Something
                                                else here</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Dropdown Sizing" code={dropdown7}>
                        <div className="ti-btn-group my-1 me-2 ti-dropdown hs-dropdown">
                            <button className="ti-btn-primary-full ti-btn-lg ti-dropdown-toggle" type="button"
                                aria-expanded="false">
                                Large button<i className="ri-arrow-down-s-line align-middle inline-block"></i>
                            </button>
                            <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                <li><Link className="ti-dropdown-item" href="#!">Action</Link></li>
                                <li><Link className="ti-dropdown-item" href="#!">Another action</Link>
                                </li>
                                <li><Link className="ti-dropdown-item" href="#!">Something else
                                    here</Link></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><Link className="ti-dropdown-item" href="#!">Separated link</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="ti-btn-group my-1 me-2">
                            <div className="hs-dropdown ti-dropdown">
                                <button
                                    className="ti-btn-lg ti-btn-light !me-0 !rounded-e-none !border-0 ti-dropdown-toggle"
                                    type="button" id="dropdownMenuButton32"
                                    aria-expanded="false">
                                    Large split button
                                </button>
                                <button type="button" aria-label="button"
                                    className="ti-btn ti-btn-light opacity-[0.85] !rounded-s-none !mb-0"><i
                                        className="ri-arrow-down-s-line align-middle inline-block"></i></button>

                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden"
                                    aria-labelledby="dropdownMenuButton32">
                                    <li><Link className="ti-dropdown-item" href="#!">Action</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Another
                                        action</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Something else
                                        here</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="ti-btn-group my-1 me-2">
                            <div className="ti-btn-group my-1 me-2 ti-dropdown hs-dropdown">
                                <button
                                    className="ti-btn ti-btn-primary-full !py-1 !px-4 !text-[0.75rem] ti-dropdown-toggle"
                                    type="button" aria-expanded="false">
                                    Small button<i className="ri-arrow-down-s-line align-middle inline-block"></i>
                                </button>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                    <li><Link className="ti-dropdown-item" href="#!">Action</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Another
                                        action</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Something else
                                        here</Link></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><Link className="ti-dropdown-item" href="#!">Separated
                                        link</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="ti-btn-group my-1 me-2">
                            <div className="hs-dropdown ti-dropdown">
                                <button
                                    className="ti-btn !py-1 !px-4 !text-[0.75rem]  ti-btn-light !me-0 !rounded-e-none ti-dropdown-toggle"
                                    type="button" id="dropdownMenuButton33"
                                    aria-expanded="false">
                                    Small split button
                                </button>
                                <button type="button" aria-label="button"
                                    className="ti-btn !py-1 !px-4 !text-[0.75rem]  ti-btn-light opacity-[0.85] !rounded-s-none"><i
                                        className="ri-arrow-down-s-line align-middle inline-block"></i></button>

                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden"
                                    aria-labelledby="dropdownMenuButton33">
                                    <li><Link className="ti-dropdown-item" href="#!">Action</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Another
                                        action</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Something else
                                        here</Link></li>
                                </ul>
                            </div>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-3 col-span-12">
                    <Showcode title="Dropup" code={dropdown8}>
                        <div className="hs-dropdown ti-dropdown [--placement:top-left] m-1">
                            <button id="hs-dropup" type="button"
                                className="hs-dropdown-toggle ti-dropdown-toggle ti-btn ti-btn-primary-full !py-2">
                                Dropup
                                <svg className="hs-dropdown-open:rotate-180 ti-dropdown-caret !text-white"
                                    width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>

                            <div className="hs-dropdown-menu  mt-0 transition-none ti-dropdown-menu hidden"
                                aria-labelledby="hs-dropup">
                                <Link className="ti-dropdown-item" href="#!">
                                    Action
                                </Link>
                                <Link className="ti-dropdown-item" href="#!">
                                    Another action
                                </Link>
                                <Link className="ti-dropdown-item" href="#!">
                                    Something else here
                                </Link>
                            </div>
                        </div>
                        <div className="ti-dropdown m-1">
                            <button type="button" className="relative ti-dropdown-toggle  ti-btn ti-btn-secondary-full !py-1 !rounded-e-none !me-0">
                                Split dropup
                            </button>
                            <div className="hs-dropdown ti-dropdown [--placement:top-left]">
                                <button id="hs-split-dropup" type="button"
                                    className="hs-dropdown-toggle relative ti-btn ti-btn-secondary-full !opacity-[0.85]  !rounded-s-none ti-dropdown-toggle">
                                    <span className="sr-only">Toggle Dropdown</span>
                                    <svg className="hs-dropdown-open:rotate-180 ti-dropdown-caret !text-white"
                                        width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </button>

                                <div className="hs-dropdown-menu  transition-none mt-0 ti-dropdown-menu hidden"
                                    aria-labelledby="hs-split-dropup">
                                    <Link className="ti-dropdown-item" href="#!">
                                        Action
                                    </Link>
                                    <Link className="ti-dropdown-item" href="#!">
                                        Another action
                                    </Link>
                                    <Link className="ti-dropdown-item" href="#!">
                                        Something else here
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <Showcode title="Dropup Right" code={dropdown9}>
                        <div className="hs-dropdown ti-dropdown [--placement:right-top] m-1">
                            <button id="hs-dropright" type="button"
                                className="hs-dropdown-toggle ti-dropdown-toggle ti-btn ti-btn-primary-full !py-2">
                                Dropright
                                <svg className="w-auto h-2.5 ti-dropdown-caret !text-white" width="16" height="16"
                                    viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </button>

                            <div className="hs-dropdown-menu  ti-dropdown-menu transition-none hidden"
                                aria-labelledby="hs-dropright">
                                <Link className="ti-dropdown-item" href="#!">
                                    Action
                                </Link>
                                <Link className="ti-dropdown-item" href="#!">
                                    Another action
                                </Link>
                                <Link className="ti-dropdown-item" href="#!">
                                    Something else here
                                </Link>
                                <Link href="#!" aria-label="anchor">
                                    <hr className="dropdown-divider" />
                                </Link>
                                <Link className="ti-dropdown-item" href="#!">
                                    Separated link
                                </Link>
                            </div>
                        </div>
                        <div className="hs-dropdown ti-dropdown [--placement:right-top] m-1">
                            <button type="button"
                                className="hs-dropdown-toggle relative ti-btn ti-btn-secondary-full  !py-2 !rounded-e-none ti-dropdown-toggle !me-0">
                                Split dropright
                            </button>
                            <div className="hs-dropdown ti-dropdown [--placement:right-top]">
                                <button id="hs-split-dropright" type="button"
                                    className="hs-dropdown-toggle relative  ti-dropdown-toggle !opacity-[0.85] rounded-none  ti-btn ti-btn-secondary-full !rounded-s-none">
                                    <span className="sr-only">Toggle Dropdown</span>
                                    <svg className="w-auto h-2.5 ti-dropdown-caret !text-white" width="16"
                                        height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </button>

                                <div className="hs-dropdown-menu ti-dropdown-menu transition-none hidden"
                                    aria-labelledby="hs-split-dropright">
                                    <Link className="ti-dropdown-item" href="#!">
                                        Action
                                    </Link>
                                    <Link className="ti-dropdown-item" href="#!">
                                        Another action
                                    </Link>
                                    <Link className="ti-dropdown-item" href="#!">
                                        Something else here
                                    </Link>
                                    <Link href="#!" aria-label="anchor">
                                        <hr className="dropdown-divider" />
                                    </Link>
                                    <Link className="ti-dropdown-item" href="#!">
                                        Separated link
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <Showcode title="Dropup Left" code={dropdown10}>
                        <div className="hs-dropdown ti-dropdown [--placement:left-top] m-1">
                            <button id="hs-dropright3" type="button"
                                className="hs-dropdown-toggle ti-dropdown-toggle ti-btn ti-btn-primary-full !py-2">
                                <svg className="w-auto h-2.5 text-white" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11 1L5.31305 7.16086C5.13625 7.35239 5.13625 7.64761 5.31305 7.83914L11 14"
                                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                Dropleft
                            </button>

                            <div className="hs-dropdown-menu  ti-dropdown-menu transition-none hidden"
                                aria-labelledby="hs-dropright">
                                <Link className="ti-dropdown-item" href="#!">
                                    Action
                                </Link>
                                <Link className="ti-dropdown-item" href="#!">
                                    Another action
                                </Link>
                                <Link className="ti-dropdown-item" href="#!">
                                    Something else here
                                </Link>
                                <Link href="#!" aria-label="anchor">
                                    <hr className="dropdown-divider" />
                                </Link>
                                <Link className="ti-dropdown-item" href="#!">
                                    Separated link
                                </Link>
                            </div>
                        </div>
                        <div className="hs-dropdown ti-dropdown [--placement:left-top] m-1">
                            <div className="hs-dropdown ti-dropdown [--placement:left-top]">
                                <button id="hs-split-dropright1" type="button"
                                    className="hs-dropdown-toggle relative  ti-dropdown-toggle !opacity-[0.85] rounded-none  ti-btn ti-btn-secondary-full !rounded-e-none">
                                    <span className="sr-only">Toggle Dropdown</span>
                                    <svg className="w-auto h-2.5 text-white" width="16" height="16"
                                        viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11 1L5.31305 7.16086C5.13625 7.35239 5.13625 7.64761 5.31305 7.83914L11 14"
                                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </button>

                                <div className="hs-dropdown-menu ti-dropdown-menu transition-none hidden"
                                    aria-labelledby="hs-split-dropright">
                                    <Link className="ti-dropdown-item" href="#!">
                                        Action
                                    </Link>
                                    <Link className="ti-dropdown-item" href="#!">
                                        Another action
                                    </Link>
                                    <Link className="ti-dropdown-item" href="#!">
                                        Something else here
                                    </Link>
                                    <Link href="#!" aria-label="anchor">
                                        <hr className="dropdown-divider" />
                                    </Link>
                                    <Link className="ti-dropdown-item" href="#!">
                                        Separated link
                                    </Link>
                                </div>
                            </div>
                            <button type="button"
                                className="hs-dropdown-toggle relative ti-btn ti-btn-secondary-full  !py-2 !rounded-s-none ti-dropdown-toggle !me-0">
                                Split dropleft
                            </button>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <Showcode title="Active" code={dropdown11}>
                        <div className="hs-dropdown ti-dropdown">
                            <button type="button" className="ti-btn ti-btn-primary-full ti-dropdown-toggle !py-2"
                                aria-expanded="false">
                                Dropstart<i className="ri-arrow-down-s-line align-middle inline-block"></i>
                            </button>
                            <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                <li><Link className="ti-dropdown-item" href="#!">Regular link</Link></li>
                                <li><Link className="ti-dropdown-item active" href="#!"
                                    aria-current="true">Active
                                    link</Link>
                                </li>
                                <li><Link className="ti-dropdown-item" href="#!">Another link</Link></li>
                            </ul>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-3 col-span-12">
                    <Showcode title="Disabled" code={dropdown12}>
                        <div className="hs-dropdown ti-dropdown">
                            <button type="button" className="ti-btn-primary-full ti-dropdown-toggle !py-2"
                                aria-expanded="false">
                                Dropstart<i className="ri-arrow-down-s-line align-middle inline-block"></i>
                            </button>
                            <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                <li><Link className="ti-dropdown-item" href="#!">Regular link</Link></li>
                                <li><Link className="ti-dropdown-item disabled" href="#!"
                                    aria-current="true">Active
                                    link</Link></li>
                                <li><Link className="ti-dropdown-item" href="#!">Another link</Link></li>
                            </ul>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Auto Close Behaviour" code={dropdown13}>
                        <div className="ti-btn-list">
                            <div className="ti-btn-group">
                                <div className="hs-dropdown ti-dropdown">
                                    <button className="ti-btn ti-btn-primary-full ti-dropdown-toggle" type="button"
                                        id="defaultDropdown"
                                        aria-expanded="false">
                                        Default dropdown<i
                                            className="ri-arrow-down-s-line align-middle inline-block"></i>
                                    </button>
                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden"
                                        aria-labelledby="defaultDropdown">
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ti-btn-group">
                                <div className="hs-dropdown ti-dropdown">
                                    <button className="ti-btn ti-btn-secondary-full ti-dropdown-toggle"
                                        type="button" id="dropdownMenuClickableOutside"

                                        aria-expanded="false">
                                        Clickable outside<i
                                            className="ri-arrow-down-s-line align-middle inline-block"></i>
                                    </button>
                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden"
                                        aria-labelledby="defaultDropdown">
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ti-btn-group">
                                <div className="hs-dropdown ti-dropdown">
                                    <button className="ti-btn ti-btn-info-full ti-dropdown-toggle" type="button"
                                        id="dropdownMenuClickableInside"
                                        aria-expanded="false">
                                        Clickable inside<i
                                            className="ri-arrow-down-s-line align-middle inline-block"></i>
                                    </button>
                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden"
                                        aria-labelledby="dropdownMenuClickableInside">
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="ti-btn-group">
                                <div className="hs-dropdown ti-dropdown">
                                    <button className="ti-btn ti-btn-warning-full ti-dropdown-toggle" type="button"
                                        id="dropdownMenuClickable"
                                        aria-expanded="false">
                                        Manual close<i
                                            className="ri-arrow-down-s-line align-middle inline-block"></i>
                                    </button>
                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden"
                                        aria-labelledby="dropdownMenuClickable">
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <Showcode title="Dropdowns With Forms" code={dropdown14}>
                        <div className="hs-dropdown ti-dropdown">
                            <button className="ti-btn ti-btn-secondary-full ti-dropdown-toggle !py-2" type="button"
                                id="dropdownMenu2" aria-expanded="false">
                                Dropdown<i className="ri-arrow-down-s-line align-middle inline-block"></i>
                            </button>
                            <div className="hs-dropdown-menu ti-dropdown-menu hidden">
                                <form className="!px-6 !py-4">
                                    <div className="mb-4">
                                        <label htmlFor="exampleDropdownFormEmail1" className="form-label">Email
                                            address</label>
                                        <input type="email" className="form-control w-full !rounded-md"
                                            id="exampleDropdownFormEmail1" placeholder="email@example.com" />
                                    </div>
                                    <div className="mb-4">
                                        <label htmlFor="exampleDropdownFormPassword1"
                                            className="form-label">Password</label>
                                        <input type="password" className="form-control w-full !rounded-md"
                                            id="exampleDropdownFormPassword1" placeholder="Password" />
                                    </div>
                                    <div className="mb-4">
                                        <div className="form-check !ps-0">
                                            <input type="checkbox" className="form-check-input" id="dropdownCheck" />
                                            <label className="ps-2 form-check-label" htmlFor="dropdownCheck">
                                                Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <button type="submit" className="ti-btn ti-btn-primary-full">Sign in</button>
                                </form>
                                <div className="dropdown-divider"></div>
                                <Link className="ti-dropdown-item" href="#!">New around here? Sign
                                    up</Link>
                                <Link className="ti-dropdown-item" href="#!">Forgot password?</Link>
                            </div>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-9 col-span-12">
                    <Showcode title="Alignment Options" code={dropdown15}>
                        <div className="ti-btn-list">
                            <div className='ti-btn-group' >
                                <div className="ti-dropdown hs-dropdown">
                                    <button className="ti-btn ti-btn-primary-full ti-dropdown-toggle mb-0 !py-2"
                                        type="button" id="dropdownMenuButton"
                                        aria-expanded="false">
                                        Dropdown<i className="ri-arrow-down-s-line align-middle inline-block"></i>
                                    </button>
                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden "
                                        aria-labelledby="dropdownMenuButton">
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='ti-btn-group' >
                                <div className="ti-dropdown hs-dropdown">
                                    <button type="button"
                                        className="ti-btn ti-btn-secondary-full ti-dropdown-toggle mb-0 !py-2" aria-expanded="false">
                                        Right-aligned menu<i
                                            className="ri-arrow-down-s-line align-middle inline-block"></i>
                                    </button>
                                    <ul
                                        className="hs-dropdown-menu ti-dropdown-menu ti-dropdown-menu-end hidden ">
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='ti-btn-group' >
                                <div className="ti-dropdown hs-dropdown" data-hs-dropdown-strategy="absolute">
                                    <button type="button" id="hs-dropdown-left-but-right-on-lg"
                                        className="ti-btn ti-btn-info-full ti-dropdown-toggle mb-0 !py-2" aria-expanded="false">
                                        Left-aligned, right-aligned lg<i
                                            className="ri-arrow-down-s-line align-middle inline-block"></i>
                                    </button>
                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden lg:ti-dropdown-menu-end "
                                        aria-labelledby="hs-dropdown-left-but-right-on-lg">
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='ti-btn-group' >
                                <div className="ti-dropdown hs-dropdown" data-hs-dropdown-strategy="absolute">
                                    <button type="button" id="hs-dropdown-right-but-left-on-lg"
                                        className="ti-btn ti-btn-warning-full ti-dropdown-toggle mb-0 !py-2" aria-expanded="false">
                                        Right-aligned, left-aligned lg<i
                                            className="ri-arrow-down-s-line align-middle inline-block"></i>
                                    </button>
                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden  ti-dropdown-menu-end lg:ti-dropdown-menu-start"
                                        aria-labelledby="hs-dropdown-right-but-left-on-lg">
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='ti-btn-group' >
                                <div className="hs-dropdown ti-dropdown [--placement:left-top] m-1">
                                    <button id="hs-dropright2" type="button"
                                        className="hs-dropdown-toggle ti-dropdown-toggle ti-btn ti-btn-success-full !py-2">
                                        <svg className="w-auto h-2.5 text-white" width="16" height="16"
                                            viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11 1L5.31305 7.16086C5.13625 7.35239 5.13625 7.64761 5.31305 7.83914L11 14"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                        Dropstart
                                    </button>

                                    <ul className="hs-dropdown-menu  ti-dropdown-menu transition-none hidden"
                                        aria-labelledby="hs-dropright">
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='ti-btn-group' >
                                <div className="hs-dropdown ti-dropdown [--placement:right-top] m-1">
                                    <button id="hs-dropright1" type="button"
                                        className="hs-dropdown-toggle ti-dropdown-toggle ti-btn ti-btn-primary-full !py-2">
                                        Dropend
                                        <svg className="w-auto h-2.5 ti-dropdown-caret !text-white" width="16"
                                            height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </button>

                                    <ul className="hs-dropdown-menu  ti-dropdown-menu transition-none hidden"
                                        aria-labelledby="hs-dropright">
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='ti-btn-group' >
                                <div className="hs-dropdown ti-dropdown [--placement:top-left] m-1">
                                    <button id="hs-dropup1" type="button"
                                        className="hs-dropdown-toggle ti-dropdown-toggle ti-btn ti-btn-success-full !py-2">
                                        Dropup
                                        <svg className="hs-dropdown-open:rotate-180 ti-dropdown-caret !text-white"
                                            width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </button>

                                    <ul className="hs-dropdown-menu  mt-0 transition-none ti-dropdown-menu hidden"
                                        aria-labelledby="hs-dropup">
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                        <li><Link className="ti-dropdown-item" href="#!">Menu item</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <Showcode title="Dark Dropdowns" code={dropdown16}>
                        <div className="ti-dropdown hs-dropdown">
                            <button className="ti-btn ti-btn-dark ti-dropdown-toggle !py-2 dark:hover:!bg-white  dark:hover:!text-black" type="button"
                                id="dropdownMenuButton34" aria-expanded="false">
                                Dropdown button<i className="ri-arrow-down-s-line align-middle inline-block "></i>
                            </button>
                            <ul
                                className="hs-dropdown-menu ti-dropdown-menu !bg-black  hidden">
                                <li><Link className="ti-dropdown-item !text-white dark:!text-defaulttextcolor"
                                    href="#!">Action</Link></li>
                                <li><Link className="ti-dropdown-item !text-white dark:!text-defaulttextcolor"
                                    href="#!">Another action</Link></li>
                                <li><Link className="ti-dropdown-item !text-white dark:!text-defaulttextcolor"
                                    href="#!">Something else here</Link></li>
                            </ul>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Customer Dropdown Menus's" code={dropdown17}>
                        <div className="ti-btn-list flex flex-wrap gap-x-2">
                            <div className="ti-dropdown hs-dropdown">
                                <button className="ti-btn ti-btn-primary-full ti-dropdown-toggle !py-2"
                                    type="button" aria-expanded="false">
                                    Primary<i className="ri-arrow-down-s-line align-middle inline-block"></i>
                                </button>
                                <ul
                                    className="hs-dropdown-menu ti-dropdown-menu !bg-primary hidden">
                                    <li><Link className="ti-dropdown-item !text-white"
                                        href="#!">Action</Link></li>
                                    <li><Link className="ti-dropdown-item !text-white"
                                        href="#!">Another action</Link></li>
                                    <li><Link className="ti-dropdown-item !text-white"
                                        href="#!">Something else here</Link></li>
                                </ul>
                            </div>
                            <div className="ti-dropdown hs-dropdown">
                                <button className="ti-btn ti-btn-secondary-full ti-dropdown-toggle !py-2"
                                    type="button" aria-expanded="false">
                                    secondary<i className="ri-arrow-down-s-line align-middle inline-block"></i>
                                </button>
                                <ul
                                    className="hs-dropdown-menu ti-dropdown-menu !bg-secondary hidden">
                                    <li><Link className="ti-dropdown-item !text-white"
                                        href="#!">Action</Link></li>
                                    <li><Link className="ti-dropdown-item !text-white"
                                        href="#!">Another action</Link></li>
                                    <li><Link className="ti-dropdown-item !text-white"
                                        href="#!">Something else here</Link></li>
                                </ul>
                            </div>
                            <div className="ti-dropdown hs-dropdown">
                                <button className="ti-btn ti-btn-warning-full ti-dropdown-toggle !py-2"
                                    type="button" aria-expanded="false">
                                    warning<i className="ri-arrow-down-s-line align-middle inline-block"></i>
                                </button>
                                <ul className="hs-dropdown-menu ti-dropdown-menu dropmenu-item-warning hidden">
                                    <li><Link className="ti-dropdown-item active" href="#!">Active</Link>
                                    </li>
                                    <li><Link className="ti-dropdown-item" href="#!">Action</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Another
                                        action</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Something else
                                        here</Link></li>
                                </ul>
                            </div>
                            <div className="ti-dropdown hs-dropdown">
                                <button className="ti-btn ti-btn-info-full ti-dropdown-toggle !py-2" type="button" aria-expanded="false">
                                    info<i className="ri-arrow-down-s-line align-middle inline-block"></i>
                                </button>
                                <ul className="hs-dropdown-menu ti-dropdown-menu dropmenu-item-info hidden">
                                    <li><Link className="ti-dropdown-item active" href="#!">Active</Link>
                                    </li>
                                    <li><Link className="ti-dropdown-item" href="#!">Action</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Another
                                        action</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Something else
                                        here</Link></li>
                                </ul>
                            </div>
                            <div className="ti-dropdown hs-dropdown">
                                <button className="ti-btn ti-btn-success ti-dropdown-toggle !py-2" type="button" aria-expanded="false">
                                    success<i className="ri-arrow-down-s-line align-middle inline-block"></i>
                                </button>
                                <ul className="hs-dropdown-menu ti-dropdown-menu dropmenu-light-success hidden">
                                    <li><Link className="ti-dropdown-item" href="#!">Action</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Another
                                        action</Link></li>
                                    <li><Link className="ti-dropdown-item active" href="#!">Active</Link>
                                    </li>
                                    <li><Link className="ti-dropdown-item" href="#!">Something else
                                        here</Link></li>
                                </ul>
                            </div>
                            <div className="ti-dropdown hs-dropdown">
                                <button className="ti-btn ti-btn-danger ti-dropdown-toggle !py-2" type="button" aria-expanded="false">
                                    danger<i className="ri-arrow-down-s-line align-middle inline-block"></i>
                                </button>
                                <ul className="hs-dropdown-menu ti-dropdown-menu dropmenu-light-danger hidden">
                                    <li><Link className="ti-dropdown-item" href="#!">Action</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Another
                                        action</Link></li>
                                    <li><Link className="ti-dropdown-item active" href="#!">Active</Link>
                                    </li>
                                    <li><Link className="ti-dropdown-item" href="#!">Something else
                                        here</Link></li>
                                </ul>
                            </div>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Ghost Button Dropdowns" code={dropdown18}>
                        <div className="ti-btn-list flex flex-wrap gap-x-2">
                            <div className="ti-dropdown hs-dropdown">
                                <button type="button"
                                    className="ti-btn ti-btn-ghost-primary ti-dropdown-toggle !py-2 !shadow-none" aria-expanded="false">
                                    Primary<i className="ri-arrow-down-s-line align-middle inline-block"></i>
                                </button>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                    <li><Link className="ti-dropdown-item" href="#!">Action</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Another
                                        action</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Something else
                                        here</Link></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><Link className="ti-dropdown-item" href="#!">Separated
                                        link</Link></li>
                                </ul>
                            </div>
                            <div className="ti-dropdown hs-dropdown">
                                <button type="button"
                                    className="ti-btn ti-btn-ghost-secondary ti-dropdown-toggle !py-2 !shadow-none" aria-expanded="false">
                                    Secondary<i className="ri-arrow-down-s-line align-middle inline-block"></i>
                                </button>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                    <li><Link className="ti-dropdown-item" href="#!">Action</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Another
                                        action</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Something else
                                        here</Link></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><Link className="ti-dropdown-item" href="#!">Separated
                                        link</Link></li>
                                </ul>
                            </div>
                            <div className="ti-dropdown hs-dropdown">
                                <button type="button"
                                    className="ti-btn ti-btn-ghost-success ti-dropdown-toggle !py-2 !shadow-none" aria-expanded="false">
                                    Success<i className="ri-arrow-down-s-line align-middle inline-block"></i>
                                </button>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                    <li><Link className="ti-dropdown-item" href="#!">Action</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Another
                                        action</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Something else
                                        here</Link></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><Link className="ti-dropdown-item" href="#!">Separated
                                        link</Link></li>
                                </ul>
                            </div>
                            <div className="ti-dropdown hs-dropdown">
                                <button type="button" className="ti-btn ti-btn-ghost-info ti-dropdown-toggle !py-2 !shadow-none" aria-expanded="false">
                                    Info<i className="ri-arrow-down-s-line align-middle inline-block"></i>
                                </button>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                    <li><Link className="ti-dropdown-item" href="#!">Action</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Another
                                        action</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Something else
                                        here</Link></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><Link className="ti-dropdown-item" href="#!">Separated
                                        link</Link></li>
                                </ul>
                            </div>
                            <div className="ti-dropdown hs-dropdown">
                                <button type="button"
                                    className="ti-btn ti-btn-ghost-warning ti-dropdown-toggle !py-2 !shadow-none" aria-expanded="false">
                                    Warning<i className="ri-arrow-down-s-line align-middle inline-block"></i>
                                </button>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                    <li><Link className="ti-dropdown-item" href="#!">Action</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Another
                                        action</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Something else
                                        here</Link></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><Link className="ti-dropdown-item" href="#!">Separated
                                        link</Link></li>
                                </ul>
                            </div>
                            <div className="ti-dropdown hs-dropdown">
                                <button type="button"
                                    className="ti-btn ti-btn-ghost-danger ti-dropdown-toggle !py-2 !shadow-none" aria-expanded="false">
                                    Danger<i className="ri-arrow-down-s-line align-middle inline-block"></i>
                                </button>
                                <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                    <li><Link className="ti-dropdown-item" href="#!">Action</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Another
                                        action</Link></li>
                                    <li><Link className="ti-dropdown-item" href="#!">Something else
                                        here</Link></li>
                                    <li>
                                        <hr className="dropdown-divider" />
                                    </li>
                                    <li><Link className="ti-dropdown-item" href="#!">Separated
                                        link</Link></li>
                                </ul>
                            </div>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-3 col-span-12">
                    <Showcode title="Non-Interactive Dropdown Items" code={dropdown19}>
                        <p className=" mb-3">Use <code>.ti-dropdown-item-text.</code> to create non-interactive
                            dropdown items.</p>
                        <div className="bd-example">
                            <ul className="dropdown-menu border dark:border-defaultborder/10 shadow-sm">
                                <li><span className="!py-2 !px-4 !text-[0.875rem]">Dropdown item text</span>
                                </li>
                                <li><Link className="ti-dropdown-item" href="#!">Action</Link></li>
                                <li><Link className="ti-dropdown-item" href="#!">Another action</Link>
                                </li>
                                <li><Link className="ti-dropdown-item" href="#!">Something else
                                    here</Link>
                                </li>
                            </ul>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <Showcode title="Dropdown Headers" code={dropdown20}>
                        <p className="card-titlte mb-3">Add a <code>.dropdown-header</code> to label sections of
                            actions in any dropdown menu.</p>
                        <div className="bd-example">
                            <ul className="dropdown-menu border dark:border-defaultborder/10 shadow-sm">
                                <li>
                                    <h6 className="dropdown-header">Dropdown header</h6>
                                </li>
                                <li><Link className="ti-dropdown-item" href="#!">Action</Link></li>
                                <li><Link className="ti-dropdown-item" href="#!">Another action</Link>
                                </li>
                                <li><Link className="ti-dropdown-item" href="#!">Something else
                                    here</Link></li>
                            </ul>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <Showcode title="Dropdown Dividers" code={dropdown21}>
                        <div className="bd-example">
                            <ul className="dropdown-menu border dark:border-defaultborder/10 shadow-sm">
                                <li><Link className="dropdown-header" href="#!">Heading</Link></li>
                                <li><Link className="ti-dropdown-item" href="#!">Action</Link></li>
                                <li><Link className="ti-dropdown-item" href="#!">Another action</Link>
                                </li>
                                <li><Link className="ti-dropdown-item" href="#!">Something else
                                    here</Link></li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li><Link className="ti-dropdown-item" href="#!">Separated link</Link>
                                </li>
                            </ul>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <Showcode title="Dropdown Menu Text" code={dropdown22}>
                        <div className="bd-example">
                            <div className="dropdown-menu border dark:border-defaultborder/10 shadow-sm p-6 text-[#8c9097] dark:text-white/50 text-[0.875rem] max-w-[200px]">
                                <p>
                                    Some example text that's free-flowing within the dropdown menu.
                                </p>
                                <p className="mb-0">
                                    And this is more example text.
                                </p>
                            </div>
                        </div>
                    </Showcode>
                </div>
            </div>
        </div>
    )
}
Dropdowns.layout = "Contentlayout"

export default Dropdowns