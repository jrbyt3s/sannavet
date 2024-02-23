import { Basicpolararea, Monochromepolar } from '@/shared/data/charts/apexcharts/polarareachartdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'

const Polarareachart = () => {
    return (
        <Fragment>
            <Seo title={"Apex Polararea Charts"} />
            <Pageheader currentpage="Apex Polararea Charts" activepage="Apex Charts" mainpage="Apex Polararea Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Polar Area Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="polararea-basic">
                                <Basicpolararea />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Polar Area Monochrome Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="polararea-monochrome">
                                <Monochromepolar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Polarareachart.layout = "Contentlayout"

export default Polarareachart