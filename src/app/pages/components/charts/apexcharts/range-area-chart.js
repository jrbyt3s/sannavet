import { Basicrangearea, Comborangearea } from '@/shared/data/charts/apexcharts/rangechartdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'

const Rangeareachart = () => {
    return (
        <Fragment>
            <Seo title={"Apex Rangrarea Charts"} />
            <Pageheader currentpage="Apex Rangrarea Charts" activepage="Apex Charts" mainpage="Apex Rangrarea Charts" />

            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Basic Range Area Chart
                            </div>
                        </div>
                        <div className="box-body">
                            <div id="rangearea-basic">
                                <Basicrangearea />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Combo Range Area Chart
                            </div>
                        </div>
                        <div className="box-body">
                            <div id="rangearea-combo">
                                <Comborangearea />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Rangeareachart.layout = "Contentlayout"

export default Rangeareachart