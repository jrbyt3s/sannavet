import { Earningsreport } from '@/shared/data/dashboards/coursedata'
import { Countries, Earning, ProductsOverview, Recentorders } from '@/shared/data/dashboards/ecommercedata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React, { Fragment, useState } from 'react'

const Ecommerce = () => {

    // for User search function
    const [Data, setData] = useState(ProductsOverview);

    const userdata = [];

    const myfunction = (idx) => {
        let Data;
        for (Data of ProductsOverview) {
            if (Data.name[0] == " ") {
                Data.name = Data.name.trim();
            }
            if (Data.name.toLowerCase().includes(idx.toLowerCase())) {
                if (Data.name.toLowerCase().startsWith(idx.toLowerCase())) {
                    userdata.push(Data);
                }
            }

        }
        setData(userdata);
    };

    return (
        <Fragment>
            <Seo title={"Ecommerce"} />
            <Pageheader currentpage="Ecommerce" activepage="Dashboards" mainpage="Ecommerce" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-6 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="lg:col-span-6 md:col-span-6 xl:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-body">
                                    <div className="grid grid-cols-12">
                                        <div className="xxxl:col-span-3 col-span-4 flex items-center ecommerce-icon px-0">
                                            <span className="rounded-md p-4 bg-primary/10">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-white primary" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24" /><path d="M18,6h-2c0-2.21-1.79-4-4-4S8,3.79,8,6H6C4.9,6,4,6.9,4,8v12c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V8C20,6.9,19.1,6,18,6z M12,4c1.1,0,2,0.9,2,2h-4C10,4.9,10.9,4,12,4z M18,20H6V8h2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8h4v2c0,0.55,0.45,1,1,1s1-0.45,1-1V8 h2V20z" /></g></svg>
                                            </span>
                                        </div>
                                        <div className="xxxl:col-span-9 col-span-8 ps-0">
                                            <div className="mb-2">Total Sales</div>
                                            <div className="text-[#8c9097] dark:text-white/50 mb-1 text-[0.75rem]">
                                                <span className="text-defaulttextcolor font-semibold text-[1.25rem] leading-none vertical-bottom">
                                                    14,732
                                                </span>
                                            </div>
                                            <div>
                                                <span className="text-[0.75rem] mb-0">Increase by <span className="badge bg-success/10 text-success mx-1">+4.2%</span> this month</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-6 md:col-span-6 xl:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-body">
                                    <div className="grid grid-cols-12">
                                        <div className="xxxl:col-span-3 col-span-4 flex items-center ecommerce-icon secondary  px-0">
                                            <span className="rounded-md p-4 bg-secondary/10">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-white secondary" enableBackground="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0,0h24v24H0V0z" fill="none" /><g><path d="M19.5,3.5L18,2l-1.5,1.5L15,2l-1.5,1.5L12,2l-1.5,1.5L9,2L7.5,3.5L6,2v14H3v3c0,1.66,1.34,3,3,3h12c1.66,0,3-1.34,3-3V2 L19.5,3.5z M15,20H6c-0.55,0-1-0.45-1-1v-1h10V20z M19,19c0,0.55-0.45,1-1,1s-1-0.45-1-1v-3H8V5h11V19z" /><rect height="2" width="6" x="9" y="7" /><rect height="2" width="2" x="16" y="7" /><rect height="2" width="6" x="9" y="10" /><rect height="2" width="2" x="16" y="10" /></g></svg>
                                            </span>
                                        </div>
                                        <div className="xxxl:col-span-9 col-span-8 ps-0">
                                            <div className="mb-2">Total Expenses</div>
                                            <div className="text-[#8c9097] dark:text-white/50 mb-1 text-[0.75rem]">
                                                <span className="font-semibold text-[1.25rem] leading-none text-defaulttextcolor vertical-bottom">
                                                    $28,346.00
                                                </span>
                                            </div>
                                            <div>
                                                <span className="text-[0.75rem] mb-0">Increase by <span className="badge bg-success/10 text-success mx-1">+12.0%</span> this month</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-6 md:col-span-6 xl:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-body">
                                    <div className="grid grid-cols-12">
                                        <div className="xxxl:col-span-3 col-span-4 flex items-center ecommerce-icon success px-0">
                                            <span className="rounded-md p-4 bg-success/10">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-white success" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" /></svg>
                                            </span>
                                        </div>
                                        <div className="xxxl:col-span-9 col-span-8 ps-0">
                                            <div className="mb-2">Total Visitors</div>
                                            <div className="text-[#8c9097] dark:text-white/50 mb-1 text-[0.75rem]">
                                                <span className="text-defaulttextcolor font-semibold text-[1.25rem]  leading-none vertical-bottom">
                                                    1,29,368
                                                </span>
                                            </div>
                                            <div>
                                                <span className="text-[0.75rem] mb-0">Decreased by <span className="badge bg-danger/10 text-danger mx-1">-7.6%</span> this month</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-6 md:col-span-6 xl:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-body">
                                    <div className="grid grid-cols-12">
                                        <div className="xxxl:col-span-3 col-span-4 flex items-center ecommerce-icon warning px-0">
                                            <span className="rounded-md p-4 bg-warning/10">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-white warning" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M15.55 13c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.37-.66-.11-1.48-.87-1.48H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.52 15.37 5.48 17 7 17h12v-2H7l1.1-2h7.45zM6.16 6h12.15l-2.76 5H8.53L6.16 6zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" /></svg>
                                            </span>
                                        </div>
                                        <div className="xxxl:col-span-9 col-span-8 ps-0">
                                            <div className="mb-2">Total Orders</div>
                                            <div className="text-[#8c9097] dark:text-white/50 mb-1 text-[0.75rem]">
                                                <span className="font-semibold text-[1.25rem] leading-none vertical-bottom text-defaulttextcolor">
                                                    35,367
                                                </span>
                                            </div>
                                            <div>
                                                <span className="text-[0.75rem] mb-0">Increased by <span className="badge bg-success/10 text-success mx-1">+2.5%</span> this month</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                            <div className="box overflow-hidden">
                                <div className="ecommerce-sale-image">
                                    <img src="../../../assets/images/ecommerce/png/35.png" className="card-img-top" alt="..." />
                                    <div className="card-img-overlay  p-6 text-white">
                                        <p className=" opacity-[0.7] text-[0.75rem]">Spruko Official.Inc</p>
                                        <p className="font-semibold mb-6 text-[1rem]">BIG SAVING DAYS</p>
                                        <p className="ecommerce-bankoffer-details mb-4">Bank Offer 10% off on Aches Bank Credit Cards, up to $10. On orders of $500 and above <Link href="#!" className="underline text-white">T&amp;C</Link></p>
                                        <p className="ecommerce-sale-days mb-0">15, Jan 2022 - 19, Jan 2022</p>
                                        <p className="ecommerce-sales-calendar text-center mb-0">
                                            <span>15</span>
                                            <span className="block text-[0.9375rem] leading-none font-semibold">Jan</span>
                                        </p>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <Link href="#!" className="text-primary text-[0.9375rem] font-semibold">Biggest sale is back.</Link>
                                    <p className="mb-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore harum accusamus eum dolorum sapiente. Saepe</p>
                                    <button type="button" className="tibtn ti-btn-primary-full ti-btn-wave !py-[0.55rem] !px-[0.95rem] gap-2 rounded-[0.35rem] text-[0.85rem] font-medium !shadow-none me-2">Notify Me</button>
                                    <button type="button" className="ti-btn ti-btn-outline-primary ti-btn-wave !rounded-[0.35rem] !text-[0.85rem] !font-medium !shadow-none">Offers</button>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Recent Orders
                                    </div>
                                    <div className="hs-dropdown ti-dropdown">
                                        <Link aria-label="anchor" href="#!" className="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                                            aria-expanded="false"><i className="fe fe-more-vertical text-[0.8rem]"></i>
                                        </Link>
                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="#!">Action</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="#!">Another action</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="#!">Something else here</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <ul className="list-none mb-0">
                                        {Recentorders.map((idx) => (
                                            <li className={idx.class} key={Math.random()}>
                                                <Link href="#!">
                                                    <div className="flex tems-center">
                                                        <div className="leading-none">
                                                            <span className="inline-flex justify-center items-center">
                                                                <img src={idx.src} alt="" className="w-[2.5rem] h-[2.5rem]leading-[2.5rem] text-[0.8rem] rounded-md" />
                                                            </span>
                                                        </div>
                                                        <div className="flex-grow ms-2">
                                                            <p className="font-semibold mb-0">{idx.product}</p>
                                                            <p className="text-[0.75rem] !text-[#8c9097] dark:text-white/50 mb-0">{idx.text}</p>
                                                        </div>
                                                        <div>
                                                            <span className="text-success font-semibold">${idx.price}</span>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between sm:flex block">
                                    <div className="box-title">
                                        Orders
                                    </div>
                                    <div>
                                        <nav className="sm:flex block sm:mt-0 mt-2" aria-label="Tabs">
                                            <Link href="#!" className="block w-full sm:w-auto hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-4  text-[0.8rem] font-medium text-center rounded-md hover:text-primary active" id="active-item" data-hs-tab="#taskactive" aria-controls="taskactive">
                                                Active Orders
                                            </Link>
                                            <Link href="#!" className="block w-full sm:w-auto hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-4 text-[0.8rem] font-medium text-center  rounded-md hover:text-primary " id="completed-item" data-hs-tab="#completed" aria-controls="completed">
                                                Completed
                                            </Link>
                                            <Link href="#!" className="block w-full sm:w-auto hs-tab-active:bg-primary/10 hs-tab-active:text-primary cursor-pointer text-defaulttextcolor dark:text-defaulttextcolor/70 py-2 px-4 text-[0.8rem] font-medium text-center  rounded-md hover:text-primary " id="cancelled-item" data-hs-tab="#cancelled" aria-controls="cancelled">
                                                Cancelled
                                            </Link>
                                        </nav>
                                    </div>
                                </div>
                                <div className="box-body !p-0">
                                    <div className="tab-content">
                                        <div className="tab-pane show active text-[#8c9097] dark:text-white/50 !border-0 !p-0" id="taskactive"
                                            role="tabpanel">
                                            <div className="table-responsive overflow-auto">
                                                <table className="table box-table table-vcenter whitespace-nowrap mb-0 min-w-full">
                                                    <tbody className="active-tab">
                                                        <tr>
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <div className="leading-none">
                                                                        <span className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                            <img src="../../../assets/images/faces/4.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                        <p className="mb-0">Amanda Nanes</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                    <p className="mb-0 font-semibold">$229.99</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Delivery Date</span>
                                                                    <p className="mb-0">24 May 2022</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../assets/images/ecommerce/png/1.png" alt="" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link aria-label="anchor" href="#!">
                                                                    <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr className="border-y border-inherit border-solid dark:border-defaultborder/10" >
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <div className="leading-none">
                                                                        <span className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                            <img src="../../../assets/images/faces/10.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                        <p className="mb-0">Peter Parkour</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                    <p className="mb-0 font-semibold">$135.29</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Delivery Date</span>
                                                                    <p className="mb-0">18 May 2022</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../assets/images/ecommerce/png/2.png" alt="" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link aria-label="anchor" href="#!">
                                                                    <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr className="border-y border-inherit border-solid dark:border-defaultborder/10">
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <div className="leading-none">
                                                                        <span className="avatar avatar-md offline avatar-rounded me-2 !mb-0">
                                                                            <img src="../../../assets/images/faces/12.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                        <p className="mb-0">Jackie Chen</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                    <p className="mb-0 fw-semibold">$1,299.99</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="aitems-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Delivery Date</span>
                                                                    <p className="mb-0">29 May 2022</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../assets/images/ecommerce/png/3.png" alt="" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link aria-label="anchor" href="#!">
                                                                    <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr className="border-y border-inherit border-solid dark:border-defaultborder/10">
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <div className="leading-none">
                                                                        <span className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                            <img src="../../../assets/images/faces/5.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                        <p className="mb-0">Ryan Gercia</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                    <p className="mb-0 fw-semibold">$249.29</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Delivery Date</span>
                                                                    <p className="mb-0">05 Jun 2022</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../assets/images/ecommerce/png/4.png" alt="" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link aria-label="anchor" href="#!">
                                                                    <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <div className="leading-none">
                                                                        <span className="avatar avatar-md offline avatar-rounded me-2 !mb-0">
                                                                            <img src="../../../assets/images/faces/14.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                        <p className="mb-0">Hugh Jackma</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                    <p className="mb-0 font-semibold">$499.99</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Delivery Date</span>
                                                                    <p className="mb-0">15 May 2022</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../assets/images/ecommerce/png/5.png" alt="" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link aria-label="anchor" href="#!">
                                                                    <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane text-[#8c9097] dark:text-white/50 !border-0 !p-0 hidden" id="completed" role="tabpanel" aria-labelledby="completed-item">
                                            <div className="table-responsive overflow-auto">
                                                <table className="table box-table table-vcenter whitespace-nowrap mb-0 min-w-full">
                                                    <tbody className="active-tab">
                                                        <tr>
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <div className="leading-none">
                                                                        <span className="avatar avatar-md offline avatar-rounded me-2 !mb-0">
                                                                            <img src="../../../assets/images/faces/2.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                        <p className="mb-0">Lisa Rebecca</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                    <p className="mb-0 fw-semibold">$1,199.99</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-success">Delivered On</span>
                                                                    <p className="mb-0">24 Dec 2022</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../assets/images/ecommerce/png/6.png" alt="" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link aria-label="anchor" href="#!">
                                                                    <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-inherit border-solid border-s-0 border-e-0">
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <div className="leading-none">
                                                                        <span className="avatar avatar-md offline avatar-rounded me-2 !mb-0">
                                                                            <img src="../../../assets/images/faces/13.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                        <p className="mb-0">Matt Martin</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                    <p className="mb-0 font-semibold">$799.99</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-success">Delived On</span>
                                                                    <p className="mb-0">18 Nov 2022</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../assets/images/ecommerce/png/7.png" alt="" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link aria-label="anchor" href="#!">
                                                                    <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-inherit border-solid border-s-0 border-e-0">
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <div className="leading-none">
                                                                        <span className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                            <img src="../../../assets/images/faces/7.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                        <p className="mb-0">Mitchell Osama</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                    <p className="mb-0 fw-semibold">$279.00</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-success">Delivery On</span>
                                                                    <p className="mb-0">29 Dec 2022</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../assets/images/ecommerce/png/8.png" alt="" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link aria-label="anchor" href="#!">
                                                                    <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-inherit border-solid border-s-0 border-e-0">
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <div className="leading-none">
                                                                        <span className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                            <img src="../../../assets/images/faces/12.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                        <p className="mb-0">Cornor Mcgood</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                    <p className="mb-0 font-semibold">$79.99</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-success">Delivered On</span>
                                                                    <p className="mb-0">05 Dec 2022</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../assets/images/ecommerce/png/9.png" alt="" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link aria-label="anchor" href="#!">
                                                                    <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <div className="leading-none">
                                                                        <span className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                            <img src="../../../assets/images/faces/15.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                        <p className="mb-0">Kishan Patel</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                    <p className="mb-0 fw-semibold">$1449.29</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-success">Delivered On</span>
                                                                    <p className="mb-0">20 Nov 2022</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../assets/images/ecommerce/png/10.png" alt="" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link aria-label="anchor" href="#!">
                                                                    <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div className="tab-pane text-[#8c9097] dark:text-white/50 !border-0 !p-0 hidden" id="cancelled" role="tabpanel" aria-labelledby="cancelled-item">
                                            <div className="table-responsive overflow-auto">
                                                <table className="table box-table table-vcenter whitespace-nowrap mb-0 min-w-full">
                                                    <tbody className="active-tab">
                                                        <tr>
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <div className="leading-none">
                                                                        <span className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                            <img src="../../../assets/images/faces/6.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                        <p className="mb-0">Hailey Bobber</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                    <p className="mb-0 fw-semibold">$199.99</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-danger">Cancelled Date</span>
                                                                    <p className="mb-0">09 Dec 2022</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../assets/images/ecommerce/png/11.png" alt="" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link aria-label="anchor" href="#!">
                                                                    <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-inherit border-solid border-s-0 border-e-0">
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <div className="leading-none">
                                                                        <span className="avatar avatar-md offline avatar-rounded me-2 !mb-0">
                                                                            <img src="../../../assets/images/faces/14.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                        <p className="mb-0">Anthony Mansion</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                    <p className="mb-0 fw-semibold">$179.99</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-danger">Cancelled Date</span>
                                                                    <p className="mb-0">28 Dec 2022</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../assets/images/ecommerce/png/12.png" alt="" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link aria-label="anchor" href="#!">
                                                                    <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-inherit border-solid border-s-0 border-e-0">
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <div className="leading-none">
                                                                        <span className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                            <img src="../../../assets/images/faces/16.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                        <p className="mb-0">Simon Carter</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                    <p className="mb-0 fw-semibold">$149.99</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-danger">Cancelled Date</span>
                                                                    <p className="mb-0">30 Dec 2022</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../assets/images/ecommerce/png/13.png" alt="" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link aria-label="anchor" href="#!">
                                                                    <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-inherit border-solid border-s-0 border-e-0">
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <div className="leading-none">
                                                                        <span className="avatar avatar-md online avatar-rounded me-2 !mb-0">
                                                                            <img src="../../../assets/images/faces/3.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                        <p className="mb-0">Sofia Sekh</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                    <p className="mb-0 fw-semibold">$1439.99</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-danger">Cancelled Date</span>
                                                                    <p className="mb-0">03 Dec 2022</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../assets/images/ecommerce/png/14.png" alt="" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link aria-label="anchor" href="#!">
                                                                    <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <div className="flex items-center">
                                                                    <div className="leading-none">
                                                                        <span className="avatar avatar-md offline avatar-rounded me-2 !mb-0">
                                                                            <img src="../../../assets/images/faces/9.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="items-center">
                                                                        <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Name</span>
                                                                        <p className="mb-0">Kimura Kai</p>
                                                                    </div>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Price</span>
                                                                    <p className="mb-0 fw-semibold">$1092.99</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <div className="items-center">
                                                                    <span className="text-[0.75rem] text-danger">Cancelled Date</span>
                                                                    <p className="mb-0">02 Dec 2022</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                <span className="avatar avatar-md">
                                                                    <img src="../../../assets/images/ecommerce/png/15.png" alt="" />
                                                                </span>
                                                            </td>
                                                            <td>
                                                                <Link aria-label="anchor" href="#!">
                                                                    <span className="orders-arrow"><i className="ri-arrow-right-s-line text-[1.125rem] rtl:before:content-['\ea64']"></i></span>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-6 col-span-12">
                    <div className="grid grid-cols-12 gap-x-6">
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">Earnings</div>
                                    <div className="hs-dropdown ti-dropdown">
                                        <Link href="#!" className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                                            aria-expanded="false">
                                            View All<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                        </Link>
                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">Today</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">This Week</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">Last Week</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="sm:grid sm:grid-cols-12 lg:ps-[3rem] mb-6 pb-6 sm:gap-0 gap-y-3">
                                        <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4">
                                            <div className="mb-1 earning first-half ms-4">First Half</div>
                                            <div className="mb-0">
                                                <span className="mt-1 text-[1rem] font-semibold">$51.94k</span>
                                                <span className="text-success"><i className="fa fa-caret-up mx-1"></i>
                                                    <span className="badge bg-success/10 text-success !px-1 !py-2 text-[0.625rem]">+0.9%</span></span>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4">
                                            <div className="mb-1 earning top-gross ms-4">Top Gross</div>
                                            <div className="mb-0">
                                                <span className="mt-1 text-[1rem] font-semibold">$18.32k</span>
                                                <span className="text-success"><i className="fa fa-caret-up mx-1"></i>
                                                    <span className="badge bg-success/10 text-success !px-1 !py-2 text-[0.625rem]">+0.39%</span></span>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4">
                                            <div className="mb-1 earning second-half ms-3">Second Half</div>
                                            <div className="mb-0">
                                                <span className="mt-1 text-[1rem] font-semibold">$38k</span>
                                                <span className="text-danger"><i className="fa fa-caret-up mx-1"></i>
                                                    <span className="badge bg-danger/10 text-danger !px-1 !py-2 text-[0.625rem]">-0.15%</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div id="earnings">
                                        <Earning />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box custom-card">
                                <div className="box-header">
                                    <div className="box-title">Top Selling Products</div>
                                </div>
                                <div className="box-body !p-0">
                                    <div className="table-responsive">
                                        <table className="table whitespace-nowrap min-w-full mb-0">
                                            <thead>
                                                <tr>
                                                    <th scope="col" className="text-center">S.no</th>
                                                    <th scope="col" className="text-start">Product Name</th>
                                                    <th scope="col" className="text-start">Category</th>
                                                    <th scope="col" className="text-start">Stock</th>
                                                    <th scope="col" className="text-start">Total Sales</th>
                                                </tr>
                                            </thead>
                                            <tbody className="top-selling">
                                                <tr className="border-y border-inherit border-solid dark:border-defaultborder/10 ">
                                                    <td className="text-center leading-none">
                                                        <span className="avatar avatar-md !rounded-full">
                                                            <img src="../../../assets/images/ecommerce/png/36.png" className="p-2 !rounded-full bg-light" alt="" />
                                                        </span>
                                                    </td>
                                                    <td>Ethnic School bag for children (24L)</td>
                                                    <td>Bags</td>
                                                    <td><span className="badge badge-sm bg-success/10 text-success !font-normal">In Stock</span></td>
                                                    <td>
                                                        <span className="font-semibold">5,093</span>
                                                    </td>
                                                </tr>
                                                <tr className="border-y border-inherit border-solid dark:border-defaultborder/10 ">
                                                    <td className="text-center leading-none">
                                                        <span className="avatar avatar-md !rounded-full">
                                                            <img src="../../../assets/images/ecommerce/png/38.png" className="p-2 !rounded-full bg-light" alt="" />
                                                        </span>
                                                    </td>
                                                    <td>Leather jacket for men (S,M,L,XL)</td>
                                                    <td>Clothing</td>
                                                    <td><span className="badge badge-sm bg-success/10 text-success !font-normal">In Stock</span></td>
                                                    <td>
                                                        <span className="font-semibold">6,890</span>
                                                    </td>
                                                </tr>
                                                <tr className="border-y border-inherit border-solid dark:border-defaultborder/10 ">
                                                    <td className="text-center leading-none">
                                                        <span className="avatar avatar-md !rounded-full">
                                                            <img src="../../../assets/images/ecommerce/png/39.png" className="p-2 !rounded-full bg-light" alt="" />
                                                        </span>
                                                    </td>
                                                    <td>Childrens Teddy toy of high quality</td>
                                                    <td>Toys</td>
                                                    <td><span className="badge badge-sm bg-danger/10 text-danger !font-normal">Out Of Stock</span></td>
                                                    <td>
                                                        <span className="font-semibold">5,423</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-center leading-none">
                                                        <span className="avatar avatar-md !rounded-full">
                                                            <img src="../../../assets/images/ecommerce/png/40.png" className="p-2 !rounded-full bg-light" alt="" />
                                                        </span>
                                                    </td>
                                                    <td>Orange smart watch with square dial (24mm)</td>
                                                    <td>Fashion</td>
                                                    <td><span className="badge badge-sm bg-danger/10 text-danger !font-normal">Out Of Stock</span></td>
                                                    <td>
                                                        <span className="font-semibold">10,234</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Top Countries By Sales
                                    </div>
                                    <div className="hs-dropdown ti-dropdown">
                                        <Link aria-label="anchor" href="#!" className="flex items-center justify-center w-[1.75rem] h-[1.75rem] !text-defaulttextcolor !text-[0.8rem] !py-1 !px-2 rounded-sm bg-light border-light shadow-none !font-medium"
                                            aria-expanded="false"><i className="fe fe-more-vertical text-[0.8rem]"></i>
                                        </Link>
                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="#!">Action</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="#!">Another action</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block" href="#!">Something else here</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="flex items-center mb-2">
                                        <h4 className="mb-0 leading-none text-[1.5rem] font-medium">38,256</h4>
                                        <span className="badge bg-primary/10 mx-1 text-primary">12.24%</span>
                                        <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">Since last week</span>
                                    </div>
                                    <ul className="mb-0 pt-3 list-none">
                                        {Countries.map((idx) => (
                                            <li className={idx.class2} key={Math.random()}>
                                                <div className="flex justify-between items-center">
                                                    <div className="flex items-center leading-none">
                                                        <span className="avatar avatar-xs me-2">
                                                            <img src={idx.src} alt="" className="rounded-full h-[1.25rem] w-[1.25rem]" />
                                                        </span>
                                                        <span className="top-country-name w-[4.5rem]">{idx.text}</span>
                                                    </div>
                                                    <div>
                                                        <i className={`ti ti-trending-up text-[1rem] text-${idx.color}`}></i>
                                                    </div>
                                                    <div className="text-[0.875rem]">{idx.price}</div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="xxl:col-span-6 xl:col-span-6 col-span-12">
                            <div className="box">
                                <div className="box-header justify-between">
                                    <div className="box-title">
                                        Top Customers
                                    </div>
                                    <div className="hs-dropdown ti-dropdown">
                                        <Link href="#!" className="text-[0.75rem] px-2 font-normal text-[#8c9097] dark:text-white/50"
                                            aria-expanded="false">
                                            View All<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                        </Link>
                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">Today</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">This Week</Link></li>
                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                href="#!">Last Week</Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <ul className="list-none mb-0">
                                        <li className="mb-4">
                                            <Link href="#!">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-start justify-center">
                                                        <img src="../../../assets/images/faces/4.jpg" alt="" className="avatar avatar-md avatar-rounded !mb-0 me-2" />
                                                        <div>
                                                            <p className="mb-0 font-semibold">Emma Wilson</p>
                                                            <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">15 Purchases<i className="bi bi-patch-check-fill text-[0.875rem] text-primary ms-2"></i></p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="text-[0.875rem]">$1,835</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link href="#!">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-start justify-center">
                                                        <img src="../../../assets/images/faces/15.jpg" alt="" className="avatar avatar-md avatar-rounded !mb-0 me-2" />
                                                        <div>
                                                            <p className="mb-0 font-semibold">Robert Lewis</p>
                                                            <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">18 Purchases<i className="bi bi-patch-check-fill text-[0.875rem] text-primary ms-2"></i></p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="text-[0.875rem]">$2,415</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="mb-4">
                                            <Link href="#!">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-start justify-center">
                                                        <img src="../../../assets/images/faces/5.jpg" alt="" className="avatar avatar-md avatar-rounded !mb-0 me-2" />
                                                        <div>
                                                            <p className="mb-0 font-semibold">Angelina Hose</p>
                                                            <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">21 Purchases<i className="bi bi-patch-check-fill text-[0.875rem] text-primary ms-2"></i></p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="text-[0.875rem]">$2,341</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                        <li className="mb-0">
                                            <Link href="#!">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-start justify-center">
                                                        <img src="../../../assets/images/faces/2.jpg" alt="" className="me-2 avatar avatar-md avatar-rounded !mb-0" />
                                                        <div>
                                                            <p className="mb-0 font-semibold">Samantha Sam</p>
                                                            <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">24 Purchases<i className="bi bi-patch-check-fill text-[0.875rem] text-primary ms-2"></i></p>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="text-[0.875rem]">2,624</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header justify-between">
                            <div className="box-title">
                                Products Overview
                            </div>
                            <div className="flex flex-wrap gap-2 mt-2 mt-sm-0">
                                <div>
                                    <input className="ti-form-control form-control-sm" type="text" placeholder="Search Here" onChange={(ele) => { myfunction(ele.target.value); }}
                                        aria-label=".form-control-sm example" />
                                </div>
                                <div className="hs-dropdown ti-dropdown">
                                    <Link href="#!"
                                        className="ti-btn bg-primary text-white !py-1 !px-2 !text-[0.75rem] !m-0 !gap-0 !font-medium"
                                        aria-expanded="false">
                                        Sort By<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                    </Link>
                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            href="#!">New</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            href="#!">Popular</Link></li>
                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                            href="#!">Relevant</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="overflow-x-auto">
                                <table className="table min-w-full whitespace-nowrap table-hover border table-bordered">
                                    <thead>
                                        <tr className="border border-inherit border-solid  dark:border-defaultborder/10 ">
                                            <th scope="col" className="!text-start">Name</th>
                                            <th scope="col" className="!text-start">Product Id</th>
                                            <th scope="col" className="!text-start">Price</th>
                                            <th scope="col" className="!text-start">Status</th>
                                            <th scope="col" className="!text-start">Sales</th>
                                            <th scope="col" className="!text-start">Revenue</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {Data.map((idx) => (
                                            <tr className="border-y border-inherit border-solid dark:border-defaultborder/10" key={Math.random()}>
                                                <td>
                                                    <div className="flex items-center">
                                                        <div className="me-2 leading-none">
                                                            <span className="avatar avatar-sm">
                                                                <img src={idx.src} alt="" />
                                                            </span>
                                                        </div>
                                                        <div className="text-sm">{idx.name}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="font-semibold">{idx.productid}</span>
                                                </td>
                                                <td>
                                                    {idx.price}
                                                </td>
                                                <td>
                                                    <span className={`badge bg-${idx.color}/10 text-${idx.color}`}>{idx.status}</span>
                                                </td>
                                                <td>
                                                    <span className="">{idx.sales}</span>
                                                </td>
                                                <td>
                                                    <span className="">{idx.text}</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="box-footer">
                            <div className="sm:flex items-center">
                                <div>
                                    Showing 5 Entries <i className="bi bi-arrow-right ms-2 font-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="ti-pagination mb-0">
                                            <li className="page-item disabled">
                                                <Link className="page-link" href="#!">
                                                    Prev
                                                </Link>
                                            </li>
                                            <li className="page-item"><Link className="page-link active" href="#!">1</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
                                            <li className="page-item">
                                                <Link className="page-link !text-primary" href="#!">
                                                    next
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}
Ecommerce.layout = "Contentlayout"

export default Ecommerce