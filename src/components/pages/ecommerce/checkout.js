import { Basicwizard } from '@/shared/data/pages/ecommerce/checkoutdata';
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link';
import React, { Fragment } from 'react';

const Checkout = () => {

    const Citydata = [
        { value: 'Georgetown', label: 'Georgetown' },
        { value: 'Alexandria', label: 'Alexandria' },
        { value: 'Rockville', label: 'Rockville' },
        { value: 'Frederick', label: 'Frederick' }
    ];
    const Statedata = [
        { value: 'Washington,D.C', label: 'Washington,D.C' },
        { value: 'California', label: 'California' },
        { value: 'Texas', label: 'Texas' },
        { value: 'Alaska', label: 'Alaska' }
    ];


    return (
        <Fragment>
            <Seo title={"Checkout"} />
            <Pageheader currentpage="Checkout" activepage="Ecommerce" mainpage="Checkout" />
            <div className="container">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xxl:col-span-9 col-span-12">
                        <div className="box overflow-hidden">
                            <div className='box-body !p-0  product-checkout'>
                                <Basicwizard />
                            </div>
                        </div>
                    </div>

                    <div className="xxl:col-span-3 col-span-12">
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title me-1">Order Summary <span className="badge bg-primary/10 text-primary !border-b-0 !rounded-full">02</span></div>
                            </div>
                            <div className="box-body !p-0">
                                <ul className="list-group mb-0 !border-0 !rounded-0">
                                    <li className="list-group-item !border-t-0 !border-s-0 !border-e-0">
                                        <div className="flex items-center flex-wrap">
                                            <div className="me-2">
                                                <span className="avatar avatar-lg bg-light">
                                                    <img src="../../../../assets/images/ecommerce/png/1.png" alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-grow">
                                                <p className="mb-0 font-semibold">Blue sweatshirt</p>
                                                <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">Quantity : 2  <span className="badge bg-success/10 text-success ms-4">30% Off</span></p>
                                            </div>
                                            <div>
                                                <p className="mb-0 text-end">
                                                    <Link aria-label="anchor" href="#!">
                                                        <i className="ri-close-line text-[1rem] text-[#8c9097] dark:text-white/50"></i>
                                                    </Link>
                                                </p>
                                                <p className="mb-0 text-[0.875rem] font-semibold">$189<span className="ms-1 text-[#8c9097] dark:text-white/50 text-[0.6875rem]  inline-block"><s>$329</s></span></p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item  !border-s-0 !border-e-0 dark:border-defaultborder/10 border-start-0 border-end-0">
                                        <div className="flex items-center flex-wrap">
                                            <div className="me-2">
                                                <span className="avatar avatar-lg bg-light">
                                                    <img src="../../../../assets/images/ecommerce/png/7.png" alt="" />
                                                </span>
                                            </div>
                                            <div className="flex-grow">
                                                <p className="mb-0 font-semibold">Denim Jacket</p>
                                                <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">Quantity : 1  <span className="badge bg-success/10 text-success ms-4">10% Off</span></p>
                                            </div>
                                            <div>
                                                <p className="mb-0 text-end">
                                                    <Link aria-label="anchor" href="#!">
                                                        <i className="ri-close-line text-[1rem] text-[#8c9097] dark:text-white/50"></i>
                                                    </Link>
                                                </p>
                                                <p className="mb-0 text-[0.875rem] font-semibold">$129<span className="ms-1 text-[#8c9097] dark:text-white/50 text-[0.6875rem]  inline-block"><s>$139</s></span></p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="p-4 border-b border-dashed dark:border-defaultborder/10">
                                    <div className="flex items-center justify-between flex-wrap">
                                        <div className="text-[0.75rem] font-semibold bg-primary/10 text-primary p-1 rounded-full">SPRUKO25</div>
                                        <div className="text-success">COUPON APPLIED</div>
                                    </div>
                                </div>
                                <div className="p-4 border-b border-dashed dark:border-defaultborder/10">
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-[#8c9097] dark:text-white/50 opacity-[0.7]">Sub Total</div>
                                        <div className="font-semibold text-[0.875rem]">$318</div>
                                    </div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-[#8c9097] dark:text-white/50 opacity-[0.7]">Discount</div>
                                        <div className="font-semibold text-[0.875rem] text-success">10% - $31.8</div>
                                    </div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="text-[#8c9097] dark:text-white/50 opacity-[0.7]">Delivery Charges</div>
                                        <div className="font-semibold text-[0.875rem] text-danger">- $29</div>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="text-[#8c9097] dark:text-white/50 opacity-[0.7]">Service Tax (18%)</div>
                                        <div className="font-semibold text-[0.875rem]">- $45.29</div>
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="flex items-center justify-between">
                                        <div className="text-[0.9375rem]">Total :</div>
                                        <div className="font-semibold text-[1rem] text-dark"> $1,387</div>
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
Checkout.layout = "Contentlayout"

export default Checkout