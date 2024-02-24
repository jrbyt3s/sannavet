import { Accountoptions, Countryoptions, Languageoptions, Mailsettingslist, MaxLimitoptions, Maximumoptions, ProfileService } from '@/shared/data/pages/mail/mailsettingdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { Fragment, useEffect, useState } from 'react';
const Select = dynamic(() => import("react-select"), { ssr: false });
import { useRouter } from "next/router";

const Mailsettings = () => {

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

    return (
        <Fragment>
            <Seo title={"Mail Settings"} />
            <Pageheader currentpage="Mail Settings" activepage="Emails" mainpage="Mail Settings" />
            <div className='container'>
                <div className="grid grid-cols-12 gap-6 mb-[3rem]">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-header sm:flex block !justify-start">
                                <nav aria-label="Tabs" className="md:flex block !justify-start whitespace-nowrap">
                                    <Link href="#!" className="m-1 block w-full hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-3 flex-grow  text-[0.75rem] font-medium rounded-md hover:text-primary active" id="Personal-item" data-hs-tab="#personal-info" aria-controls="#personal-info">
                                        Personal Information
                                    </Link>
                                    <Link href="#!" className="m-1 block w-full hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-3 text-[0.75rem] flex-grow font-medium rounded-md hover:text-primary " id="account-item" data-hs-tab="#account-settings" aria-controls="account-settings">
                                        Account Settings
                                    </Link>
                                    <Link href="#!" className="m-1 block w-full hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-3 text-[0.75rem] flex-grow font-medium rounded-md hover:text-primary " id="email-item" data-hs-tab="#email-settings" aria-controls="email-settings">
                                        Email
                                    </Link>
                                    <Link href="#!" className="m-1 block w-full hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-3 text-[0.75rem] flex-grow font-medium rounded-md hover:text-primary " id="labels-item" data-hs-tab="#labels" aria-controls="labels">
                                        Labels
                                    </Link>
                                    <Link href="#!" className="m-1 block w-full hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-3 text-[0.75rem] flex-grow font-medium rounded-md hover:text-primary " id="notifications-item" data-hs-tab="#notification-settings" aria-controls="notification-settings">
                                        Notifications
                                    </Link>
                                    <Link href="#!" className="m-1 block w-full hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-3 text-[0.75rem] flex-grow font-medium rounded-md hover:text-primary " id="security-item" data-hs-tab="#security" aria-controls="security">
                                        Security
                                    </Link>
                                </nav>
                            </div>
                            <div className="box-body">
                                <div className="tab-content">
                                    <div className="tab-pane show active dark:border-defaultborder/10" id="personal-info" aria-labelledby="Personal-item" >
                                        <div className="sm:p-4 p-0">
                                            <h6 className="font-semibold mb-4 text-[1rem]">
                                                Photo :
                                            </h6>
                                            <div className="mb-6 sm:flex items-center">
                                                <div className="mb-0 me-[3rem]">
                                                    <span className="avatar avatar-xxl avatar-rounded">
                                                        <img src={Image} alt="" id="profile-img" />
                                                        <Link aria-label="anchor" href="#!" className="badge rounded-full bg-primary avatar-badge">
                                                            <input type="file" name="photo" data-hs-overlay="#hs-small-modal" className="absolute w-full h-full opacity-0" id="profile-image" />
                                                            <i className="fe fe-camera !text-[0.65rem]"></i>
                                                        </Link>
                                                    </span>
                                                    <div id="hs-small-modal" className="hs-overlay hidden ti-modal">
                                                        <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
                                                            <div className="ti-modal-content">

                                                                <div className="ti-modal-body">
                                                                    <div onClick={() => { toggleImage("fileDisabled"); }}>
                                                                        <label htmlFor="file-input" className="sr-only ">Choose file</label>
                                                                        <input type="file" name="file-input ti-btn ti-btn-primary-full" id="file-input" disabled={fileDisabled} onChange={(ele) => ProfileService.handleChange(ele)} className=" inset-0 block w-full h-full cursor-pointer border my-2 border-gray-200 focus:shadow-sm dark:focus:shadow-white/10 rounded-sm text-sm focus:z-10 focus:outline-0 focus:border-gray-200 dark:focus:border-white/10 dark:border-white/10 dark:text-white/70 file:border-0 file:bg-gray-100 ltr:file:mr-4 rtl:file:ml-4 file:py-3 file:px-4 dark:file:bg-black/20 dark:file:text-white/70" />
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
                                                <div className="inline-flex">
                                                    <button type="button" className="ti-btn bg-primary text-white !rounded-e-none !font-medium ">Change</button>
                                                    <button type="button" className="ti-btn ti-btn-light !font-medium !rounded-s-none">Remove</button>
                                                </div>
                                            </div>
                                            <h6 className="font-semibold mb-4 text-[1rem]">
                                                Profile :
                                            </h6>
                                            <div className="sm:grid grid-cols-12 gap-6 mb-6">
                                                <div className="xl:col-span-6 col-span-12">
                                                    <label htmlFor="first-name" className="form-label">First Name</label>
                                                    <input type="text" className="form-control w-full !rounded-md" id="first-name" placeholder="First Name" />
                                                </div>
                                                <div className="xl:col-span-6 col-span-12">
                                                    <label htmlFor="last-name" className="form-label">Last Name</label>
                                                    <input type="text" className="form-control w-full !rounded-md" id="last-name" placeholder="Last Name" />
                                                </div>
                                                <div className="xl:col-span-12 col-span-12">
                                                    <label className="form-label">User Name</label>
                                                    <div className="input-group mb-3">
                                                        <span className="input-group-text" id="basic-addon3">user2413@gmail.com</span>
                                                        <input type="text" className="form-control w-full rounded-md" id="basic-url" aria-describedby="basic-addon3" />
                                                    </div>
                                                </div>
                                            </div>
                                            <h6 className="font-semibold mb-4 text-[1rem]">
                                                Personal information :
                                            </h6>
                                            <div className="sm:grid grid-cols-12 gap-6 mb-6">
                                                <div className="xl:col-span-6 col-span-12">
                                                    <label htmlFor="email-address" className="form-label">Email Address :</label>
                                                    <input type="text" className="form-control w-full !rounded-md" id="email-address" placeholder="xyz@gmail.com" />
                                                </div>
                                                <div className="xl:col-span-6 col-span-12">
                                                    <label htmlFor="Contact-Details" className="form-label">Contact Details :</label>
                                                    <input type="text" className="form-control w-full !rounded-md" id="Contact-Details" placeholder="contact details" />
                                                </div>
                                                <div className="xl:col-span-6 col-span-12">
                                                    <label htmlFor="language" className="form-label">Language :</label>
                                                    <Select isMulti name="colors" options={Languageoptions} className=""
                                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Languageoptions[0]]}
                                                    />
                                                </div>
                                                <div className="xl:col-span-6 col-span-12">
                                                    <label className="form-label">Country :</label>
                                                    <Select name="colors" options={Countryoptions} className="w-full !rounded-md"
                                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Countryoptions[0]]}
                                                    />
                                                </div>
                                                <div className="xl:col-span-12 col-span-12">
                                                    <label htmlFor="bio" className="form-label">Bio :</label>
                                                    <textarea
                                                        className="form-control w-full !rounded-md dark:!text-defaulttextcolor/70"
                                                        id="bio"
                                                        rows="5"
                                                        defaultValue="Lorem ipsum dolor sit amet consectetur adipisicing elit. At sit impedit, officiis non minima saepe voluptates a magnam enim sequi porro veniam ea suscipit dolorum vel mollitia voluptate iste nemo!"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane dark:border-defaultborder/10 hidden" id="account-settings" aria-labelledby="account-item" role="tabpanel">
                                        <div className="grid grid-cols-12 gap-4">
                                            <div className="xl:col-span-7 col-span-12">
                                                <div className="box  shadow-none mb-0 border dark:border-defaultborder/10">
                                                    <div className="box-body">
                                                        <div className="sm:flex block items-center mb-6 justify-between">
                                                            <div>
                                                                <p className="text-[0.875rem] mb-1 font-semibold">Two Step Verification</p>
                                                                <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-0">Two step verificatoin is very secured and restricts in happening faulty practices.</p>
                                                            </div>
                                                            <div className="custom-toggle-switch sm:ms-2 ms-0">
                                                                <input id="two-step" name="toggleswitchsize" type="checkbox" defaultChecked />
                                                                <label htmlFor="two-step" className="label-primary mb-1"></label>
                                                            </div>
                                                        </div>
                                                        <div className="sm:flex block items-center mb-6 justify-between">
                                                            <div className="sm:mb-0 mb-2">
                                                                <p className="text-[0.875rem] mb-2 font-semibold">Authentication</p>
                                                                <div className="mb-0">
                                                                    <div className="inline-flex" role="group" aria-label="Basic radio toggle button group">
                                                                        <input type="radio" className="btn-check " name="btnradio" id="btnradio1" defaultChecked />
                                                                        <label className="ti-btn  bg-primary text-white !border-e-0 !rounded-e-none" htmlFor="btnradio1"><i className="ri-lock-unlock-line me-1 align-middle inline-block"></i>Pin</label>
                                                                        <input type="radio" className="btn-check " name="btnradio" id="btnradio2" />
                                                                        <label className="ti-btn ti-btn-outline-primary !rounded-none !border-e-0" htmlFor="btnradio2"><i className="ri-lock-password-line me-1 align-middle inline-block"></i>Password</label>
                                                                        <input type="radio" className="btn-check" name="btnradio" id="btnradio3" />
                                                                        <label className="ti-btn ti-btn-outline-primary !rounded-s-none" htmlFor="btnradio3"><i className="ri-fingerprint-line me-1 align-middle inline-block"></i>Finger Print</label>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="custom-toggle-switch sm:ms-2 ms-0">
                                                                <input id="authentication" name="toggleswitchsize1" type="checkbox" defaultChecked />
                                                                <label htmlFor="authentication" className="label-primary mb-1"></label>
                                                            </div>
                                                        </div>
                                                        <div className="sm:flex block items-center mb-6 justify-between">
                                                            <div>
                                                                <p className="text-[0.875rem] mb-1 font-semibold">Recovery Mail</p>
                                                                <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-0">Incase of forgetting password mails are sent to  heifo@gmail.com</p>
                                                            </div>
                                                            <div className="custom-toggle-switch sm:ms-2 ms-0">
                                                                <input id="recovery-mail" name="toggleswitchsize2" type="checkbox" defaultChecked />
                                                                <label htmlFor="recovery-mail" className="label-primary mb-1"></label>
                                                            </div>
                                                        </div>
                                                        <div className="sm:flex block items-center mb-6 justify-between">
                                                            <div>
                                                                <p className="text-[0.875rem] mb-1 font-semibold">SMS Recovery</p>
                                                                <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-0">SMS are sent to 9102312xx in case of recovery</p>
                                                            </div>
                                                            <div className="custom-toggle-switch sm:ms-2 ms-0">
                                                                <input id="sms-recovery" name="toggleswitchsize3" type="checkbox" defaultChecked />
                                                                <label htmlFor="sms-recovery" className="label-primary mb-1"></label>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-between">
                                                            <div>
                                                                <p className="text-[0.875rem] mb-1 font-semibold">Reset Password</p>
                                                                <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Password should be min of <b className="text-success">8 digits<sup>*</sup></b>,atleast <b className="text-success">One Capital letter<sup>*</sup></b> and <b className="text-success">One Special Character<sup>*</sup></b> included.</p>
                                                                <div className="mb-2">
                                                                    <label htmlFor="current-password" className="form-label">Current Password</label>
                                                                    <input type="text" className="form-control w-full !rounded-md" id="current-password" placeholder="Current Password" />
                                                                </div>
                                                                <div className="mb-2">
                                                                    <label htmlFor="new-password" className="form-label">New Password</label>
                                                                    <input type="text" className="form-control w-full !rounded-md" id="new-password" placeholder="New Password" />
                                                                </div>
                                                                <div className="mb-0">
                                                                    <label htmlFor="confirm-password" className="form-label">Confirm Password</label>
                                                                    <input type="text" className="form-control w-full !rounded-md" id="confirm-password" placeholder="Confirm Password" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-1 col-span-12"></div>
                                            <div className="xl:col-span-4 col-span-12">
                                                <div className="box shadow-none mb-0 border dark:border-defaultborder/10">
                                                    <div className="box-header justify-between items-center sm:flex block">
                                                        <div className="box-title">Registered Devices</div>
                                                        <div className="sm:mt-0">
                                                            <button type="button" className="ti-btn !py-1 !px-2 bg-primary text-white !text-[0.75rem] !font-medium">Signout from all devices</button>
                                                        </div>
                                                    </div>
                                                    <div className="box-body">
                                                        <ul className="list-group">
                                                            {Mailsettingslist.map((idx) => (

                                                                <li className="list-group-item" key={Math.random()}>
                                                                    <div className="sm:flex block items-center">
                                                                        <div className="lh-1 sm:mb-0 mb-2"><i className={`${idx.class} text-[#8c9097] dark:text-white/50`}></i></div>
                                                                        <div className="lh-1 flex-grow">
                                                                            <p className="mb-0">
                                                                                <span className="font-semibold">{idx.text1}</span>
                                                                            </p>
                                                                            <p className="mb-0">
                                                                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">{idx.text2}</span>
                                                                            </p>
                                                                        </div>
                                                                        <div className="hs-dropdown ti-dropdown">
                                                                            <a aria-label="anchor" href="#!" className="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium" aria-expanded="false">
                                                                                <i className="fe fe-more-vertical text-[0.8rem]"></i>
                                                                            </a>
                                                                            <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                                                <li><a className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="#!">Action</a></li>
                                                                                <li><a className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="#!">Another action</a></li>
                                                                                <li><a className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="#!">Something else here</a></li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane dark:border-defaultborder/10 !p-0 hidden" id="email-settings" aria-labelledby="email-item" role="tabpanel">
                                        <ul className="list-group list-group-flush">
                                            <li className="list-group-item !border-t-0 !border-e-0 !border-s-0">
                                                <div className="grid grid-cols-12 gap-4">
                                                    <div className="xl:col-span-3 lg:col-span-3 md:col-span-3 sm:col-span-12 col-span-12">
                                                        <span className="text-[0.875rem] font-semibold mb-0">Menu View :</span>
                                                    </div>
                                                    <div className="xl:col-span-4 col-span-12">
                                                        <div className="form-check !ps-0">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                Default View
                                                            </label>
                                                        </div>
                                                        <div className="form-check !ps-0">
                                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                                                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                Advanced View
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="xl:col-span-5 col-span-12">
                                                        <div className="custom-toggle-switch ltr:sm:float-right rtl:sm:float-left">
                                                            <input id="menu-view" name="toggleswitchsize4" type="checkbox" defaultChecked />
                                                            <label htmlFor="menu-view" className="label-danger mb-1"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item !border-e-0 !border-s-0">
                                                <div className="grid grid-cols-12 gap-4">
                                                    <div className="xl:col-span-3 col-span-12">
                                                        <span className="text-[0.875rem] font-semibold mb-0">Language :</span>
                                                    </div>
                                                    <div className="xl:col-span-4 col-span-12">
                                                        <label htmlFor="mail-language" className="form-label">Languages :</label>
                                                        <Select isMulti name="colors" options={Languageoptions} className="basic-multi-select"
                                                            menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Languageoptions[0], Languageoptions[1]]}
                                                        />
                                                    </div>
                                                    <div className="xl:col-span-5 col-span-12">
                                                        <div className="custom-toggle-switch ltr:sm:float-right rtl:sm:float-left">
                                                            <input id="mail-languages" name="toggleswitchsize5" type="checkbox" />
                                                            <label htmlFor="mail-languages" className="label-danger mb-1"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item !border-e-0 !border-s-0">
                                                <div className="grid grid-cols-12 gap-4">
                                                    <div className="xl:col-span-3 col-span-12">
                                                        <span className="text-[0.875rem] font-semibold mb-0">Images :</span>
                                                    </div>
                                                    <div className="xl:col-span-4 col-span-12">
                                                        <div className="form-check !ps-0">
                                                            <input className="form-check-input" type="radio" name="images-open" id="images-open1" />
                                                            <label className="form-check-label" htmlFor="images-open1">
                                                                Always Open Images
                                                            </label>
                                                        </div>
                                                        <div className="form-check !ps-0">
                                                            <input className="form-check-input" type="radio" name="images-open" id="images-hide2" defaultChecked />
                                                            <label className="form-check-label" htmlFor="images-hide2">
                                                                Ask For Permission
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="xl:col-span-5 col-span-12">
                                                        <div className="custom-toggle-switch ltr:sm:float-right rtl:sm:float-left">
                                                            <input id="mails-images" name="toggleswitchsize6" type="checkbox" />
                                                            <label htmlFor="mails-images" className="label-danger mb-1"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item !border-e-0 !border-s-0">
                                                <div className="grid grid-cols-12 gap-4">
                                                    <div className="xl:col-span-3 col-span-12">
                                                        <span className="text-[0.875rem] font-semibold mb-0">Keyboard Shortcuts :</span>
                                                    </div>
                                                    <div className="xl:col-span-4 col-span-12">
                                                        <div className="form-check !ps-0">
                                                            <input className="form-check-input" type="radio" name="keyboard-enable" id="keyboard-enable1" />
                                                            <label className="form-check-label" htmlFor="keyboard-enable1">
                                                                Keyboard Shortcuts Enable
                                                            </label>
                                                        </div>
                                                        <div className="form-check !ps-0">
                                                            <input className="form-check-input" type="radio" name="keyboard-enable" id="keyboard-disable2" defaultChecked />
                                                            <label className="form-check-label" htmlFor="keyboard-disable2">
                                                                Keyboard Shortcuts Disable
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="xl:col-span-5 col-span-12">
                                                        <div className="custom-toggle-switch ltr:sm:float-right rtl:sm:float-left">
                                                            <input id="keyboard-shortcuts" name="toggleswitchsize7" type="checkbox" />
                                                            <label htmlFor="keyboard-shortcuts" className="label-danger mb-1"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item !border-e-0 !border-s-0">
                                                <div className="grid grid-cols-12 gap-4">
                                                    <div className="xl:col-span-3 col-span-12">
                                                        <span className="text-[0.875rem] font-semibold mb-0">Notifications :</span>
                                                    </div>
                                                    <div className="xl:col-span-4 col-span-12">
                                                        <div className="form-check !ps-0">
                                                            <input className="form-check-input" type="checkbox" value="" id="desktop-notifications" defaultChecked />
                                                            <label className="form-check-label" htmlFor="desktop-notifications">
                                                                Desktop Notifications
                                                            </label>
                                                        </div>
                                                        <div className="form-check !ps-0">
                                                            <input className="form-check-input" type="checkbox" value="" id="mobile-notifications" />
                                                            <label className="form-check-label" htmlFor="mobile-notifications">
                                                                Mobile Notifications
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="xl:col-span-5 col-span-12">
                                                        <div className="ltr:sm:float-right rtl:sm:float-left">
                                                            <Link href="#!" className="ti-btn ti-btn-outline-success !py-1 !px-2 !text-[0.75rem]">Learn-more</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item !border-e-0 !border-s-0">
                                                <div className="grid grid-cols-12 gap-4">
                                                    <div className="xl:col-span-3 col-span-12">
                                                        <span className="text-[0.875rem] font-semibold mb-0">Maximum Mails Per Page :</span>
                                                    </div>
                                                    <div className="xl:col-span-4 col-span-12">
                                                        <Select name="colors" options={Maximumoptions} className="w-full !rounded-md"
                                                            menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Maximumoptions[0]]}
                                                        />
                                                    </div>
                                                    <div className="xl:col-span-5 col-span-12">
                                                        <div className="custom-toggle-switch ltr:sm:float-right rtl:sm:float-left">
                                                            <input id="mails-per-page" name="toggleswitchsize8" type="checkbox" />
                                                            <label htmlFor="mails-per-page" className="label-danger mb-1"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item !border-e-0 !border-s-0">
                                                <div className="grid grid-cols-12 gap-4">
                                                    <div className="xl:col-span-3 col-span-12">
                                                        <span className="text-[0.875rem] font-semibold mb-0">Mail Composer :</span>
                                                    </div>
                                                    <div className="xl:col-span-4 col-span-12">
                                                        <div className="form-check !ps-0">
                                                            <input className="form-check-input" type="radio" name="mail-composeron" id="mail-composeron1" />
                                                            <label className="form-check-label" htmlFor="mail-composeron1">
                                                                Mail Composer On
                                                            </label>
                                                        </div>
                                                        <div className="form-check !ps-0">
                                                            <input className="form-check-input" type="radio" name="mail-composeron" id="mail-composeroff2" defaultChecked />
                                                            <label className="form-check-label" htmlFor="mail-composeroff2">
                                                                Mail Composer Off
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="xl:col-span-5 col-span-12">
                                                        <div className="custom-toggle-switch ltr:sm:float-right rtl:sm:float-left">
                                                            <input id="mail-composer" name="toggleswitchsize9" type="checkbox" />
                                                            <label htmlFor="mail-composer" className="label-danger mb-1"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item !border-e-0 !border-s-0">
                                                <div className="grid grid-cols-12 gap-4">
                                                    <div className="xl:col-span-3 col-span-12">
                                                        <span className="text-[0.875rem] font-semibold mb-0">Auto Correct :</span>
                                                    </div>
                                                    <div className="xl:col-span-4 col-span-12">
                                                        <div className="form-check !ps-0">
                                                            <input className="form-check-input" type="radio" name="auto-correcton" id="auto-correcton1" />
                                                            <label className="form-check-label" htmlFor="auto-correcton1">
                                                                Auto Correct On
                                                            </label>
                                                        </div>
                                                        <div className="form-check !ps-0">
                                                            <input className="form-check-input" type="radio" name="auto-correcton" id="auto-correctoff2" defaultChecked />
                                                            <label className="form-check-label" htmlFor="auto-correctoff2">
                                                                Auto Correct Off
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="xl:col-span-5 col-span-12">
                                                        <div className="custom-toggle-switch ltr:sm:float-right rtl:sm:float-left">
                                                            <input id="auto-correct" name="toggleswitchsize10" type="checkbox" />
                                                            <label htmlFor="auto-correct" className="label-danger mb-1"></label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item !border-e-0 !border-s-0 !border-b-0">
                                                <div className="grid grid-cols-12 gap-4">
                                                    <div className="xl:col-span-3 col-span-12">
                                                        <span className="text-[0.875rem] font-semibold mb-0">Mail Send Action :</span>
                                                    </div>
                                                    <div className="xl:col-span-4 col-span-12">
                                                        <div className="form-check !ps-0">
                                                            <input className="form-check-input" type="checkbox" value="" id="on-keyboard" defaultChecked />
                                                            <label className="form-check-label" htmlFor="on-keyboard">
                                                                On Keyboard Action
                                                            </label>
                                                        </div>
                                                        <div className="form-check !ps-0">
                                                            <input className="form-check-input" type="checkbox" value="" id="on-buttonclick" />
                                                            <label className="form-check-label" htmlFor="on-buttonclick">
                                                                On Button Click
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="xl:col-span-5 col-span-12">
                                                        <div className="ltr:sm:float-right rtl:sm:float-left">
                                                            <Link href="#!" className="ti-btn ti-btn-outline-success !py-1 !px-2 !text-[0.75rem]">Learn-more</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-pane dark:border-defaultborder/10 hidden" id="labels" aria-labelledby="labels-item" role="tabpanel">
                                        <p className="text-[0.875rem] font-semibold mb-3">Mail Labels :</p>
                                        <div className="grid grid-cols-12 gap-4">
                                            <div className="xl:col-span-3 col-span-12">
                                                <div className="box !shadow-none border dark:border-defaultborder/10">
                                                    <div className="box-body flex items-center justify-between flex-wrap gap-2">
                                                        <div className="">
                                                            <span className="font-semibold">All Mails</span>
                                                        </div>
                                                        <div>
                                                            <div className="inline-flex" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="label-allmails" id="all-mails-enable" defaultChecked />
                                                                <label className="ti-btn !text-[0.75rem] !font-medium ti-btn bg-primary text-white !rounded-e-none !border-e-0" htmlFor="all-mails-enable">Enable</label>
                                                                <input type="radio" className="btn-check" name="label-allmails" id="all-mails-disable" />
                                                                <label className="ti-btn !text-[0.75rem] !font-medium btn-sm ti-btn-outline-primary !rounded-s-none" htmlFor="all-mails-disable">Disable</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-3 col-span-12">
                                                <div className="box !shadow-none border dark:border-defaultborder/10">
                                                    <div className="box-body flex items-center justify-between flex-wrap gap-2">
                                                        <div className="">
                                                            <span className="font-semibold">Inbox</span>
                                                        </div>
                                                        <div>
                                                            <div className="inline-flex" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="label-inbox" id="inbox-enable" defaultChecked />
                                                                <label className="ti-btn !text-[0.75rem] !font-medium ti-btn bg-primary text-white !rounded-e-none !border-e-0" htmlFor="inbox-enable">Enable</label>
                                                                <input type="radio" className="btn-check" name="label-inbox" id="inbox-disable" />
                                                                <label className="ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary !rounded-s-none" htmlFor="inbox-disable">Disable</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-3 col-span-12">
                                                <div className="box !shadow-none border dark:border-defaultborder/10">
                                                    <div className="box-body flex items-center justify-between flex-wrap gap-2">
                                                        <div className="">
                                                            <span className="font-semibold">Sent</span>
                                                        </div>
                                                        <div>
                                                            <div className="inline-flex" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="label-sent" id="sent-enable" defaultChecked />
                                                                <label className="ti-btn !text-[0.75rem] !font-medium ti-btn bg-primary text-white !rounded-e-none !border-e-0" htmlFor="sent-enable">Enable</label>
                                                                <input type="radio" className="btn-check" name="label-sent" id="sent-disable" />
                                                                <label className="ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary !rounded-s-none" htmlFor="sent-disable">Disable</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-3 col-span-12">
                                                <div className="box !shadow-none border dark:border-defaultborder/10">
                                                    <div className="box-body flex items-center justify-between flex-wrap gap-2">
                                                        <div className="">
                                                            <span className="font-semibold">Drafts</span>
                                                        </div>
                                                        <div>
                                                            <div className="inline-flex" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="label-drafts" id="drafts-enable" defaultChecked />
                                                                <label className="ti-btn !text-[0.75rem] !font-medium ti-btn bg-primary text-white !rounded-e-none !border-e-0" htmlFor="drafts-enable">Enable</label>
                                                                <input type="radio" className="btn-check" name="label-drafts" id="drafts-disable" />
                                                                <label className="ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary !rounded-s-none" htmlFor="drafts-disable">Disable</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-3 col-span-12">
                                                <div className="box !shadow-none border dark:border-defaultborder/10">
                                                    <div className="box-body flex items-center justify-between flex-wrap gap-2">
                                                        <div className="">
                                                            <span className="font-semibold">Spam</span>
                                                        </div>
                                                        <div>
                                                            <div className="inline-flex" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="label-spam" id="spam-enable" defaultChecked />
                                                                <label className="ti-btn !text-[0.75rem] !font-medium ti-btn bg-primary text-white !rounded-e-none !border-e-0" htmlFor="spam-enable">Enable</label>
                                                                <input type="radio" className="btn-check" name="label-spam" id="spam-disable" />
                                                                <label className="ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary !rounded-s-none" htmlFor="spam-disable">Disable</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-3 col-span-12">
                                                <div className="box !shadow-none border dark:border-defaultborder/10">
                                                    <div className="box-body flex items-center justify-between flex-wrap gap-2">
                                                        <div className="">
                                                            <span className="font-semibold">Important</span>
                                                        </div>
                                                        <div>
                                                            <div className="inline-flex" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="label-important" id="important-enable" defaultChecked />
                                                                <label className="ti-btn !text-[0.75rem] !font-medium ti-btn bg-primary text-white !rounded-e-none !border-e-0" htmlFor="important-enable">Enable</label>
                                                                <input type="radio" className="btn-check" name="label-important" id="important-disable" />
                                                                <label className="ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary !rounded-s-none" htmlFor="important-disable">Disable</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-3 col-span-12">
                                                <div className="box !shadow-none border dark:border-defaultborder/10">
                                                    <div className="box-body flex items-center justify-between flex-wrap gap-2">
                                                        <div className="">
                                                            <span className="font-semibold">Trash</span>
                                                        </div>
                                                        <div>
                                                            <div className="inline-flex" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="label-trash" id="trash-enable" defaultChecked />
                                                                <label className="ti-btn !text-[0.75rem] !font-medium  ti-btn bg-primary text-white !rounded-e-none !border-e-0" htmlFor="trash-enable">Enable</label>
                                                                <input type="radio" className="btn-check" name="label-trash" id="trash-disable" />
                                                                <label className="ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary !rounded-s-none" htmlFor="trash-disable">Disable</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-3 col-span-12">
                                                <div className="box !shadow-none border dark:border-defaultborder/10">
                                                    <div className="box-body flex items-center justify-between flex-wrap gap-2">
                                                        <div className="">
                                                            <span className="font-semibold">Archive</span>
                                                        </div>
                                                        <div>
                                                            <div className="inline-flex" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="label-archive" id="archive-enable" defaultChecked />
                                                                <label className="ti-btn !text-[0.75rem] !font-medium  ti-btn bg-primary text-white !rounded-e-none !border-e-0" htmlFor="archive-enable">Enable</label>
                                                                <input type="radio" className="btn-check" name="label-archive" id="archive-disable" />
                                                                <label className="ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary !rounded-s-none" htmlFor="archive-disable">Disable</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-3 col-span-12">
                                                <div className="box !shadow-none border dark:border-defaultborder/10">
                                                    <div className="box-body flex items-center justify-between flex-wrap gap-2">
                                                        <div className="">
                                                            <span className="font-semibold">Starred</span>
                                                        </div>
                                                        <div>
                                                            <div className="inline-flex" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="label-starred" id="starred-enable" defaultChecked />
                                                                <label className="ti-btn !text-[0.75rem] !font-medium  ti-btn bg-primary text-white !rounded-e-none !border-e-0" htmlFor="starred-enable">Enable</label>
                                                                <input type="radio" className="btn-check" name="label-starred" id="starred-disable" />
                                                                <label className="ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary !rounded-s-none" htmlFor="starred-disable">Disable</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-[0.875rem] font-semibold mb-3">Settings :</p>
                                        <div className="grid grid-cols-12 gap-2">
                                            <div className="xl:col-span-3 col-span-12">
                                                <div className="box !shadow-none border dark:border-defaultborder/10">
                                                    <div className="box-body flex items-center justify-between flex-wrap gap-2">
                                                        <div className="">
                                                            <span className="font-semibold">Settings</span>
                                                        </div>
                                                        <div>
                                                            <div className="inline-flex" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="label-settings" id="settings-enable" defaultChecked />
                                                                <label className="ti-btn !text-[0.75rem] !font-medium  ti-btn bg-primary text-white !rounded-e-none !border-e-0" htmlFor="settings-enable">Enable</label>
                                                                <input type="radio" className="btn-check" name="label-settings" id="settings-disable" />
                                                                <label className="ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary !rounded-s-none" htmlFor="settings-disable">Disable</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-[0.875rem] font-semibold mb-3">Custom Labels :</p>
                                        <div className="grid grid-cols-12 gap-4">
                                            <div className="xl:col-span-3 col-span-12">
                                                <div className="box !shadow-none border dark:border-defaultborder/10">
                                                    <div className="box-body flex items-center justify-between flex-wrap gap-2">
                                                        <div className="">
                                                            <span className="font-semibold">Mail</span>
                                                        </div>
                                                        <div>
                                                            <div className="inline-flex" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="label-custom-mail" id="custom-mail-enable" defaultChecked />
                                                                <label className="ti-btn !text-[0.75rem] !font-medium  ti-btn bg-primary text-white !rounded-e-none !border-e-0" htmlFor="custom-mail-enable">Enable</label>
                                                                <input type="radio" className="btn-check" name="label-custom-mail" id="custom-mail-disable" />
                                                                <label className="ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary !rounded-s-none" htmlFor="custom-mail-disable">Disable</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-3 col-span-12">
                                                <div className="box !shadow-none border dark:border-defaultborder/10">
                                                    <div className="box-body flex items-center justify-between flex-wrap gap-2">
                                                        <div className="">
                                                            <span className="font-semibold">Home</span>
                                                        </div>
                                                        <div>
                                                            <div className="inline-flex" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="label-home" id="home-enable" defaultChecked />
                                                                <label className="ti-btn !text-[0.75rem] !font-medium  ti-btn bg-primary text-white !rounded-e-none !border-e-0" htmlFor="home-enable">Enable</label>
                                                                <input type="radio" className="btn-check" name="label-home" id="home-disable" />
                                                                <label className="ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary !rounded-s-none" htmlFor="home-disable">Disable</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-3 col-span-12">
                                                <div className="box !shadow-none border dark:border-defaultborder/10">
                                                    <div className="box-body flex items-center justify-between flex-wrap gap-2">
                                                        <div className="">
                                                            <span className="font-semibold">Work</span>
                                                        </div>
                                                        <div>
                                                            <div className="inline-flex" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="label-work" id="work-enable" defaultChecked />
                                                                <label className="ti-btn !text-[0.75rem] !font-medium  ti-btn bg-primary text-white !rounded-e-none !border-e-0" htmlFor="work-enable">Enable</label>
                                                                <input type="radio" className="btn-check" name="label-work" id="work-disable" />
                                                                <label className="ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary !rounded-s-none" htmlFor="work-disable">Disable</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-3 col-span-12">
                                                <div className="box !shadow-none border dark:border-defaultborder/10">
                                                    <div className="box-body flex items-center justify-between flex-wrap gap-2">
                                                        <div className="">
                                                            <span className="font-semibold">Friends</span>
                                                        </div>
                                                        <div>
                                                            <div className="inline-flex" role="group" aria-label="Basic radio toggle button group">
                                                                <input type="radio" className="btn-check" name="label-friends" id="friends-enable" defaultChecked />
                                                                <label className="ti-btn !text-[0.75rem] !font-medium  ti-btn bg-primary text-white !rounded-e-none !border-e-0" htmlFor="friends-enable">Enable</label>
                                                                <input type="radio" className="btn-check" name="label-friends" id="friends-disable" />
                                                                <label className="ti-btn !text-[0.75rem] !font-medium ti-btn-outline-primary !rounded-s-none" htmlFor="friends-disable">Disable</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane !p-0 !border-0 dark:border-defaultborder/10 hidden" id="notification-settings" aria-labelledby="notifications-item" role="tabpanel">
                                        <ul className="list-group list-group-flush list-none !rounded-md">
                                            <li className="list-group-item">
                                                <div className="grid grid-cols-12 xl:gap-x-[3rem] gap-y-4">
                                                    <div className="xl:col-span-5 col-span-12">
                                                        <p className="text-[1rem] mb-1 font-semibold">Email Notifications</p>
                                                        <p className="text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50">Email notifications are the notifications you will receeive when you are offline, you can customize them by enabling or disabling them.</p>
                                                    </div>
                                                    <div className="xl:col-span-7 col-span-12">
                                                        <div className="flex items-center justify-between sm:mt-0 mt-4">
                                                            <div className="mail-notification-settings">
                                                                <p className="text-[0.875rem] mb-1 font-semibold">Updates &amp; Features</p>
                                                                <p className="text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50">Notifications about new updates and their features.</p>
                                                            </div>
                                                            <div>
                                                                <div className="custom-toggle-switch ltr:sm:float-right rtl:sm:float-left">
                                                                    <input id="update-features" name="toggleswitchsize11" type="checkbox" defaultChecked />
                                                                    <label htmlFor="update-features" className="label-success mb-1"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-between mt-4">
                                                            <div className="mail-notification-settings">
                                                                <p className="text-[0.875rem] mb-1 font-semibold">Early Access</p>
                                                                <p className="text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50">Users are selected for beta testing of new update,notifications relating or participate in any of paid product promotion.</p>
                                                            </div>
                                                            <div>
                                                                <div className="custom-toggle-switch ltr:sm:float-right rtl:sm:float-left">
                                                                    <input id="early-access" name="toggleswitchsize12" type="checkbox" />
                                                                    <label htmlFor="early-access" className="label-success mb-1"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-between mt-4">
                                                            <div className="mail-notification-settings">
                                                                <p className="text-[0.875rem] mb-1 font-semibold">Email Shortcuts</p>
                                                                <p className="text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50">Shortcut notifications for email.</p>
                                                            </div>
                                                            <div>
                                                                <div className="custom-toggle-switch ltr:sm:float-right rtl:sm:float-left">
                                                                    <input id="email-shortcut" name="toggleswitchsize13" type="checkbox" defaultChecked />
                                                                    <label htmlFor="email-shortcut" className="label-success mb-1"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-between mt-4">
                                                            <div className="mail-notification-settings">
                                                                <p className="text-[0.875rem] mb-1 font-semibold">New Mails</p>
                                                                <p className="text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50">Notifications related to new mails received.</p>
                                                            </div>
                                                            <div>
                                                                <div className="custom-toggle-switch ltr:sm:float-right rtl:sm:float-left">
                                                                    <input id="new-mails" name="toggleswitchsize14" type="checkbox" defaultChecked />
                                                                    <label htmlFor="new-mails" className="label-success mb-1"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-between mt-4">
                                                            <div className="mail-notification-settings">
                                                                <p className="text-[0.875rem] mb-1 font-semibold">Mail Chat Messages</p>
                                                                <p className="text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50">Any of new messages are received will be updated through notifications.</p>
                                                            </div>
                                                            <div>
                                                                <div className="custom-toggle-switch ltr:sm:float-right rtl:sm:float-left">
                                                                    <input id="mail-chat-messages" name="toggleswitchsize15" type="checkbox" defaultChecked />
                                                                    <label htmlFor="mail-chat-messages" className="label-success mb-1"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item">
                                                <div className="grid grid-cols-12 xl:gap-x-[3rem] gap-y-4">
                                                    <div className="xl:col-span-5 col-span-12">
                                                        <p className="text-[1rem] mb-1 font-semibold">Push Notifications</p>
                                                        <p className="text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50">Push notifications are recieved when you are online, you can customize them by enabling or disabling them.</p>
                                                    </div>
                                                    <div className="xl:col-span-7 col-span-12">
                                                        <div className="flex items-center justify-between sm:mt-0 mt-4">
                                                            <div className="mail-notification-settings">
                                                                <p className="text-[0.875rem] mb-1 font-semibold">New Mails</p>
                                                                <p className="text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50">Notifications related to new mails received.</p>
                                                            </div>
                                                            <div>
                                                                <div className="custom-toggle-switch ltr:sm:float-right rtl:sm:float-left">
                                                                    <input id="push-new-mails" name="toggleswitchsize16" type="checkbox" defaultChecked />
                                                                    <label htmlFor="push-new-mails" className="label-success mb-1"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-between mt-4">
                                                            <div className="mail-notification-settings">
                                                                <p className="text-[0.875rem] mb-1 font-semibold">Mail Chat Messages</p>
                                                                <p className="text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50">Any of new messages are received will be updated through notifications.</p>
                                                            </div>
                                                            <div>
                                                                <div className="custom-toggle-switch ltr:sm:float-right rtl:sm:float-left">
                                                                    <input id="push-mail-chat-messages" name="toggleswitchsize17" type="checkbox" defaultChecked />
                                                                    <label htmlFor="push-mail-chat-messages" className="label-success mb-1"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-between mt-4">
                                                            <div className="mail-notification-settings">
                                                                <p className="text-[0.875rem] mb-1 font-semibold">Mail Extensions</p>
                                                                <p className="text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50">Notifications related to the extensions received by new emails and thier propertied also been displayed.</p>
                                                            </div>
                                                            <div>
                                                                <div className="custom-toggle-switch ltr:sm:float-right rtl:sm:float-left">
                                                                    <input id="mail-extensions" name="toggleswitchsize18" type="checkbox" />
                                                                    <label htmlFor="mail-extensions" className="label-success mb-1"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="tab-pane  dark:border-defaultborder/10 !p-0 hidden" id="security" aria-labelledby="security-item" role="tabpanel">
                                        <ul className="list-group !border-0 list-group-flush list-unstyled">
                                            <li className="list-group-item !border !border-defaultborder dark:!border-defaultborder/10 !border-t-0 !border-e-0 !border-s-0">
                                                <div className="grid grid-cols-12 xl:gap-x-[3rem] gap-y-4">
                                                    <div className="xl:col-span-4 col-span-12">
                                                        <p className="text-[1rem] mb-1 font-semibold">Logging In</p>
                                                        <p className="text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50">Security settings related to logging into our email account and taking down account if any mischevious action happended.</p>
                                                    </div>
                                                    <div className="xl:col-span-8 col-span-12">
                                                        <div className="sm:flex block items-center justify-between sm:mt-0 mt-4">
                                                            <div className="mail-security-settings">
                                                                <p className="text-[0.875rem] mb-1 font-semibold">Max Limit for login attempts</p>
                                                                <p className="text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50">Account will freeze for 24hrs while attempt to login with wrong credentials for selected number of times</p>
                                                            </div>
                                                            <div>
                                                                <Select name="colors" options={MaxLimitoptions} className="w-full !rounded-md"
                                                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[MaxLimitoptions[0]]}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className="sm:flex block items-center justify-between mt-4">
                                                            <div className="mail-security-settings">
                                                                <p className="text-[0.875rem] mb-1 font-semibold">Account Freeze time management</p>
                                                                <p className="text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50">You can change the time for the account freeze when attempts for </p>
                                                            </div>
                                                            <div>
                                                                <Select name="colors" options={Accountoptions} className="w-full !rounded-md"
                                                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Accountoptions[0]]}
                                                                />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item !border !border-defaultborder dark:!border-defaultborder/10 !border-t-0 !border-e-0 !border-s-0">
                                                <div className="grid grid-cols-12 xl:gap-x-[3rem] gap-y-4">
                                                    <div className="xl:col-span-4 col-span-12">
                                                        <p className="text-base mb-1 font-semibold">Password Requirements</p>
                                                        <p className="text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50">Security settings related to password strength.</p>
                                                    </div>
                                                    <div className="xl:col-span-8 col-span-12">
                                                        <div className="sm:flex block items-center justify-between sm:mt-0 mt-4">
                                                            <div className="mail-security-settings">
                                                                <p className="text-[0.875rem] mb-1 font-semibold">Minimun number of characters in the password</p>
                                                                <p className="text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50">There should be a minimum number of characters for a password to be validated that shouls be set here.</p>
                                                            </div>
                                                            <div>
                                                                <input type="text" className="form-control !rounded-md" defaultValue="8" />
                                                            </div>
                                                        </div>
                                                        <div className="sm:flex block items-center justify-between mt-4">
                                                            <div>
                                                                <p className="text-[0.875rem] mb-1 font-semibold">Contain A Number</p>
                                                                <p className="text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50">Password should contain a number.</p>
                                                            </div>
                                                            <div>
                                                                <div className="custom-toggle-switch ltr:sm:float-right rtl:sm:float-left">
                                                                    <input id="password-number" name="toggleswitchsize19" type="checkbox" />
                                                                    <label htmlFor="password-number" className="label-success mb-1"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sm:flex block items-center justify-between mt-4">
                                                            <div>
                                                                <p className="text-[0.875rem] mb-1 font-semibold">Contain A Special Character</p>
                                                                <p className="text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50">Password should contain a special Character.</p>
                                                            </div>
                                                            <div>
                                                                <div className="custom-toggle-switch ltr:sm:float-right rtl:sm:float-left">
                                                                    <input id="password-special-character" name="toggleswitchsize20" type="checkbox" defaultChecked />
                                                                    <label htmlFor="password-special-character" className="label-success mb-1"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sm:flex block items-center justify-between mt-4">
                                                            <div>
                                                                <p className="text-[0.875rem] mb-1 font-semibold">Atleast One Capital Letter</p>
                                                                <p className="text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50">Password should contain atleast one capital letter.</p>
                                                            </div>
                                                            <div>
                                                                <div className="custom-toggle-switch ltr:sm:float-right rtl:sm:float-left">
                                                                    <input id="password-capital" name="toggleswitchsize21" type="checkbox" defaultChecked />
                                                                    <label htmlFor="password-capital" className="label-success mb-1"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="sm:flex block items-center justify-between mt-4">
                                                            <div>
                                                                <p className="text-[0.875rem] mb-1 font-semibold">Maximun Password Length</p>
                                                                <p className="text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50">Maximum password lenth should be selected here.</p>
                                                            </div>
                                                            <div>
                                                                <input type="text" className="form-control !rounded-md" defaultValue="16" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                            <li className="list-group-item !border-0">
                                                <div className="grid grid-cols-12 xl:gap-x-[3rem] gap-y-4">
                                                    <div className="xl:col-span-4 col-span-12">
                                                        <p className="text-[1rem] mb-1 font-semibold">Unknown Chats</p>
                                                        <p className="text-[0.75rem] mb-0 text-[#8c9097] dark:text-white/50">Security settings related to unknown chats.</p>
                                                    </div>
                                                    <div className="xl:col-span-8 col-span-12">
                                                        <div>
                                                            <div className="form-check !ps-0">
                                                                <input className="form-check-input" type="radio" name="unknown-messages-show" id="unknown-messages-show1" />
                                                                <label className="form-check-label" htmlFor="unknown-messages-show1">
                                                                    Show
                                                                </label>
                                                            </div>
                                                            <div className="form-check !ps-0">
                                                                <input className="form-check-input" type="radio" name="unknown-messages-show" id="unknown-messages-hide2" defaultChecked />
                                                                <label className="form-check-label" htmlFor="unknown-messages-hide2">
                                                                    Hide
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="ltr:float-right rtl:float-left">
                                    <button type="button" className="ti-btn ti-btn-light m-1">
                                        Restore Defaults
                                    </button>
                                    <button type="button" className="ti-btn bg-primary text-white m-1">
                                        Save Changes
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Mailsettings.layout = "Contentlayout"

export default Mailsettings