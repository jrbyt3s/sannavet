import { Loopingdata } from '@/shared/data/apps/crm/contactsdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React, { Fragment, useState } from 'react'
import { Data, Data1 } from '../../../../shared/data/apps/crm/contactsdata';
import DatePicker from 'react-datepicker';
import dynamic from 'next/dynamic'
const Select = dynamic(() => import("react-select"), { ssr: false });
import Swal from 'sweetalert2';

const Contacts = () => {
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

    const [startDate, setStartDate] = useState(new Date());


    const [hopingData, sethopingData] = useState(Loopingdata); // Initialize with your data

    const handleClick = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                handleDelete(id);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
                Swal.fire('Cancelled', 'Your file is safe :)', 'error');
            }
        });
    };

    const handleDelete = (id) => {
        const updatedData = hopingData.filter((idx) => idx.id !== id);
        sethopingData(updatedData);

        Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
    };

    //Datepicker function
    const handleDateChange = (date) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };

    return (
        <Fragment>
            <Seo title={"Contacts"} />
            <Pageheader currentpage="Contacts" activepage="CRM" mainpage="Contacts" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header flex items-center justify-between flex-wrap gap-4">
                            <div className="box-title">
                                Contacts<span className="badge bg-light text-default rounded-full ms-1 text-[0.75rem] align-middle">28</span>
                            </div>
                            <div className="flexflex-wrap gap-2">
                                <Link href="#!" className="hs-dropdown-toggle ti-btn ti-btn-primary-full !py-1 !px-2 !text-[0.75rem] me-2" data-hs-overlay="#todo-compose"><i className="ri-add-line font-semibold align-middle"></i>Create Contact
                                </Link>
                                <button type="button" className="ti-btn ti-btn-success !py-1 !px-2 !text-[0.75rem] me-2">Export As CSV</button>
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
                            <div className="table-responsive">
                                <table className="table whitespace-nowrap min-w-full">
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                <input className="form-check-input" type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
                                            </th>
                                            <th scope="col" className="text-start">Contact Name</th>
                                            <th scope="col" className="text-start">Lead Score</th>
                                            <th scope="col" className="text-start">Email</th>
                                            <th scope="col" className="text-start">Phone</th>
                                            <th scope="col" className="text-start">Company</th>
                                            <th scope="col" className="text-start">Lead Source</th>
                                            <th scope="col" className="text-start">Tags</th>
                                            <th scope="col" className="text-start">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {hopingData.map((idx) => (
                                            <tr className="border border-defaultborder crm-contact" key={Math.random()}>
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
                                                            <Link href="#offcanvasExample" aria-controls="offcanvasExample"><span className="block font-semibold">{idx.name}</span></Link>
                                                            <span className="block text-[#8c9097] dark:text-white/50 text-[0.6875rem]" title="Last Contacted"><i className="ri-account-circle-line me-1 text-[0.8125rem] align-middle"></i>{idx.time}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>
                                                    {idx.score}
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
                                                        <span className={`badge bg-${idx.color1}/10 text-${idx.color1}`}>{idx.text3}</span>
                                                        <span className={`badge bg-${idx.color2}/10 text-${idx.color2}`}>{idx.text4}</span>
                                                    </div>
                                                </td>
                                                <td>
                                                    <div className="btn-list">
                                                        <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-warning ti-btn-icon  me-2" data-hs-overlay="#hs-overlay-contacts"><i className="ri-eye-line"></i></button>
                                                        <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-info ti-btn-icon  me-2"><i className="ri-pencil-line"></i></button>
                                                        <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-danger ti-btn-icon contact-delete" onClick={() => handleClick(idx.id)}><i className="ri-delete-bin-line"></i></button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="box-footer border-t-0">
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
                                            <li className="page-item "><Link className="page-link active" href="#!">1</Link></li>
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
            <div className="hs-overlay hidden ti-offcanvas ti-offcanvas-right !max-w-[25rem] !border-0" tabIndex="-1" id="hs-overlay-contacts" aria-labelledby="offcanvasExample">
                <div className="ti-offcanvas-body !p-0">
                    <div className="sm:flex items-start p-6 border-b border-dashed border-defaultborder dark:border-defaultborder/10 main-profile-cover">
                        <div className="avatar avatar-xxl avatar-rounded online me-4 !bottom-0 !mb-0">
                            <img src="../../../../assets/images/faces/4.jpg" alt="" />
                        </div>
                        <div className="flex-grow main-profile-info">
                            <div className="flex items-center justify-between">
                                <h6 className="font-semibold mb-1 text-white">Lisa Convay</h6>
                                <button type="button" className="ti-btn flex-shrink-0 !p-0  transition-none text-white opacity-70 hover:opacity-100 hover:text-white focus:ring-0 focus:ring-offset-0 focus:ring-offset-transparent focus:outline-0 focus-visible:outline-0 !mb-0" data-hs-overlay="#hs-overlay-contacts">
                                    <span className="sr-only">Close modal</span>
                                    <i className="ri-close-line leading-none text-lg"></i>
                                </button>
                            </div>
                            <p className="mb-1 text-white  op-7">Chief Executive Officer (C.E.O)</p>
                            <p className="text-[0.75rem] text-white mb-4 opacity-[0.5]">
                                <span className="me-3"><i className="ri-building-line me-1 align-middle"></i>Georgia</span>
                                <span><i className="ri-map-pin-line me-1 align-middle"></i>Washington D.C</span>
                            </p>
                            <div className="flex mb-0">
                                <div className="me-4">
                                    <p className="font-bold text-xl text-white text-shadow mb-0">113</p>
                                    <p className="mb-0 text-[0.6875rem] opacity-[0.5] text-white">Deals</p>
                                </div>
                                <div className="me-4">
                                    <p className="font-bold text-xl text-white text-shadow mb-0">$12.2k</p>
                                    <p className="mb-0 text-[0.6875rem] opacity-[0.5] text-white">Contributions</p>
                                </div>
                                <div className="me-4">
                                    <p className="font-bold text-xl text-white text-shadow mb-0">$10.67k</p>
                                    <p className="mb-0 text-[0.6875rem] opacity-[0.5] text-white">Comitted</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 border-b border-dashed border-defaultborder dark:border-defaultborder/10">
                        <div className="mb-0">
                            <p className="text-[0.9375rem] mb-2 font-semibold">Professional Bio :</p>
                            <p className="text-[#8c9097] dark:text-white/50 op-8 mb-0">
                                I am <b className="text-default">Lisa Convay,</b> here by conclude that,i am the founder and managing director of the prestigeous company name laugh at all and acts as the cheif executieve officer of the company.
                            </p>
                        </div>
                    </div>
                    <div className="p-6 border-b border-dashed border-defaultborder dark:border-defaultborder/10">
                        <p className="text-[.875rem] mb-2 me-4 font-semibold">Contact Information :</p>
                        <div className="">
                            <div className="flex items-center mb-2">
                                <div className="me-2">
                                    <span className="avatar avatar-sm avatar-rounded bg-light !text-[#8c9097] dark:text-white/50">
                                        <i className="ri-mail-line align-middle text-[.875rem]"></i>
                                    </span>
                                </div>
                                <div>
                                    sonyataylor2531@gmail.com
                                </div>
                            </div>
                            <div className="flex items-center mb-2">
                                <div className="me-2">
                                    <span className="avatar avatar-sm avatar-rounded bg-light !text-[#8c9097] dark:text-white/50">
                                        <i className="ri-phone-line align-middle text-[.875rem]"></i>
                                    </span>
                                </div>
                                <div>
                                    +(555) 555-1234
                                </div>
                            </div>
                            <div className="flex items-center mb-0">
                                <div className="me-2">
                                    <span className="avatar avatar-sm avatar-rounded bg-light !text-[#8c9097] dark:text-white/50">
                                        <i className="ri-map-pin-line align-middle text-[.875rem]"></i>
                                    </span>
                                </div>
                                <div>
                                    MIG-1-11, Monroe Street, Georgetown, Washington D.C, USA,20071
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 border-b border-dashed border-defaultborder dark:border-defaultborder/10 flex items-center">
                        <p className="text-[.875rem] mb-0 me-4 font-semibold">Social Networks :</p>
                        <div className="btn-list mb-0 gap-2 flex">
                            <button aria-label="button" type="button" className="ti-btn w-[1.75rem] h-[1.75rem] text-[0.8rem] py-[0.26rem] px-2 rounded-sm ti-btn-primary mb-0">
                                <i className="ri-facebook-line font-semibold"></i>
                            </button>
                            <button aria-label="button" type="button" className="ti-btn w-[1.75rem] h-[1.75rem] text-[0.8rem] py-[0.26rem] px-2 rounded-sm ti-btn-secondary mb-0">
                                <i className="ri-twitter-line font-semibold"></i>
                            </button>
                            <button aria-label="button" type="button" className="ti-btn w-[1.75rem] h-[1.75rem] text-[0.8rem] py-[0.26rem] px-2 rounded-sm ti-btn-warning mb-0">
                                <i className="ri-instagram-line font-semibold"></i>
                            </button>
                            <button aria-label="button" type="button" className="ti-btn w-[1.75rem] h-[1.75rem] text-[0.8rem] py-[0.26rem] px-2 rounded-sm ti-btn-success mb-0">
                                <i className="ri-github-line font-semibold"></i>
                            </button>
                            <button aria-label="button" type="button" className="ti-btn w-[1.75rem] h-[1.75rem] text-[0.8rem] py-[0.26rem] px-2 rounded-sm ti-btn-danger mb-0">
                                <i className="ri-youtube-line font-semibold"></i>
                            </button>
                        </div>
                    </div>
                    <div className="p-6 border-b border-dashed border-defaultborder dark:border-defaultborder/10">
                        <p className="text-[.875rem] mb-2 me-4 font-semibold">Tags :</p>
                        <div>
                            <span className="badge bg-light text-[#8c9097] dark:text-white/50 m-1">New Lead</span>
                            <span className="badge bg-light text-[#8c9097] dark:text-white/50 m-1">Others</span>
                        </div>
                    </div>
                    <div className="p-4">
                        <p className="text-[.875rem] mb-2 font-semibold">Relationship Manager :
                            <a className="text-[.875rem] text-primary mb-0 ltr:float-right rtl:float-left" href="#!"><i className="ri-add-line me-1 align-middle"></i>Add Manager</a>
                        </p>
                        <div className="avatar-list-stacked">
                            <span className="avatar avatar-rounded">
                                <img src="../../../../assets/images/faces/2.jpg" alt="img" />
                            </span>
                            <span className="avatar avatar-rounded">
                                <img src="../../../../assets/images/faces/8.jpg" alt="img" />
                            </span>
                            <span className="avatar avatar-rounded">
                                <img src="../../../../assets/images/faces/2.jpg" alt="img" />
                            </span>
                            <span className="avatar avatar-rounded">
                                <img src="../../../../assets/images/faces/10.jpg" alt="img" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div id="todo-compose" className="hs-overlay hidden ti-modal">
                <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
                    <div className="ti-modal-content">
                        <div className="ti-modal-header">
                            <h6 className="modal-title text-[1rem] font-semibold text-defaulttextcolor" id="mail-ComposeLabel">Create Contact</h6>
                            <button type="button" className="hs-dropdown-toggle !text-[1rem] !font-semibold !text-defaulttextcolor" data-hs-overlay="#todo-compose">
                                <span className="sr-only">Close</span>
                                <i className="ri-close-line"></i>
                            </button>
                        </div>
                        <div className="ti-modal-body px-4">
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
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="deal-title" className="form-label">Deal Title</label>
                                    <input type="text" className="form-control" id="deal-title" placeholder="Deal Title" />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label htmlFor="contact-lead-score" className="form-label">Lead Score</label>
                                    <input type="number" className="form-control" id="contact-lead-score" placeholder="Lead Score" />
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
                                    <label className="form-label">Lead Source</label>
                                    <Select name="colors" options={Data1} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[Data1[0]]}
                                    />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Last Contacted</label>
                                    <div className="form-group">
                                        <div className="input-group !flex-nowrap">
                                            <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                            <DatePicker placeholder={"Choose date"} className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Tags</label>
                                    <Select isMulti name="colors" options={Data} className="basic-multi-select"
                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="Select Tag"
                                    />
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
Contacts.layout = "Contentlayout"

export default Contacts