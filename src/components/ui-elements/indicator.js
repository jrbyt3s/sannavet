import Pageheader from '@/shared/layout-components/page-header/pageheader';
import Seo from '@/shared/layout-components/seo/seo';
import React, { Fragment } from 'react'

const indicator = () => {
    return (
        <Fragment>
            <Seo title={"Indicator"} />
            <Pageheader currentpage="Indicator" activepage="Ui Elements" mainpage="Indicator" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="col-span-12 lg:col-span-4">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Basic Legend Indicator</h5>
                        </div>
                        <div className="box-body">
                            <div className="inline-flex items-center">
                                <span className="w-2 h-2 inline-block bg-gray-500 dark:bg-white/80 rounded-full me-2"></span>
                                <span className="text-gray-600 dark:text-[#8c9097] dark:text-white/50">Legend indicator</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-4">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Color variations Legend Indicator</h5>
                        </div>
                        <div className="box-body">
                            <div className="grid gap-y-2">
                                <div className="inline-flex items-center">
                                    <span className="w-2 h-2 inline-block bg-black/20 rounded-full me-2 dark:bg-white"></span>
                                    <span className="text-gray-600 dark:text-[#8c9097] dark:text-white/50">Dark</span>
                                </div>
                                <div className="inline-flex items-center">
                                    <span className="w-2 h-2 inline-block bg-gray-500 rounded-full me-2"></span>
                                    <span className="text-gray-600 dark:text-[#8c9097] dark:text-white/50">Gray</span>
                                </div>
                                <div className="inline-flex items-center">
                                    <span className="w-2 h-2 inline-block bg-red rounded-full me-2"></span>
                                    <span className="text-gray-600 dark:text-[#8c9097] dark:text-white/50">Red</span>
                                </div>
                                <div className="inline-flex items-center">
                                    <span className="w-2 h-2 inline-block bg-yellow rounded-full me-2"></span>
                                    <span className="text-gray-600 dark:text-[#8c9097] dark:text-white/50">Yellow</span>
                                </div>
                                <div className="inline-flex items-center">
                                    <span className="w-2 h-2 inline-block bg-green rounded-full me-2"></span>
                                    <span className="text-gray-600 dark:text-[#8c9097] dark:text-white/50">Green</span>
                                </div>
                                <div className="inline-flex items-center">
                                    <span className="w-2 h-2 inline-block bg-blue rounded-full me-2"></span>
                                    <span className="text-gray-600 dark:text-[#8c9097] dark:text-white/50">Blue</span>
                                </div>
                                <div className="inline-flex items-center">
                                    <span className="w-2 h-2 inline-block bg-indigo rounded-full me-2"></span>
                                    <span className="text-gray-600 dark:text-[#8c9097] dark:text-white/50">Indigo</span>
                                </div>
                                <div className="inline-flex items-center">
                                    <span className="w-2 h-2 inline-block bg-purple rounded-full me-2"></span>
                                    <span className="text-gray-600 dark:text-[#8c9097] dark:text-white/50">Purple</span>
                                </div>
                                <div className="inline-flex items-center">
                                    <span className="w-2 h-2 inline-block bg-pink rounded-full me-2"></span>
                                    <span className="text-gray-600 dark:text-[#8c9097] dark:text-white/50">Pink</span>
                                </div>
                                <div className="inline-flex items-center">
                                    <span className="w-2 h-2 inline-block bg-light rounded-full me-2"></span>
                                    <span className="text-gray-600 dark:text-[#8c9097] dark:text-white/50">Light</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-12 lg:col-span-4">
                    <div className="box">
                        <div className="box-header">
                            <h5 className="box-title">Template Color variations Legend Indicator</h5>
                        </div>
                        <div className="box-body">
                            <div className="grid gap-y-2">
                                <div className="inline-flex items-center">
                                    <span className="w-2 h-2 inline-block bg-primary rounded-full me-2"></span>
                                    <span className="text-gray-600 dark:text-[#8c9097] dark:text-white/50">Primary</span>
                                </div>
                                <div className="inline-flex items-center">
                                    <span className="w-2 h-2 inline-block bg-secondary rounded-full me-2"></span>
                                    <span className="text-gray-600 dark:text-[#8c9097] dark:text-white/50">Secondary</span>
                                </div>
                                <div className="inline-flex items-center">
                                    <span className="w-2 h-2 inline-block bg-warning rounded-full me-2"></span>
                                    <span className="text-gray-600 dark:text-[#8c9097] dark:text-white/50">Warning</span>
                                </div>
                                <div className="inline-flex items-center">
                                    <span className="w-2 h-2 inline-block bg-success rounded-full me-2"></span>
                                    <span className="text-gray-600 dark:text-[#8c9097] dark:text-white/50">Success</span>
                                </div>
                                <div className="inline-flex items-center">
                                    <span className="w-2 h-2 inline-block bg-info rounded-full me-2"></span>
                                    <span className="text-gray-600 dark:text-[#8c9097] dark:text-white/50">Info</span>
                                </div>
                                <div className="inline-flex items-center">
                                    <span className="w-2 h-2 inline-block bg-danger rounded-full me-2"></span>
                                    <span className="text-gray-600 dark:text-[#8c9097] dark:text-white/50">Danger</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

indicator.layout = "Contentlayout"

export default indicator;
