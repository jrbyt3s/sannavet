import { modal1, modal10, modal11, modal12, modal13, modal2, modal3, modal4, modal5, modal6, modal7, modal8, modal9 } from '@/shared/data/prism/advance-uiprism'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Showcode from '@/shared/layout-components/showcode/showcode'
import Link from 'next/link'
import React, { Fragment } from 'react'

const Modalscloses = () => {
  return (
    <Fragment>
      <Seo title={"Modals & Closes"} />
      <Pageheader currentpage="Modals & Closes" activepage=" Advanced Ui" mainpage="Modals & Closes" />
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-4 col-span-12">
          <Showcode title="Basic Modal" customCardClass="custom-box" code={modal1}>
            <Link href="#!" className="hs-dropdown-toggle ti-btn ti-btn-primary-full" data-hs-overlay="#todo-compose">Launch demo modal
            </Link>
            <div id="todo-compose" className="hs-overlay hidden ti-modal">
              <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
                <div className="ti-modal-content">
                  <div className="ti-modal-header">
                    <h6 className="modal-title text-[1rem] font-semibold" id="mail-ComposeLabel">Modal title</h6>
                    <button type="button" className="hs-dropdown-toggle !text-[1rem] !font-semibold !text-defaulttextcolor" data-hs-overlay="#todo-compose">
                      <span className="sr-only">Close</span>
                      <i className="ri-close-line"></i>
                    </button>
                  </div>
                  <div className="ti-modal-body px-4">
                    ...
                  </div>
                  <div className="ti-modal-footer">
                    <button type="button"
                      className="hs-dropdown-toggle ti-btn  ti-btn-secondary-full align-middle"
                      data-hs-overlay="#todo-compose">
                      Close
                    </button>
                    <button type="button" className="ti-btn bg-primary text-white !font-medium">Save Changes</button>
                  </div>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
        <div className="xl:col-span-4 col-span-12">
          <Showcode title="Static Backdrop" code={modal2} customCardClass="custom-box">
            <Link href="#!" className="hs-dropdown-toggle ti-btn ti-btn-primary-full " data-hs-overlay="#staticBackdrop">Launch static backdrop modal
            </Link>
            <div id="staticBackdrop" className="hs-overlay hidden ti-modal  [--overlay-backdrop:static]">
              <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
                <div className="ti-modal-content">
                  <div className="ti-modal-header">
                    <h6 className="modal-title text-[1rem] font-semibold">Modal title</h6>
                    <button type="button" className="hs-dropdown-toggle !text-[1rem] !font-semibold !text-defaulttextcolor" data-hs-overlay="#staticBackdrop">
                      <span className="sr-only">Close</span>
                      <i className="ri-close-line"></i>
                    </button>
                  </div>
                  <div className="ti-modal-body px-4">
                    <p>I will not close if you click outside me. Don't even try to
                      press
                      escape key.</p>
                  </div>
                  <div className="ti-modal-footer">
                    <button type="button"
                      className="hs-dropdown-toggle ti-btn  ti-btn-secondary-full align-middle"
                      data-hs-overlay="#staticBackdrop
                                          
                                          ">
                      Close
                    </button>
                    <button type="button" className="ti-btn bg-primary text-white !font-medium">Understood</button>
                  </div>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
        <div className="xl:col-span-4 col-span-12">
          <Showcode title="Scrollin Long Content" code={modal3} customCardClass="custom-box">
            <Link href="#!" className="hs-dropdown-toggle ti-btn ti-btn-primary-full" data-hs-overlay="#exampleModalScrollable"> Scrolling long content
            </Link>
            <div id="exampleModalScrollable" className="hs-overlay hidden ti-modal">
              <div className="hs-overlay-open:mt-7  ti-modal-box mt-0 ease-out">
                <div className="ti-modal-content">
                  <div className="ti-modal-header">
                    <h6 className="modal-title text-[1rem] font-semibold">Modal title</h6>
                    <button type="button" className="hs-dropdown-toggle !text-[1rem] !font-semibold !text-defaulttextcolor" data-hs-overlay="#exampleModalScrollable">
                      <span className="sr-only">Close</span>
                      <i className="ri-close-line"></i>
                    </button>
                  </div>
                  <div className="ti-modal-body px-4">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Libero
                      ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
                      nisi
                      ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                      voluptatibus, ipsam quo est rerum modi quos expedita facere,
                      ex
                      tempore fuga similique ipsa blanditiis et accusamus
                      temporibus
                      commodi voluptas! Nobis veniam illo architecto expedita quam
                      ratione quaerat omnis. In, recusandae eos! Pariatur,
                      deleniti
                      quis ad nemo ipsam officia temporibus, doloribus fuga
                      asperiores
                      ratione distinctio velit alias hic modi praesentium aperiam
                      officiis eaque, accusamus aut. Accusantium assumenda,
                      commodi
                      nulla provident asperiores fugit inventore iste amet aut
                      placeat
                      consequatur reprehenderit. Ratione tenetur eligendi, quis
                      aperiam dolores magni iusto distinctio voluptatibus minus a
                      unde
                      at! Consequatur voluptatum in eaque obcaecati, impedit
                      accusantium ea soluta, excepturi, quasi quia commodi
                      blanditiis?
                      Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                      consequuntur quod quo veniam? Labore dignissimos reiciendis
                      accusamus recusandae est consequuntur iure.</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className="ti-modal-footer">
                    <button type="button"
                      className="hs-dropdown-toggle ti-btn  ti-btn-secondary-full align-middle"
                      data-hs-overlay="#exampleModalScrollable
                                      
                                      ">
                      Close
                    </button>
                    <button type="button" className="ti-btn bg-primary text-white !font-medium">Save Changes</button>
                  </div>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-4 col-span-12">
          <Showcode title="Vertically Centered Modal" code={modal4} customCardClass="custom-box">
            <button type="button" className="hs-dropdown-toggle ti-btn ti-btn-primary-full" data-hs-overlay="#hs-vertically-centered-modal">
              Vertically centered modal
            </button>
            <div id="hs-vertically-centered-modal" className="hs-overlay hidden ti-modal">
              <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
                <div className="ti-modal-content">
                  <div className="ti-modal-header">
                    <h6 className="modal-title" id="staticBackdropLabel2">Modal title
                    </h6>
                    <button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#hs-vertically-centered-modal">
                      <span className="sr-only">Close</span>
                      <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                  <div className="ti-modal-body">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Libero
                      ipsum quasi, error quibusdam debitis maiores hic eum? Vitae
                      nisi
                      ipsa maiores fugiat deleniti quis reiciendis veritatis.</p>
                  </div>
                  <div className="ti-modal-footer">
                    <button type="button" className="hs-dropdown-toggle ti-btn ti-btn-secondary-full" data-hs-overlay="#hs-vertically-centered-modal">
                      Close
                    </button>
                    <Link className="ti-btn ti-btn-primary-full" href="#!">
                      Save changes
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
        <div className="xl:col-span-4 col-span-12">
          <Showcode title="Verticall Centered Scoralable" code={modal5} customCardClass="custom-box">
            <button type="button" className="hs-dropdown-toggle ti-btn ti-btn-primary-full" data-hs-overlay="#hs-vertically-centered-scrollable-modal">
              Vertically centered scrollable modal
            </button>
            <div id="hs-vertically-centered-scrollable-modal" className="hs-overlay hidden ti-modal">
              <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center">
                <div className="max-h-full overflow-hidden ti-modal-content">
                  <div className="ti-modal-header">
                    <h6 className="modal-title" id="staticBackdropLabel3">Modal title
                    </h6>
                    <button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#hs-vertically-centered-scrollable-modal">
                      <span className="sr-only">Close</span>
                      <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                  <div className="ti-modal-body overflow-auto">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea
                      voluptatibus, ipsam quo est rerum modi quos expedita facere,
                      ex
                      tempore fuga similique ipsa blanditiis et accusamus
                      temporibus
                      commodi voluptas! Nobis veniam illo architecto expedita quam
                      ratione quaerat omnis. In, recusandae eos! Pariatur,
                      deleniti
                      quis ad nemo ipsam officia temporibus, doloribus fuga
                      asperiores
                      ratione distinctio velit alias hic modi praesentium aperiam
                      officiis eaque, accusamus aut. Accusantium assumenda,
                      commodi
                      nulla provident asperiores fugit inventore iste amet aut
                      placeat
                      consequatur reprehenderit. Ratione tenetur eligendi, quis
                      aperiam dolores magni iusto distinctio voluptatibus minus a
                      unde
                      at! Consequatur voluptatum in eaque obcaecati, impedit
                      accusantium ea soluta, excepturi, quasi quia commodi
                      blanditiis?
                      Qui blanditiis iusto corrupti necessitatibus dolorem fugiat
                      consequuntur quod quo veniam? Labore dignissimos reiciendis
                      accusamus recusandae est consequuntur iure.</p>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <p>Lorem ipsum dolor sit amet.</p>
                  </div>
                  <div className="ti-modal-footer">
                    <button type="button" className="hs-dropdown-toggle ti-btn ti-btn-secondary-full" data-hs-overlay="#hs-vertically-centered-scrollable-modal">
                      Close
                    </button>
                    <Link className="ti-btn ti-btn-primary-full" href="#!">
                      Save changes
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
        <div className="xl:col-span-4 col-span-12">
          <Showcode title="Tooltip And Popovers" code={modal6} customCardClass="custom-box">
            <button type="button" className="hs-dropdown-toggle ti-btn ti-btn-primary-full" data-hs-overlay="#exampleModalScrollable4">
              Launch demo modal
            </button>
            <div id="exampleModalScrollable4" className="hs-overlay hidden ti-modal">
              <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
                <div className="ti-modal-content w-full">
                  <div className="ti-modal-header">
                    <h6 className="modal-title" id="staticBackdropLabel4">Modal title
                    </h6>
                    <button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#exampleModalScrollable4">
                      <span className="sr-only">Close</span>
                      <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                  <div className="ti-modal-body">
                    <h5>Popover in a modal</h5>
                    <div className="mb-4">This
                      <div className="hs-tooltip ti-main-tooltip [--trigger:click] [--placement:right]">
                        <Link className="hs-tooltip-toggle ti-main-tooltip-toggle ti-btn ti-btn-secondary me-2" href="#!">button
                          <div className="hs-tooltip-content ti-main-tooltip-content dark:bg-bodybg !p-0 !max-w-[276px]" role="tooltip">
                            <div className="!border-b !border-solid dark:border-defaultborder/10 !rounded-t-md !py-2  !px-4 text-defaulttextcolor border-defaultborder text-start w-full text-[1rem]">
                              <h6>Popover Title</h6>
                            </div>
                            <p className="!text-defaulttextcolor !text-[0.8rem] !py-4 !px-4 text-start">Popover body content is set in this attribute.</p>
                          </div>
                        </Link>
                      </div>
                      triggers a popover on click.</div>
                    <hr />
                    <h5>Tooltips in a modal</h5>
                    <div>
                      <div className="hs-tooltip ti-main-tooltip [--placement:top]">
                        <p className="text-muted mb-0">
                          <Link href="#!">
                            <span className="hs-tooltip-toggle !text-primary">
                              This link
                              <span
                                className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm"
                                role="tooltip">
                                Tooltip
                              </span>
                            </span>
                          </Link>
                        </p>
                      </div> and
                      <div className="hs-tooltip ti-main-tooltip [--placement:top]">
                        <p className="text-muted mb-0"> <Link href="#!">
                          <span className="hs-tooltip-toggle !text-primary">
                            That link
                            <span
                              className="hs-tooltip-content ti-main-tooltip-content py-1 px-2 !bg-black !text-xs !font-medium !text-white shadow-sm"
                              role="tooltip">
                              Tooltip
                            </span>
                          </span>
                        </Link>
                        </p>
                      </div>
                      have tooltips on hover.
                    </div>
                  </div>
                  <div className="ti-modal-footer">
                    <button type="button" className="hs-dropdown-toggle ti-btn ti-btn-secondary-full" data-hs-overlay="#exampleModalScrollable4">
                      Close
                    </button>
                    <Link className="ti-btn ti-btn-primary-full" href="#!">
                      Save changes
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-4 col-span-12">
          <Showcode title="Useing The Grid" code={modal7} customCardClass="custom-box">
            <button type="button" className="hs-dropdown-toggle ti-btn ti-btn-primary-full" data-hs-overlay="#exampleModalgrid">
              Launch demo modal
            </button>
            <div id="exampleModalgrid" className="hs-overlay hidden ti-modal">
              <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out min-h-[calc(100%-3.5rem)] flex items-center">
                <div className="ti-modal-content w-full">
                  <div className="ti-modal-header">
                    <h6 className="modal-title">Modal title
                    </h6>
                    <button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#exampleModalgrid">
                      <span className="sr-only">Close</span>
                      <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                  <div className="ti-modal-body">
                    <div className="container-fluid">
                      <div className="grid grid-cols-3 gap-4">
                        <div className="rounded-sm bg-light border border-defaultborder dark:border-defaultborder/20 p-4">01</div>
                        <div className="rounded-sm bg-light border border-defaultborder dark:border-defaultborder/20 p-4">02</div>
                        <div className="rounded-sm bg-light border border-defaultborder dark:border-defaultborder/20 p-4">03</div>
                        <div className="col-span-2 rounded-sm bg-light border border-defaultborder dark:border-defaultborder/20 p-4">04</div>
                        <div className="rounded-sm bg-light border border-defaultborder dark:border-defaultborder/20 p-4">05</div>
                        <div className="rounded-sm bg-light border border-defaultborder dark:border-defaultborder/20 p-4">06</div>
                        <div className="col-span-2 rounded-sm bg-light border border-defaultborder dark:border-defaultborder/20 p-4">07</div>
                      </div>
                    </div>
                  </div>
                  <div className="ti-modal-footer">
                    <button type="button" className="hs-dropdown-toggle ti-btn ti-btn-secondary-full" data-hs-overlay="#exampleModalgrid">
                      Close
                    </button>
                    <Link className="ti-btn ti-btn-primary-full" href="#!">
                      Save changes
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
        <div className="xl:col-span-4 col-span-12">
          <Showcode title="Toggle Between Modals" code={modal8} customCardClass="custom-box">
            <button type="button" className="hs-dropdown-toggle ti-btn ti-btn-primary-full" data-hs-overlay="#hs-toggle-between-modals-first-modal">
              Open first modal
            </button>
            <div id="hs-toggle-between-modals-first-modal" className="hs-overlay hidden ti-modal">
              <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
                <div className="ti-modal-content">
                  <div className="ti-modal-header">
                    <h6 className="ti-modal-title">
                      Modal 1
                    </h6>
                    <button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#hs-toggle-between-modals-first-modal" data-hs-overlay-close>
                      <span className="sr-only">Close</span>
                      <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                  <div className="ti-modal-body">
                    <p className="mt-1 text-gray-800 dark:text-[#8c9097] dark:text-white/50">
                      Show a second modal and hide this one with the button below.
                    </p>
                  </div>
                  <div className="ti-modal-footer">
                    <button type="button" className="ti-btn ti-btn-primary-full" data-hs-overlay="#hs-toggle-between-modals-second-modal">
                      Open second modal
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div id="hs-toggle-between-modals-second-modal" className="hs-overlay hidden ti-modal">
              <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
                <div className="ti-modal-content">
                  <div className="ti-modal-header">
                    <h6 className="ti-modal-title">
                      Modal 2
                    </h6>
                    <button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#hs-toggle-between-modals-second-modal" data-hs-overlay-close>
                      <span className="sr-only">Close</span>
                      <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                  <div className="ti-modal-body">
                    <p className="mt-1 text-gray-800 dark:text-[#8c9097] dark:text-white/50">
                      Hide this modal and show the first with the button below.
                    </p>
                  </div>
                  <div className="ti-modal-footer">
                    <button type="button" className="ti-btn ti-btn-primary-full" data-hs-overlay="#hs-toggle-between-modals-first-modal">
                      Back to first
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
        <div className="xl:col-span-4 col-span-12">
          <Showcode title="box custom-box" code={modal9} customCardClass="custom-box">
            <button type="button" className="hs-dropdown-toggle ti-btn ti-btn-primary-full me-2" data-hs-overlay="#hs-extralarge-modal">
              Extra Large modal
            </button>
            <div id="hs-extralarge-modal" className="hs-overlay hidden ti-modal">
              <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out lg:!max-w-4xl lg:w-full m-3 lg:!mx-auto">
                <div className="ti-modal-content">
                  <div className="ti-modal-header">
                    <h6 className="ti-modal-title">
                      Modal title
                    </h6>
                    <button type="button" className="hs-dropdown-toggle ti-modal-close-btn"
                      data-hs-overlay="#hs-extralarge-modal">
                      <span className="sr-only">Close</span>
                      <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                          fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                  <div className="ti-modal-body">
                    <p className="mt-1 text-gray-800 dark:text-[#8c9097] dark:text-white/50">
                      ...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" className="hs-dropdown-toggle ti-btn ti-btn-primary-full me-2" data-hs-overlay="#hs-large-modal">
              Large modal
            </button>
            <div id="hs-large-modal" className="hs-overlay hidden ti-modal">
              <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out md:!max-w-2xl md:w-full m-3 md:mx-auto">
                <div className="ti-modal-content">
                  <div className="ti-modal-header">
                    <h6 className="ti-modal-title">
                      Modal title
                    </h6>
                    <button type="button" className="hs-dropdown-toggle ti-modal-close-btn"
                      data-hs-overlay="#hs-large-modal">
                      <span className="sr-only">Close</span>
                      <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                          fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                  <div className="ti-modal-body">
                    <p className="mt-1 text-gray-800 dark:text-[#8c9097] dark:text-white/50">
                      ...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" className="hs-dropdown-toggle ti-btn ti-btn-primary-full" data-hs-overlay="#hs-small-modal">
              small modal
            </button>
            <div id="hs-small-modal" className="hs-overlay hidden ti-modal">
              <div className="hs-overlay-open:mt-7 ti-modal-box mt-0 ease-out">
                <div className="ti-modal-content">
                  <div className="ti-modal-header">
                    <h6 className="ti-modal-title">
                      Modal title
                    </h6>
                    <button type="button" className="hs-dropdown-toggle ti-modal-close-btn"
                      data-hs-overlay="#hs-small-modal">
                      <span className="sr-only">Close</span>
                      <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z"
                          fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                  <div className="ti-modal-body">
                    <p className="mt-1 text-gray-800 dark:text-[#8c9097] dark:text-white/50">
                      ...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-12 col-span-12">
          <Showcode title="Full Screen Modal" customCardClass="custom box" code={modal10}>
            <button type="button" className="m-1 ms-0 ti-btn ti-btn-primary-full" data-hs-overlay="#hs-full-screen-modal">
              Full screen
            </button>
            <div id="hs-full-screen-modal" className="hs-overlay hidden ti-modal">
              <div className="hs-overlay-open:mt-0 ti-modal-box mt-10 !m-0 !max-w-full !w-full">
                <div className="ti-modal-content !rounded-none">
                  <div className="ti-modal-header">
                    <h6 className="ti-modal-title">
                      Modal title
                    </h6>
                    <button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#hs-full-screen-modal">
                      <span className="sr-only">Close</span>
                      <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                  <div className="ti-modal-body">
                    <p className="mt-1 text-gray-800 dark:text-[#8c9097] dark:text-white/50">
                      ...
                    </p>
                  </div>
                  <div className="ti-modal-footer">
                    <button type="button" className="hs-dropdown-toggle ti-btn ti-btn-secondary-full" data-hs-overlay="#hs-full-screen-modal">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" className="m-1 ms-0 ti-btn ti-btn-secondary-full" data-hs-overlay="#hs-full-screen-modal-below-sm">
              Full screen below sm
            </button>
            <div id="hs-full-screen-modal-below-sm" className="hs-overlay hidden ti-modal">
              <div className="hs-overlay-open:mt-0 ti-modal-box mt-10 max-w-full w-full !m-0 sm:hs-overlay-open:!mt-10 sm:!mt-0 sm:max-w-lg sm:!mx-auto">
                <div className="ti-modal-content sm:border sm:rounded-sm sm:shadow-sm dark:bg-bgdark sm:dark:border-white/10">
                  <div className="ti-modal-header">
                    <h6 className="ti-modal-title">
                      Modal title
                    </h6>
                    <button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#hs-full-screen-modal-below-sm">
                      <span className="sr-only">Close</span>
                      <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                  <div className="ti-modal-body">
                    <p className="mt-1 text-gray-800 dark:text-[#8c9097] dark:text-white/50">
                      ...
                    </p>
                  </div>
                  <div className="ti-modal-footer">
                    <button type="button" className="hs-dropdown-toggle ti-btn ti-btn-secondary-full" data-hs-overlay="#hs-full-screen-modal">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" className="m-1 ms-0 ti-btn ti-btn-warning-full" data-hs-overlay="#hs-full-screen-modal-below-md">
              Full screen below md
            </button>
            <div id="hs-full-screen-modal-below-md" className="hs-overlay hidden ti-modal">
              <div className="hs-overlay-open:mt-0 ti-modal-box mt-10 !max-w-full w-full !m-0 md:hs-overlay-open:!mt-10 md:!mt-0 md:!max-w-lg md:!mx-auto">
                <div className="ti-modal-content md:border md:rounded-sm md:shadow-sm md:dark:border-white/10">
                  <div className="ti-modal-header">
                    <h6 className="ti-modal-title">
                      Modal title
                    </h6>
                    <button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#hs-full-screen-modal-below-md">
                      <span className="sr-only">Close</span>
                      <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                  <div className="ti-modal-body">
                    <p className="mt-1 text-gray-800 dark:text-[#8c9097] dark:text-white/50">
                      ...
                    </p>
                  </div>
                  <div className="ti-modal-footer">
                    <button type="button" className="hs-dropdown-toggle ti-btn ti-btn-secondary-full" data-hs-overlay="#hs-full-screen-modal">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" className="m-1 ms-0 ti-btn ti-btn-secondary-full" data-hs-overlay="#hs-full-screen-modal-below-lg">
              Full screen below lg
            </button>
            <div id="hs-full-screen-modal-below-lg" className="hs-overlay hidden ti-modal">
              <div className="hs-overlay-open:mt-0 ti-modal-box mt-10 !max-w-full w-full !m-0 lg:hs-overlay-open:!mt-10 lg:!mt-0 lg:!max-w-lg lg:!mx-auto">
                <div className="ti-modal-content lg:border lg:rounded-sm lg:shadow-sm lg:dark:border-white/10">
                  <div className="ti-modal-header">
                    <h6 className="ti-modal-title">
                      Modal title
                    </h6>
                    <button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#hs-full-screen-modal-below-lg">
                      <span className="sr-only">Close</span>
                      <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                  <div className="ti-modal-body">
                    <p className="mt-1 text-gray-800 dark:text-[#8c9097] dark:text-white/50">
                      ...
                    </p>
                  </div>
                  <div className="ti-modal-footer">
                    <button type="button" className="hs-dropdown-toggle ti-btn ti-btn-secondary-full" data-hs-overlay="#hs-full-screen-modal">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" className="m-1 ms-0 ti-btn ti-btn-success-full" data-hs-overlay="#hs-full-screen-modal-below-xl">
              Full screen below xl
            </button>
            <div id="hs-full-screen-modal-below-xl" className="hs-overlay hidden ti-modal">
              <div className="hs-overlay-open:mt-0 ti-modal-box mt-10 !max-w-full w-full !m-0  xl:hs-overlay-open:!mt-10 xl:!mt-0 xl:!max-w-xl xl:!mx-auto">
                <div className="ti-modal-content xl:border xl:rounded-sm xl:shadow-sm xl:dark:border-white/10">
                  <div className="ti-modal-header">
                    <h6 className="ti-modal-title">
                      Modal title
                    </h6>
                    <button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#hs-full-screen-modal-below-xl">
                      <span className="sr-only">Close</span>
                      <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                  <div className="ti-modal-body">
                    <p className="mt-1 text-gray-800 dark:text-[#8c9097] dark:text-white/50">
                      ...
                    </p>
                  </div>
                  <div className="ti-modal-footer">
                    <button type="button" className="hs-dropdown-toggle ti-btn ti-btn-secondary-full" data-hs-overlay="#hs-full-screen-modal">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <button type="button" className="m-1 ms-0 ti-btn ti-btn-danger-full" data-hs-overlay="#hs-full-screen-modal-below-xxl">
              Full screen below xxl
            </button>
            <div id="hs-full-screen-modal-below-xxl" className="hs-overlay hidden ti-modal">
              <div className="hs-overlay-open:mt-0 ti-modal-box mt-10 !max-w-full w-full !m-0  xxl:hs-overlay-open:!mt-10 xxl:!mt-0 xxl:!max-w-xl xxl:!mx-auto">
                <div className="ti-modal-content xxl:border xxl:rounded-sm xxl:shadow-sm xxl:dark:border-white/10">
                  <div className="ti-modal-header">
                    <h6 className="ti-modal-title">
                      Modal title
                    </h6>
                    <button type="button" className="hs-dropdown-toggle ti-modal-close-btn" data-hs-overlay="#hs-full-screen-modal-below-xl">
                      <span className="sr-only">Close</span>
                      <svg className="w-3.5 h-3.5" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.258206 1.00652C0.351976 0.912791 0.479126 0.860131 0.611706 0.860131C0.744296 0.860131 0.871447 0.912791 0.965207 1.00652L3.61171 3.65302L6.25822 1.00652C6.30432 0.958771 6.35952 0.920671 6.42052 0.894471C6.48152 0.868271 6.54712 0.854471 6.61352 0.853901C6.67992 0.853321 6.74572 0.865971 6.80722 0.891111C6.86862 0.916251 6.92442 0.953381 6.97142 1.00032C7.01832 1.04727 7.05552 1.1031 7.08062 1.16454C7.10572 1.22599 7.11842 1.29183 7.11782 1.35822C7.11722 1.42461 7.10342 1.49022 7.07722 1.55122C7.05102 1.61222 7.01292 1.6674 6.96522 1.71352L4.31871 4.36002L6.96522 7.00648C7.05632 7.10078 7.10672 7.22708 7.10552 7.35818C7.10442 7.48928 7.05182 7.61468 6.95912 7.70738C6.86642 7.80018 6.74102 7.85268 6.60992 7.85388C6.47882 7.85498 6.35252 7.80458 6.25822 7.71348L3.61171 5.06702L0.965207 7.71348C0.870907 7.80458 0.744606 7.85498 0.613506 7.85388C0.482406 7.85268 0.357007 7.80018 0.264297 7.70738C0.171597 7.61468 0.119017 7.48928 0.117877 7.35818C0.116737 7.22708 0.167126 7.10078 0.258206 7.00648L2.90471 4.36002L0.258206 1.71352C0.164476 1.61976 0.111816 1.4926 0.111816 1.36002C0.111816 1.22744 0.164476 1.10028 0.258206 1.00652Z" fill="currentColor" />
                      </svg>
                    </button>
                  </div>
                  <div className="ti-modal-body">
                    <p className="mt-1 text-gray-800 dark:text-[#8c9097] dark:text-white/50">
                      ...
                    </p>
                  </div>
                  <div className="ti-modal-footer">
                    <button type="button" className="hs-dropdown-toggle ti-btn ti-btn-secondary-full" data-hs-overlay="#hs-full-screen-modal">
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Showcode>
        </div>
      </div>
      <h6 className="mb-3">Close Buttons:</h6>
      <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-4 col-span-12">
          <Showcode title="Basic Close" code={modal11} customCardClass="custom-box">
            <button type="button" className="hs-dropdown-toggle !text-[1.5rem] !font-medium text-[#8c9097] dark:text-white/50 hover:text-defaulttextcolor" data-hs-overlay="#formmodalmdo">
              <span className="sr-only">Close</span>
              <i className="ri-close-line"></i>
            </button>
          </Showcode>
        </div>
        <div className="xl:col-span-4 col-span-12">
          <Showcode title="Disable State" code={modal12} customCardClass="custom-box">
            <button type="button" className="hs-dropdown-toggle !text-[1.5rem] !font-medium text-[#8c9097] dark:text-white/50/25 pointer-events-none" data-hs-overlay="#formmodalmdo">
              <span className="sr-only">Close</span>
              <i className="ri-close-line"></i>
            </button>
          </Showcode>
        </div>
        <div className="xl:col-span-4 col-span-12">
          <Showcode title="White Variant" customCardClass="custom-box overflow-hidden" customCardBodyClass="bg-black" code={modal13}>
            <button type="button" className="hs-dropdown-toggle !text-[1.5rem] !font-medium text-[#8c9097] dark:text-white/50 hover:text-[#8c9097]" data-hs-overlay="#formmodalmdo">
              <span className="sr-only">Close</span>
              <i className="ri-close-line"></i>
            </button>
            <button type="button" className="hs-dropdown-toggle !text-[1.5rem] !font-medium text-[#8c9097] dark:text-white/50/25 pointer-events-none" data-hs-overlay="#formmodalmdo">
              <span className="sr-only">Close</span>
              <i className="ri-close-line"></i>
            </button>
          </Showcode>
        </div>
      </div>


    </Fragment>

  )
}
Modalscloses.layout = "Contentlayout"
export default Modalscloses