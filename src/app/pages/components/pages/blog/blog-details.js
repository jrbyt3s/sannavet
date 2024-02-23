import { Exploretopicsdata, Populartagsdata } from '@/shared/data/pages/blogs/blogdetailsdata'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React, { Fragment } from 'react'

const BlogDetails = () => {
    return (
        <Fragment>
            <Seo title={"Blog Details"} />
            <div className="container my-[3rem]">
                <div className="grid grid-cols-12 sm:gap-x-6">
                    <div className="xl:col-span-8  col-span-12">
                        <div className="box">
                            <div className="box-body">
                                <p className="text-[1.125rem] font-semibold mb-1">Touring excites in winter when we travel with friends !</p>
                                <div className="sm:flex items-center">
                                    <div className="sm:flex items-center flex-grow">
                                        <span className="avatar avatar-sm avatar-rounded me-4">
                                            <img src="../../../../assets/images/faces/15.jpg" alt="" />
                                        </span>
                                        <div>
                                            <p className="mb-0 font-semibold">Json Taylor - <span className="text-[0.6875rem] text-[#8c9097] dark:text-white/50 font-normal">Tue,25 Dec 2022 - 11:45</span></p>
                                            <p className="mb-0 text-[#8c9097] dark:text-white/50"></p>
                                        </div>
                                    </div>
                                    <div className="sm:mt-0 mt-2">
                                        <span className="badge bg-primary text-white me-1">Nature</span>
                                        <span className="badge bg-secondary text-white">Travel</span>
                                    </div>
                                </div>
                            </div>
                            <Link href="#!">
                                <img src="../../../../assets/images/media/media-23.jpg" className="card-img rounded-0 blog-details-img" alt="..." />
                            </Link>
                            <div className="box-body border-b dark:border-defaultborder/10 border-dashed">
                                <div className="sm:flex block items-center justify-between">
                                    <div className="flex items-center">
                                        <span className="badge bg-success/10 text-success me-4">
                                            <i className="ri-thumb-up-line me-1 align-middle inline-block"></i> 32 Likes
                                        </span>
                                        <span className="badge bg-info/10 text-info me-4">
                                            <i className="ri-chat-4-line me-1 align-middle inline-block"></i> 10 Comments
                                        </span>
                                    </div>
                                    <div className="btn-lists sm:mt-0 mt-2">
                                        <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-primary text-primary me-1" ><i className="ri-thumb-up-line"></i></button>
                                        <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-primary text-primaryt me-1"><i className="ri-share-line"></i></button>
                                        <button type="button" className="ti-btn !py-1 !px-2 ti-btn-secondary text-secondary !text-[0.75rem] !font-medium"><i className="ri-chat-4-line me-1 align-middle inline-block"></i>Comment</button>
                                    </div>
                                </div>
                            </div>
                            <div className="box-body">
                                <h6 className="font-semibold text-[1rem] mb-2">
                                    Seeing with “fresh eyes” – A deeper nature experience
                                </h6>
                                <p className="mb-6 text-[#8c9097] dark:text-white/50">
                                    Around the time I first learned how to meditate, something amazing happened to me. It happened one day, quite spontaneously.  I was working as a lawyer at the time and I used to walk down a little lane way to the train station on my commute to work. It’s not an especially beautiful lane way
                                </p>
                                <p className="mb-[3rem] text-[#8c9097] dark:text-white/50">
                                    The world is animated by the wind. This invisible, mysterious force can bring a landscape alive. Its absence can cast a calm stillness over the earth. On barren mountain tops its power is barely perceptible; in forests and seas its presence becomes manifest. Winds are wild, and sometimes destructive. When we look deeply into the surely gravity’s law, strong as an ocean current, takes hold of even the strongest thing and pulls it toward the heart of the world. Each thing- each stone, blossom, child – is held in place. Only we, in our arrogance, push out beyond what we belong to for some empty freedom. If we surrendered
                                </p>
                                <div className="box !bg-light !mb-[3rem] shadow-none">
                                    <Link aria-label="anchor" href="#!" className="card-anchor"></Link>
                                    <div className="box-body">
                                        <blockquote className="blockquote mb-0 text-center">
                                            <p className="text-[1rem] font-semibold mb-2 text-dark">In nature, nothing is perfect and everything is perfect. Trees can be contorted, bent in weird ways, and they're still beautiful..</p>
                                            <footer className="text-[#6c757d] mt-2 text-[.875rem] opacity-[0.7]">Someone famous as <cite title="Source Title">-Alice Walker</cite></footer>
                                        </blockquote>
                                    </div>
                                </div>
                                <p className="mb-[3rem] text-[#8c9097] dark:text-white/50">
                                    From enchanting nature's beauty quotes that evoke visions of lush meadows full of brilliantly-colored flowers or dense forests with sky-high trees to famous quotes about nature's ever-present—and absolutely fundamental—role in our lives, these 101 quotes about nature will have you itching to get off your couch and get outside. For famous <b>quotes about nature</b>, we have them here!
                                </p>
                                <p className="text-center">
                                    <button type="button" className="ti-btn bg-primary text-white !font-medium">Load More</button>
                                </p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">
                                    Leave a Comment
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="grid grid-cols-12 gap-4">
                                    <div className="xl:col-span-6  col-span-12">
                                        <label htmlFor="blog-first-name" className="form-label dark:!text-defaulttextcolor/70">First Name</label>
                                        <input type="text" className="form-control dark:bg-bodybg !rounded-sm block w-full" id="blog-first-name" placeholder="Enter Name" />
                                    </div>
                                    <div className="xl:col-span-6 col-span-12">
                                        <label htmlFor="blog-last-name" className="form-label dark:!text-defaulttextcolor/70">Last Name</label>
                                        <input type="text" className="form-control dark:bg-bodybg !rounded-sm block w-full" id="blog-last-name" placeholder="Enter Name" />
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label htmlFor="blog-email" className="form-label dark:!text-defaulttextcolor/70">Email ID</label>
                                        <input type="text" className="form-control dark:bg-bodybg !rounded-sm block w-full" id="blog-email" placeholder="Enter Email" />
                                    </div>
                                    <div className="xl:col-span-12 col-span-12">
                                        <label htmlFor="blog-comment" className="form-label dark:!text-defaulttextcolor/70 ">Write Comment</label>
                                        <textarea className="form-control dark:bg-bodybg !rounded-sm block w-full" id="blog-comment" rows="5"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="box-footer">
                                <div className="text-end">
                                    <button type="button" className="ti-btn ti-btn-primary !font-medium">Post Comment</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xl:col-span-4 col-span-12">
                        <div className="box">
                            <div className="box-body text-center !p-6">
                                <span className="avatar avatar-rounded avatar-xxl !mb-4">
                                    <img src="../../../../assets/images/faces/2.jpg" alt="img" />
                                </span>
                                <p className="mb-1 text-[0.9375rem] font-semibold text-defaulttextcolor dark:text-defaulttextcolor/70 leading-none">Emiley Jackson</p>
                                <p className="text-[0.75rem] text-[#8c9097] dark:text-white/50 mb-1"><span>emaileyjackson2134</span>@gmail.com</p>
                                <p className="text-[#8c9097] dark:text-white/50 mb-0 p-4 pb-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution </p>
                            </div>
                            <div className="box-footer border-t blockt border-dashed text-center">
                                <div>
                                    <div className="btn-list">
                                        <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-primary ti-btn-wave text-primary me-[0.375rem]">
                                            <i className="ri-facebook-line"></i>
                                        </button>
                                        <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-secondary ti-btn-wave text-secondary me-[0.375rem]">
                                            <i className="ri-twitter-line"></i>
                                        </button>
                                        <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-warning ti-btn-wave text-warning me-[0.375rem]">
                                            <i className="ri-instagram-line"></i>
                                        </button>
                                        <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-success ti-btn-wave text-success me-[0.375rem]">
                                            <i className="ri-github-line"></i>
                                        </button>
                                        <button aria-label="button" type="button" className="ti-btn ti-btn-sm ti-btn-danger ti-btn-wave text-danger">
                                            <i className="ri-youtube-line"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">
                                    Recent Posts
                                </div>
                            </div>
                            <div className="box-body">
                                <ul className="list-group !rounded-md">
                                    <li className="list-group-item">
                                        <div className="flex gap-4 flex-wrap items-center">
                                            <span className="avatar avatar-xl ">
                                                <img src="../../../../assets/images/media/media-39.jpg" className="img-fluid rounded-md" alt="..." />
                                            </span>
                                            <div className="flex-grow">
                                                <Link href="#!" className="text-[0.875rem] font-semibold mb-0">Animals</Link>
                                                <p className="mb-1 popular-blog-content text-truncate">
                                                    There are many variations of passages of Lorem Ipsum available
                                                </p>
                                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">24,Nov 2022 - 18:27</span>
                                            </div>
                                            <div>
                                                <button aria-label="button" type="button" className="ti-btn ti-btn-light ti-btn-sm rtl:rotate-180"><i className="ri-arrow-right-s-line"></i></button>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="flex gap-4 flex-wrap items-center">
                                            <span className="avatar avatar-xl">
                                                <img src="../../../../assets/images/media/media-56.jpg" className="img-fluid rounded-md" alt="..." />
                                            </span>
                                            <div className="flex-grow">
                                                <Link href="#!" className="text-[0.875rem] font-semibold mb-0">Travel</Link>
                                                <p className="mb-1 popular-blog-content text-truncate">
                                                    Latin words, combined with a handful of model sentence
                                                </p>
                                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">28,Nov 2022 - 10:45</span>
                                            </div>
                                            <div>
                                                <button aria-label="button" type="button" className="ti-btn ti-btn-light ti-btn-sm rtl:rotate-180"><i className="ri-arrow-right-s-line"></i></button>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="flex gap-4 flex-wrap items-center">
                                            <span className="avatar avatar-xl">
                                                <img src="../../../../assets/images/media/media-54.jpg" className="img-fluid rounded-md" alt="..." />
                                            </span>
                                            <div className="flex-grow">
                                                <Link href="#!" className="text-[0.875rem] font-semibold mb-0">Interior</Link>
                                                <p className="mb-1 popular-blog-content text-truncate">
                                                    Contrary to popular belief, Lorem Ipsum is not simply random
                                                </p>
                                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">30,Nov 2022 - 08:32</span>
                                            </div>
                                            <div>
                                                <button aria-label="button" type="button" className="ti-btn ti-btn-light ti-btn-sm rtl:rotate-180"><i className="ri-arrow-right-s-line"></i></button>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="flex gap-4 flex-wrap items-center">
                                            <span className="avatar avatar-xl">
                                                <img src="../../../../assets/images/media/media-52.jpg" className="img-fluid rounded-md" alt="..." />
                                            </span>
                                            <div className="flex-grow">
                                                <Link href="#!" className="text-[0.875rem] font-semibold mb-0">Nature</Link>
                                                <p className="mb-1 popular-blog-content text-truncate">
                                                    It was popularised in the 1960s with the release of Letraset sheets containing
                                                </p>
                                                <span className="text-[#8c9097] dark:text-white/50 text-[0.6875rem]">3,Dec 2022 - 12:56</span>
                                            </div>
                                            <div>
                                                <button aria-label="button" type="button" className="ti-btn ti-btn-light ti-btn-sm rtl:rotate-180"><i className="ri-arrow-right-s-line"></i></button>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="list-group-item text-center">
                                        <button type="button" className="ti-btn ti-btn-primary !font-medium">Load more</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">
                                    Newsletter
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="text-center">
                                    <h6 className="font-semibold mb-4 text-[1rem]"><span className="text-primary text-[1.125rem]">1658</span> Subscribers</h6>
                                    <div className="input-group mb-4">
                                        <input type="text" className="form-control dark:bg-bodybg !rounded-s-md" placeholder="Email Here" aria-label="blog-email" aria-describedby="blog-subscribe" />
                                        <button className="ti-btn bg-primary text-white text-primary !rounded-s-none !mb-0" type="button" id="blog-subscribe">Subscribe</button>
                                    </div>
                                    <label className="form-check-label">
                                        By Subscribing you accept to &nbsp;<Link href="#!" className="text-success"><u>privacy policy</u></Link>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">
                                    Explore Topics
                                </div>
                            </div>
                            <div className="box-body">
                                <ul className="list-group">
                                    {Exploretopicsdata.map((idx) => (

                                        <li className="list-group-item" key={Math.random()}>
                                            <Link href="#!">
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <div>
                                                            <span className={`avatar avatar-xs bg-${idx.color} text-white !text-[0.65rem] avatar-rounded`}>
                                                                {idx.title}
                                                            </span>
                                                        </div>
                                                        <div>
                                                            <span className="font-semibold ms-2">{idx.text}</span>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="badge bg-light text-default !rounded-full">{idx.badge}</span>
                                                    </div>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="box">
                            <div className="box-header">
                                <div className="box-title">
                                    Popular Tags
                                </div>
                            </div>
                            <div className="box-body">
                                <div className="blog-popular-tags">
                                    {Populartagsdata.map((idx) => (
                                        <Link href="#!" key={Math.random()}>
                                            <span className="badge bg-light text-[#8c9097] dark:text-white">{idx.text}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}
BlogDetails.layout = "Contentlayout"
export default BlogDetails