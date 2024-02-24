import { Linearea, Linecolumnarea, Mixedlinecolumn, MultipleYaxis } from '@/shared/data/charts/apexcharts/mixedchartsdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'

const Mixedcharts = () => {
    return (
        <Fragment>
            <Seo title={"Apex Mixed Charts"} />
            <Pageheader currentpage="Apex Mixed Charts" activepage="Apex Charts" mainpage="Apex Mixed Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Line &amp; Column Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="mixed-linecolumn">
                                <Mixedlinecolumn />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Multiple Y-Axis Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="mixed-multiple-y">
                                <MultipleYaxis />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Line &amp; Area Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="mixed-linearea">
                                <Linearea />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Line,Column &amp; Area Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="mixed-all">
                                <Linecolumnarea />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Mixedcharts.layout = "Contentlayout"

export default Mixedcharts