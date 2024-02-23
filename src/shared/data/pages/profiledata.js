import { Fragment, useState } from "react";
import Lightbox from 'yet-another-react-lightbox';
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from 'yet-another-react-lightbox/plugins/fullscreen';
import Slideshow from 'yet-another-react-lightbox/plugins/slideshow';
import Thumbnails from 'yet-another-react-lightbox/plugins/thumbnails';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import Link from "next/link";

export const Friendsdata = [
    { id: 1, src: "../../../assets/images/faces/2.jpg", name: 'Samantha May', mail: 'samanthamay2912@gmail.com', badge: 'Team Member', color: 'info' },
    { id: 2, src: "../../../assets/images/faces/15.jpg", name: 'Andrew Garfield', mail: 'andrewgarfield98@gmail.com', badge: 'Team Lead', color: 'success' },
    { id: 3, src: "../../../assets/images/faces/5.jpg", name: 'Jessica Cashew', mail: 'jessicacashew143@gmail.com', badge: 'Team Member', color: 'info' },
    { id: 4, src: "../../../assets/images/faces/11.jpg", name: 'Simon Cowan', mail: 'jessicacashew143@gmail.com', badge: 'Team Manager', color: 'warning' },
    { id: 5, src: "../../../assets/images/faces/7.jpg", name: 'Amanda nunes', mail: 'amandanunes45@gmail.com', badge: 'Team Member', color: 'info' },
    { id: 6, src: "../../../assets/images/faces/12.jpg", name: 'Mahira Hose', mail: 'mahirahose9456@gmail.com', badge: 'Team Member', color: 'info' },
];


export const LightboxGallery = () => {

    const [open, setOpen] = useState(false);
    const value = true;
    const div = value.toString(); // Convert the value to a string
    return (
        <Fragment>
  <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12">
                     <Link href="#!" className="glightbox card" data-gallery="gallery1">
                         <img src={"../../../assets/images/media/media-40.jpg"} alt="image"  className="rounded-sm" onClick={() => setOpen(true)} />
                     </Link>
                 </div>
                 <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12">
                     <Link href="#!" className="glightbox card" data-gallery="gallery1">
                         <img src={"../../../assets/images/media/media-41.jpg"} alt="image"  className="rounded-sm" onClick={() => setOpen(true)} />
                     </Link>
                 </div>
                 <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12">
                     <Link href="#!" className="glightbox card" data-gallery="gallery1">
                         <img src={"../../../assets/images/media/media-42.jpg"} alt="image"  className="rounded-sm" onClick={() => setOpen(true)} />
                     </Link>
                 </div>
                 <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12">
                     <Link href="#!" className="glightbox card" data-gallery="gallery1">
                         <img src={"../../../assets/images/media/media-43.jpg"} alt="image"  className="rounded-sm" onClick={() => setOpen(true)} />
                     </Link>
                 </div>
                 <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12">
                     <Link href="#!" className="glightbox card" data-gallery="gallery1">
                         <img src={"../../../assets/images/media/media-44.jpg"} alt="image"  className="rounded-sm" onClick={() => setOpen(true)} />
                     </Link>
                 </div>
                 <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12">
                     <Link href="#!" className="glightbox card" data-gallery="gallery1">
                         <img src={"../../../assets/images/media/media-45.jpg"} alt="image"  className="rounded-sm" onClick={() => setOpen(true)} />
                     </Link>
                 </div>
                 <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12">
                     <Link href="#!" className="glightbox card" data-gallery="gallery1">
                         <img src={"../../../assets/images/media/media-46.jpg"} alt="image"  className="rounded-sm" onClick={() => setOpen(true)} />
                     </Link>
                 </div>
                 <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12">
                     <Link href="#!" className="glightbox card" data-gallery="gallery1">
                         <img src={"../../../assets/images/media/media-60.jpg"} alt="image"  className="rounded-sm" onClick={() => setOpen(true)} />
                     </Link>
                 </div>
                 <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12">
                     <Link href="#!" className="glightbox card" data-gallery="gallery1">
                         <img src={"../../../assets/images/media/media-26.jpg"} alt="image"  className="rounded-sm" onClick={() => setOpen(true)} />
                     </Link>
                 </div>
                 <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12">
                     <Link href="#!" className="glightbox card" data-gallery="gallery1">
                         <img src={"../../../assets/images/media/media-32.jpg"} alt="image"  className="rounded-sm" onClick={() => setOpen(true)} />
                     </Link>
                 </div>
                 <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12">
                     <Link href="#!" className="glightbox card" data-gallery="gallery1">
                         <img src={"../../../assets/images/media/media-30.jpg"} alt="image"  className="rounded-sm" onClick={() => setOpen(true)} />
                     </Link>
                 </div>
                 <div className="xxl:col-span-3 xl:col-span-3 lg:col-span-3 md:col-span-6 col-span-12">
                     <Link href="#!" className="glightbox card" data-gallery="gallery1">
                         <img src={"../../../assets/images/media/media-31.jpg"} alt="image"  className="rounded-sm" onClick={() => setOpen(true)} />
                     </Link>
                 </div>

            <Lightbox open={open} close={() => setOpen(false)} plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]} zoom={{
                maxZoomPixelRatio: 10,
                scrollToZoom: true
            }}
            slides={[{ src: "../../../assets/images/media/media-40.jpg" }, { src: "../../../assets/images/media/media-41.jpg" }, { src: "../../../assets/images/media/media-42.jpg" }, { src: "../../../assets/images/media/media-43.jpg" }, { src: "../../../assets/images/media/media-44.jpg" }, { src: "../../../assets/images/media/media-45.jpg" }, { src: "../../../assets/images/media/media-46.jpg" }, { src: "../../../assets/images/media/media-60.jpg" }, { src: "../../../assets/images/media/media-26.jpg" }
                             , { src: "../../../assets/images/media/media-32.jpg" }, { src: "../../../assets/images/media/media-30.jpg" }, { src: "../../../assets/images/media/media-31.jpg" }
            
                        ]}/>

        </Fragment>
    );
};

//Skills

export const Skillsdata = [
    { id: 1, text: 'Cloud computing' },
    { id: 2, text: 'Data analysis' },
    { id: 3, text: 'DevOps' },
    { id: 4, text: 'Machine learning' },
    { id: 5, text: 'Programming' },
    { id: 6, text: 'Security' },
    { id: 7, text: 'Python' },
    { id: 8, text: 'JavaScript' },
    { id: 9, text: 'Ruby' },
    { id: 10, text: 'PowerShell' },
    { id: 11, text: 'Statistics' },
    { id: 12, text: 'SQL' },
];

//Followers

export const Followersdata = [
    { id: 1, src: "../../../assets/images/faces/15.jpg", name: 'Alicia Sierra', mail: 'aliciasierra389@gmail.com' },
    { id: 2, src: "../../../assets/images/faces/4.jpg", name: 'Samantha Mery', mail: 'samanthamery@gmail.com' },
    { id: 3, src: "../../../assets/images/faces/11.jpg", name: 'Juliana Pena', mail: 'juliapena555@gmail.com' },
    { id: 4, src: "../../../assets/images/faces/5.jpg", name: 'Adam Smith', mail: 'adamsmith99@gmail.com' },
    { id: 5, src: "../../../assets/images/faces/7.jpg", name: 'Farhaan Amhed', mail: 'farhaanahmed989@gmail.com' },
];

//Personal info

export const Personalinfodata = [
    { id: 1, text1: 'Name :', text2: 'Sonya Taylor' },
    { id: 2, text1: 'Email :', text2: 'sonyataylor231@gmail.com' },
    { id: 3, text1: 'Phone :', text2: '+(555) 555-1234' },
    { id: 4, text1: 'Designation :', text2: 'C.E.O' },
    { id: 5, text1: 'Age :', text2: '28' },
    { id: 6, text1: 'Experience :', text2: '10 Years' },
];

//Recent Posts
export const RecentPostsdata = [
    { id: 1, src: "../../../assets/images/media/media-39.jpg", name: 'Animals', text: 'There are many variations of passages of Lorem Ipsum available' },
    { id: 2, src: "../../../assets/images/media/media-56.jpg", name: 'Travel', text: 'Latin words, combined with a handful of model sentence' },
    { id: 3, src: "../../../assets/images/media/media-54.jpg", name: 'Interior', text: 'Contrary to popular belief, Lorem Ipsum is not simply random' },
    { id: 4, src: "../../../assets/images/media/media-64.jpg", name: 'Nature', text: 'It is a long established fact that a reader will be distracted by the readable content' }
];

//Suggestions

export const Suggestionsdata = [
    { id: 1, src: "../../../assets/images/faces/15.jpg", name: 'Alister' },
    { id: 2, src: "../../../assets/images/faces/4.jpg", name: 'Samantha Sams' },
    { id: 3, src: "../../../assets/images/faces/11.jpg", name: 'Jason Mama' },
    { id: 4, src: "../../../assets/images/faces/5.jpg", name: 'Alicia Sierra' },
    { id: 5, src: "../../../assets/images/faces/7.jpg", name: 'Kiara Advain' }
];
