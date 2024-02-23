import { list1, list10, list12, list13, list14, list15, list2, list3, list4, list5, list6, list7, list8, list9, list11 } from '../../../shared/data/prism/uielementsprism'
import { ActiveButtons, BasicButtons, ContextualButtons, ContextualButtons1, DisableItems, LinksButtons, Solidcolors } from '@/shared/data/ui-elements/listgroupdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React from 'react';
import Showcode from '@/shared/layout-components/showcode/showcode';

const Listgroup = () => {
    return (
        <div>
            <Seo title={"List Group"} />
            <Pageheader currentpage="List Group" activepage="Ui Elements" mainpage="List Group" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Basic List" code={list1}>
                        <ul className="ti-list-group">
                            {BasicButtons.map((idx) => (
                                <li className="ti-list-group-item" key={Math.random()}>
                                    <div className="flex items-center">
                                        <span className="avatar avatar-sm">
                                            <img src={idx.src} alt="img" className="!rounded-md" />
                                        </span>
                                        <div className="ms-2 font-semibold">
                                            {idx.text}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Showcode>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Active Items" code={list2}>
                        <ul className="ti-list-group">
                            {ActiveButtons.map((idx) => (
                                <li className={`ti-list-group-item ${idx.class1}`} aria-current="true" key={Math.random()}>
                                    <div className="flex items-center">
                                        <div>
                                            <span className="text-[.9375rem]">
                                                <i className={`bi bi-${idx.class}`}></i>
                                            </span>
                                        </div>
                                        <div className="ms-2">
                                            {idx.text}
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </Showcode>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Disabled Items" code={list3}>
                        <ul className="ti-list-group">
                            {DisableItems.map((idx) => (
                                <li className={`ti-list-group-item ${idx.text}`} aria-disabled="true" key={Math.random()}>{idx.class}
                                </li>
                            ))}
                        </ul>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Flush" code={list4}>
                        <ul className="ti-list-group ti-list-group-flush">
                            <li className="ti-list-group-item !border-t-0 !border-l-0 !border-r-0 font-semibold"><i className="bi bi-envelope align-middle me-2 text-[#8c9097] dark:text-white/50"></i>Asish Trivedhi<span className="ms-1 text-[#8c9097] dark:text-white/50 font-normal inline-block">(+1023-84534)</span></li>
                            <li className="ti-list-group-item !border-l-0 !border-r-0  font-semibold"><i className="bi bi-tiktok align-middle me-2 text-[#8c9097] dark:text-white/50"></i>Alezander Russo<span className="ms-1 text-[#8c9097] dark:text-white/50 font-normal inline-block">(+7546-12342)</span></li>
                            <li className="ti-list-group-item !border-l-0 !border-r-0  font-semibold"><i className="bi bi-whatsapp align-middle me-2 text-[#8c9097] dark:text-white/50"></i>Karem Smith<span className="ms-1 text-[#8c9097] dark:text-white/50 font-normal inline-block">(+9944-56632)</span></li>
                            <li className="ti-list-group-item !border-l-0 !border-r-0  font-semibold"><i className="bi bi-facebook align-middle me-2 text-[#8c9097] dark:text-white/50"></i>Melissa Brien<span className="ms-1 text-[#8c9097] dark:text-white/50 font-normal inline-block">(+1023-34323)</span></li>
                            <li className="ti-list-group-item !border-l-0 !border-r-0 !border-b-0  font-semibold"><i className="bi bi-instagram align-middle me-2 text-[#8c9097] dark:text-white/50"></i>Kamala Harris<span className="ms-1 text-[#8c9097] dark:text-white/50 font-normal inline-block">(+91-63421)</span></li>
                        </ul>
                    </Showcode>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Links" code={list5}>
                        <div className="ti-list-group">
                            <ul className="list-none">
                                {LinksButtons.map((idx) => (
                                    <li className={`ti-list-group-item ti-list-group-item-action ${idx.class1} ${idx.color1}`} key={Math.random()}>
                                        <Link href="#!"
                                            aria-current="true">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className={`avatar avatar-xs bg-${idx.class} !text-${idx.color}textcolor avatar-rounded`}>
                                                        {idx.text1}
                                                    </span>
                                                </div>
                                                <div className="ms-2">{idx.text}</div>
                                            </div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Buttons" code={list6}>
                        <div className="ti-list-group flex flex-col">
                            <button type="button" className="ti-list-group-item text-start ti-list-group-item-action active" aria-current="true">Simply dummy text of the printing<span className="badge ltr:float-right rtl:float-left bg-primary text-white">243</span></button>
                            <button type="button" className="ti-list-group-item text-start ti-list-group-item-action">There are many variations of passages<span className="badge ltr:float-right rtl:float-left bg-secondary/10 text-secondary">35</span></button>
                            <button type="button" className="ti-list-group-item text-start ti-list-group-item-action">All the Lorem Ipsum generators<span className="badge ltr:float-right rtl:float-left bg-info/10 text-info">132</span></button>
                            <button type="button" className="ti-list-group-item text-start ti-list-group-item-action">All the Lorem Ipsum generators<span className="badge ltr:float-right rtl:float-left bg-success/10 text-success">2525</span></button>
                            <button type="button" className="ti-list-group-item text-start ti-list-group-item-action" disabled>A disabled item meant to be disabled<span className="badge ltr:float-right rtl:float-left bg-danger/10 text-danger">21</span></button>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Contextual Classes" code={list7}>
                        <ul className="ti-list-group">
                            {ContextualButtons.map((idx) => (
                                <li className={`ti-list-group-item ${idx.class}`} key={Math.random()}>{idx.text}</li>
                            ))}
                        </ul>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Contextual Classes With Over Style" code={list8}>
                        <div className="ti-list-group flex flex-col">
                            {ContextualButtons1.map((idx) => (
                                <Link href="#!" className={`w-full ti-list-group-item ${idx.class}`} key={Math.random()}>{idx.text}</Link>
                            ))}
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Solid Colored Listes" code={list9}>
                        <ul className="ti-list-group ">
                            {Solidcolors.map((idx) => (
                                <li className={`ti-list-group-item ${idx.class}`} key={Math.random()}>{idx.text}</li>

                            ))}
                        </ul>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Custom Content" code={list10}>
                        <div className="ti-list-group">
                            <ul className="list-none">
                                <li className="ti-list-group-item ti-list-group-item-action active">
                                    <Link href="#!"
                                        aria-current="true">
                                        <div className="sm:flex w-full justify-between">
                                            <h6 className="mb-1 font-semibold">Web page editors now use Lorem Ipsum?</h6>
                                            <small>3 days ago</small>
                                        </div>
                                        <p className="mb-1">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                                        <small>24,Nov 2022.</small>
                                    </Link>
                                </li>
                                <li className="ti-list-group-item ti-list-group-item-action ">
                                    <Link href="#!">
                                        <div className="flex w-full justify-between">
                                            <h6 className="mb-1 font-semibold">Richard McClintock, a Latin professor?</h6>
                                            <small className="text-[#8c9097] dark:text-white/50">4 hrs ago</small>
                                        </div>
                                        <p className="mb-1">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature.</p>
                                        <small className="text-[#8c9097] dark:text-white/50">30,Nov 2022.</small>
                                    </Link>
                                </li>
                                <li className="ti-list-group-item ti-list-group-item-action ">
                                    <Link href="#!">
                                        <div className="sm:flex w-full justify-between">
                                            <h6 className="mb-1 font-semibold">It uses a dictionary of over 200 Latin words?</h6>
                                            <small className="text-[#8c9097] dark:text-white/50">15 hrs ago</small>
                                        </div>
                                        <p className="mb-1">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                                        <small className="text-[#8c9097] dark:text-white/50">4,Nov 2022.</small>
                                    </Link>
                                </li>
                                <li className="ti-list-group-item ti-list-group-item-action ">
                                    <Link href="#!">
                                        <div className="sm:flex w-full justify-between">
                                            <h6 className="mb-1 font-semibold">The standard Lorem Ipsum used since the 1500s?</h6>
                                            <small className="text-[#8c9097] dark:text-white/50">45 mins ago</small>
                                        </div>
                                        <p className="mb-1">All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.</p>
                                        <small className="text-[#8c9097] dark:text-white/50">28,Oct 2022.</small>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Sub Headings" code={list11} customCardClass="text-defaulttextcolor text-defaultsize">
                        <ol className="ti-list-group !list-decimal">
                            <li className="ti-list-group-item flex justify-between items-start">
                                <div className="ms-2 me-auto text-[#8c9097] dark:text-white/50">
                                    <div className="font-semibold text-[.875rem] !text-defaulttextcolor">What Happened?</div>
                                    Many experts have recently suggested may exist.
                                </div>
                            </li>
                            <li className="ti-list-group-item flex justify-between items-start">
                                <div className="ms-2 me-auto text-[#8c9097] dark:text-white/50">
                                    <div className="font-semibold text-[.875rem] !text-defaulttextcolor">It Was Amazing!</div>
                                    His idea involved taking red.
                                </div>
                            </li>
                            <li className="ti-list-group-item flex justify-between items-start">
                                <div className="ms-2 me-auto text-[#8c9097] dark:text-white/50">
                                    <div className="font-semibold text-[.875rem] !text-defaulttextcolor">News Is A Great Weapon.</div>
                                    News can influence in many ways.
                                </div>
                            </li>
                            <li className="ti-list-group-item flex justify-between items-start">
                                <div className="ms-2 me-auto text-[#8c9097] dark:text-white/50">
                                    <div className="font-semibold text-[.875rem] !text-defaulttextcolor">majority have suffered.</div>
                                    If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything.
                                </div>
                            </li>
                        </ol>
                    </Showcode>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Numbered List" code={list12}>
                        <ol className="ti-list-group ti-list-group-numbered">
                            <li className="ti-list-group-item">Simply dummy text of the printing.</li>
                            <li className="ti-list-group-item">There are many variations of passages.</li>
                            <li className="ti-list-group-item">All the Lorem Ipsum generators.</li>
                            <li className="ti-list-group-item">Written in 45 BC. This book is a treatise on the theory.</li>
                            <li className="ti-list-group-item">Randomised words which don't look.</li>
                            <li className="ti-list-group-item">Always free from repetition, injected humour.</li>
                        </ol>
                    </Showcode>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="List With Checkboxes" code={list13}>
                        <ul className="ti-list-group">
                            <li className="ti-list-group-item">
                                <input className="form-check-input me-1 font-semibold" type="checkbox" value=""
                                    aria-label="..." defaultChecked />
                                Accurate information at any given point.
                            </li>
                            <li className="ti-list-group-item">
                                <input className="form-check-input me-1 font-semibold" type="checkbox" value=""
                                    aria-label="..." />
                                Hearing the information and responding.
                            </li>
                            <li className="ti-list-group-item">
                                <input className="form-check-input me-1 font-semibold" type="checkbox" value=""
                                    aria-label="..." defaultChecked />
                                Setting up and customizing your own sales.
                            </li>
                            <li className="ti-list-group-item">
                                <input className="form-check-input me-1 font-semibold" type="checkbox" value=""
                                    aria-label="..." defaultChecked />
                                New Admin Launched.
                            </li>
                            <li className="ti-list-group-item">
                                <input className="form-check-input me-1 font-semibold" type="checkbox" value=""
                                    aria-label="..." />
                                To maximize profits and improve productivity.
                            </li>
                            <li className="ti-list-group-item">
                                <input className="form-check-input me-1 font-semibold" type="checkbox" value=""
                                    aria-label="..." />
                                To have a complete 360° overview of sales information, having.
                            </li>
                        </ul>
                    </Showcode>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="List With Radios" code={list14}>
                        <ul className="ti-list-group list-none">
                            <li className="ti-list-group-item">
                                <input className="form-check-input me-1" type="radio" value=""
                                    name="list-radio" defaultChecked />
                                Accurate information at any given point.
                            </li>
                            <li className="ti-list-group-item">
                                <input className="form-check-input me-1" type="radio" value=""
                                    name="list-radio" defaultChecked />
                                Hearing the information and responding.
                            </li>
                            <li className="ti-list-group-item">
                                <input className="form-check-input me-1" type="radio" value=""
                                    name="list-radio" defaultChecked />
                                Setting up and customizing your own sales.
                            </li>
                            <li className="ti-list-group-item">
                                <input className="form-check-input me-1" type="radio" value=""
                                    name="list-radio" />
                                New Admin Launched.
                            </li>
                            <li className="ti-list-group-item">
                                <input className="form-check-input me-1" type="radio" value=""
                                    name="list-radio" />
                                To maximize profits and improve productivity.
                            </li>
                            <li className="ti-list-group-item">
                                <input className="form-check-input me-1" type="radio" value=""
                                    name="list-radio" />
                                To have a complete 360° overview of sales information, having.
                            </li>
                        </ul>
                    </Showcode>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="List With Badges" code={list15}>
                        <ul className="ti-list-group">
                            <li
                                className="ti-list-group-item flex justify-between items-center font-semibold">
                                Grocies
                                <span className="badge bg-primary text-white">Available</span>
                            </li>
                            <li
                                className="ti-list-group-item flex justify-between items-center font-semibold">
                                Furniture
                                <span className="badge bg-secondary text-white">Buy</span>
                            </li>
                            <li
                                className="ti-list-group-item flex justify-between items-center font-semibold">
                                Beauty
                                <span className="badge bg-danger !rounded-full text-white">32</span>
                            </li>
                            <li
                                className="ti-list-group-item flex justify-between items-center font-semibold">
                                Books
                                <span className="badge bg-light text-default">New</span>
                            </li>
                            <li
                                className="ti-list-group-item flex justify-between items-center font-semibold">
                                Toys
                                <span className="badge bg-info-gradient">Hot</span>
                            </li>
                            <li
                                className="ti-list-group-item flex justify-between items-center font-semibold">
                                Mobiles
                                <span className="badge bg-warning text-white">Sold Out</span>
                            </li>
                        </ul>
                    </Showcode>
                </div>
            </div>
        </div>
    )
}
Listgroup.layout = "Contentlayout"

export default Listgroup