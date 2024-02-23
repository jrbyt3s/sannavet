import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React from 'react'

const Contactus = () => {
    return (
        <div>
            <Seo title={"Contact Us"} />
            <Pageheader currentpage="Contact Us" activepage="Pages" mainpage="Contact Us" />
            <div className="grid grid-cols-12 gap-x-6 !mx-auto">
                <div className="xxl:col-span-12 xl:col-span-12 lg:col-span-12 md:col-span-12 col-span-12">
                    <div className="box overflow-hidden">
                        <div className="box-body !p-0">
                            <div className="contact-page-banner">
                                <div className="text-center">
                                    <h3 className="text-[1.75rem] font-semibold text-white">Contact US !</h3>
                                    <h6 className="text-[1rem] text-white mb-6">Have any questions ? We would love to hear from you. </h6>
                                    <button type="button" className="ti-btn bg-success text-white !font-medium">Contact <i className="ri-phone-line align-middle"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1 col-span-12"></div>
                <div className="xxl:col-span-10 xl:col-span-10 lg:col-span-10 md:col-span-10 sm:col-span-10 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                            <div className="box contactus-form overflow-hidden">
                                <div className="box-header">
                                    <div className="box-title">
                                        Get In Touch !
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="sm:grid grid-cols-12 gap-x-6 gap-y-4">
                                        <div className="xl:col-span-6 col-span-12">
                                            <label htmlFor="contact-address-firstname" className="form-label">First Name :</label>
                                            <input type="text" className="form-control w-full !rounded-md !bg-light !border-0 " id="contact-address-firstname" placeholder="Enter Name" />
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                            <label htmlFor="contact-address-lastname" className="form-label">Last Name :</label>
                                            <input type="text" className="form-control w-full !rounded-md !bg-light !border-0 " id="contact-address-lastname" placeholder="Enter Name" />
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                            <label htmlFor="contact-address-phone" className="form-label">Phone No :</label>
                                            <input type="text" className="form-control w-full !rounded-md !bg-light !border-0 " id="contact-address-phone" placeholder="Enter Phone No" />
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                            <label htmlFor="contact-address-email" className="form-label">Email Id :</label>
                                            <input type="email" className="form-control !rounded-md w-full !bg-light !border-0" id="contact-address-email" placeholder="Enter Email Id" />
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                            <label htmlFor="contact-address-address" className="form-label">Address :</label>
                                            <textarea className="form-control w-full !rounded-md !bg-light !border-0 " id="contact-address-address" rows="2"></textarea>
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                            <label htmlFor="contact-mail-message" className="form-label">Message :</label>
                                            <textarea className="form-control w-full !rounded-md !bg-light !border-0 " id="contact-mail-message" rows="2"></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className="box-footer">
                                    <div className="text-center">
                                        <button type="button" className="ti-btn ti-btn-primary !font-medium">Send Message</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                            <div className="box contactus-form overflow-hidden">
                                <div className="box-body">
                                    <iframe title="" src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d30444.274596168965!2d78.54114692513858!3d17.48198883339408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d17.4886524!2d78.5495041!4m5!1s0x3bcb9c7ec139a15d%3A0x326d1c90786b2ab6!2sspruko%20technologies!3m2!1d17.474805099999998!2d78.570258!5e0!3m2!1sen!2sin!4v1670225507254!5m2!1sen!2sin" height="370" className="!border-0" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-1 xl:col-span-1 lg:col-span-1 md:col-span-1 sm:col-span-1  col-span-12"></div>
            </div>
        </div>
    )
}
Contactus.layout = "Contentlayout"

export default Contactus