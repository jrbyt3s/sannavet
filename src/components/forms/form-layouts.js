import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'
import { layout1, layout10, layout11, layout2, layout3, layout4, layout5, layout6, layout7, layout8, layout9 } from '../../../shared/data/prism/forms-prism';
import dynamic from 'next/dynamic';
const Showcode = dynamic(() => import("@/shared/layout-components/showcode/showcode"), { ssr: false });

const Formlayouts = () => {
    return (
        <Fragment>
            <Seo title={"Form Layouts"} />
            <Pageheader currentpage="Form Layouts" activepage="Forms" mainpage="Form Layouts" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Vertical Forms" code={layout1}>
                        <div className="mb-4">
                            <label htmlFor="form-text" className="form-label !text-[.875rem] text-black">Enter name</label>
                            <input type="text" className="form-control" id="form-text" placeholder="" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="form-password" className="form-label text-[.875rem] text-black">Enter
                                Password</label>
                            <input type="password" className="form-control" id="form-password" placeholder="" />
                        </div>
                        <div className="form-check mb-4">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="invalidCheck"
                                required />
                            <label className="form-check-label" htmlFor="invalidCheck">
                                Accept Policy
                            </label>
                        </div>
                        <button className="ti-btn ti-btn-primary-full" type="submit">Submit</button>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Horizontal Form" code={layout2}>
                        <form>
                            <div className="grid grid-cols-12 mb-4">
                                <label htmlFor="inputEmail3"
                                    className="sm:col-span-2 col-span-12 col-form-label">Email</label>
                                <div className="sm:col-span-10 col-span-12">
                                    <input type="email" className="form-control" id="inputEmail3" />
                                </div>
                            </div>
                            <div className="grid grid-cols-12 mb-4">
                                <label htmlFor="inputPassword3"
                                    className="sm:col-span-2 col-span-12 col-form-label">Password</label>
                                <div className="sm:col-span-10 col-span-12">
                                    <input type="password" className="form-control" id="inputPassword3" />
                                </div>
                            </div>
                            <div className="grid grid-cols-12 mb-4">
                                <div className=" sm:col-span-2 col-span-12 col-form-label pt-0">Qualified</div>
                                <div className="sm:col-span-10 col-span-12 ">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio"
                                            name="gridRadios" id="gridRadios1" defaultValue="option1"
                                            defaultChecked />
                                        <label className="form-check-label" htmlFor="gridRadios1">
                                            Prelims
                                        </label>
                                    </div>
                                    <div className="form-check disabled">
                                        <input className="form-check-input" type="radio"
                                            name="gridRadios" id="gridRadios2" defaultValue="option3"
                                            disabled />
                                        <label className="form-check-label" htmlFor="gridRadios2">
                                            Mains
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox"
                                            id="gridCheck1" />
                                        <label className="form-check-label" htmlFor="gridCheck1">
                                            Certified
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="ti-btn ti-btn-primary-full">Sign in</button>
                        </form>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Vertical Form with Icon" code={layout3}>
                        <div className="mb-4">
                            <label htmlFor="form-text1" className="form-label text-[.875rem] text-black">Enter name</label>
                            <div className="input-group">
                                <div className="input-group-text"><i className="ri-user-line"></i></div>
                                <input type="text" className="form-control" id="form-text1" placeholder="" />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="form-password1" className="form-label text-[.875rem] text-black">Enter
                                Password</label>
                            <div className="input-group">
                                <div className="input-group-text"><i className="ri-lock-line"></i></div>
                                <input type="password" className="form-control" id="form-password1" placeholder="" />
                            </div>
                        </div>
                        <div className="form-check mb-4">
                            <input className="form-check-input" type="checkbox" defaultValue="" id="invalidCheck1"
                                required />
                            <label className="form-check-label" htmlFor="invalidCheck1">
                                Accept Policy
                            </label>
                        </div>
                        <button className="ti-btn ti-btn-primary-full !mb-0 mt-4" type="submit">Submit</button>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Horizontal Form with Icons" code={layout4}>
                        <form>
                            <div className="grid grid-cols-12 mb-4">
                                <label htmlFor="inputEmail1"
                                    className="sm:col-span-2 col-span-12 col-form-label">Email</label>
                                <div className="sm:col-span-10 col-span-12">
                                    <div className="input-group">
                                        <input type="email" className="form-control" id="inputEmail1" />
                                        <div className="input-group-text">
                                            <i className="ri-mail-line"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 mb-4">
                                <label htmlFor="inputPassword1"
                                    className="sm:col-span-2 col-span-12 col-form-label">Password</label>
                                <div className="sm:col-span-10 col-span-12">
                                    <div className="input-group">
                                        <input type="password" className="form-control" id="inputPassword1" />
                                        <div className="input-group-text">
                                            <i className="ri-lock-line"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-12 mb-4">
                                <div className="col-form-label sm:col-span-2 col-span-12 pt-0">Qualified</div>
                                <div className="sm:col-span-10 col-span-12">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio"
                                            name="gridRadios" id="gridRadios4" defaultValue="option1"
                                            defaultChecked />
                                        <label className="form-check-label" htmlFor="gridRadios4">
                                            Prelims
                                        </label>
                                    </div>
                                    <div className="form-check disabled">
                                        <input className="form-check-input" type="radio"
                                            name="gridRadios" id="gridRadios3" defaultValue="option3"
                                            disabled />
                                        <label className="form-check-label" htmlFor="gridRadios3">
                                            Mains
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox"
                                            id="gridCheck2" />
                                        <label className="form-check-label" htmlFor="gridCheck2">
                                            Certified
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" className="ti-btn ti-btn-primary-full">Sign in</button>
                        </form>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Inline Forms" code={layout5}>
                        <form className="sm:grid grid-cols-4 gap-4 items-center">
                            <div className="mb-4 sm:mb-0 input-group">
                                <div className="input-group-text">@</div>
                                <input type="text" className="form-control"
                                    id="inlineFormInputGroupUsername" placeholder="Username" />
                            </div>
                            <select className="mb-4 sm:mb-0 form-select !py-3" id="inlineFormSelectPref">
                                <option defaultValue="choose">Choose...</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                            </select>
                            <div className=" form-check !my-auto">
                                <input className="form-check-input" type="checkbox"
                                    id="inlineFormCheck" />
                                <label className="form-check-label" htmlFor="inlineFormCheck">
                                    Remember me
                                </label>
                            </div>
                            <button type="submit" className="ti-btn ti-btn-primary-full !mb-0 mt-4">Submit</button>
                        </form>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Column Sizing" code={layout6}>
                        <div className="grid grid-cols-12 gap-4">
                            <div className="sm:col-span-7 col-span-12">
                                <input type="text" className="form-control" placeholder="City"
                                    aria-label="City" />
                            </div>
                            <div className="sm:col-span-3 col-span-12">
                                <input type="text" className="form-control" placeholder="State"
                                    aria-label="State" />
                            </div>
                            <div className="sm:col-span-2 col-span-12">
                                <input type="text" className="form-control" placeholder="Zip"
                                    aria-label="Zip" />
                            </div>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Utilities" code={layout11}>
                        <div className="mb-4">
                            <label htmlFor="formGroupExampleInput" className="form-label">Example label</label>
                            <input type="text" className="form-control" id="formGroupExampleInput"
                                placeholder="Example input placeholder" />
                        </div>
                        <div className="mb-1">
                            <label htmlFor="formGroupExampleInput2" className="form-label">Another label</label>
                            <input type="text" className="form-control" id="formGroupExampleInput2"
                                placeholder="Another input placeholder" />
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Horizontal Form Label sizing" code={layout7}>
                        <div className="grid grid-cols-12 mb-4">
                            <label htmlFor="colFormLabelSm"
                                className="sm:col-span-2 col-span-12 col-form-label col-form-label-sm">Email</label>
                            <div className="sm:col-span-10 col-span-12">
                                <input type="email" className="form-control form-control-sm"
                                    id="colFormLabelSm" placeholder="col-form-label-sm" />
                            </div>
                        </div>
                        <div className="grid grid-cols-12 mb-4">
                            <label htmlFor="colFormLabel" className="sm:col-span-2 col-span-12 col-form-label">Email</label>
                            <div className="sm:col-span-10 col-span-12">
                                <input type="email" className="form-control" id="colFormLabel"
                                    placeholder="col-form-label" />
                            </div>
                        </div>
                        <div className="grid grid-cols-12">
                            <label htmlFor="colFormLabelLg"
                                className="sm:col-span-2 col-span-12 col-form-label col-form-label-lg text-[1.25rem]">Email</label>
                            <div className="sm:col-span-10 col-span-12">
                                <input type="email" className="form-control form-control-lg"
                                    id="colFormLabelLg" placeholder="col-form-label-lg" />
                            </div>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <Showcode title="Auto Sizing" code={layout8}>
                        <form className="sm:grid grid-cols-12 block gap-y-2 gap-x-4 items-center mb-4">
                            <div className="col-span-12 mb-4 sm:mb-0">
                                <label className="hidden" htmlFor="autoSizingInput">Name</label>
                                <input type="text" className="form-control" id="autoSizingInput"
                                    placeholder="Jane Doe" />
                            </div>
                            <div className="col-span-12 mb-4 sm:mb-0">
                                <label className="hidden"
                                    htmlFor="autoSizingInputGroup">Username</label>
                                <div className="input-group">
                                    <div className="input-group-text">@</div>
                                    <input type="text" className="form-control"
                                        id="autoSizingInputGroup" placeholder="Username" />
                                </div>
                            </div>
                            <div className="col-span-12 mb-4 sm:mb-0">
                                <label className="hidden"
                                    htmlFor="autoSizingSelect">Preference</label>
                                <select className="form-select" id="autoSizingSelect" defaultValue="Choose..">
                                    <option defaultValue="choose">Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="col-span-12">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox"
                                        id="autoSizingCheck" />
                                    <label className="form-check-label" htmlFor="autoSizingCheck">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <div className="col-span-12">
                                <button type="submit" className="ti-btn ti-btn-primary-full !mb-0 mt-4">Submit</button>
                            </div>
                        </form>
                        <span className="font-semibold text-[#8c9097] dark:text-white/50">You can then remix that once again with size-specific column
                            classes.</span>
                        <form className="grid grid-cols-12  gap-x-4 gap-y-2 items-center mt-2">
                            <div className="sm:col-span-3 col-span-12">
                                <label className="hidden"
                                    htmlFor="specificSizeInputName">Name</label>
                                <input type="text" className="form-control" id="specificSizeInputName"
                                    placeholder="Jane Doe" />
                            </div>
                            <div className="sm:col-span-3 col-span-12">
                                <label className="hidden"
                                    htmlFor="specificSizeInputGroupUsername">Username</label>
                                <div className="input-group">
                                    <div className="input-group-text">@</div>
                                    <input type="text" className="form-control"
                                        id="specificSizeInputGroupUsername" placeholder="Username" />
                                </div>
                            </div>
                            <div className="sm:col-span-3 col-span-12">
                                <label className="hidden"
                                    htmlFor="specificSizeSelect">Preference</label>
                                <select defaultValue="" className="form-select !py-[0.59rem]" id="specificSizeSelect">
                                    <option defaultValue="choose">Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="sm:col-span-3 col-span-12">
                                <div className="form-check !my-auto">
                                    <input className="form-check-input" type="checkbox"
                                        id="autoSizingCheck2" />
                                    <label className="form-check-label" htmlFor="autoSizingCheck2">
                                        Remember me
                                    </label>
                                </div>
                            </div>
                            <div className="sm:col-span-3 col-span-12">
                                <button type="submit" className="ti-btn ti-btn-primary-full">Submit</button>
                            </div>
                        </form>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Form Grid" code={layout9}>
                        <div className="grid grid-cols-12 sm:gap-x-6 sm:gap-y-4">
                            <div className="md:col-span-6 col-span-12 mb-4">
                                <label className="form-label">First Name</label>
                                <input type="text" className="form-control" placeholder="First name"
                                    aria-label="First name" />
                            </div>
                            <div className="md:col-span-6 col-span-12 mb-4">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-control" placeholder="Last name"
                                    aria-label="Last name" />
                            </div>
                            <div className="md:col-span-6 col-span-12 mb-4 sm:mb-0">
                                <label className="form-label">Address</label>
                                <div className="grid grid-cols-12 sm:gap-x-4">
                                    <div className="xl:col-span-12 col-span-12 mb-4">
                                        <input type="text" className="form-control" placeholder="Street"
                                            aria-label="Street" />
                                    </div>
                                    <div className="xl:col-span-12 col-span-12 mb-4">
                                        <input type="text" className="form-control" placeholder="Landmark"
                                            aria-label="Landmark" />
                                    </div>
                                    <div className="xxl:col-span-6 xl:col-span-12 col-span-12 mb-4">
                                        <input type="text" className="form-control" placeholder="City"
                                            aria-label="City" />
                                    </div>
                                    <div className="xxl:col-span-6 xl:col-span-12 col-span-12 mb-4">
                                        <select  defaultValue="" id="inputState1" className="form-select !py-[0.59rem]">
                                            <option defaultValue="State">State</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                    <div className="xxl:col-span-6 xl:col-span-12 col-span-12 xxl:mb-0 mb-4">
                                        <input type="text" className="form-control" placeholder="Postal/Zip code"
                                            aria-label="Postal/Zip code" />
                                    </div>
                                    <div className="xxl:col-span-6 xl:col-span-12 col-span-12">
                                        <select defaultValue="" id="inputCountry" className="form-select !py-[0.59rem]">
                                            <option defaultValue="Country">Country</option>
                                            <option>...</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-6  col-span-12">
                                <div className="grid grid-cols-12">
                                    <div className="xl:col-span-12 col-span-12 mb-4">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" placeholder="Email"
                                            aria-label="email" />
                                    </div>
                                    <div className="xl:col-span-12 col-span-12 mb-4">
                                        <label className="form-label">D.O.B</label>
                                        <input type="date" className="form-control"
                                            aria-label="dateofbirth" />
                                    </div>
                                    <div className="xl:col-span-12 col-span-12 mb-4">
                                        <div className="grid grid-cols-12 gap-3">
                                            <label className="form-label mb-1 xl:col-span-12 col-span-12">Maritial Status</label>
                                            <div className="xl:col-span-6 col-span-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" defaultValue="" id="status-married" name="status-married" />
                                                    <label className="form-check-label" htmlFor="status-married">
                                                        Married
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="xl:col-span-6 col-span-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" defaultValue="" id="status-unmarried" name="status-married" defaultChecked />
                                                    <label className="form-check-label" htmlFor="status-unmarried">
                                                        Single
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">

                                    </div>
                                </div>
                            </div>
                            <div className="md:col-span-6 col-span-12 mb-4 sm:mb-0">
                                <label className="form-label">Contact Number</label>
                                <input type="number" className="form-control" placeholder="Phone number"
                                    aria-label="Phone number" />
                            </div>
                            <div className="md:col-span-6 col-span-12 mb-4 sm:mb-0">
                                <label className="form-label">Alternative Contact</label>
                                <input type="number" className="form-control" placeholder="Phone number"
                                    aria-label="Phone number" />
                            </div>
                            <div className="md:col-span-12 col-span-12 mb-4 sm:mb-0">
                                <div className="form-check mb-4">
                                    <input className="form-check-input" type="checkbox" id="gridCheck" />
                                    <label className="form-check-label" htmlFor="gridCheck">
                                        Check me out
                                    </label>
                                </div>
                            </div>
                            <div className="md:col-span-12 col-span-12">
                                <button type="submit" className="ti-btn ti-btn-primary-full !mb-0">Sign in</button>
                            </div>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Gutters" code={layout10}>
                        <form className="grid grid-cols-12 gap-4 mt-0">
                            <div className="md:col-span-6 col-span-12">
                                <label className="form-label">First Name</label>
                                <input type="text" className="form-control" placeholder="First name"
                                    aria-label="First name" />
                            </div>
                            <div className="md:col-span-6 col-span-12">
                                <label className="form-label">Last Name</label>
                                <input type="text" className="form-control" placeholder="Last name"
                                    aria-label="Last name" />
                            </div>
                            <div className="md:col-span-6 col-span-12">
                                <label htmlFor="inputEmail4" className="form-label">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" />
                            </div>
                            <div className="md:col-span-6 col-span-12">
                                <label htmlFor="inputPassword4" className="form-label">Password</label>
                                <input type="password" className="form-control" id="inputPassword4" />
                            </div>
                            <div className="col-span-12">
                                <label htmlFor="inputAddress" className="form-label">Address</label>
                                <input type="text" className="form-control" id="inputAddress"
                                    placeholder="1234 Main St" />
                            </div>
                            <div className="col-span-12">
                                <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                                <input type="text" className="form-control" id="inputAddress2"
                                    placeholder="Apartment, studio, or floor" />
                            </div>
                            <div className="md:col-span-6 col-span-12">
                                <label htmlFor="inputCity" className="form-label">City</label>
                                <input type="text" className="form-control" id="inputCity" />
                            </div>
                            <div className="md:col-span-4 col-span-12">
                                <label htmlFor="inputState" className="form-label">State</label>
                                <select defaultValue="" id="inputState" className="form-select !py-[0.59rem]">
                                    <option defaultValue="choose">Choose...</option>
                                    <option>...</option>
                                </select>
                            </div>
                            <div className="md:col-span-2 col-span-12">
                                <label htmlFor="inputZip" className="form-label">Zip</label>
                                <input type="text" className="form-control" id="inputZip" />
                            </div>
                            <div className="col-span-12 ">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck3" />
                                    <label className="form-check-label" htmlFor="gridCheck3">
                                        Check me out
                                    </label>
                                </div>
                            </div>
                            <div className="col-span-12">
                                <button type="submit" className="ti-btn ti-btn-primary-full">Sign in</button>
                            </div>
                        </form>
                    </Showcode>
                </div>
            </div>

        </Fragment>
    )
}
Formlayouts.layout = "Contentlayout"

export default Formlayouts