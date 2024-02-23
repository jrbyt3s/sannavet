import { image1, image2, image3, image4, image5, image6, image7, image8, image9 } from '@/shared/data/prism/uielementsprism'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React from 'react';
import Showcode from '@/shared/layout-components/showcode/showcode'

const Imagesfigures = () => {
    return (
        <div>
            <Seo title={"Images & Figures"} />
            <Pageheader currentpage="Images & Figures" activepage="Ui Elements" mainpage="Images & Figures" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Responsive Image" code={image1}>
                        <p className="box-title mb-4 !text-[0.813rem] !font-normal">Use <code> .img-fluid </code>class to the img tag to get responsive image.</p>
                        <div className="text-center">
                            <img src="../../../assets/images/media/media-48.jpg" className="img-fluid !inline-flex" alt="..." />
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Image With Radius" code={image2}>
                        <p className="box-title mb-4 !text-[0.813rem] !font-normal">Use <code>.rounded-md</code> class along with <code>.img-fluid</code> to get border radius.</p>
                        <div className="text-center">
                            <img src="../../../assets/images/media/media-49.jpg" className="img-fluid !rounded-md !inline-flex" alt="..." />
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Rounded Image" code={image3}>
                        <p className="box-title mb-4 !text-[0.813rem] !font-normal">Use <code>.rounded-full</code> class to <code>img</code> tag to get rounded image.</p>
                        <div className="text-center">
                            <img src="../../../assets/images/media/media-50.jpg" className="img-fluid !rounded-full !inline-flex" alt="..." />
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Image Left Align" code={image4}>
                        <img className="!rounded-md float-start" src="../../../assets/images/media/media-53.jpg" alt="..." />
                    </Showcode>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Image Center Align" code={image5}>
                        <img className="!rounded-md mx-auto block" src="../../../assets/images/media/media-55.jpg" alt="..." />
                    </Showcode>
                </div>
                <div className="xl:col-span-4 col-span-12">
                    <Showcode title="Image Right Align" code={image6}>
                        <img className="!rounded-md ltr:float-right rtl:float-left" src="../../../assets/images/media/media-54.jpg" alt="..." />
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Figures" code={image7}>
                        <div className="flex justify-between gap-2">
                            <figure className="figure inline-block mb-4">
                                <img className="m-[0.125rem] leading-none img-fluid rounded-md w-full" src="../../../assets/images/media/media-56.jpg" alt="..." />
                                <figcaption className="text-[0.875em] text-textmuted dark:text-white/70 mt-2">A caption for the above image.
                                </figcaption>
                            </figure>
                            <figure className="figure ltr:float-right rtl:float-left">
                                <img className="m-[0.125rem] leading-none img-fluid rounded-md w-full" src="../../../assets/images/media/media-57.jpg" alt="..." />
                                <figcaption className="text-[0.875em] text-textmuted dark:text-white/70 text-end mt-2">A caption for the above image.
                                </figcaption>
                            </figure>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <Showcode title="Image Thumbnail" code={image8}>
                        <p className="mb-3">Use <code>ti-img-thumbnail</code> to give an image a rounded 1px border.</p>
                        <div className="text-center">
                            <img src="../../../assets/images/media/media-51.jpg" className="ti-img-thumbnail" alt="..." />
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-3 col-span-12">
                    <Showcode title="Image Thumbnail" code={image9}>
                        <p className="mb-3">Use <code>ti-img-thumbnail-rounded</code> to give an image a rounded 1px border.</p>
                        <div className="text-center">
                            <img src="../../../assets/images/media/media-52.jpg" className="ti-img-thumbnail-rounded" alt="..." />
                        </div>
                    </Showcode>
                </div>
            </div>
        </div>
    )
}
Imagesfigures.layout = "Contentlayout";

export default Imagesfigures;