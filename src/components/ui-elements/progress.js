import { progress1, progress10, progress11, progress12, progress13, progress14, progress2, progress3, progress4, progress5, progress6, progress7, progress8, progress9 } from '@/shared/data/prism/uielementsprism'
import { Custom, Gradient, animated, basicprogress, colorprogress, lables, stripped } from '@/shared/data/ui-elements/progressdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Showcode from '@/shared/layout-components/showcode/showcode'
import React from 'react'

const Progress = () => {
    return (
        <div>
            <Seo title={"Progress"} />
            <Pageheader currentpage="Progress" activepage="Ui Elements" mainpage="Progress" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Basic Progress" code={progress1}>
                        {basicprogress.map((idx) => (
                            <div className="progress mb-4 !rounded-full" aria-valuenow={idx.valuenow} aria-valuemin="0" aria-valuemax="100" key={Math.random()}>
                                <div className={`progress-bar ${idx.width}`}></div>
                            </div>
                        ))}
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Different Colored Progress" code={progress2}>
                        {colorprogress.map((idx) => (
                            <div className="progress mb-4" aria-valuenow={idx.valuenow} aria-valuemin="0" key={Math.random()}
                                aria-valuemax="100">
                                <div className={`progress-bar !bg-${idx.color} !rounded-s-full ${idx.width}`}></div>
                            </div>
                        ))}
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Stripped Progress" code={progress3}>
                        {stripped.map((idx) => (
                            <div className="progress mb-4" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" key={Math.random()}>
                                <div className={`progress-bar progress-bar-striped ${idx.color} ${idx.width}`}>
                                </div>
                            </div>
                        ))}
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Progress Height" code={progress4}>
                        <div className="progress progress-xs mb-4" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-primary !rounded-s-full w-[10%]">
                            </div>
                        </div>
                        <div className="progress progress-sm mb-4" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-primary !rounded-s-full w-1/4">
                            </div>
                        </div>
                        <div className="progress mb-4" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-primary !rounded-s-full w-2/4">
                            </div>
                        </div>
                        <div className="progress progress-lg mb-4" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar bg-primary !rounded-s-full w-3/4">
                            </div>
                        </div>
                        <div className="progress progress-xl" aria-valuenow="100" aria-valuemin="0"
                            aria-valuemax="100">
                            <div className="progress-bar bg-primary !rounded-s-full w-full"></div>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Progress With Labels" code={progress5}>
                        {lables.map((idx) => (
                            <div className="progress mb-4" key={Math.random()}
                                aria-valuenow={idx.valuenow} aria-valuemin="0" aria-valuemax="100">
                                <div className={`progress-bar !rounded-s-full ${idx.color} ${idx.width}`}>{idx.class}</div>
                            </div>
                        ))}
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Multiple Bars With Sizes" code={progress6}>
                        <div className="progress-stacked progress-xs mb-4 flex">
                            <div className="progress-bar w-[5%]" aria-valuenow="5" aria-valuemin="0" aria-valuemax="100"></div>
                            <div className="progress-bar !bg-secondary !rounded-none w-[10%]" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                            <div className="progress-bar !bg-success !rounded-none w-[15%]" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="progress-stacked progress-sm mb-4 flex">
                            <div className="progress-bar !bg-warning w-[10%]" aria-valuenow="10" aria-valuemin="0" aria-valuemax="100"></div>
                            <div className="progress-bar !bg-info !rounded-none w-[15%]" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                            <div className="progress-bar !bg-danger !rounded-none w-[20%]" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="progress-stacked mb-4 flex">
                            <div className="progress-bar !bg-info w-[15%]"
                                aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
                            <div className="progress-bar !bg-success !rounded-none w-1/5"
                                aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                            <div className="progress-bar !rounded-none w-1/4"
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="progress-stacked progress-lg mb-4 flex">
                            <div className="progress-bar !bg-purple w-1/5"
                                aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                            <div className="progress-bar !bg-teal !rounded-none w-1/4"
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            <div className="progress-bar !bg-orange !rounded-none w-[30%]"
                                aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="progress-stacked progress-xl mb-0 flex">
                            <div className="progress-bar !bg-success w-1/4"
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            <div className="progress-bar !bg-danger !rounded-none w-[30%]"
                                aria-valuenow="30" aria-valuemin="0" aria-valuemax="100"></div>
                            <div className="progress-bar !bg-warning !rounded-none w-[35%]"
                                aria-valuenow="35" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Animated Stripped Progress" code={progress7}>
                        {animated.map((idx) => (
                            <div className="progress mb-4" aria-valuenow={idx.valuenow} aria-valuemin="0" aria-valuemax="100" key={Math.random()}>
                                <div className={`progress-bar ${idx.class}`}></div>
                            </div>
                        ))}
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Gradient Progress" code={progress8}>
                        {Gradient.map((idx) => (
                            <div className="progress mb-4" aria-valuenow={idx.valuenow} aria-valuemin="0" aria-valuemax="100" key={Math.random()}>
                                <div className={`progress-bar bg-${idx.color}-gradient ${idx.width}`}></div>
                            </div>
                        ))}
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Custom Animated Progress" code={progress9}>
                        {Gradient.map((idx) => (
                            <div className="progress mb-4 progress-animate" aria-valuenow={idx.valuenow} aria-valuemin="0" aria-valuemax="100" key={Math.random()}>
                                <div className={`progress-bar bg-${idx.color}-gradient ${idx.width}`}></div>
                            </div>
                        ))}

                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Custom Progress-1" code={progress10}>
                        <div className="progress progress-sm progress-custom mb-[3rem] progress-animate" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                            <h6 className="progress-bar-title text-[1rem]">Mobiles</h6>
                            <div className="progress-bar w-1/2">
                                <div className="progress-bar-value !bg-primary">50%</div>
                            </div>
                        </div>
                        <div className="progress progress-sm progress-custom mb-[3rem] progress-animate" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                            <h6 className="progress-bar-title !bg-secondary text-[1rem] after:!border-s-secondary">Watches</h6>
                            <div className="progress-bar progress-secondary w-3/5">
                                <div className="progress-bar-value !bg-secondary">60%</div>
                            </div>
                        </div>
                        <div className="progress progress-sm progress-custom progress-animate" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                            <h6 className="progress-bar-title !bg-success text-[1rem] after:!border-s-success">Shirts</h6>
                            <div className="progress-bar progress-success w-[70%]">
                                <div className="progress-bar-value !bg-success">70%</div>
                            </div>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Custom Progress-2" code={progress11}>
                        <div className="progress progress-sm mb-4" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-item-1 !bg-primary"></div><div className="progress-item-2"></div><div className="progress-item-3"></div>
                            <div className="progress-bar w-1/2"></div>
                        </div>
                        <div className="progress progress-sm mb-4" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-item-1 !bg-secondary"></div><div className="progress-item-2 !bg-secondary"></div><div className="progress-item-3"></div>
                            <div className="progress-bar !bg-secondary w-3/5"></div>
                        </div>
                        <div className="progress progress-sm mb-4" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-item-1 !bg-success"></div><div className="progress-item-2 !bg-success"></div><div className="progress-item-3"></div>
                            <div className="progress-bar !bg-success w-[70%]"></div>
                        </div>
                        <div className="progress progress-sm mb-4" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-item-1 !bg-info"></div><div className="progress-item-2 !bg-info"></div><div className="progress-item-3 !bg-info"></div>
                            <div className="progress-bar !bg-info w-4/5"></div>
                        </div>
                        <div className="progress progress-sm" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-item-1 !bg-warning"></div><div className="progress-item-2 !bg-warning"></div><div className="progress-item-3 !bg-warning"></div>
                            <div className="progress-bar !bg-warning w-[90%]"></div>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Custom Progress-3" code={progress12}>
                        <div className="progress progress-lg mb-[3rem] custom-progress-3 progress-animate" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar w-1/2">
                                <div className="progress-bar-value">50%</div>
                            </div>
                        </div>
                        <div className="progress progress-lg mb-[3rem] custom-progress-3 progress-animate" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar !bg-secondary w-3/5">
                                <div className="progress-bar-value secondary">60%</div>
                            </div>
                        </div>
                        <div className="progress progress-lg custom-progress-3 progress-animate" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                            <div className="progress-bar !bg-success w-[70%]">
                                <div className="progress-bar-value success">70%</div>
                            </div>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Custom Progress-4" code={progress13}>
                        {Custom.map((idx) => (
                            <div className={`progress progress-xl mb-4 progress-animate custom-progress-4 ${idx.color}`} aria-valuenow={idx.valuenow} aria-valuemin="0" aria-valuemax="100" key={Math.random()}>
                                <div className={`progress-bar bg-${idx.color}-gradient !rounded-sm ${idx.width}`}></div>
                                <div className="progress-bar-label">{idx.valuenow}%</div>
                            </div>
                        ))}
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Custom Progress-5" code={progress14}>
                        <h6 className="font-semibold mb-2">Project Dependencies</h6>
                        <div className="progress-stacked progress-xl mb-[3rem] flex">
                            <div className="progress-bar w-1/2"
                                aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                            <div className="progress-bar !bg-secondary !rounded-none w-[35%]"
                                aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">35%</div>
                            <div className="progress-bar !bg-danger !rounded-s-none !rounded-e-full w-2/5"
                                aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
                        </div>
                        <div className="grid grid-cols-12 justify-center">
                            <div className="xl:col-span-5 col-span-12">
                                <div className="border border-defaultborder dark:border-defaultborder/10 p-4 rounded-md">
                                    <p className="text-[0.75rem] font-semibold mb-0 text-[#8c9097] dark:text-white/50">Html<span className="ltr:float-right rtl:float-left text-[0.625rem] font-normal">25%</span></p>
                                    <div className="progress progress-xs mb-4 progress-animate" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar bg-primary w-1/2">
                                        </div>
                                    </div>
                                    <p className="text-[0.75rem] font-semibold mb-0 text-[#8c9097] dark:text-white/50">Css<span className="ltr:float-right rtl:float-left text-[0.625rem] font-normal">35%</span></p>
                                    <div className="progress progress-xs mb-4 progress-animate " aria-valuenow="35" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar !rounded-none !bg-secondary w-[35%]">
                                        </div>
                                    </div>
                                    <p className="text-[0.75rem] font-semibold mb-0 text-[#8c9097] dark:text-white/50">Js<span className="ltr:float-right rtl:float-left text-[0.625rem] font-normal">40%</span></p>
                                    <div className="progress progress-xs mb-0 progress-animate " aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">
                                        <div className="progress-bar !rounded-e-full !bg-danger w-2/5">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Showcode>
                </div>
            </div>
        </div>
    )
}
Progress.layout = "Contentlayout"

export default Progress