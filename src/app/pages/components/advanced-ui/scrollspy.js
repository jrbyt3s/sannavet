import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React, { Fragment } from 'react'

const Scrollspy = () => {
    return (
        <Fragment>
            <Seo title={"Scrollspy"} />
            <Pageheader currentpage="Scrollspy" activepage=" Advanced Ui" mainpage="Scrollspy" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12 xxl:col-span-6">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Basic Scrollspy</h5>
                        </div>
                        <div id="scrollspy-scrollable-parent-1" className="max-h-[340px] overflow-y-auto">
                            <div className="box-body">
                                <header
                                    className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-40 w-full bg-white text-sm dark:bg-bodybg">
                                    <nav className="w-full mx-auto sm:flex sm:items-center sm:justify-between"
                                        aria-label="Global">
                                        <div className="flex items-center justify-between">
                                            <Link className="flex-none text-xl font-semibold dark:text-white"
                                                href="#!">Brand</Link>
                                            <div className="sm:hidden">
                                                <button type="button"
                                                    className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-sm border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-white/70 dark:hover:text-white dark:focus:ring-offset-white/10"
                                                    data-hs-collapse="#navbar-collapse-basic"
                                                    aria-controls="navbar-collapse-basic"
                                                    aria-label="Toggle navigation">
                                                    <svg className="hs-collapse-open:hidden w-4 h-4" width="16"
                                                        height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path fillRule="evenodd"
                                                            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z">
                                                        </path>
                                                    </svg>
                                                    <svg className="hs-collapse-open:block hidden w-4 h-4" width="16"
                                                        height="16" fill="currentColor" viewBox="0 0 16 16">
                                                        <path
                                                            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z">
                                                        </path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <div id="navbar-collapse-basic"
                                            className="hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                                            <div data-hs-scrollspy="#scrollspy-1" data-hs-scrollspy-offset="70"
                                                data-hs-scrollspy-scrollable-parent="#scrollspy-scrollable-parent-1"
                                                className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 ltr:sm:pl-5 rtl:pr-5">
                                                <Link className="text-sm text-gray-700 leading-6 hover:text-gray-500 dark:text-white/70 dark:hover:text-white hs-scrollspy-active:text-primary dark:hs-scrollspy-active:text-primary"
                                                    href="#first">First</Link>
                                                <Link className="text-sm text-gray-700 leading-6 hover:text-gray-500 dark:text-white/70 dark:hover:text-white hs-scrollspy-active:text-primary dark:hs-scrollspy-active:text-primary"
                                                    href="#second">Second</Link>
                                                <div data-hs-scrollspy-group="" className="hs-mega-menu"
                                                    data-hs-dropdown-placement="bottom-right">
                                                    <Link id="hs-mega-menu-basic-dr"
                                                        className="hs-mega-menu-toggle group hs-scrollspy-active:text-primary mb-3 sm:mb-0 dark:hs-scrollspy-active:text-primary inline-flex justify-center items-center gap-2 text-sm text-gray-700 leading-6 hover:text-gray-500 dark:text-white/70 dark:hover:text-white"
                                                        href="#!">
                                                        Dropdown
                                                        <svg className="hs-scrollspy-active:stroke-primary ltr:ml-2 rtl:mr-2 w-2.5 h-2.5 stroke-gray-500 dark:stroke-white/70"
                                                            width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                                                stroke="currentColor" strokeWidth="2"
                                                                strokeLinecap="round"></path>
                                                        </svg>
                                                    </Link>
                                                    <div className="hs-mega-menu-content hs-mega-menu-open:opacity-100 transition duration-[0.1ms] opacity-0 top-full ltr:right-0 rtl:left-0 hidden z-10 rounded-sm before:absolute before:-top-5 ltr:before:left-0 rtl:before:right-0 before:w-full before:h-5 w-full bg-white p-2 sm:w-48 sm:transition-all sm:absolute sm:shadow-md dark:shadow-white/10 sm:duration-300 dark:bg-bgdark"
                                                        aria-labelledby="hs-mega-menu-basic-dr">
                                                        <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-700 leading-6 hover:text-gray-500 dark:text-white/70 dark:hover:text-white hs-scrollspy-active:text-primary dark:hs-scrollspy-active:text-primary"
                                                            href="#third">
                                                            Third
                                                        </Link>
                                                        <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-700 leading-6 hover:text-gray-500 dark:text-white/70 dark:hover:text-white hs-scrollspy-active:text-primary dark:hs-scrollspy-active:text-primary"
                                                            href="#fourth">
                                                            Fourth
                                                        </Link>
                                                        <Link className="flex items-center gap-x-3.5 py-2 px-3 rounded-sm text-sm text-gray-700 leading-6 hover:text-gray-500 dark:text-white/70 dark:hover:text-white hs-scrollspy-active:text-primary dark:hs-scrollspy-active:text-primary"
                                                            href="#fifth">
                                                            Fifth
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </nav>
                                </header>

                                <div id="scrollspy-1" className="mt-3 space-y-4">
                                    <div id="first">
                                        <h3 className="text-lg font-semibold dark:text-white">First</h3>
                                        <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-white/70">This is
                                            some placeholder content for the scrollspy page. Note that as you scroll
                                            down the page, the appropriate navigation link is highlighted. It's
                                            repeated throughout the component example. We keep adding some more
                                            example copy here to emphasize the scrolling and highlighting.</p>
                                    </div>

                                    <div id="second">
                                        <h3 className="text-lg font-semibold dark:text-white">Second</h3>
                                        <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-white/70">This is
                                            some placeholder content for the scrollspy page. Note that as you scroll
                                            down the page, the appropriate navigation link is highlighted. It's
                                            repeated throughout the component example. We keep adding some more
                                            example copy here to emphasize the scrolling and highlighting.</p>
                                    </div>

                                    <div id="third">
                                        <h3 className="text-lg font-semibold dark:text-white">Third</h3>
                                        <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-white/70">This is
                                            some placeholder content for the scrollspy page. Note that as you scroll
                                            down the page, the appropriate navigation link is highlighted. It's
                                            repeated throughout the component example. We keep adding some more
                                            example copy here to emphasize the scrolling and highlighting.</p>
                                    </div>

                                    <div id="fourth">
                                        <h3 className="text-lg font-semibold dark:text-white">Fourth</h3>
                                        <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-white/70">This is
                                            some placeholder content for the scrollspy page. Note that as you scroll
                                            down the page, the appropriate navigation link is highlighted. It's
                                            repeated throughout the component example. We keep adding some more
                                            example copy here to emphasize the scrolling and highlighting.</p>
                                    </div>

                                    <div id="fifth">
                                        <h3 className="text-lg font-semibold dark:text-white">Fifth</h3>
                                        <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-white/70">This is
                                            some placeholder content for the scrollspy page. Note that as you scroll
                                            down the page, the appropriate navigation link is highlighted. It's
                                            repeated throughout the component example. We keep adding some more
                                            example copy here to emphasize the scrolling and highlighting.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 xxl:col-span-6">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Nested Scrollspy</h5>
                        </div>
                        <div id="scrollspy-scrollable-parent-2" className="max-h-[400px] overflow-y-auto">
                            <div className="box-body">
                                <div className="grid grid-cols-5">
                                    <div className="col-span-12 md:col-span-1">
                                        <h2 className="text-xl font-medium dark:!text-defaulttextcolor/70">Navbar</h2>

                                        <ul className="sticky topacity-0" data-hs-scrollspy="#scrollspy-2"
                                            data-hs-scrollspy-scrollable-parent="#scrollspy-scrollable-parent-2">
                                            <li data-hs-scrollspy-group="">
                                                <Link href="#item-1"
                                                    className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:!text-defaulttextcolor/70 dark:hover:text-[#8c9097] hs-scrollspy-active:text-primary dark:hs-scrollspy-active:text-primary">Item
                                                    1</Link>
                                                <ul>
                                                    <li className="ms-4">
                                                        <Link href="#item-1-1"
                                                            className="group flex items-start gap-x-2 py-0.5 text-sm dark:!text-defaulttextcolor leading-6 hover:text-gray-800  dark:hover:text-gray-300 hs-scrollspy-active:text-primary dark:hs-scrollspy-active:text-primary">
                                                            <svg className="w-2 h-6 text-gray-400 overflow-visible group-hover:text-gray-600  dark:!text-defaulttextcolor/70 dark:group-hover:text-[#8c9097] rtl:rotate-180"
                                                                width="16" height="16" viewBox="0 0 16 16"
                                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M5 2L10.6464 7.64645C10.8417 7.84171 10.8417 8.15829 10.6464 8.35355L5 14"
                                                                    stroke="currentColor" strokeWidth="2"
                                                                    strokeLinecap="round"></path>
                                                            </svg>
                                                            Item 1-1
                                                        </Link>
                                                    </li>
                                                    <li className="ms-4">
                                                        <Link href="#item-1-2"
                                                            className="group flex items-start gap-x-2 py-0.5 text-sm dark:!text-defaulttextcolor leading-6 hover:text-gray-800  dark:hover:text-gray-300 hs-scrollspy-active:text-primary dark:hs-scrollspy-active:text-primary">
                                                            <svg className="w-2 h-6 text-gray-400 overflow-visible group-hover:text-gray-600  dark:!text-defaulttextcolor/70 dark:group-hover:text-[#8c9097] rtl:rotate-180"
                                                                width="16" height="16" viewBox="0 0 16 16"
                                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M5 2L10.6464 7.64645C10.8417 7.84171 10.8417 8.15829 10.6464 8.35355L5 14"
                                                                    stroke="currentColor" strokeWidth="2"
                                                                    strokeLinecap="round"></path>
                                                            </svg>
                                                            Item 1-2
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <Link href="#item-2"
                                                    className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:!text-defaulttextcolor/70 dark:hover:text-[#8c9097] hs-scrollspy-active:text-primary dark:hs-scrollspy-active:text-primary">Item
                                                    2</Link>
                                            </li>
                                            <li data-hs-scrollspy-group="">
                                                <Link href="#item-3"
                                                    className="block py-0.5 text-sm font-medium leading-6 text-slate-700 hover:text-slate-900 dark:!text-defaulttextcolor/70 dark:hover:text-[#8c9097] hs-scrollspy-active:text-primary dark:hs-scrollspy-active:text-primary">Item
                                                    3</Link>
                                                <ul>
                                                    <li className="ms-4">
                                                        <Link href="#item-3-1"
                                                            className="group flex items-start gap-x-2 py-0.5 text-sm dark:!text-defaulttextcolor leading-6 hover:text-gray-800 dark:!text-defaulttextcolor/70/70 dark:hover:text-gray-300 hs-scrollspy-active:text-primary dark:hs-scrollspy-active:text-primary">
                                                            <svg className="w-2 h-6 text-gray-400 overflow-visible group-hover:text-gray-600  dark:!text-defaulttextcolor/70 dark:group-hover:text-[#8c9097] rtl:rotate-180"
                                                                width="16" height="16" viewBox="0 0 16 16"
                                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M5 2L10.6464 7.64645C10.8417 7.84171 10.8417 8.15829 10.6464 8.35355L5 14"
                                                                    stroke="currentColor" strokeWidth="2"
                                                                    strokeLinecap="round"></path>
                                                            </svg>
                                                            Item 3-1
                                                        </Link>
                                                    </li>
                                                    <li className="ms-4">
                                                        <Link href="#item-3-2"
                                                            className="group flex items-start gap-x-2 py-0.5 text-sm dark:!text-defaulttextcolor leading-6 hover:text-gray-800  dark:hover:text-gray-300 hs-scrollspy-active:text-primary dark:hs-scrollspy-active:text-primary">
                                                            <svg className="w-2 h-6 text-gray-400 overflow-visible group-hover:text-gray-600  dark:!text-defaulttextcolor/70 dark:group-hover:text-[#8c9097] rtl:rotate-180"
                                                                width="16" height="16" viewBox="0 0 16 16"
                                                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path
                                                                    d="M5 2L10.6464 7.64645C10.8417 7.84171 10.8417 8.15829 10.6464 8.35355L5 14"
                                                                    stroke="currentColor" strokeWidth="2"
                                                                    strokeLinecap="round"></path>
                                                            </svg>
                                                            Item 3-2
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="col-span-12 md:col-span-4">
                                        <div id="scrollspy-2" className="space-y-4">
                                            <div id="item-1">
                                                <h3 className="text-lg font-semibold dark:!text-defaulttextcolor/70">Item 1</h3>
                                                <p className="mt-1 text-sm leading-6 text-gray-600 dark:!text-defaulttextcolor/70">
                                                    This is some placeholder content for the scrollspy page. Note
                                                    that as you scroll down the page, the appropriate navigation
                                                    link is highlighted. It's repeated throughout the component
                                                    example. We keep adding some more example copy here to emphasize
                                                    the scrolling and highlighting.</p>
                                            </div>

                                            <div id="item-1-1">
                                                <h3 className="text-lg font-semibold dark:!text-defaulttextcolor/70">Item 1-1</h3>
                                                <p className="mt-1 text-sm leading-6 text-gray-600 dark:!text-defaulttextcolor/70">
                                                    This is some placeholder content for the scrollspy page. Note
                                                    that as you scroll down the page, the appropriate navigation
                                                    link is highlighted. It's repeated throughout the component
                                                    example. We keep adding some more example copy here to emphasize
                                                    the scrolling and highlighting.</p>
                                            </div>

                                            <div id="item-1-2">
                                                <h3 className="text-lg font-semibold dark:!text-defaulttextcolor/70">Item 1-2</h3>
                                                <p className="mt-1 text-sm leading-6 text-gray-600 dark:!text-defaulttextcolor/70">
                                                    This is some placeholder content for the scrollspy page. Note
                                                    that as you scroll down the page, the appropriate navigation
                                                    link is highlighted. It's repeated throughout the component
                                                    example. We keep adding some more example copy here to emphasize
                                                    the scrolling and highlighting.</p>
                                            </div>

                                            <div id="item-2">
                                                <h3 className="text-lg font-semibold dark:!text-defaulttextcolor/70">Item 2</h3>
                                                <p className="mt-1 text-sm leading-6 text-gray-600 dark:!text-defaulttextcolor/70">
                                                    This is some placeholder content for the scrollspy page. Note
                                                    that as you scroll down the page, the appropriate navigation
                                                    link is highlighted. It's repeated throughout the component
                                                    example. We keep adding some more example copy here to emphasize
                                                    the scrolling and highlighting.</p>
                                            </div>

                                            <div id="item-3">
                                                <h3 className="text-lg font-semibold dark:!text-defaulttextcolor/70">Item 3</h3>
                                                <p className="mt-1 text-sm leading-6 text-gray-600 dark:!text-defaulttextcolor/70">
                                                    This is some placeholder content for the scrollspy page. Note
                                                    that as you scroll down the page, the appropriate navigation
                                                    link is highlighted. It's repeated throughout the component
                                                    example. We keep adding some more example copy here to emphasize
                                                    the scrolling and highlighting.</p>
                                            </div>

                                            <div id="item-3-1">
                                                <h3 className="text-lg font-semibold dark:!text-defaulttextcolor/70">Item 3-1</h3>
                                                <p className="mt-1 text-sm leading-6 text-gray-600 dark:!text-defaulttextcolor/70">
                                                    This is some placeholder content for the scrollspy page. Note
                                                    that as you scroll down the page, the appropriate navigation
                                                    link is highlighted. It's repeated throughout the component
                                                    example. We keep adding some more example copy here to emphasize
                                                    the scrolling and highlighting.</p>
                                            </div>

                                            <div id="item-3-2">
                                                <h3 className="text-lg font-semibold dark:!text-defaulttextcolor/70">Item 3-2</h3>
                                                <p className="mt-1 text-sm leading-6 text-gray-600 dark:!text-defaulttextcolor/70">
                                                    This is some placeholder content for the scrollspy page. Note
                                                    that as you scroll down the page, the appropriate navigation
                                                    link is highlighted. It's repeated throughout the component
                                                    example. We keep adding some more example copy here to emphasize
                                                    the scrolling and highlighting.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Scrollspy.layout = "Contentlayout"
export default Scrollspy