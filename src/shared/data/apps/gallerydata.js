import  {  Fragment, useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';

import Link from 'next/link';


export const LightboxGallery1 = () => {

    const [open, setOpen] = useState(false);
    const value = true;
    const div = value.toString(); // Convert the value to a string
    return (
        <Fragment>
            <div className="lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-12"  >
                <div className="inner">
                    <a href="#!" >
                        <img src={"../../../assets/images/media/media-40.jpg"} alt='media1' className="gallery rounded-md" onClick={() => setOpen(true)} />
                    </a>
                </div>
            </div>
            <div className="lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-12">

                <div className="inner">
                    <a href="#!" >
                        <img src={"../../../assets/images/media/media-41.jpg"} alt='media2' className="gallery rounded-md" onClick={() => setOpen(true)} />

                    </a>
                </div>
            </div>
            <div className="lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-12">

                <div className="inner">
                    <a href="#!" >
                        <img src={"../../../assets/images/media/media-42.jpg"} alt='media3' className="gallery rounded-md" onClick={() => setOpen(true)} />

                    </a>
                </div>
            </div>
            <div className="lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-12">

                <div className="inner">
                    <a href="#!" >
                        <img src={"../../../assets/images/media/media-43.jpg"} alt='media4' className="gallery rounded-md" onClick={() => setOpen(true)} />

                    </a>
                </div>
            </div>
            <div className="lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-12">

                <div className="inner">
                    <a href="#!" className='box'>
                        <img src={"../../../assets/images/media/media-44.jpg"} alt='media5' className="gallery rounded-md" onClick={() => setOpen(true)} />

                    </a>
                </div>
            </div>
            <div className="lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-12">
                <div className="inner">
                    <a href='#'>
                        <img src={"../../../assets/images/media/media-45.jpg"} alt='media6' className="gallery rounded-md" onClick={() => setOpen(true)} />
                    </a>
                </div>
            </div>
            <div className="lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-12">
                <div className="inner">
                    <a href='#'>
                        <img src={"../../../assets/images/media/media-46.jpg"} alt='media6' className="gallery rounded-md" onClick={() => setOpen(true)} />
                    </a>
                </div>
            </div>
            <div className="lg:col-span-3 md:col-span-3 sm:col-span-6 col-span-12 mb-3">
                <div className="inner">
                    <a href='#'>
                        <img src={"../../../assets/images/media/media-60.jpg"} alt='media6' className="gallery rounded-md" onClick={() => setOpen(true)} />
                    </a>
                </div>
            </div>

            <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} zoom={{
                maxZoomPixelRatio: 10,
                scrollToZoom: true
            }}
                slides={[{ src: "../../../assets/images/media/media-40.jpg"}, { src: "../../../assets/images/media/media-41.jpg" }, { src: "../../../assets/images/media/media-42.jpg" }, { src: "../../../assets/images/media/media-43.jpg" }, { src: "../../../assets/images/media/media-44.jpg" }, { src: "../../../assets/images/media/media-45.jpg" }, { src: "../../../assets/images/media/media-46.jpg" }, { src: "../../../assets/images/media/media-47.jpg" },]} />

        </Fragment>
    );
};