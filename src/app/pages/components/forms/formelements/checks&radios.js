import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment, useState } from 'react';
import { radio1, radio10, radio11, radio12, radio13, radio14, radio2, radio3, radio4, radio5, radio6, radio7, radio8, radio9 } from '@/shared/data/prism/forms-prism';
import dynamic from 'next/dynamic';
const Showcode = dynamic(() => import("@/shared/layout-components/showcode/showcode"), { ssr: false });

const Checksradios = () => {

    const [secondary1, setsecondary1] = useState("on");
    const [success1, setsuccess1] = useState("on");
    const [dark1, setdark1] = useState("on");
    const [primary1, setprimary1] = useState("on");
    const [warning1, setwarning1] = useState("on");
    const [info1, setinfo1] = useState("on");
    const [danger1, setdanger1] = useState("on");
    const [light1, setlight1] = useState("on");

    //sizes 
    const [primary2, setprimary2] = useState("on");
    const [secondary2, setsecondary2] = useState("on");
    const [success2, setsuccess2] = useState("on");

    return (
        <Fragment>
            <Seo title={"Checks & Radios"} />
            <Pageheader currentpage="Checks & Radios" activepage="Form Elements" mainpage="Checks & Radios" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <Showcode title="Checks" code={radio1}>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                Default checkbox
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckChecked"
                                defaultChecked />
                            <label className="form-check-label" htmlFor="flexCheckChecked">
                                Checked checkbox
                            </label>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <Showcode title="Disabled" code={radio2}>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDisabled"
                                disabled />
                            <label className="form-check-label" htmlFor="flexCheckDisabled">
                                Disabled checkbox
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input opacity-[0.6]" type="checkbox" defaultValue=""
                                id="flexCheckCheckedDisabled" checked disabled />
                            <label className="form-check-label" htmlFor="flexCheckCheckedDisabled">
                                Disabled checked checkbox
                            </label>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <Showcode title="Radios" code={radio3}>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Default radio
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault"
                                id="flexRadioDefault2" defaultChecked />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                Default checked radio
                            </label>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-3 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <Showcode title="Disabled" code={radio4}>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDisabled"
                                id="flexRadioDisabled" disabled />
                            <label className="form-check-label" htmlFor="flexRadioDisabled">
                                Disabled radio
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input opacity-[0.6]" type="radio" name="flexRadioDisabled"
                                id="flexRadioCheckedDisabled" checked disabled />
                            <label className="form-check-label" htmlFor="flexRadioCheckedDisabled">
                                Disabled checked radio
                            </label>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
                    <Showcode title="Disable (stacked)" code={radio5}>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="defaultCheck1" />
                            <label className="form-check-label" htmlFor="defaultCheck1">
                                Default checkbox
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="defaultCheck2"
                                disabled />
                            <label className="form-check-label" htmlFor="defaultCheck2">
                                Disabled checkbox
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="exampleRadios"
                                id="exampleRadios1" defaultValue="option1" defaultChecked />
                            <label className="form-check-label" htmlFor="exampleRadios1">
                                Default radio
                            </label>
                        </div>
                        <div className="form-check mb-0">
                            <input className="form-check-input" type="radio" name="exampleRadios"
                                id="exampleRadios3" defaultValue="option3" disabled />
                            <label className="form-check-label" htmlFor="exampleRadios3">
                                Disabled radio
                            </label>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12">
                    <Showcode title="Switches" code={radio11} customCardBodyClass="flex flex-col gap-y-4">
                        <div className="flex items-center">
                            <input type="checkbox" id="hs-basic-with-description-checked" className="ti-switch mb-4" defaultChecked />
                            <label htmlFor="hs-basic-with-description-checked" className="text-sm text-gray-500 ms-3 dark:text-[#8c9097] dark:text-white/50">Checked</label>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="hs-basic-with-description-unchecked" className="ti-switch mb-4" />
                            <label htmlFor="hs-basic-with-description-unchecked" className="text-sm text-gray-500 ms-3 dark:text-[#8c9097] dark:text-white/50">Unchecked</label>
                        </div>
                        <div className="flex items-center">
                            <label className="text-sm text-gray-500 me-3 dark:text-[#8c9097] dark:text-white/50">On</label>
                            <input type="checkbox" id="hs-basic-with-description" className="ti-switch" />
                            <label className="text-sm text-gray-500 ms-3 dark:text-[#8c9097] dark:text-white/50">Off</label>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xxl:col-span-6 xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                    <Showcode title="Checkbox Sizes" code={radio12} customCardBodyClass="sm:flex items-center justify-between">
                        <div className='flex'>
                            <div className="form-check me-5">
                                <input className="form-check-input" type="checkbox" defaultValue="" id="checkebox-sm" defaultChecked />
                                <label className="form-check-label" htmlFor="checkebox-sm">
                                    Default
                                </label>
                            </div>
                            <div className="form-check form-check-md flex items-center me-5">
                                <input className="form-check-input" type="checkbox" defaultValue="" id="checkebox-md" defaultChecked />
                                <label className="form-check-label" htmlFor="checkebox-md">
                                    Medium
                                </label>
                            </div>
                            <div className="form-check form-check-lg flex items-center ">
                                <input className="form-check-input" type="checkbox" defaultValue="" id="checkebox-lg" defaultChecked />
                                <label className="form-check-label" htmlFor="checkebox-lg">
                                    Large
                                </label>
                            </div>
                        </div>
                    </Showcode>
                </div>
                <div className="xxl:col-span-6 xl:col-span-12 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                    <Showcode title="Radio Sizes" code={radio13} customCardBodyClass="sm:flex items-center justify-between">
                        <div className='flex'>
                            <div className="form-check me-5">
                                <input className="form-check-input" type="radio" name="Radio" id="Radio-sm" />
                                <label className="form-check-label" htmlFor="Radio-sm">
                                    default
                                </label>
                            </div>
                            <div className="form-check form-check-md me-5">
                                <input className="form-check-input" type="radio" name="Radio" id="Radio-md" />
                                <label className="form-check-label" htmlFor="Radio-md">
                                    Medium
                                </label>
                            </div>
                            <div className="form-check form-check-lg">
                                <input className="form-check-input" type="radio" name="Radio" id="Radio-lg" defaultChecked />
                                <label className="form-check-label" htmlFor="Radio-lg">
                                    Large
                                </label>
                            </div>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                    <Showcode title="Inline" code={radio14} customCardBodyClass="sm:flex gap-2">
                        <div className='flex gap-2'>
                            <div className="flex gap-2">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1"
                                        defaultValue="option1" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox2"
                                        defaultValue="option2" />
                                    <label className="form-check-label" htmlFor="inlineCheckbox2">2</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox3"
                                        defaultValue="option3" disabled />
                                    <label className="form-check-label" htmlFor="inlineCheckbox3">3 (disabled)</label>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="form-check form-check-inline gap-2">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                        id="inlineRadio1" defaultValue="option1" />
                                    <label className="form-check-label" htmlFor="inlineRadio1">1</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                        id="inlineRadio2" defaultValue="option2" />
                                    <label className="form-check-label" htmlFor="inlineRadio2">2</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions"
                                        id="inlineRadio3" defaultValue="option3" disabled />
                                    <label className="form-check-label" htmlFor="inlineRadio3">3 (disabled)</label>
                                </div>
                            </div>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6  lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                    <Showcode title="Reverse" code={radio6}>
                        <div className="form-check rtl:pe-4 form-check-reverse mb-4">
                            <input className="form-check-input" type="checkbox" defaultValue=""
                                id="reverseCheck1" />
                            <label className="form-check-label" htmlFor="reverseCheck1">
                                Reverse checkbox
                            </label>
                        </div>
                        <div className="form-check rtl:pe-4 form-check-reverse mb-4">
                            <input className="form-check-input" type="checkbox" defaultValue=""
                                id="reverseCheck2" disabled />
                            <label className="form-check-label" htmlFor="reverseCheck2">
                                Disabled reverse checkbox
                            </label>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6  lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <Showcode title="Toggle Switches Style-1" code={radio7}>
                    <div className="grid grid-cols-12 gap-y-1">
                                <div className="xl:col-span-4 col-span-12">
                                    <div className={`toggle  mb-4 ${primary1}`} onClick={() => { primary1 == "on" ? setprimary1("off") : setprimary1("on"); }}>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="xl:col-span-4 col-span-12">
                                    <div className={`toggle toggle-secondary  mb-4 ${secondary1}`} onClick={() => { secondary1 == "on" ? setsecondary1("off") : setsecondary1("on"); }}>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="xl:col-span-4 col-span-12">
                                    <div className={`toggle toggle-warning mb-4 ${warning1}`}  onClick={() => { warning1 == "on" ? setwarning1("off") : setwarning1("on"); }}>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="xl:col-span-4 col-span-12">
                                    <div className={`toggle toggle-info mb-4 ${info1}`} onClick={() => { info1 == "on" ? setinfo1("off") : setinfo1("on"); }}>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="xl:col-span-4 col-span-12">
                                    <div className={`toggle toggle-success mb-4 ${success1}`} onClick={() => { success1 == "on" ? setsuccess1("off") : setsuccess1("on"); }}>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="xl:col-span-4 col-span-12">
                                    <div className={`toggle toggle-danger mb-4 ${danger1}`} onClick={() => { danger1 == "on" ? setdanger1("off") : setdanger1("on"); }} >
                                        <span></span>
                                    </div>
                                </div>
                                <div className="xl:col-span-4 col-span-12">
                                    <div className={`toggle toggle-light mb-4 ${light1}`} onClick={() => { light1 == "on" ? setlight1("off") : setlight1("on"); }}>
                                        <span></span>
                                    </div>
                                </div>
                                <div className="xl:col-span-4 col-span-12">
                                    <div className={`toggle toggle-dark mb-4 ${dark1}`} onClick={() => { dark1 == "on" ? setdark1("off") : setdark1("on"); }}>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6  lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <Showcode title="Toggle Switches Style-2" code={radio8}>
                        <div className="grid grid-cols-12 gap-y-1">
                            <div className="xl:col-span-4 col-span-12">
                                <div className="custom-toggle-switch flex items-center mb-4">
                                    <input id="toggleswitchPrimary" name="toggleswitch001" type="checkbox" defaultChecked />
                                    <label htmlFor="toggleswitchPrimary" className="label-primary"></label><span className="ms-3">Primary</span>
                                </div>
                            </div>
                            <div className="xl:col-span-4 col-span-12">
                                <div className="custom-toggle-switch flex items-center mb-4">
                                    <input id="toggleswitchSecondary" name="toggleswitch002" type="checkbox" defaultChecked />
                                    <label htmlFor="toggleswitchSecondary" className="label-secondary"></label><span className="ms-3">Secondary</span>
                                </div>
                            </div>
                            <div className="xl:col-span-4 col-span-12">
                                <div className="custom-toggle-switch flex items-center mb-4">
                                    <input id="toggleswitchWarning" name="toggleswitch003" type="checkbox" defaultChecked />
                                    <label htmlFor="toggleswitchWarning" className="label-warning"></label><span className="ms-3">Warning</span>
                                </div>
                            </div>
                            <div className="xl:col-span-4 col-span-12">
                                <div className="custom-toggle-switch flex items-center mb-4">
                                    <input id="toggleswitchInfo" name="toggleswitch004" type="checkbox" defaultChecked />
                                    <label htmlFor="toggleswitchInfo" className="label-info"></label><span className="ms-3">Info</span>
                                </div>
                            </div>
                            <div className="xl:col-span-4 col-span-12">
                                <div className="custom-toggle-switch flex items-center mb-4">
                                    <input id="toggleswitchSuccess" name="toggleswitch005" type="checkbox" defaultChecked />
                                    <label htmlFor="toggleswitchSuccess" className="label-success"></label><span className="ms-3">Success</span>
                                </div>
                            </div>
                            <div className="xl:col-span-4 col-span-12">
                                <div className="custom-toggle-switch flex items-center mb-4">
                                    <input id="toggleswitchDanger" name="toggleswitch006" type="checkbox" defaultChecked />
                                    <label htmlFor="toggleswitchDanger" className="label-danger"></label><span className="ms-3">Danger</span>
                                </div>
                            </div>
                            <div className="xl:col-span-4 col-span-12">
                                <div className="custom-toggle-switch flex items-center mb-4">
                                    <input id="toggleswitchLight" name="toggleswitch007" type="checkbox" defaultChecked />
                                    <label htmlFor="toggleswitchLight" className="label-light"></label><span className="ms-3">Light</span>
                                </div>
                            </div>
                            <div className="xl:col-span-4 col-span-12">
                                <div className="custom-toggle-switch flex items-center mb-4">
                                    <input id="toggleswitchDark" name="toggleswitch008" type="checkbox" defaultChecked />
                                    <label htmlFor="toggleswitchDark" className="label-dark"></label><span className="ms-3">Dark</span>
                                </div>
                            </div>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6  lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12">
                    <Showcode title="Toggle Switch-1 Sizes" code={radio10} customCardBodyClass="flex flex-col">
                    <div className="flex items-center flex-wrap mb-4">
                                <div className=""> <p className="text-muted m-0">Small size toggle switch <code>toggle-sm</code></p></div>
                                <div className={`toggle toggle-sm  mb-0 ${primary2}`} onClick={() => { primary2 == "on" ? setprimary2("off") : setprimary2("on"); }}>
                                    <span></span>
                                </div>
                            </div>
                            <div className="flex items-center flex-wrap mb-4">
                                <div className=""> <p className="text-muted m-0">Default toggle switch <code></code></p></div>
                                <div className={`toggle toggle-secondary mb-0 ${secondary2}`} onClick={() => { secondary2 == "on" ? setsecondary2("off") : setsecondary2("on"); }}>
                                    <span></span>
                                </div>
                            </div>
                            <div className="flex items-center flex-wrap">
                                <div className=""> <p className="text-muted m-0">Large size toggle switch <code>toggle-lg</code></p></div>
                                <div className={`toggle toggle-lg toggle-success  mb-0 ${success2}`} onClick={() => { success2 == "on" ? setsuccess2("off") : setsuccess2("on"); }}>
                                    <span></span>
                                </div>
                            </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6  lg:col-span-12 md:col-span-12 sm:col-span-12 col-span-12 ">
                    <Showcode title="Toggle Switch-2 Sizes" code={radio9}>
                        <div className="flex items-center flex-wrap mb-4">
                            <div className=""><p className="text-muted m-0">Small size toggle switch <code>toggle-sm</code></p></div>
                            <div className="custom-toggle-switch toggle-sm ms-2">
                                <input id="size-sm" name="toggleswitchsize" type="checkbox" defaultChecked />
                                <label htmlFor="size-sm" className="label-primary"></label>
                            </div>
                        </div>
                        <div className="flex items-center flex-wrap mb-4">
                            <div className=""><p className="text-muted m-0">Default toggle switch</p></div>
                            <div className="custom-toggle-switch ms-2">
                                <input id="size-default" name="toggleswitchsize1" type="checkbox" defaultChecked />
                                <label htmlFor="size-default" className="label-secondary mb-1"></label>
                            </div>
                        </div>
                        <div className="sm:flex items-center flex-wrap gap-1">
                                <div className=""><p className="text-muted m-0">Large size toggle switch <code>toggle-lg</code></p></div>
                                <div className="custom-toggle-switch toggle-lg sm:ms-2 ms-0">
                                    <input id="size-lg" name="toggleswitchsize2" type="checkbox" defaultChecked />
                                    <label htmlFor="size-lg" className="label-success mb-1"></label>
                                </div>
                            </div>
                    </Showcode>
                </div>
            </div>
        </Fragment>
    )
}
Checksradios.layout = "Contentlayout"

export default Checksradios