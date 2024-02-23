import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import {
    Autoplay, Pagination, Navigation, Scrollbar, Mousewheel, Keyboard,
    EffectCube, EffectFade, EffectFlip, EffectCoverflow, Thumbs, FreeMode
} from 'swiper/modules';

const Swiperjs = () => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span className="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <Fragment>
            <Seo title={"swiper"} />
            <Pageheader currentpage="swiper" activepage=" Advanced Ui" mainpage="swiper" />

            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Basic Swiper
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="swiper swiper-basic">
                                <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                    modules={[Autoplay]} className="mySwiper swiper swiper-basic">
                                    <SwiperSlide><img src="../../../assets/images/media/media-27.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/media-26.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/media-25.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Swiper With Navigation
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="swiper swiper-navigation">
                                <Swiper spaceBetween={30} centeredSlides={true} navigation={true} modules={[Navigation]} className="mySwiper">
                                    <SwiperSlide><img src="../../../assets/images/media/media-29.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/media-28.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                                    <SwiperSlide><img src="../../../assets/images/media/media-30.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Swiper with Pagination
                            </div>
                        </div>
                        <div className="box-body">
                            <Swiper spaceBetween={30} centeredSlides={true} autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ clickable: true, }} modules={[Pagination, Autoplay]} className="mySwiper">
                                <SwiperSlide><img src="../../../assets/images/media/media-32.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../../assets/images/media/media-31.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../../assets/images/media/media-33.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Dynamic Pagination
                            </div>
                        </div>
                        <div className="box-body">
                            <Swiper autoplay={{ delay: 2500, disableOnInteraction: false, }} pagination={{ dynamicBullets: true, clickable: true, }} modules={[Pagination, Autoplay]} className="mySwiper">
                                <SwiperSlide><img src="../../../assets/images/media/media-21.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../../assets/images/media/media-17.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../../assets/images/media/media-16.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Pagination With Progress
                            </div>
                        </div>
                        <div className="box-body">
                            <Swiper pagination={{ type: 'progressbar', }} autoplay={{ delay: 2500, disableOnInteraction: false, }} navigation={true} modules={[Pagination, Navigation, Autoplay]} className="mySwiper">
                                <SwiperSlide><img src="../../../assets/images/media/media-12.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../../assets/images/media/media-8.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../../assets/images/media/media-5.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Pagination Fraction
                            </div>
                        </div>
                        <div className="box-body">
                            <Swiper pagination={{ type: 'fraction', }} navigation={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                modules={[Pagination, Navigation, Autoplay]} className="mySwiper swiper pagination-fraction ">
                                <SwiperSlide><img src="../../../assets/images/media/media-16.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../../assets/images/media/media-30.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../../assets/images/media/media-31.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Custom Paginatioin
                            </div>
                        </div>
                        <div className="box-body">
                            <Swiper modules={[Pagination, Autoplay]} autoplay={{ delay: 2500, disableOnInteraction: false, }} className="mySwiper swiper custom-pagination">
                                <SwiperSlide><img src="../../../assets/images/media/media-25.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../../assets/images/media/media-5.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../../assets/images/media/media-33.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Scrollbar Swiper
                            </div>
                        </div>
                        <div className="box-body">
                            <Swiper scrollbar={{ hide: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }} modules={[Scrollbar, Autoplay]} className="mySwiper swiper scrollbar-swiper">
                                <SwiperSlide><img src="../../../assets/images/media/media-30.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../../assets/images/media/media-28.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../../assets/images/media/media-29.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Vertical Swiper
                            </div>
                        </div>
                        <div className="box-body">
                            <Swiper direction={'vertical'} pagination={{ clickable: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }} modules={[Pagination, Autoplay]} className="swiper mySwiper5 swiper-vertical !h-[352px]">
                                <SwiperSlide><img src="../../../assets/images/media/media-8.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../../assets/images/media/media-32.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../../assets/images/media/media-17.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Mouse Wheel Control
                            </div>
                        </div>
                        <div className="box-body">
                            <Swiper direction={'vertical'} slidesPerView={1} spaceBetween={30} mousewheel={true} pagination={{ clickable: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                modules={[Mousewheel, Pagination, Autoplay]} className="mySwiper swiper vertical vertical-mouse-control !h-[352px]">
                                <SwiperSlide><img src="../../../assets/images/media/media-28.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../../assets/images/media/media-30.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../../assets/images/media/media-32.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Keyboard Control
                            </div>
                        </div>
                        <div className="box-body">
                            <Swiper slidesPerView={1} spaceBetween={30} keyboard={{ enabled: true, }} pagination={{ clickable: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                navigation={true} modules={[Keyboard, Pagination, Navigation, Autoplay]} className="mySwiper">
                                <SwiperSlide><img src="../../../assets/images/media/media-31.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../../assets/images/media/media-12.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                                <SwiperSlide><img src="../../../assets/images/media/media-8.jpg" className="!rounded-md" alt="" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Effect Cube
                            </div>
                        </div>
                        <div className="box-body">
                            <Swiper effect={'cube'} grabCursor={true} cubeEffect={{ shadow: true, slideShadows: true, shadowOffset: 20, shadowScale: 0.94, }} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                pagination={{ clickable: true }} modules={[EffectCube, Pagination, Autoplay]} className="mySwiper swiper swiper-effect-cube !h-[352px]">
                                <SwiperSlide>
                                    <img src="../../../assets/images/media/media-62.jpg" alt="img" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="../../../assets/images/media/media-63.jpg" alt="img" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="../../../assets/images/media/media-64.jpg" alt="img" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Effect Fade
                            </div>
                        </div>
                        <div className="box-body">
                            <Swiper spaceBetween={30} effect={'fade'} navigation={true} pagination={{ clickable: true, }} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                modules={[EffectFade, Navigation, Pagination, Autoplay]} className="mySwiper swiper swiper-fade !h-[352px]">
                                <SwiperSlide>
                                    <img src="../../../assets/images/media/media-18.jpg" alt="img" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="../../../assets/images/media/media-19.jpg" alt="img" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="../../../assets/images/media/media-20.jpg" alt="img" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Effect Flip
                            </div>
                        </div>
                        <div className="box-body">
                            <Swiper effect={'flip'} grabCursor={true} pagination={{ clickable: true }} navigation={true} autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                modules={[EffectFlip, Pagination, Navigation, Autoplay]} className="mySwiper swiper-flip !h-[352px]">
                                <SwiperSlide>
                                    <img src="../../../assets/images/media/media-20.jpg" alt="img" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="../../../assets/images/media/media-62.jpg" alt="img" />
                                </SwiperSlide>
                                <SwiperSlide>
                                    <img src="../../../assets/images/media/media-63.jpg" alt="img" />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>

            </div>
            <div className="grid grid-cols-12">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Effect Coverflow
                            </div>
                        </div>
                        <div className="box-body">
                            <Swiper effect={'coverflow'}
                                grabCursor={true}
                                slidesPerView={5}
                                autoplay={{ delay: 2500, disableOnInteraction: false, }}
                                coverflowEffect={{
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: true,
                                }}
                                pagination={{ clickable: true }}
                                modules={[EffectCoverflow, Pagination, Autoplay]}
                                className="mySwiper swiper swiper-overflow">
                                <SwiperSlide><img className="img-fluid" src="../../../assets/images/media/media-40.jpg" alt="img" /></SwiperSlide>
                                <SwiperSlide><img className="img-fluid" src="../../../assets/images/media/media-41.jpg" alt="img" /></SwiperSlide>
                                <SwiperSlide><img className="img-fluid" src="../../../assets/images/media/media-42.jpg" alt="img" /></SwiperSlide>
                                <SwiperSlide><img className="img-fluid" src="../../../assets/images/media/media-43.jpg" alt="img" /></SwiperSlide>
                                <SwiperSlide><img className="img-fluid" src="../../../assets/images/media/media-44.jpg" alt="img" /></SwiperSlide>
                                <SwiperSlide><img className="img-fluid" src="../../../assets/images/media/media-59.jpg" alt="img" /></SwiperSlide>
                                <SwiperSlide><img className="img-fluid" src="../../../assets/images/media/media-46.jpg" alt="img" /></SwiperSlide>
                                <SwiperSlide><img className="img-fluid" src="../../../assets/images/media/media-61.jpg" alt="img" /></SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Swiperjs.layout = "Contentlayout"
export default Swiperjs