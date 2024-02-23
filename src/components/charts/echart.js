
import { Backgroundechart, Basicareaechart, Basicbarechart, Basicechart, Basicradarechart, Basicscatter, Bubblechart, Candlestickechart, Doughnutchart, Funnelechart, Gaugeechart, Heatmapechart, Horizontalechart, Horizontalstackechart, Negativeechart, Pieechart, Simplegraph, Singlebarechart, Smoothedechart, Stackedarea, Stackedline, Treemapechart, Waterfallechart } from '@/shared/data/charts/echartdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'

const Echart = () => {
    return (
        <Fragment>
            <Seo title={"Echarts"} />
            <Pageheader currentpage="Echarts" activepage="Charts" mainpage="Echarts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Line Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-basic-line" className="echart-charts">
                                <Basicechart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Smoothed Line Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-smoothed-line" className="echart-charts">
                                <Smoothedechart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Area Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-basic-area" className="echart-charts">
                                <Basicareaechart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Stacked Line Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-stacked-line" className="echart-charts">
                                <Stackedline />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Stacked Area Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-stacked-area" className="echart-charts">
                                <Stackedarea />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Bar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-bar-basic" className="echart-charts">
                                <Basicbarechart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Bar With Background Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-bar-background" className="echart-charts">
                                <Backgroundechart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Style For a Single Bar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-bar-single" className="echart-charts">
                                <Singlebarechart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Water Fall Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-waterfall" className="echart-charts">
                                <Waterfallechart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Bar With Negative Values Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-negative-values" className="echart-charts">
                                <Negativeechart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Horizontal Bar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-bar-horizontal" className="echart-charts">
                                <Horizontalechart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Horizontal Stacked Bar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-stacked-horizontal" className="echart-charts">
                                <Horizontalstackechart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Pie Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-pie" className="echart-charts">
                                <Pieechart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Doughnut Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-doughnut" className="echart-charts">
                                <Doughnutchart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Scatter Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-scatter" className="echart-charts">
                                <Basicscatter />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Bubble Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-bubble" className="echart-charts">
                                <Bubblechart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Candlestick Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-candlestick" className="echart-charts">
                                <Candlestickechart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Radar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-basic-radar" className="echart-charts">
                                <Basicradarechart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Heatmap Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-heatmap" className="echart-charts">
                                <Heatmapechart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Treemap Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-treemap" className="echart-charts">
                                <Treemapechart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Funnel Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-funnel" className="echart-charts">
                                <Funnelechart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Gauge Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-gauge-basic" className="echart-charts">
                                <Gaugeechart />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Simple Graph Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="echart-simple-graph" className="echart-charts">
                                <Simplegraph />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Echart.layout = "Contentlayout"

export default Echart