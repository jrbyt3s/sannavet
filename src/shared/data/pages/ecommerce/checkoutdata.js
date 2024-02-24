import Link from "next/link";
import React from "react";
import Select from 'react-select';


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
//Basic start
const Wizard = ({ step: currentIndex, ...props }) => {
    const steps = React.Children.toArray(props.children);
    const prevStep = currentIndex !== 0 && steps[currentIndex - 1].props;
    const nextStep = currentIndex !== steps.length - 1 && steps[currentIndex + 1]?.props;

    return (
        <div>

            <nav className="md:flex justify-evenly !border-b !border-dashed border-defaultborder dark:border-defaultborder/10">
                {steps.map((step, index) => (
                    <button
                        key={step.props.number}
                        onClick={() => props.onChange(index)}
                        className={`!py-4 !px-8 ${getClsNavBtn(index === currentIndex)}`}
                    >
                        <span className="number me-2 ">{step.props.number}</span>
                        <span className="fs-14">{step.props.title}</span>
                    </button>
                ))}
            </nav>

            {steps[currentIndex]}

            <div className=" p-3 flex justify-between  ">
                <button
                    visible={prevStep}
                    onClick={() => props.onChange(currentIndex - 1)}
                    title={prevStep.description}
                    className="ti-btn bg-primary text-white"
                >
                    Back
                </button>
                <button
                    visible={nextStep}
                    onClick={() => props.onChange(currentIndex + 1)}
                    title={nextStep?.description}
                    className="ti-btn bg-primary text-white"
                >
                    Next
                </button>
            </div>
        </div>
    );
};
const Step = ({ children }) => children;

function getClsNavBtn(active) {
    return "btn" + (active ? " active" : "");
}
function button({ visible, ...props }) {
    return (

        <button
            className={visible ? "btn btn-primary " : "invisible"}
            {...props}
        />

    );
}

export class Basicwizard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            step: 0,
        };
    }

    openModal = () => {
        this.setState({ showModal: true });
    };

    closeModal = () => {
        this.setState({ showModal: false });
    };

    handleStep = (step) => {
        this.setState({ step });
    };

    render() {

        return (
            <Wizard step={this.state.step} onChange={this.handleStep}>
                <Step title="Shipping" number="1">
                    <div className="p-6">
                        <p className="mb-1 font-semibold text-[#8c9097] dark:text-white/50 opacity-[0.5] text-[1.25rem]">01</p>
                        <div className="text-[0.9375rem] font-semibold sm:flex block items-center justify-between mb-4">
                            <div>Shipping Address :</div>
                            <div className="sm:mt-0 mt-2">
                                <Link href="#!" className="ti-btn bg-primary text-white !py-1 !px-2 !text-[0.75rem]" data-hs-overlay="#modal-new-address"><i className="ri-add-line  align-middle text-[0.875rem] font-semibold inline-block"></i>Add New Address
                                </Link>
                                <div id="modal-new-address" className="hs-overlay hidden ti-modal">
                                    <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
                                        <div className="ti-modal-content">
                                            <div className="ti-modal-header">
                                                <h6 className="modal-title text-[1rem] font-semibold" id="modal-new-addres">New Address</h6>
                                                <button type="button" className="hs-dropdown-toggle !text-[1rem] !font-semibold !text-defaulttextcolor" data-hs-overlay="#modal-new-address">
                                                    <span className="sr-only">Close</span>
                                                    <i className="ri-close-line"></i>
                                                </button>
                                            </div>
                                            <div className="ti-modal-body !max-w-[800px] px-4">
                                                <div className="grid grid-cols-12 gap-6">
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label htmlFor="fullname-new" className="form-label">Full Name</label>
                                                        <input type="text" className="form-control" id="fullname-new" placeholder="Full Name" />
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label htmlFor="email-new" className="form-label">Email</label>
                                                        <input type="email" className="form-control" id="email-new" placeholder="email" />
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label htmlFor="phonenumber-new" className="form-label">Phone Number</label>
                                                        <input type="number" className="form-control" id="phonenumber-new" placeholder="Phone" />
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <label htmlFor="address-new" className="form-label">Address</label>
                                                        <input type="text" className="form-control" id="address-new" placeholder="Address" />
                                                    </div>
                                                    <div className="xl:col-span-12 col-span-12">
                                                        <div className="grid grid-cols-12 gap-4">
                                                            <div className="xl:col-span-3 col-span-6">
                                                                <label htmlFor="pincode-new" className="form-label">Pincode</label>
                                                                <input type="number" className="form-control" id="pincode-new" placeholder="Pinicode" />
                                                            </div>
                                                            <div className="xl:col-span-3 col-span-6">
                                                                <label htmlFor="city-new" className="form-label">City</label>
                                                                <input type="text" className="form-control" id="city-new" placeholder="City" />
                                                            </div>
                                                            <div className="xl:col-span-3 col-span-6">
                                                                <label htmlFor="state-new" className="form-label">State</label>
                                                                <input type="text" className="form-control" id="state-new" placeholder="State" />
                                                            </div>
                                                            <div className="xl:col-span-3 col-span-6">
                                                                <label htmlFor="country-new" className="form-label">Country</label>
                                                                <input type="text" className="form-control" id="country-new" placeholder="Country" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ti-modal-footer">
                                                <button type="button"
                                                    className="hs-dropdown-toggle ti-btn  ti-btn-secondary-full align-middle"
                                                    data-hs-overlay="#modal-new-address">
                                                    Close
                                                </button>
                                                <button type="button" className="ti-btn bg-primary text-white !font-medium">Save Adress</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-12 gap-4 !mb-4">
                            <div className="xl:col-span-6 col-span-12">
                                <div className="form-floating">
                                    <input type="text" className="form-control w-full !rounded-md" id="fullname-add" defaultValue="Json Taylor" placeholder="Name" />
                                    <label htmlFor="fullname-add" className="!text-[0.75rem] after:bg-white after:dark:bg-bodybg after:rounded-md after:inset-y-4 after:inset-x-[0.375rem]">Full Name</label>
                                </div>
                            </div>
                            <div className="xl:col-span-6 col-span-12">
                                <div className="form-floating">
                                    <input type="email" className="form-control  w-full !rounded-md" id="email-add" defaultValue="jsontaylor2413@gmail.com" placeholder="name@example.com" />
                                    <label htmlFor="email-add" className="!text-[0.75rem] after:bg-white after:dark:bg-bodybg after:rounded-md after:inset-y-4 after:inset-x-[0.375rem]">Email</label>
                                </div>
                            </div>
                            <div className="xl:col-span-6 col-span-12">
                                <div className="form-floating">
                                    <input type="email" className="form-control is-valid  w-full !rounded-md" id="phoneno-add" defaultValue="(555) 555-1234" placeholder="1234-XX-XXXX" />
                                    <label htmlFor="phoneno-add" className="!text-[0.75rem] after:bg-white after:dark:bg-bodybg after:rounded-md after:inset-y-4 after:inset-x-[0.375rem]">Phone No</label>
                                    <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                                        <svg className="h-5 w-5 text-success" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-6 col-span-12">
                                <div className="form-floating">
                                    <textarea className="form-control  w-full !rounded-md" placeholder="Address Here" id="address-add" defaultValue="MIG-1-11,Monroe Street,Washington D.C,USA"></textarea>
                                    <label htmlFor="address-add" className="!text-[0.75rem] after:bg-white after:dark:bg-bodybg after:rounded-md after:inset-y-4 after:inset-x-[0.375rem]">Address</label>
                                </div>
                                <div className="form-check !flex items-center gap-2 !ps-0">
                                    <input className="form-check-input form-checked-success w-full checked:bg-success checked:ring-success hover:checked:bg-success hover:checked:ring-success focus:checked:bg-success focus:checked:ring-success focus:ring-success focus:border-success" type="checkbox" defaultValue="" id="invalidCheck" required defaultChecked />
                                    <label className="form-check-label text-success" htmlFor="invalidCheck">
                                        Same as Billing Address ?
                                    </label>
                                </div>
                            </div>
                            <div className="xl:col-span-12 col-span-12">
                                <div className="grid grid-cols-12 sm:gap-6 gap-5">
                                    <div className="xl:col-span-3 col-span-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control is-valid  w-full !rounded-md" id="pincode-add" defaultValue="20071" placeholder="Name" />
                                            <label htmlFor="pincode-add">Pin Code</label>
                                            <div className="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-3">
                                                <svg className="h-5 w-5 text-success" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-3 col-span-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control  w-full !rounded-md" id="city-add" defaultValue="Georgetown" placeholder="Name" />
                                            <label htmlFor="city-add">City</label>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-3 col-span-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control  w-full !rounded-md" id="state-add" defaultValue="Washington, D.C" placeholder="Name" />
                                            <label htmlFor="state-add">State</label>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-3 col-span-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control  w-full !rounded-md" id="country-add" defaultValue="USA" placeholder="Name" />
                                            <label htmlFor="country-add">Country</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-[0.9375rem] font-semibold mb-1 xl:col-span-12">Shipping Methods :</p>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="xl:col-span-6 col-span-12">
                                <div className="form-check shipping-method-container mb-0 flex items-center">
                                    <div className="form-check-label">
                                        <div className="sm:flex items-center justify-between">
                                            <div className="!me-2">
                                                <span className="avatar avatar-md">
                                                    <img src="../../../../assets/images/ecommerce/png/28.png" alt="" />
                                                </span>
                                            </div>
                                            <div className="shipping-partner-details sm:me-5 me-0">
                                                <p className="mb-0 font-semibold">UPS</p>
                                                <p className="text-[#8c9097] dark:text-white/50 text-[0.6875rem] mb-0">Delivered By 24,Nov 2022</p>
                                            </div>
                                            <div className="font-semibold sm:me-5 me-0">
                                                $9.99
                                            </div>
                                            <div>
                                                <input id="shipping-method1" name="shipping-methods" type="radio" className="form-check-input !top-[1.5rem]" defaultChecked />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-6 col-span-12">
                                <div className="form-check shipping-method-container mb-0">
                                    <div className="form-check-label">
                                        <div className="sm:flex items-center justify-between">
                                            <div className="me-2">
                                                <span className="avatar avatar-md">
                                                    <img src="../../../../assets/images/ecommerce/png/31.png" alt="" />
                                                </span>
                                            </div>
                                            <div className="shipping-partner-details sm:me-5 me-0">
                                                <p className="mb-0 font-semibold">USPS</p>
                                                <p className="text-[#8c9097] dark:text-white/50 text-[0.6875rem] mb-0">Delivered By 22,Nov 2022</p>
                                            </div>
                                            <div className="font-semibold sm:me-5 me-0">
                                                $10.49
                                            </div>
                                            <div>
                                                <input id="shipping-method2" name="shipping-methods" type="radio" className="form-check-input !top-[1.5rem]" defaultChecked />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-6 col-span-12">
                                <div className="form-check shipping-method-container mb-0">
                                    <div className="form-check-label">
                                        <div className="sm:flex items-center justify-between">
                                            <div className="me-2">
                                                <span className="avatar avatar-md">
                                                    <img src="../../../../assets/images/ecommerce/png/29.png" alt="" />
                                                </span>
                                            </div>
                                            <div className="shipping-partner-details sm:me-5 me-0">
                                                <p className="mb-0 font-semibold">FedEx</p>
                                                <p className="text-[#8c9097] dark:text-white/50 text-[0.6875rem] mb-0">Delivered Tomorrow</p>
                                            </div>
                                            <div className="font-semibold sm:me-5 me-0">
                                                $12.29
                                            </div>
                                            <div>
                                                <input id="shipping-method3" name="shipping-methods" type="radio" className="form-check-input !top-[1.5rem]" defaultChecked />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="xl:col-span-6 col-span-12">
                                <div className="form-check shipping-method-container mb-0">
                                    <div className="form-check-label">
                                        <div className="sm:flex items-center justify-between">
                                            <div className="me-2">
                                                <span className="avatar avatar-md">
                                                    <img src="../../../../assets/images/ecommerce/png/30.png" alt="" />
                                                </span>
                                            </div>
                                            <div className="shipping-partner-details sm:me-5 me-0">
                                                <p className="mb-0 font-semibold">DHL</p>
                                                <p className="text-[#8c9097] dark:text-white/50 text-[0.6875rem] mb-0">Delivered Today</p>
                                            </div>
                                            <div className="font-semibold sm:me-5 me-0">
                                                $18.99
                                            </div>
                                            <div>
                                                <input id="shipping-method4" name="shipping-methods" type="radio" className="form-check-input  !top-[1.5rem]" defaultChecked />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Step>
                <Step title="Personal Details" number="2">
                    <div className="p-4">
                        <p className="mb-1 font-semibold text-[#8c9097] dark:text-white/50 opacity-[0.5] text-[1.25rem]">02</p>
                        <div className="text-[0.9375rem] font-semibold sm:flex block items-center justify-between mb-4">
                            <div>Personal Details :</div>
                        </div>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="xl:col-span-6 col-span-12">
                                <label htmlFor="firstname-personal" className="form-label">First Name</label>
                                <input type="text" className="form-control w-full !rounded-md" id="firstname-personal" placeholder="First Name" defaultValue="Json" />
                            </div>
                            <div className="xl:col-span-6 col-span-12">
                                <label htmlFor="lastname-personal" className="form-label">Last Name</label>
                                <input type="text" className="form-control w-full !rounded-md" id="lastname-personal" placeholder="Last Name" defaultValue="Taylor" />
                            </div>
                            <div className="xl:col-span-6 col-span-12">
                                <label htmlFor="email-personal" className="form-label">Email</label>
                                <input type="email" className="form-control w-full !rounded-md" id="email-personal" placeholder="xyz@example.com" defaultValue="" />
                            </div>
                            <div className="xl:col-span-6 col-span-12">
                                <label htmlFor="phoneno-personal" className="form-label">Phone no</label>
                                <input type="text" className="form-control w-full !rounded-md" id="phoneno-personal" placeholder="(555)-555-1234" defaultValue="" />
                            </div>
                            <div className="xxl:col-span-2 col-span-12">
                                <label htmlFor="pincode-personal" className="form-label">Pincode</label>
                                <input type="text" className="form-control w-full !rounded-md" id="pincode-personal" placeholder="200017" defaultValue="" />
                            </div>
                            <div className="xxl:col-span-4 col-span-12">
                                <label htmlFor="choices-single-default" className="form-label">City</label>
                                <Select isSearchable name="colors" options={Citydata} className="w-full !rounded-md"
                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Citydata[0]]}
                                />
                            </div>
                            <div className="xxl:col-span-4 col-span-12">
                                <label htmlFor="choices-single-default1" className="form-label">State</label>
                                <Select isSearchable name="colors" options={Statedata} className="w-full !rounded-md"
                                    menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Statedata[0]]}
                                />
                            </div>
                            <div className="xxl:col-span-2 col-span-12">
                                <label htmlFor="country-personal" className="form-label">Country</label>
                                <input type="text" className="form-control w-full !rounded-md" id="country-personal" placeholder="Country" defaultValue="USA" />
                            </div>
                            <div className="xl:col-span-12 col-span-12">
                                <label htmlFor="text-area" className="form-label">Address</label>
                                <textarea className="form-control w-full !rounded-md" id="text-area" rows={4}></textarea>
                                <div className="form-check !flex items-center gap-2 !ps-0">
                                    <input className="form-check-input form-checked-success w-full checked:bg-success checked:ring-success hover:checked:bg-success hover:checked:ring-success focus:checked:bg-success focus:checked:ring-success focus:ring-success focus:border-success" type="checkbox" defaultValue="" id="invalidCheck1" required defaultChecked />
                                    <label className="form-check-label text-success" htmlFor="invalidCheck">
                                        Same as Shipping Address Address ?
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </Step>
                <Step title="Payment" number="3">
                    <div className="p-4 text-defaulttextcolor dark:!text-defaulttextcolor/70">
                        <p className="mb-1 font-semibold text-[#8c9097] dark:text-white/50 opacity-[0.5] text-[1.25rem]">03</p>
                        <div className="text-[0.9375rem] font-semibold sm:flex block items-center justify-between mb-4">
                            <div>Payment Details :</div>
                        </div>
                        <div className="grid grid-cols-12 sm:gap-6">
                            <div className="xl:col-span-12 col-span-12">
                                <div className="mb-4">
                                    <label className="form-label">Delivery Address</label>
                                    <div className="input-group">
                                        <input type="text" className="form-control !rounded-s-sm" placeholder="Address" aria-label="address" aria-describedby="payment-address" defaultValue="MIG-1-11,Monroe Street,Washington D.C,USA" />
                                        <button type="button" className="ti-btn ti-btn-info border-defaultborder !rounded-s-none !mb-0" id="payment-address">Change</button>
                                    </div>
                                </div>
                                <div className="box border dark:border-defaultborder/10 !shadow-none mb-4">
                                    <div className="box-header">
                                        <div className="box-title">
                                            Payment Methods
                                        </div>
                                    </div>
                                    <div className="box-body">
                                        <div className="mb-4 sm:flex block " role="group" aria-label="Basic radio toggle button group">
                                            <input type="radio" className="btn-check " name="btnradio" id="btnradio1" />
                                            <label className="w-full ti-btn ti-btn-outline-light !text-defaulttextcolor sm:!border-e-0 dark:!text-defaulttextcolor/70 dark:!border-defaultborder/10 hover:!bg-light !rounded-e-none" htmlFor="btnradio">C.O.D(Cash on delivery)</label>
                                            <input type="radio" className="btn-check" name="btnradio" id="btnradio2" />
                                            <label className="w-full ti-btn ti-btn-outline-light !text-defaulttextcolor dark:!text-defaulttextcolor/70 sm:!border-e-0 dark:!border-defaultborder/10 hover:!bg-light sm:mt-0 mt-1 !rounded-none" htmlFor="btnradio">UPI</label>
                                            <input type="radio" className="btn-check" name="btnradio" id="btnradio3" defaultChecked />
                                            <label className="w-full ti-btn ti-btn-light !text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:!border-defaultborder/10 hover:!bg-light !rounded-s-none sm:mt-0 mt-1" htmlFor="btnradio">Credit/Debit Card</label>
                                        </div>
                                        <div className="grid grid-cols-12 gap-4">
                                            <div className="xl:col-span-12 col-span-12">
                                                <label htmlFor="payment-card-number" className="form-label">Card Number</label>
                                                <input type="text" className="form-control w-full !rounded-md" id="payment-card-number" placeholder="Card Number" defaultValue="1245 - 5447 - 8934 - XXXX" />
                                            </div>
                                            <div className="xl:col-span-12 col-span-12">
                                                <label htmlFor="payment-card-name" className="form-label">Name On Card</label>
                                                <input type="text" className="form-control w-full !rounded-md" id="payment-card-name" placeholder="Name On Card" defaultValue="JSON TAYLOR" />
                                            </div>
                                            <div className="xl:col-span-4 col-span-12">
                                                <label htmlFor="payment-cardexpiry-date" className="form-label">Expiration Date</label>
                                                <input type="text" className="form-control w-full !rounded-md" id="payment-cardexpiry-date" placeholder="MM/YY" defaultValue="08/2024" />
                                            </div>
                                            <div className="xl:col-span-4 col-span-12">
                                                <label htmlFor="payment-cvv" className="form-label">CVV</label>
                                                <input type="text" className="form-control w-full !rounded-md" id="payment-cvv" placeholder="XXX" defaultValue="341" />
                                            </div>
                                            <div className="xl:col-span-4 col-span-12">
                                                <label htmlFor="payment-security" className="form-label">O.T.P</label>
                                                <input type="text" className="form-control w-full !rounded-md" id="payment-security" placeholder="XXXXXX" defaultValue="183467" />
                                                <label htmlFor="payment-security" className=" mt-1 !text-success !text-[0.6875rem]"><sup className="top-[0.4em]"><i className="ri-star-s-fill"></i></sup>Do not share O.T.P with anyone</label>
                                            </div>
                                            <div className="xl:col-span-12 col-span-12">
                                                <div className="form-check !flex items-center gap-2 !ps-0">
                                                    <input className="form-check-input form-checked-success w-full checked:bg-success checked:ring-success hover:checked:bg-success hover:checked:ring-success focus:checked:bg-success focus:checked:ring-success focus:ring-success focus:border-success" type="checkbox" defaultValue="" id="payment-card-save" defaultChecked />
                                                    <label className="form-check-label" htmlFor="payment-card-save">
                                                        Save this card
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="box-footer">
                                        <div className="grid grid-cols-12 gap-4">
                                            <p className="xl:col-span-12 col-span-12 text-[0.9375rem] font-semibold mb-1">Saved Cards :</p>
                                            <div className="xl:col-span-6 col-span-12">
                                                <div className="form-check payment-card-container mb-0 leading-none">
                                                    <div className="form-check-label">
                                                        <div className="sm:flex block items-center justify-between">
                                                            <div className="me-2 leading-none">
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../../assets/images/ecommerce/png/26.png" alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="saved-card-details">
                                                                <p className="mb-0 font-semibold">XXXX - XXXX - XXXX - 7646</p>
                                                            </div>
                                                            <div>
                                                                <input id="payment-card1" name="payment-cards" type="radio" className="form-check-input !top-[1.5rem]" defaultChecked />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-6 col-span-12">
                                                <div className="form-check payment-card-container mb-0 leading-none">
                                                    <div className="form-check-label">
                                                        <div className="sm:flex block items-center justify-between">
                                                            <div className="me-2 leading-none">
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../../assets/images/ecommerce/png/27.png" alt="" />
                                                                </span>
                                                            </div>
                                                            <div className="saved-card-details">
                                                                <p className="mb-0 font-semibold">XXXX - XXXX - XXXX - 9556</p>
                                                            </div>
                                                            <div>
                                                                <input id="payment-card2" name="payment-cards" type="radio" className="form-check-input !top-[1.5rem]" defaultChecked />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Step>
                <Step title="Confirmation" number="4">
                    <div className="p-[3rem] checkout-payment-success my-3">
                        <div className="mb-[3rem]">
                            <h5 className="text-success font-semibold text-[1.25rem]">Payment Successful...🤝</h5>
                        </div>
                        <div className="mb-[3rem] !inline-flex">
                            <img src="../../../../assets/images/ecommerce/png/24.png" alt="" className="img-fluid" />
                        </div>
                        <div className="mb-6">
                            <p className="mb-1 text-[0.875rem]">You can track your order with Order Id <b>SPK#1FR</b> from <Link className="link-success" href="#!"><u className="text-success">Track Order</u></Link></p>
                            <p className="text-[#8c9097] dark:text-white/50">Thankyou for shopping with us.</p>
                        </div>
                        <Link href={`/components/pages/ecommerce/products/`} className="ti-btn bg-success text-white !font-medium">Continue Shopping<i className="bi bi-cart ms-2"></i></Link>
                    </div>
                </Step>
            </Wizard>
        );
    }
}
//Basic end