import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
const Select = dynamic(() => import("react-select"), { ssr: false });
import Link from 'next/link';
import dynamic from 'next/dynamic';

registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

const Createnft = () => {

    const Royalitydata = [
        { value: 'Choose Royalities', label: 'Choose Royalities' },
        { value: 'Flat Royalty', label: 'Flat Royalty' },
        { value: 'Graduated Royalty', label: 'Graduated Royalty' },
        { value: 'Tiered Royalty', label: 'Tiered Royalty' },
        { value: 'Time-Limited Royalty', label: 'Time-Limited Royalty' },
        { value: 'Customized Royalty', label: 'Customized Royalty' },
    ];

    return (
        <Fragment>
            <Seo title={"Create NFT"} />
            <Pageheader currentpage="Create NFT" activepage="NFT" mainpage="Create NFT" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xxl:col-span-9 xl:col-span-8 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Create NFT</div>
                        </div>
                        <div className="box-body">
                            <div className="grid grid-cols-12 gap-4 justify-between">
                                <div className="xxl:col-span-4 xl:col-span-12 col-span-12">
                                    <div className="create-nft-item">
                                        <label className="form-label">Upload NFT</label>
                                        <FilePond className="filepond circular-filepond" labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>'
                                            stylePanelLayout='compact circle' styleLoadIndicatorPosition='center bottom'
                                            styleButtonRemoveItemPosition='center bottom' />
                                    </div>
                                </div>
                                <div className="xxl:col-span-8 xl:col-span-12 col-span-12">
                                    <div className="grid grid-cols-12 sm:gap-x-6 gap-y-6">
                                        <div className="xl:col-span-12 col-span-12">
                                            <label htmlFor="input-placeholder" className="form-label">NFT Title</label>
                                            <input type="text" className="form-control" id="input-placeholder" placeholder="eg:Neo-Nebulae" />
                                        </div>
                                        <div className="xl:col-span-12 col-span-12">
                                            <label htmlFor="nft-description" className="form-label">NFT Description</label>
                                            <textarea className="form-control" id="nft-description" rows="3" placeholder="Enter Description"></textarea>
                                        </div>
                                        <div className="xl:col-span-12 col-span-12">
                                            <label htmlFor="nft-link" className="form-label">External Link</label>
                                            <input type="text" className="form-control" id="nft-link" placeholder="External Link Here" />
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <div className="grid grdi-cols-12  sm:gap-x-4 gap-y-4">
                                        <div className="xl:col-span-6 col-span-12">
                                            <label htmlFor="nft-creator-name" className="form-label">Creator Name</label>
                                            <input type="text" className="form-control" id="nft-creator-name" placeholder="Enter Name" />
                                        </div>
                                        <div className="xl:col-span-6 col-span-12">
                                            <label htmlFor="nft-price" className="form-label">NFT Price</label>
                                            <input type="text" className="form-control" id="nft-price" placeholder="Enter Price" />
                                        </div>
                                        <div className="xl:col-span-4 col-span-12">
                                            <label htmlFor="nft-size" className="form-label">NFT Size</label>
                                            <input type="text" className="form-control" id="nft-size" placeholder="Enter Size" />
                                        </div>
                                        <div className="xl:col-span-4 col-span-12">
                                            <label htmlFor="nft-royality" className="form-label">Royality</label>
                                            <Select options={Royalitydata} classNamePrefix='Select2' menuPlacement='auto' className=""
                                                placeholder="Choose Royalities" />
                                        </div>
                                        <div className="xl:col-span-4 col-span-12">
                                            <label htmlFor="nft-property" className="form-label">Property</label>
                                            <input type="text" className="form-control" id="nft-property" placeholder="Enter Property" />
                                        </div>
                                        <div className="xl:col-span-12 col-span-12">
                                            <label className="form-label block">Method</label>
                                            <div className="btn-group inline-flex" role="group" aria-label="Basic radio toggle button group">
                                                <input type="radio" className="btn-check" name="strap-material" id="strap1" defaultChecked />
                                                <label className="!mb-0 ti-btn !block sm:!inline-flex !py-1 !px-2 ti-btn-primary !bg-primary !text-white z-0 !rounded-e-none !border-e-0" htmlFor="strap1"><i className="ti ti-tag me-1 align-middle text-[0.9375rem] inline-block"></i>Fixed Price</label>
                                                <input type="radio" className="btn-check" name="strap-material" id="strap2" />
                                                <label className="!mb-0 ti-btn !block sm:!inline-flex !py-1 !px-2 ti-btn-outline-primary text-default !rounded-none !border-e-0 z-0" htmlFor="strap2"><i className="ti ti-users text-[0.9375rem] me-1 align-middle inline-block"></i>Open For Bids</label>
                                                <input type="radio" className="btn-check" name="strap-material" id="strap3" />
                                                <label className="!mb-0 ti-btn !block sm:!inline-flex !py-1 !px-2 ti-btn-outline-primary !rounded-s-none text-default z-0" htmlFor="strap3"><i className="ti ti-hourglass-low text-[0.9375rem] me-1 align-middle inline-block"></i>Timed Auction</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-footer text-end">
                            <Link href="#!" className="ti-btn ti-btn-primary-full btn-wave waves-effect waves-light">Create NFT</Link>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-3 xl:col-span-4 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                NFT Preview Here
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="box custom-box !mb-0 !shadow-none border dark:border-defaultborder/10">
                                <img src="../../../../assets/images/nft-images/18.png" className="box-img-top" alt="..." />
                                <div className="flex items-center justify-between nft-like-section w-full px-3">
                                    <div className="flex-fill">
                                        <button aria-label="button" type="button" className="btn btn-sm btn-icon btn-success rounded-pill btn-wave waves-effect waves-light">
                                            <i className="ri-heart-fill"></i>
                                        </button>
                                    </div>
                                    <div>
                                        <span className="badge nft-like-badge text-white"><i className="ri-heart-fill me-1 text-danger align-middle inline-block"></i>0.47k</span>
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="flex items-center mb-3">
                                        <div className="me-2 lh-1">
                                            <span className="avatar avatar-rounded avatar-md">
                                                <img src="../../../../assets/images/faces/1.jpg" alt="" />
                                            </span>
                                        </div>
                                        <div>
                                            <p className="mb-0 font-semibold">NFTNinja</p>
                                            <p className="text-[0.75rem] text-muted mb-0">@nftninja</p>
                                        </div>
                                    </div>
                                    <p className="mb-0 text-white nft-auction-time">
                                        04hrs : 24m : 38s
                                    </p>
                                    <p className="text-[0.9375rem] font-semibold mb-2"><Link href="#!">Digital Dreamscape</Link></p>
                                    <div className="flex flex-wrap align-itesm-center justify-between">
                                        <div className="font-semibold">
                                            Highest Bid -
                                        </div>
                                        <div className="flex flex-wrap items-center">
                                            <span className="avatar avatar-xs me-1">
                                                <img src="../../../../assets/images/crypto-currencies/square-color/Ethereum.svg" alt="" />
                                            </span>0.24ETH
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Createnft.layout = "Contentlayout"

export default Createnft