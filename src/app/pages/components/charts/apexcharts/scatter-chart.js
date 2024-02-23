import { Basicscatter, Datetimescatter, Imagefillescatter } from '@/shared/data/charts/apexcharts/scatterchartdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'

const Scatterchart = () => {
    return (
        <Fragment>
            <Seo title={"Apex Scatter Charts"} />
            <Pageheader currentpage="Apex Scatter Charts" activepage="Apex Charts" mainpage="Apex Scatter Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Scatter Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="scatter-basic">
                                <Basicscatter />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Datetime Scatter Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="scatter-datetime">
                                <Datetimescatter />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Image Fill Scatter Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="scatter-image">
                                <Imagefillescatter />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Scatterchart.layout = "Contentlayout"

export default Scatterchart