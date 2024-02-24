import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Showcode from '@/shared/layout-components/showcode/showcode'
import React from 'react';
import {border1, border2, border3, border4, border5, border6, border7, border8} from '../../../shared/data/prism/utilities-prism';

const Borders = () => {
    return (
        <div>
            <Seo title={"Borders"} />
            <Pageheader currentpage="Borders" activepage="Utilities" mainpage="Borders" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Borders" code={border1}>
                            <span className="border dark:border-defaultborder/10 border-container"></span>
                            <span className="border-t dark:border-defaultborder/10 border-container"></span>
                            <span className="border-e dark:border-defaultborder/10 border-container"></span>
                            <span className="border-b dark:border-defaultborder/10 border-container"></span>
                            <span className="border-s dark:border-defaultborder/10 border-container"></span>
                        </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Remove Border" code={border2}>
                            <span className="border-0 border-container"></span>
                            <span className="border dark:border-defaultborder/10 border-t-0 border-container"></span>
                            <span className="border dark:border-defaultborder/10 border-e-0 border-container"></span>
                            <span className="border dark:border-defaultborder/10 border-b-0 border-container"></span>
                            <span className="border dark:border-defaultborder/10 border-s-0 border-container"></span>
                        </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-5 col-span-12">
                    <Showcode title="Border Widths" code={border3}>
                            <span className="border-1 dark:border-defaultborder/10 border-container"></span>
                            <span className="border-container dark:border-defaultborder/10 border-2"></span>
                            <span className="border-container dark:border-defaultborder/10 border-4"></span>
                            <span className="border-container dark:border-defaultborder/10 border-8"></span>
                        </Showcode>
                </div>
                <div className="xl:col-span-7 col-span-12">
                    <Showcode title="Border Colors" code={border4}>
                            <span className="border border-container !border-primary"></span>
                            <span className="border border-container !border-secondary"></span>
                            <span className="border border-container !border-success"></span>
                            <span className="border border-container !border-danger"></span>
                            <span className="border border-container !border-warning"></span>
                            <span className="border border-container !border-info"></span>
                            <span className="border border-container !border-light"></span>
                            <span className="border border-container !border-black"></span>
                            <span className="border border-container !border-white"></span>
                        </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Border Color Styling" code={border5}>
                            <div className="mb-4">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Email
                                    address</label>
                                <input type="email" className="form-control w-full !rounded-md !border-success"
                                    id="exampleFormControlInput1" placeholder="name@example.com" />
                            </div>
                            <div className="h4 pb-4 mb-4 text-danger border-b !border-danger">
                                Below Shows Danger Border
                            </div>
                            <div
                                className="p-4 bg-info/10 border !border-info  !border-s-0 rounded-e-md mb-1">
                                Customizing borders with backgrounud colors
                            </div>
                        </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Border With Opacity" code={border6}>
                            <div className="border border-black dark:border-white p-2 mb-2">This is default success border</div>
                            <div className="border border-black/75 dark:border-white/75 p-2 mb-2">This is 75%
                                opacity
                                success border
                            </div>
                            <div className="border border-black/50 dark:border-white/50 p-2 mb-2">This is 50%
                                opacity
                                success border
                            </div>
                            <div className="border border-black/25 dark:border-white/25 p-2 mb-2 ">This is 25%
                                opacity
                                success border
                            </div>
                            <div className="border border-black/10 dark:border-white/10 p-2">This is 10% opacity
                                success
                                border
                            </div>
                        </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Border Radius" customCardBodyClass="!flex flex-wrap gap-2" code={border7}>
                            <img src="../../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-md" alt="..." />
                            <img src="../../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-t-md" alt="..." />
                            <img src="../../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-e-md" alt="..." />
                            <img src="../../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-b-md" alt="..." />
                            <img src="../../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-s-md" alt="..." />
                            <img src="../../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-full" alt="..." />
                            <img src="../../../assets/images/media/media-58.jpg" className="bd-placeholder-img  rounded-full" alt="..." />
                        </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Sizes" customCardBodyClass="!flex flex-wrap gap-2" code={border8}>
                            <img src="../../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-none" alt="..." />
                            <img src="../../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-sm" alt="..." />
                            <img src="../../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-md" alt="..." />
                            <img src="../../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-lg" alt="..." />
                            <img src="../../../assets/images/media/media-58.jpg" className="bd-placeholder-img rounded-xl" alt="..." />
                        </Showcode>
                </div>
            </div>
        </div>
    )
}
Borders.layout = "Contentlayout"

export default Borders