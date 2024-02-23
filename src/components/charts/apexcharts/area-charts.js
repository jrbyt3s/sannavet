import { Basicarea, Datetimexaxis, Github, Githubdata, Negative, Nullarea, Spiline, Stacked } from '@/shared/data/charts/apexcharts/areachartdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React, { Fragment } from 'react'

const Areacharts = () => {
    return (
        <Fragment>
            <Seo title={"Apex Area Charts"} />
            <Pageheader currentpage="Apex Area Charts" activepage="Apex Charts" mainpage="Apex Area Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Area Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="area-basic">
                                <Basicarea />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Spline Area Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="area-spline">
                                <Spiline />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Area Chart With Negative Values</div>
                        </div>
                        <div className="box-body">
                            <div id="area-negative">
                                <Negative />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Selection-Github Style Chart</div>
                        </div>
                        <div className="box-body">


                            <div id="chart-years">
                                <Githubdata />
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
                            <div id="area-stacked">
                                <Stacked />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Area Chart With Null Values</div>
                        </div>
                        <div className="box-body">
                            <div id="area-null">
                                <Nullarea />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <Datetimexaxis />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Areacharts.layout = "Contentlayout";

export default Areacharts;
