import { ProfileService } from '@/shared/data/pages/mail/mailsettingdata';
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { Fragment, useEffect, useRef, useState } from 'react';
import DatePicker from 'react-datepicker';

const Deals = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDateChange = (date) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };


    //URl image
    const [UrlImage, setUrlImage] = useState("../../../../assets/images/faces/9.jpg");
    //Disabling input feild
    const [UrlDisabled, setUrlDisabled] = useState(true);

    const [fileDisabled, setfileDisabled] = useState(false);
    //Default image
    const [Image, setImage] = useState("../../../../assets/images/faces/9.jpg");

    let location = useRouter();

    const putImage = () => {
        setImage(ProfileService.returnImage());
        if (UrlImage != Image) {
            ProfileService.handleChangeUrl(UrlImage);
            setImage(ProfileService.returnImage());
        }
        // setSmShow(false)
    };

    //toggle button for image 
    const toggleImage = (type) => {
        if (type == "fileDisabled") {
            setfileDisabled(false);
            setUrlDisabled(true);
        }
        if (type == "UrlDisabled") {
            setUrlDisabled(false);
            setfileDisabled(true);
        }
    };
    const [ClassName, setClassName] = useState();

    useEffect(() => {
        if (ProfileService.returnImage() != undefined) {
            setImage(ProfileService.returnImage());
        }
        let contactItem = document.querySelectorAll(".main-contact-item");
        contactItem.forEach((ele => {
            ele.addEventListener("click", () => {
                setClassName("main-content-body-show");
            });
        }));

    }, [location]);

    const [selectedImage, setSelectedImage] = useState("../../../../assets/images/faces/9.jpg"); // Set the default image URL here
    const fileInputRef = useRef > (null);

    const handleImageChange = (e) => {
        const selectedFile = e.target.files && e.target.files[0];

        if (selectedFile) {
            // You can handle the file here, for example, upload it to a server.

            // Read the selected image and set it in state
            const reader = new FileReader();
            reader.onload = (event) => {
                setSelectedImage(event.target);
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const openFileInput = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    //
    const firstContainerRef = useRef(null);
    const secondContainerRef = useRef(null);
    const thirdContainerRef = useRef(null);
    const fourthContainerRef = useRef(null);
    const fifthContainerRef = useRef(null);
    const sixthContainerRef = useRef(null);
    // const windowElement  = !window;

    useEffect(() => {
        // Check if window is defined (to prevent issues during server-side rendering)
        if (typeof window !== "undefined") {
            // Import the dragula library here (make sure it's installed first)
            const dragula = require("dragula");
            const windowElement = window;

            if (firstContainerRef.current && secondContainerRef.current) {
                const containers = [
                    firstContainerRef.current,
                    secondContainerRef.current,
                    thirdContainerRef.current,
                    fourthContainerRef.current,
                    fifthContainerRef.current,
                    sixthContainerRef.current,

                ];

                // Initialize dragula on the containers
                const drake = dragula(containers);

                // Your other dragula-related logic here...

                if (document.querySelector(".firstdrag")?.classList.contains("task-Null")) {
                    console.log("aaa");
                    document.querySelector(".view-more-button")?.classList.add("d-none");
                }
            }
        }
    }, []);

    return (
        <Fragment>
            <Seo title={"Deals"} />
            <Pageheader currentpage="Deals" activepage="CRM" mainpage="Deals" />

            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="flex items-center flex-wrap gap-2 justify-between">
                                <div className="flex items-center">
                                    <span className="font-semibold text-[1rem] me-1">Deals</span><span className="badge bg-light text-default align-middle">16</span>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <Link href="#!" className="hs-dropdown-toggle ti-btn ti-btn-primary-full !py-1 !px-2 !text-[0.75rem]" data-hs-overlay="#todo-compose"><i className="ri-add-line font-semibold align-middle"></i>New Deal
                                    </Link>
                                    <button type="button" className="ti-btn ti-btn-success !py-1 !px-2 !text-[0.75rem] btn-wave">Export As CSV</button>
                                    <div className="hs-dropdown ti-dropdown">
                                        <Link href="#!" className="ti-btn ti-btn-light !py-1 !px-2 !text-[0.75rem] btn-wave" aria-expanded="false">
                                            Sort By<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                        </Link>
                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                            <li><Link className="ti-dropdown-item" href="#!">Newest</Link></li>
                                            <li><Link className="ti-dropdown-item" href="#!">Date Added</Link></li>
                                            <li><Link className="ti-dropdown-item" href="#!">A - Z</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxxl:col-span-2 md:col-span-4 col-span-12">
                    <div className="box custom-box">
                        <div className="box-body !p-4">
                            <div className="flex items-start flex-wrap justify-between">
                                <div>
                                    <div className="font-semibold text-[.9375rem] lead-discovered">Leads Discovered</div>
                                    <span className=" badge bg-light text-default">24 Leads</span>
                                </div>
                                <div>
                                    <span className="text-primary font-semibold">$25,238</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-2 md:col-span-4 col-span-12">
                    <div className="box custom-box">
                        <div className="box-body !p-4">
                            <div className="flex items-start flex-wrap justify-between">
                                <div>
                                    <div className="font-semibold text-[.9375rem] lead-qualified">Qualified Leads</div>
                                    <span className=" badge bg-light text-default">17 Leads</span>
                                </div>
                                <div>
                                    <span className="text-warning font-semibold">$32,453</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-2 md:col-span-4 col-span-12">
                    <div className="box custom-box">
                        <div className="box-body !p-4">
                            <div className="flex items-start flex-wrap justify-between">
                                <div>
                                    <div className="font-semibold text-[.9375rem] contact-initiated">Contact Initiated</div>
                                    <span className=" badge bg-light text-default">5 Leads</span>
                                </div>
                                <div>
                                    <span className="text-success font-semibold">$13,756</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-2 md:col-span-4 col-span-12">
                    <div className="box custom-box">
                        <div className="box-body !p-4">
                            <div className="flex items-start flex-wrap justify-between">
                                <div>
                                    <div className="font-semibold text-[.9375rem] need-identified">Needs Identified</div>
                                    <span className=" badge bg-light text-default">43 Leads</span>
                                </div>
                                <div>
                                    <span className="text-info font-semibold">$47,093</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-2 md:col-span-4 col-span-12">
                    <div className="box custom-box">
                        <div className="box-body !p-4">
                            <div className="flex items-start flex-wrap justify-between">
                                <div>
                                    <div className="font-semibold text-[.9375rem] negotiation">Negotiation</div>
                                    <span className=" badge bg-light text-default">15 Leads</span>
                                </div>
                                <div>
                                    <span className="text-danger font-semibold">$26,146</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-2 md:col-span-4 col-span-12">
                    <div className="box custom-box">
                        <div className="box-body !p-4">
                            <div className="flex items-start flex-wrap justify-between">
                                <div>
                                    <div className="font-semibold text-[.9375rem] deal-finalized">Deal Finalized</div>
                                    <span className=" badge bg-light text-default">127 Deals</span>
                                </div>
                                <div>
                                    <span className="text-secondary font-semibold">$1,74,679</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-2 col-span-12" ref={firstContainerRef} id="leads-discovered">
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="flex items-center font-semibold justify-between gap-1 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/12.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="text-sm">Service Upgrade</div>
                                </div>
                                <div>$5000</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" className="company-name">Spruko Technologies</Link>
                                </div>
                                <div className="text-muted text-xs">24,Jun 2023 - 12:45PM</div>
                            </div>
                        </div>
                    </div>
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="flex items-center font-semibold justify-between gap-1 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/5.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="text-sm">Product Demo</div>
                                </div>
                                <div>$50,000</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" className="company-name">Acme Corporation LTD</Link>
                                </div>
                                <div className="text-muted text-xs">18,Apr 2023 - 11:22AM</div>
                            </div>
                        </div>
                    </div>
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="flex items-center font-semibold justify-between gap-1 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/15.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="text-sm">Website Redesign</div>
                                </div>
                                <div>$20,000</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" className="company-name">Embark Technologies</Link>
                                </div>
                                <div className="text-muted text-xs">12,Jul 2023 - 10:15AM</div>
                            </div>
                        </div>
                    </div>
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="flex items-center font-semibold justify-between gap-1 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/6.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="text-sm">Consulting Services</div>
                                </div>
                                <div>$10,000</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" className="company-name">Adam Johnson</Link>
                                </div>
                                <div className="text-muted text-xs">29,Jul 2023 - 4:45PM</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-2 col-span-12" ref={secondContainerRef} id="leads-qualified">
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="flex items-center font-semibold justify-between gap-1 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/11.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="text-sm">Event Sponsorship</div>
                                </div>
                                <div>$10,000</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" className="company-name">Initech Info</Link>
                                </div>
                                <div className="text-muted text-xs">21,May 2023 - 10:25AM</div>
                            </div>
                        </div>
                    </div>
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="flex items-center font-semibold justify-between gap-1 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/11.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="text-sm">Sales Training</div>
                                </div>
                                <div>$6,000</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" className="company-name">Soylent Corp</Link>
                                </div>
                                <div className="text-muted text-xs">10,May 2023 - 9:20AM</div>
                            </div>
                        </div>
                    </div>
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="flex items-center font-semibold justify-between gap-1 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/14.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="text-sm">Content Creation</div>
                                </div>
                                <div>$3,000</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" className="company-name">Hooli Technologies</Link>
                                </div>
                                <div className="text-muted text-xs">25,Aug 2023 - 3:38PM</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-2 col-span-12" ref={thirdContainerRef} id="contact-initiated">
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="flex items-center font-semibold justify-between gap-1 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/3.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="text-sm">E-commerce Integration</div>
                                </div>
                                <div>$12,000</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" className="company-name">Spice Infotech</Link>
                                </div>
                                <div className="text-muted text-xs">15,Sep 2023 - 8:32PM</div>
                            </div>
                        </div>
                    </div>
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="flex items-center font-semibold justify-between gap-1 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/16.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="text-sm">Ad Campaign</div>
                                </div>
                                <div>$5,500</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" className="company-name">Umbrella Corp</Link>
                                </div>
                                <div className="text-muted text-xs">17,Jun 2023 - 10:54AM</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-2 col-span-12" ref={fourthContainerRef} id="needs-identified">
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="flex items-center font-semibold justify-between gap-1 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/10.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="text-sm">Webinar Series</div>
                                </div>
                                <div>$9,500</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" className="company-name">Massive Dynamic</Link>
                                </div>
                                <div className="text-muted text-xs">16,May 2023 - 11:22AM</div>
                            </div>
                        </div>
                    </div>
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="flex items-center font-semibold justify-between gap-1 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/13.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="text-sm">SEO Audit</div>
                                </div>
                                <div>$3,000</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" className="company-name">Logitech ecostics</Link>
                                </div>
                                <div className="text-muted text-xs">27,Apr 2023 - 5:15PM</div>
                            </div>
                        </div>
                    </div>
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="flex items-center font-semibold justify-between gap-1 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/8.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="text-sm">Loyalty Program</div>
                                </div>
                                <div>$12,000</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" className="company-name">Globex Corp</Link>
                                </div>
                                <div className="text-muted text-xs">26,Jul 2023 - 5:28AM</div>
                            </div>
                        </div>
                    </div>
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="flex items-center font-semibold justify-between gap-1 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/9.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="text-sm">CRM Integration</div>
                                </div>
                                <div>$10,000</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" className="company-name">CrystalClear Consulting</Link>
                                </div>
                                <div className="text-muted text-xs">14,May 2023 - 11:29PM</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-2 col-span-12" ref={fifthContainerRef} id="negotiation">
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="flex items-center font-semibold justify-between gap-1 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/16.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="text-sm">Media Analytics</div>
                                </div>
                                <div>$9,000</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" className="company-name">GlobalConnect</Link>
                                </div>
                                <div className="text-muted text-xs">18,Mar 2023 - 2:32PM</div>
                            </div>
                        </div>
                    </div>
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="flex items-center font-semibold justify-between gap-1 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded bg-light">
                                            <img src="../../../../assets/images/faces/21.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="text-sm">Lead Nurturing Strategy</div>
                                </div>
                                <div>$4,000</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" className="company-name">AlphaTech Solutions</Link>
                                </div>
                                <div className="text-muted text-xs">16,Jul 2023 - 7:53AM</div>
                            </div>
                        </div>
                    </div>
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="flex items-center font-semibold justify-between gap-1 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            PL
                                        </span>
                                    </div>
                                    <div className="text-sm">Website Maintenance</div>
                                </div>
                                <div>$7,500</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" className="company-name">RedRock Industries</Link>
                                </div>
                                <div className="text-muted text-xs">30,Jul 2023 - 6:30AM</div>
                            </div>
                        </div>
                    </div>
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="flex items-center font-semibold justify-between gap-1 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/2.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="text-sm">Newsletter Campaign</div>
                                </div>
                                <div>$2,500</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" className="company-name">CoreTech Solutions</Link>
                                </div>
                                <div className="text-muted text-xs">12,May 2023 - 10:22AM</div>
                            </div>
                        </div>
                    </div>
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="flex items-center font-semibold justify-between gap-1 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/17.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="text-sm">Graphic Design</div>
                                </div>
                                <div>$5,000</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" className="company-name">TechPro Services</Link>
                                </div>
                                <div className="text-muted text-xs">10,Jul 2023 - 10:15PM</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-2 col-span-12" ref={sixthContainerRef} id="deal-finalized">
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="flex items-center font-semibold justify-between gap-1 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/1.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="text-sm">CRM Training</div>
                                </div>
                                <div>$4,200</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" className="company-name">BlueSky Industries</Link>
                                </div>
                                <div className="text-muted text-xs">15,May 2023 - 8:20AM</div>
                            </div>
                        </div>
                    </div>
                    <div className="box custom-box">
                        <div className="box-body">
                            <div className="flex items-center font-semibold justify-between gap-1 flex-wrap">
                                <div className="flex items-center gap-2">
                                    <div className="lh-1">
                                        <span className="avatar avatar-sm avatar-rounded">
                                            <img src="../../../../assets/images/faces/10.jpg" alt="" />
                                        </span>
                                    </div>
                                    <div className="text-sm">Market Research</div>
                                </div>
                                <div>$10,500</div>
                            </div>
                            <div className="deal-description">
                                <div className="my-1">
                                    <Link href="#!" className="company-name">BrightStar Solutions</Link>
                                </div>
                                <div className="text-muted text-xs">28,Jun 2023 - 9:27PM</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="todo-compose" className="hs-overlay hidden ti-modal">
                <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
                    <div className="ti-modal-content">
                        <div className="ti-modal-header">
                            <h6 className="modal-title text-[1rem] font-semibold text-defaulttextcolor" id="mail-ComposeLabel">New Deal</h6>
                            <button type="button" className="hs-dropdown-toggle !text-[1rem] !font-semibold !text-defaulttextcolor" data-hs-overlay="#todo-compose">
                                <span className="sr-only">Close</span>
                                <i className="ri-close-line"></i>
                            </button>
                        </div>
                        <div className="ti-modal-body px-4">
                            <div className="grid grid-cols-12 gap-4">
                                <div className="xl:col-span-12 col-span-12">
                                    <div className="mb-0 text-center">
                                        <span className="avatar avatar-xxl avatar-rounded">
                                            <img src={Image} alt="" id="profile-img" />
                                            <span className="badge rounded-full bg-primary avatar-badge">
                                                <input type="file" name="photo" data-hs-overlay="#hs-small-modal1" className="absolute w-full h-full opacity-[0]" id="profile-change" />
                                                <i className="fe fe-camera text-[.625rem]"></i>
                                            </span>
                                        </span>
                                        <div id="hs-small-modal1" className="hs-overlay hidden ti-modal">
                                            <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
                                                <div className="ti-modal-content">

                                                    <div className="ti-modal-body">
                                                        <div onClick={() => { toggleImage("fileDisabled"); }}>
                                                            <label htmlFor="file-input" className="sr-only">Choose file</label>
                                                            <input type="file" name="file-input" id="file-input" disabled={fileDisabled} onChange={(ele) => ProfileService.handleChange(ele)} className=" inset-0 block w-full h-full cursor-pointer border my-2 border-gray-200 focus:shadow-sm dark:focus:shadow-white/10 rounded-sm text-sm focus:z-10 focus:outline-0 focus:border-gray-200 dark:focus:border-white/10 dark:border-white/10 dark:text-white/70 file:border-0 file:bg-gray-100 ltr:file:mr-4 rtl:file:ml-4 file:py-3 file:px-4 dark:file:bg-black/20 dark:file:text-white/70" />
                                                        </div>
                                                        <div onClick={() => { toggleImage("UrlDisabled"); }}>
                                                            <input type="text" className="my-auto ti-form-input" name="basic-input" id="basic-input" disabled={UrlDisabled} onChange={(ele) => { setUrlImage(ele.target.value); }} placeholder="Paste the URL" />
                                                        </div><br />
                                                        <button type="button" onClick={() => { putImage(); }} className="py-1 px-3 ti-btn ti-btn-primary text-sm m-0">Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="deal-name" className="form-label">Contact Name</label>
                                    <input type="text" className="form-control" id="deal-name" placeholder="Contact Name" />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="deal-lead-score" className="form-label">Deal Value</label>
                                    <input type="number" className="form-control" id="deal-lead-score" placeholder="Deal Value" />
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="company-name" className="form-label">Company Name</label>
                                    <input type="text" className="form-control" id="company-name" placeholder="Company Name" />
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label className="form-label">Last Contacted</label>
                                    <div className="form-group">
                                        <div className="input-group !flex !flex-nowrap">
                                            <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                            <DatePicker
                                                placeholderText='Choose date and time'
                                                selected={startDate}
                                                onChange={handleDateChange}
                                                timeInputLabel="Time:"
                                                dateFormat="MM/dd/yyyy h:mm aa"
                                                showTimeInput
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ti-modal-footer">
                            <button type="button"
                                className="hs-dropdown-toggle ti-btn  ti-btn-light align-middle"
                                data-hs-overlay="#todo-compose">
                                Cancel
                            </button>
                            <button type="button" className="ti-btn bg-primary text-white !font-medium">Create Deal</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Deals.layout = "Contentlayout"
export default Deals