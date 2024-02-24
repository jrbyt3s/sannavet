import { badges1, badges10, badges11, badges12, badges13, badges2, badges3, badges4, badges5, badges6, badges7, badges8, badges9 } from '@/shared/data/prism/uielementsprism'
import { badges, gradientbadge, lightbadges, outlinebadges } from '@/shared/data/ui-elements/badgesdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Showcode from '@/shared/layout-components/showcode/showcode'
import React from 'react'

const Badge = () => {
    const data = 'flex flex-wrap gap-2'
    return (
        <div>
            <Seo title={"Badge"} />
            <Pageheader currentpage="Badge" activepage="Ui Elements" mainpage="Badge" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Badges" className={data} code={badges1}>
                        {badges.map((idx) => (
                            <span className={`badge me-2 bg-${idx.color}`} key={Math.random()}>{idx.class}</span>
                        ))}
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Pill Badges" code={badges2} customCardBodyClass="flex flex-wrap gap-2">
                        {badges.map((idx) => (
                            <span className={`badge me-2 !rounded-full bg-${idx.color}`} key={Math.random()}>{idx.class}</span>
                        ))}
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Light Badges" code={badges3} customCardBodyClass="flex flex-wrap gap-2">
                        {lightbadges.map((idx) => (
                            <span className={`badge me-2 bg-${idx.color}`} key={Math.random()}>{idx.class}</span>
                        ))}
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Light Pill Badges" code={badges4} customCardBodyClass="flex flex-wrap gap-2">
                        {lightbadges.map((idx) => (
                            <span className={`badge me-2 !rounded-full bg-${idx.color}`} key={Math.random()}>{idx.class}</span>
                        ))}
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Gradient Badges" code={badges5} customCardBodyClass="flex flex-wrap gap-2">
                        {gradientbadge.map((idx) => (
                            <span className={`badge me-2 bg-${idx.color}-gradient`} key={Math.random()}>{idx.class}</span>
                        ))}
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Gradient Pill Badges" code={badges6} customCardBodyClass="flex flex-wrap gap-2">
                        {gradientbadge.map((idx) => (
                            <span className={`badge me-2 rounded-full bg-${idx.color}-gradient`} key={Math.random()}>{idx.class}</span>
                        ))}
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Outline Badges" code={badges7} customCardBodyClass="flex flex-wrap gap-2">
                        {outlinebadges.map((idx) => (
                            <span className={`badge me-2 bg-outline-${idx.color}`} key={Math.random()}>{idx.class}</span>
                        ))}
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Outline Pill Badges" code={badges8} customCardBodyClass="flex flex-wrap gap-2">
                        {outlinebadges.map((idx) => (
                            <span className={`badge me-2 !rounded-full bg-outline-${idx.color}`} key={Math.random()}>{idx.class}</span>
                        ))}
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Button With Badges" code={badges9} customCardBodyClass="flex flex-wrap gap-2">
                        <button type="button" className="ti-btn bg-primary text-white my-1 me-2">
                            Notifications <span className="badge ms-2 bg-secondary">4</span>
                        </button>
                        <button type="button" className="ti-btn bg-secondary text-white my-1 me-2">
                            Notifications <span className="badge ms-2 bg-primary">7</span>
                        </button>
                        <button type="button" className="ti-btn bg-success text-white my-1 me-2">
                            Notifications <span className="badge ms-2 bg-danger">12</span>
                        </button>
                        <button type="button" className="ti-btn bg-info text-white my-1 me-2">
                            Notifications <span className="badge ms-2 bg-warning">32</span>
                        </button>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Outline Button Badges" code={badges10} customCardBodyClass="flex flex-wrap gap-2">
                        <button type="button" className="ti-btn ti-btn-outline-primary my-1 me-2">
                            Notifications <span className="badge bg-primary ms-2 text-white">4</span>
                        </button>
                        <button type="button" className="ti-btn ti-btn-outline-secondary my-1 me-2">
                            Notifications <span className="badge bg-secondary ms-2 text-white">7</span>
                        </button>
                        <button type="button" className="ti-btn ti-btn-outline-success my-1 me-2">
                            Notifications <span className="badge bg-success ms-2 text-white">12</span>
                        </button>
                        <button type="button" className="ti-btn ti-btn-outline-info my-1 me-2">
                            Notifications <span className="badge bg-info ms-2 text-white">32</span>
                        </button>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Headings" code={badges11}>
                        <h1 className="text-[2.5rem]">Example heading <span className="badge bg-primary text-white">New</span></h1>
                        <h2 className="text-[2rem]">Example heading <span className="badge bg-primary text-white">New</span></h2>
                        <h3 className="text-[1.75rem]">Example heading <span className="badge bg-primary text-white">New</span></h3>
                        <h4 className="text-[1.5rem]">Example heading <span className="badge bg-primary text-white">New</span></h4>
                        <h5 className="text-[1.25rem]">Example heading <span className="badge bg-primary text-white">New</span></h5>
                        <h6 className="text-[1rem]">Example heading <span className="badge bg-primary text-white">New</span></h6>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="xl:col-span-12 col-span-12">
                            <Showcode title="Positioned Badges" code={badges12} customCardBodyClass="!flex flex-wrap gap-4">
                                <button type="button" className="ti-btn bg-primary text-white relative me-3">
                                    Inbox
                                    <span
                                        className="absolute -top-2 start-[60%] translate-middle  badge !rounded-full bg-danger">
                                        99+
                                        <span className="hidden">unread messages</span>
                                    </span>
                                </button>
                                <button type="button" className="ti-btn bg-secondary text-white relative me-3">
                                    Profile
                                    <span
                                        className="absolute -top-2 start-[80%] translate-middle p-2 bg-success border border-light !rounded-full">
                                        <span className="hidden">New alerts</span>
                                    </span>
                                </button>
                                <span className="avatar relative me-2">
                                    <img src="../../../assets/images/faces/2.jpg" alt="img" className="!rounded-md" />
                                    <span
                                        className="absolute -top-2 start-[80%] translate-middle p-1 bg-success border border-light !rounded-full">
                                        <span className="hidden">New alerts</span>
                                    </span>
                                </span>
                                <span className="avatar avatar-rounded relative me-3">
                                    <img src="../../../assets/images/faces/15.jpg" alt="img" />
                                    <span
                                        className="absolute -top-2 start-[80%] translate-middle p-1 bg-success border border-light !rounded-full">
                                        <span className="hidden">New alerts</span>
                                    </span>
                                </span>
                                <span className="avatar avatar-rounded relative">
                                    <img src="../../../assets/images/faces/10.jpg" alt="img" />
                                    <span
                                        className="absolute -top-2 start-[60%] translate-middle badge bg-secondary !rounded-full shadow-lg text-white">1000+
                                        <span className="hidden">New alerts</span>
                                    </span>
                                </span>
                            </Showcode>
                            <Showcode title="Positioned Badges" code={badges13}>
                                <div className="flex items-center gap-5 flex-wrap">
                                    <div>
                                        <span className="badge  bg-outline-secondary !font-semibold !text-[.9375rem] inline-flex items-center">
                                            <i className="ti ti-flame me-1"></i>
                                            Hot
                                        </span>
                                    </div>
                                    <div>
                                        <span className="relative">
                                            <svg className="fill-textmuted dark:fill-textmuted/50 w-8 h-8 text-[2rem]" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"></path></svg>
                                            <span className="badge !rounded-full bg-success text-white absolute -end-2 top-0">14</span>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="badge border dark:border-light bg-light text-defaulttextcolor font-semibold font-[.7rem]"><i className="fe fe-eye me-2 inline-block"></i>13.2k</span>
                                    </div>
                                    <div>
                                        <span className="text-badge relative">
                                            <span className="text text-lg">Inbox</span>
                                            <span className="badge !rounded-full bg-success text-white">32</span>
                                        </span>
                                    </div>
                                </div>
                            </Showcode>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
Badge.layout = "Contentlayout"

export default Badge