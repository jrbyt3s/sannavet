import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { Autoplay, Navigation } from 'swiper/modules';
import Link from 'next/link';

const Candidatedetails = () => {
    return (
        <Fragment>
            <Seo title={"Candidate Details"} />
            <Pageheader currentpage="Candidate Details" activepage="Jobs" mainpage="Candidate Details" />
            <div className="container">
                <div className="grid grid-cols-12 gap-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box custom-box">
                            <div className="box-body">
                                <div className="sm:flex items-center sm:flex-wrap justify-between gap-2">
                                    <div className="md:flex">
                                        <span className="avatar avatar-xxl !rounded-full">
                                            <img src="../../../../assets/images/faces/1.jpg" className="!rounded-full img-fluid" alt="" />
                                        </span>
                                        <div className="sm:ms-4">
                                            <h4 className="font-bold mb-0 sm:flex items-center"><Link href="#!"> Brenda Simpson <i className="bi bi-check-circle-fill text-success text-[1rem]" title="Verified candidate"></i></Link></h4>
                                            <Link href="#!" className="font-semibold"><i className="bi bi-briefcase me-1"></i> Software Developer</Link>
                                            <div className="flex items-center text-[.6875rem] text-[#8c9097] dark:text-white/50">
                                                <p className="text-[.6875rem] mb-0">Ratings : </p>
                                                <div className="min-w-fit sm:ms-2">
                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                    <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                </div>
                                                <Link href="#!" className="ms-1 min-w-fit text-[#8c9097] dark:text-white/50">
                                                    <span>(142)</span>
                                                    <span>Ratings</span>
                                                </Link>
                                            </div>
                                            <div className="sm:flex text-[.875rem] mt-4">
                                                <div>
                                                    <p className="mb-1"><i className="bi bi-geo-alt me-2"></i>Banglore, Karnataka</p>
                                                    <p><i className="bi bi-briefcase me-2"></i>1 Year Experience</p>
                                                </div>
                                                <div className="sm:ms-4">
                                                    <p className="mb-1"><i className="bi bi-coin me-2"></i>Package (Yearly) :
                                                        <span className="font-semibold" title="Current Salary">$10,000</span>-
                                                        <span className="font-semibold" title="Expected Salary">$20,000</span>
                                                    </p>
                                                    <p><i className="bi bi-mortarboard me-2"></i>Graduate</p>
                                                </div>
                                            </div>
                                            <div className="popular-tags">
                                                <Link href="#!" className="badge  me-2 !rounded-full bg-info/10  text-info mb-2"><i className="bi bi-moon-stars me-1"></i>Full Time</Link>
                                                <Link href="#!" className="badge !rounded-full bg-danger/10 text-danger mb-2"><i className="bi bi-clock me-1"></i> Immediate Joinee</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="btn-list flex">
                                        <Link href="#!" className="ti-btn  ti-btn-primary-full dark:border-defaulttextcolor/10 me-2 whitespace-nowrap"><i className="bi bi-download me-1"></i> Download CV</Link>
                                        <Link aria-label="anchor" href="#!" className="ti-btn ti-btn-icon ti-btn-primary me-2">
                                            <i className="ri-heart-line text-[.8125rem] align-middle"></i>
                                        </Link>
                                        <Link aria-label="anchor" href="#!" className="ti-btn ti-btn-icon ti-btn-primary">
                                            <i className="ri-share-line"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 gap-6">
                    <div className="xl:col-span-8 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">
                                    <h5 className="mb-0 font-semibold text-[1.375rem]">
                                        Candidate Profile Information
                                    </h5>
                                </div>
                            </div>
                            <div className="box-body !p-0 candidate-edu-timeline">
                                <div className="p-6 border-b dark:border-defaultborder/10">
                                    <h5 className="font-semibold text-[1.0625rem] sm:flex items-center gap-2 mb-4"><span className="avatar !rounded-full bg-primary avatar-sm"><i className="bi bi-briefcase text-[.8125rem]"></i></span> Career Objective :</h5>
                                    <div className="ms-6 ps-4">
                                        <p className="opacity-[0.9] mb-4">Est amet sit vero sanctus labore no sed ipsum ipsum nonumy. Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore.A officiis optio temporibus minima facilis...</p>
                                        <p className="mb-0 opacity-[0.9]">Sit ipsum sanctus ea magna est. Aliquyam sed amet. Kasd diam rebum sit ipsum ipsum erat et kasd.Est amet sit vero sanctus labore no sed ipsum ipsum nonumy vero sanctus labore..</p>
                                    </div>
                                </div>
                                <div className="p-6 border-b dark:border-defaultborder/10">
                                    <h5 className="font-semibold text-[1.0625rem] sm:flex items-center gap-2"><span className="avatar !rounded-full bg-primary avatar-sm"><i className="bi bi-mortarboard text-[.8125rem]"></i></span> Education :</h5>
                                    <div className="ms-6 ps-4">
                                        <p className="font-semibold text-[.875rem] mb-0">Bachelors of science in computer science</p>
                                        <div className="sm:flex gap-2">
                                            <p className="mb-0">Dwayne University</p>
                                            <p className="mb-0 text-[#8c9097] dark:text-white/50"><i className="bi bi-geo-alt text-[0.75rem]"></i> Nellore</p>
                                        </div>
                                        <p className="mb-4"> (2019 Mar - 2022 Apr)</p>
                                        <p className="font-semibold text-[.875rem] mb-0">Intermediate (MPC)</p>
                                        <div className="sm:flex gap-2">
                                            <p className="mb-0">Sprect College</p>
                                            <p className="mb-0 text-[#8c9097] dark:text-white/50"><i className="bi bi-geo-alt text-[0.75rem]"></i> Warangal</p>
                                        </div>
                                        <p className="mb-0"> (2017 Mar - 2019 Apr)</p>
                                    </div>
                                </div>
                                <div className="p-6 border-b dark:border-defaultborder/10">
                                    <h5 className="font-semibold text-[1.0625rem] sm:flex items-center gap-2"><span className="avatar !rounded-full bg-primary avatar-sm"><i className="bi bi-award text-[.8125rem]"></i></span> Certifications :</h5>
                                    <div className="ms-6 ps-4">
                                        <p className="font-semibold text-[.875rem] mb-0">Web Development (3 Months)</p>
                                        <p className="mb-4">EMC Solutions Pvt Ltd</p>
                                        <p className="font-semibold text-[.875rem] mb-0">Python Development (6 Months)</p>
                                        <p className="mb-0">Dabre Services Pvt Ltd</p>
                                    </div>
                                </div>
                                <div className="p-6 border-b dark:border-defaultborder/10">
                                    <h5 className="font-semibold text-[1.0625rem] sm:flex items-center gap-2"><span className="avatar !rounded-full bg-primary avatar-sm"><i className="bi bi-journal-medical text-[.8125rem]"></i></span> Publications :</h5>
                                    <div className="ms-4">
                                        <ol className="list-group border-0 list-disc ps-[2rem]">
                                            <li className="border-0 py-1"><span className="font-semibold">“One of a Kind Design,”</span> Web Design Book, Poulin Publishing, 2018</li>
                                            <li className="border-0 py-1"><span className="font-semibold">“Website Design in 2019,”</span> A List Apart, June 2019</li>
                                            <li className="border-0 py-1"><span className="font-semibold">“Usable Information Architecture,”</span> SitePoint, Feb 2019</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-6 border-b dark:border-defaultborder/10">
                                    <h5 className="font-semibold text-[1.0625rem] sm:flex items-center gap-2"><span className="avatar !rounded-full bg-primary avatar-sm"><i className="bi bi-activity text-[.8125rem]"></i></span> Activities and Interests :</h5>
                                    <div className="ms-4">
                                        <ol className="list-group border-0 list-disc ps-[2rem]">
                                            <li className="border-0 py-1">Community Involvement</li>
                                            <li className="border-0 py-1">Yoga</li>
                                            <li className="border-0 py-1">Travel</li>
                                            <li className="border-0 py-1">Art</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-6 border-b dark:border-defaultborder/10">
                                    <h5 className="font-semibold text-[1.0625rem] sm:flex items-center gap-2"><span className="avatar !rounded-full bg-primary avatar-sm"><i className="bi bi-link-45deg text-[.8125rem]"></i></span> References :</h5>
                                    <div className="ms-6 ps-4">
                                        <p className="mb-4"><span className="font-semibold ">Name : </span> Nicole Chiu</p>
                                        <p className="mb-4"><span className="font-semibold ">Designation : </span> Software Developer</p>
                                        <p className="mb-4"><span className="font-semibold ">Company Name : </span> Spotech Technical Solutions</p>
                                        <p className="mb-4"><span className="font-semibold ">Mobile : </span> +91 7865443679</p>
                                        <p className="mb-4"><span className="font-semibold ">Email : </span> nchiu@email.com</p>
                                        <p className="mb-0"><span className="font-semibold">Location : </span> Hyderabad</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">
                                    <h5 className="mb-0 font-semibold">Experience Overview</h5>
                                </div>
                            </div>
                            <div className="box-body !p-0 candidate-edu-timeline">
                                <div className="p-6 border-b dark:border-defaultborder/10">
                                    <h5 className="font-semibold text-[1.0625rem] sm:flex items-center gap-2 mb-4"><span className="avatar !rounded-full bg-primary avatar-sm"><i className="bi bi-briefcase text-[.8125rem]"></i></span> Experience :</h5>
                                    <div className="ms-6 ps-4">
                                        <p className="font-semibold text-[.875rem] mb-0">Full Stack Developer (2019 Mar - 2022 Apr)</p>
                                        <div className="sm:flex gap-2">
                                            <p className="mb-4">Spotech Technical Solutions</p>
                                            <p className="mb-0 text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="bi bi-geo-alt text-[.6875rem]"></i> Kondapur, Hyderabad</p>
                                        </div>
                                        <p className="font-semibold mb-2">Responsibilities :</p>
                                        <ol className="list-group border-0 list-disc ps-[2rem]">
                                            <li className="border-0 py-1">Design thoughtful, beautiful, and useful software user interfaces and experiences in a team environment..</li>
                                            <li className="border-0 py-1">Create user-centered designs by considering market analysis, customer feedback, and usability findings.</li>
                                        </ol>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h5 className="font-semibold text-[1.0625rem] sm:flex items-center gap-2 mb-4"><span className="avatar !rounded-full bg-primary avatar-sm"><i className="bi bi-people text-[.8125rem]"></i></span> Volunteer Experience:</h5>
                                    <div className="ms-6 sm:ps-4">
                                        <p className="font-semibold text-[.875rem] mb-0">Volunteer in the Student Organization</p>
                                        <p className="mb-2 text-[#8c9097] dark:text-white/50"><i className="bi bi-geo-alt text-[0.75rem]"></i> Warangal, 2015</p>
                                        <ol className="list-group border-0 list-disc ps-[2rem]">
                                            <li className="border-0 py-1">In charge of Organizing activities for approximately 100+ internation schools in 2015</li>
                                            <li className="border-0 py-1">In charge of Organizing activities for approximately 100+ internation schools in 2015</li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box border dark:border-defaultborder/10 !bg-primary/10 text-primary shadow-none">
                            <div className="box-body">
                                <div className="sm:grid grid-cols-12 items-center">
                                    <div className="lg:col-span-6 col-span-6">
                                        <h5 className="font-semibold mb-0">🖐 Was this profile fit for someone?</h5>
                                    </div>
                                    <div className="lg:col-span-6 col-span-6 text-end">
                                        <Link href="#!" className="ti-btn ti-btn-success-full dark:border-defaultborder/10 ti-btn-lg">
                                            <i className="ri-share-line me-2"></i>Share Now
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-0 !text-defaulttextcolor">Related Profiles</h4>
                            <p className="!text-defaultsize !text-defaulttextcolor mb-6">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                            <Swiper spaceBetween={30} centeredSlides={true} navigation={true} modules={[Navigation, Autoplay]} className="mySwiper" autoplay={{ delay: 2500, disableOnInteraction: false, }} >
                                <SwiperSlide className="rtl:dir-rtl">
                                    <div className="box custom-box">
                                        <div className="box-body">
                                            <div className="btn-list ltr:float-right rtl:float-left space-x-2 rtl:space-x-reverse">
                                                <div className="hs-tooltip ti-main-tooltip">
                                                    <button type="button" className="hs-tooltip-toggle avatar !rounded-full avatar-sm bg-primary text-white">
                                                        <span><i className="ri-download-2-line text-[.8125rem] align-middle"></i></span>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                            Download Resume
                                                        </span>
                                                    </button>
                                                </div>
                                                <div className="hs-tooltip ti-main-tooltip">
                                                    <button type="button" className="hs-tooltip-toggle avatar !rounded-full avatar-sm bg-light !text-defaulttextcolor">
                                                        <span><i className="ri-heart-line text-[.8125rem] align-middle"></i></span>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                            Whislist
                                                        </span>
                                                    </button>
                                                </div>
                                                <div className="hs-tooltip ti-main-tooltip">
                                                    <button type="button" className="hs-tooltip-toggle avatar !rounded-full avatar-sm bg-light !text-defaulttextcolor">
                                                        <span><i className="ri-eye-line text-[.8125rem] align-middle"></i></span>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                            View Profile
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="sm:flex mb-3 items-center">
                                                <span className="avatar avatar-lg !rounded-full">
                                                    <img src="../../../../assets/images/faces/1.jpg" alt="" />
                                                </span>
                                                <div className="ms-2">
                                                    <h5 className="font-semibold mb-0 sm:flex items-center"><Link href="#!"> Brenda Simpson <i className="bi bi-check-circle-fill text-success text-[1rem]" title="Verified candidate"></i></Link></h5>
                                                    <div className="sm:flex gap-2">
                                                        <Link href="#!">Software Developer</Link>
                                                        <p className="mb-0 text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="bi bi-geo-alt text-[.6875rem]"></i> Kondapur, Hyderabad</p>
                                                    </div>
                                                    <div className="sm:flex items-center text-[0.75rem] text-[#8c9097] dark:text-white/50">
                                                        <p className="text-[0.75rem] mb-0">Ratings : </p>
                                                        <div className="min-w-fit ms-2">
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-half"></i></span>
                                                        </div>
                                                        <Link href="#!" className="ms-1 min-w-fit text-[#8c9097] dark:text-white/50">
                                                            <span>(142)</span>
                                                            <span>Ratings</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="popular-tags">
                                                <Link href="#!" className="badge me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-mortarboard text-[#8c9097] dark:text-white/50 me-1"></i> Graduate</Link>
                                                <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-moon-stars text-[#8c9097] dark:text-white/50 me-1"></i> sm:flexible-shift</Link>
                                                <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-clock text-[#8c9097] dark:text-white/50 me-1"></i> Immediate Joinee</Link>
                                                <Link href="#!" className="badge !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-broadcast text-[#8c9097] dark:text-white/50 me-1"></i> Good at English</Link>
                                            </div>
                                        </div>
                                        <div className="box-footer">
                                            <div className="sm:flex items-center gap-3">
                                                <h6 className="mb-0 font-semibold">Skills :</h6>
                                                <div className="popular-tags sm:flex-grow">
                                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor">HTML</Link>
                                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor">CSS</Link>
                                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor">Javascript</Link>
                                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor">Angular</Link>
                                                    <Link href="#!" className="badge !rounded-full bg-primary/10 text-primary"><i className="bi bi-plus"></i> More</Link>
                                                </div>
                                                <div>
                                                    <Link href="#!" className="badge  me-2 badge-md !rounded-full bg-info/10 text-info" title="1 year bond accepted"><i className="bi bi-hand-thumbs-up me-1"></i>1 year bond accepted</Link>
                                                    <Link href="#!" className="badge badge-md !rounded-full bg-primary/10 text-primary"><i className="bi bi-briefcase me-1"></i>Exp : 2 Years</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="rtl:dir-rtl">
                                    <div className="box custom-box">
                                        <div className="box-body">
                                            <div className="btn-list ltr:float-right rtl:float-left space-x-2 rtl:space-x-reverse">
                                                <div className="hs-tooltip ti-main-tooltip">
                                                    <button type="button" className="hs-tooltip-toggle avatar !rounded-full avatar-sm bg-primary text-white">
                                                        <span><i className="ri-download-2-line text-[.8125rem] align-middle"></i></span>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                            Download Resume
                                                        </span>
                                                    </button>
                                                </div>
                                                <div className="hs-tooltip ti-main-tooltip">
                                                    <button type="button" className="hs-tooltip-toggle avatar !rounded-full avatar-sm bg-light !text-defaulttextcolor">
                                                        <span><i className="ri-heart-line text-[.8125rem] align-middle"></i></span>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                            Whislist
                                                        </span>
                                                    </button>
                                                </div>
                                                <div className="hs-tooltip ti-main-tooltip">
                                                    <button type="button" className="hs-tooltip-toggle avatar !rounded-full avatar-sm bg-light !text-defaulttextcolor">
                                                        <span><i className="ri-eye-line text-[.8125rem] align-middle"></i></span>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                            View Profile
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="sm:flex mb-3 items-center">
                                                <span className="avatar avatar-lg !rounded-full">
                                                    <img src="../../../../assets/images/faces/3.jpg" alt="" />
                                                </span>
                                                <div className="ms-2">
                                                    <h5 className="font-semibold mb-0 sm:flex items-center"><Link href="#!"> Dwayne Stort <i className="bi bi-check-circle-fill text-success text-[1rem]" title="Verified candidate"></i></Link></h5>
                                                    <div className="sm:flex gap-2">
                                                        <Link href="#!">Web Developer</Link>
                                                        <p className="mb-0 text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="bi bi-geo-alt text-[.6875rem]"></i> Gachibowli, Hyderabad</p>
                                                    </div>
                                                    <div className="sm:flex items-center text-[0.75rem] text-[#8c9097] dark:text-white/50">
                                                        <p className="text-[0.75rem] mb-0">Ratings : </p>
                                                        <div className="min-w-fit ms-2">
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star"></i></span>
                                                        </div>
                                                        <Link href="#!" className="mb-0 ms-1 min-w-fit text-[#8c9097] dark:text-white/50">
                                                            <span>(35)</span>
                                                            <span>Ratings</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="popular-tags">
                                                <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-mortarboard text-[#8c9097] dark:text-white/50 me-1"></i> Post Graduate</Link>
                                                <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-moon-stars text-[#8c9097] dark:text-white/50 me-1"></i> sm:flexible-shift</Link>
                                                <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-clock text-[#8c9097] dark:text-white/50 me-1"></i> Within 10 Days</Link>
                                                <Link href="#!" className="badge !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-broadcast text-[#8c9097] dark:text-white/50 me-1"></i> Good at English</Link>
                                            </div>
                                        </div>
                                        <div className="box-footer">
                                            <div className="sm:flex items-center gap-3">
                                                <h6 className="mb-0 font-semibold">Skills :</h6>
                                                <div className="popular-tags sm:flex-grow">
                                                    <Link href="#!" className="badge  me-1 !rounded-full bg-light !text-defaulttextcolor">React</Link>
                                                    <Link href="#!" className="badge me-1 !rounded-full bg-light !text-defaulttextcolor">Javascript</Link>
                                                    <Link href="#!" className="badge me-1 !rounded-full bg-light !text-defaulttextcolor">React Navtive</Link>
                                                    <Link href="#!" className="badge !rounded-full bg-primary/10 text-primary"><i className="bi bi-plus"></i> More</Link>
                                                </div>
                                                <div>
                                                    <Link href="#!" className="badge badge-md !rounded-full bg-info/10 text-info" title="1 year bond accepted"><i className="bi bi-hand-thumbs-up me-1"></i>2 years bond accepted</Link>
                                                    <Link href="#!" className="badge badge-md !rounded-full bg-primary/10 text-primary"><i className="bi bi-briefcase me-1"></i>Exp : 4 Years</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="rtl:dir-rtl">
                                    <div className="box custom-box">
                                        <div className="box-body">
                                            <div className="btn-list ltr:float-right rtl:float-left space-x-2 rtl:space-x-reverse">
                                                <div className="hs-tooltip ti-main-tooltip">
                                                    <button type="button" className="hs-tooltip-toggle avatar !rounded-full avatar-sm bg-primary text-white">
                                                        <span><i className="ri-download-2-line text-[.8125rem] align-middle"></i></span>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                            Download Resume
                                                        </span>
                                                    </button>
                                                </div>
                                                <div className="hs-tooltip ti-main-tooltip">
                                                    <button type="button" className="hs-tooltip-toggle avatar !rounded-full avatar-sm bg-light !text-defaulttextcolor">
                                                        <span><i className="ri-heart-line text-[.8125rem] align-middle"></i></span>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                            Whislist
                                                        </span>
                                                    </button>
                                                </div>
                                                <div className="hs-tooltip ti-main-tooltip">
                                                    <button type="button" className="hs-tooltip-toggle avatar !rounded-full avatar-sm bg-light !text-defaulttextcolor">
                                                        <span><i className="ri-eye-line text-[.8125rem] align-middle"></i></span>
                                                        <span
                                                            className="hs-tooltip-content  ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                                            role="tooltip">
                                                            View Profile
                                                        </span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="sm:flex mb-3 items-center">
                                                <span className="avatar avatar-lg !rounded-full">
                                                    <img src="../../../../assets/images/faces/21.jpg" alt="" />
                                                </span>
                                                <div className="ms-2">
                                                    <h5 className="font-semibold mb-0 sm:flex items-center"><Link href="#!"> Jasmine Kova <i className="bi bi-check-circle-fill text-success text-[1rem]" title="Verified candidate"></i></Link></h5>
                                                    <div className="sm:flex gap-2">
                                                        <Link href="#!">Python Developer</Link>
                                                        <p className="mb-0 text-[0.75rem] text-[#8c9097] dark:text-white/50"><i className="bi bi-geo-alt text-[.6875rem]"></i> Gachibowli, Chennai</p>
                                                    </div>
                                                    <div className="sm:flex items-center text-[0.75rem] text-[#8c9097] dark:text-white/50">
                                                        <p className="text-[0.75rem] mb-0">Ratings : </p>
                                                        <div className="min-w-fit ms-2">
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star-fill"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star"></i></span>
                                                            <span className="text-warning"><i className="bi bi-star"></i></span>
                                                        </div>
                                                        <Link href="#!" className="mb-0 ms-1 min-w-fit text-[#8c9097] dark:text-white/50">
                                                            <span>(56)</span>
                                                            <span>Ratings</span>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="popular-tags">
                                                <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-mortarboard text-[#8c9097] dark:text-white/50 me-1"></i> MBA</Link>
                                                <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-moon-stars text-[#8c9097] dark:text-white/50 me-1"></i> Day-shift</Link>
                                                <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-clock text-[#8c9097] dark:text-white/50 me-1"></i> Within 30 Days</Link>
                                                <Link href="#!" className="badge !rounded-full bg-light !text-defaulttextcolor"><i className="bi bi-broadcast text-[#8c9097] dark:text-white/50 me-1"></i> Avg at English</Link>
                                            </div>
                                        </div>
                                        <div className="box-footer">
                                            <div className="sm:flex items-center gap-3">
                                                <h6 className="mb-0 font-semibold">Skills :</h6>
                                                <div className="popular-tags sm:flex-grow">
                                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor">Python</Link>
                                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor">Java</Link>
                                                    <Link href="#!" className="badge  me-2 !rounded-full bg-light !text-defaulttextcolor">React</Link>
                                                    <Link href="#!" className="badge !rounded-full bg-primary/10 text-primary"><i className="bi bi-plus"></i> More</Link>
                                                </div>
                                                <div>
                                                    <Link href="#!" className="badge badge-md !rounded-full bg-primary/10 text-primary"><i className="bi bi-briefcase me-1"></i>Exp : 5 Years</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                    <div className="xl:col-span-4 col-span-12">
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">
                                    Skills
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="popular-tags">
                                    <Link href="#!" className="badge me-1 !rounded-full bg-light !text-defaulttextcolor">HTML</Link>
                                    <Link href="#!" className="badge me-1 !rounded-full bg-light !text-defaulttextcolor">CSS</Link>
                                    <Link href="#!" className="badge me-1 !rounded-full bg-light !text-defaulttextcolor">Javascript</Link>
                                    <Link href="#!" className="badge me-1 !rounded-full bg-light !text-defaulttextcolor">Angular</Link>
                                    <Link href="#!" className="badge !rounded-full bg-light !text-defaulttextcolor">React</Link>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box overflow-hidden">
                            <div className="box-header">
                                <div className="box-title">
                                    Tools Used
                                </div>
                            </div>
                            <div className="box-body">
                                <span className="avatar me-2 !rounded-full bg-white dark:bg-bodybg dark:border-defaultborder/10 shadow-sm border p-2">
                                    <img src="../../../../assets/images/company-logos/1.png" alt="logo" />
                                </span>
                                <span className="avatar me-2 !rounded-full bg-white dark:bg-bodybg dark:border-defaultborder/10 shadow-sm border p-2">
                                    <img src="../../../../assets/images/company-logos/2.png" alt="logo" />
                                </span>
                                <span className="avatar me-2 !rounded-full bg-white dark:bg-bodybg dark:border-defaultborder/10 shadow-sm border p-2">
                                    <img src="../../../../assets/images/company-logos/3.png" alt="logo" />
                                </span>
                                <span className="avatar me-2 !rounded-full bg-white dark:bg-bodybg dark:border-defaultborder/10 shadow-sm border p-2">
                                    <img src="../../../../assets/images/company-logos/4.png" alt="logo" />
                                </span>
                                <span className="avatar me-2 !rounded-full bg-white dark:bg-bodybg dark:border-defaultborder/10 shadow-sm border p-2">
                                    <img src="../../../../assets/images/company-logos/5.png" alt="logo" />
                                </span>
                                <span className="avatar !rounded-full bg-white dark:bg-bodybg dark:border-defaultborder/10 shadow-sm border p-2">
                                    <img src="../../../../assets/images/company-logos/6.png" alt="logo" />
                                </span>
                            </div>
                        </div>
                        <div className="box custom-box">
                            <div className="box-header">
                                <div className="box-title">
                                    Languages
                                </div>
                            </div>
                            <div className="box-body">
                                <p className="mb-4"><span className="font-semibold">English : </span>Fluent</p>
                                <p className="mb-4"><span className="font-semibold">Hindi : </span>Intermediate</p>
                                <p className="mb-0"><span className="font-semibold">Telugu : </span>Expert</p>
                            </div>
                        </div>
                        <div className="box custom-box overflow-hidden">
                            <div className="box-header">
                                <div className="box-title">
                                    Personal Information
                                </div>
                            </div>
                            <div className="box-body !p-2">
                                <table className="table table-borderless min-w-full">
                                    <tbody>
                                        <tr>
                                            <td className="">
                                                <span className="font-semibold">Full Name</span>
                                            </td>
                                            <td>: Brenda Simpson</td>
                                        </tr>
                                        <tr>
                                            <td className="">
                                                <span className="font-semibold">Email</span>
                                            </td>
                                            <td>: brendra@gmail.com</td>
                                        </tr>
                                        <tr>
                                            <td className="">
                                                <span className="font-semibold">D.O.B</span>
                                            </td>
                                            <td>: 13 Jan 2022</td>
                                        </tr>
                                        <tr>
                                            <td className="">
                                                <span className="font-semibold">Gender</span>
                                            </td>
                                            <td>: Female</td>
                                        </tr>
                                        <tr>
                                            <td className="">
                                                <span className="font-semibold">Age</span>
                                            </td>
                                            <td>: 35</td>
                                        </tr>
                                        <tr>
                                            <td className="">
                                                <span className="font-semibold">Mobile </span>
                                            </td>
                                            <td>: +91 7865343874</td>
                                        </tr>
                                        <tr>
                                            <td className="">
                                                <span className="font-semibold">Mother Tongue </span>
                                            </td>
                                            <td>: Telugu</td>
                                        </tr>
                                        <tr>
                                            <td className="">
                                                <span className="font-semibold">Marital Status </span>
                                            </td>
                                            <td>: Unmarried</td>
                                        </tr>
                                        <tr>
                                            <td className="">
                                                <span className="font-semibold">Blood Group </span>
                                            </td>
                                            <td>: o +ve</td>
                                        </tr>
                                        <tr>
                                            <td className="">
                                                <span className="font-semibold">Address </span>
                                            </td>
                                            <td> Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="box-footer">
                                <div className="sm:flex items-center">
                                    <p className="text-[.9375rem] mb-0 me-4 font-semibold">Social :</p>
                                    <div className="btn-list mb-0">
                                        <button type="button" aria-label="button" className="ti-btn ti-btn-sm ti-btn-icon ti-btn-primary me-[0.375rem] xl:mb-0">
                                            <i className="ri-facebook-line"></i>
                                        </button>
                                        <button type="button" aria-label="button" className="ti-btn ti-btn-sm ti-btn-icon ti-btn-secondary me-[0.375rem] xl:mb-0">
                                            <i className="ri-twitter-line"></i>
                                        </button>
                                        <button type="button" aria-label="button" className="ti-btn ti-btn-sm ti-btn-icon ti-btn-warning me-[0.375rem] xl:mb-0">
                                            <i className="ri-instagram-line"></i>
                                        </button>
                                        <button type="button" aria-label="button" className="ti-btn ti-btn-sm ti-btn-icon ti-btn-success me-[0.375rem] xl:mb-0">
                                            <i className="ri-github-line"></i>
                                        </button>
                                        <button type="button" aria-label="button" className="ti-btn ti-btn-sm ti-btn-icon ti-btn-danger xl:mb-0">
                                            <i className="ri-youtube-line"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box custom-box">
                            <div className="box-body">
                                <div className="">
                                    <h5 className="font-semibold mb-4">Get Latest Alerts</h5>
                                    <p>Latest candidate updates on the go to recieved direct to your email. Stay updated with your latest new candidates list.</p>
                                    <div className="input-group mb-4">
                                        <input type="text" className="form-control" placeholder="Email Here" aria-label="blog-email" aria-describedby="blog-subscribe" />
                                        <button className="ti-btn ti-btn-primary-full !mb-0" type="button" id="blog-subscribe">Subscribe</button>
                                    </div>
                                    <label className="form-check-label" htmlFor="invalidCheck">
                                        By Subscribing you accept to <Link href="#!" className="text-success"><u>privacy policy</u></Link>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Candidatedetails.layout = "Contentlayout"

export default Candidatedetails