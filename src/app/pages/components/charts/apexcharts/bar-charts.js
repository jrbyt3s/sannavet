import { Basicbar, Categorybar, Grouped, Imagebar, Markerbar, Negativebar, Patternbar, Reversedbar, Stacked100bar, Stackedbar } from '@/shared/data/charts/apexcharts/barchartsdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'

const Barcharts = () => {
    return (
        <Fragment>
            <Seo title={"Apex Bar Charts"} />
            <Pageheader currentpage="Apex Bar Charts" activepage="Apex Charts" mainpage="Apex Bar Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Bar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="bar-basic">
                                <Basicbar />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Grouped Bar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="bar-group">
                                <Grouped />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Stacked Bar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="bar-stacked">
                                <Stackedbar />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">100% Stacked Bar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="bar-full">
                                <Stacked100bar />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Bar Chart With Negative Values</div>
                        </div>
                        <div className="box-body">
                            <div id="bar-negative">
                                <Negativebar />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Bar Chart With Markers</div>
                        </div>
                        <div className="box-body">
                            <div id="bar-markers">
                                <Markerbar />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Reversed Bar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="bar-reversed">
                                <Reversedbar />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Bar With Categogry DataLabels</div>
                        </div>
                        <div className="box-body">
                            <div id="bar-categories">
                                <Categorybar />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Patterned Bar Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="bar-pattern">
                                <Patternbar />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Bar With Image Fill</div>
                        </div>
                        <div className="box-body">
                            <div id="bar-image">
                                <Imagebar />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Barcharts.layout = "Contentlayout"

export default Barcharts