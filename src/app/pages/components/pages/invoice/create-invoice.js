import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
import DatePicker from 'react-datepicker';
const Select = dynamic(() => import("react-select"), { ssr: false });

const Createinvoice = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [startDate1, setStartDate1] = useState(new Date());
    const handleDateChange = (date) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };
    const handleDateChange1 = (date) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate1(date);
        }
    };
    function dec(el) {
        const unit = el.currentTarget.parentElement.querySelector("input").value;

        if (Number(unit) === 0) {
            return false;
        } else {
            el.currentTarget.parentElement.querySelector("input").value--;
        }
    }
    function inc(el) {
        el.currentTarget.parentElement.querySelector("input").value++;
    }

    const Currencyoptions = [
        { value: 'Select Currency', label: 'Select Currency' },
        { value: 'USD - (United States Dollar)', label: 'USD - (United States Dollar)' },
        { value: 'BHD - (Bahraini Dinar)', label: 'BHD - (Bahraini Dinar)' },
        { value: 'KWD - (Kuwaiti Dinar)', label: 'KWD - (Kuwaiti Dinar)' },
        { value: 'CHF - (Swiss Franc)', label: 'CHF - (Swiss Franc)' },
    ];

    return (
        <Fragment>
            <Seo title={"Create Invoice"} />
            <Pageheader currentpage="Create Invoice" activepage="Invoice" mainpage="Create Invoice" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-9 col-span-12">
                    <div className="box">
                        <div className="box-header xxl:!flex !block">
                            <div className="h5 mb-0 sm:flex block items-center">
                                <div>
                                    <img src="../../../../assets/images/brand-logos/toggle-logo.png" alt="" />
                                </div>
                                <div className="sm:ms-2 ms-0 sm:mt-0 mt-2">
                                    <input type="text" className="form-control !text-[.8rem] !py-1 !px-[0.8rem] !bg-light !rounded-md" placeholder="Invoice Title" defaultValue="INV TITLE" />
                                </div>
                                <div className="mx-2">:</div>
                                <div className="sm:mt-0">
                                    <input type="text" className="form-control !text-[.8rem] !py-1 !px-[0.8rem] !bg-light !rounded-md" placeholder="Invoice ID" defaultValue="INV ID" />
                                </div>
                            </div>
                            <div className="ms-auto xxl:!mt-0 !mt-2">
                                <button type="button" className="ti-btn !py-1 !px-2 bg-primary text-white !text-[0.75rem] me-2">Save As PDF<i className="ri-file-pdf-line ms-1 align-middle inline-block"></i></button>
                                <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-secondary me-2"><i className="bi bi-plus-lg"></i></button>
                                <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-success me-2"><i className="bi bi-download"></i></button>
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="grid grid-cols-12 sm:gap-x-6 gap-y-6">
                                <div className="xl:col-span-12 col-span-12">
                                    <div className="grid grid-cols-12 sm:gap-x-6 gap-y-6">
                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12">
                                            <p className="font-semibold mb-2">
                                                Billing From :
                                            </p>
                                            <div className="grid grid-cols-12 col-span-12 gap-2">
                                                <div className="xl:col-span-12 col-span-12">
                                                    <input type="text" className="form-control w-full !rounded-md !bg-light" id="Company-Name" placeholder="Company Name" defaultValue="SPRUKO TECHNOLOGIES" />
                                                </div>
                                                <div className="xl:col-span-12 col-span-12">
                                                    <textarea
                                                        className="form-control w-full !rounded-md !bg-light"
                                                        id="company-address"
                                                        placeholder="Enter Address"
                                                        rows="3"
                                                        defaultValue=""
                                                    />
                                                </div>
                                                <div className="xl:col-span-12 col-span-12">
                                                    <input type="text" className="form-control w-full !rounded-md !bg-light" id="company-mail" placeholder="Company Email" defaultValue="" />
                                                </div>
                                                <div className="xl:col-span-12 col-span-12">
                                                    <input type="text" className="form-control w-full !rounded-md !bg-light" id="company-phone" placeholder="Phone Number" defaultValue="" />
                                                </div>
                                                <div className="xl:col-span-12 col-span-12">
                                                    <textarea
                                                        className="form-control w-full !rounded-md !bg-light"
                                                        id="invoice-subject"
                                                        placeholder="Subject"
                                                        rows="4"
                                                        defaultValue=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-4 xl:flex hidden"></div>
                                        <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-6 col-span-12 sm:mt-0 mt-4">
                                            <p className="font-semibold mb-2">
                                                Billing To :
                                            </p>
                                            <div className="grid grid-cols-12 gap-2">
                                                <div className="xl:col-span-12 col-span-12">
                                                    <input type="text" className="form-control w-full !rounded-md !bg-light" id="customer-Name" placeholder="Customer Name" defaultValue="Json Taylor" />
                                                </div>
                                                <div className="xl:col-span-12 col-span-12">
                                                    <textarea defaultValue="" className="form-control w-full !rounded-md !bg-light" id="customer-address" placeholder="Enter Address" rows="3"></textarea>
                                                </div>
                                                <div className="xl:col-span-12 col-span-12">
                                                    <input type="text" className="form-control w-full !rounded-md !bg-light" id="customer-mail" placeholder="Customer Email" defaultValue="" />
                                                </div>
                                                <div className="xl:col-span-12 col-span-12">
                                                    <input type="text" className="form-control w-full !rounded-md !bg-light" id="customer-phone" placeholder="Phone Number" defaultValue="" />
                                                </div>
                                                <div className="xl:col-span-12 col-span-12">
                                                    <input type="text" className="form-control w-full !rounded-md !bg-light" id="zip-code" placeholder="Zip Code" defaultValue="" />
                                                </div>
                                                <div className="xl:col-span-12 col-span-12 choices-control">
                                                    <p className="font-semibold mb-2 mt-2">
                                                        Currency :
                                                    </p>
                                                    <Select options={Currencyoptions} classNamePrefix='Select2' menuPlacement='auto' className="w-full !rounded-md !bg-light"
                                                        placeholder="Select Currency" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-3 col-span-12">
                                    <label htmlFor="invoice-number" className="form-label">Invoice ID</label>
                                    <input type="text" className="form-control w-full !rounded-md !bg-light" id="invoice-number" placeholder="Inv No" defaultValue="#SPK120219890" />
                                </div>
                                <div className="xl:col-span-3 col-span-12">
                                    <label htmlFor="invoice-date-issued" className="form-label">Date Issued</label>
                                    <DatePicker placeholderText='Choose date' className="form-control w-full !rounded-md !bg-light"
                                        selected={startDate}
                                        onChange={handleDateChange} />
                                </div>
                                <div className="xl:col-span-3 col-span-12">
                                    <label htmlFor="invoice-date-due" className="form-label">Due Date</label>
                                    <DatePicker placeholderText='Choose date' className="form-control w-full !rounded-md !bg-light"
                                        selected={startDate1}
                                        onChange={handleDateChange1} />
                                </div>
                                <div className="xl:col-span-3 col-span-12">
                                    <label htmlFor="invoice-due-amount" className="form-label">Due Amount</label>
                                    <input type="text" className="form-control w-full !rounded-md !bg-light" id="invoice-due-amount" placeholder="Enter Amount" defaultValue="$12,983.78" />
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <div className="table-responsive">
                                        <table className="table whitespace-nowrap border dark:border-defaultborder/10 mt-3">
                                            <thead>
                                                <tr>
                                                    <th scope="row">PRODUCT NAME</th>
                                                    <th scope="row">DESCRIPTION</th>
                                                    <th scope="row" className="min-w-[120px]">QUANTITY</th>
                                                    <th scope="row">PRICE PER UNIT</th>
                                                    <th scope="row">TOTAL</th>
                                                    <th scope="row">ACTION</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border border-defaultborder dark:border-defaultborder/10">
                                                    <td>
                                                        <input type="text" className="form-control !w-auto !rounded-md !bg-light" placeholder="Enter Product Name" />
                                                    </td>
                                                    <td>
                                                        <textarea defaultValue="" rows="1" className="form-control !w-auto !rounded-md !bg-light" placeholder="Enter Description" />
                                                    </td>
                                                    <td className="invoice-quantity-container">
                                                        <div className="input-group dark:border-defaultborder/10 rounded-md !flex-nowrap">
                                                            <button aria-label="button" type="button" className="ti-btn ti-btn-icon !bg-primary !text-white input-group-text !mb-0 product-quantity-minus !rounded-e-none" onClick={dec}><i className="ri-subtract-line"></i></button>
                                                            <input type="text" className="form-control  text-center !w-12 !p-1" aria-label="quantity" id="product-quantity4" defaultValue="1" />
                                                            <button aria-label="button" type="button" className="ti-btn ti-btn-icon !bg-primary !text-white input-group-text !mb-0 product-quantity-plus !rounded-s-none" onClick={inc}><i className="ri-add-line"></i></button>
                                                        </div>
                                                    </td>
                                                    <td><input className="form-control !w-auto !rounded-md !bg-light" placeholder="" type="text" defaultValue="$60.00" /></td>
                                                    <td><input className="form-control !w-auto !rounded-md !bg-light" placeholder="" type="text" defaultValue="$120.00" /></td>
                                                    <td>
                                                        <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-icon ti-btn-danger"><i className="ri-delete-bin-5-line"></i></button>
                                                    </td>
                                                </tr>
                                                <tr className="border border-defaultborder dark:border-defaultborder/10">
                                                    <td>
                                                        <input type="text" className="form-control !w-auto !rounded-md !bg-light" placeholder="Enter Product Name" />
                                                    </td>
                                                    <td>
                                                        <textarea defaultValue="" rows="1" className="form-control !w-auto !rounded-md !bg-light" placeholder="Enter Description" />
                                                    </td>
                                                    <td className="invoice-quantity-container">
                                                        <div className="input-group dark:border-defaultborder/10 rounded-md  !flex-nowrap">
                                                            <button aria-label="button" type="button" className="ti-btn ti-btn-icon !bg-primary !text-white input-group-text flex-fill !mb-0 product-quantity-minus !rounded-e-none" onClick={dec}><i className="ri-subtract-line"></i></button>
                                                            <input type="text" className="form-control  text-center !w-12 !p-1" aria-label="quantity" id="product-quantity5" defaultValue="1" />
                                                            <button aria-label="button" type="button" className="ti-btn ti-btn-icon !bg-primary !text-white input-group-text flex-fill !mb-0 product-quantity-plus !rounded-s-none" onClick={inc}><i className="ri-add-line"></i></button>
                                                        </div>
                                                    </td>
                                                    <td><input className="form-control !w-auto !rounded-md !bg-light" placeholder="Enter Amount" type="text" /></td>
                                                    <td><input className="form-control !w-auto !rounded-md !bg-light" placeholder="Enter Amount" type="text" /></td>
                                                    <td>
                                                        <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-icon ti-btn-danger"><i className="ri-delete-bin-5-line"></i></button>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="6" className="border-bottom-0"><Link className="ti-btn ti-btn-light !font-medium" href="#!"><i className="bi bi-plus-lg"></i> Add Product</Link></td>
                                                </tr>
                                                <tr>
                                                    <td colSpan="4"></td>
                                                    <td colSpan="2">
                                                        <table className="table table-sm whitespace-nowrap mb-0 table-borderless dark:border-defaultborder/10">
                                                            <tbody>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div className="font-semibold">Sub Total :</div>
                                                                    </th>
                                                                    <td>
                                                                        <input type="text" className="form-control w-full !rounded-md !bg-light invoice-amount-input" placeholder="Enter Amount" defaultValue="$1209.89" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div className="font-semibold">Avail Discount :</div>
                                                                    </th>
                                                                    <td>
                                                                        <input type="text" className="form-control w-full !rounded-md !bg-light invoice-amount-input" placeholder="Enter Amount" defaultValue="$29.98" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div className="font-semibold">Coupon Discount <span className="text-success">(10%)</span> :</div>
                                                                    </th>
                                                                    <td>
                                                                        <input type="text" className="form-control w-full !rounded-md !bg-light invoice-amount-input" placeholder="Enter Amount" defaultValue="$129.00" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div className="font-semibold">Vat <span className="text-danger">(20%)</span> :</div>
                                                                    </th>
                                                                    <td>
                                                                        <input type="text" className="form-control w-full !rounded-md !bg-light invoice-amount-input" placeholder="Enter Amount" defaultValue="$258.00" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div className="font-semibold">Due Till Date :</div>
                                                                    </th>
                                                                    <td>
                                                                        <input type="text" className="form-control w-full !rounded-md !bg-light invoice-amount-input" placeholder="Enter Amount" defaultValue="$0.00" />
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <th scope="row">
                                                                        <div className="text-sm font-semibold">Total :</div>
                                                                    </th>
                                                                    <td>
                                                                        <input type="text" className="form-control w-full !rounded-md !bg-light invoice-amount-input" placeholder="Enter Amount" defaultValue="$1,071.89" />
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <div>
                                        <label htmlFor="invoice-note" className="form-label">Note:</label>
                                        <textarea className="form-control w-full !rounded-md !bg-light" id="invoice-note" rows="3">Once the invoice has been verified by the accounts payable team and recorded, the only task left is to send it for approval before releasing the payment</textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-footer text-end">
                            <button type="button" className="ti-btn ti-btn-light sm:me-2 !mb-2 sm:!mb-0 "><i className="ri-eye-line me-1 align-middle inline-block"></i>Preview</button>
                            <button type="button" className="ti-btn bg-primary text-white !mb-0">Send Invoice <i className="ri-send-plane-2-line ms-1 align-middle inline-block"></i></button>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Mode Of Payment
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="grid grid-cols-12 gap-4">
                                <div className="xl:col-span-12 col-span-12">
                                    <div className="inline-flex" role="group" aria-label="Basic radio toggle button group">
                                        <input type="radio" className="btn-check " name="btnradio" id="btnradio2" />
                                        <label className="ti-btn ti-btn-outline-light dark:text-defaulttextcolor/70 dark:!border-defaultborder/10 !border-e-0  sm:mt-0 mt-1 !rounded-e-none hover:!bg-light " htmlFor="btnradio2">UPI</label>
                                        <input type="radio" className="btn-check " name="btnradio" id="btnradio3" defaultChecked />
                                        <label className="ti-btn ti-btn-light sm:mt-0 mt-1 dark:text-defaulttextcolor/70 dark:!border-defaultborder/10 !rounded-s-none hover:!bg-light" htmlFor="btnradio3">Credit/Debit Card</label>
                                    </div>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <input type="text" className="form-control w-full !rounded-md !bg-light" placeholder="Card Holder Name" />
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <input type="text" className="form-control w-full !rounded-md !bg-light" id="invoice-payment-cardname" placeholder="Card Number" defaultValue="1234 5678 9087 XXXX" />
                                    <label htmlFor="invoice-payment-cardname" className="form-label mb-0"><Link className="text-danger text-[0.6875rem]" href="#!">Enter valid card number*</Link></label>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <input type="text" className="form-control w-full !rounded-md !bg-light mb-2" placeholder="Enter OTP" />
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <div className="alert alert-success !border-success/10" role="alert">
                                        Please Make sure to pay the invoice bill within 30 days.
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
Createinvoice.layout = "Contentlayout"

export default Createinvoice