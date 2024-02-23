import { Basictreemap, Colorrangetree, Distributedtree, Multidimensional } from '@/shared/data/charts/apexcharts/treemapdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'

const Treemapchart = () => {
    return (
        <Fragment>
            <Seo title={"Apex Treemap Charts"} />
            <Pageheader currentpage="Apex Treemap Charts" activepage="Apex Charts" mainpage="Apex Treemap Charts" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Basic Treemap Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="treemap-basic">
                                <Basictreemap />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Multi Dimensional Treemap Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="treemap-multi">
                                <Multidimensional />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Distributed Treemap Chart</div>
                        </div>
                        <div className="box-body">
                            <div id="treemap-distributed">
                                <Distributedtree />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">Treemap with color ranges</div>
                        </div>
                        <div className="box-body">
                            <div id="treemap-colorranges">
                                <Colorrangetree />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Treemapchart.layout = "Contentlayout"

export default Treemapchart