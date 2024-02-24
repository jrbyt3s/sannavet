import { buttons1, buttons10, buttons11, buttons12, buttons13, buttons14, buttons15, buttons16, buttons17, buttons18, buttons19, buttons2, buttons20, buttons21, buttons22, buttons3, buttons4, buttons5, buttons6, buttons7, buttons8, buttons9 } from '@/shared/data/prism/uielementsprism';
import { Defaultbutton, Lightbuttons, gradientbuttons, outlinebuttons } from '@/shared/data/ui-elements/buttonsdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Showcode from '@/shared/layout-components/showcode/showcode';
import Link from 'next/link'
import React from 'react';

const Buttons = () => {
    return (
        <div>
            <Seo title={"Buttons"} />
            <Pageheader currentpage="Buttons" activepage="Ui Elements" mainpage="Buttons" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Default Buttons" code={buttons1}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            {Defaultbutton.map((idx) => (
                                <button type="button" className={`ti-btn ti-btn-${idx.color} ti-btn-wave`} key={Math.random()}>{idx.class}</button>
                            ))}
                            <button type="button" className="ti-btn ti-btn-link ti-btn-wave">Link</button>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Rounded Buttons" code={buttons2}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            {Defaultbutton.map((idx) => (
                                <button type="button" className={`ti-btn ti-btn-${idx.color} !rounded-full ti-btn-wave`} key={Math.random()}>{idx.class}</button>
                            ))}
                            <button type="button" className="ti-btn ti-btn-link ti-btn-wave">Link</button>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Light Buttons" code={buttons3}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            {Lightbuttons.map((idx) => (
                                <button type="button" className={`ti-btn ti-btn-${idx.color} ti-btn-wave`} key={Math.random()}>{idx.class}</button>
                            ))}
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Light Rounded Buttons" code={buttons4}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            {Lightbuttons.map((idx) => (
                                <button type="button" className={`ti-btn ti-btn-${idx.color} !rounded-full ti-btn-wave`} key={Math.random()}>{idx.class}</button>
                            ))}
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Outline Buttons" code={buttons5}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            {outlinebuttons.map((idx) => (
                                <button type="button" className={`ti-btn ti-btn-outline-${idx.color} ti-btn-wave`} key={Math.random()}>{idx.class}</button>
                            ))}
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Rounded Outline Buttons" code={buttons6}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            {outlinebuttons.map((idx) => (
                                <button type="button" className={`ti-btn ti-btn-outline-${idx.color} !rounded-full ti-btn-wave`} key={Math.random()}>{idx.class}</button>
                            ))}
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Gradient Buttons" code={buttons7}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            {gradientbuttons.map((idx) => (
                                <button type="button" className={`ti-btn ti-btn-${idx.color}-gradient ti-btn-wave`} key={Math.random()}>{idx.class}</button>
                            ))}
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Rounded Gradient Buttons" code={buttons8}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            {gradientbuttons.map((idx) => (
                                <button type="button" className={`ti-btn ti-btn-${idx.color}-gradient !rounded-full ti-btn-wave`} key={Math.random()}>{idx.class}</button>
                            ))}
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Ghost Buttons" code={buttons9}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            {gradientbuttons.map((idx) => (
                                <button type="button" className={`ti-btn ti-btn-ghost-${idx.color} ti-btn-wave`} key={Math.random()}>{idx.class}</button>
                            ))}
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Rounded Ghost Buttons" code={buttons10}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            {gradientbuttons.map((idx) => (
                                <button type="button" className={`ti-btn ti-btn-ghost-${idx.color} !rounded-full ti-btn-wave`} key={Math.random()}>{idx.class}</button>
                            ))}
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Button Tags" code={buttons11}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            <Link className="ti-btn ti-btn-primary-full ti-btn-wave" href="#!">Link</Link>
                            <button className="ti-btn ti-btn-secondary-full ti-btn-wave" type="submit">Button</button>
                            <input className="ti-btn ti-btn-info-full" type="button" value="Input" />
                            <input className="ti-btn ti-btn-warning-full" type="button" value="Submit" />
                            <input className="ti-btn ti-btn-success-full" type="button" value="Reset" />
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Disable State With anchor Tags" code={buttons12}>
                        <div className="ti-btn-list flex flex-wrap gap-x-2 space-x-2 rtl:space-x-reverse">
                            <button type="button" className="ti-btn ti-btn-primary-full ti-btn-disabled">Primary
                                button</button>
                            <button type="button" className="ti-btn ti-btn-secondary-full ti-btn-disabled">Button</button>
                            <button type="button" className="ti-btn ti-btn-outline-primary ti-btn-disabled">Primary
                                button</button>
                            <button type="button" className="ti-btn ti-btn-outline-secondary ti-btn-disabled">Button</button>
                            <div className='space-x-2 rtl:space-x-reverse'>
                                <Link href="#!" className="ti-btn ti-btn-primary ti-btn-disabled" aria-disabled="true">Primary
                                    link</Link>
                                <Link href="#!" className="ti-btn ti-btn-secondary ti-btn-disabled ms-2" aria-disabled="true">Link</Link>
                            </div>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Loading Buttons" code={buttons13}>
                        <div className="ti-btn-list md:flex flex-wrap">
                            <button type="button" className="ti-btn ti-btn-primary-full ti-btn-loader m-2">
                                <span className="me-2">Loading</span>
                                <span className="loading"><i className="ri-loader-2-fill text-[1rem] animate-spin"></i></span>
                            </button>
                            <button type="button" className="ti-btn ti-btn-outline-secondary ti-btn-loader m-2">
                                <span className="me-2">Loading</span>
                                <span className="loading"><i className="ri-loader-2-fill text-[1rem] animate-spin"></i></span>
                            </button>
                            <button type="button" className="ti-btn bg-info/10 text-info ti-btn-loader m-2">
                                <span className="me-2">Loading</span>
                                <span className="loading"><i className="ri-loader-4-line text-[1rem] animate-spin"></i></span>
                            </button>
                            <button type="button" className="ti-btn bg-warning/10 text-warning ti-btn-loader m-2">
                                <span className="me-2">Loading</span>
                                <span className="loading"><i className="ri-loader-5-line text-[1rem] animate-spin"></i></span>
                            </button>
                            <button type="button" className="ti-btn ti-btn-success-full ti-btn-loader ti-btn-disabled m-2">
                                <span className="me-2">Disabled</span>
                                <span className="loading"><i className="ri-refresh-line text-[1rem] animate-spin"></i></span>
                            </button>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Icon Buttons" code={buttons14}>
                        <div className="ti-btn-list md:flex flex-wrap gap-y-2 block">
                            <div className="md:mb-0 mb-2 flex gap-x-2">
                                <button type="button" aria-label="button" className="ti-btn ti-btn-icon ti-btn-primary-full ti-btn-wave">
                                    <i className="ri-bank-fill"></i>
                                </button>
                                <button type="button" aria-label="button" className="ti-btn ti-btn-icon ti-btn-info-full ti-btn-wave">
                                    <i className="ri-medal-line"></i>
                                </button>
                                <button type="button" aria-label="button" className="ti-btn ti-btn-icon ti-btn-danger-full ti-btn-wave">
                                    <i className="ri-archive-line"></i>
                                </button>
                                <button type="button" aria-label="button" className="ti-btn ti-btn-icon ti-btn-warning-full ti-btn-wave me-5">
                                    <i className="ri-calendar-2-line"></i>
                                </button>
                            </div>
                            <div className="md:mb-0 mb-2 flex gap-x-2">
                                <button type="button" aria-label="button" className="ti-btn ti-btn-icon bg-primary/10 text-primary !border hover:bg-primary hover:text-white !rounded-full ti-btn-wave">
                                    <i className="ri-home-smile-line"></i>
                                </button>
                                <button type="button" aria-label="button" className="ti-btn ti-btn-icon bg-secondary/10 text-secondary hover:bg-secondary hover:text-white !rounded-full ti-btn-wave">
                                    <i className="ri-delete-bin-line"></i>
                                </button>
                                <button type="button" aria-label="button" className="ti-btn ti-btn-icon bg-success/10 text-success hover:bg-success hover:text-white !rounded-full ti-btn-wave">
                                    <i className="ri-notification-3-line"></i>
                                </button>
                                <button type="button" aria-label="button" className="ti-btn ti-btn-icon bg-danger/10 text-danger hover:bg-danger hover:text-white !rounded-full ti-btn-wave me-5">
                                    <i className="ri-chat-settings-line"></i>
                                </button>
                            </div>
                            <div className=" flex gap-x-2">
                                <button type="button" aria-label="button" className="ti-btn ti-btn-icon ti-btn-outline-primary !rounded-full ti-btn-wave">
                                    <i className="ri-phone-line"></i>
                                </button>
                                <button type="button" aria-label="button" className="ti-btn ti-btn-icon ti-btn-outline-teal !border-teal !text-teal !rounded-full ti-btn-wave">
                                    <i className="ri-customer-service-2-line"></i>
                                </button>
                                <button type="button" aria-label="button" className="ti-btn ti-btn-icon ti-btn-outline-success !rounded-full ti-btn-wave">
                                    <i className="ri-live-line"></i>
                                </button>
                                <button type="button" aria-label="button" className="ti-btn ti-btn-icon ti-btn-outline-secondary !rounded-full ti-btn-wave">
                                    <i className="ri-save-line"></i>
                                </button>
                            </div>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Social Buttons" code={buttons15}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            <button type="button" aria-label="button" className="ti-btn ti-btn-icon ti-btn-facebook ti-btn-wave">
                                <i className="ri-facebook-line"></i>
                            </button>
                            <button type="button" aria-label="button" className="ti-btn ti-btn-icon ti-btn-twitter ti-btn-wave">
                                <i className="ri-twitter-line"></i>
                            </button>
                            <button type="button" aria-label="button" className="ti-btn ti-btn-icon ti-btn-instagram ti-btn-wave">
                                <i className="ri-instagram-line"></i>
                            </button>
                            <button type="button" aria-label="button" className="ti-btn ti-btn-icon ti-btn-github ti-btn-wave">
                                <i className="ri-github-line"></i>
                            </button>
                            <button type="button" aria-label="button" className="ti-btn ti-btn-icon ti-btn-youtube ti-btn-wave">
                                <i className="ri-youtube-line"></i>
                            </button>
                            <button type="button" aria-label="button" className="ti-btn ti-btn-icon ti-btn-google ti-btn-wave">
                                <i className="ri-google-line"></i>
                            </button>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="grid grid-cols-12">
                        <div className="xl:col-span-12 col-span-12">
                            <Showcode title="Sizes" code={buttons16}>
                                <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                                    <button type="button" className="ti-btn ti-btn-primary-full !py-1 !px-2 ti-btn-wave">Small
                                        button</button>
                                    <button type="button" className="ti-btn ti-btn-secondary-full ti-btn-wave">Default
                                        button</button>
                                    <button type="button" className="ti-btn ti-btn-success-full ti-btn-lg ti-btn-wave">Large
                                        button</button>
                                </div>
                            </Showcode>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="grid grid-cols-12">
                        <div className="xl:col-span-12 col-span-12">
                            <Showcode title="Button Widths" code={buttons17}>
                                <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                                    <button type="button" className="ti-btn ti-btn-primary-full ti-btn-w-xs ti-btn-wave">XS</button>
                                    <button type="button" className="ti-btn ti-btn-secondary-full ti-btn-w-sm ti-btn-wave">SM</button>
                                    <button type="button" className="ti-btn ti-btn-warning-full ti-btn-w-md ti-btn-wave">MD</button>
                                    <button type="button" className="ti-btn ti-btn-info-full ti-btn-w-lg ti-btn-wave">LG</button>
                                </div>
                            </Showcode>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Buttons With Different Shadows" code={buttons18}>
                        <div className="ti-btn-list flex flex-wrap gap-y-2">
                            <div className="me-[3rem] flex gap-x-2">
                                <button type="button" className="ti-btn ti-btn-primary-full shadow-sm ti-btn-wave">Button</button>
                                <button type="button" className="ti-btn ti-btn-primary-full shadow ti-btn-wave">Button</button>
                                <button type="button" className="ti-btn ti-btn-primary-full shadow-lg ti-btn-wave">Button</button>
                            </div>
                            <div className="flex gap-x-2">
                                <button type="button" className="ti-btn ti-btn-secondary-full !py-1 !px-2 shadow-sm ti-btn-wave">Button</button>
                                <button type="button" className="ti-btn ti-btn-info-full shadow ti-btn-wave">Button</button>
                                <button type="button" className="ti-btn ti-btn-lg ti-btn-success-full shadow-lg ti-btn-wave">Button</button>
                            </div>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Different Colored Buttons With Shadows" code={buttons19}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            <button type="button" className="ti-btn ti-btn-primary-full shadow-primary ti-btn-wave">Button</button>
                            <button type="button" className="ti-btn ti-btn-secondary-full shadow-secondary ti-btn-wave">Button</button>
                            <button type="button" className="ti-btn ti-btn-success-full shadow-success ti-btn-wave">Button</button>
                            <button type="button" className="ti-btn ti-btn-info-full shadow-info ti-btn-wave">Button</button>
                            <button type="button" className="ti-btn ti-btn-warning-full shadow-warning ti-btn-wave">Button</button>
                            <button type="button" className="ti-btn ti-btn-danger-full shadow-danger ti-btn-wave">Button</button>
                            <button type="button" className="ti-btn ti-btn-purple-full shadow-purple ti-btn-wave">Button</button>
                            <button type="button" className="ti-btn ti-btn-orange-full shadow-orange ti-btn-wave">Button</button>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Label Buttons" code={buttons20}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            <button type="button" className="ti-btn ti-btn-primary-full label-ti-btn">
                                <i className="ri-chat-smile-line label-ti-btn-icon  me-2"></i>
                                Primary
                            </button>
                            <button type="button" className="ti-btn ti-btn-secondary-full label-ti-btn">
                                <i className="ri-settings-4-line label-ti-btn-icon me-2"></i>
                                Secondary
                            </button>
                            <button type="button" className="ti-btn ti-btn-warning-full label-ti-btn !rounded-full">
                                <i className="ri-spam-2-line label-ti-btn-icon me-2 !rounded-full"></i>
                                Warning
                            </button>
                            <button type="button" className="ti-btn ti-btn-info-full label-ti-btn !rounded-full">
                                <i className="ri-phone-line label-ti-btn-icon me-2 !rounded-full"></i>
                                Info
                            </button>
                            <button type="button" className="ti-btn ti-btn-success-full label-ti-btn label-end">
                                <i className="ri-thumb-up-line label-ti-btn-icon ms-2"></i>
                                Success
                            </button>
                            <button type="button" className="ti-btn ti-btn-danger-full label-ti-btn label-end !rounded-full">
                                <i className="ri-close-line label-ti-btn-icon ms-2 !rounded-full"></i>
                                Cancel
                            </button>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <Showcode title="Custom Buttons" code={buttons21}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            <button type="button" className="ti-btn ti-btn-info-full custom-button !rounded-full">
                                <span className="custom-ti-btn-icons"><i className="ri-twitter-line text-info"></i></span>
                                Twitter
                            </button>
                            <button type="button" className="ti-btn ti-btn-teal ti-btn-border-down border-0">Border</button>
                            <button type="button" className="ti-btn ti-btn-secondary ti-btn-border-start">Border</button>
                            <button type="button" className="ti-btn ti-btn-purple ti-btn-border-end">Border</button>
                            <button type="button" className="ti-btn ti-btn-warning ti-btn-border-top">Border</button>
                            <button type="button" className="ti-btn ti-btn-danger-full ti-btn-hover ti-btn-hover-animate">Like</button>
                            <button type="button" className="ti-btn ti-btn-success-full ti-btn-darken-hover">Hover</button>
                            <button type="button" className="ti-btn ti-btn-orange-full ti-btn-custom-border">Hover</button>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-12 col-span-12">
                    <Showcode title="Block Buttons" code={buttons22}>
                        <div className="ti-btn-list space-x-2 rtl:space-x-reverse">
                            <div className="grid  gap-2 mb-4">
                                <button className="ti-btn ti-btn-primary-full ti-btn-wave" type="button">Button</button>
                                <button className="ti-btn ti-btn-secondary-full !mb-2 ti-btn-wave" type="button">Button</button>
                            </div>
                            <div className="grid gap-2 md:block">
                                <button className="ti-btn ti-btn-info-full md:me-2 ti-btn-wave" type="button">Button</button>
                                <button className="ti-btn ti-btn-success-full !mb-2 ti-btn-wave" type="button">Button</button>
                            </div>
                            <div className="grid !mx-auto gap-2 w-[50%] ">
                                <button className="ti-btn ti-btn-danger-full ti-btn-wave" type="button">Button</button>
                                <button className="ti-btn ti-btn-warning-full !mb-2 ti-btn-wave" type="button">Button</button>
                            </div>
                            <div className="grid gap-2 md:flex md:justify-end">
                                <button className="ti-btn ti-btn-teal-full md:me-2 ti-btn-wave" type="button">Button</button>
                                <button className="ti-btn ti-btn-purple-full ti-btn-wave" type="button">Button</button>
                            </div>
                        </div>
                    </Showcode>
                </div>
            </div>
        </div>
    )
}
Buttons.layout = "Contentlayout"

export default Buttons