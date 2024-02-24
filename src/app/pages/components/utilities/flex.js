import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React from 'react'

const Flex = () => {
    return (
        <div>
            <Seo title={"Flex"} />
            <Pageheader currentpage="Flex" activepage="Utilities" mainpage="Flex" />
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Enable flex behaviors
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="bd-example flex-container mb-4">
                                <div className="flex p-2">I'm a flexbox container!</div>
                            </div>
                            <div className="bd-example flex-container">
                                <div className="inline-flex p-2">I'm an inline flexbox container!</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Direction
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="bd-example flex-container">
                                <div className="flex flex-row mb-4">
                                    <div className="p-2">Flex item 1</div>
                                    <div className="p-2">Flex item 2</div>
                                    <div className="p-2">Flex item 3</div>
                                </div>
                                <div className="flex flex-row-reverse">
                                    <div className="p-2">Flex item 1</div>
                                    <div className="p-2">Flex item 2</div>
                                    <div className="p-2">Flex item 3</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Direction flex-col and flex-col-reverse
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="bd-example flex-container mb-4">
                                <p>Direction Column</p>
                                <div className="flex flex-col mb-4">
                                    <div className="p-2">Flex item 1</div>
                                    <div className="p-2">Flex item 2</div>
                                    <div className="p-2">Flex item 3</div>
                                </div>
                                <p>Column Reverse</p>
                                <div className="flex flex-col-reverse">
                                    <div className="p-2">Flex item 1</div>
                                    <div className="p-2">Flex item 2</div>
                                    <div className="p-2">Flex item 3</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Justify content
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="bd-example flex-container mb-4">
                                <div className="flex justify-start mb-4">
                                    <div className="p-2">Flex item</div>
                                    <div className="p-2">Flex item</div>
                                    <div className="p-2">Flex item</div>
                                </div>
                                <div className="flex justify-end mb-4">
                                    <div className="p-2">Flex item</div>
                                    <div className="p-2">Flex item</div>
                                    <div className="p-2">Flex item</div>
                                </div>
                                <div className="flex justify-center mb-4">
                                    <div className="p-2">Flex item</div>
                                    <div className="p-2">Flex item</div>
                                    <div className="p-2">Flex item</div>
                                </div>
                                <div className="flex justify-between mb-4">
                                    <div className="p-2">Flex item</div>
                                    <div className="p-2">Flex item</div>
                                    <div className="p-2">Flex item</div>
                                </div>
                                <div className="flex justify-around mb-4">
                                    <div className="p-2">Flex item</div>
                                    <div className="p-2">Flex item</div>
                                    <div className="p-2">Flex item</div>
                                </div>
                                <div className="flex justify-evenly">
                                    <div className="p-2">Flex item</div>
                                    <div className="p-2">Flex item</div>
                                    <div className="p-2">Flex item</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Align items
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="bd-example flex-container mb-4">
                                <div className="flex items-start mb-4 h-[100px]">
                                    <div className="p-2">Flex item</div>
                                    <div className="p-2">Flex item</div>
                                    <div className="p-2">Flex item</div>
                                </div>
                                <div className="flex items-end mb-4 h-[100px]">
                                    <div className="p-2">Flex item</div>
                                    <div className="p-2">Flex item</div>
                                    <div className="p-2">Flex item</div>
                                </div>
                                <div className="flex items-center mb-4 h-[100px]">
                                    <div className="p-2">Flex item</div>
                                    <div className="p-2">Flex item</div>
                                    <div className="p-2">Flex item</div>
                                </div>
                                <div className="flex items-baseline mb-4 h-[100px]">
                                    <div className="p-2">Flex item</div>
                                    <div className="p-2">Flex item</div>
                                    <div className="p-2">Flex item</div>
                                </div>
                                <div className="flex items-stretch h-[100px]">
                                    <div className="p-2">Flex item</div>
                                    <div className="p-2">Flex item</div>
                                    <div className="p-2">Flex item</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Align self
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="bd-example flex-container mb-4">
                                <div className="flex mb-4 h-[100px]">
                                    <div className="p-2">Flex item</div>
                                    <div className="self-start p-2">Aligned flex item</div>
                                    <div className="p-2">Flex item</div>
                                </div>
                                <div className="flex mb-4 h-[100px]">
                                    <div className="p-2">Flex item</div>
                                    <div className="self-end p-2">Aligned flex item</div>
                                    <div className="p-2">Flex item</div>
                                </div>
                                <div className="flex mb-4 h-[100px]">
                                    <div className="p-2">Flex item</div>
                                    <div className="self-center p-2">Aligned flex item</div>
                                    <div className="p-2">Flex item</div>
                                </div>
                                <div className="flex mb-4 h-[100px]">
                                    <div className="p-2">Flex item</div>
                                    <div className="self-baseline p-2">Aligned flex item</div>
                                    <div className="p-2">Flex item</div>
                                </div>
                                <div className="flex h-[100px]">
                                    <div className="p-2">Flex item</div>
                                    <div className="self-stretch p-2">Aligned flex item</div>
                                    <div className="p-2">Flex item</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-x-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="grid gap-x-6">
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header">
                                    <div className="box-title">
                                        Align content ( Heads up! This property has no effect on single rows of flex
                                        items.)
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="bd-example flex-container mb-4">
                                        <div className="flex content-start flex-wrap mb-4 h-[200px]">
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                        </div>
                                        <div className="flex content-end flex-wrap mb-4 h-[200px]">
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                        </div>
                                        <div className="flex content-center flex-wrap mb-4 h-[200px]">
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                        </div>
                                        <div className="flex content-between flex-wrap mb-4 h-[200px]">
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                        </div>
                                        <div className="flex content-around flex-wrap mb-4 h-[200px]">
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                        </div>
                                        <div className="flex content-stretch flex-wrap mb-4 h-[200px]">
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header">
                                    <div className="box-title">
                                        Order
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="bd-example flex-container mb-4">
                                        <div className="flex flex-nowrap">
                                            <div className="order-3 p-2">First flex item</div>
                                            <div className="order-2 p-2">Second flex item</div>
                                            <div className="order-1 p-2">Third flex item</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="grid  gap-x-6">
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header">
                                    <div className="box-title">
                                        Fill
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="bd-example flex-container mb-4">
                                        <div className="flex">
                                            <div className="p-2 flex-grow">Flex item with a lot of content</div>
                                            <div className="p-2 flex-grow">Flex item</div>
                                            <div className="p-2 flex-grow">Flex item</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header">
                                    <div className="box-title">
                                        Grow and shrink
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="bd-example flex-container mb-4">
                                        <div className="flex mb-4">
                                            <div className="p-2 flex-grow">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Third flex item</div>
                                        </div>
                                        <div className="flex">
                                            <div className="p-2 w-full">Flex item</div>
                                            <div className="p-2 flex-shrink">Flex item</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header">
                                    <div className="box-title">
                                        Auto margins
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="bd-example flex-container mb-4">
                                        <div className="flex mb-4">
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                        </div>

                                        <div className="flex mb-4">
                                            <div className="me-auto p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                        </div>

                                        <div className="flex mb-4">
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="ms-auto p-2">Flex item</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header">
                                    <div className="box-title">
                                        Wrap
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="bd-example flex-container mb-4">
                                        <div className="flex flex-nowrap w-32">
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                        </div>

                                        <div className="flex flex-wrap">
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                        </div>
                                        <div className="flex flex-wrap-reverse">
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header">
                                    <div className="box-title">
                                        With items
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="bd-example flex-container mb-4">
                                        <div className="flex items-start flex-col mb-4 h-[200px]">
                                            <div className="mb-auto p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                        </div>

                                        <div className="flex items-end flex-col mb-4 h-[200px]">
                                            <div className="p-2">Flex item</div>
                                            <div className="p-2">Flex item</div>
                                            <div className="mt-auto p-2">Flex item</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
Flex.layout = "Contentlayout"

export default Flex