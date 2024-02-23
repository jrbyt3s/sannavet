import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react';
import { Bar, Bubble, Doughnut, Line, Pie, PolarArea, Radar, Scatter } from 'react-chartjs-2';
import * as chartjsdata from "../../../shared/data/charts/chartjsdata";


const Chartjs = () => {
    return (
        <Fragment>
            <Seo title={"Chartjs"} />
            <Pageheader currentpage="Chartjs" activepage="Charts" mainpage="Chartjs" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Chartjs Line Chart</div>
                        </div>
                        <div className="box-body">
                            <Line options={chartjsdata.Option1} data={chartjsdata.Data1} height='300px' />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Chartjs Bar Chart</div>
                        </div>
                        <div className="box-body">
                            <Bar options={chartjsdata.Option2} data={chartjsdata.Data2} height='300px' />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Chartjs Pie Chart</div>
                        </div>
                        <div className="box-body">
                            <Pie options={chartjsdata.Option3} data={chartjsdata.Data3} height='300px' />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Chartjs Doughnut Chart</div>
                        </div>
                        <div className="box-body">
                            <Doughnut options={chartjsdata.Option4} data={chartjsdata.Data4} height='300px' />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Chartjs Mixed Chart</div>
                        </div>
                        <div className="box-body">
                            <Scatter options={chartjsdata.Option5} data={chartjsdata.Data5} height='300px' />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Chartjs Polar Chart</div>
                        </div>
                        <div className="box-body">
                            <PolarArea options={chartjsdata.Option6} data={chartjsdata.Data6} height='300px' />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Chartjs Radial Chart</div>
                        </div>
                        <div className="box-body">
                            <Radar options={chartjsdata.Option7} data={chartjsdata.Data7} height='300px' />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Chartjs Scatter Chart</div>
                        </div>
                        <div className="box-body">
                            <Scatter options={chartjsdata.Option8} data={chartjsdata.Data8} height='300px' />
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Chartjs Bubble Chart</div>
                        </div>
                        <div className="box-body">
                            <Bubble options={chartjsdata.Option9} data={chartjsdata.Data9} height='300px' />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Chartjs.layout = "Contentlayout"

export default Chartjs