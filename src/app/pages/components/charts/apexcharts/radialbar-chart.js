import { Basicradialbar, Circlechart, Circlegauge, Circlewithimage, Gradientcircle, Multipleradial, Semicirclegauge } from '@/shared/data/charts/apexcharts/radialchartdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'

const Radialbarchart = () => {
    return (
        <Fragment>
            <Seo title={"Apex radialbar Charts"} />
            <Pageheader currentpage="Apex radialbar Charts" activepage="Apex Charts" mainpage="Apex radialbar Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Pie Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="radialbar-basic">
                                <Basicradialbar />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Multiple Radialbar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="radialbar-multiple">
                                <Multipleradial />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Circle Chart - Custom Angle</div>
                        </div>
                        <div className="box-body !sm:p-3 !p-2">
                            <div id="circle-custom">
                                <Circlechart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Gradient Circle Chart</div>
                        </div>
                        <div className="box-body !sm:p-3 !p-2">
                            <div id="gradient-circle">
                                <Gradientcircle />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Stroked Circular Gauge</div>
                        </div>
                        <div className="box-body">
                            <div id="circular-stroked">
                                <Circlegauge />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Circle Chart With Image</div>
                        </div>
                        <div className="box-body !sm:p-3 !p-2">
                            <div id="circle-image">
                                <Circlewithimage />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Semi Circular Gauge</div>
                        </div>
                        <div className="box-body">
                            <div id="circular-semi">
                                <Semicirclegauge />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Radialbarchart.layout = "Contentlayout"

export default Radialbarchart