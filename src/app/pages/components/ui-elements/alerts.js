import { Alertimages, Customizedalerts, Defaultalerts, Differentalerts, Differentshadows, Iconalerts, Imagealerts, Linkalerts, Roundedalerts, Solidcoloralerts, additionaldata, alerts, alerts1, custombuttons, outlinealerts, outlinerounded, roundeddefault } from '@/shared/data/prism/uielementsprism'
import { defaultalerts, iconalerts, roundedalerts, shadows, solidalert, solidalert1 } from '@/shared/data/ui-elements/alertsdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Showcode from '@/shared/layout-components/showcode/showcode'
import Link from 'next/link'
import React, { useState } from 'react'

const Alerts = () => {

    const [open1, setOpen1] = useState(false);

    return (
        <div>
            <Seo title={"Alerts"} />
            <Pageheader currentpage="Alerts" activepage="Ui Elements" mainpage="Alerts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-6 col-span-12">

                    <Showcode title="Basic Alert" code={alerts}>
                        <div className="alert alert-warning fade show flex" role="alert" id="dismiss-alert1">
                            <div className="sm:flex-shrink-0">
                                <strong>Holy guacamole!</strong> You should check in on some of those fields
                                below.
                            </div>
                            <div className="ms-auto">
                                <div className="mx-1 my-1">
                                    <button type="button"
                                        className="inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                        data-hs-remove-element="#dismiss-alert1">
                                        <span className="sr-only">Dismiss</span>
                                        <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                            fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
                <div className="xxl:col-span-6 col-span-12">
                    <Showcode title="Default Alert" code={alerts1}>
                        <div className="bg-gray-50 border border-gray-200 dark:bg-light dark:border-defaultborder/10 alert mb-0"
                            role="alert">
                            <div className="flex">
                                <div className="sm:flex-shrink-0">
                                    <svg className="h-4 w-4 text-gray-500 mt-0.5" xmlns="http://www.w3.org/2000/svg"
                                        width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                        <path
                                            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                                    </svg>
                                </div>
                                <div className="flex-1 md:flex md:justify-between ms-2">
                                    <p className="text-sm dark:text-defaulttextcolor/70">
                                        A new software update is available. See what's new in version 3.0.7
                                    </p>
                                    <p className="text-sm mt-3 md:mt-0 md:ms-6">
                                        <Link className="dark:text-defaulttextcolor/70 hover:text-gray-500 font-medium whitespace-nowrap"
                                            href="#!">Details</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </Showcode>
                </div>
                <div className="xxl:col-span-6 col-span-12">
                    <Showcode title="Default alerts" code={Defaultalerts}>
                        {defaultalerts.map((idx) => (
                            <div className={`alert alert-${idx.color}`} role="alert" key={Math.random()}>
                                {` A simple ${idx.text} alert—check it out!`}
                            </div>
                        ))}
                    </Showcode>
                </div>
                <div className="xxl:col-span-6 col-span-12">
                    <Showcode title="Links In Alerts" code={Linkalerts}>
                        {defaultalerts.map((idx) => (
                            <div className={`alert alert-${idx.color}`} role="alert" key={Math.random()}>
                                {`A simple ${idx.text} alert with`} <Link href="#!" className="alert-link">an example
                                    link</Link>.
                                Give it a click if you like.
                            </div>
                        ))}
                    </Showcode>

                </div>
                <div className="xxl:col-span-6 col-span-12">
                    <Showcode title="Solid Colored Alerts" code={Solidcoloralerts}>
                        {solidalert.map((idx) => (

                            <div className={`alert alert-solid-${idx.color} alert-dismissible fade show flex`} role="alert" key={Math.random()}
                                id="dismiss-alert2">
                                <div className="sm:flex-shrink-0">
                                    {` A simple solid ${idx.color} alert—check it out!`}
                                </div>
                                <div className="ms-auto">
                                    <div className="mx-1 my-1">
                                        <button type="button"
                                            className="inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                            data-hs-remove-element="#dismiss-alert2">
                                            <span className="sr-only">Dismiss</span>
                                            <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                                fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path
                                                    d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                    fill="currentColor" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Showcode>
                </div>
                <div className="xxl:col-span-6 col-span-12">
                    <Showcode title="Outline Alerts" code={outlinealerts}>
                        {solidalert1.map((idx) => (
                            <div className={`alert alert-outline-${idx.color} alert-dismissible fade show flex`} role="alert" key={Math.random()}
                                id="dismiss-alert10">
                                <div className="sm:flex-shrink-0">
                                    {`  A simple outline ${idx.color} alert—check it out!`}
                                </div>
                                <div className="ms-auto">
                                    <div className="mx-1 my-1">
                                        <button type="button"
                                            className="inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                            data-hs-remove-element="#dismiss-alert10">
                                            <span className="sr-only">Dismiss</span>
                                            <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                                fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path
                                                    d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                    fill="currentColor" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Showcode>
                </div>
                <div className="xxl:col-span-6 col-span-12">
                    <Showcode title="Solid Alerts With Different Shadows" code={Differentshadows}>
                        {shadows.map((idx) => (

                            <div className={`alert alert-solid-${idx.color} alert-dismissible fade show flex`} role="alert" key={Math.random()}
                                id="dismiss-alert18">
                                <div className="sm:flex-shrink-0">
                                    {`A simple solid ${idx.color} alert with small it out!`}
                                </div>
                                <div className="ms-auto">
                                    <div className="mx-1 my-1">
                                        <button type="button"
                                            className="inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                            data-hs-remove-element="#dismiss-alert18">
                                            <span className="sr-only">Dismiss</span>
                                            <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                                fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path
                                                    d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                    fill="currentColor" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Showcode>
                </div>
                <div className="xxl:col-span-6 col-span-12">
                    <Showcode title="Default Alerts With Different Shadows" code={Differentalerts}>
                        {shadows.map((idx) => (

                            <div className={`alert alert-${idx.color} shadow-sm`} key={Math.random()}>{`A simple ${idx.color} alert with small
                                it out!`}</div>
                        ))}

                    </Showcode>
                </div>
                <div className="xxl:col-span-6 col-span-12">
                    <Showcode title="Rounded Solid Alerts" code={Roundedalerts}>
                        {roundedalerts.map((idx) => (

                            <div className={`alert alert-solid-${idx.color} !rounded-full alert-dismissible fade show flex`} key={Math.random()}
                                role="alert" id="dismiss-alert24">
                                <div className="sm:flex-shrink-0">
                                    {`A simple solid rounded ${idx.color} alert—check it out!`}
                                </div>
                                <div className="ms-auto">
                                    <div className="mx-1 my-1">
                                        <button type="button"
                                            className="inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                            data-hs-remove-element="#dismiss-alert24">
                                            <span className="sr-only">Dismiss</span>
                                            <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                                fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path
                                                    d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                    fill="currentColor" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Showcode>
                </div>
                <div className="xxl:col-span-6 col-span-12">
                    <Showcode title="Rounded Outline Alerts" code={outlinerounded}>
                        {roundedalerts.map((idx) => (

                            <div className={`alert alert-outline-${idx.color} !rounded-full alert-dismissible fade show flex`} key={Math.random()}
                                role="alert" id="dismiss-alert28">
                                <div className="sm:flex-shrink-0">
                                    {`A simple outline rounded ${idx.color} alert—check it out!`}
                                </div>
                                <div className="ms-auto">
                                    <div className="mx-1 my-1">
                                        <button type="button"
                                            className="inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                            data-hs-remove-element="#dismiss-alert28">
                                            <span className="sr-only">Dismiss</span>
                                            <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                                fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path
                                                    d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                    fill="currentColor" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Showcode>
                </div>
                <div className="xxl:col-span-6 col-span-12">
                    <Showcode title="Rounded Default Alert" code={roundeddefault}>
                        {roundedalerts.map((idx) => (
                            <div className={`alert alert-${idx.color} !rounded-full alert-dismissible fade show flex`} key={Math.random()}
                                role="alert" id="dismiss-alert32">
                                <div className="sm:flex-shrink-0">
                                    {`A simple solid rounded ${idx.color} alert—check it out!`}
                                </div>
                                <div className="ms-auto">
                                    <div className="mx-1 my-1">
                                        <button type="button"
                                            className="inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                            data-hs-remove-element="#dismiss-alert32">
                                            <span className="sr-only">Dismiss</span>
                                            <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                                fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path
                                                    d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                    fill="currentColor" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Showcode>
                </div>
                <div className="xxl:col-span-6 col-span-12">
                    <Showcode title="Rounded Alert With Custom Close Button" code={custombuttons}>
                        {roundedalerts.map((idx) => (
                            <div className={`alert alert-${idx.color} !rounded-full alert-dismissible fade show`} key={Math.random()}
                                id="dismiss-alert36">
                                {`A simple rounded ${idx.color} alert—check it out!`}
                                <button type="button"
                                    className="inline-flex bg-teal-50 ltr:float-right rtl:float-left  text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                    data-hs-remove-element="#dismiss-alert36">
                                    <span className="sr-only">Dismiss</span>
                                    <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path
                                            d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                            fill="currentColor" />
                                    </svg>
                                </button>
                            </div>
                        ))}
                    </Showcode>
                </div>
                <div className="xxl:col-span-6 col-span-12">
                    <Showcode title="Alerts With Icons" code={Iconalerts}>
                        {iconalerts.map((idx) => (

                            <div className={`alert alert-${idx.color} flex items-center`} role="alert" key={Math.random()}>
                                {idx.icon}
                                <div>
                                    {` An example ${idx.color} alert  with an icon`}
                                </div>
                            </div>
                        ))}
                    </Showcode>
                </div>
                <div className="xxl:col-span-6 col-span-12">
                    <Showcode title="Customized Alerts With SVG's" code={Customizedalerts}>
                        <div className="alert alert-primary alert-dismissible dark:!bg-bodybg fade show custom-alert-icon shadow-sm flex items-center"
                            role="alert" id="dismiss-alert40">
                            <div>
                                <svg className="svg-primary me-1" xmlns="http://www.w3.org/2000/svg" height="1.5rem"
                                    viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                                </svg>
                            </div>
                            <div>A customized primary alert with an icon</div>
                            <div className="ms-auto">
                                <div className="mx-1 my-1">
                                    <button type="button"
                                        className="inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                        data-hs-remove-element="#dismiss-alert40">
                                        <span className="sr-only">Dismiss</span>
                                        <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                            fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path
                                                d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                fill="currentColor" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="alert alert-secondary alert-dismissible fade show custom-alert-icon shadow-sm flex items-center"
                            role="alert" id="dismiss-alert41">
                            <div>
                                <svg className="fill-secondary me-1" xmlns="http://www.w3.org/2000/svg"
                                    height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                </svg>
                            </div>
                            <div>A customized primary alert with an icon</div>
                            <div className="ms-auto">
                                <div className="mx-1 my-1">
                                    <button type="button"
                                        className="inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                        data-hs-remove-element="#dismiss-alert41">
                                        <span className="sr-only">Dismiss</span>
                                        <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                            fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path
                                                d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                fill="currentColor" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="alert alert-warning alert-dismissible fade show custom-alert-icon shadow-sm flex items-center"
                            role="alert" id="dismiss-alert42">
                            <div>
                                <svg className="fill-warning me-1" xmlns="http://www.w3.org/2000/svg"
                                    height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                                </svg>
                            </div>
                            <div>A customized primary alert with an icon</div>
                            <div className="ms-auto">
                                <div className="mx-1 my-1">
                                    <button type="button"
                                        className="inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                        data-hs-remove-element="#dismiss-alert42">
                                        <span className="sr-only">Dismiss</span>
                                        <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                            fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path
                                                d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                fill="currentColor" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="alert alert-danger alert-dismissible fade show custom-alert-icon shadow-sm flex items-center"
                            role="alert" id="dismiss-alert43">
                            <div>
                                <svg className="fill-danger me-1" xmlns="http://www.w3.org/2000/svg" height="1.5rem"
                                    viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                    <path d="M0 0h24v24H0z" fill="none" />
                                    <path
                                        d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z" />
                                </svg>
                            </div>
                            <div>A customized primary alert with an icon</div>
                            <div className="ms-auto">
                                <div className="mx-1 my-1">
                                    <button type="button"
                                        className="inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                        data-hs-remove-element="#dismiss-alert43">
                                        <span className="sr-only">Dismiss</span>
                                        <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                            fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
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
                <div className="xxl:col-span-6 col-span-12">
                    <Showcode title="Alert With Images" code={Imagealerts}>
                        <div className="alert alert-img alert-primary alert-dismissible fase show !rounded-full flex-wrap relative"
                            role="alert" id="dismiss-alert44">
                            <div className="avatar avatar-sm me-3 avatar-rounded">
                                <img src="../../../assets/images/faces/3.jpg" alt="img" />
                            </div>
                            <div>A simple primary rounded alert with image—check it out!</div>
                            <button type="button"
                                className="m-2 p-3 absolute end-0 top-0 inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                data-hs-remove-element="#dismiss-alert44">
                                <span className="sr-only">Dismiss</span>
                                <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path
                                        d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                        fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                        <div className="alert alert-img alert-secondary alert-dismissible fase show !rounded-full flex-wrap relative"
                            role="alert" id="dismiss-alert45">
                            <div className="avatar avatar-sm me-3 avatar-rounded">
                                <img src="../../../assets/images/faces/5.jpg" alt="img" />
                            </div>
                            <div>A simple secondary rounded alert with image—check it out!</div>
                            <button type="button"
                                className="m-2 p-3 absolute end-0 top-0 inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                data-hs-remove-element="#dismiss-alert45">
                                <span className="sr-only">Dismiss</span>
                                <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path
                                        d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                        fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                        <div className="alert alert-img alert-warning alert-dismissible fase show !rounded-full flex-wrap relative"
                            role="alert" id="dismiss-alert46">
                            <div className="avatar avatar-sm me-3 avatar-rounded">
                                <img src="../../../assets/images/faces/8.jpg" alt="img" />
                            </div>
                            <div>A simple warning rounded alert with image—check it out!</div>
                            <button type="button"
                                className="m-2 p-3 absolute end-0 top-0 inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                data-hs-remove-element="#dismiss-alert46">
                                <span className="sr-only">Dismiss</span>
                                <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path
                                        d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                        fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                        <div className="alert alert-img alert-danger alert-dismissible fase show !rounded-full flex-wrap relative"
                            role="alert" id="dismiss-alert47">
                            <div className="avatar avatar-sm me-3 avatar-rounded">
                                <img src="../../../assets/images/faces/11.jpg" alt="img" />
                            </div>
                            <div>A simple danger rounded alert with image—check it out!</div>
                            <button type="button"
                                className="m-2 p-3 absolute end-0 top-0 inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                data-hs-remove-element="#dismiss-alert47">
                                <span className="sr-only">Dismiss</span>
                                <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path
                                        d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                        fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                        <div className="alert alert-img alert-info alert-dismissible fase show !rounded-full flex-wrap relative"
                            role="alert" id="dismiss-alert48">
                            <div className="avatar avatar-sm me-3 avatar-rounded">
                                <img src="../../../assets/images/faces/13.jpg" alt="img" />
                            </div>
                            <div>A simple info rounded alert with image—check it out!</div>
                            <button type="button"
                                className="m-2 p-3 absolute end-0 top-0 inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                data-hs-remove-element="#dismiss-alert48">
                                <span className="sr-only">Dismiss</span>
                                <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path
                                        d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                        fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                        <div className="alert alert-img alert-light alert-dismissible fase show !rounded-full flex-wrap relative"
                            role="alert" id="dismiss-alert49">
                            <div className="avatar avatar-sm me-3 avatar-rounded">
                                <img src="../../../assets/images/faces/10.jpg" alt="img" />
                            </div>
                            <div>A simple light rounded alert with image—check it out!</div>
                            <button type="button"
                                className="m-2 p-3 absolute end-0 top-0 inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                data-hs-remove-element="#dismiss-alert49">
                                <span className="sr-only">Dismiss</span>
                                <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path
                                        d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                        fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                        <div className="alert alert-img alert-dark alert-dismissible fase show !rounded-full flex-wrap relative"
                            role="alert" id="dismiss-alert50">
                            <div className="avatar avatar-sm me-3 avatar-rounded">
                                <img src="../../../assets/images/faces/15.jpg" alt="img" />
                            </div>
                            <div>A simple dark rounded alert with image—check it out!</div>
                            <button type="button"
                                className="m-2 p-3 absolute end-0 top-0 inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                data-hs-remove-element="#dismiss-alert50">
                                <span className="sr-only">Dismiss</span>
                                <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path
                                        d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                        fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                    </Showcode>
                </div>
                <div className="xxl:col-span-6 col-span-12">
                    <Showcode title="Alert With Different Size Images" code={Alertimages}>
                        <div className="alert alert-img alert-primary alert-dismissible fase show flex-wrap relative"
                            role="alert" id="dismiss-alert51">
                            <div className="avatar avatar-xs me-3">
                                <img src="../../../assets/images/faces/3.jpg" alt="img" />
                            </div>
                            <div>A simple primary alert with image—check it out!</div>
                            <button type="button"
                                className="m-2 p-3 absolute end-0 top-0  inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                data-hs-remove-element="#dismiss-alert51">
                                <span className="sr-only">Dismiss</span>
                                <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path
                                        d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                        fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                        <div className="alert alert-img alert-secondary alert-dismissible fase show flex-wrap relative"
                            role="alert" id="dismiss-alert52">
                            <div className="avatar avatar-sm me-3">
                                <img src="../../../assets/images/faces/5.jpg" alt="img" />
                            </div>
                            <div>A simple secondary alert with image—check it out!</div>
                            <button type="button"
                                className="m-2 p-3 absolute end-0 top-0  inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                data-hs-remove-element="#dismiss-alert52">
                                <span className="sr-only">Dismiss</span>
                                <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path
                                        d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                        fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                        <div className="alert alert-img alert-warning alert-dismissible fase show flex-wrap relative"
                            role="alert" id="dismiss-alert53">
                            <div className="avatar me-3">
                                <img src="../../../assets/images/faces/8.jpg" alt="img" />
                            </div>
                            <div>A simple warning alert with image—check it out!</div>
                            <button type="button"
                                className="m-2 p-3 absolute end-0 top-0  inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                data-hs-remove-element="#dismiss-alert53">
                                <span className="sr-only">Dismiss</span>
                                <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path
                                        d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                        fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                        <div className="alert alert-img alert-danger alert-dismissible fase show flex-wrap relative"
                            role="alert" id="dismiss-alert54">
                            <div className="avatar avatar-md me-3">
                                <img src="../../../assets/images/faces/11.jpg" alt="img" />
                            </div>
                            <div>A simple danger alert with image—check it out!</div>
                            <button type="button"
                                className="m-2 p-3 absolute end-0 top-0  inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                data-hs-remove-element="#dismiss-alert54">
                                <span className="sr-only">Dismiss</span>
                                <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path
                                        d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                        fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                        <div className="alert alert-img alert-info alert-dismissible fase show flex-wrap relative"
                            role="alert" id="dismiss-alert55">
                            <div className="avatar avatar-lg me-3">
                                <img src="../../../assets/images/faces/13.jpg" alt="img" />
                            </div>
                            <div>A simple info alert with image—check it out!</div>
                            <button type="button"
                                className="m-2 p-3 absolute end-0 top-0  inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                data-hs-remove-element="#dismiss-alert55">
                                <span className="sr-only">Dismiss</span>
                                <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path
                                        d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                        fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                        <div className="alert alert-img alert-dark alert-dismissible fase show flex-wrap relative"
                            role="alert" id="dismiss-alert56">
                            <div className="avatar avatar-xl me-3">
                                <img src="../../../assets/images/faces/14.jpg" alt="img" />
                            </div>
                            <div>A simple info alert with image—check it out!</div>
                            <button type="button"
                                className="m-2 p-3 absolute end-0 top-0  inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                data-hs-remove-element="#dismiss-alert56">
                                <span className="sr-only">Dismiss</span>
                                <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                    fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path
                                        d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                        fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12">
                            <div className="box !bg-white dark:!bg-bodybg !border-0">
                                <div className="alert custom-alert1 alert-primary !bg-white dark:!bg-bodybg" id="dismiss-alert69">
                                    <button type="button" className="btn-close ms-auto"
                                        data-hs-remove-element="#dismiss-alert69" aria-label="Close"><i
                                            className="bi bi-x"></i></button>
                                    <div className="text-center px-[3rem] pb-0">
                                        <svg className="custom-alert-icon svg-primary inline-flex"
                                            xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24"
                                            width="1.5rem" fill="#000000">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path
                                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                                        </svg>
                                        <h5 className="text-[1.25rem] !font-medium">Information?</h5>
                                        <p className="">This alert is created to just show the related information.</p>
                                        <div className="">
                                            <button type="button" className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-outline-danger m-1">Decline</button>
                                            <button type="button" className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium bg-primary text-white m-1">Accept</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6  col-span-12">
                            <div className="box bg-white border-0">
                                <div className="alert custom-alert1 alert-secondary" id="dismiss-alert70">
                                    <button type="button" className="btn-close ms-auto"
                                        data-hs-remove-element="#dismiss-alert70" aria-label="Close"><i
                                            className="bi bi-x"></i></button>
                                    <div className="text-center px-5 pb-0">
                                        <svg className="custom-alert-icon fill-secondary inline-flex"
                                            xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24"
                                            width="1.5rem" fill="#000000">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path
                                                d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                                        </svg>
                                        <h5 className="text-[1.25rem] !font-medium">Confirmed</h5>
                                        <p>This alert is created to just show the confirmation message.</p>
                                        <div className="">
                                            <button type="button" className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium bg-secondary text-white m-1">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6  col-span-12">
                            <div className="box bg-white border-0">
                                <div className="alert custom-alert1 alert-warning" id="dismiss-alert71">
                                    <button type="button" className="btn-close ms-auto"
                                        data-hs-remove-element="#dismiss-alert71" aria-label="Close"><i
                                            className="bi bi-x"></i></button>
                                    <div className="text-center px-5 pb-0">
                                        <svg className="custom-alert-icon fill-warning inline-flex"
                                            xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24"
                                            width="1.5rem" fill="#000000">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                                        </svg>
                                        <h5 className="text-[1.25rem] !font-medium">Warning</h5>
                                        <p className="">This alert is created to just show the warning message.</p>
                                        <div className="">
                                            <button type="button"
                                                className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-outline-secondary m-1">Back</button>
                                            <button type="button"
                                                className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium bg-warning text-white m-1">Continue</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12">
                            <div className="box bg-white border-0">
                                <div className="alert custom-alert1 alert-danger" id="dismiss-alert72">
                                    <button type="button" className="btn-close ms-auto"
                                        data-hs-remove-element="#dismiss-alert72" aria-label="Close"><i
                                            className="bi bi-x"></i></button>
                                    <div className="text-center px-5 pb-0">
                                        <svg className="custom-alert-icon fill-danger inline-flex"
                                            xmlns="http://www.w3.org/2000/svg" height="1.5rem" viewBox="0 0 24 24"
                                            width="1.5rem" fill="#000000">
                                            <path d="M0 0h24v24H0z" fill="none" />
                                            <path
                                                d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z" />
                                        </svg>
                                        <h5 className="text-[1.25rem] !font-medium">danger</h5>
                                        <p className="">This alert is created to just show the danger message.</p>
                                        <div className="">
                                            <button type="button"
                                                className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium bg-danger text-white m-1">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                            <div className="box border-0">
                                <div className="alert alert-primary border !border-primary mb-0 p-2"
                                    id="dismiss-alert57">
                                    <div className="flex items-start">
                                        <div className="me-2">
                                            <svg className="sm:flex-shrink-0 svg-primary"
                                                xmlns="http://www.w3.org/2000/svg" height="1.5rem"
                                                viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                                <path d="M0 0h24v24H0V0z" fill="none" />
                                                <path
                                                    d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                            </svg>
                                        </div>
                                        <div className="text-primary w-full">
                                            <div className="font-semibold flex justify-between">Information
                                                Alert<button type="button"
                                                    className="inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                                    data-hs-remove-element="#dismiss-alert57">
                                                    <span className="sr-only">Dismiss</span>
                                                    <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                                        fill="none" xmlns="http://www.w3.org/2000/svg"
                                                        aria-hidden="true">
                                                        <path
                                                            d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                            fill="currentColor" />
                                                    </svg>
                                                </button></div>
                                            <div className="text-[0.75rem] opacity-[0.8] mb-1">Information alert to show
                                                to information
                                            </div>
                                            <div className="text-[0.75rem]">
                                                <Link href="#!"
                                                    className="text-secondary font-semibold me-2 inline-block">cancel</Link>
                                                <Link href="#!"
                                                    className="text-primary font-semibold">open</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                            <div className="box border-0">
                                <div className="alert alert-secondary border !border-secondary mb-0 p-2"
                                    id="dismiss-alert58">
                                    <div className="flex items-start">
                                        <div className="me-2">
                                            <svg className="sm:flex-shrink-0 fill-secondary"
                                                xmlns="http://www.w3.org/2000/svg" height="1.5rem"
                                                viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                                <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                                            </svg>
                                        </div>
                                        <div className="text-secondary w-full">
                                            <div className="font-semibold flex justify-between">Success
                                                Alert<button type="button"
                                                    className="inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                                    data-hs-remove-element="#dismiss-alert58">
                                                    <span className="sr-only">Dismiss</span>
                                                    <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                                        fill="none" xmlns="http://www.w3.org/2000/svg"
                                                        aria-hidden="true">
                                                        <path
                                                            d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                            fill="currentColor" />
                                                    </svg>
                                                </button></div>
                                            <div className="text-[0.75rem] opacity-[0.8] mb-1">Success alert to show to
                                                success message
                                            </div>
                                            <div className="text-[0.75rem]">
                                                <Link href="#!"
                                                    className="text-danger font-semibold me-2 inline-block">cancel</Link>
                                                <Link href="#!"
                                                    className="text-secondary font-semibold">open</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                            <div className="box border-0">
                                <div className="alert alert-warning border !border-warning mb-0 p-2"
                                    id="dismiss-alert59">
                                    <div className="flex items-start">
                                        <div className="me-2">
                                            <svg className="sm:flex-shrink-0 fill-warning"
                                                xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
                                                height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                                <g>
                                                    <rect fill="none" height="24" width="24" />
                                                </g>
                                                <g>
                                                    <g>
                                                        <g>
                                                            <path
                                                                d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z" />
                                                            <polygon points="13,16 11,16 11,18 13,18" />
                                                            <polygon points="13,10 11,10 11,15 13,15" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="text-warning w-full">
                                            <div className="font-semibold flex justify-between">Warning
                                                Alert<button type="button"
                                                    className="inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                                    data-hs-remove-element="#dismiss-alert59">
                                                    <span className="sr-only">Dismiss</span>
                                                    <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                                        fill="none" xmlns="http://www.w3.org/2000/svg"
                                                        aria-hidden="true">
                                                        <path
                                                            d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                            fill="currentColor" />
                                                    </svg>
                                                </button></div>
                                            <div className="text-[0.75rem] opacity-[0.8] mb-1">Warning alert to show
                                                warning message</div>
                                            <div className="text-[0.75rem]">
                                                <Link href="#!"
                                                    className="text-black dark:text-white font-semibold me-2 inline-block">cancel</Link>
                                                <Link href="#!"
                                                    className="text-warning font-semibold">open</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                            <div className="box border-0">
                                <div className="alert alert-danger border !border-danger mb-0 p-2" id="dismiss-alert60">
                                    <div className="flex items-start">
                                        <div className="me-2">
                                            <svg className="sm:flex-shrink-0 fill-danger"
                                                xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
                                                height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                                <g>
                                                    <rect fill="none" height="24" width="24" />
                                                </g>
                                                <g>
                                                    <g>
                                                        <g>
                                                            <path
                                                                d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z" />
                                                            <rect height="6" width="2" x="11" y="7" />
                                                            <rect height="2" width="2" x="11" y="15" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="text-danger w-full">
                                            <div className="font-semibold flex justify-between">Danger
                                                Alert<button type="button"
                                                    className="inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                                    data-hs-remove-element="#dismiss-alert60">
                                                    <span className="sr-only">Dismiss</span>
                                                    <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                                        fill="none" xmlns="http://www.w3.org/2000/svg"
                                                        aria-hidden="true">
                                                        <path
                                                            d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                            fill="currentColor" />
                                                    </svg>
                                                </button></div>
                                            <div className="text-[0.75rem] opacity-[0.8] mb-1">Danger alert to show the
                                                danger message
                                            </div>
                                            <div className="text-[0.75rem]">
                                                <Link href="#!"
                                                    className="text-info font-semibold me-2 inline-block">cancel</Link>
                                                <Link href="#!"
                                                    className="text-danger font-semibold">open</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                            <div className="box border-0">
                                <div className="alert alert-solid-primary border border-primary mb-0 p-2"
                                    id="dismiss-alert61">
                                    <div className="flex items-start">
                                        <div className="me-2">
                                            <svg className="sm:flex-shrink-0 svg-white" xmlns="http://www.w3.org/2000/svg"
                                                height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                                <path d="M0 0h24v24H0V0z" fill="none" />
                                                <path
                                                    d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                                            </svg>
                                        </div>
                                        <div className="text-white w-full">
                                            <div className="font-semibold flex justify-between">Information
                                                Alert<button type="button"
                                                    className="inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                                    data-hs-remove-element="#dismiss-alert61">
                                                    <span className="sr-only">Dismiss</span>
                                                    <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                                        fill="none" xmlns="http://www.w3.org/2000/svg"
                                                        aria-hidden="true">
                                                        <path
                                                            d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                            fill="currentColor" />
                                                    </svg>
                                                </button></div>
                                            <div className="text-[0.75rem] opacity-[0.8] mb-1">Information alert to show
                                                to information
                                            </div>
                                            <div className="text-[0.75rem]">
                                                <Link href="#!"
                                                    className="text-white font-semibold me-2 op-7">cancel</Link>
                                                <Link href="#!"
                                                    className="text-white font-semibold">open</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                            <div className="box border-0">
                                <div className="alert alert-solid-secondary border border-secondary mb-0 p-2"
                                    id="dismiss-alert62">
                                    <div className="flex items-start">
                                        <div className="me-2">
                                            <svg className="sm:flex-shrink-0 svg-white" xmlns="http://www.w3.org/2000/svg"
                                                height="1.5rem" viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                                <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none" />
                                                <path
                                                    d="M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                                            </svg>
                                        </div>
                                        <div className="text-white w-full">
                                            <div className="font-semibold flex justify-between">Success
                                                Alert<button type="button"
                                                    className="inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                                    data-hs-remove-element="#dismiss-alert62">
                                                    <span className="sr-only">Dismiss</span>
                                                    <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                                        fill="none" xmlns="http://www.w3.org/2000/svg"
                                                        aria-hidden="true">
                                                        <path
                                                            d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                            fill="currentColor" />
                                                    </svg>
                                                </button></div>
                                            <div className="text-[0.75rem] opacity-[0.8] mb-1">Success alert to show to
                                                success message
                                            </div>
                                            <div className="text-[0.75rem]">
                                                <Link href="#!"
                                                    className="text-white font-semibold me-2">close</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                            <div className="box border-0">
                                <div className="alert alert-solid-warning border border-warning mb-0 p-2"
                                    id="dismiss-alert63">
                                    <div className="flex items-start">
                                        <div className="me-2">
                                            <svg className="sm:flex-shrink-0 svg-white" xmlns="http://www.w3.org/2000/svg"
                                                enableBackground="new 0 0 24 24" height="1.5rem"
                                                viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                                <g>
                                                    <rect fill="none" height="24" width="24" />
                                                </g>
                                                <g>
                                                    <g>
                                                        <g>
                                                            <path
                                                                d="M12,5.99L19.53,19H4.47L12,5.99 M12,2L1,21h22L12,2L12,2z" />
                                                            <polygon points="13,16 11,16 11,18 13,18" />
                                                            <polygon points="13,10 11,10 11,15 13,15" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="text-white w-full">
                                            <div className="font-semibold flex justify-between">Warning
                                                Alert<button type="button"
                                                    className="inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                                    data-hs-remove-element="#dismiss-alert63">
                                                    <span className="sr-only">Dismiss</span>
                                                    <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                                        fill="none" xmlns="http://www.w3.org/2000/svg"
                                                        aria-hidden="true">
                                                        <path
                                                            d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                            fill="currentColor" />
                                                    </svg>
                                                </button></div>
                                            <div className="text-[0.75rem] opacity-[0.8] mb-1">Warning alert to show to
                                                warning message
                                            </div>
                                            <div className="text-[0.75rem]">
                                                <Link href="#!"
                                                    className="text-white font-semibold me-2 op-7">skip</Link>
                                                <Link href="#!"
                                                    className="text-white font-semibold">open</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                            <div className="box border-0">
                                <div className="alert alert-solid-danger border border-danger mb-0 p-2"
                                    id="dismiss-alert64">
                                    <div className="flex items-start">
                                        <div className="me-2">
                                            <svg className="sm:flex-shrink-0 svg-white" xmlns="http://www.w3.org/2000/svg"
                                                enableBackground="new 0 0 24 24" height="1.5rem"
                                                viewBox="0 0 24 24" width="1.5rem" fill="#000000">
                                                <g>
                                                    <rect fill="none" height="24" width="24" />
                                                </g>
                                                <g>
                                                    <g>
                                                        <g>
                                                            <path
                                                                d="M15.73,3H8.27L3,8.27v7.46L8.27,21h7.46L21,15.73V8.27L15.73,3z M19,14.9L14.9,19H9.1L5,14.9V9.1L9.1,5h5.8L19,9.1V14.9z" />
                                                            <rect height="6" width="2" x="11" y="7" />
                                                            <rect height="2" width="2" x="11" y="15" />
                                                        </g>
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>
                                        <div className="text-white w-full">
                                            <div className="font-semibold flex justify-between">Danger
                                                Alert<button type="button"
                                                    className="inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                                    data-hs-remove-element="#dismiss-alert64">
                                                    <span className="sr-only">Dismiss</span>
                                                    <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                                        fill="none" xmlns="http://www.w3.org/2000/svg"
                                                        aria-hidden="true">
                                                        <path
                                                            d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                            fill="currentColor" />
                                                    </svg>
                                                </button></div>
                                            <div className="text-[0.75rem] opacity-[0.8] mb-1">Danger alert to show to
                                                danger message
                                            </div>
                                            <div className="text-[0.75rem]">
                                                <Link href="#!"
                                                    className="text-white font-semibold me-2 op-7">close</Link>
                                                <Link href="#!"
                                                    className="text-white font-semibold">continue</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <Showcode title="Additional Content" code={additionaldata}>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="xxl:col-span-6 col-span-12">
                                <div className="alert alert-primary overflow-hidden !p-0" role="alert"
                                    id="dismiss-alert65">
                                    <div className="p-4 bg-primary text-white flex justify-between">
                                        <h6 className="aletr-heading mb-0 text-[1rem]">Thank you for reporting this.
                                        </h6>
                                        <button type="button"
                                            className="inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                            data-hs-remove-element="#dismiss-alert65">
                                            <span className="sr-only">Dismiss</span>
                                            <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                                fill="none" xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true">
                                                <path
                                                    d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                    fill="currentColor" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="p-3">
                                        <p className="mb-0">We appreciate you to let us know the bug in the template
                                            and for warning us about future consequences <Link
                                                href="#!"
                                                className="font-semibold underline text-defaulttextcolor">Visit for
                                                support
                                                for queries ?</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className="xxl:col-span-6 col-span-12">
                                <div className="alert alert-secondary overflow-hidden !p-0" role="alert"
                                    id="dismiss-alert66">
                                    <div className="p-4 bg-secondary text-white flex justify-between">
                                        <h6 className="aletr-heading mb-0 text-[1rem]">Thank you for reporting this.
                                        </h6>
                                        <button type="button"
                                            className="inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                            data-hs-remove-element="#dismiss-alert66">
                                            <span className="sr-only">Dismiss</span>
                                            <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                                fill="none" xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true">
                                                <path
                                                    d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                    fill="currentColor" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="p-3">
                                        <p className="mb-0">We appreciate you to let us know the bug in the template
                                            and for warning us about future consequences <Link
                                                href="#!"
                                                className="font-semibold underline text-defaulttextcolor">Visit for
                                                support
                                                for queries ?</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className="xxl:col-span-6 col-span-12">
                                <div className="alert alert-success !border-success/10 overflow-hidden !p-0"
                                    role="alert" id="dismiss-alert67">
                                    <div className="p-4 bg-success text-white flex justify-between">
                                        <h6 className="aletr-heading mb-0 text-[1rem]">Thank you for reporting this.
                                        </h6>
                                        <button type="button"
                                            className="inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                            data-hs-remove-element="#dismiss-alert67">
                                            <span className="sr-only">Dismiss</span>
                                            <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                                fill="none" xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true">
                                                <path
                                                    d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                    fill="currentColor" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="p-3">
                                        <p className="mb-0">We appreciate you to let us know the bug in the template
                                            and for warning us about future consequences <Link
                                                href="#!"
                                                className="font-semibold underline text-defaulttextcolor">Visit for
                                                support
                                                for queries ?</Link></p>
                                    </div>
                                </div>
                            </div>
                            <div className="xxl:col-span-6 col-span-12">
                                <div className="alert alert-warning overflow-hidden !p-0" role="alert"
                                    id="dismiss-alert68">
                                    <div className="p-4 bg-warning text-white flex justify-between">
                                        <h6 className="aletr-heading mb-0 text-[1rem]">Thank you for reporting this.
                                        </h6>
                                        <button type="button"
                                            className="inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                            data-hs-remove-element="#dismiss-alert68">
                                            <span className="sr-only">Dismiss</span>
                                            <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16"
                                                fill="none" xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true">
                                                <path
                                                    d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                                    fill="currentColor" />
                                            </svg>
                                        </button>
                                    </div>

                                    <div className="p-3">
                                        <p className="mb-0">We appreciate you to let us know the bug in the template
                                            and for warning us about future consequences <Link
                                                href="#!"
                                                className="font-semibold underline text-defaulttextcolor">Visit for
                                                support
                                                for queries ?</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Showcode>
                </div>
            </div>
        </div>
    )
}
Alerts.layout = "Contentlayout"

export default Alerts