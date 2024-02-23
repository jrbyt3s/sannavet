import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link';
import React, { Fragment } from 'react'

const Reviews = () => {

 const Reviewslist = [
        { id: 1, src: "../../../assets/images/faces/15.jpg", name: 'Json Taylor', title: 'CEO OF NORJA', class: 'half-fill', text: '12 days ago' },
        { id: 2, src: "../../../assets/images/faces/4.jpg", name: 'Melissa Blue', title: 'MANAGER CHO', class: 'half-fill', text: '7 days ago' },
        { id: 3, src: "../../../assets/images/faces/2.jpg", name: 'Kiara Advain', title: 'CEO OF EMPIRO', class: 'line', text: '2 days ago' },
        { id: 4, src: "../../../assets/images/faces/10.jpg", name: 'Jhonson Smith', title: 'CHIEF SECRETARY MBIO', class: 'half-fill', text: '16 hrs ago' },
        { id: 5, src: "../../../assets/images/faces/12.jpg", name: 'Dwayne Stort', title: 'CEO ARMEDILLO', class: 'line', text: '22 days ago' },
        { id: 6, src: "../../../assets/images/faces/3.jpg", name: 'Jasmine Kova', title: 'AGGENT AMIO', class: 'half-fill', text: '26 days ago' },
        { id: 7, src: "../../../assets/images/faces/16.jpg", name: 'Dolph MR', title: 'CEO MR BRAND', class: 'fill', text: '1 month ago' },
        { id: 8, src: "../../../assets/images/faces/5.jpg", name: 'Brenda Simpson', title: 'CEO AIBMO', class: 'half-fill', text: '1 month ago' },
        { id: 9, src: "../../../assets/images/faces/7.jpg", name: 'Julia Sams', title: 'HIEF SECRETARY BHOL', class: 'fill', text: '2 month ago' },
    ];

    return (
        <Fragment>
            <Seo title={"Reviews"} />
            <Pageheader currentpage="Reviews" activepage="Pages" mainpage="Reviews" />
            <div className="container">
                <div className="max-w-6xl mx-auto reviews-container">
                    <div className="grid grid-cols-12 sm:gap-x-6 gap-y-4">
                        {Reviewslist.map((idx) =>(

                        <div className="xxl:col-span-4 xl:col-span-6 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12" key={Math.random()}>
                            <div className="box">
                                <div className="box-body">
                                    <div className="flex items-center mb-4">
                                        <span className="avatar avatar-md avatar-rounded me-4">
                                            <img src={idx.src} alt="" />
                                        </span>
                                        <div>
                                            <p className="mb-0 font-semibold text-[.875rem] text-primary">{idx.name}</p>
                                            <p className="mb-0 text-[.625rem] font-semibold text-[#8c9097] dark:text-white/50">{idx.title}</p>
                                        </div>
                                    </div>
                                    <div className="mb-4">
                                        <span className="text-[#8c9097] dark:text-white/50">- Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem quaerat distinctio  -- <Link href="#!" className="font-semibold text-[.6875rem] text-primary" >Read More</Link></span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <span className="text-[#8c9097] dark:text-white/50">Rating : </span>
                                            <span className="text-warning block ms-1">
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className="ri-star-fill"></i>
                                                <i className={`ri-star-${idx.class}`}></i>
                                            </span>
                                        </div>
                                        <div className="ltr:float-right rtl:float-left text-[0.75rem] font-semibold text-[#8c9097] dark:text-white/50 text-end">
                                            <span>{idx.text}</span>
                                            <span className="block font-normal text-[0.75rem] text-success"><i>{idx.name}</i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                    <nav aria-label="Page navigation">
                        <ul className="ti-pagination  mb-4 justify-end">
                            <li className="page-item disabled"><Link className="page-link px-3 py-[0.375rem]" href="#!">Previous</Link></li>
                            <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">1</Link></li>
                            <li className="page-item"><Link className="page-link active px-3 py-[0.375rem]" href="#!">2</Link></li>
                            <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">3</Link></li>
                            <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">Next</Link></li>
                        </ul>
                    </nav>
                </div>

            </div>
        </Fragment>
    )
}
Reviews.layout = "Contentlayout"

export default Reviews