import { Annotations, Basicline, Brushchart, Dashed, Gradientline, Linechartwithlabels, Missingnullvalues, Stepline, Syncing, Zoomabletime } from '@/shared/data/charts/apexcharts/linechartsdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'

const Linecharts = () => {
    return (
        <Fragment>
            <Seo title={"Apex Line Charts"} />
            <Pageheader currentpage="Apex Line Charts" activepage="Apex Charts" mainpage="Apex Line Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Line Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="line-chart">
                                <Basicline />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Line Chart With Data Labels</div>
                        </div>
                        <div className="box-body">
                            <div id="line-chart-datalabels">
                                <Linechartwithlabels />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Zoomable Time Series</div>
                        </div>
                        <div className="box-body">
                            <div id="zoom-chart">
                                <Zoomabletime />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Line With Annotations</div>
                        </div>
                        <div className="box-body">
                            <div id="annotation-chart">
                                <Annotations />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Brush Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="brush-chart1">
                                <Brushchart />
                            </div>
                            <div id="brush-chart"></div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">StepLine Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="stepline-chart">
                                <Stepline />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Gradient Line Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="gradient-chart">
                                <Gradientline />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Missing/Null Values Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="null-chart">
                                <Missingnullvalues />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Dashed Line Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="dashed-chart">
                                <Dashed />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Syncing Charts</div>
                        </div>
                        <div className="box-body">
                            <div id="chart-line">
                                <Syncing />

                            </div>
                            <div id="chart-line2"></div>
                            <div id="chart-area"></div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Linecharts.layout = "Contentlayout"

export default Linecharts