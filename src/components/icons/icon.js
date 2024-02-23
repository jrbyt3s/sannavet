import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React, { Fragment } from 'react'

const Icon = () => {
    return (
        <Fragment>
            <Seo title={"Icons"} />
            <Pageheader currentpage="Icons" activepage="Icons" mainpage="Icons" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Bootstrap Icons</div>
                        </div>
                        <div className="box-body">
                            <p className="mb-1">Simply beautiful open source icons. For more info <Link href="https://icons.getbootstrap.com/" target="_blank" className="text-primary">click here</Link>.</p>
                            <p className="mb-4"><code>&lt;i className="bi bi-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-none">
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle  bi bi-arrow-left-circle"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        bi bi-arrow-left-circle
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle  bi bi-arrows-move"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        bi bi-arrows-move
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle  bi bi-bag"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        bi bi-bag
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle  bi bi-bar-chart-line"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        bi bi-bar-chart-line
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle  bi bi-basket"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        bi bi-basket
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle  bi bi-bell"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        bi bi-bell
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle  bi bi-book"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        bi bi-book
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle  bi bi-box"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        bi bi-box
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle  bi bi-briefcase"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        bi bi-briefcase
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle  bi bi-brightness-high"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        bi bi-brightness-high
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle  bi bi-calendar"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        bi bi-calendar
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle  bi bi-paint-bucket"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        bi bi-paint-bucket
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Remix Icons</div>
                        </div>
                        <div className="box-body">
                            <p className="mb-1">Simply beautiful open source icons. For more info <Link href="https://remixicon.com/" target="_blank" className="text-primary">click here</Link>.</p>
                            <p className="mb-4"><code>&lt;i className="ri-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-none">
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle ri ri-home-line"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        ri ri-home-line
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle ri ri-mail-line"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        ri ri-mail-line
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle ri ri-briefcase-line"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        ri ri-briefcase-line
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle ri ri-window-line"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        ri ri-window-line
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle ri ri-chat-2-line"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        ri ri-chat-2-line
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle ri ri-chat-settings-line"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        ri ri-chat-settings-line
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle ri ri-edit-line"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        ri ri-edit-line
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle ri ri-layout-line"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        ri ri-layout-line
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle ri ri-code-s-slash-line"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        ri ri-code-s-slash-line
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle ri ri-airplay-line"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        ri ri-airplay-line
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle ri ri-file-line"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        ri ri-file-line
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Feather Icons</div>
                        </div>
                        <div className="box-body">
                            <p className="mb-1">Simply beautiful open source icons. For more info <Link href="https://feathericons.com/" target="_blank" className="text-primary">click here</Link>.</p>
                            <p className="mb-4"><code>&lt;i className="fe fe-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-none">
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle fe fe-activity"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        fe fe-activity
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle fe fe-airplay"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        fe fe-airplay
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle fe fe-alert-circle"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        fe fe-alert-circle
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle fe fe-alert-triangle"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        fe fe-alert-triangle
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle fe fe-bar-chart-2"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        fe fe-bar-chart-2
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle fe fe-bell"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        fe fe-bell
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle fe fe-camera"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        fe fe-camera
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle fe fe-copy"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        fe fe-copy
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle fe fe-eye"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        fe fe-eye
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle fe fe-file"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        fe fe-file
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle fe fe-layout"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        fe fe-layout
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Tabler Icons</div>
                        </div>
                        <div className="box-body">
                            <p className="mb-1">Simply beautiful open source icons. For more info <Link href="https://tabler-icons.io/" target="_blank" className="text-primary">click here</Link>.</p>
                            <p className="mb-4"><code>&lt;i className="ti ti-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-none">
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle ti ti-brand-tabler"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        ti ti-brand-tabler
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle ti ti-activity-heartbeat"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        ti ti-activity-heartbeat
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle ti ti-alert-octagon"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        ti ti-alert-octagon
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle ti ti-album"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        ti ti-album
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle ti ti-align-right"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        ti ti-align-right
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle ti ti-antenna-bars-5"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        ti ti-antenna-bars-5
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle ti ti-armchair"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        ti ti-armchair
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle ti ti-arrow-big-right"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        ti ti-arrow-big-right
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle ti ti-arrows-shuffle-2"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        ti ti-arrows-shuffle-2
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle ti ti-backspace"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        ti ti-backspace
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle ti ti-bell"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        ti ti-bell
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle ti ti-color-picker"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        ti ti-color-picker
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Line Awesome Icons</div>
                        </div>
                        <div className="box-body">
                            <p className="mb-1">Simply beautiful open source icons. For more info <Link href="https://icons8.com/line-awesome" target="_blank" className="text-primary">click here</Link>.</p>
                            <p className="mb-4"><code>&lt;i className="las la-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-none">
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle las la-bell"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        las la-bell
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle las la-exclamation-circle"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        las la-exclamation-circle
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle las la-exclamation-triangle"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        las la-exclamation-triangle
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle las la-arrow-alt-circle-down"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        las la-arrow-alt-circle-down
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle las la-arrow-alt-circle-up"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        las la-arrow-alt-circle-up
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle las la-arrow-alt-circle-left"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        las la-arrow-alt-circle-left
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle las la-arrow-alt-circle-right"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        las la-arrow-alt-circle-right
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle las la-history"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        las la-history
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle las la-headphones"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        las la-headphones
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle las la-tv"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        las la-tv
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle las la-car-side"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        las la-car-side
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle las la-envelope"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        las la-envelope
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle las la-edit"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        las la-edit
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle las la-map"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        las la-map
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Boxicons</div>
                        </div>
                        <div className="box-body">
                            <p className="mb-1">Simply beautiful open source icons. For more info <Link href="https://boxicons.com/" target="_blank" className="text-primary">click here</Link>.</p>
                            <p className="mb-4"><code>&lt;i className="bx bx-ICON_NAME"&gt;&lt;/i&gt;</code></p>
                            <ul className="icons-list list-none">
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle bx bx-home"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        bx bx-home
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle bx bx-home-alt"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        bx bx-home-alt
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle bx bx-box"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        bx bx-box
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle bx bx-medal"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        bx bx-medal
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle bx bx-file"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        bx bx-file
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle bx bx-palette"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        bx bx-palette
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle bx bx-receipt"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        bx bx-receipt
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle bx bx-table"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        bx bx-table
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle bx bx-bar-chart-alt"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        bx bx-bar-chart-alt
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle bx bx-layer"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        bx bx-layer
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle bx bx-map-alt"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        bx bx-map-alt
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle bx bx-gift"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        bx bx-gift
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle bx bx-file-blank"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        bx bx-file-blank
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle bx bx-lock-alt"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        bx bx-lock-alt
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle bx bx-error"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        bx bx-error
                                    </span>
                                </li>
                                <li className="icons-list-item hs-tooltip ti-main-tooltip">
                                    <i className="hs-tooltip-toggle bx bx-error-circle"></i>
                                    <span
                                        className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !border-0 !bg-black !text-xs !font-medium !text-white shadow-sm "
                                        role="tooltip">
                                        bx bx-error-circle
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Icon.layout = "Contentlayout"

export default Icon