import { toast1, toast2, toast3, toast4, toast5, toast6 } from '@/shared/data/prism/uielementsprism'
import { ColorToasts } from '@/shared/data/ui-elements/toastdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Showcode from '@/shared/layout-components/showcode/showcode'
import React from 'react'

const Toasts = () => {
    return (
        <div>
            <Seo title={"Toasts"} />
            <Pageheader currentpage="Toasts" activepage="Ui Elements" mainpage="Toasts" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-9 col-span-12">
                    <Showcode title="Basic Toast" code={toast1}>
                        <div className="lg:flex lg:space-x-3 rtl:space-x-reverse space-y-4 lg:space-y-0">
                            <div className="ti-toast bg-white dark:bg-bodybg dark:border-white/10" role="alert">
                                <div className="flex p-4">
                                    <div className="flex-shrink-0">
                                        <svg className="h-4 w-4 text-primary mt-0.5"
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" viewBox="0 0 16 16">
                                            <path
                                                d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                        </svg>
                                    </div>
                                    <div className="ms-3">
                                        <p className="text-sm text-gray-700 dark:text-[#8c9097] dark:text-white/50">
                                            This is a normal message.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="ti-toast bg-white dark:bg-bodybg dark:border-white/10" role="alert">
                                <div className="flex p-4">
                                    <div className="flex-shrink-0">
                                        <svg className="h-4 w-4 text-green mt-0.5"
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" viewBox="0 0 16 16">
                                            <path
                                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                                        </svg>
                                    </div>
                                    <div className="ms-3">
                                        <p className="text-sm text-gray-700 dark:text-[#8c9097] dark:text-white/50">
                                            This is a success message.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="ti-toast bg-white dark:bg-bodybg dark:border-white/10" role="alert">
                                <div className="flex p-4">
                                    <div className="flex-shrink-0">
                                        <svg className="h-4 w-4 text-red mt-0.5" xmlns="http://www.w3.org/2000/svg"
                                            width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path
                                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                        </svg>
                                    </div>
                                    <div className="ms-3">
                                        <p className="text-sm text-gray-700 dark:text-[#8c9097] dark:text-white/50">
                                            This is an error message.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="ti-toast bg-white dark:bg-bodybg dark:border-white/10" role="alert">
                                <div className="flex p-4">
                                    <div className="flex-shrink-0">
                                        <svg className="h-4 w-4 text-orange mt-0.5"
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                            fill="currentColor" viewBox="0 0 16 16">
                                            <path
                                                d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                        </svg>
                                    </div>
                                    <div className="ms-3">
                                        <p className="text-sm text-gray dark:text-[#8c9097] dark:text-white/50">
                                            This is a warning message.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <Showcode title="Condensed Toasts" code={toast2}>
                        <div className="ti-toast hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-300 bg-white  dark:bg-bodybg dark:border-white/10"
                            role="alert">
                            <div className="flex p-4">
                                <p className="text-sm text-gray-700 dark:text-[#8c9097] dark:text-white/50">
                                    Your email has been sent
                                </p>

                                <div
                                    className="ms-auto flex items-center space-x-3 rtl:space-x-reverse">
                                    <button type="button"
                                        className="inline-flex justify-center items-center gap-2 rounded-sm border-transparent font-medium text-primary hover:underline focus:outline-none focus:ring-0 focus:ring-primary focus:ring-offset-0 transition-all text-sm">
                                        Undo
                                    </button>
                                    <button type="button"
                                        className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-sm text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white transition-all text-sm dark:focus:ring-white/10 dark:focus:ring-offset-white/10">
                                        <span className="sr-only">Close</span>
                                        <svg className="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                fill="currentColor" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Solid Colored Toast" code={toast3}>
                        <div className="space-y-3">
                            {ColorToasts.map((idx) => (
                                <div key={Math.random()}>
                                    <div className={`ti-toast bg-${idx.color2} text-sm text-white`} role="alert">
                                        <div className="flex p-4">
                                            Hello, world! This is a toast message.

                                            <div className="ms-auto">
                                                <button type="button"
                                                    className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-sm text-white/[.5]  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white/10 focus:ring-gray-600 transition-all text-sm dark:focus:ring-offset-white/10 dark:focus:ring-white/10">
                                                    <span className="sr-only">Close</span>
                                                    <svg className="w-3.5 h-3.5" width="16" height="16"
                                                        viewBox="0 0 16 16" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                            fill="currentColor" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Light Colored Toast" code={toast4}>
                        <div className="space-y-3">
                            {ColorToasts.map((idx) => (
                                <div key={Math.random()}>
                                    <div className={`ti-toast bg-${idx.color2}/10 text-sm text-${idx.color2}`} role="alert">
                                        <div className="flex p-4">
                                            Hello, world! This is a toast message.

                                            <div className="ms-auto">
                                                <button type="button"
                                                    className={`inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-sm text-${idx.color2}  focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white/10 focus:ring-gray-600 transition-all text-sm dark:focus:ring-offset-white/10 dark:focus:ring-white/10`}>
                                                    <span className="sr-only">Close</span>
                                                    <svg className="w-3.5 h-3.5" width="16" height="16"
                                                        viewBox="0 0 16 16" fill="none"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                            fill="currentColor" />
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Toast Message With Loading Indicator" code={toast5}>
                        <div className="ti-toast bg-white dark:bg-bodybg dark:border-white/10" role="alert">
                            <div className="flex items-center p-4">
                                <div className="ti-spinner w-4 h-4 text-primary" role="status" aria-label="loading">
                                    <span className="sr-only">Loading...</span>
                                </div>
                                <p className="ms-3 text-sm text-gray-700 dark:text-[#8c9097] dark:text-white/50">
                                    Action in progress
                                </p>
                            </div>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Toast With Dissmiss Button" code={toast6}>
                        <div id="dismiss-toast"
                            className="hs-removing:translate-x-5 hs-removing:opacity-0 transition duration-300 ti-toast bg-white dark:bg-bodybg dark:border-white/10"
                            role="alert">
                            <div className="flex p-4">
                                <p className="text-sm text-gray-700 dark:text-[#8c9097] dark:text-white/50">
                                    Your email has been sent
                                </p>

                                <div className="ms-auto">
                                    <button type="button"
                                        className="inline-flex flex-shrink-0 justify-center items-center h-4 w-4 rounded-sm text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-0 focus:ring-gray-400 focus:ring-offset-0 focus:ring-offset-white text-sm dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
                                        data-hs-remove-element="#dismiss-toast">
                                        <span className="sr-only">Close</span>
                                        <svg className="w-3.5 h-3.5" width="16" height="16" viewBox="0 0 16 16"
                                            fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                fill="currentColor" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Showcode>
                </div>
            </div>
        </div>
    )
}
Toasts.layout = "Contentlayout"

export default Toasts