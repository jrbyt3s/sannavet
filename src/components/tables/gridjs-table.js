import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React from 'react';
import { Grid } from "gridjs-react";
import { Columns, Data, Data1, Data2, Data3 } from '@/shared/data/tables/gridjsdata';

const Gridjstable = () => {
    return (
        <div>
            <Seo title={"Grid JS"} />
            <Pageheader currentpage="Grid JS" activepage="Tables" mainpage="Grid JS" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Basic Table
                            </div>
                        </div>
                        <div className="box-body">
                            <div id="grid-example1">
                                <Grid
                                    data={Data}
                                    columns={['Date', 'Name', 'EMail', 'Id', 'Price', 'Quantity', 'Total']} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Table With Pagination
                            </div>
                        </div>
                        <div className="box-body">
                            <div id="grid-pagination">
                                <Grid
                                    data={Data}
                                    columns={['Date', 'Name', 'EMail', 'Id', 'Price', 'Quantity', 'Total']} pagination={{
                                        limit: 5,
                                    }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Table With Search
                            </div>
                        </div>
                        <div className="box-body">
                            <div id="grid-search">
                                <Grid
                                    data={Data}
                                    search={true}
                                    columns={['Date', 'Name', 'EMail', 'Id', 'Price', 'Quantity', 'Total']} pagination={{
                                        limit: 5,
                                    }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Table Sorting
                            </div>
                        </div>
                        <div className="box-body">
                            <div id="grid-sorting">
                                <Grid
                                    data={Data}
                                    sort={true}
                                    search={true}
                                    columns={['Date', 'Name', 'EMail', 'Id', 'Price', 'Quantity', 'Total']} pagination={{
                                        limit: 5,
                                    }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Table Loading
                            </div>
                        </div>
                        <div className="box-body">
                            <div id="grid-loading">
                                <Grid
                                    data={Data1}
                                    sort={true}
                                    search={true}
                                    columns={['Date', 'Name', 'EMail', 'Id', 'Price', 'Quantity', 'Total']} pagination={{
                                        limit: 5,
                                    }}
                                    loading={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Wide Table
                            </div>
                        </div>
                        <div className="box-body">
                            <div id="grid-wide">
                                <Grid
                                    data={Data2}
                                    sort={true}
                                    columns={['Date', 'Name', 'EMail', 'Order Id', 'Product', 'Category', 'Price', 'Quantity', 'Total']} pagination={{
                                        limit: 5,
                                    }}
                                    wide={true}
                                    resizable={true}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Fixed Header
                            </div>
                        </div>
                        <div className="box-body">
                            <div id="grid-header-fixed">
                                <div className='table-responsive'>
                                    <Grid
                                        data={Data3}
                                        sort={true}
                                        search={true}
                                        fixedHeader={true}
                                        height='350px'
                                        columns={['Date', 'Name', 'EMail', 'Id', 'Price', 'Quantity', 'Total']} pagination={{
                                            limit: 8,
                                        }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Hidden Columns
                            </div>
                        </div>
                        <div className="box-body">
                            <div id="grid-hidden-column">
                                <Grid
                                    data={Data}
                                    sort={true}
                                    search={true}
                                    columns={Columns} pagination={{
                                        limit: 5,
                                    }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
Gridjstable.layout = "Contentlayout"

export default Gridjstable