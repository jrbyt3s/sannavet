
import React, { Fragment } from 'react'

const Pageheader = (props) => {
  return (
    <Fragment>
         <div className="block justify-between page-header md:flex">
                    <div>
                        <h3 className="!text-defaulttextcolor dark:!text-defaulttextcolor/70 dark:text-white dark:hover:text-white text-[1.125rem] font-semibold">{props.currentpage}</h3>
                    </div>
                    <ol className="flex items-center whitespace-nowrap min-w-0">
                        <li className="text-[0.813rem] ps-[0.5rem]">
                          <a className="flex items-center text-primary hover:text-primary dark:text-primary truncate" href="#!">
                          {props.activepage}
                            <i className="ti ti-chevrons-right flex-shrink-0 text-[#8c9097] dark:text-white/50 px-[0.5rem] overflow-visible rtl:rotate-180"></i>
                          </a>
                        </li>
                        <li className="text-[0.813rem] text-defaulttextcolor font-semibold hover:text-primary dark:text-[#8c9097] dark:text-white/50 " aria-current="page">
                        {props.mainpage}
                        </li>
                    </ol>
                </div>
    </Fragment>
  )
}

export default Pageheader;