import { Data, Data1, Data2, Laedsdata } from '@/shared/data/apps/crm/leadsdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React, { Fragment, useState } from 'react';
const Select = dynamic(() => import("react-select"), { ssr: false });

const Leads = () => {

    const [images, setImages] = useState([]);
    const [selectedImage, setSelectedImage] = useState(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleUpload = () => {
        // Implement your logic to upload and compare images here
        console.log('Uploading and comparing images:', selectedImage);
    };
    //Delete function
    const [manageCompanydata, setManageCompanydata] = useState([...Laedsdata]);
    const handleDelete = (idToRemove) => {
        const updatedInvoiceData = manageCompanydata.filter((item) => item.id !== idToRemove);
        setManageCompanydata(updatedInvoiceData);
    };

    return (
        <Fragment>
            <Seo title={"Leads"} />
            <Pageheader currentpage="Leads" activepage="CRM" mainpage="Leads" />

            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header flex items-center justify-between flex-wrap gap-4">
                            <div className="box-title">
                                Leads<span className="badge bg-light text-default rounded-full ms-1 text-[0.75rem] align-middle">30</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                <Link href="#" className="hs-dropdown-toggle ti-btn ti-btn-primary-full !py-1 !px-2 !text-[0.75rem]" data-hs-overlay="#todo-compose"><i className="ri-add-line font-semibold align-middle"></i>Create Lead
                                </Link>
                                <button type="button" className="ti-btn ti-btn-success !py-1 !px-2 !text-[0.75rem] !m-0">Export As CSV</button>
                                <div className="hs-dropdown ti-dropdown">
                                    <Link href="#!" className="ti-btn ti-btn-light !py-1 !px-2 !text-[0.75rem] !m-0 btn-wave waves-effect waves-light" aria-expanded="false">
                                        Sort By<i className="ri-arrow-down-s-line align-middle ms-1 inline-block"></i>
                                    </Link>
                                    <ul className="hs-dropdown-menu ti-dropdown-menu hidden" role="menu">
                                        <li><Link className="ti-dropdown-item" href="#!">Newest</Link></li>
                                        <li><Link className="ti-dropdown-item" href="#!">Date Added</Link></li>
                                        <li><Link className="ti-dropdown-item" href="#!">A - Z</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="box-body !p-0">
                            <div className="table-responsive xxl:overflow-auto">
                                <table className="table whitespace-nowrap min-w-full">
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                                            </th>
                                            <th scope="col" className="text-start">Contact Name</th>
                                            <th scope="col" className="text-start">Email</th>
                                            <th scope="col" className="text-start">Phone</th>
                                            <th scope="col" className="text-start">Lead Status</th>
                                            <th scope="col" className="text-start">Company</th>
                                            <th scope="col" className="text-start">Lead Source</th>
                                            <th scope="col" className="text-start">Tags</th>
                                            <th scope="col" className="text-start">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {manageCompanydata.map((idx) => (
                                            <tr className="border border-defaultborder crm-contact min-w-full" key={Math.random()}>
                                                <td>
                                                    <input className="form-check-input" type="checkbox" id="checkboxNoLabel1" value="" aria-label="..." />
                                                </td>
                                                <td>
                                                    <div className="flex items-center gap-2">
                                                        <div className="leading-none">
                                                            <span className="avatar avatar-rounded avatar-sm">
                                                                <img src={idx.src1} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="block font-semibold">{idx.name}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <span className="block mb-1"><i className="ri-mail-line me-2 align-middle text-[.875rem] text-[#8c9097] dark:text-white/50 inline-flex"></i>{idx.mail}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div>
                                                        <span className="block"><i className="ri-phone-line me-2 align-middle text-[.875rem] text-[#8c9097] dark:text-white/50 inline-flex"></i>{idx.cell}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <span className="badge bg-light text-default">{idx.badge}</span>
                                                </td>
                                                <td>
                                                    <div className="flex items-center gap-2">
                                                        <div className="leading-none">
                                                            <span className="avatar avatar-sm p-1 bg-light avatar-rounded">
                                                                <img src={idx.src2} alt="" />
                                                            </span>
                                                        </div>
                                                        <div>{idx.text1}</div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {idx.text2}
                                                </td>
                                                <td>
                                                    <div className="flex items-center flex-wrap gap-1">
                                                        <span className={`badge bg-${idx.color1}`}>{idx.text3}</span>
                                                        <span className={`badge bg-${idx.color2}`}>{idx.text4}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <Link aria-label="anchor" href="#!" className="ti-btn ti-btn-sm ti-btn-warning me-2"><i className="ri-eye-line"></i></Link>
                                                        <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-info  me-2"><i className="ri-pencil-line"></i></button>
                                                        <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-danger contact-delete" onClick={() => handleDelete(idx.id)}><i className="ri-delete-bin-line"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="box-footer border-topacity-0">
                            <div className="flex items-center">
                                <div>
                                    Showing 10 Entries <i className="bi bi-arrow-right ms-2 font-semibold"></i>
                                </div>
                                <div className="ms-auto">
                                    <nav aria-label="Page navigation" className="pagination-style-4">
                                        <ul className="ti-pagination mb-0">
                                            <li className="page-item disabled">
                                                <Link className="page-link" href="#!">
                                                    Prev
                                                </Link>
                                            </li>
                                            <li className="page-item"><Link className="page-link active" href="#!">1</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#!">2</Link></li>
                                            <li className="page-item">
                                                <Link className="page-link text-primary" href="#!">
                                                    next
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="todo-compose" className="hs-overlay hidden ti-modal">
                <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
                    <div className="ti-modal-content">
                        <div className="ti-modal-header">
                            <h6 className="modal-title text-[1rem] font-semibold text-defaulttextcolor" id="mail-ComposeLabel">Create Lead</h6>
                            <button type="button" className="hs-dropdown-toggle !text-[1rem] !font-semibold !text-defaulttextcolor" data-hs-overlay="#todo-compose">
                                <span className="sr-only">Close</span>
                                <i className="ri-close-line"></i>
                            </button>
                        </div>
                        <div className="ti-modal-body px-4">
                            <div className="modal-body px-4">
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="xl:col-span-12 col-span-12">
                                        <div className="mb-0 text-center">
                                            <span className="avatar avatar-xxl avatar-rounded">
                                                <img
                                                    src={selectedImage || '../../../../assets/images/faces/9.jpg'}
                                                    alt=""
                                                    id="profile-img"
                                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                                />
                                                <span className="badge rounded-pill bg-primary avatar-badge">
                                                    <label htmlFor="profile-change" className="cursor-pointer">
                                                        <input
                                                            type="file"
                                                            name="photo"
                                                            className="absolute w-full h-full opacity-0"
                                                            id="profile-change"
                                                            onChange={(e) => {
                                                                handleFileChange(e);
                                                                setImages([...images, e.target.files[0]]);
                                                            }}
                                                        />
                                                        <i className="fe fe-camera text-[.625rem]"></i>
                                                    </label>
                                                </span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label htmlFor="contact-name" className="form-label">Contact Name</label>
                                        <input type="text" className="form-control" id="contact-name" placeholder="Contact Name" />
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label htmlFor="contact-mail" className="form-label">Email</label>
                                        <input type="email" className="form-control" id="contact-mail" placeholder="Enter Email" />
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label htmlFor="contact-phone" className="form-label">Phone No</label>
                                        <input type="tel" className="form-control" id="contact-phone" placeholder="Enter Phone Number" />
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label htmlFor="company-name" className="form-label">Company Name</label>
                                        <input type="text" className="form-control" id="company-name" placeholder="Company Name" />
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label className="form-label">Lead Status</label>
                                        <Select name="colors" options={Data2} className="" placeholder="Select Status"
                                            menuPlacement='auto' classNamePrefix="Select2"
                                        />
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label className="form-label">Lead Source</label>
                                        <Select name="colors" options={Data1} className=""
                                            menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Data1[0]]}
                                        />
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label className="form-label">Tags</label>
                                        <Select isMulti name="colors" options={Data} className=""
                                            menuPlacement='auto' classNamePrefix="Select2" placeholder="Select Tag"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ti-modal-footer">
                            <button type="button"
                                className="hs-dropdown-toggle ti-btn  ti-btn-light align-middle"
                                data-hs-overlay="#todo-compose">
                                Cancel
                            </button>
                            <button type="button" className="ti-btn bg-primary text-white !font-medium">Create Contact</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Leads.layout = "Contentlayout"
export default Leads