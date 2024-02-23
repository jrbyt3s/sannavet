import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React, { Fragment, useEffect, useRef, useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

const Draggablecards = () => {

    const [isFullscreen, setIsFullscreen] = useState(false);

    useEffect(() => {
        const handleBodyClick = () => {
            if (isFullscreen) {
                setIsFullscreen(false);
            }
        };

        document.querySelector("body").addEventListener("click", handleBodyClick);

        return () => {
            document.querySelector("body").removeEventListener("click", handleBodyClick);
        };
    }, [isFullscreen]);

    const handleFullscreenClick = (e) => {
        e.stopPropagation();
        setIsFullscreen(!isFullscreen);
    };

    const handleBoxClick = (e) => {
        e.stopPropagation();
    };

    const leftContainerRef = useRef(null);
    const rightContainerRef = useRef(null);
    useEffect(() => {
        // Check if window is defined (to prevent issues during server-side rendering)
        if (typeof window !== "undefined") {
            // Import the dragula library here (make sure it's installed first)
            const dragula = require("dragula");
            const windowElement = window;

            if (leftContainerRef.current && rightContainerRef.current) {
                const containers = [
                    leftContainerRef.current,
                    rightContainerRef.current,
                ];

                // Initialize dragula on the containers
                const drake = dragula(containers);

                // Your other dragula-related logic here...

                if (document.querySelector(".firstdrag")?.classList.contains("task-Null")) {
                    console.log("aaa");
                    document.querySelector(".view-more-button")?.classList.add("d-none");
                }
            }

            OnDivChange();
        }
    }, []);

    const elementsToModify = [
        leftContainerRef,
        rightContainerRef,
    ];

    const OnDivChange = () => {
        elementsToModify.forEach((elementId) => {
            const element = elementId.current;
            if (element?.children.length <= 0) {
                element?.classList.add("task-Null");
                element?.parentNode.parentElement.parentElement.querySelector(".view-more-button")?.classList.add("d-none");
            } else {
                element?.classList.remove("task-Null");
                element?.parentNode.parentElement.parentElement.querySelector(".view-more-button")?.classList.remove("d-none");
            }
        });
    };

    return (
        <Fragment>
            <Seo title={"Draggable Cards"} />
            <Pageheader currentpage="Draggable Cards" activepage=" Advanced Ui" mainpage="Draggable Cards" />

            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12" id="draggable-left" ref={leftContainerRef} onMouseEnter={OnDivChange}>
                    <div className="box custom-box box-bg-primary">
                        <Link aria-label="anchor" href="#!" className="box-anchor"></Link>
                        <div className="box-body">
                            <blockquote className="blockquote mb-0 text-center">
                                <h6 className="font-medium text-white">The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart..</h6>
                                <footer className="blockquote-footer mt-4 text-[.875rem] text-white opacity-[0.7]">Someone famous as <cite title="Source Title">-Helen Keller</cite></footer>
                            </blockquote>
                        </div>
                    </div>
                    <div className={`box ${isFullscreen ? "box-fullscreen" : ""}`}>
                        <div className="box-header flex justify-between">
                            <div className="box-title my-auto">
                                box With Fullscreen Button
                            </div>
                            <Link aria-label="anchor" href="#!" className="terms-fullscreen" onClick={handleFullscreenClick} >
                                <i className="ri-fullscreen-line"></i>
                            </Link>
                        </div>
                        <div className="box-body" onClick={handleBoxClick}>
                            <h6 className="text-base font-semibold">FullScreen box</h6>
                            <p className="text-[0.813rem] mb-0">There are many variations of passages of Lorem Ipsum available, but the
                                majority
                                have suffered alteration in some form, by injected humour, or randomised words</p>
                        </div>
                        <div className="box-footer">
                            <button type="button" className="ti-btn ti-btn-primary">Read More</button>
                        </div>
                    </div>
                    <div className="box custom-box overlay-box  text-white">
                        <img src="../../../assets/images/media/media-35.jpg" className="box-img" alt="..." />
                        <div className="box-img-overlay flex flex-col p-0 top-auto">
                            <div className="box-header !text-white">
                                <div className="box-title !text-white">
                                    Image Overlays Are Awesome!
                                </div>
                            </div>
                            <div className="box-body  !text-white">
                                <div className="box-text mb-2 !text-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</div>
                                <div className="box-text ">Last updated 3 mins ago</div>
                            </div>
                        </div>
                    </div>
                    <div className="box custom-box">
                        <Link aria-label="anchor" href="#!" className="box-anchor"></Link>
                        <div className="box-body">
                            <div className="flex items-center">
                                <div className="me-4">
                                    <span className="avatar avatar-md">
                                        <img src="../../../assets/images/faces/15.jpg" alt="img" />
                                    </span>
                                </div>
                                <div>
                                    <p className="box-text mb-0 text-[.875rem] font-semibold">Atharva Simon.</p>
                                    <div className="box-title !text-[#8c9097] dark:text-white/50 !text-[0.75rem] !font-normal mb-0">Correspondent Professor</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box custom-box border border-info">
                        <Link aria-label="anchor" href="#!" className="box-anchor"></Link>
                        <div className="box-body">
                            <div className="flex items-center">
                                <div className="me-3">
                                    <span className="avatar avatar-xl">
                                        <img src="../../../assets/images/faces/8.jpg" alt="img" />
                                    </span>
                                </div>
                                <div>
                                    <p className="box-text text-info mb-1 text-[.875rem] font-semibold">Alicia Keys.</p>
                                    <div className="box-title !text-[0.75rem] mb-1 !font-normal">Department Of Commerce</div>
                                    <div className="box-title !text-[#8c9097] dark:text-white/50 !text-[.6875rem] !font-normal mb-0">24 Years, Female</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12" id="draggable-right" ref={rightContainerRef} onMouseEnter={OnDivChange}>
                    <div className="box custom-box overlay-box">
                        <img src="../../../assets/images/media/media-36.jpg" className="box-img" alt="..." />
                        <div className="box-img-overlay flex flex-col p-0 !top-auto inset-x-0 bottom-0">
                            <div className="box-body text-white">
                                <div className="box-text !text-white">
                                    Image Overlays Are Awesome!
                                </div>
                                <div className="box-text mb-2 !text-white">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.</div>
                            </div>
                            <div className="box-footer !text-white">Last updated 3 mins ago</div>
                        </div>
                    </div>
                    <div className="box custom-box box-bg-success">
                        <div className="box-body">
                            <div className="flex items-center w-full">
                                <div className="me-2">
                                    <span className="avatar">
                                        <img src="../../../assets/images/faces/5.jpg" alt="img" className="!rounded-full" />
                                    </span>
                                </div>
                                <div className="">
                                    <div className="text-[0.9375rem] font-semibold text-white">Samantha sid</div>
                                    <p className="mb-0 text-white opacity-[0.7] text-[0.75rem]">In leave for 1 month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="box custom-box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Card With Collapse Button
                            </div>
                            <Link aria-label="anchor" className="hs-collapse-toggle inline-flex items-center gap-x-2 " href="#!" id="hs-show-hide-collapse" data-hs-collapse="#hs-show-hide-collapse-heading">
                                <span className="hs-collapse-open:hidden"></span>
                                <span className="hs-collapse-open:block hidden"></span>
                                <svg className="hs-collapse-open:rotate-180 w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </Link>
                        </div>
                        <div id="hs-show-hide-collapse-heading" className="hs-collapse show w-full overflow-hidden  transition-[height] duration-300" aria-labelledby="hs-show-hide-collapse">
                            <div className="box-body">
                                <h6 className="box-text font-semibold">Collapsible box</h6>
                                <p className="box-text mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
                            </div>
                            <div className="box-footer">
                                <button type="button" className="ti-btn ti-btn-primary-full">Read More</button>
                            </div>
                        </div>
                    </div>
                    <div className="box custom-box" id="dismiss-alert">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Card With Close Button
                            </div>
                            <button type="button"
                                className="inline-flex bg-teal-50 rounded-sm text-teal-500 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-teal-50 focus:ring-teal-600"
                                data-hs-remove-element="#dismiss-alert">
                                <span className="sr-only">Dismiss</span>
                                <svg className="h-3 w-3" width="16" height="16" viewBox="0 0 16 16" fill="none"
                                    xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path
                                        d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z"
                                        fill="currentColor" />
                                </svg>
                            </button>
                        </div>
                        <div className="box-body">
                            <h6 className="box-text font-semibold">Closed box</h6>
                            <p className="box-text mb-0">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p>
                        </div>
                        <div className="box-footer">
                            <button type="button" className="ti-btn ti-btn-primary-full">Read More</button>
                        </div>
                    </div>
                </div>
            </div>


        </Fragment>
    )
}
Draggablecards.layout = "Contentlayout"
export default Draggablecards