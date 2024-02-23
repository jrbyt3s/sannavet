import { BasicTable, ResponsiveDataTable, Savetable, columns, data } from '@/shared/data/tables/datatabledata';
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { useState } from 'react';
import { ReactTabulator } from 'react-tabulator';

const Datatable = () => {

  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(10);
  const [totalPages] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <Seo title={"Data Tables"} />
      <Pageheader currentpage="Data Tables" activepage="Tables" mainpage="Data Tables" />
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Basic DataTable</h5>
            </div>
            <div className="box-body">
              <div className="overflow-auto table-bordered p-3">
                <div id="basic-table" className="ti-custom-table ti-striped-table ti-custom-table-hover">
                  <BasicTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Sortable DataTable</h5>
            </div>
            <div className="box-body space-y-3">
              <div className="overflow-hidden table-bordered">
                <div id="sort-table" className="ti-custom-table ti-striped-table ti-custom-table-hover">
                  <ReactTabulator className="table-hover table-bordered"
                    data={data}
                    columns={columns}
                    options={{
                      pagination: 'local',
                      paginationSize: pageSize,
                      paginationSizeSelector: [10, 20, 50, 100], // Define available page sizes
                      paginationInitialPage: currentPage,
                      paginationButtonCount: 5, // Number of pagination buttons to display
                      paginationDataReceived: { last_page: totalPages },
                      paginationDataSent: { page: currentPage, size: pageSize }
                    }}
                    onPageChange={(data) => handlePageChange(data.page)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12">
          <div className="box">
            <div className="box-header">
              <h5 className="box-title">Responsive DataTable</h5>
            </div>
            <div className="box-body space-y-3">
              <div className="overflow-hidden">
                <div id="reactivity-table" className="ti-custom-table ti-striped-table ti-custom-table-hover">
                  <ResponsiveDataTable />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
Datatable.layout = "Contentlayout"

export default Datatable