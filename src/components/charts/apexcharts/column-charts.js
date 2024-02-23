import { Basicolumn, Columnwithlabels, Distributed, Loaded, Markers, Negativecolumn, Rangecolumn, Rotated, Stacked100column, Stackedcolumn } from '@/shared/data/charts/apexcharts/columnchartsdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'

const Columncharts = () => {
    return (
        <Fragment>
            <Seo title={"Apex Column Charts"} />
            <Pageheader currentpage="Apex Column Charts" activepage="Apex Charts" mainpage="Apex Column Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Column Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="column-basic">
                                <Basicolumn />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Column Chart With Datalabels</div>
                        </div>
                        <div className="box-body">
                            <div id="column-datalabels">
                                <Columnwithlabels />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Stacked Column Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="column-stacked">
                                <Stackedcolumn />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">100% Stacked Column Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="column-stacked-full">
                                <Stacked100column />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Column Chart With Markers</div>
                        </div>
                        <div className="box-body">
                            <div id="column-markers">
                                <Markers />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Column Chart With Rotated Labels</div>
                        </div>
                        <div className="box-body">
                            <div id="column-rotated-labels">
                                <Rotated />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Column Chart With Negative Values</div>
                        </div>
                        <div className="box-body">
                            <div id="column-negative">
                                <Negativecolumn />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Range Column Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="column-range">
                                <Rangecolumn />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Dynamic Loaded Chart</div>
                        </div>
                        <div className="box-body">
                            <Loaded />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Distributed Columns Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="columns-distributed">
                                <Distributed />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Columncharts.layout = "Contentlayout"

export default Columncharts