import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment, useState } from 'react';
import { AddToCart } from '@/shared/redux/action';
import { connect } from 'react-redux';
import { Itemsdata1 } from '@/shared/data/pages/ecommerces/ecommercedata';
import Link from 'next/link';

const Products = ({ local_varaiable }) => {

    const [allData, setAllData] = useState(Itemsdata1);
    const userdata = [];

    const myfunction = (idx) => {
        let Data;
        for (Data of local_varaiable.ecommercedata) {
            if (Data.title[0] == " ") {
                Data.title = Data.title.trim();
            }
            if (Data.title.toLowerCase().includes(idx.toLowerCase())) {
                if (Data.title.toLowerCase().startsWith(idx.toLowerCase())) {
                    userdata.push(Data);
                }
            }

        }
        setAllData(userdata);
    };

    return (
        <Fragment>
            <Seo title={"Products"} />
            <Pageheader currentpage="Products" activepage="Ecommerce" mainpage="Products" />
            <div className="mb-6">
                <div className="grid grid-cols-12 gap-x-6">
                    <div className="xl:col-span-12 col-span-12">
                        <div className="box">
                            <div className="box-body !p-0">
                                <nav className="w-full mx-auto px-4 xxl:flex sm:items-center xxl:justify-between navbar navbar-expand-xxl bg-white dark:bg-bodybg !py-2" aria-label="Global">
                                    <div className="flex items-center justify-between">
                                        <Link href="/components/dashboards/crm/" className="header-logo me-6">
                                            <img src="../../../../assets/images/brand-logos/toggle-dark.png" alt="logo" className="dark:hidden block" />
                                            <img src="../../../../assets/images/brand-logos/toggle-dark.png" alt="logo" className="hidden dark:block" />
                                        </Link>
                                        <div className="xxl:hidden">
                                            <button type="button"
                                                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-sm border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-offset-white focus:ring-primary transition-all text-sm dark:bg-bodybg dark:hover:bg-black/20 dark:border-white/10 dark:text-[#8c9097] dark:text-white/50 dark:hover:text-white dark:focus:ring-offset-white/10"
                                                data-hs-collapse="#navbar-collapse-with-animation"
                                                aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                                                <svg className="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor"
                                                    viewBox="0 0 16 16">
                                                    <path fillRule="evenodd"
                                                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                                </svg>
                                                <svg className="hs-collapse-open:block hidden w-4 h-4" width="16" height="16" fill="currentColor"
                                                    viewBox="0 0 16 16">
                                                    <path
                                                        d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div id="navbar-collapse-with-animation" className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow xxl:block">
                                        <div className="xxl:flex flex-wrap gap-x-5 gap-y-2 mt-5 sm:mt-0">
                                            <ul className="navbar-nav me-auto lg:mb-0 xxl:items-center xxl:flex flex-grow mt-2 xxl:mt-0 items-center flex-wrap">
                                                <li className="nav-item mb-2 xxl:mb-0">
                                                    <Link className="nav-link whitespace-nowrap text-defaulttextcolor dark:text-defaulttextcolor/70 active hover:!text-primary" aria-current="page"
                                                        href="#!">Men</Link>
                                                </li>
                                                <li className="nav-item mb-2 xxl:mb-0">
                                                    <Link className="nav-link whitespace-nowrap text-defaulttextcolor dark:text-defaulttextcolor/70 hover:!text-primary" href="#!">Women</Link>
                                                </li>
                                                <li className="nav-item mb-2 xxl:mb-0 hs-dropdown ti-dropdown">
                                                    <Link className="nav-link whitespace-nowrap text-defaulttextcolor dark:text-defaulttextcolor/70 dropdown-toggle" href="#!"
                                                        id="navbarDropdown"
                                                        aria-expanded="false">
                                                        Kids<i
                                                            className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                                    </Link>
                                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden"
                                                        aria-labelledby="navbarDropdown">
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            href="#!">Action</Link></li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            href="#!">Another action</Link>
                                                        </li>
                                                        <li>
                                                            <hr className="dropdown-divider" />
                                                        </li>
                                                        <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                            href="#!">Something else
                                                            here</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="nav-item mb-2 xxl:mb-0">
                                                    <Link href="#!" className="nav-link whitespace-nowrap text-defaulttextcolor dark:text-defaulttextcolor/70 hover:!text-primary">Today Deals</Link>
                                                </li>
                                                <li className="nav-item mb-2 xxl:mb-0">
                                                    <Link href="#!" className="nav-link whitespace-nowrap text-defaulttextcolor dark:text-defaulttextcolor/70 hover:!text-primary">Electronics</Link>
                                                </li>
                                                <li className="nav-item mb-2 xxl:mb-0">
                                                    <Link href="#!" className="nav-link whitespace-nowrap text-defaulttextcolor dark:text-defaulttextcolor/70 hover:!text-primary">Home &amp; Kitchen</Link>
                                                </li>
                                                <li className="nav-item mb-2 xxl:mb-0">
                                                    <Link href="#!" className="nav-link whitespace-nowrap text-defaulttextcolor dark:text-defaulttextcolor/70 hover:!text-primary">Fashion</Link>
                                                </li>
                                                <li className="nav-item mb-2 xxl:mb-0">
                                                    <Link href="#!" className="nav-link whitespace-nowrap text-defaulttextcolor dark:text-defaulttextcolor/70 hover:!text-primary"><i
                                                        className="ri-customer-service-line me-2 align-middle inline-block"></i>Customer
                                                        Service</Link>
                                                </li>
                                                <li className="nav-item xxl:mb-mb-0 mb-2 xxl:ms-0 !ms-4">
                                                    <div className="btn-group xxl:flex block hs-dropdown ti-dropdown">
                                                        <button className="ti-btn  !text-[0.75rem] ti-btn-primary !m-0"
                                                            type="button"
                                                            aria-expanded="false">
                                                            SortBy<i
                                                                className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                                        </button>
                                                        <ul className="hs-dropdown-menu ti-dropdown-menu hidden">
                                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                                href="#!">Featured</Link></li>
                                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                                href="#!">Price: High to Low</Link></li>
                                                            <li><Link className="ti-dropdown-item active !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                                href="#!">Price: Low to High</Link></li>
                                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                                href="#!">Newest</Link></li>
                                                            <li><Link className="ti-dropdown-item !py-2 !px-[0.9375rem] !text-[0.8125rem] !font-medium block"
                                                                href="#!">Ratings</Link></li>
                                                        </ul>
                                                    </div>
                                                </li>
                                                <li className="nav-item xxl:mb-0 mb-2 xxl:ms-4 !ms-4">
                                                    <div className="inline-flex">
                                                        <button type="button"
                                                            className="ti-btn !py-[0.45rem] !px-3 bg-primary text-white !rounded-e-none">IV</button>
                                                        <button type="button"
                                                            className="ti-btn !py-[0.45rem] !px-3 bg-primary text-white !rounded-none">III</button>
                                                        <button type="button"
                                                            className="ti-btn !py-[0.45rem] !px-3 bg-primary text-white !rounded-s-none">II</button>
                                                    </div>
                                                </li>
                                            </ul>
                                            <div className="sm:flex" role="search">
                                                <input className="form-control !w-auto !rounded-sm me-2" type="search" onChange={(ele) => { myfunction(ele.target.value); }}
                                                    placeholder="Search" aria-label="Search" />
                                                <button className="ti-btn ti-btn-light !font-medium mt-2 sm:mt-0"
                                                    type="submit">Search</button>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-3 xl:col-span-4 lg:col-span-4 md:col-span-12 col-span-12">
                        <div className="box products-navigation-card">
                            <div className="box-body !p-0">
                                <div className="p-4 border-b dark:border-defaultborder/10">
                                    <p className="font-semibold mb-0 text-[#8c9097] dark:text-white/50">CATEGORIES</p>
                                    <div className="px-2 py-4 pb-0">
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value=""
                                                id="electronics" />
                                            <label className="form-check-label" htmlFor="electronics">
                                                Electronics
                                            </label>
                                            <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">2,712</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value=""
                                                id="Accesories" />
                                            <label className="form-check-label" htmlFor="Accesories">
                                                Accesories
                                            </label>
                                            <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">536</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="" id="clothing"
                                                defaultChecked />
                                            <label className="form-check-label" htmlFor="clothing">
                                                Clothing
                                            </label>
                                            <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">18,289</span>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="fashion" />
                                            <label className="form-check-label" htmlFor="fashion">
                                                Fashion
                                            </label>
                                            <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">3,453</span>
                                        </div>
                                        <div id="hs-show-hide-categories-heading"
                                            className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                                            aria-labelledby="hs-show-hide-categories">
                                            <div className="form-check mt-1 mb-2">
                                                <input className="form-check-input" type="checkbox" value=""
                                                    id="furniture" />
                                                <label className="form-check-label" htmlFor="furniture">
                                                    Furniture
                                                </label>
                                                <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">7,165</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" value=""
                                                    id="footwear" />
                                                <label className="form-check-label" htmlFor="footwear">
                                                    Footwear
                                                </label>
                                                <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">5,964</span>
                                            </div>
                                            <div className="form-check mb-2">
                                                <input className="form-check-input" type="checkbox" value=""
                                                    id="mobiles" />
                                                <label className="form-check-label" htmlFor="mobiles">
                                                    Mobiles
                                                </label>
                                                <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">2,123</span>
                                            </div>
                                        </div>
                                        <Link className="ecommerce-more-link text-success hs-collapse-toggle inline-flex items-center gap-x-2"
                                            href="#!" id="hs-show-hide-categories"
                                            data-hs-collapse="#hs-show-hide-categories-heading">
                                            <span className="hs-collapse-open:hidden">MORE</span>
                                            <span className="hs-collapse-open:block hidden">MORE</span>
                                            <svg className="hs-collapse-open:rotate-180 w-2.5 h-2.5" width="16"
                                                height="16" viewBox="0 0 16 16" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-b dark:border-defaultborder/10">
                                <p className="font-semibold mb-0 text-[#8c9097] dark:text-white/50">BRANDS</p>
                                <div className="px-2 py-4 pb-0">
                                    <div className="form-check mb-2 ">
                                        <input className="form-check-input" type="checkbox" value="" id="Jimmy-Lolfiger"
                                            defaultChecked />
                                        <label className="form-check-label" htmlFor="Jimmy-Lolfiger">
                                            Jimmy Lolfiger
                                        </label>
                                        <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">512</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="dapzem1"
                                            defaultChecked />
                                        <label className="form-check-label" htmlFor="dapzem1">
                                            Dapzem &amp; Co
                                        </label>
                                        <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">2,186</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="denim-winjo1"
                                            defaultChecked />
                                        <label className="form-check-label" htmlFor="denim-winjo1">
                                            Denim Winjo
                                        </label>
                                        <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">734</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value=""
                                            id="Louie-Phillippe" />
                                        <label className="form-check-label" htmlFor="Louie-Phillippe">
                                            Louie Phillippe
                                        </label>
                                        <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">16</span>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""
                                            id="garage-clothing" />
                                        <label className="form-check-label" htmlFor="garage-clothing">
                                            Garage &amp;Co
                                        </label>
                                        <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">1,432</span>
                                    </div>
                                    <div id="hs-show-hide-brands-heading"
                                        className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                                        aria-labelledby="hs-show-hide-brands">
                                        <div className="form-check mt-1 mb-2">
                                            <input className="form-check-input" type="checkbox" value="" id="blueberry"
                                                defaultChecked />
                                            <label className="form-check-label" htmlFor="blueberry">
                                                Blueberry &amp;Co
                                            </label>
                                            <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">257</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value=""
                                                id="aus-polo-assn" defaultChecked />
                                            <label className="form-check-label" htmlFor="aus-polo-assn">
                                                Aus Polo Assn
                                            </label>
                                            <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">1,845</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value="" id="denim-corp"
                                                defaultChecked />
                                            <label className="form-check-label" htmlFor="denim-corp">
                                                Denim Corp
                                            </label>
                                            <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">5,893</span>
                                        </div>
                                    </div>
                                    <Link className="ecommerce-more-link text-success hs-collapse-toggle inline-flex items-center gap-x-2"
                                        href="#!" id="hs-show-hide-brands"
                                        data-hs-collapse="#hs-show-hide-brands-heading">
                                        <span className="hs-collapse-open:hidden">MORE</span>
                                        <span className="hs-collapse-open:block hidden">MORE</span>
                                        <svg className="hs-collapse-open:rotate-180 w-2.5 h-2.5" width="16" height="16"
                                            viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                            <div className="p-4 border-b dark:border-defaultborder/10">
                                <p className="font-semibold mb-0 text-[#8c9097] dark:text-white/50">PRICE</p>
                                <div className="px-2 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="low" />
                                        <label className="form-check-label" htmlFor="low">
                                            $0 - $599
                                        </label>
                                        <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">22,873</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="low1" defaultChecked />
                                        <label className="form-check-label" htmlFor="low1">
                                            $599 - $1299
                                        </label>
                                        <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">11,345</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="medium" />
                                        <label className="form-check-label" htmlFor="medium">
                                            $1,299 - $2,199
                                        </label>
                                        <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">6,987</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="high" />
                                        <label className="form-check-label" htmlFor="high">
                                            $2,199 - $3,499
                                        </label>
                                        <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">5,236</span>
                                    </div>
                                    <div className="form-check mb-4">
                                        <input className="form-check-input" type="checkbox" value="" id="high1" />
                                        <label className="form-check-label" htmlFor="high1">
                                            $3,499 &amp;Above
                                        </label>
                                        <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">3,735</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 border-b dark:border-defaultborder/10">
                                <p className="font-semibold mb-0 text-[#8c9097] dark:text-white/50">DISCOUNT</p>
                                <div className="px-2 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value=""
                                            id="Jimmy-Lolfiger1" />
                                        <label className="form-check-label" htmlFor="Jimmy-Lolfiger1">
                                            0% - 20%
                                        </label>
                                        <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">16,563</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="dapzem2" />
                                        <label className="form-check-label" htmlFor="dapzem2">
                                            20% - 40%
                                        </label>
                                        <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">15,234</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="denim-winjo" />
                                        <label className="form-check-label" htmlFor="denim-winjo">
                                            40% - 60%
                                        </label>
                                        <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">6,278</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value=""
                                            id="Louie-Phillippe1" defaultChecked />
                                        <label className="form-check-label" htmlFor="Louie-Phillippe1">
                                            60% - 80%
                                        </label>
                                        <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">4,531</span>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""
                                            id="garage-clothing1" />
                                        <label className="form-check-label" htmlFor="garage-clothing1">
                                            80% - 90%
                                        </label>
                                        <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">2,405</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <p className="font-semibold mb-0 text-[#8c9097] dark:text-white/50">SIZES</p>
                                <div className="px-2 py-3 pb-0">
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="extra-small" />
                                        <label className="form-check-label" htmlFor="extra-small">
                                            Extra Small (XS)
                                        </label>
                                        <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">23,156</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="small" />
                                        <label className="form-check-label" htmlFor="small">
                                            Small (SM)
                                        </label>
                                        <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">15,632</span>
                                    </div>
                                    <div className="form-check mb-2">
                                        <input className="form-check-input" type="checkbox" value="" id="medium1" />
                                        <label className="form-check-label" htmlFor="medium1">
                                            Medium (MD)
                                        </label>
                                        <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">15,032</span>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value="" id="large" defaultChecked />
                                        <label className="form-check-label" htmlFor="large">
                                            Large (L)
                                        </label>
                                        <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">7,154</span>
                                    </div>
                                    <div id="hs-show-hide-sizes-heading"
                                        className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
                                        aria-labelledby="hs-show-hide-sizes">
                                        <div className="form-check mt-1 mb-2">
                                            <input className="form-check-input" type="checkbox" value=""
                                                id="extra-large" />
                                            <label className="form-check-label" htmlFor="extra-large">
                                                Extra Large (XL)
                                            </label>
                                            <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">5,946</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value=""
                                                id="double-extralarge" />
                                            <label className="form-check-label" htmlFor="double-extralarge">
                                                XXL
                                            </label>
                                            <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">3,267</span>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" value=""
                                                id="triple-extralarge" />
                                            <label className="form-check-label" htmlFor="triple-extralarge">
                                                XXL
                                            </label>
                                            <span className="badge bg-light text-[#8c9097] dark:text-white/50 ltr:float-right rtl:float-left">578</span>
                                        </div>
                                    </div>
                                    <Link className="ecommerce-more-link text-success hs-collapse-toggle inline-flex items-center gap-x-2"
                                        href="#!" id="hs-show-hide-sizes"
                                        data-hs-collapse="#hs-show-hide-sizes-heading">
                                        <span className="hs-collapse-open:hidden">MORE</span>
                                        <span className="hs-collapse-open:block hidden">MORE</span>
                                        <svg className="hs-collapse-open:rotate-180 w-2.5 h-2.5" width="16" height="16"
                                            viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xxl:col-span-9 xl:col-span-8 lg:col-span-8 md:col-span-12 col-span-12">
                        <div className="grid grid-cols-12 gap-x-6">
                            {allData.map((idx) => (
                                <div className="xxl:col-span-3 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12" key={Math.random()}>
                                    <div className="box product-card">
                                        <div className="box-body">
                                            <Link href="/components/pages/ecommerce/product-details/" className="product-image">
                                                <img src={idx.preview} className="card-img mb-3 rounded-md"
                                                    alt="..." />
                                            </Link>
                                            <div className="product-icons">
                                                <Link aria-label="anchor" href="/components/pages/ecommerce/wishlist/" className="wishlist"><i
                                                    className="ri-heart-line"></i></Link>
                                                <Link aria-label="anchor" href="/components/pages/ecommerce/cart/" className="cart" onClick={() => { AddToCart(idx.id); }}><i
                                                    className="ri-shopping-cart-line"></i></Link>
                                                <Link aria-label="anchor" href="/components/pages/ecommerce/product-details/" className="view"><i
                                                    className="ri-eye-line"></i></Link>
                                            </div>
                                            <p
                                                className="product-name font-semibold mb-0 flex items-center justify-between">
                                                {idx.title}<span className="ltr:float-right rtl:float-left text-warning text-xs">4.2<i
                                                    className="ri-star-s-fill align-middle ms-1 inline-block"></i></span>
                                            </p>
                                            <p className="product-description text-[.6875rem] text-[#8c9097] dark:text-white/50 mb-2">
                                                {idx.description}</p>
                                            <p className="mb-1 font-semibold text-[1rem] flex items-center justify-between">
                                                <span>{idx.newpr}<span
                                                    className="text-[#8c9097] dark:text-white/50 line-through ms-1 inline-block opacity-[0.6]">{idx.newpr}</span></span><span
                                                        className="badge bg-secondary/10 text-secondary ltr:float-right rtl:float-left text-[0.625rem]">72%
                                                    off</span>
                                            </p>
                                            <p
                                                className="text-[.6875rem] text-success font-semibold mb-0 flex items-center">
                                                <i className="ti ti-discount-2 text-[1rem] me-1"></i>Offer Price {idx.offerprice}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <ul className="ti-pagination !px-3 !py-[0.375rem] !text-[1rem] !mb-4 flex justify-end">
                <li className="page-item disabled">
                    <Link className="page-link !px-3 !py-[0.375rem]" href="#!">Previous</Link>
                </li>
                <li className="page-item"><Link className="page-link !px-3 !py-[0.375rem]" href="#!">1</Link></li>
                <li className="page-item"><Link className="page-link !px-3 !py-[0.375rem]" href="#!">2</Link></li>
                <li className="page-item"><Link className="page-link !px-3 !py-[0.375rem]" href="#!">3</Link></li>
                <li className="page-item">
                    <Link className="page-link !px-3 !py-[0.375rem]" href="#!">Next</Link>
                </li>
            </ul>
        </Fragment>
    )
}
Products.layout = "Contentlayout"

const mapStateToProps = (state) => ({
    local_varaiable: state
});
export default connect(mapStateToProps, { AddToCart })(Products);