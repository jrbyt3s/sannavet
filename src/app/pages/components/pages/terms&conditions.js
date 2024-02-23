import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link';
import React, { Fragment, useEffect, useState } from 'react';
import SimpleBar from 'simplebar-react';

const Termsconditions = () => {


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

    return (
        <Fragment>
            <Seo title={"Terms & Conditions"} />
            <Pageheader currentpage="Terms & Conditions" activepage="Pages" mainpage="Terms & Conditions" />
            <div className="container">
                <div className="grid grid-cols-12 !mx-auto text-defaultsize">
                    <div className="xl:col-span-2 col-span-12"></div>
                    <div className="xl:col-span-8 col-span-12">
                        <div className={`box ${isFullscreen ? "box-fullscreen" : ""}`}>
                            <div className="box-body !p-0">
                                <div className="p-4 terms-heading-cover sm:flex items-center text-white bg-primary h5  rounded-t-md font-semibold mb-0">
                                    <span className="avatar avatar-md me-4">
                                        <img src="../../../assets/images/media/media-67.png" alt="" />
                                    </span>
                                    <span>YNEX - Terms &amp; Conditions </span>
                                    <Link aria-label="anchor" href="#!" className="ms-auto text-white terms-fullscreen" onClick={handleFullscreenClick} >
                                        <i className="ri-fullscreen-line"></i>
                                    </Link>
                                </div>
                                <SimpleBar>
                                    <div className="p-6 text-muted terms-conditions" id="terms-scroll">
                                        <div className="mb-[3rem]">
                                            <p className="mb-4 opacity-[0.7]">
                                                <span className="font-bold text-default opacity-[0.8]">If you stay in the USA </span>the ynex <Link className="text-primary" href="#!"><u>Terms and Conditions</u></Link> consists of below rules and <Link className="text-primary" href="#!"><u>User Agreements</u></Link> consists of below policies <Link className="text-primary" href="#!"><u>Ynex Rules &amp; Privacy Policies</u></Link> incorporated with the below conditions.
                                            </p>
                                            <p className="mb-0 opacity-[0.7]">
                                                <span className="font-bold text-default opacity-[0.8]">If you stay any where in the world other than USA </span>the ynex <Link className="text-primary" href="#!"><u>Terms and Conditions</u></Link> consists of below rules and <Link className="text-primary" href="#!"><u>User Agreements</u></Link> consists of below policies <Link className="text-primary" href="#!"><u>Ynex Rules &amp; Privacy Policies</u></Link> incorporated with the below conditions.
                                            </p>
                                        </div>
                                        <h6 className="font-bold pb-3 text-default opacity-[0.7]"><span className="terms-heading">Terms &amp; Services :</span></h6>
                                        <div className="mb-4">
                                            <p className="font-semibold text-muted mb-2 text-[.875rem] opacity-[0.7]">1 - Lorem ipsum dolor sit amet.</p>
                                            <p className="opacity-[0.7] mb-0">
                                                Note that you'll sometimes see this agreement referred to as a Terms of Use, User Agreement or Terms of Service agreement. These terms are interchangeable and refer to the same type of agreement
                                            </p>
                                        </div>
                                        <div className="mb-4">
                                            <p className="font-semibold text-muted mb-2 text-[.875rem] opacity-[0.7]">2 - Consectetur adipisicing elit.</p>
                                            <p className="opacity-[0.7] mb-2">
                                                While they are not legally required, terms and conditions set the stage for any successful business relationship. By making it clear and putting these guidelines in writing, business owners can avoid misunderstandings with their customers.
                                            </p>
                                            <p className="opacity-[0.7]">
                                                It also allows you to decide what you consider acceptable and which type of conduct could lead you to terminate a relationship with a user.
                                            </p>
                                        </div>
                                        <div className="mb-4">
                                            <p className="font-semibold text-muted mb-2 text-[.875rem] opacity-[0.7]">3 - There are many variations.</p>
                                            <p className="opacity-[0.7]">
                                                Limitation of liability disclaimers is one of the main reasons why business owners take the time to include terms and conditions on their websites. When reasonable and drafted adequately, such clauses can help protect your business against claims and lawsuits and limit the amount of money that you would have to pay in damages.
                                            </p>
                                        </div>
                                        <div className="mb-4">
                                            <p className="font-semibold text-muted mb-2 text-[.875rem] opacity-[0.7]">4 - If you allow your users to share.</p>
                                            <p className="opacity-[0.7] mb-2">
                                                If you allow your users to share comments or photos on your website or leave reviews of the products that you sell, you will want to have a section in your terms that governs their conduct and sets out what is acceptable and what isn’t.
                                            </p>
                                            <p className="opacity-[0.7] mb-2">
                                                In this clause, you could reserve the right to monitor the user-generated content shared on your website and remove anything that goes against your guidelines. You could expressly ask your users not to post anything that contains obscene language or any material that could be considered harmful or violent or infringes on someone else’s copyright.
                                            </p>
                                        </div>
                                        <div className="mb-0">
                                            <p className="font-semibold text-muted mb-2 text-[.875rem] opacity-[0.7]">5 - You could also make it clear.</p>
                                            <p className="opacity-[0.7] mb-2">
                                                You could also make it clear that you reserve the right to suspend or delete the accounts of repeat infringers. This will help you make your website a safe space where people can feel comfortable sharing their opinions, which is especially important if you operate a news site, blog, or forum.
                                            </p>
                                            <p className="opacity-[0.7] mb-0">
                                                From a business point of view, you could reserve the right to use the submitted content for marketing purposes which a lot of big box stores and eCommerce retailers do in order to promote products that get rave reviews. It’s important for your customers to know that you plan on doing so, otherwise they could be surprised to see their words or photo used in a commercial!
                                            </p>
                                        </div>
                                    </div>
                                </SimpleBar>
                            </div>
                            <div className="box-footer md:flex block items-center justify-between shadow-lg !border-t-0">
                                <div>
                                    <div className="!ps-0 form-check !flex">
                                        <input className="form-check-input" type="checkbox" value="" id="privacy-policy" />
                                        <label className="ps-3 form-check-label text-defaulttextcolor/70 inline-block" htmlFor="privacy-policy">
                                            I agree with the <Link href="#!" className="font-semibold text-defaulttextcolor/70"><u>Privacy Policy</u></Link>
                                        </label>
                                    </div>
                                    <div className="!ps-0 form-check !flex">
                                        <input className="form-check-input" type="checkbox" value="" id="terms_conditions" />
                                        <label className="ps-3 form-check-label text-defaulttextcolor/70 inline-block" htmlFor="terms_conditions">
                                            I agree with the <Link href="#!" className="font-semibold text-defaulttextcolor/70"><u>Terms &amp; Conditions</u></Link>
                                        </label>
                                    </div>
                                </div>
                                <div className="btn-list sm:mt-0 mt-2">
                                    <button type="button" className="ti-btn ti-btn-outline-danger me-2">DECLINE</button>
                                    <button type="button" className="ti-btn ti-btn-primary-full">ACCEPT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-2 col-span-12"></div>
                </div>

            </div>

        </Fragment>
    )
}
Termsconditions.layout = "Contentlayout"

export default Termsconditions
