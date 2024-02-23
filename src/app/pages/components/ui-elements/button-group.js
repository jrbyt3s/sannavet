import { group1, group2, group3, group4, group5, group6 } from '@/shared/data/prism/uielementsprism'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React from 'react';
import Showcode from '@/shared/layout-components/showcode/showcode';

const Buttongroup = () => {
    return (
        <div>
            <Seo title={"Button Group"} />
            <Pageheader currentpage="Button Group" activepage="Ui Elements" mainpage="Button Group" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Basic Example" code={group1}>
                        <div className="inline-flex rounded-md shadow-sm me-5">
                            <button type="button"
                                className="ti-btn-group py-3 px-4 border bg-white dark:bg-bodybg text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
                                Year
                            </button>
                            <button type="button"
                                className="ti-btn-group py-3 px-4 border bg-white dark:bg-bodybg text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
                                Month
                            </button>
                            <button type="button"
                                className="ti-btn-group py-3 px-4 border bg-white dark:bg-bodybg text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
                                Date
                            </button>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Mixed Style" code={group2}>
                        <div className="ti-btn-group !gap-0" role="group" aria-label="Basic mixed styles example">
                            <button type="button" className="ti-btn-group py-3 px-4 border border-danger/10 ti-btn-danger-full ti-btn-wave">Year</button>
                            <button type="button" className="ti-btn-group py-3 px-4 border border-warning ti-btn-warning-full ti-btn-wave">Month</button>
                            <button type="button" className="ti-btn-group py-3 px-4 border border-success ti-btn-success-full ti-btn-wave">Date</button>
                        </div>
                    </Showcode>

                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Button Group Break" code={group3}>
                        <div className="flex flex-col md:inline-flex md:flex-row rounded-sm shadow-sm">
                            <button type="button"
                                className="py-2 px-3 inline-flex justify-center items-center gap-2 -mt-px -ms-px first:rounded-t-sm last:rounded-b-sm sm:first:rounded-s-sm sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-sm border font-medium bg-white dark:bg-bodybg text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
                                Item 1
                            </button>
                            <button type="button"
                                className="py-2 px-3 inline-flex justify-center items-center gap-2 -mt-px -ms-px first:rounded-t-sm last:rounded-b-sm sm:first:rounded-s-sm sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-sm border font-medium bg-white dark:bg-bodybg text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
                                Item 2
                            </button>
                            <button type="button"
                                className="py-2 px-3 inline-flex justify-center items-center gap-2 -mt-px -ms-px first:rounded-t-sm last:rounded-b-sm sm:first:rounded-s-sm sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-sm border font-medium bg-white dark:bg-bodybg text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-0 focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
                                Item 3
                            </button>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Sizing" code={group6} customCardBodyClass="space-y-2">
                                <div className="inline-flex rounded-md shadow-sm me-6">
                                    <button type="button"
                                        className="ti-btn-group border py-3 px-4 bg-white dark:bg-bodybg text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
                                        Small
                                    </button>
                                    <button type="button"
                                        className="ti-btn-group border py-3 px-4 bg-white dark:bg-bodybg text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
                                        Small
                                    </button>
                                    <button type="button"
                                        className="ti-btn-group border py-3 px-4 bg-white dark:bg-bodybg text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
                                        Small
                                    </button>
                                </div>

                                <div className="inline-flex rounded-md shadow-sm me-6">
                                    <button type="button"
                                        className="ti-btn-group bg-white dark:bg-bodybg border text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 sm:p-4 p-3">
                                        Default
                                    </button>
                                    <button type="button"
                                        className="ti-btn-group bg-white dark:bg-bodybg border text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 sm:p-4 p-3">
                                        Default
                                    </button>
                                    <button type="button"
                                        className="ti-btn-group bg-white dark:bg-bodybg border text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 sm:p-4 p-3">
                                        Default
                                    </button>
                                </div>

                                <div className="inline-flex rounded-md shadow-sm">
                                    <button type="button"
                                        className="ti-btn-group bg-white dark:bg-bodybg border text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 p-[1.3125rem]">
                                        Large
                                    </button>
                                    <button type="button"
                                        className="ti-btn-group bg-white dark:bg-bodybg border text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 p-[1.3125rem]">
                                        Large
                                    </button>
                                    <button type="button"
                                        className="ti-btn-group bg-white dark:bg-bodybg border text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 p-[1.3125rem]">
                                        Large
                                    </button>
                                </div>
                            </Showcode>
                        </div>
                        <div className="xl:col-span-6 col-span-12">
                            <Showcode title="Vertical Variation" code={group4}>
                                <div className="max-w-xs flex flex-col rounded-sm shadow-sm">
                                    <button type="button"
                                        className="focus-visible:outline-none focus:!outline-none py-2 px-3 inline-flex justify-center items-center gap-2 rounded-t-md border font-medium bg-white dark:bg-bodybg text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:ring-0 focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
                                        Item 1
                                    </button>
                                    <button type="button"
                                        className="-mt-px focus-visible:outline-none focus:!outline-none py-2 px-3 inline-flex justify-center items-center gap-2 border font-medium bg-white dark:bg-bodybg text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:ring-0 focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
                                        Item 2
                                    </button>
                                    <button type="button"
                                        className="-mt-px focus-visible:outline-none focus:!outline-none py-2 px-3 inline-flex justify-center items-center gap-2 rounded-b-md border font-medium bg-white dark:bg-bodybg text-gray-700 align-middle hover:bg-gray-50 focus:z-10 focus:ring-0 focus:ring-primary transition-all text-sm dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
                                        Item 3
                                    </button>
                                </div>
                            </Showcode>
                        </div>
                    </div>
                    <div className="xl:col-span-12 col-span-12">
                        <Showcode title="Basic Button Group" code={group5}>
                            <div className="inline-flex rounded-md shadow-sm mb-5 me-5">
                                <button type="button" className="ti-btn-group py-3 px-4 border bg-white dark:bg-bodybg text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
                                    Year
                                </button>
                                <button type="button" className="ti-btn-group py-3 px-4 border bg-white dark:bg-bodybg text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
                                    Month
                                </button>
                                <button type="button" className="ti-btn-group py-3 px-4 border bg-white dark:bg-bodybg text-gray-700 hover:bg-gray-50 focus:ring-primary dark:bg-bgdark dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50">
                                    Date
                                </button>
                            </div>
                            <div className="inline-flex rounded-md shadow-sm mb-5 me-5">
                                <button type="button" className="ti-btn-group py-3 px-4 border ti-btn-primary-full border-white/10 dark:border-white/10">
                                    Year
                                </button>
                                <button type="button" className="ti-btn-group py-3 px-4 border ti-btn-primary-full border-white/10 dark:border-white/10">
                                    Month
                                </button>
                                <button type="button" className="ti-btn-group py-3 px-4 border ti-btn-primary-full border-white/10 dark:border-white/10">
                                    Date
                                </button>
                            </div>
                            <div className="inline-flex rounded-md shadow-sm mb-5 me-5">
                                <button type="button" className="ti-btn-group py-3 px-4 border ti-btn-secondary-full border-white/10 dark:border-white/10">
                                    Year
                                </button>
                                <button type="button" className="ti-btn-group py-3 px-4 border ti-btn-secondary-full border-white/10 dark:border-white/10">
                                    Month
                                </button>
                                <button type="button" className="ti-btn-group py-3 px-4 border ti-btn-secondary-full border-white/10 dark:border-white/10">
                                    Date
                                </button>
                            </div>
                            <div className="inline-flex rounded-md shadow-sm mb-5 me-5">
                                <button type="button" className="ti-btn-group py-3 px-4 border ti-btn-warning-full border-white/10 dark:border-white/10">
                                    Year
                                </button>
                                <button type="button" className="ti-btn-group py-3 px-4 border ti-btn-warning-full border-white/10 dark:border-white/10">
                                    Month
                                </button>
                                <button type="button" className="ti-btn-group py-3 px-4 border ti-btn-warning-full border-white/10 dark:border-white/10">
                                    Date
                                </button>
                            </div>
                            <div className="inline-flex rounded-md shadow-sm mb-5 me-5">
                                <button type="button" className="ti-btn-group py-3 px-4 border ti-btn-danger-full border-white/10 dark:border-white/10">
                                    Year
                                </button>
                                <button type="button" className="ti-btn-group py-3 px-4 border ti-btn-danger-full border-white/10 dark:border-white/10">
                                    Month
                                </button>
                                <button type="button" className="ti-btn-group py-3 px-4 border ti-btn-danger-full border-white/10 dark:border-white/10">
                                    Date
                                </button>
                            </div>
                            <div className="inline-flex rounded-md shadow-sm mb-5 me-5">
                                <button type="button" className="ti-btn-group py-3 px-4 border ti-btn-info-full border-white/10 dark:border-white/10">
                                    Year
                                </button>
                                <button type="button" className="ti-btn-group py-3 px-4 border ti-btn-info-full border-white/10 dark:border-white/10">
                                    Month
                                </button>
                                <button type="button" className="ti-btn-group py-3 px-4 border ti-btn-info-full border-white/10 dark:border-white/10">
                                    Date
                                </button>
                            </div>
                            <div className="inline-flex rounded-md shadow-sm mb-0">
                                <button type="button" className="ti-btn-group py-3 px-4 border ti-btn-success-full border-white/10 dark:border-white/10">
                                    Year
                                </button>
                                <button type="button" className="ti-btn-group py-3 px-4 border ti-btn-success-full border-white/10 dark:border-white/10">
                                    Month
                                </button>
                                <button type="button" className="ti-btn-group py-3 px-4 border ti-btn-success-full border-white/10 dark:border-white/10">
                                    Date
                                </button>
                            </div>
                        </Showcode>
                    </div>
                </div>
            </div>
        </div>
    )
}
Buttongroup.layout = "Contentlayout"

export default Buttongroup