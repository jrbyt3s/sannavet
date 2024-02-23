import { page1, page2, page3, page4, page5, page6, page7, pagination15 } from '@/shared/data/prism/uielementsprism'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React from 'react';
import Showcode from '@/shared/layout-components/showcode/showcode';

const Pagination = () => {
    return (
        <div>
            <Seo title={"Pagination"} />
            <Pageheader currentpage="Pagination" activepage="Ui Elements" mainpage="Pagination" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                    <Showcode title="Basic Pagination" code={page1}>
                            <nav aria-label="Page navigation">
                                <ul className="ti-pagination  mb-0">
                                    <li className="page-item disabled"><Link className="page-link px-3 py-[0.375rem]" href="#!">Previous</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">1</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">2</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">Next</Link></li>
                                </ul>
                            </nav>
                        </Showcode>
                </div>
                <div className="xxl:col-span-3 xl:col-span-6 col-span-12">
                    <Showcode title="Pagination With Icons" code={page2}>
                            <nav aria-label="Page navigation">
                                <ul className="ti-pagination mb-0">
                                    <li className="page-item">
                                        <Link className="page-link px-3 py-[0.375rem]" href="#!" aria-label="Previous">
                                            <span aria-hidden="true"><i className="rtl:rotate-180 bx bx-chevron-left"></i></span>
                                        </Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">1</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">2</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">3</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link  px-3 py-[0.375rem]" href="#!" aria-label="Next">
                                            <span aria-hidden="true"><i className="rtl:rotate-180 bx bx-chevron-right"></i></span>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </Showcode>
                </div>
                <div className="xxl:col-span-6 xl:col-span-12 col-span-12">
                    <Showcode title="Pagination Sizing" code={pagination15} customCardBodyClass="!flex flex-wrap justify-between gap-2">
                            <nav aria-label="...">
                                <ul className="ti-pagination pagination-sm mb-0">
                                    <li className="page-item " aria-current="page">
                                        <span className="page-link  active px-3 py-[0.375rem]">1</span>
                                    </li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">2</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">3</Link></li>
                                </ul>
                            </nav>
                            <nav aria-label="...">
                                <ul className="ti-pagination mb-0">
                                    <li className="page-item " aria-current="page">
                                        <span className="page-link  active px-3 py-[0.375rem]">1</span>
                                    </li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">2</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">3</Link></li>
                                </ul>
                            </nav>
                            <nav aria-label="...">
                                <ul className="ti-pagination pagination-lg mb-0">
                                    <li className="page-item " aria-current="page">
                                        <span className="page-link active px-3 py-[0.375rem]">1</span>
                                    </li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">2</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">3</Link></li>
                                </ul>
                            </nav>
                        </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Center &amp; Right Aligned Pagination" code={page3}>
                            <nav aria-label="Page navigation" className="mb-4">
                                <ul className="ti-pagination justify-center">
                                    <li className="page-item disabled">
                                        <Link href="#!" className="page-link px-3 py-[0.375rem]">Previous</Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">1</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">2</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">3</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link px-3 py-[0.375rem]" href="#!">Next</Link>
                                    </li>
                                </ul>
                            </nav>
                            <nav aria-label="Page navigation">
                                <ul className="ti-pagination sm:justify-end justify-center mb-0">
                                    <li className="page-item disabled">
                                        <Link href="#!" className="page-link px-3 py-[0.375rem]">Previous</Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">1</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">2</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">3</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link px-3 py-[0.375rem]" href="#!">Next</Link>
                                    </li>
                                </ul>
                            </nav>
                        </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode code={page3} title="Active And Disabled State" customCardBodyClass="!flex flex-wrap">
                            <nav aria-label="..." className="me-4">
                                <ul className="ti-pagination">
                                    <li className="page-item disabled">
                                        <Link href="#!" className="page-link px-3 py-[0.375rem]">Previous</Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">1</Link></li>
                                    <li className="page-item " aria-current="page">
                                        <Link className="page-link active px-3 py-[0.375rem]" href="#!">2</Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link px-3 py-[0.375rem]" href="#!">Next</Link>
                                    </li>
                                </ul>
                            </nav>
                            <nav aria-label="...">
                                <ul className="ti-pagination">
                                    <li className="page-item disabled">
                                        <span className="page-link px-3 py-[0.375rem]">Previous</span>
                                    </li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem]" href="#!">1</Link></li>
                                    <li className="page-item " aria-current="page">
                                        <span className="page-link px-3 active py-[0.375rem]">2</span>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link px-3 py-[0.375rem]" href="#!">Next</Link>
                                    </li>
                                </ul>
                            </nav>
                        </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Pagination Style-1" code={page4}>
                            <nav aria-label="Page navigation" className="pagination-style-1">
                                <ul className="ti-pagination mb-0">
                                    <li className="page-item disabled rtl:rotate-180">
                                        <Link aria-label="anchor" className="page-link" href="#!">
                                            <i className="ri-arrow-left-s-line align-middle"></i>
                                        </Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#!">1</Link></li>
                                    <li className="page-item "><Link className="page-link active" href="#!">2</Link></li>
                                    <li className="page-item">
                                        <Link aria-label="anchor" className="page-link" href="#!">
                                            <i className="bi bi-three-dots"></i>
                                        </Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#!">21</Link></li>
                                    <li className="page-item rtl:rotate-180">
                                        <Link aria-label="anchor" className="page-link" href="#!">
                                            <i className="ri-arrow-right-s-line align-middle"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Pagination Style-2" code={page5}>
                            <nav aria-label="Page navigation" className="pagination-style-2">
                                <ul className="ti-pagination mb-0 flex-wrap">
                                    <li className="page-item disabled">
                                        <Link className="page-link px-3 py-[0.375rem] !border-0" href="#!">
                                            Prev
                                        </Link>
                                    </li>
                                    <li className="page-item active"><Link className="page-link px-3 py-[0.375rem] !border-0" href="#!">1</Link></li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem] !border-0" href="#!">2</Link></li>
                                    <li className="page-item">
                                        <Link aria-label="anchor" className="page-link px-3 py-[0.375rem] !border-0" href="#!">
                                            <i className="bi bi-three-dots"></i>
                                        </Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link px-3 py-[0.375rem] !border-0" href="#!">17</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link px-3 py-[0.375rem] !text-primary !border-0" href="#!">
                                            next
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Pagination Style-3" code={page6}>
                            <nav aria-label="Page navigation" className="pagination-style-3">
                                <ul className="ti-pagination mb-0 flex-wrap">
                                    <li className="page-item disabled">
                                        <Link className="page-link" href="#!">
                                            Prev
                                        </Link>
                                    </li>
                                    <li className="page-item "><Link className="page-link active" href="#!">1</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
                                    <li className="page-item">
                                        <Link aria-label="anchor" className="page-link" href="#!">
                                            <i className="bi bi-three-dots"></i>
                                        </Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#!">16</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link !text-primary" href="#!">
                                            next
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Pagination Style-4" code={page7}>
                            <nav aria-label="Page navigation" className="pagination-style-4">
                                <ul className="ti-pagination mb-0 flex-wrap">
                                    <li className="page-item disabled">
                                        <Link className="page-link" href="#!">
                                            Prev
                                        </Link>
                                    </li>
                                    <li className="page-item "><Link className="page-link active" href="#!">1</Link></li>
                                    <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
                                    <li className="page-item">
                                        <Link aria-label="anchor" className="page-link" href="#!">
                                            <i className="bi bi-three-dots"></i>
                                        </Link>
                                    </li>
                                    <li className="page-item"><Link className="page-link" href="#!">16</Link></li>
                                    <li className="page-item">
                                        <Link className="page-link !text-primary" href="#!">
                                            next
                                        </Link>
                                    </li>
                                </ul>
                            </nav>
                        </Showcode>
                </div>
            </div>
        </div>
    )
}
Pagination.layout = "Contentlayout"

export default Pagination