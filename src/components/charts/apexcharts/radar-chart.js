import { Basicradar, Multipleradar, Polygonradar } from '@/shared/data/charts/apexcharts/radarchartadat'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'

const Radarchart = () => {
    return (
        <Fragment>
            <Seo title={"Apex Radar Charts"} />
            <Pageheader currentpage="Apex Radar Charts" activepage="Apex Charts" mainpage="Apex Radar Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Radar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="radar-basic">
                                <Basicradar />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Radar Chart-Multiple Series</div>
                        </div>
                        <div className="box-body">
                            <div id="radar-multiple">
                                <Multipleradar />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Radar Chart Poygon Fill</div>
                        </div>
                        <div className="box-body">
                            <div id="radar-polygon">
                                <Polygonradar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Radarchart.layout = "Contentlayout"

export default Radarchart