import { Advancedmultirange, Basictimeline, Multiplecolored, Timelinegrouped, Timelinegrouped1 } from '@/shared/data/charts/apexcharts/timelinechartsdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'

const Timelinechart = () => {
    return (
        <Fragment>
            <Seo title={"Apex Timeline Charts"} />
            <Pageheader currentpage="Apex Timeline Charts" activepage="Apex Charts" mainpage="Apex Timeline Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic TImeline Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="timeline-basic">
                                <Basictimeline />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Multiple Colored TImeline Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="timeline-colors">
                                <Multiplecolored />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Multi Series Timeline Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="timeline-multi">
                                <Advancedmultirange />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Advanced Timeline Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="timeline-advanced">
                                <Timelinegrouped />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Timeline-Grouped Rows</div>
                        </div>
                        <div className="box-body">
                            <div id="timeline-grouped">
                                <Timelinegrouped1 />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Timelinechart.layout = "Contentlayout"

export default Timelinechart