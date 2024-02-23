import { Fragment } from "react";
import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from "react-table";

//1Basic datatables

export const COLUMNS = [
  {
    Header: "Name",
    accessor: "Name",
  },
  {
    Header: "Position",
    accessor: "Position",
  },
  {
    Header: "Office",
    accessor: "Office",
  },
  {
    Header: "Age",
    accessor: "Age",
  },
  {
    Header: "Start date",
    accessor: "date",
  },
  {
    Header: "Salary",
    accessor: "Salary",
  },
];
export const DATATABLE = [
  {
    Id: "1",
    Name: "Tiger Nixon",
    Position: "System Architect",
    Office: "Edinburgh",
    Age: "61",
    date: "2011-04-25",
    Salary: "$320,800",
  },
  {
    Id: "2",
    Name: "Garrett Winters",
    Position: "Accountant",
    Office: "Tokyo",
    Age: "63",
    date: "2011-07-25",
    Salary: "$170,750",
  },
  {
    Id: "3",
    Name: "Ashton Cox",
    Position: "Junior Technical Author",
    Office: "San Francisco",
    Age: "66",
    date: "2009-01-12",
    Salary: "$86,000",
  },
  {
    Id: "4",
    Name: "Cedric Kelly",
    Position: "Senior Javascript Developer",
    Office: "Edinburgh",
    Age: "22",
    date: "2012-03-29",
    Salary: "$433,060",
  },
  {
    Id: "5",
    Name: "Airi Satou",
    Position: "Accountant",
    Office: "Tokyo",
    Age: "33",
    date: "2010-10-14",
    Salary: "$162,700",
  },
  {
    Id: "6",
    Name: "Brielle Williamson",
    Position: "Integration Specialist",
    Office: "New York",
    Age: "61",
    date: "2009-09-15",
    Salary: "$372,000",
  },
  {
    Id: "7",
    Name: "Herrod Chandler",
    Position: "Sales Assistant",
    Office: "San Francisco",
    Age: "59",
    date: "2008-12-13",

    Salary: "$137,500",
  },

  {
    Id: "8",
    Name: "Rhona Davidson",
    Position: "Integration Specialist",
    Office: "Tokyo",
    Age: "55",
    date: "2008-12-19",
    Salary: "$327,900",
  },
  {
    Id: "9",
    Name: "Colleen Hurst",
    Position: "Javascript Developer",
    Office: "San Francisco",
    Age: "39",
    date: "2013-03-03",
    Salary: "$205,500",
  },
  {
    Id: "10",
    Name: "Sonya Frost",
    Position: "Software Engineer",
    Office: "Edinburgh",
    Age: "23",
    date: "2013-03-03",
    Salary: "$103,600",
  },
  {
    Id: "11",
    Name: "Jena Gaines",
    Position: "Office Manager",
    Office: "London",
    Age: "30",
    date: "2008-10-16",
    Salary: "$90,560",
  },
  {
    Id: "12",
    Name: "Quinn Flynn",
    Position: "Support Lead",
    Office: "Edinburgh",
    Age: "22",
    date: "2012-12-18",
    Salary: "$342,000",
  },
  {
    Id: "13",
    Name: "Charde Marshall",
    Position: "Regional Director",
    Office: "San Francisco",
    Age: "36",
    date: "2010-06-09",
    Salary: "$470,600",
  },
  {
    Id: "14",
    Name: "Haley Kennedy",
    Position: "Senior Marketing Designer",
    Office: "London",
    Age: "43",
    date: "2009-04-10",
    Salary: "$313,500",
  },
  {
    Id: "15",
    Name: "Tatyana Fitzpatrick",
    Position: "Regional Director",
    Office: "London",
    Age: "19",
    date: "2012-10-13",
    Salary: "$385,750",
  },
  {
    Id: "16",
    Name: "Michael Silva",
    Position: "Marketing Designer",
    Office: "London",
    Age: "66",
    date: "2012-09-26",
    Salary: "$198,500",
  },
  {
    Id: "17",
    Name: "Paul Byrd",
    Position: "Chief Financial Officer (CFO)",
    Office: "New York",
    Age: "64",
    date: "2011-09-03",
    Salary: "$725,000",
  },
  {
    Id: "18",
    Name: "Gloria Little",
    Position: "Systems Administrator",
    Office: "New York",
    Age: "59",
    date: "2009-06-25",
    Salary: "$237,500",
  },
  {
    Id: "19",
    Name: "Bradley Greer",
    Position: "Software Engineer",
    Office: "London",
    Age: "41",
    date: "2011-12-12",
    Salary: "$132,000",
  },
  {
    Id: "20",
    Name: "Dai Rios",
    Position: "Personnel Lead",
    Office: "Edinburgh",
    Age: "35",
    date: "2010-09-20",
    Salary: "$217,500",
  },
  {
    Id: "21",
    Name: "Jenette Caldwell",
    Position: "Development Lead",
    Office: "New York",
    Age: "30",
    date: "2009-10-09",
    Salary: "$345,000",
  },
  {
    Id: "22",
    Name: "Yuri Berry",
    Position: "Chief Marketing Officer (CMO)",
    Office: "New York",
    Age: "40",
    date: "2010-12-22",
    Salary: "$675,000",
  },
  {
    Id: "23",
    Name: "Caesar Vance",
    Position: "Pre-Sales Support",
    Office: "New York",
    Age: "21",
    date: "2010-11-14",
    Salary: "$106,450",
  },
  {
    Id: "24",
    Name: "Doris Wilder",
    Position: "Sales Assistant",
    Office: "Sidney",
    Age: "23",
    date: "2011-06-07",
    Salary: "$85,600",
  },
  {
    Id: "25",
    Name: "Angelica Ramos",
    Position: "Chief Executive Officer (CEO)",
    Office: "London",
    Age: "47",
    date: "2010-03-11",
    Salary: "$1,200,000",
  },
  {
    Id: "26",
    Name: "Gavin Joyce",
    Position: "Developer",
    Office: "Edinburgh",
    Age: "42",
    date: "2011-08-14",
    Salary: "$92,575",
  },
  {
    Id: "27",
    Name: "Jennifer Chang",
    Position: "Regional Director",
    Office: "Singapore",
    Age: "28",
    date: "2011-05-07",
    Salary: "$357,650",
  },
  {
    Id: "28",
    Name: "Brenden Wagner",
    Position: "Software Engineer",
    Office: "San Francisco",
    Age: "28",
    date: "2011-08-14",
    Salary: "$206,850",
  },
  {
    Id: "29",
    Name: "Fiona Green",
    Position: "Chief Operating Officer (COO)",
    Office: "San Francisco",
    Age: "48",
    date: "2009-10-09",
    Salary: "$850,000",
  },
  {
    Id: "30",
    Name: "Shou Itou",
    Position: "Regional Marketing",
    Office: "Tokyo",
    Age: "20",
    date: "2011-09-03",
    Salary: "$163,000",
  },
  {
    Id: "31",
    Name: "Michelle House",
    Position: "Integration Specialist",
    Office: "Sidney",
    Age: "37",
    date: "2011-04-25",
    Salary: "$95,400",
  },
  {
    Id: "32",
    Name: "Suki Burks",
    Position: "Developer",
    Office: "London",
    Age: "53",
    date: "2012-11-27",
    Salary: "$114,500",
  },
  {
    Id: "33",
    Name: "Prescott Bartlett",
    Position: "Technical Author",
    Office: "London",
    Age: "27",
    date: "2009-06-25",
    Salary: "$145,000",
  },
  {
    Id: "34",
    Name: "Gavin Cortez",
    Position: "Team Leader",
    Office: "San Francisco",
    Age: "22",
    date: "2008-11-13",
    Salary: "$235,500",
  },
  {
    Id: "35",
    Name: "Martena Mccray",
    Position: "Post-Sales support",
    Office: "Edinburgh",
    Age: "46",
    date: "2013-02-01",
    Salary: "$324,050",
  },
  {
    Id: "36",
    Name: "Unity Butler",
    Position: "Marketing Designer",
    Office: "San Francisco",
    Age: "47",
    date: "2012-09-26",
    Salary: "$85,675",
  },
  {
    Id: "37",
    Name: "Howard Hatfield",
    Position: "Office Manager",
    Office: "San Francisco",
    Age: "51",
    date: "2011-06-02",
    Salary: "$164,500",
  },
  {
    Id: "38",
    Name: "Hope Fuentes",
    Position: "Secretary",
    Office: "San Francisco",
    Age: "41",
    date: "2008-10-26",
    Salary: "$109,850",
  },
  {
    Id: "39",
    Name: "Vivian Harrell",
    Position: "Financial Controller",
    Office: "San Francisco",
    Age: "62",
    date: "2009-02-14",

    Salary: "$452,500",
  },
  {
    Id: "40",
    Name: "Timothy Mooney",
    Position: "Office Manager",
    Office: "London",
    Age: "37",
    date: "2008-12-16",
    Salary: "$136,200",
  },
  {
    Id: "41",
    Name: "Jackson Bradshaw",
    Position: "Director",
    Office: "New York",
    Age: "65",
    date: "2009-10-22",
    Salary: "$645,750",
  },
  {
    Id: "42",
    Name: "Olivia Liang",
    Position: "Support Engineer",
    Office: "Singapore",
    Age: "64",
    date: "2009-10-22",
    Salary: "$234,500",
  },
  {
    Id: "43",
    Name: "Bruno Nash",
    Position: "Software Engineer",
    Office: "London",
    Age: "38",
    date: "2008-12-11",

    Salary: "$163,500",
  },
  {
    Id: "44",
    Name: "Sakura Yamamoto",
    Position: "Support Engineer",
    Office: "Tokyo",
    Age: "37",
    date: "2010-03-11",
    Salary: "$139,575",
  },
  {
    Id: "45",
    Name: "Thor Walton",
    Position: "Developer",
    Office: "New York",
    Age: "61",
    date: "2011-05-07",
    Salary: "$98,540",
  },
  {
    Id: "46",
    Name: "Finn Camacho",
    Position: "Support Engineer",
    Office: "San Francisco",
    Age: "47",
    date: "2009-10-22",

    Salary: "$87,500",
  },
  {
    Id: "47",
    Name: "Serge Baldwin",
    Position: "Data Coordinator",
    Office: "Singapore",
    Age: "64",
    date: "2008-10-26",
    Salary: "$138,575",
  },
  {
    Id: "48",
    Name: "Zenaida Frank",
    Position: "Software Engineer",
    Office: "New York",
    Age: "63",
    date: "2009-10-09",

    Salary: "$125,250",
  },
  {
    Id: "49",
    Name: "Zorita Serrano",
    Position: "Software Engineer",
    Office: "San Francisco",
    Age: "56",
    date: "2011-05-07",
    Salary: "$115,000",
  },
  {
    Id: "50",
    Name: "Jennifer Acosta",
    Position: "Junior Javascript Developer",
    Office: "Edinburgh",
    Age: "43",
    date: "2011-06-07",
    Salary: "$75,650",
  },
  {
    Id: "51",
    Name: "Cara Stevens",
    Position: "Sales Assistant",
    Office: "New York",
    Age: "46",
    date: "2009-02-14",

    Salary: "$145,600",
  },
  {
    Id: "52",
    Name: "Hermione Butler",
    Position: "Regional Director",
    Office: "London",
    Age: "47",
    date: "2011-03-09",

    Salary: "$356,250",
  },
  {
    Id: "53",
    Name: "Lael Greer",
    Position: "Systems Administrator",
    Office: "London",
    Age: "21",
    date: "2009-02-14",

    Salary: "$103,500",
  },
  {
    Id: "54",
    Name: "Jonas Alexander",
    Position: "Developer",
    Office: "San Francisco",
    Age: "30",
    date: "2011-12-06",

    Salary: "$86,500",
  },
  {
    Id: "55",
    Name: "Shad Decker",
    Position: "Regional Director",
    Office: "Edinburgh",
    Age: "51",
    date: "2011-03-21",

    Salary: "$183,000",
  },
  {
    Id: "56",
    Name: "Michael Bruce",
    Position: "Javascript Developer",
    Office: "Singapore",
    Age: "29",
    date: "2009-02-27",

    Salary: "$183,000",
  },
  {
    Id: "57",
    Name: "Donna Snider",
    Position: "Customer Support",
    Office: "New York",
    Age: "27",
    date: "2010-07-14",
    Salary: "$112,000",
  },
  {
    Id: "58",
    Name: "Fiona Green",
    Position: "Chief Operating Officer (COO)",
    Office: "San Francisco",
    Age: "48",
    date: "2008-11-13",
    Salary: "$850,000",
  },
  {
    Id: "59",
    Name: "Shou Itou",
    Position: "Regional Marketing",
    Office: "Tokyo",
    Age: "20",
    date: "2011-06-27",
    Salary: "$163,000",
  },
  {
    Id: "60",
    Name: "Prescott Bartlett",
    Position: "Technical Author",
    Office: "London",
    Age: "27",
    date: "2011-01-25",
    Salary: "$145,000",
  },
];
export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <span className="ms-auto">
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className="form-control !w-auto"
        placeholder="Search..."
      />
    </span>
  );
};
export const BasicTable = () => {
  const tableInstance = useTable(
    {
      columns: COLUMNS,
      data: DATATABLE,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <div className=" mb-4 flex">
        <select
          className="selectpage border me-1"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 25, 50].map((pageSize) => (
            <option key={Math.random()} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
      </div>
      <table
        {...getTableProps()}
        className="table table-hover mb-0 table-bordered"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={Math.random()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  className={column.className}
                  key={Math.random()}
                >
                  <span className="tabletitle">{column.render("Header")}</span>
                  <span>
                    {column.isSorted ? (
                      column.isSortedDesc ? (
                        <i className="fa fa-angle-down"></i>
                      ) : (
                        <i className="fa fa-angle-up"></i>
                      )
                    ) : (
                      ""
                    )}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row);
            return (
              <Fragment key={Math.random()}>
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        className="borderrigth"
                        {...cell.getCellProps()}
                        key={Math.random()}
                      >
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              </Fragment>
            );
          })}
        </tbody>
      </table>
      <div className="block sm:flex items-center mt-4">
        <div className="">
          Page{" "}
          <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{" "}
        </div>
        <div className="sm:ms-auto float-right my-1 sm:my-0  ">
          <button
            variant=""
            className="btn-outline-light tablebutton me-2 sm:inline block"
            onClick={() => gotoPage(0)}
            disabled={!canPreviousPage}
          >
            {" Previous "}
          </button>
          <button
            variant=""
            className="btn-outline-light tablebutton me-2"
            onClick={() => {
              previousPage();
            }}
            disabled={!canPreviousPage}
          >
            {" << "}
          </button>
          <button
            variant=""
            className="btn-outline-light tablebutton me-2"
            onClick={() => {
              previousPage();
            }}
            disabled={!canPreviousPage}
          >
            {" < "}
          </button>
          <button
            variant=""
            className="btn-outline-light tablebutton me-2"
            onClick={() => {
              nextPage();
            }}
            disabled={!canNextPage}
          >
            {" > "}
          </button>
          <button
            variant=""
            className="btn-outline-light tablebutton me-2"
            onClick={() => {
              nextPage();
            }}
            disabled={!canNextPage}
          >
            {" >> "}
          </button>
          <button
            variant=""
            className="btn-outline-light tablebutton sm:inline block"
            onClick={() => gotoPage(pageCount - 1)}
            disabled={!canNextPage}
          >
            {" Next "}
          </button>
        </div>
      </div>
    </>
  );
};

//Sortable Table

export const data = [
  {
    id: 1,
    name: "Tiger Jackson",
    position: "System Designer",
    office: "Sed at",
    age: 41,
    salary: "$520,800",
  },
  {
    id: 2,
    name: "Vadett Summers",
    position: "UI Developer",
    office: "Japan",
    age: 28,
    salary: "$270,750",
  },
  {
    id: 3,
    name: "Lisbon Mox",
    position: "Junior Lecturer",
    office: "San Deigo",
    age: 45,
    salary: "$286,000",
  },
  {
    id: 4,
    name: "Medric Belly",
    position: "Javascript Developer",
    office: "Eden Gards",
    age: 25,
    salary: "$1,060",
  },
  {
    id: 5,
    name: "Ayri Satovu",
    position: "Senior Engineer",
    office: "Elitr stet",
    age: 25,
    salary: "$262,700",
  },
  {
    id: 6,
    name: "Billie William",
    position: "Software Engineer",
    office: "Paris",
    age: 52,
    salary: "$472,000",
  },
  {
    id: 7,
    name: "Merrod Sailor",
    position: "Sales Assosiative",
    office: "Sydney",
    age: 35,
    salary: "$237,500",
  },
  {
    id: 8,
    name: "Khona David",
    position: "DBMS Engineer",
    office: "France",
    age: 25,
    salary: "$427,900",
  },
  {
    id: 9,
    name: "Coolio Hornet",
    position: "Angular Developer",
    office: "Stet stet",
    age: 39,
    salary: "$205,500",
  },
  {
    id: 10,
    name: "Sonia Fraust",
    position: "Software Developer",
    office: "Magna lorem",
    age: 32,
    salary: "$303,600",
  },
  {
    id: 11,
    name: "Jennie Lora",
    position: "Bank Manager",
    office: "UK",
    age: 45,
    salary: "590,560",
  },
  {
    id: 12,
    name: "Flynn Hank",
    position: "Cloud Developer",
    office: "Mexico",
    age: 25,
    salary: "$442,000",
  },
  {
    id: 13,
    name: "Ricky Martin",
    position: "React Developer",
    office: "Sed sit",
    age: 48,
    salary: "$870,600",
  },
  {
    id: 14,
    name: "Halsey Kep",
    position: "Marketing Executive",
    office: "Takimata sit",
    age: 26,
    salary: "$513,500",
  },
  {
    id: 15,
    name: "Alaric Saltzman",
    position: "History Teacher",
    office: "Mystic Falls",
    age: 32,
    salary: "$385,750",
  },
  {
    id: 16,
    name: "Katherina Kat",
    position: "Event Planner",
    office: "Accusam est",
    age: 57,
    salary: "$98,500",
  },
  {
    id: 17,
    name: "Paulson Pal",
    position: "Data Analyst",
    office: "Manchester",
    age: 23,
    salary: "$325,000",
  },
  {
    id: 18,
    name: "Glory Sam",
    position: "System Administrator",
    office: "Sit Invidunt",
    age: 32,
    salary: "$337,500",
  },
  {
    id: 19,
    name: "Bradley Cooper",
    position: "Civil Engineer",
    office: "Aliquyam",
    age: 26,
    salary: "$332,000",
  },
  {
    id: 20,
    name: "Keera Dsoa",
    position: "Cloud Developer",
    office: "Sylvia",
    age: 53,
    salary: "$717,500",
  },
  {
    id: 21,
    name: "Alia Max",
    position: "Project Manager",
    office: "Old York",
    age: 26,
    salary: "$435,000",
  },
  {
    id: 22,
    name: "Yuri Gagarin",
    position: "Data Scientist",
    office: "Sun",
    age: 42,
    salary: "$989,900",
  },
  {
    id: 23,
    name: "cisaro Pals",
    position: "Sales Executive",
    office: "Kambodia",
    age: 25,
    salary: "$706,450",
  },
  {
    id: 24,
    name: "Amberson Pet",
    position: "Sales Manager",
    office: "Kidney",
    age: 25,
    salary: "$185,600",
  },
  {
    id: 25,
    name: "peter Parker",
    position: "Piolet",
    office: "Web Spal",
    age: 24,
    salary: "$900,000",
  },
];

export const columns = [
  { title: "Name", field: "name", sorter: "string" },
  { title: "Position", field: "position", sorter: "string" },
  { title: "Office", field: "office", sorter: "string" },
  { title: "Age", field: "age", sorter: "number" },
  { title: "Salary", field: "salary", sorter: "string" },
];

//Resonsive DataTable

export const ResponsiveDataTable = () => {
  const tableInstance = useTable(
    {
      columns: COLUMNS,
      data: DATATABLE,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const {
    getTableProps, // table props from react-table
    headerGroups, // headerGroups, if your table has groupings
    getTableBodyProps, // table body props from react-table
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    state,
    setGlobalFilter,
    page, // use, page or rows
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
  } = tableInstance;

  const { globalFilter, pageIndex, pageSize } = state;

  return (
    <>
      <div className="e-table">
        <div className="flex mb-4">
          <select
            className=" selectpage border me-1"
            value={pageSize}
            onChange={(e) => setPageSize(Number(e.target.value))}
          >
            {[10, 25, 50].map((pageSize) => (
              <option key={Math.random()} value={pageSize}>
                Show {pageSize}
              </option>
            ))}
          </select>
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>
        <div className="table-responsive table-bordered text-center">
          <table
            {...getTableProps()}
            className="border-top-0  table-bordered text-nowrap border-bottom"
          >
            <thead>
              {headerGroups.map((headerGroup) => (
                <tr {...headerGroup.getHeaderGroupProps()} key={Math.random()}>
                  {headerGroup.headers.map((column) => (
                    <th
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                      key={Math.random()}
                      className={column.className}
                    >
                      <span className="tabletitle">
                        {column.render("Header")}
                      </span>
                      <span>
                        {column.isSorted ? (
                          column.isSortedDesc ? (
                            <i className="fa fa-angle-down"></i>
                          ) : (
                            <i className="fa fa-angle-up"></i>
                          )
                        ) : (
                          ""
                        )}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody {...getTableBodyProps()}>
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    className="text-center"
                    {...row.getRowProps()}
                    key={Math.random()}
                  >
                    {row.cells.map((cell) => {
                      return (
                        <td {...cell.getCellProps()} key={Math.random()}>
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="block sm:flex mt-4">
          <div className="">
            Page{" "}
            <strong>
              {pageIndex + 1} of {pageOptions.length}
            </strong>{" "}
          </div>
          <div className="sm:ms-auto float-right my-1 sm:my-0 ">
            <button
              variant=""
              className="btn-outline-light tablebutton me-2 sm:inline block"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              {" Previous "}
            </button>
            <button
              variant=""
              className="btn-outline-light tablebutton me-2"
              onClick={() => {
                previousPage();
              }}
              disabled={!canPreviousPage}
            >
              {" << "}
            </button>
            <button
              variant=""
              className="btn-outline-light tablebutton me-2"
              onClick={() => {
                previousPage();
              }}
              disabled={!canPreviousPage}
            >
              {" < "}
            </button>
            <button
              variant=""
              className="btn-outline-light tablebutton me-2"
              onClick={() => {
                nextPage();
              }}
              disabled={!canNextPage}
            >
              {" > "}
            </button>
            <button
              variant=""
              className="btn-outline-light tablebutton me-2"
              onClick={() => {
                nextPage();
              }}
              disabled={!canNextPage}
            >
              {" >> "}
            </button>
            <button
              variant=""
              className="btn-outline-light tablebutton sm:inline block"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {" Next "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
const GlobalResFilter = ({ filter, setFilter }) => {
  return (
    <span className="ms-auto">
      <input
        value={filter || ""}
        onChange={(e) => setFilter(e.target.value)}
        className="form-control !w-auto"
        placeholder="Search..."
      />
    </span>
  );
};
