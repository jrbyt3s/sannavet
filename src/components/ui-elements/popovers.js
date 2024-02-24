
import { popover1, popover2, popover3, popover4, popover5, popover6 } from '@/shared/data/prism/uielementsprism'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Showcode from '@/shared/layout-components/showcode/showcode'
import Link from 'next/link'
import React from 'react'

const Popovers = () => {
    return (
        <div>
            <Seo title={"Popovers"} />
            <Pageheader currentpage="Popovers" activepage="Ui Elements" mainpage="Popovers" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-5 col-span-12">
                    <Showcode title=" Default Popovers" customCardClass="custom-box" code={popover1}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            <div className="hs-tooltip ti-main-tooltip [--trigger:click]">
                                <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-outline-primary me-2" href="#!">Popover Top
                                    <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip">
                                        <div className="!border-b !border-solid dark:border-defaultborder/10 !rounded-t-md !py-2  !px-4 text-defaulttextcolor border-defaultborder text-start w-full text-[1rem]">
                                            <h6>Popover Top</h6>
                                        </div>
                                        <p className="!text-defaulttextcolor !text-[0.8rem] !py-4 !px-4 text-start">And here's some amazing content. It's very engaging. Right?</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:right]">
                                <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-outline-primary me-2" href="#!">Popover Right
                                    <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip">
                                        <div className="!border-b !border-solid dark:border-defaultborder/10 !rounded-t-md !py-2  !px-4 text-defaulttextcolor border-defaultborder text-start w-full text-[1rem]">
                                            <h6>Popover Right</h6>
                                        </div>
                                        <p className="!text-defaulttextcolor !text-[0.8rem] !py-4 !px-4 text-start">And here's some amazing content. It's very engaging. Right?</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:bottom]">
                                <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-outline-primary me-2" href="#!">Popover Bottom
                                    <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip">
                                        <div className="!border-b !border-solid dark:border-defaultborder/10 !rounded-t-md !py-2  !px-4 text-defaulttextcolor border-defaultborder text-start w-full text-[1rem]">
                                            <h6>Popover Bottom</h6>
                                        </div>
                                        <p className="!text-defaulttextcolor !text-[0.8rem] !py-4 !px-4 text-start">And here's some amazing content. It's very engaging. Right?</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:left]">
                                <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-outline-primary me-2" href="#!">Popover Left
                                    <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip">
                                        <div className="!border-b !border-solid dark:border-defaultborder/10 !rounded-t-md !py-2  !px-4 text-defaulttextcolor border-defaultborder text-start w-full text-[1rem]">
                                            <h6>Popover Left</h6>
                                        </div>
                                        <p className="!text-defaulttextcolor !text-[0.8rem] !py-4 !px-4 text-start">And here's some amazing content. It's very engaging. Right?</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-7 col-span-12">
                    <Showcode title="Colored Header" customCardClass="custom-box" code={popover2}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:top]">
                                <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-outline-primary me-2" href="#!">Header Primary
                                    <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip">
                                        <div className="!border-b !border-solid dark:border-defaultborder/10 bg-primary !rounded-t-md !py-2  !px-4 text-white border-defaultborder text-start w-full text-[1rem]">
                                            <h6>Color Header</h6>
                                        </div>
                                        <p className="!text-defaulttextcolor  !text-[0.8rem] !py-4 !px-4 text-start">Popover With Primary Header</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:right]">
                                <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-outline-secondary me-2" href="#!">Header Secondary
                                    <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip">
                                        <div className="!border-b !border-solid dark:border-defaultborder/10 bg-secondary !py-2 !rounded-t-md !px-4 text-white border-defaultborder text-start w-full text-[1rem]">
                                            <h6>Color Header</h6>
                                        </div>
                                        <p className="!text-defaulttextcolor !text-[0.8rem] !py-4 !px-4 text-start">Popover With Secondary Header</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:bottom]">
                                <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-outline-info me-2" href="#!">Header Info
                                    <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip">
                                        <div className="!border-b !border-solid dark:border-defaultborder/10 bg-info !py-2 !px-4 !rounded-t-md text-white border-defaultborder text-start w-full text-[1rem]">
                                            <h6>Color Header</h6>
                                        </div>
                                        <p className="!text-defaulttextcolor !text-[0.8rem] !py-4 !px-4 text-start">Popover With Info Header</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:left]">
                                <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-outline-warning me-2" href="#!">Header warning
                                    <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip">
                                        <div className="!border-b !border-solid dark:border-defaultborder/10 bg-warning !py-2 !px-4 !rounded-t-md text-white border-defaultborder text-start w-full text-[1rem]">
                                            <h6>Color Header</h6>
                                        </div>
                                        <p className="!text-defaulttextcolor !text-[0.8rem] !py-4 !px-4 text-start">Popover With warning Header</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:top]">
                                <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-outline-success me-2" href="#!">Header success
                                    <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip">
                                        <div className="!border-b !border-solid dark:border-defaultborder/10 bg-success !py-2 !px-4 text-white !rounded-t-md border-defaultborder text-start w-full text-[1rem]">
                                            <h6>Color Header</h6>
                                        </div>
                                        <p className="!text-defaulttextcolor !text-[0.8rem] !py-4 !px-4 text-start">Popover With succuss Header</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:top]">
                                <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-outline-danger me-2" href="#!">Header danger
                                    <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip">
                                        <div className="!border-b !border-solid dark:border-defaultborder/10 bg-danger !py-2 !px-4 text-white border-defaultborder !rounded-t-md text-start w-full text-[1rem]">
                                            <h6>Color Header</h6>
                                        </div>
                                        <p className="!text-defaulttextcolor !text-[0.8rem] !py-4 !px-4 text-start">Popover With danger Header</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <Showcode title="Colored Popovers" customCardClass="custom-box" code={popover3}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            <div className="hs-tooltip ti-main-tooltip  [--trigger:click] [--placement:top]">
                                <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-primary-full me-2" href="#!">Primary
                                    <div className="hs-tooltip-content ti-main-tooltip-content !bg-primary dark:!bg-primary !z-[1000] !p-0 !max-w-[276px] !border-white/10" role="tooltip">
                                        <div className="!border-b !border-solid dark:border-white/10 !py-2 !px-4 text-white border-white/10 !rounded-t-md text-start w-full text-[1rem]">
                                            <h6>Primary Color background</h6>
                                        </div>
                                        <p className="!text-white !text-[0.8rem] !py-4 !px-4 text-start">Popover With primary background</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:bottom]">
                                <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-secondary-full me-2" href="#!">Secondary
                                    <div className="hs-tooltip-content ti-main-tooltip-content !bg-secondary dark:!bg-secondary !p-0 !max-w-[276px] !border-white/10" role="tooltip">
                                        <div className="!border-b !border-solid dark:border-white/10 !py-2 !px-4 text-white border-white/10 !rounded-t-md text-start w-full text-[1rem]">
                                            <h6>Secondary Color background</h6>
                                        </div>
                                        <p className="!text-white !text-[0.8rem] !py-4 !px-4 text-start">Popover With secondary background</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:right]">
                                <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-info-full me-2" href="#!">Info
                                    <div className="hs-tooltip-content ti-main-tooltip-content !bg-info dark:!bg-info !p-0 !max-w-[276px]  !border-white/10" role="tooltip">
                                        <div className="!border-b dark:border-white/10 !border-solid !py-2 !px-4 text-white border-white/10 !rounded-t-md text-start w-full text-[1rem]">
                                            <h6>Info Color background</h6>
                                        </div>
                                        <p className="!text-white !text-[0.8rem] !py-4 !px-4 text-start">Popover With info background</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:top]">
                                <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-warning-full me-2" href="#!">Warning
                                    <div className="hs-tooltip-content ti-main-tooltip-content !bg-warning dark:!bg-warning  !p-0 !max-w-[276px] !border-white/10" role="tooltip">
                                        <div className="!border-b dark:border-white/10 !border-solid !py-2 !px-4 text-white border-white/10 !rounded-t-md text-start w-full text-[1rem]">
                                            <h6>Warning Color background</h6>
                                        </div>
                                        <p className="!text-white !text-[0.8rem] !py-4 !px-4 text-start">Popover With warning background</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:bottom]">
                                <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-success-full me-2" href="#!">Success
                                    <div className="hs-tooltip-content ti-main-tooltip-content !bg-success dark:!bg-success  !p-0 !max-w-[276px] !border-white/10" role="tooltip">
                                        <div className="!border-b dark:border-white/10 !border-solid !py-2 !px-4 text-white border-white/10 !rounded-t-md text-start w-full text-[1rem]">
                                            <h6>Success Color background</h6>
                                        </div>
                                        <p className="!text-white !text-[0.8rem] !py-4 !px-4 text-start">Popover With success background</p>
                                    </div>
                                </Link>
                            </div>
                            <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:top]">
                                <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-danger-full me-2" href="#!">Danger
                                    <div className="hs-tooltip-content ti-main-tooltip-content !bg-danger dark:!bg-danger  !p-0 !max-w-[276px] !border-white/10" role="tooltip">
                                        <div className="!border-b dark:border-white/10 !border-solid !py-2 !px-4 text-white border-white/10 !rounded-t-md text-start w-full text-[1rem]">
                                            <h6>Danger Color background</h6>
                                        </div>
                                        <p className="!text-white !text-[0.8rem] !py-4 !px-4 text-start">Popover With danger background</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <Showcode title="Light Popovers" customCardClass="custom-box" code={popover4}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:top] ">
                                <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-primary me-2" href="#!">Primary
                                    <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !z-[1000] !p-0 !max-w-[276px] overflow-hidden" role="tooltip">
                                        <div className="!bg-primary/10">
                                            <div className="!border-b !border-solid !py-2 !px-4  text-primary !border-primary/20 !rounded-t-md text-start w-full text-[1rem]">
                                                <h6>Color background</h6>
                                            </div>
                                            <p className="!text-primary !text-[0.8rem] !py-4 !px-4 text-start">Popover With primary background</p>

                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:right]">
                                <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-secondary me-2" href="#!">Secondary
                                    <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !z-[1000] !p-0 !max-w-[276px] overflow-hidden" role="tooltip">
                                        <div className="!bg-secondary/10">
                                            <div className="!border-b !border-solid !py-2 !px-4  text-secondary !border-secondary/20 !rounded-t-md text-start w-full text-[1rem]">
                                                <h6>Color background</h6>
                                            </div>
                                            <p className="!text-secondary !text-[0.8rem] !py-4 !px-4 text-start">Popover With secondary background</p>

                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:top]">
                                <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-info me-2" href="#!">Info
                                    <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !z-[1000] !p-0 !max-w-[276px] overflow-hidden" role="tooltip">
                                        <div className="!bg-info/10">
                                            <div className="!border-b !border-solid !py-2 !px-4  text-info !border-info/20 !rounded-t-md text-start w-full text-[1rem]">
                                                <h6>Color background</h6>
                                            </div>
                                            <p className="!text-info !text-[0.8rem] !py-4 !px-4 text-start">Popover With info background</p>

                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:right]">
                                <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-warning me-2" href="#!">Warning
                                    <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !z-[1000] !p-0 !max-w-[276px] overflow-hidden" role="tooltip">
                                        <div className="!bg-warning/10">
                                            <div className="!border-b !border-solid !py-2 !px-4  text-warning !border-warning/20 !rounded-t-md text-start w-full text-[1rem]">
                                                <h6>Color background</h6>
                                            </div>
                                            <p className="!text-warning !text-[0.8rem] !py-4 !px-4 text-start">Popover With warning background</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:top]">
                                <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-success me-2" href="#!">Success
                                    <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !z-[1000] !p-0 !max-w-[276px] overflow-hidden" role="tooltip">
                                        <div className="!bg-success/10">
                                            <div className="!border-b !border-solid !py-2 !px-4  text-success !border-success/20 !rounded-t-md text-start w-full text-[1rem]">
                                                <h6>Color background</h6>
                                            </div>
                                            <p className="!text-success !text-[0.8rem] !py-4 !px-4 text-start">Popover With success background</p>

                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:right]">
                                <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-danger me-2" href="#!">danger
                                    <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !z-[1000] !p-0 !max-w-[276px] overflow-hidden" role="tooltip">
                                        <div className="!bg-danger/10">
                                            <div className="!border-b !border-solid !py-2 !px-4  text-danger !border-danger/20 !rounded-t-md text-start w-full text-[1rem]">
                                                <h6>Color background</h6>
                                            </div>
                                            <p className="!text-danger !text-[0.8rem] !py-4 !px-4 text-start">Popover With danger background</p>

                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Disabled Popover" customCardClass="custom-box" code={popover5}>
                        <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:top]">
                            <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-primary-full opacity-60" href="#!">
                                Disabled button
                                <div className="hs-tooltip-content ti-main-tooltip-content dark:!bg-bodybg2" role="tooltip">
                                    Diabled Popover
                                </div>
                            </Link>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Icon Popovers" customCardBodyClass="flex" customCardClass="custom-box" code={popover6}>
                        <div className="hs-tooltip ti-main-tooltip me-6 !max-w-[276px] [--trigger:click] [--placement:top]">
                            <Link className="hs-tooltip-toggle ti-main-tooltip-toggle" href="#!">
                                <svg xmlns="http://www.w3.org/2000/svg" className="svg-primary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z" /></svg>
                                <div className="hs-tooltip-content ti-main-tooltip-content !py-4 !px-4 !bg-primary !text-white" role="tooltip">
                                    <p>The Icon Popover</p>
                                </div>
                            </Link>
                        </div>
                        <div className="hs-tooltip ti-main-tooltip !max-w-[276px] [--trigger:click] [--placement:left]">
                            <Link className="hs-tooltip-toggle ti-main-tooltip-toggle" href="#!">
                                <svg xmlns="http://www.w3.org/2000/svg" className="fill-secondary" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none" /><path d="M11 7h2v2h-2zm0 4h2v6h-2zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" /></svg>
                                <div className="hs-tooltip-content ti-main-tooltip-content !bg-secondary !text-white !py-4 !px-4" role="tooltip">
                                    <p>The Icon Popover</p>
                                </div>
                            </Link>
                        </div>
                    </Showcode>
                </div>
            </div>
        </div>
    )
}
Popovers.layout = "Contentlayout"

export default Popovers