import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Thumbs, FreeMode, Navigation } from 'swiper/modules';
import Link from 'next/link';

const Productdetails = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <Fragment>
            <Seo title={"Product Details"} />
            <Pageheader currentpage="Product Details" activepage="Ecommerce" mainpage="Product Details" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-body">
                            <div className="sm:grid grid-cols-12 xxl:md:!gap-[4rem]">
                                <div className="xxl:col-span-3 xl:col-span-12 col-span-12">
                                    <div className="sm:grid grid-cols-12 !gap-x-6 md:me-[1rem] ">
                                        <div className="xxl:col-span-12 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12 md:mb-[3rem] mb-4">
                                            <Swiper
                                                spaceBetween={10} autoplay={{ delay: 2500, disableOnInteraction: false, }} navigation={true} thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                                modules={[FreeMode, Navigation, Thumbs, Autoplay]} className="mySwiper2 swiper swiper-preview swiper-preview-details rounded-md bg-light" >
                                                <SwiperSlide id="img-container">
                                                    <img className="img-fluid" src="../../../../assets/images/ecommerce/png/15.png" alt="img" />
                                                </SwiperSlide>
                                                <SwiperSlide className="image-container">
                                                    <img className="img-fluid" src="../../../../assets/images/ecommerce/png/13.png" alt="img" />
                                                </SwiperSlide>
                                                <SwiperSlide className="image-container">
                                                    <img className="img-fluid" src="../../../../assets/images/ecommerce/png/14.png" alt="img" />
                                                </SwiperSlide>
                                                <SwiperSlide className="image-container">
                                                    <img className="img-fluid" src="../../../../assets/images/ecommerce/png/17.png" alt="img" />
                                                </SwiperSlide>
                                            </Swiper>
                                            <Swiper onSwiper={setThumbsSwiper} autoplay={{ delay: 2500, disableOnInteraction: false, }} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true}
                                                modules={[FreeMode, Navigation, Thumbs, Autoplay]} className="mySwiper swiper swiper-view">
                                                <SwiperSlide className="rtl:me-0">
                                                    <img className="img-fluid" src="../../../../assets/images/ecommerce/png/15.png" alt="img" />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img className="img-fluid" src="../../../../assets/images/ecommerce/png/13.png" alt="img" />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img className="img-fluid" src="../../../../assets/images/ecommerce/png/14.png" alt="img" />
                                                </SwiperSlide>
                                                <SwiperSlide>
                                                    <img className="img-fluid" src="../../../../assets/images/ecommerce/png/17.png" alt="img" />
                                                </SwiperSlide>
                                            </Swiper>
                                        </div>
                                        <div className="xxl:col-span-12 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12 md:block hidden">
                                            <p className="text-[.9375rem] font-semibold mb-2">Similar Products :</p>
                                            <div className="table-responsive">
                                                <table className="table table-bordered whitespace-nowrap min-w-full">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <Link href="#!">
                                                                    <div className="flex items-start">
                                                                        <div className="similar-products-image me-2">
                                                                            <img src="../../../../assets/images/ecommerce/png/16.png" alt="" />
                                                                        </div>
                                                                        <div className="flex-grow">
                                                                            <p className="mb-1 text-[0.875rem] font-semibold similar-product-name text-truncate">Omega watch series 3</p>
                                                                            <p className="mb-0">
                                                                                <span className="badge bg-success text-white">4.4<i className="ri-star-s-fill ms-1"></i></span>
                                                                                <span className="text-[#8c9097] dark:text-white/50 ms-1">(13,256)</span>
                                                                            </p>
                                                                        </div>
                                                                        <div className="text-center">
                                                                            <p className="mb-0 text-[1rem] font-semibold">
                                                                                $1,099
                                                                            </p>
                                                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                                                                                <s>$1,759</s>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-defaultborder dark:border-defaultborder/10">
                                                            <td>
                                                                <Link href="#!">
                                                                    <div className="flex items-start">
                                                                        <div className="similar-products-image me-2">
                                                                            <img src="../../../../assets/images/ecommerce/png/17.png" alt="" />
                                                                        </div>
                                                                        <div className="flex-grow">
                                                                            <p className="mb-1 text-[0.875rem] font-semibold similar-product-name text-truncate">Strap on watch(White)</p>
                                                                            <p className="mb-0">
                                                                                <span className="badge bg-success text-white">3.8<i className="ri-star-s-fill ms-1"></i></span>
                                                                                <span className="text-[#8c9097] dark:text-white/50 ms-1">(5,289)</span>
                                                                            </p>
                                                                        </div>
                                                                        <div className="text-center">
                                                                            <p className="mb-0 text-[1rem] font-semibold">
                                                                                $7,99
                                                                            </p>
                                                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                                                                                <s>$1,299</s>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-defaultborder dark:border-defaultborder/10">
                                                            <td>
                                                                <Link href="#!">
                                                                    <div className="flex items-start">
                                                                        <div className="similar-products-image me-2">
                                                                            <img src="../../../../assets/images/ecommerce/png/18.png" alt="" />
                                                                        </div>
                                                                        <div className="flex-grow">
                                                                            <p className="mb-1 font-semibold similar-product-name text-truncate">Orange watch series 3</p>
                                                                            <p className="mb-0">
                                                                                <span className="badge bg-success text-white">4.1<i className="ri-star-s-fill ms-1"></i></span>
                                                                                <span className="text-[#8c9097] dark:text-white/50 ms-1">(2,476)</span>
                                                                            </p>
                                                                        </div>
                                                                        <div className="text-center">
                                                                            <p className="mb-0 text-[1rem] font-semibold">
                                                                                $1,499
                                                                            </p>
                                                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                                                                                <s>$2,599</s>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-defaultborder dark:border-defaultborder/10">
                                                            <td>
                                                                <Link href="#!">
                                                                    <div className="flex items-start">
                                                                        <div className="similar-products-image me-2">
                                                                            <img src="../../../../assets/images/ecommerce/png/19.png" alt="" />
                                                                        </div>
                                                                        <div className="flex-grow">
                                                                            <p className="mb-1 font-semibold similar-product-name text-truncate">Omega watch special edition</p>
                                                                            <p className="mb-0">
                                                                                <span className="badge bg-success text-white">3.8<i className="ri-star-s-fill ms-1"></i></span>
                                                                                <span className="text-[#8c9097] dark:text-white/50 ms-1">(1,893)</span>
                                                                            </p>
                                                                        </div>
                                                                        <div className="text-center">
                                                                            <p className="mb-0 text-[1rem] font-semibold">
                                                                                $2,299
                                                                            </p>
                                                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                                                                                <s>$3,299</s>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-defaultborder dark:border-defaultborder/10">
                                                            <td>
                                                                <Link href="#!">
                                                                    <div className="flex items-start">
                                                                        <div className="similar-products-image me-2">
                                                                            <img src="../../../../assets/images/ecommerce/png/20.png" alt="" />
                                                                        </div>
                                                                        <div className="flex-grow">
                                                                            <p className="mb-1 font-semibold similar-product-name text-truncate">Fassil smart watch(45mm)</p>
                                                                            <p className="mb-0">
                                                                                <span className="badge bg-success text-white">4.5<i className="ri-star-s-fill ms-1"></i></span>
                                                                                <span className="text-[#8c9097] dark:text-white/50 ms-1">(12,923)</span>
                                                                            </p>
                                                                        </div>
                                                                        <div className="text-center">
                                                                            <p className="mb-0 text-[1rem] font-semibold">
                                                                                $8,99
                                                                            </p>
                                                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                                                                                <s>$1,299</s>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-defaultborder dark:border-defaultborder/10">
                                                            <td>
                                                                <Link href="#!">
                                                                    <div className="flex items-start">
                                                                        <div className="similar-products-image me-2">
                                                                            <img src="../../../../assets/images/ecommerce/png/21.png" alt="" />
                                                                        </div>
                                                                        <div className="flex-grow">
                                                                            <p className="mb-1 font-semibold similar-product-name text-truncate">Electro viintage watch(40mm)</p>
                                                                            <p className="mb-0">
                                                                                <span className="badge bg-success text-white">4.1<i className="ri-star-s-fill ms-1"></i></span>
                                                                                <span className="text-[#8c9097] dark:text-white/50 ms-1">(453)</span>
                                                                            </p>
                                                                        </div>
                                                                        <div className="text-center">
                                                                            <p className="mb-0 text-[1rem] font-semibold">
                                                                                $1,799
                                                                            </p>
                                                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                                                                                <s>$2,499</s>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr className="border border-defaultborder dark:border-defaultborder/10">
                                                            <td>
                                                                <Link href="#!">
                                                                    <div className="flex items-start">
                                                                        <div className="similar-products-image me-2">
                                                                            <img src="../../../../assets/images/ecommerce/png/22.png" alt="" />
                                                                        </div>
                                                                        <div className="flex-grow">
                                                                            <p className="mb-1 font-semibold similar-product-name text-truncate">Bolts smart watch(Amoled)</p>
                                                                            <p className="mb-0">
                                                                                <span className="badge bg-success text-white">4.3<i className="ri-star-s-fill ms-1"></i></span>
                                                                                <span className="text-[#8c9097] dark:text-white/50 ms-1">(1,874)</span>
                                                                            </p>
                                                                        </div>
                                                                        <div className="text-center">
                                                                            <p className="mb-0 text-[1rem] font-semibold">
                                                                                $2,299
                                                                            </p>
                                                                            <p className="mb-0 text-[#8c9097] dark:text-white/50">
                                                                                <s>$2,999</s>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className="grid">
                                                                <button type="button" className="ti-btn ti-btn-primary !font-medium">View All Products</button>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="xxl:col-span-9 xl:col-span-12 col-span-12">
                                    <div className="md:grid grid-cols-12 gap-x-[3rem]">
                                        <div className="xl:col-span-8 col-span-12 xxl:mt-0 mt-4">
                                            <p className="text-[1.125rem] font-semibold mb-0">Orange Watch Series 4 (GPS + Cellular, 44mm) - Colored Aluminium Case with Multiple Featured Sports Band - Regular</p>
                                            <p className="text-[1.125rem] mb-4">
                                                <i className="ri-star-s-fill text-warning align-middle"></i>
                                                <i className="ri-star-s-fill text-warning align-middle"></i>
                                                <i className="ri-star-s-fill text-warning align-middle"></i>
                                                <i className="ri-star-s-fill text-warning align-middle"></i>
                                                <i className="ri-star-half-s-fill text-warning align-middle"></i>
                                                <span className="font-semibold text-[#8c9097] dark:text-white/50 ms-1">4.3<Link className="text-info" href="#!">(2.4k Reviews)</Link></span>
                                            </p>
                                            <div className="grid grid-cols-12 mb-6">
                                                <div className="xxl:col-span-3 xl:col-span-12 col-span-12">
                                                    <p className="mb-1 lh-1 text-[0.6875rem] text-success font-semibold">Special Offer</p>
                                                    <p className="mb-1"><span className="h3  font-semibold"><sup className="text-[0.875rem]">$</sup>1,299<sup className="text-[0.875rem]">.00</sup></span><span className="ms-3 badge bg-danger/10 text-danger">50% Off</span></p>
                                                    <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.75rem]">M.R.P-<s>$2,599.00</s></p>
                                                </div>
                                                <div className="xxl:col-span-4 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12 mml:mt-0 mt-4">
                                                    <p className="mb-2 text-[.9375rem] font-semibold">Watch Type</p>
                                                    <div className="inline-flex" role="group" aria-label="Basic radio toggle button group">
                                                        <input type="radio" className="btn-check " name="select-type" id="type1" defaultChecked />
                                                        <label className="ti-btn !py-[0.45rem] !px-3 ti-btn-light !border-e-0 !text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:!border-defaultborder/10 !text-[0.75rem] !font-medium !rounded-e-none hover:!bg-light hover:!text-defaulttextcolor" htmlFor="type1">GPS</label>
                                                        <input type="radio" className="btn-check" name="select-type" id="type2" />
                                                        <label className="ti-btn !py-[0.45rem] !px-3 ti-btn-outline-light !text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:!border-defaultborder/10 !text-[0.75rem] !rounded-s-none hover:!bg-light hover:!text-defaulttextcolor" htmlFor="type2">GPS+Cellular</label>
                                                    </div>
                                                </div>
                                                <div className="xxl:col-span-5 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12 xxl:mt-0 mt-4">
                                                    <p className="mb-2 text-[.9375rem] font-semibold">Strap Material</p>
                                                    <div className="inline-flex " role="group" aria-label="Basic radio toggle button group">
                                                        <input type="radio" className="btn-check " name="strap-material" id="strap1" defaultChecked />
                                                        <label className="ti-btn !py-[0.45rem] !px-3 ti-btn-light !border-e-0 !text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:!border-defaultborder/10 !text-[0.75rem] !font-medium !rounded-e-none hover:!bg-light hover:!text-defaulttextcolor" htmlFor="strap1">Leather</label>
                                                        <input type="radio" className="btn-check " name="strap-material" id="strap2" />
                                                        <label className="ti-btn !py-[0.45rem] !px-3 ti-btn-outline-light !border-e-0 !text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:!border-defaultborder/10 !text-[0.75rem] !font-medium !rounded-none hover:!bg-light hover:!text-defaulttextcolor" htmlFor="strap2">Stainless steel</label>
                                                        <input type="radio" className="btn-check" name="strap-material" id="strap3" />
                                                        <label className="ti-btn !py-[0.45rem] !px-3 ti-btn-outline-light !text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:!border-defaultborder/10 !text-[0.75rem] !font-medium  !rounded-s-none hover:!bg-light hover:!text-defaulttextcolor" htmlFor="strap3">Synthetic</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <p className="text-[.9375rem] font-semibold mb-1">Description :</p>
                                                <p className="text-[#8c9097] dark:text-white/50 mb-0">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati accusamus, quaerat nam quo optio reiciendis harum reprehenderit omnis tempora adipisci in iste aperiam unde, repellendus possimus explicabo veritatis? Dignissimos, id.
                                                </p>
                                            </div>
                                            <div className="mb-4">
                                                <div className="grid grid-cols-12 gap-x-6">
                                                    <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                                                        <p className="text-[.9375rem] font-semibold mb-2">Colors :</p>
                                                        <p className="mb-0 flex">
                                                            <Link aria-label="anchor" className="color-1 product-colors selected" href="#!">
                                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                                            </Link>
                                                            <Link aria-label="anchor" className="color-2 product-colors" href="#!">
                                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                                            </Link>
                                                            <Link aria-label="anchor" className="color-3 product-colors" href="#!">
                                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                                            </Link>
                                                            <Link aria-label="anchor" className="color-4 product-colors" href="#!">
                                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                                            </Link>
                                                            <Link aria-label="anchor" className="color-5 product-colors" href="#!">
                                                                <i className="ri-checkbox-blank-circle-fill"></i>
                                                            </Link>
                                                        </p>
                                                    </div>
                                                    <div className="xxl:col-span-6 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12 md:mt-0 mt-4">
                                                        <p className="text-[.9375rem] font-semibold mb-2">Dial Size(in mm) :</p>
                                                        <p className="mb-0 flex">
                                                            <Link className="color-1 product-sizes selected" href="#!">
                                                                44
                                                            </Link>
                                                            <Link className="color-2 product-sizes" href="#!">
                                                                40
                                                            </Link>
                                                            <Link className="color-3 product-sizes" href="#!">
                                                                38
                                                            </Link>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <div className="grid grid-cols-12 gap-0 justify-center">
                                                    <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-12 mx-3">
                                                        <div className="ecommerce-assurance">
                                                            <p className="mb-4 inline-flex">
                                                                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 168 168"><path fill="#0bceb2" d="M82.002 44.119a29 29 0 1 0 28.999 29 29.033 29.033 0 0 0-28.999-29Zm0 53.999a25 25 0 1 1 25-24.999 25.027 25.027 0 0 1-25 24.999Z" /><path fill="#2d4356" d="m95.281 68.305-7.95-1.121-3.546-6.972a2 2 0 0 0-3.566 0l-3.545 6.972-7.95 1.12a2 2 0 0 0-1.095 3.434l5.716 5.41L72 84.77a2 2 0 0 0 2.879 2.13l7.124-3.636 7.125 3.635a2 2 0 0 0 2.879-2.129l-1.347-7.622 5.717-5.41a2 2 0 0 0-1.095-3.433Zm-8.153 6.677a1.998 1.998 0 0 0-.596 1.8l.836 4.73-4.457-2.275a1.999 1.999 0 0 0-1.818 0l-4.457 2.275.836-4.73a1.998 1.998 0 0 0-.596-1.8l-3.483-3.296 4.871-.687a2 2 0 0 0 1.504-1.074l2.234-4.394 2.235 4.394a2 2 0 0 0 1.503 1.074l4.871.687Z" /><path fill="#2d4356" d="M92.169 114.835c.753-.176 2.427.598 3.833 1.292v-4.408a7.799 7.799 0 0 0-4.741-.78c-2.28.532-3.913 2.719-5.493 4.834-.992 1.328-2.492 3.336-3.291 3.345h-.004c-.791 0-2.385-2.042-3.337-3.263-1.628-2.086-3.311-4.243-5.61-4.73a4.846 4.846 0 0 0-1.014-.104c-1.953 0-3.996 1.07-5.983 2.11-1.504.788-3.783 1.978-4.537 1.63-.657-.303-1.174-2.773-1.484-4.25-.547-2.608-1.112-5.306-3.013-6.758-1.888-1.443-4.68-1.329-7.387-1.217-1.45.061-4.155.17-4.622-.387-.495-.596.153-3.107.54-4.61.653-2.528 1.326-5.143.29-7.205-1.05-2.08-3.594-3.155-6.056-4.195-1.348-.57-3.855-1.63-4.03-2.345-.173-.712 1.574-2.762 2.512-3.862 1.72-2.018 3.496-4.104 3.473-6.43-.026-2.31-1.842-4.351-3.599-6.326-.966-1.086-2.766-3.11-2.606-3.836.155-.7 2.625-1.8 3.952-2.39 2.45-1.092 4.984-2.221 6-4.333.994-2.063.27-4.654-.429-7.16-.42-1.502-1.122-4.016-.625-4.64.52-.65 3.217-.593 4.83-.555 2.634.06 5.35.117 7.126-1.3 1.85-1.476 2.359-4.166 2.851-6.768.283-1.494.756-3.996 1.427-4.32.73-.353 3.11.833 4.53 1.543 2.368 1.182 4.811 2.404 7.074 1.879 2.277-.532 3.91-2.717 5.49-4.831.992-1.33 2.493-3.338 3.294-3.346h.005c.79 0 2.383 2.041 3.335 3.263 1.627 2.085 3.31 4.242 5.608 4.73 2.263.48 4.666-.785 7-2.008 1.504-.788 3.772-1.973 4.532-1.632.66.304 1.177 2.777 1.487 4.254.547 2.608 1.112 5.305 3.014 6.759 1.887 1.44 4.678 1.32 7.382 1.214 1.454-.063 4.156-.172 4.623.388.497.594-.151 3.108-.538 4.609-.652 2.528-1.326 5.143-.289 7.204 1.049 2.079 3.595 3.156 6.058 4.197 1.346.57 3.854 1.63 4.028 2.343.173.71-1.574 2.761-2.513 3.862-1.719 2.018-3.496 4.103-3.471 6.427.025 2.313 1.842 4.356 3.6 6.33.965 1.087 2.764 3.108 2.602 3.835-.154.7-2.625 1.802-3.953 2.393-.31.138-.62.276-.929.417.267.094.534.191.794.308a10.034 10.034 0 0 1 3.223 2.26c2.25-1.064 4.286-2.315 4.772-4.514.602-2.722-1.495-5.078-3.522-7.357-1.089-1.223-2.579-2.899-2.588-3.715-.008-.826 1.45-2.538 2.517-3.79 1.972-2.313 4.01-4.705 3.354-7.402-.65-2.668-3.551-3.895-6.357-5.081-1.543-.653-3.656-1.546-4.044-2.313-.36-.717.19-2.849.591-4.405.726-2.813 1.547-6-.263-8.17-1.729-2.075-4.846-1.946-7.86-1.823-1.712.07-4.052.166-4.788-.396-.721-.55-1.188-2.776-1.529-4.401-.61-2.91-1.24-5.92-3.729-7.066-2.544-1.166-5.347.3-8.06 1.721-1.466.768-3.474 1.82-4.312 1.64-.873-.186-2.268-1.974-3.286-3.28-1.853-2.374-3.763-4.814-6.535-4.8-2.78.028-4.65 2.53-6.458 4.951-.986 1.32-2.338 3.129-3.193 3.33-.852.192-2.892-.821-4.38-1.563-2.73-1.364-5.554-2.774-8.055-1.566-2.486 1.2-3.062 4.24-3.617 7.179-.307 1.618-.726 3.833-1.417 4.384-.645.514-2.898.464-4.544.428-3.09-.067-6.29-.138-8.044 2.06-1.773 2.222-.884 5.404-.1 8.21.405 1.45 1.017 3.643.677 4.35-.38.79-2.486 1.728-4.024 2.412-2.771 1.236-5.637 2.512-6.229 5.18-.602 2.723 1.495 5.08 3.523 7.36 1.088 1.223 2.578 2.897 2.587 3.71.009.828-1.45 2.541-2.517 3.792-1.972 2.313-4.01 4.706-3.355 7.403.652 2.67 3.554 3.897 6.36 5.083 1.542.651 3.655 1.545 4.041 2.31.36.717-.19 2.851-.59 4.408-.726 2.811-1.548 5.999.261 8.17 1.732 2.073 4.848 1.944 7.858 1.822 1.71-.07 4.054-.168 4.793.398.72.55 1.187 2.776 1.527 4.4.61 2.91 1.24 5.92 3.728 7.063 2.544 1.175 5.35-.298 8.064-1.72 1.463-.766 3.468-1.818 4.311-1.637.872.185 2.268 1.973 3.287 3.279 1.842 2.361 3.747 4.801 6.49 4.801h.046c2.778-.03 4.646-2.532 6.454-4.95.987-1.322 2.34-3.132 3.196-3.332Z" /><path fill="#0bceb2" d="M135.223 107.7a5.607 5.607 0 0 0-5.074-8.45l-3.526-.003a7.575 7.575 0 0 0 .11-1.693c-.188-1.712-.686-6.222-4.445-7.884a6.181 6.181 0 0 0-2.532-.552q-.144 0-.287.007a6.004 6.004 0 0 0-3.442 1.333 6.53 6.53 0 0 0-2.207 5.82c.008.146.017.29.017.432v.493c-.523 1.062-2.03 3.422-2.562 4.254l-.027.042c-.308.092-.659.194-1.02.298a3.977 3.977 0 0 0-2.227-.68h-4a4.004 4.004 0 0 0-4 4v12a4.004 4.004 0 0 0 4 4h4a3.961 3.961 0 0 0 2.534-.93c.073.001.142.005.217.005.352 0 .77-.013 1.189-.026l.6-.018a6.76 6.76 0 0 0 1.831.824 4.002 4.002 0 0 0 1.032.137l12.003.003a5.81 5.81 0 0 0 5.848-5.756v-.094a5.671 5.671 0 0 0 1.146-3.42c0-.162-.007-.321-.02-.476a5.654 5.654 0 0 0 .881-3.036 5.111 5.111 0 0 0-.039-.63Zm-27.222 9.418h-4v-12h4Zm22.148-10.525s1.113.854 1.113 1.737a1.806 1.806 0 0 1-1.853 1.756 2.742 2.742 0 0 1 .992 1.756 1.805 1.805 0 0 1-1.848 1.759 3.065 3.065 0 0 1 .703 1.755 1.803 1.803 0 0 1-1.85 1.756l-11.996-.003c-.644-.173-1.12-.684-1.737-.903a2.998 2.998 0 0 0-.78-.062c-.269 0-.579.009-.892.018v-10.715a14.837 14.837 0 0 0 1.888-.619c.238-.502 3.948-5.935 3.948-7.007V96.71c0-1.096-.3-2.336.675-3.118a2.039 2.039 0 0 1 1.157-.472l.088-.002a2.262 2.262 0 0 1 .914.21c1.572.696 1.926 3.208 2.085 4.65a23.823 23.823 0 0 1-1.29 5.265l8.683.007a1.67 1.67 0 0 1 1.851 1.585 1.806 1.806 0 0 1-1.85 1.758Z" /><circle cx="2" cy="149.119" r="2" fill="#2d4356" /><path fill="#2d4356" d="M11 147.119H8a2 2 0 0 0 0 4h3a2 2 0 0 0 0-4zm149 0h-3a2 2 0 0 0 0 4h3a2 2 0 0 0 0-4z" /><circle cx="166" cy="149.119" r="2" fill="#2d4356" /><path fill="#0bceb2" d="M118.154 155.119h-8.308a2.006 2.006 0 0 0 0 4h8.308a2.006 2.006 0 0 0 0-4zm-60 0h-8.308a2.006 2.006 0 0 0 0 4h8.308a2.006 2.006 0 0 0 0-4zm45.846 0H64a2 2 0 0 0 0 4h15.94v2H72a2 2 0 0 0 0 4h25a2 2 0 0 0 0-4h-8.94v-2H104a2 2 0 0 0 0-4z" /><path fill="#2d4356" d="M150.721 147.119h-39.734l.14-12.338 15.307 3.372a1.846 1.846 0 0 0 .193.032 3.002 3.002 0 0 0 2.996-1.498 2.918 2.918 0 0 0-.348-3.356l-6.785-7.632-3.267-.004h-2.034l7.088 7.973-14.682-3.234a2.032 2.032 0 0 0-1.68.373 1.942 1.942 0 0 0-.76 1.513l-.146 12.933-16.497-21.92a15.311 15.311 0 0 1-2.934 2.699l15.872 21.087H60.56l16.196-21.521a18.709 18.709 0 0 1-2.847-2.816L57 145.256l-.147-12.936a1.942 1.942 0 0 0-.76-1.513 2.04 2.04 0 0 0-1.68-.373l-14.681 3.234 14.254-16.035a25.407 25.407 0 0 1-1.286-4.514l-18.004 20.255a2.902 2.902 0 0 0-.31 3.314 3.009 3.009 0 0 0 2.994 1.497 1.846 1.846 0 0 0 .194-.032l15.306-3.373.142 12.339H17.279a2.017 2.017 0 1 0 0 4H150.72a2.017 2.017 0 1 0 0-4zM114 26.119a3 3 0 1 0-3-3 3.003 3.003 0 0 0 3 3zm0-4.5a1.5 1.5 0 1 1-1.5 1.5 1.501 1.501 0 0 1 1.5-1.5zm26 29.378a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zM6 36.119a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zm136-35.5a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zM30 50.997a2 2 0 1 0-2 2 2.002 2.002 0 0 0 2-2zm-3 0a1 1 0 1 1 1 1 1.001 1.001 0 0 1-1-1z" /><path fill="#0bceb2" d="m12.72 5.368 1.487-1.955-.939-.532-.954 2.19h-.032l-.97-2.175-.955.548 1.471 1.909v.031l-2.301-.297v1.064l2.317-.297v.031l-1.487 1.908.892.564 1.017-2.206h.031l.939 2.19.986-.563L12.72 5.9v-.031l2.362.282V5.087L12.72 5.4v-.032zM44.258 19.07l-.856 1.099.513.325.586-1.271h.018l.541 1.262.568-.325-.865-1.081v-.018l1.36.162v-.613l-1.36.181v-.018l.856-1.127-.541-.306-.55 1.261h-.018l-.558-1.252-.55.315.847 1.1v.018l-1.325-.172v.613l1.334-.171v.018zM164.724 30.786v-1.044l-2.317.307v-.031l1.459-1.918-.921-.521-.936 2.148h-.032l-.95-2.133-.938.537 1.444 1.872v.031l-2.257-.292v1.044l2.272-.291v.03l-1.459 1.872.875.553.999-2.164h.029l.921 2.148.968-.552-1.474-1.842v-.03l2.317.276zM80.004 5.407l1.258-1.655-.795-.45-.807 1.853h-.027l-.82-1.84-.809.464 1.245 1.615v.026l-1.946-.251v.9l1.959-.251v.026l-1.258 1.615.755.477.861-1.867h.026l.794 1.853.835-.476-1.271-1.589v-.026l1.998.238v-.9l-1.998.264v-.026z" /></svg>
                                                            </p>
                                                            <p className="text-[0.875rem] font-semibold mb-0">Assured Quality</p>
                                                        </div>
                                                    </div>
                                                    <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-12 sm:mt-0 mt-4 mx-3">
                                                        <div className="ecommerce-assurance">
                                                            <p className="mb-4 inline-flex">
                                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><linearGradient id="a" x1="32" x2="32" y1="63.723" y2=".835" gradientTransform="matrix(1 0 0 -1 0 63.89)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2ab793" /><stop offset="1" stopColor="#2c98b5" /></linearGradient><path fill="url(#a)" d="M53 26V13.4L32 1.9 11 13.4v25.2l21 11.6 21-11.5V33h-2v4.4L32 47.9l-13-7.2V19l12 6.6V45h2V25.6l18-9.9V26h2zm-3.1-12L32 23.9l-11.9-6.6 17.7-10L49.9 14zM35.6 6.1 18 16.2 14.1 14 32 4.1l3.6 2zM17 39.6l-4-2.2V15.7l4 2.2v21.7z" /><linearGradient id="b" x1="35.769" x2="35.769" y1="63.723" y2=".835" gradientTransform="matrix(1 0 0 -1 0 63.89)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#2ab793" /><stop offset="1" stopColor="#2c98b5" /></linearGradient><path fill="url(#b)" d="M38 26v2h6c7.2 0 13 5.8 13 13s-5.8 13-13 13H16.4l5.3-5.3-1.4-1.4-7.8 7.7 8.8 7.7 1.3-1.5-6-5.2H44c8.3 0 15-6.7 15-15s-6.7-15-15-15h-6z" /></svg>
                                                            </p>
                                                            <p className="text-[0.875rem] font-semibold mb-0">
                                                                Easy Exchange
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="xxl:col-span-4 xl:col-span-4 lg:col-span-4 md:col-span-4 sm:col-span-4 col-span-12 sm:mt-0 mt-4 mx-3">
                                                        <div className="ecommerce-assurance">
                                                            <p className="mb-4 inline-flex">
                                                                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 168 168"><path fill="#2d4356" d="M56 93.534V80.415a1.862 1.862 0 0 1 .473-1.23l12.984-14.73a2.121 2.121 0 0 1 1.596-.705H107v18.13h-3.027a2 2 0 0 0-1.56.75A29.22 29.22 0 0 1 89.9 91.785a1.995 1.995 0 0 0-.937.617l-8.99 10.59a2.299 2.299 0 0 1-3.001.354c-1.639-1.12-1.74-1.597-1.425-3.029a10.313 10.313 0 0 1 2.33-4.47l4.987-5.749a1.998 1.998 0 0 0 .445-1.726l-1.85-8.706a2.869 2.869 0 0 0-1.852-1.834l-9.285-1.814a1.996 1.996 0 0 0-1.873.628l-6.613 7.378a2 2 0 0 0-.51 1.335v5.321a17.844 17.844 0 0 1 4-.846v-3.71l5.343-5.962 7.1 1.387 1.42 6.68-4.333 4.997a15.351 15.351 0 0 0-1.503 2.058A13.993 13.993 0 1 0 81 107.75c0-.206-.022-.406-.03-.61a6.051 6.051 0 0 0 2.051-1.558l8.638-10.174a33.3 33.3 0 0 0 13.256-9.528h2.098A3.998 3.998 0 0 0 111 89.75h12a4.005 4.005 0 0 0 4-4v-24a4.005 4.005 0 0 0-4-4h-12a3.987 3.987 0 0 0-3.444 2H71.053a6.124 6.124 0 0 0-4.597 2.06L53.472 76.54A5.86 5.86 0 0 0 52 80.415v17.407a18.127 18.127 0 0 1 4-4.288zm11 24.216a10 10 0 0 1 0-20 9.884 9.884 0 0 1 4.765 1.228c-.046.172-.094.343-.133.516-.846 3.86.981 5.72 3.075 7.15a6.172 6.172 0 0 0 2.284.955c0 .051.009.1.009.151a10.011 10.011 0 0 1-10 10zm44-56h12v24h-12zm-24.942-17.5a3 3 0 1 0-3-3 3.003 3.003 0 0 0 3 3zm0-4.5a1.5 1.5 0 1 1-1.5 1.5 1.501 1.501 0 0 1 1.5-1.5zm39-20.5a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zm-64-6a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zm74 18a2 2 0 1 0 2 2 2.002 2.002 0 0 0-2-2zm0 3a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1zm-118 31a2 2 0 1 0-2 2 2.002 2.002 0 0 0 2-2zm-3 0a1 1 0 1 1 1 1 1.001 1.001 0 0 1-1-1z" /><path fill="#0bceb2" d="m45.641 41.261 1.487-1.955-.939-.532-.954 2.19h-.032l-.97-2.175-.955.548 1.471 1.909v.031l-2.301-.297v1.064l2.316-.297v.031l-1.486 1.908.891.564 1.018-2.206h.031l.939 2.19.986-.563-1.502-1.878v-.031l2.362.282V40.98l-2.362.312v-.031zM8.834 29.317l-.856 1.099.514.324.586-1.27h.017l.541 1.261.568-.324-.865-1.082v-.018l1.36.163v-.613l-1.36.18v-.018l.856-1.126-.54-.306-.55 1.261h-.018l-.559-1.253-.55.316.848 1.099v.018l-1.325-.171v.613l1.333-.171v.018zM159.058 61.963V60.92l-2.317.307v-.031l1.458-1.918-.921-.522-.936 2.148h-.031l-.951-2.133-.937.538 1.443 1.872v.031l-2.257-.292v1.043l2.272-.291v.031l-1.458 1.872.875.553.998-2.165h.03l.921 2.149.967-.552-1.473-1.842v-.031l2.317.276zM158.501 19.836l1.258-1.655-.794-.45-.808 1.853h-.027l-.82-1.84-.809.464 1.245 1.615v.026l-1.946-.251v.9l1.959-.252v.027l-1.258 1.615.755.477.861-1.867h.026l.795 1.853.834-.476-1.271-1.589v-.027l1.998.239v-.9l-1.998.264v-.026z" /><circle cx="2" cy="135.75" r="2" fill="#2d4356" /><path fill="#2d4356" d="M11 133.75H8a2 2 0 0 0 0 4h3a2 2 0 0 0 0-4zm149 0h-3a2 2 0 0 0 0 4h3a2 2 0 0 0 0-4z" /><circle cx="166" cy="135.75" r="2" fill="#2d4356" /><path fill="#0bceb2" d="M118.154 141.75h-8.308a2.006 2.006 0 0 0 0 4h8.308a2.006 2.006 0 0 0 0-4zm-60 0h-8.308a2.006 2.006 0 0 0 0 4h8.308a2.006 2.006 0 0 0 0-4zm45.846 0H64a2 2 0 0 0 0 4h15.94v2H72a2 2 0 0 0 0 4h25a2 2 0 0 0 0-4h-8.94v-2H104a2 2 0 0 0 0-4z" /><path fill="#2d4356" d="M150.721 133.75h-6.932a14 14 0 1 0-19.578 0H17.28a2.017 2.017 0 1 0 0 4H150.72a2.017 2.017 0 1 0 0-4Zm-26.721-10a10 10 0 1 1 10 10 10.011 10.011 0 0 1-10-10Z" /><path fill="#0bceb2" d="M26 133.75a2.002 2.002 0 0 1-2-2v-16a2.002 2.002 0 0 1 2-2h16a2.002 2.002 0 0 1 2 2v16a2.002 2.002 0 0 1-2 2h5.65a5.96 5.96 0 0 0 .35-2v-16a6.007 6.007 0 0 0-6-6H26a6.007 6.007 0 0 0-6 6v16a5.96 5.96 0 0 0 .35 2zm66 0a2.002 2.002 0 0 1-2-2v-16a2.002 2.002 0 0 1 2-2h16a2.002 2.002 0 0 1 2 2v16a2.002 2.002 0 0 1-2 2h5.65a5.96 5.96 0 0 0 .35-2v-16a6.007 6.007 0 0 0-6-6H92a6.007 6.007 0 0 0-6 6v16a5.96 5.96 0 0 0 .35 2z" /></svg>
                                                            </p>
                                                            <p className="text-[0.875rem] font-semibold mb-0">
                                                                Hand Picked
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <p className="text-[.9375rem] font-semibold mb-2">Product Details :</p>
                                                <div className="table-responsive min-w-full">
                                                    <table className="table table-bordered whitespace-nowrap w-full">
                                                        <tbody>
                                                            <tr className="border border-defaultborder dark:border-defaultborder/10">
                                                                <th scope="row" className="!font-semibold text-start">
                                                                    Brand
                                                                </th>
                                                                <td>Orange.Inc</td>
                                                            </tr>
                                                            <tr className="border border-defaultborder dark:border-defaultborder/10">
                                                                <th scope="row" className="!font-semibold text-start">
                                                                    Model Name
                                                                </th>
                                                                <td>
                                                                    Orange watch series 4
                                                                </td>
                                                            </tr>
                                                            <tr className="border border-defaultborder dark:border-defaultborder/10">
                                                                <th scope="row" className="!font-semibold text-start">
                                                                    Color
                                                                </th>
                                                                <td>
                                                                    Raging Brass
                                                                </td>
                                                            </tr>
                                                            <tr className="border border-defaultborder dark:border-defaultborder/10">
                                                                <th scope="row" className="!font-semibold text-start">
                                                                    Style
                                                                </th>
                                                                <td>
                                                                    GPS
                                                                </td>
                                                            </tr>
                                                            <tr className="border border-defaultborder dark:border-defaultborder/10">
                                                                <th scope="row" className="!font-semibold text-start">
                                                                    Special Features
                                                                </th>
                                                                <td>
                                                                    Heart rate sensor,GPS,Wifi calling,SAmoled display e.t.c
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <p className="text-[.9375rem] font-semibold mb-2">Features :</p>
                                                <div className="grid grid-cols-12 gap-x-6 gap-y-2">
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <ul className="mb-0 ps-8 list-disc">
                                                            <li className="text-[#8c9097] dark:text-white/50 mb-2">
                                                                Dial height: 44 mm
                                                            </li>
                                                            <li className="text-[#8c9097] dark:text-white/50 mb-2">
                                                                Dial width: 35 mm
                                                            </li>
                                                            <li className="text-[#8c9097] dark:text-white/50 mb-2">
                                                                SpO2
                                                            </li>
                                                            <li className="text-[#8c9097] dark:text-white/50 mb-2">
                                                                30+ sports mode
                                                            </li>
                                                            <li className="text-[#8c9097] dark:text-white/50 mb-2">
                                                                Upto 12 days battery life
                                                            </li>
                                                            <li className="text-[#8c9097] dark:text-white/50">
                                                                Water resistant
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="xl:col-span-6 col-span-12">
                                                        <ul className="mb-0 ps-7 list-disc">
                                                            <li className="text-[#8c9097] dark:text-white/50 mb-2">
                                                                Battery powered
                                                            </li>
                                                            <li className="text-[#8c9097] dark:text-white/50 mb-2">
                                                                Country of origin: USA
                                                            </li>
                                                            <li className="text-[#8c9097] dark:text-white/50">
                                                                1-year warranty against manufacturing defects
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-0">
                                                <p className="text-[.9375rem] font-semibold mb-3">Reviews &amp; Ratings :</p>
                                                <div className="sm:grid grid-cols-12 gap-6">
                                                    <div className="xxl:col-span-4 xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                                                        <div className="flex items-start mb-4">
                                                            <div className="me-2 leading-none">
                                                                <i className="ri-star-fill text-[1.5625rem] text-warning"></i>
                                                            </div>
                                                            <div className="leading-none">
                                                                <p className="mb-1">4.2 out of 5</p>
                                                                <p className="mb-0 text-[#8c9097] dark:text-white/50 text-[0.6875rem]">Based on (23,435) ratings</p>
                                                            </div>
                                                        </div>

                                                        <div className="flex items-center mb-4">
                                                            <div className="text-[0.75rem] font-semibold">5 </div>
                                                            <i className="ri-star-fill text-[.625rem] me-2"></i>
                                                            <div className="progress progress-xs flex-grow">
                                                                <div className="progress-bar !bg-success rounded-md w-[55%]" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100">
                                                                </div>
                                                            </div>
                                                            <div className="text-[#8c9097] dark:text-white/50 ms-2 text-[0.75rem]">(10,893)</div>
                                                        </div>
                                                        <div className="flex items-center mb-4">
                                                            <div className="text-[0.75rem] font-semibold">4 </div>
                                                            <i className="ri-star-fill text-[.625rem] me-2 "></i>
                                                            <div className="progress progress-xs flex-grow">
                                                                <div className="progress-bar rounded-md !bg-success w-[22%]" aria-valuenow="22" aria-valuemin="0" aria-valuemax="100">
                                                                </div>
                                                            </div>
                                                            <div className="text-[#8c9097] dark:text-white/50 ms-2 text-[0.75rem]">(6,534)</div>
                                                        </div>
                                                        <div className="flex items-center mb-4">
                                                            <div className="text-[0.75rem] font-semibold">3 </div>
                                                            <i className="ri-star-fill text-[.625rem] me-2 "></i>
                                                            <div className="progress progress-xs flex-grow">
                                                                <div className="progress-bar rounded-s-md !bg-success w-[8%]" aria-valuenow="8" aria-valuemin="0" aria-valuemax="100">
                                                                </div>
                                                            </div>
                                                            <div className="text-[#8c9097] dark:text-white/50 ms-2 text-[0.75rem]">(4,342)</div>
                                                        </div>
                                                        <div className="flex items-center mb-4">
                                                            <div className="text-[0.75rem] font-semibold">2 </div>
                                                            <i className="ri-star-fill  me-2  text-[.625rem]"></i>
                                                            <div className="progress progress-xs flex-grow">
                                                                <div className="progress-bar rounded-md !bg-warning w-[9%]" aria-valuenow="9" aria-valuemin="0" aria-valuemax="100">
                                                                </div>
                                                            </div>
                                                            <div className="text-[#8c9097] dark:text-white/50 ms-2 text-[0.75rem]">(1,432)</div>
                                                        </div>
                                                        <div className="flex items-center">
                                                            <div className="text-[0.75rem]  font-semibold">1 </div>
                                                            <i className="ri-star-fill text-[.625rem] me-2"></i>
                                                            <div className="progress progress-xs flex-grow">
                                                                <div className="progress-bar rounded-md !bg-danger w-[6%]" aria-valuenow="6" aria-valuemin="0" aria-valuemax="100">
                                                                </div>
                                                            </div>
                                                            <div className="text-[#8c9097] dark:text-white/50 ms-2 text-[0.75rem]">(1,453)</div>
                                                        </div>
                                                    </div>
                                                    <div className="xxl:col-span-8 xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 xxl:mt-0 mt-4">
                                                        <div className="border p-4 dark:border-defaultborder/10">
                                                            <div className="sm:flex block items-start mb-4">
                                                                <div className="flex flex-grow">
                                                                    <div className="me-2">
                                                                        <span className="avatar avatar-sm avatar-rounded">
                                                                            <img src="../../../../assets/images/faces/15.jpg" alt="" />
                                                                        </span>
                                                                    </div>
                                                                    <div className="leading-none me-2">
                                                                        <p className="mb-1 font-semibold text-[0.875rem]">Alex Carey</p>
                                                                        <div className="mb-1">
                                                                            <i className="ri-star-s-fill text-warning align-middle text-[0.75rem]"></i>
                                                                            <i className="ri-star-s-fill text-warning align-middle text-[0.75rem]"></i>
                                                                            <i className="ri-star-s-fill text-warning align-middle text-[0.75rem]"></i>
                                                                            <i className="ri-star-s-fill text-warning align-middle text-[0.75rem]"></i>
                                                                            <i className="ri-star-s-line text-warning align-middle text-[0.75rem]"></i>
                                                                        </div>
                                                                        <div className="text-[0.6875rem] text-[#8c9097] dark:text-white/50">
                                                                            Reviewed on 24 nov,2022
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="sm:ps-0 sm:mt-0 mt-4 ps-2">
                                                                    <span className="badge bg-success text-white">Verified Purchase</span>
                                                                </div>
                                                            </div>
                                                            <div className="sm:ps-4 ps-0 mb-4">
                                                                <p className="font-semibold mb-1 ps-2">Wonderful product😀</p>
                                                                <p className="mb-0 text-[0.75rem] text-[#8c9097] dark:text-white/50 ps-2">Really this product is very good quality and best for daily use... It supports Spo2.. Very well.. </p>
                                                            </div>
                                                            <div className="product-images sm:ps-4 ps-0">
                                                                <div className="sm:grid grid-cols-12 gap-6">
                                                                    <div className="xl:col-span-6  col-span-12">
                                                                        <div className="products-review-images flex">
                                                                            <Link aria-label="anchor" href="#!">
                                                                                <img src="../../../../assets/images/ecommerce/png/13.png" alt="" />
                                                                            </Link>
                                                                            <Link aria-label="anchor" href="#!">
                                                                                <img src="../../../../assets/images/ecommerce/png/15.png" alt="" />
                                                                            </Link>
                                                                        </div>
                                                                    </div>
                                                                    <div className="xl:col-span-6 col-span-12 flex items-end sm:justify-end sm:mt-0 mt-2">
                                                                        <button type="button" className="ti-btn !py-1 !px-2 !text-[0.75rem] !font-medium ti-btn-light me-2 whitespace-nowrap">Report abuse</button>
                                                                        <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-primary me-2">
                                                                            <i className="ri-thumb-up-line"></i>
                                                                        </button>
                                                                        <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-primary me-2">
                                                                            <i className="ri-thumb-down-line"></i>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="xl:col-span-4 col-span-12 xxl:mt-0 mt-6">
                                            <div className="mb-[3rem]">
                                                <div className="offer-promotion dark:border-defaultborder/10 mb-6">
                                                    <div className="xxl:flex flex lg:block sm:flex flex-wrap justify-between items-center">
                                                        <div className="text-warning xxxl:mb-0 mb-2">Use Code <span className="promotion-code font-semibold">FIRBUY</span><Link className="text-[.625rem] text-warning ms-1" href="#!">T&amp;C.</Link></div>
                                                        <div className="sm:mt-0">
                                                            <span className="bg-warning/10 text-defaulttextcolor text-[0.75rem] offer-details mb-0 hover:text-warning">Get it for <span className="text-success font-semibold">$1,099</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="mb-6">
                                                    <p className="text-danger mb-0 text-[1rem]">Only 5 left in stock.</p>
                                                    <p className="mb-0 text-[0.75rem]">Sold by <span className="text-primary me-1"><u>Regaltos PVT.LTD</u></span>and quality checked by <span className="text-primary"><u>Spruko Tchnologies</u>.</span></p>
                                                </div>
                                                <div className="mb-6">
                                                    <ul className="list-group">
                                                        <li className="list-group-item">
                                                            <div className="leading-none">
                                                                <span className="text-success font-semibold text-[0.875rem] flex items-center"><i className="ti ti-discount-2 text-[1.125rem] me-1"></i>3 Available offers</span>
                                                            </div>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <div className="text-[0.75rem] text-default">
                                                                <span className="text-success me-1 font-semibold">Bank Offer:</span><span className="flex-grow">5% off upto 500 on min purchase of $999<Link href="#!" className="text-primary ms-1">View.</Link></span>
                                                            </div>
                                                        </li>
                                                        <li className="list-group-item">
                                                            <div className="text-[0.75rem] text-default">
                                                                <span className="text-success me-1 font-semibold">Emi:</span><span className="flex-grow">No cost emi on selected bank card on min purchase of $1,499<Link href="#!" className="text-primary ms-1">View.</Link></span>
                                                            </div>
                                                        </li>
                                                        <li className="list-group-item !p-0 hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" id="hs-show-hide-collapse-heading" aria-labelledby="hs-show-hide-collapse">
                                                            <ul className="list-group" id="offers-more">
                                                                <li className="list-group-item border-0 border-b">
                                                                    <div className="text-[0.75rem] text-defaulttextcolor">
                                                                        <span className="text-success me-1 font-semibold">Free Delivery:</span><span className="flex-grow">Free delivery on first order<Link href="#!" className="text-primary ms-1">View.</Link></span>
                                                                    </div>
                                                                </li>
                                                                <li className="list-group-item border-0">
                                                                    <div className="text-[0.75rem] text-default">
                                                                        <span className="text-success me-1 font-semibold">Promotion:</span><span className="flex-grow">Offer upto 30% on grosery on purchase of this item<Link href="#!" className="text-primary ms-1">T&amp;C.</Link></span>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </li>

                                                        <li className="list-group-item border-t-0">
                                                            <Link className="text-success text-[0.75rem] hs-collapse-toggle inline-flex items-center gap-x-2" href="#!" id="hs-show-hide-collapse" data-hs-collapse="#hs-show-hide-collapse-heading"><u>More Offers</u>
                                                            </Link>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="mb-4">
                                                    <p className="mb-0 font-semibold">Returns:</p>
                                                    <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50">Min 7 days return and exchange policy. Return Policies may vary based on products and promotions. For full details on our Returns Policies, please <Link href="#!" className="text-primary">click here</Link>․</p>
                                                </div>
                                                <div className="alert alert-light mb-6 text-[0.75rem] text-[#8c9097] dark:text-white/50" role="alert">
                                                    <Link aria-label="anchor" href="#!"><i className="ri-map-pin-line me-1 align-middle text-primary text-[.9375rem] inline-block"></i></Link>Select location to find out estimated delivery date
                                                </div>
                                                <div className="grid gap-2">
                                                    <Link href="/components/pages/ecommerce/cart/" className="ti-btn bg-primary !font-medium text-white">Add To Cart</Link>
                                                    <Link href="/components/pages/ecommerce/checkout/" className="ti-btn bg-success !font-medium text-white">Buy Now</Link>
                                                    <Link href="/components/pages/ecommerce/wishlist/" className="ti-btn bg-light !font-medium">Add To Wishlist</Link>
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <Link aria-label="anchor" href="#!">
                                                    <img src="../../../../assets/images/ecommerce/png/25.png" alt="" className="img-fluid rounded bg-light mx-auto" />
                                                </Link>
                                            </div>
                                        </div>
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
Productdetails.layout = "Contentlayout"

export default Productdetails