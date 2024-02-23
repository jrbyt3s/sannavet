import { Basicpiechart, Donutwithpattern, Gradientpie, Imagefilledpie, Monochrome, Simpledonut, Updatingdonut } from '@/shared/data/charts/apexcharts/piechartdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'

const Piechart = () => {
    return (
        <Fragment>
            <Seo title={"Apex Pie Charts"} />
            <Pageheader currentpage="Apex Pie Charts" activepage="Apex Charts" mainpage="Apex Pie Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Pie Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="pie-basic">
                                <Basicpiechart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Simple Donut Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="donut-simple">
                                <Simpledonut />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Updating Donut Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="donut-update">
                                <Updatingdonut />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Monochrome Pie Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="pie-monochrome">
                                <Monochrome />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Gradient Donut Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="donut-gradient">
                                <Gradientpie />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Donut Chart With Patterns</div>
                        </div>
                        <div className="box-body">
                            <div id="donut-pattern">
                                <Donutwithpattern />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Image Filled Pie Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="pie-image">
                                <Imagefilledpie />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Piechart.layout = "Contentlayout"

export default Piechart