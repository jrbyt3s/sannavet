import { spinner1, spinner10, spinner2, spinner3, spinner4, spinner5, spinner6, spinner7, spinner8, spinner9 } from '@/shared/data/prism/uielementsprism'
import { Buttonspinner, Colorspinner } from '@/shared/data/ui-elements/spinnersdata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Showcode from '@/shared/layout-components/showcode/showcode'
import React from 'react'

const Spinners = () => {
    return (
        <div>
            <Seo title={"Spinners"} />
            <Pageheader currentpage="Spinners" activepage="Ui Elements" mainpage="Spinners" />
            <div className="grid grid-cols-12  gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Border Spinner" code={spinner1}>
                        <div className="ti-spinner" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Colors" code={spinner2}>
                        {Colorspinner.map((idx) => (
                            <div className={`ti-spinner me-2 text-${idx.color}`} role="status" key={Math.random()}>
                                <span className="sr-only">Loading...</span>
                            </div>
                        ))}
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12  gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Growing Spinner" code={spinner3}>
                        <div className="ti-spinner !bg-black dark:!bg-light !animate-ping !border-transparent " role="status"
                            aria-label="loading">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Growing Spinner" code={spinner4}>
                        <div className="space-x-6 space-y-4 rtl:space-x-reverse">
                            <div className="ti-spinner !animate-ping !border-transparent  bg-primary" role="status"
                                aria-label="loading">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="ti-spinner !animate-ping !border-transparent  bg-secondary" role="status"
                                aria-label="loading">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="ti-spinner !animate-ping !border-transparent  bg-warning" role="status"
                                aria-label="loading">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="ti-spinner !animate-ping !border-transparent  bg-danger" role="status"
                                aria-label="loading">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="ti-spinner !animate-ping !border-transparent  bg-success" role="status"
                                aria-label="loading">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="ti-spinner !animate-ping !border-transparent  bg-info" role="status"
                                aria-label="loading">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="ti-spinner !animate-ping !border-transparent  bg-black/20 dark:!bg-light dark:animate-ping "
                                role="status" aria-label="loading">
                                <span className="sr-only">Loading...</span>
                            </div>
                            <div className="ti-spinner !animate-ping !border-transparent  bg-gray-400" role="status"
                                aria-label="loading">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12  gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Alignment Flex" code={spinner5}>
                        <div className="flex justify-center mb-6">
                            <div className="ti-spinner" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <strong>Loading...</strong>
                            <div className="ti-spinner" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Alignment Float" code={spinner6}>
                        <div className="clearfix mb-6">
                            <div className="ti-spinner ltr:float-right rtl:float-left" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                        <div className="clearfix">
                            <div className="ti-spinner ltr:float-left rtl:float-right" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12  gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Alignment Text Center" code={spinner7}>
                        <div className="text-center">
                            <div className="ti-spinner" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </Showcode>
                    <Showcode title="Spinner Sizes" code={spinner9} customCardBodyClass="flex items-center">
                        <div className="ti-spinner !w-[1rem] !h-[1rem] me-6" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div className="ti-spinner !w-[1rem] !h-[1rem] !bg-black dark:!bg-white !animate-ping !border-transparent me-6" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div className="ti-spinner me-6 w-12 h-12"
                            role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                        <div className="ti-spinner !bg-black dark:!bg-white !animate-ping !border-transparent w-8 h-8" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </Showcode>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <Showcode title="Alignment Margin" code={spinner8}>
                        <div className="ti-spinner m-[3rem]" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </Showcode>
                </div>
            </div>
            <div className="grid grid-cols-12  gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <Showcode title="Buttons" code={spinner10}>
                        <div className='flex flex-wrap gap-x-2'>
                            {Buttonspinner.map((idx) => (
                                <div key={Math.random()}><button type="button" className={`ti-btn ti-btn-disabled  ti-btn-${idx.color} me-2`} disabled>
                                    <span className="ti-spinner text-white" role="status" aria-label="loading">
                                        <span className="sr-only">Loading...</span>
                                    </span>
                                </button><button type="button" className={`ti-btn ti-btn-disabled ti-btn-${idx.color}`} disabled>
                                        <span className="ti-spinner text-white" role="status" aria-label="loading"></span>
                                        <span>Loading...</span>
                                    </button></div>

                            ))}
                        </div>
                    </Showcode>
                </div>
            </div>
        </div>
    )
}
Spinners.layout = "Contentlayout"

export default Spinners