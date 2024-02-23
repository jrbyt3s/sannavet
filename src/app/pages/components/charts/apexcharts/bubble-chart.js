import { Bubble3D, Simplebubble } from '@/shared/data/charts/apexcharts/bubblechartdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'

const Bubblechart = () => {
    return (
        <Fragment>
            <Seo title={"Apex Bubble Charts"} />
            <Pageheader currentpage="Apex Bubble Charts" activepage="Apex Charts" mainpage="Apex Bubble Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Simple Bubble Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="bubble-simple">
                                <Simplebubble />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">3D Bubble Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="bubble-3d">
                                <Bubble3D />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Bubblechart.layout = "Contentlayout"

export default Bubblechart