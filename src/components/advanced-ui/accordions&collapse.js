import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Showcode from '@/shared/layout-components/showcode/showcode'
import React, { Fragment } from 'react';
import { accordion1, accordion10, accordion11, accordion2, accordion3, accordion4, accordion5, accordion6, accordion7, accordion8, accordion9 } from '@/shared/data/prism/advance-uiprism';

const Accordionscollapse = () => {
  return (
    <Fragment>
      <Seo title={"Accordions"} />
      <Pageheader currentpage="Accordions" activepage=" Advanced Ui" mainpage="Accordions" />
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-6 col-span-12">
          <Showcode title="Default Accordions" customCardClass="custom-box" code={accordion1}>
            <div className="hs-accordion-group">
              <div className="hs-accordion accordion-item overflow-hidden !border-b-0" id="hs-basic-heading-one">
                <button className="hs-accordion-toggle accordion-button hs-accordion-active:text-primary hs-accordion-active:pb-3 group py-0 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-basic-collapse-one" type="button">
                  Accordion #1
                </button>

                <div id="hs-basic-collapse-one"
                  className="hs-accordion-content w-full overflow-hidden hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-heading-one">
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code>.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>

              <div className="hs-accordion accordion-item !border-b-0" id="hs-basic-heading-two">
                <button
                  className="hs-accordion-toggle accordion-button hs-accordion-active:text-primary hs-accordion-active:pb-3 group pb-0 pt-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-basic-collapse-two" type="button">
                  Accordion #2
                </button>
                <div id="hs-basic-collapse-two"
                  className="hs-accordion-content hidden overflow-hidden w-full transition-[height] duration-300"
                  aria-labelledby="hs-basic-heading-two">
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code>.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>

              <div className="hs-accordion accordion-item overflow-hidden" id="hs-basic-heading-three">
                <button
                  className="hs-accordion-toggle accordion-button hs-accordion-active:text-primary hs-accordion-active:pb-3 group pb-0 pt-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-basic-collapse-three" type="button">
                  Accordion #3
                </button>
                <div id="hs-basic-collapse-three"
                  className="hs-accordion-content  overflow-hidden  w-full hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-heading-three">
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code>.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <Showcode title="Basic Accordion With Icon" customCardClass="custom-box" code={accordion2}>
            <div className="hs-accordion-group">
              <div className="hs-accordion accordion-item  overflow-hidden !border-b-0" id="hs-basic-with-arrow-heading-one">
                <button
                  className="hs-accordion-toggle accordion-button hs-accordion-active:text-primary hs-accordion-active:pb-3 group py-0 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-basic-with-arrow-collapse-one" type="button">
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  Accordion #1
                </button>
                <div id="hs-basic-with-arrow-collapse-one"
                  className="hs-accordion-content w-full hidden overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-arrow-heading-one">
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code>.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div className="hs-accordion accordion-item !border-b-0" id="hs-basic-with-arrow-heading-two">
                <button
                  className="hs-accordion-toggle accordion-button hs-accordion-active:text-primary hs-accordion-active:pb-3 group pb-0 pt-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-basic-with-arrow-collapse-two" type="button">
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  Accordion #2
                </button>
                <div id="hs-basic-with-arrow-collapse-two"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-arrow-heading-two">
                  <div className="accordion-body">
                    <strong>This is the first item's accordion body.</strong> It is shown by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code>.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
              <div className="hs-accordion accordion-item  overflow-hidden" id="hs-basic-with-arrow-heading-three">
                <button
                  className="hs-accordion-toggle accordion-button hs-accordion-active:text-primary hs-accordion-active:pb-3 group pb-0 pt-3 inline-flex items-center gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-basic-with-arrow-collapse-three" type="button">
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  Accordion #3
                </button>
                <div id="hs-basic-with-arrow-collapse-three"
                  className="hs-accordion-content hidden overflow-hidden w-full transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-arrow-heading-three">
                  <div className="accordion-body">
                    <strong>This is the third item's accordion body.</strong> It is hidden
                    by
                    default, until the collapse plugin adds the appropriate classes that we
                    use
                    to
                    style each element. These classes control the overall appearance, as
                    well as
                    the
                    showing and hiding via CSS transitions. You can modify any of this with
                    custom
                    CSS or overriding our default variables. It's also worth noting that
                    just
                    about
                    any HTML can go within the <code>.accordion-body</code>, though the
                    transition
                    does limit overflow.
                  </div>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-12 col-span-12">
          <Showcode title="Accordion Arrow Streched" customCardBodyClass="p-0" customCardClass="custom-box" code={accordion3}>
            <div className="hs-accordion-group">
              <div className="hs-accordion accordion-item  overflow-hidden !border-b-0" id="hs-basic-with-title-and-arrow-stretched-heading-one">
                <button
                  className="hs-accordion-toggle accordion-button hs-accordion-active:text-primary hs-accordion-active:pb-3 group py-0 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one" type="button">
                  Accordion #1
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-one"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
                  <p className="text-gray-800 !py-3 !px-4 dark:text-gray-200">
                    <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                    plugin adds the appropriate classes that we use to style each element. These classes control the
                    overall appearance, as well as the showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
              <div className="hs-accordion accordion-item !border-b-0" id="hs-basic-with-title-and-arrow-stretched-heading-two">
                <button
                  className="hs-accordion-toggle accordion-button hs-accordion-active:text-primary hs-accordion-active:pb-3 group pb-0 pt-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two" type="button">
                  Accordion #2
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-two"
                  className="hs-accordion-content accordion-body hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
                  <p className="text-gray-800 dark:text-gray-200">
                    <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                    plugin adds the appropriate classes that we use to style each element. These classes control the
                    overall appearance, as well as the showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
              <div className="hs-accordion accordion-item  overflow-hidden" id="hs-basic-with-title-and-arrow-stretched-heading-three">
                <button
                  className="hs-accordion-toggle accordion-button hs-accordion-active:text-primary hs-accordion-active:pb-3 group pb-0 pt-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three" type="button">
                  Accordion #3
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <div id="hs-basic-with-title-and-arrow-stretched-collapse-three"
                  className="hs-accordion-content accordion-body hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
                  <p className="text-gray-800 dark:text-gray-200">
                    <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                    plugin adds the appropriate classes that we use to style each element. These classes control the
                    overall appearance, as well as the showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
      </div>
      <h6 className="mb-3 !text-defaulttextcolor">Light Colors:</h6>
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-6 col-span-12">
          <Showcode title="Primary Soft Color" customCardClass="custom-box" code={accordion4}>
            <div className="hs-accordion-group">
              <div className="hs-accordion active overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-1">
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-accordion-collapse-1" type="button">
                  Accordion #1
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <div id="hs-accordion-collapse-1"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-accordion-heading-1">
                  <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                    <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                    plugin adds the appropriate classes that we use to style each element. These classes control the
                    overall appearance, as well as the showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
              <div className="hs-accordion overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-2">
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-accordion-collapse-2" type="button">
                  Accordion #2
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <div id="hs-accordion-collapse-2"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-accordion-heading-2">
                  <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                    <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                    plugin adds the appropriate classes that we use to style each element. These classes control the
                    overall appearance, as well as the showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
              <div className="hs-accordion overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-3">
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-primary hs-accordion-active:bg-primary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-primary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-accordion-collapse-3" type="button">
                  Accordion #3
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <div id="hs-accordion-collapse-3"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-accordion-heading-3">
                  <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                    <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                    plugin adds the appropriate classes that we use to style each element. These classes control the
                    overall appearance, as well as the showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <Showcode title="Secondary Soft color" code={accordion5} customCardClass="custom-box">
            <div className="hs-accordion-group">
              <div className="hs-accordion active overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-1-primary">
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-secondary hs-accordion-active:bg-secondary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-secondary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-accordion-collapse-1-primary" type="button">
                  Accordion #1
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-secondary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-secondary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <div id="hs-accordion-collapse-1-primary"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-accordion-heading-1-primary">
                  <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                    <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                    plugin adds the appropriate classes that we use to style each element. These classes control the
                    overall appearance, as well as the showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
              <div className="hs-accordion overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-2-primary">
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-secondary hs-accordion-active:bg-secondary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-secondary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-accordion-collapse-1-primary" type="button">
                  Accordion #2
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-secondary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-secondary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <div id="hs-accordion-collapse-2-primary"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-accordion-heading-2-primary">
                  <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                    <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                    plugin adds the appropriate classes that we use to style each element. These classes control the
                    overall appearance, as well as the showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
              <div className="hs-accordion overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-accordion-heading-3-primary">
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-secondary hs-accordion-active:bg-secondary/10 group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-secondary dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-accordion-collapse-1-primary" type="button">
                  Accordion #3
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-secondary block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-secondary hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <div id="hs-accordion-collapse-3-primary"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-accordion-heading-3-primary">
                  <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                    <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                    plugin adds the appropriate classes that we use to style each element. These classes control the
                    overall appearance, as well as the showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
      </div>
      <h6 className="mb-3 !text-defaulttextcolor">Solid Colors:</h6>
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-6 col-span-12">
          <Showcode title="Primary" code={accordion6} customCardClass="custom-box">
            <div className="hs-accordion-group">
              <div className="hs-accordion active overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-primary-heading-1">
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-white hs-accordion-active:bg-primary group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-white dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-primary-collapse-1" type="button">
                  Accordion #1
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-white hs-accordion-active:group-hover:text-white block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-white hs-accordion-active:group-hover:text-white hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <div id="hs-primary-collapse-1"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-primary-heading-1">
                  <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                    <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                    plugin adds the appropriate classes that we use to style each element. These classes control the
                    overall appearance, as well as the showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
              <div className="hs-accordion overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-primary-heading-2">
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-white hs-accordion-active:bg-primary group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-white dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-primary-collapse-2" type="button">
                  Accordion #2
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-white hs-accordion-active:group-hover:text-white block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-white hs-accordion-active:group-hover:text-white hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <div id="hs-primary-collapse-2"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-primary-heading-2">
                  <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                    <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                    plugin adds the appropriate classes that we use to style each element. These classes control the
                    overall appearance, as well as the showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
              <div className="hs-accordion overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-primary-heading-3">
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-white hs-accordion-active:bg-primary group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-white dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-primary-collapse-3" type="button">
                  Accordion #3
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-white hs-accordion-active:group-hover:text-white block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-white hs-accordion-active:group-hover:text-white hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <div id="hs-primary-collapse-3"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-primary-heading-3">
                  <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                    <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                    plugin adds the appropriate classes that we use to style each element. These classes control the
                    overall appearance, as well as the showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <Showcode title="Secondary" customCardClass="custom-box" code={accordion7}>
            <div className="hs-accordion-group">
              <div className="hs-accordion active overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-secondary-heading-1">
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-white hs-accordion-active:bg-secondary group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-white dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-secondary-collapse-1" type="button">
                  Accordion #1
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-white hs-accordion-active:group-hover:text-white block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-white hs-accordion-active:group-hover:text-white hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <div id="hs-secondary-collapse-1"
                  className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-secondary-heading-1">
                  <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                    <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                    plugin adds the appropriate classes that we use to style each element. These classes control the
                    overall appearance, as well as the showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
              <div className="hs-accordion overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-secondary-heading-2">
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-white hs-accordion-active:bg-secondary group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-white dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-secondary-collapse-2" type="button">
                  Accordion #2
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-white hs-accordion-active:group-hover:text-white block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-white hs-accordion-active:group-hover:text-white hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <div id="hs-secondary-collapse-2"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-secondary-heading-2">
                  <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                    <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                    plugin adds the appropriate classes that we use to style each element. These classes control the
                    overall appearance, as well as the showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
              <div className="hs-accordion overflow-hidden bg-white dark:bg-bodybg border -mt-px first:rounded-t-sm last:rounded-b-sm dark:bg-bgdark dark:border-white/10" id="hs-secondary-heading-3">
                <button
                  className="hs-accordion-toggle hs-accordion-active:text-white hs-accordion-active:bg-secondary group py-4 px-5 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 transition hover:text-gray-500 dark:hs-accordion-active:text-white dark:text-gray-200 dark:hover:text-white/80"
                  aria-controls="hs-secondary-collapse-3" type="button">
                  Accordion #3
                  <svg
                    className="hs-accordion-active:hidden hs-accordion-active:text-white hs-accordion-active:group-hover:text-white block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <svg
                    className="hs-accordion-active:block hs-accordion-active:text-white hs-accordion-active:group-hover:text-white hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                    width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                      stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
                <div id="hs-secondary-collapse-3"
                  className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="hs-secondary-heading-3">
                  <p className="text-gray-800 dark:text-gray-200 py-4 px-5">
                    <em>This is the third item's accordion body.</em> It is hidden by default, until the collapse
                    plugin adds the appropriate classes that we use to style each element. These classes control the
                    overall appearance, as well as the showing and hiding via CSS transitions.
                  </p>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
      </div>
      <h6 className="mb-3 !text-defaulttextcolor">Colored Borders:</h6>
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-6 col-span-12">
          <Showcode title="Primary" code={accordion8} customCardClass="custom-box">
            <div className="accordion accordion-border-primary accordions-items-seperate"
              id="accordionprimaryborderExample">
              <div className="hs-accordion-group">
                <div className="hs-accordion  accordion-item" id="hs-basic-heading1">
                  <button
                    className="hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group py-0 inline-flex items-center justify-between  gap-x-3 w-full font-semibold text-start  transition"
                    aria-controls="hs-basic-collapse1" type="button">
                    Accordion Item #1
                    <svg
                      className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-primary group-hover:text-primary dark:text-primary"
                      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-primary group-hover:text-primary dark:text-primary"
                      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div id="hs-basic-collapse1"
                    className="hs-accordion-content accordion-collapse w-full hidde transition-[height] duration-300"
                    aria-labelledby="hs-basic-heading1">
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong> It is shown by
                      default, until the collapse plugin adds the appropriate classes that we
                      use to style each element. These classes control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default variables. It's
                      also worth noting that just about any HTML can go within the
                      <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="hs-accordion  accordion-item" id="hs-basic-heading2">
                  <button
                    className="hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group py-0 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start  transition"
                    aria-controls="hs-basic-collapse2" type="button">
                    Accordion Item #2
                    <svg
                      className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-primary group-hover:text-primary dark:text-primary"
                      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-primary group-hover:text-primary dark:text-primary"
                      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div id="hs-basic-collapse2"
                    className="hs-accordion-content accordion-collapse w-full hidde transition-[height] duration-300 hidden"
                    aria-labelledby="hs-basic-heading2">
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong> It is shown by
                      default, until the collapse plugin adds the appropriate classes that we
                      use to style each element. These classes control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default variables. It's
                      also worth noting that just about any HTML can go within the
                      <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="hs-accordion  accordion-item" id="hs-basic-heading-tree">
                  <button
                    className="hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group py-0 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start  transition"
                    aria-controls="hs-basic-collapse-tree" type="button">
                    Accordion Item #3
                    <svg
                      className="hs-accordion-active:hidden hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary block w-3 h-3 text-primary group-hover:text-primary dark:text-primary"
                      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hs-accordion-active:text-primary hs-accordion-active:group-hover:text-primary hidden w-3 h-3 text-primary group-hover:text-primary dark:text-primary"
                      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div id="hs-basic-collapse-tree"
                    className="hs-accordion-content accordion-collapse w-full hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-heading-two">
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong> It is shown by
                      default, until the collapse plugin adds the appropriate classes that we
                      use to style each element. These classes control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default variables. It's
                      also worth noting that just about any HTML can go within the
                      <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <Showcode title="Success" code={accordion9} customCardClass="custom-box">
            <div className="accordion accordion-border-success accordions-items-seperate"
              id="accordionsuccessborderExample">
              <div className="hs-accordion-group">
                <div className="hs-accordion  accordion-item" id="hs-basic-heading11">
                  <button
                    className="hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group py-0 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start  transition"
                    aria-controls="hs-basic-collapse11" type="button">
                    Accordion Item #1
                    <svg
                      className="hs-accordion-active:hidden hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-success block w-3 h-3 text-success group-hover:text-success dark:text-success"
                      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hs-accordion-active:text-success hs-accordion-active:group-hover:text-success hidden w-3 h-3 text-success group-hover:text-success dark:text-success"
                      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div id="hs-basic-collapse11"
                    className="hs-accordion-content accordion-collapse w-full hidde transition-[height] duration-300"
                    aria-labelledby="hs-basic-heading11">
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong> It is shown by
                      default, until the collapse plugin adds the appropriate classes that we
                      use to style each element. These classes control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default variables. It's
                      also worth noting that just about any HTML can go within the
                      <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="hs-accordion  accordion-item" id="hs-basic-heading12">
                  <button
                    className="hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group py-0 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start  transition"
                    aria-controls="hs-basic-collapse12" type="button">
                    Accordion Item #2
                    <svg
                      className="hs-accordion-active:hidden hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-success block w-3 h-3 text-success group-hover:text-success dark:text-success"
                      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hs-accordion-active:text-success hs-accordion-active:group-hover:text-success hidden w-3 h-3 text-success group-hover:text-success dark:text-success"
                      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div id="hs-basic-collapse12"
                    className="hs-accordion-content accordion-collapse w-full hidde transition-[height] duration-300 hidden"
                    aria-labelledby="hs-basic-heading12">
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong> It is shown by
                      default, until the collapse plugin adds the appropriate classes that we
                      use to style each element. These classes control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default variables. It's
                      also worth noting that just about any HTML can go within the
                      <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="hs-accordion accordion-item" id="hs-basic-heading13">
                  <button
                    className="hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group py-0 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start  transition"
                    aria-controls="hs-basic-collapse13" type="button">
                    Accordion Item #3
                    <svg
                      className="hs-accordion-active:hidden hs-accordion-active:text-secondary hs-accordion-active:group-hover:text-success block w-3 h-3 text-success group-hover:text-success dark:text-success"
                      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hs-accordion-active:text-success hs-accordion-active:group-hover:text-success hidden w-3 h-3 text-success group-hover:text-success dark:text-success"
                      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div id="hs-basic-collapse13"
                    className="hs-accordion-content accordion-collapse w-full hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-heading13">
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong> It is shown by
                      default, until the collapse plugin adds the appropriate classes that we
                      use to style each element. These classes control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default variables. It's
                      also worth noting that just about any HTML can go within the
                      <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-6 col-span-12">
          <Showcode title="Left Aligned Icons" customCardClass="custom-box" code={accordion10}>
            <div className="accordion accordionicon-left accordions-items-seperate"
              id="accordioniconLeftExample">
              <div className="hs-accordion-group">
                <div className="hs-accordion  accordion-item" id="hs-basic-heading21">
                  <button
                    className="hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group py-0 inline-flex items-center gap-x-3 w-full font-semibold text-start  transition"
                    aria-controls="hs-basic-collapse21" type="button">
                    <svg
                      className="hs-accordion-active:hidden hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    Accordion Item #1
                  </button>
                  <div id="hs-basic-collapse21"
                    className="hs-accordion-content accordion-collapse w-full hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-heading21">
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong> It is shown by
                      default, until the collapse plugin adds the appropriate classes that we
                      use to style each element. These classes control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default variables. It's
                      also worth noting that just about any HTML can go within the
                      <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="hs-accordion  accordion-item" id="hs-basic-heading22">
                  <button
                    className="hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group py-0 inline-flex items-center gap-x-3 w-full font-semibold text-start  transition"
                    aria-controls="hs-basic-collapse22" type="button">
                    <svg
                      className="hs-accordion-active:hidden hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    Accordion Item #2
                  </button>
                  <div id="hs-basic-collapse22"
                    className="hs-accordion-content accordion-collapse w-full hidde transition-[height] duration-300 hidden"
                    aria-labelledby="hs-basic-heading22">
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong> It is shown by
                      default, until the collapse plugin adds the appropriate classes that we
                      use to style each element. These classes control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default variables. It's
                      also worth noting that just about any HTML can go within the
                      <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="hs-accordion  accordion-item" id="hs-basic-heading23">
                  <button
                    className="hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group py-0 inline-flex items-center gap-x-3 w-full font-semibold text-start  transition"
                    aria-controls="hs-basic-collapse23" type="button">
                    <svg
                      className="hs-accordion-active:hidden hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    Accordion Item #3
                  </button>
                  <div id="hs-basic-collapse23"
                    className="hs-accordion-content accordion-collapse w-full hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-heading23">
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong> It is shown by
                      default, until the collapse plugin adds the appropriate classes that we
                      use to style each element. These classes control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default variables. It's
                      also worth noting that just about any HTML can go within the
                      <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <Showcode title="Custom Accordion" code={accordion11} customCardClass="custom-box">
            <div className="accordion customized-accordion accordions-items-seperate"
              id="customizedAccordion">
              <div className="hs-accordion-group">
                <div className="hs-accordion  accordion-item custom-accordion-primary" id="hs-basic-heading31">
                  <button
                    className="hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group py-0 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start  transition"
                    aria-controls="hs-basic-collapse31" type="button">
                    Accordion Item #1
                    <svg
                      className="hs-accordion-active:hidden hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div id="hs-basic-collapse31"
                    className="hs-accordion-content accordion-collapse w-full hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-heading31">
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong> It is shown by
                      default, until the collapse plugin adds the appropriate classes that we
                      use to style each element. These classes control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default variables. It's
                      also worth noting that just about any HTML can go within the
                      <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="hs-accordion  accordion-item custom-accordion-secondary" id="hs-basic-heading32">
                  <button
                    className="hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group py-0 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start  transition"
                    aria-controls="hs-basic-collapse32" type="button">
                    Accordion Item #2
                    <svg
                      className="hs-accordion-active:hidden hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div id="hs-basic-collapse32"
                    className="hs-accordion-content accordion-collapse w-full hidde transition-[height] duration-300 hidden"
                    aria-labelledby="hs-basic-heading32">
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong> It is shown by
                      default, until the collapse plugin adds the appropriate classes that we
                      use to style each element. These classes control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default variables. It's
                      also worth noting that just about any HTML can go within the
                      <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
                <div className="hs-accordion  accordion-item custom-accordion-danger" id="hs-basic-heading33">
                  <button
                    className="hs-accordion-toggle accordion-button  hs-accordion-active:pb-3 group py-0 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start  transition"
                    aria-controls="hs-basic-collapse33" type="button">
                    Accordion Item #3
                    <svg
                      className="hs-accordion-active:hidden hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600 block w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                    <svg
                      className="hs-accordion-active:block hs-accordion-active:text-gray-600 hs-accordion-active:group-hover:text-gray-600 hidden w-3 h-3 text-gray-600 group-hover:text-gray-500 dark:text-[#8c9097] dark:text-white/50"
                      width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 11L8.16086 5.31305C8.35239 5.13625 8.64761 5.13625 8.83914 5.31305L15 11"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </button>
                  <div id="hs-basic-collapse33"
                    className="hs-accordion-content accordion-collapse w-full hidden transition-[height] duration-300"
                    aria-labelledby="hs-basic-heading33">
                    <div className="accordion-body">
                      <strong>This is the first item's accordion body.</strong> It is shown by
                      default, until the collapse plugin adds the appropriate classes that we
                      use to style each element. These classes control the overall appearance,
                      as well as the showing and hiding via CSS transitions. You can modify
                      any of this with custom CSS or overriding our default variables. It's
                      also worth noting that just about any HTML can go within the
                      <code>.accordion-body</code>, though the transition does limit overflow.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
      </div>
    </Fragment>
  )
}
Accordionscollapse.layout = "Contentlayout"
export default Accordionscollapse
