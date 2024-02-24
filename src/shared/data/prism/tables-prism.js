export const tabledata1 = `<div className="table-responsive">
<table className="table whitespace-nowrap min-w-full">
<thead><tr className="border-b border-defaultborder">
<th scope="col" className="text-start">Name</th>
<th scope="col" className="text-start">Created On</th>
<th scope="col" className="text-start">Number</th>
<th scope="col" className="text-start">Status</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-defaultborder">
<th scope="row" className="text-start">Mark</th>
<td>21,Dec 2021</td>
<td>+1234-12340</td>
<td><span className="badge bg-outline-primary">Completed
</span>
</td>
</tr>
<tr className="border-b border-defaultborder">
<th scope="row" className="text-start">Monika</th>
<td>29,April 2022</td><td>+1523-12459</td>
<td><span className="badge bg-outline-warning">Failed</span>
</td>
</tr>
<tr className="border-b border-defaultborder">
<th scope="row" className="text-start">Madina</th>
<td>30,Nov 2022</td>
<td>+1982-16234</td>
<td><span className="badge bg-outline-success">Successful</span>
</td>
</tr>
<tr className="border-b border-defaultborder">
<th scope="row" className="text-start">Bhamako</th>
<td>18,Mar 2022</td>
<td>+1526-10729</td>
<td><span className="badge bg-outline-secondary">Pending</span></td>
</tr>
</tbody>
</table>
</div>`

export const tabledata2 = `<div className="table-responsive">
<table className="table whitespace-nowrap table-bordered min-w-full">
<thead>
<tr className="border-b border-defaultborder">
<th scope="col" className="text-start">User</th>
<th scope="col" className="text-start">Status</th>
<th scope="col" className="text-start">Email</th>
<th scope="col" className="text-start">Action</th>
</tr></thead><tbody>{Table1data.map((idx) => 
(<tr className="border-b border-defaultborder" 
key={Math.random()}><th scope="row">
<div className="flex items-center">
<span className={&#96;avatar avatar-xs me-2
     &#36;{idx.class1} avatar-rounded&#96;}>
     <img src={idx.src} alt="img" /></span>
     {idx.name}</div>
     </th>
<td><span className={&#96;badge bg-&#36;{idx.color}/10
 text-&#36;{idx.color1}&#96;}>{idx.text}</span></td>
 <td>{idx.mail}</td>
 <td>
 <div className="hstack gap-2 flex-wrap">
 <Link aria-label="anchor" href="#" 
 className="text-info text-[.875rem] leading-none">
 <iclassName="ri-edit-line"></i></Link>
 <Link aria-label="anchor" href="#" className="text-danger
  text-[.875rem] leading-none"><iclassName="ri-delete-bin-5-line">
  </i></Link></div></td></tr>))}
  </tbody>
  </table>
  </div>`

export const tabledata3 = `<div className="box-body">
<div className="table-responsive">
<table className="table whitespace-nowrap table-bordered 
table-bordered-primary border-primary/10 min-w-full">
<thead><tr className="border-b border-primary/10">
<th scope="col" className="text-start">Order</th>
<th scope="col" className="text-start">Date</th>
<th scope="col" className="text-start">Customer</th>
<th scope="col" className="text-start">Action</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-primary/10">
<th scope="row" className="text-start">#0007
</th>
<td><span className="badge bg-light text-dark">
26-04-2022</span>
</td>
<td>
<div className="flex items-center">
<span className="avatar avatar-xs me-2 online 
avatar-rounded"><img src="../../../assets/images/faces/3.jpg" 
alt="img" /></span>Mayor Kelly</div>
</td>
<td>
<span className="badge bg-primary/10 text-primary">
Booked</span>
</td>
</tr>
<tr className="border-b border-primary/10">
<th scope="row" className="text-start">#0008
</th><td><span className="badge bg-light
 text-dark">15-02-2022</span>
 </td>
 <td><div className="flex items-center">
 <span className="avatar avatar-xs me-2 
 online avatar-rounded">
 <img src="../../../assets/images/faces/6.jpg" 
 alt="img" /></span>Wicky Kross</div>
 </td>
 <td>
 <span className="badge bg-primary/10 text-primary">Booked</span>
 </td></tr><tr><th scope="row" className="text-start">#0009</th>
 <td><span className="badge bg-light text-dark">23-05-2022</span>
 </td><td><div className="flex items-center">
 <span className="avatar avatar-xs me-2 online avatar-rounded">
 <img src="../../../assets/images/faces/1.jpg" alt="img" /></span>
 Julia Cam</div></td><td>
 <span className="badge bg-primary/10 text-primary">
 Booked</span></td></tr>
 </tbody>
 </table>
 </div>
 </div>`

export const tabledata4 = `<div className="box-body">
<div className="table-responsive">
<table className="table whitespace-nowrap table-bordered 
table-bordered-success min-w-full">
<thead>
<tr className="border-b border-success/10">
<th scope="col" className="text-start">Order</th>
<th scope="col" className="text-start">Date</th>
<th scope="col" className="text-start">Customer</th>
<th scope="col" className="text-start">Status</th>
</tr>
</thead>
<tbody>
<tr className="border-b 
border-success/10">
<th scope="row" className="text-start">#0011</th>
<td><span className="badge bg-light text-dark">
07-01-2022</span></td>
<td><div className="flex items-center">
<span className="avatar avatar-xs me-2 online
 avatar-rounded"><img src="../../../assets/images/faces/10.jpg" 
 alt="img" /></span>Helsenky</div>
 </td>
 <td>
 <span className="badge bg-success/10 text-success">
 Delivered</span></td>
 </tr>
 <tr className="border-b border-success/10">
 <th scope="row" className="text-start">#0012</th>
 <td><span className="badge bg-light text-dark">
 18-05-2022</span></td><td>
 <div className="flex items-center">
 <span className="avatar avatar-xs me-2 online avatar-rounded">
 <img src="../../../assets/images/faces/14.jpg" alt="img" />
 </span>Brodus</div>
 </td>
 <td><span className="badge bg-success/10
  text-success">Delivered</span>
</td>
</tr>
<tr><th scope="row" className="text-start">#0013</th>
<td><span className="badge bg-light text-dark">
19-03-2022</span>
</td>
<td><div className="flex items-center">
<span className="avatar avatar-xs me-2 online avatar-rounded">
<img src="../../../assets/images/faces/12.jpg" alt="img" />
</span>Chikka Alen</div>
</td>
<td>
<span className="badge bg-success/10 text-success">Delivered
</span></td></tr>
</tbody>
</table>
</div>
</div>`

export const tabledata5 = `<div className="box-body">
<div className="table-responsive">
<table className="table whitespace-nowrap 
table-bordered table-bordered-warning min-w-full">
<thead><tr className="border-b border-warning/10">
<th scope="col" className="text-start">Order</th>
<th scope="col" className="text-start">Date</th>
<th scope="col" className="text-start">Customer</th>
<th scope="col" className="text-start">Action</th>
</tr></thead><tbody><tr className="border-b
 border-warning/10"><th scope="row" 
 className="text-start">#0014</th>
 <td>
 <span className="badge bg-light text-dark">
 21-02-2022</span></td>
 <td>
 <div className="flex items-center">
 <span className="avatar avatar-xs me-2 online
  avatar-rounded">
  <img src="../../../assets/images/faces/13.jpg" alt="img" />
  </span>Sukuro Kim
  </div>
  </td>
  <td>
  <span className="badge bg-warning/10 text-warning">Accepted</span>
  </td></tr><tr className="border-b border-warning/10">
  <th scope="row" className="text-start">#0018</th>
  <td><span className="badge bg-light text-dark">26-03-2022</span>
  </td><td><div className="flex items-center">
  <span className="avatar avatar-xs me-2 online avatar-rounded">
  <img src="../../../assets/images/faces/11.jpg" alt="img" />
  </span>Alex Carey</div></td><td>
  <span className="badge bg-warning/10 text-warning">
  Accepted</span></td>
  </tr>
  <tr>
  <th scope="row" className="text-start">#0020</th><td>
  <span className="badge bg-light text-dark">14-03-2022</span>
  </td><td><div className="flex items-center">
  <span className="avatar avatar-xs me-2 online avatar-rounded">
  <img src="../../../assets/images/faces/2.jpg" alt="img" />
  </span>Pamila Anderson</div></td><td>
  <span className="badge bg-warning/10 text-warning">Accepted</span>
  </td>
  </tr>
  </tbody>
  </table>
  </div>
  </div>`

export const tabledata6 = `<div className="table-responsive">
<table className="table whitespace-nowrap table-borderless 
min-w-full"><thead><tr><th scope="col" className="text-start">
User Name</th><th scope="col" className="text-start">
Transaction Id</th><th scope="col" className="text-start">
Created</th><th scope="col" className="text-start">
Status</th></tr></thead><tbody>
<tr>
<th scope="row" className="text-start">
Harshrath</th><td>#5182-3467</td>
<td>24 May 2022</td>
<td>
<span className="badge bg-primary text-white">
Fixed</span></td></tr>
<tr>
<th scope="row" className="text-start">
Zozo Hadid</th><td>#5182-3412</td>
<td>02 July 2022</td>
<td>
<span className="badge bg-warning  text-white">
In Progress</span>
</td>
</tr>
<tr>
<th scope="row" className="text-start">
Martiana</th>
<td>#5182-3423</td>
<td>15 April 2022</td>
<td><span className="badge bg-success  text-white">
Completed</span></td>
</tr>
<tr><th scope="row" className="text-start">
Alex Carey</th>
<td>#5182-3456</td>
<td>17 March 2022</td>
<td><span className="badge bg-danger  
text-white">Pending</span></td>
</tr>
</tbody>
</table>
</div>`

export const tabledata7 = `<div className="table-responsive">
<table className="table whitespace-nowrap min-w-full ">
<thead>
<tr><th scope="col" className="text-start">
Product</th><th scope="col" className="text-start">
Seller</th><th scope="col" className="text-start">
Sale Percentage</th><th scope="col" className="text-start">
Qunatity Sold</th></tr>
</thead>
<tbody className="table-group-divider dark:border-defaultborder/10">
<tr className="border-b border-defaultborder">
<th scope="row" className="text-start">
Smart Watch</th><td>Slowtrack.inc</td>
<td>
<Link href="#" className="text-success">24.23%
<i className="ri-arrow-up-fill ms-1"></i></Link></td>
<td>250/1786</td></tr>
<tr className="border-b border-defaultborder">
<th scope="row" className="text-start">White Sneakers</th>
<td>American &amp; Co.inc</td>
<td><Link href="#" className="text-danger">12.45%
<i className="ri-arrow-down-fill ms-1"></i></Link></td><
td>123/985</></tr><tr className="border-b border-defaultborder">
<th scope="row" className="text-start">Baseball Bat</th>
<td>
Sports Company</td><td><Link href="#" className="text-success">
06.64%<iclassName="ri-arrow-up-fill ms-1"></i></Link>
</td>
<td>124/232</td>
</tr>
<tr className="border-b border-defaultborder">
<th scope="row" className="text-start">Black Hoodie
</th><td>Renonds Fabrics</td><td><Link href="#" 
className="text-success">14.42%<iclassName="ri-arrow-up-fill ms-1">
</i></Link></td><td>192/2456</td></tr>
</tbody>
</table>
</div>`

export const tabledata8 = `<div className="table-responsive">
<table className="table whitespace-nowrap ti-striped-table min-w-full">
<thead><tr className="border-b border-defaultborder">
<th scope="col" className="text-start">ID</th>
<th scope="col" className="text-start">Date</th>
<th scope="col" className="text-start">Customer</th>
<th scope="col" className="text-start">Action</th>
</tr></thead><tbody>{Table5data.map((idx) => 
(<tr className="border-b border-defaultborder" 
key={Math.random()}><th scope="row">{idx.order}</th>
<td>{idx.date}</td><td>{idx.name}</td><td><button 
type="button" className="ti-btn !py-1 !px-2 !text-[0.75rem]
 ti-btn-success-full btn-wave">
 <i className="ri-download-2-line align-middle me-2 inline-block">
 </i>Download</button></td></tr>))}
 </tbody>
 </table>
 </div>`

export const tabledata9 = `<div className="table-responsive">
<table className="table whitespace-nowrap table-striped-columns
 min-w-full"><thead><tr className="border-b border-defaultborder">
 <th scope="col" className="text-start">ID</th><th scope="col"
  className="text-start">Date</th><th scope="col" className="text-start">
  Customer</th><th scope="col" className="text-start">Action</th></tr>
  </thead><tbody>{Table5data.map((idx) =>
<tr className="border-b border-defaultborder " key={Math.random()}>
th scope="row">{idx.order}</th><td>{idx.date}</td><td>{idx.name}
/td>
td><button type="button" className="ti-btn !py-1 !px-2 !text-[0.75rem]
ti-btn-danger-full btn-wave"><i className="ri-download-2-line 
align-middle me-2 inline-block"></i>Delete</button></td>
</tr>))}</tbody>
</table>
</div>`

export const tabledata10 = `<div className="table-responsive">
<table className="table whitespace-nowrap table-primary
 !rounded-none min-w-full">
 <thead>
 <tr className="border-b border-primary/10">
 <th scope="col" className="text-start">#</th>
 <th scope="col" className="text-start">First</th>
 <th scope="col" className="text-start">Last</th>
 <th scope="col" className="text-start">Handle</th>
 </tr></thead><tbody>{Table6data.map((idx) => 
(<tr key={Math.random()}><th scope="row"
 className="text-start">{idx.id}</th>
 <td>{idx.text1}</td>
 <td>{idx.text2}</td>
 <td>{idx.text3}</td>
 </tr>))}
 </tbody>
 </table>
 </div>`

export const tabledata11 = `<div className="table-responsive">
<table className="table whitespace-nowrap table-secondary
 !rounded-none min-w-full">
 <thead>
 <tr className="border-b border-secondary/10">
 <th scope="col" className="text-start">#</th>
 <th scope="col" className="text-start">First</th>
 <th scope="col" className="text-start">Last</th>
 <th scope="col" className="text-start">Handle</th>
 </tr></thead><tbody>{Table6data.map((idx) =>
(<tr key={Math.random()}><th scope="row"
 className="text-start">{idx.id}</th><td>
 {idx.text1}</td><td>{idx.text2}</td><td>
 {idx.text3}</td></tr>))}</tbody>
 </table>
</div>`

export const tabledata12 = `  <div className="table-responsive">
<table className="table whitespace-nowrap table-warning 
!rounded-none min-w-full"><thead><tr className="border-b
 border-warning/10"><th scope="col" className="text-start">
 #</th><th scope="col" className="text-start">First</th>
 <th scope="col" className="text-start">Last</th>
 <th scope="col" className="text-start">Handle</th>
 </tr></thead><tbody>{Table6data.map((idx) => 
(<tr key={Math.random()}><th scope="row" 
className="text-start">{idx.id}</th><td>{idx.text1}
</td><td>{idx.text2}</td><td>{idx.text3}</td></tr>))}
</tbody>
</table>
</div>`

export const tabledata13 = `<div className="table-responsive">
<table className="table whitespace-nowrap table-danger  
!rounded-none min-w-full"><thead><tr className="border-b
 border-danger/10"><th scope="col" className="text-start">#</th>
 <th scope="col" className="text-start">First</th>
 <th scope="col" className="text-start">Last</th>
 <th scope="col" className="text-start">Handle</th>
 </tr>
 </thead>
 <tbody>{Table6data.map((idx) => (<tr key={Math.random()}>
 <th scope="row" className="text-start">{idx.id}</th><td>
 {idx.text1}</td><td>{idx.text2}</td><td>{idx.text3}</td>
 </tr>))}
 </tbody>
 </table>
 </div>`

export const tabledata14 = `<div className="table-responsive">
<table className="table whitespace-nowrap table-dark 
!rounded-none min-w-full">
<thead>
<tr className="border-b border-black/10 
dark:border-black/[0.025];"><th scope="col" 
className="text-start">#</th>
<th scope="col" className="text-start">First</th>
<th scope="col" className="text-start">Last</th>
<th scope="col" className="text-start">Handle</th>
</tr></thead><tbody>{Table6data.map((idx) => 
    (<tr key={Math.random()}><th scope="row"
     className="text-start">{idx.id}</th><td>
     {idx.text1}</td><td>{idx.text2}</td><td>
     {idx.text3}</td></tr>))}</tbody>
     </table>
</div>`

export const tabledata15 = `<div className="table-responsive">
<table className="table whitespace-nowrap table-success 
table-striped  !rounded-none min-w-full">
<thead><tr className="border-b border-success/10">
<th scope="col" className="text-start">#</th>
<th scope="col" className="text-start">First</th>
<th scope="col" className="text-start">Last</th>
<th scope="col" className="text-start">Handle</th>
</tr></thead><tbody>{Table6data.map((idx) => 
(<tr key={Math.random()}><th scope="row" 
className="text-start">{idx.id}</th><td>
{idx.text1}</td><td>{idx.text2}</td><td>
{idx.text3}</td></tr>))}</tbody></table>
</div>`

export const tabledata16 = `<div className="table-responsive">
<table className="table whitespace-nowrap table-hover min-w-full 
ti-custom-table-hover"><thead>
<tr className="border-b border-defaultborder">
<th scope="col" className="text-start">Product Manager</th>
<th scope="col" className="text-start">Category</th>
<th scope="col" className="text-start">Team</th>
<th scope="col" className="text-start">Status</th>
</tr></thead><tbody><tr className="border-b border-defaultborder">
<td><div className="flex items-center">
<div className="avatar avatar-sm me-2 avatar-rounded">
<img src="../../../assets/images/faces/10.jpg" alt="img" />
</div><div><div className="leading-none"><span>Joanna Smith</span>
</div>
<div className="leading-none">
<spanclassName="text-[0.6875rem] text-[#8c9097] 
dark:text-white/50">joannasmith14@gmail.com</span>
</div>
</div>
</div>
</td>
<td>
<span className="badge bg-primary/10 text-primary">Fashion</span>
</td><td><div className="avatar-list-stacked">
<span className="avatar avatar-sm avatar-rounded">
<img src="../../../assets/images/faces/2.jpg" alt="img" />
</span><span className="avatar avatar-sm avatar-rounded">
<img src="../../../assets/images/faces/8.jpg" alt="img" />
</span><span className="avatar avatar-sm avatar-rounded">
<img src="../../../assets/images/faces/2.jpg" alt="img" />
</span><Link className="avatar avatar-sm bg-primary text-white 
avatar-rounded"href="#">+5</Link></div></td><td>
<div className="progress progress-xs">
<div className="progress-bar bg-primary w-[52%]" 
aria-valuenow="52" aria-valuemin="0"aria-valuemax="100">
</div>
</div>
</td>
</tr>
<tr className="border-b border-defaultborder">
<td><div className="flex items-center">
<div className="avatar avatar-sm me-2 avatar-rounded">
<img src="../../../assets/images/faces/2.jpg" alt="img" />
</div><div><div className="leading-none"><span>Kara Kova</span>
</div><div className="leading-none"><spanclassName="text-[0.6875rem]
 text-[#8c9097] dark:text-white/50">milesakara@gmail.com</span>
 </div></div></div></td><td><span className="badge bg-warning/10 
 text-warning">Clothing</span></td>
 <td><div className="avatar-list-stacked"><span className="avatar 
 avatar-sm avatar-rounded">
 <img src="../../../assets/images/faces/4.jpg" alt="img" /></span>
 <span className="avatar avatar-sm avatar-rounded">
 <img src="../../../assets/images/faces/6.jpg" alt="img" />
 </span><Link className="avatar avatar-sm bg-primary text-white 
 avatar-rounded"href="#">+6</Link></div></td>
 <td>
 <div className="progress progress-xs">
 <div className="progress-bar bg-primary w-2/5"
  aria-valuenow="40" aria-valuemin="0"aria-valuemax="100">
  </div>
  </div>
  </td>
  </tr><tr className="border-b border-defaultborder ">
  <td><div className="flex items-center">
  <div className="avatar avatar-sm me-2 avatar-rounded">
  <img src="../../../assets/images/faces/16.jpg" alt="img" />
  </div><div><div className="leading-none">
  <span>Donald Trimb</span></div>
  <div className="leading-none"><spanclassName="text-[0.6875rem] 
  text-[#8c9097] dark:text-white/50">donaldo21@gmail.com</span>
  </div></div></div></td><td>
  <span className="badge bg-dark/10 text-black dark:text-white">
  Electronics</span></td><td><div className="avatar-list-stacked">
  <span className="avatar avatar-sm avatar-rounded">
  <img src="../../../assets/images/faces/1.jpg" alt="img" />
  </span><span className="avatar avatar-sm avatar-rounded">
  <img src="../../../assets/images/faces/11.jpg" alt="img" />
  </span><span className="avatar avatar-sm avatar-rounded"><
  img src="../../../assets/images/faces/15.jpg" alt="img" />
  </span><Link className="avatar avatar-sm bg-primary text-white 
  avatar-rounded"href="#">+2</Link></div></td><td>
  <div className="progress progress-xs">
  <div className="progress-bar bg-primary w-[17%]" aria-valuenow="17"
   aria-valuemin="0"aria-valuemax="100"></div>
   </div>
   </td>
   </tr>
   <tr className="border-b border-defaultborder ">
   <td><div className="flex items-center">
   <div className="avatar avatar-sm me-2 avatar-rounded">
   <img src="../../../assets/images/faces/13.jpg" alt="img" />
   </div><div><div className="leading-none">
   <span>Justin Gaethje</span></div>
   <div className="leading-none">
   <spanclassName="text-[0.6875rem] text-[#8c9097] 
   dark:text-white/50">justingae@gmail.com</span></div>
   </div>
   </div>
   </td>
   <td>
   <span className="badge bg-danger/10 text-danger">Sports</span>
   </td><td><div className="avatar-list-stacked">
   <span className="avatar avatar-sm avatar-rounded">
   <img src="../../../assets/images/faces/4.jpg" alt="img" />
   </span><span className="avatar avatar-sm avatar-rounded">
   <img src="../../../assets/images/faces/6.jpg" alt="img" />
   </span><Link className="avatar avatar-sm bg-primary
    text-white avatar-rounded"href="#">+5</Link>
    </div>
    </td>
    <td><div className="progress progress-xs">
    <div className="progress-bar bg-primary w-[72%]" aria-valuenow="72"
     aria-valuemin="0"aria-valuemax="100"></div>
</div>
</td>
</tr>
</tbody>
</table>
</div>`

export const tabledata17 = `<div className="table-responsive">
<table className="table whitespace-nowrap ti-striped-table
 table-hover min-w-full ti-custom-table-hover"><thead>
 <tr className="border-b border-defaultborder">
 <th scope="col" className="text-start">Invoice</th>
 <th scope="col" className="text-start">Customer</th>
 <th scope="col" className="text-start">Status</th>
 <th scope="col" className="text-start">Date</th>
 </tr>
 </thead><tbody><tr className="border-b border-defaultborder">
 <th scope="row">IN-2032</th><td><div className="flex items-center">
 <div className="avatar avatar-sm me-2 avatar-rounded">
 <img src="../../../assets/images/faces/15.jpg" alt="img" />
 </div><div><div className="leading-none"><span>Mark Cruise</span></div>
 <div className="leading-none"><spanclassName="text-[0.6875rem] text-[#8c9097]
  dark:text-white/50">markcruise24@gmail.com</span></div></div></div></td><td>
  <span className="badge bg-success/10 text-success"><iclassName="ri-check-fill 
  align-middle me-1"></i>Paid</span></td><td>Jul 26,2022</td></tr>
  <tr className="border-b border-defaultborder ">
  <th scope="row">IN-2022</th>
  <td><div className="flex items-center">
  <div className="avatar avatar-sm me-2 avatar-rounded">
   <img src="../../../assets/images/faces/12.jpg" alt="img" />
    </div>
    <div>
    <div className="leading-none"><span>Charanjeep</span>
    </div>
    <div className="leading-none">
    <span nclassName="text-[0.6875rem] text-[#8c9097]
     dark:text-white/50">charanjeep@gmail.in</span></div>
     </div>
     </div>
     </td>
     <td><span className="badge bg-success/10 text-success">
     <iclassName="ri-check-fill align-middle me-1"></i>Paid</span>
     </td>
     <td>Mar 14,2022</td>
     </tr>
     <tr className="border-b border-defaultborder">
     <th scope="row">IN-2014</th>
     <td>
     <div className="flex items-center">
     <div className="avatar avatar-sm me-2 avatar-rounded">
     <img src="../../../assets/images/faces/5.jpg" alt="img" />
     </div>
     <div>
     <div className="leading-none"><span>
     Samantha Julie</span>
     </div>
     <div className="leading-none"><span className="text-[0.6875rem] 
     text-[#8c9097] dark:text-white/50">julie453@gmail.com</span></div>
     </div>
     </div>
     </td>
<td><span className="badge bg-danger/10 text-danger">
<iclassName="ri-close-fill align-middle me-1"></i>Cancelled</span>
</td><td>Feb 1,2022</td></tr><tr className="border-b border-defaultborder">
<th scope="row">IN-2036</th><td><div className="flex items-center">
<div className="avatar avatar-sm me-2 avatar-rounded">
<img src="../../../assets/images/faces/11.jpg" alt="img" />
</div><div><div className="leading-none"><span>Simon Cohen</span>
</div><div className="leading-none"><span className="text-[0.6875rem]
 text-[#8c9097] dark:text-white/50">simon@gmail.com</span></div>
 </div>
 </div>
 </td>
 <td><span className="badge bg-light text-black dark:text-white">
 <iclassName="ri-reply-line align-middle me-1"></i>Refunded</span></td>
 <td>Apr 24,2022</td>
 </tr>
 </tbody>
 </table>
 </div>`

export const tabledata18 = `<div className="table-responsive">
<table className="table whitespace-nowrap min-w-full">
<thead className="bg-primary/10">
<tr className="border-b border-primary/10">
<th scope="col" className="text-start">User Name</th>
<th scope="col" className="text-start">Transaction Id</th>
<th scope="col" className="text-start">Created</th>
<th scope="col" className="text-start">Status</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-primary/10">
<th scope="row" className="text-start">Harshrath</th>
<td>#5182-3467</td>
<td>24 May 2022</td>
<td>
<div className="hstack flex gap-3 text-[.9375rem]">
<Link aria-label="anchor" href="#"
className="ti-btn ti-btn-sm ti-btn-success !rounded-full">
<iclassName="ri-download-2-line"></i></Link>
<Link aria-label="anchor" href="#"
className="ti-btn ti-btn-sm ti-btn-info !rounded-full">
<i className="ri-edit-line"></i></Link><Link aria-label="anchor"
 href="#"className="ti-btn ti-btn-sm ti-btn-danger !rounded-full">
 <i className="ri-delete-bin-line"></i>
 </Link>
 </div>
 </td>
 </tr>
 <tr className="border-b border-primary/10">
 <th scope="row" className="text-start">Zozo Hadid</th>
 <td>#5182-3412</td>
 <td>02 July 2022</td>
 <td>
 <div className="hstack flex gap-3 text-[.9375rem]">
 <Link aria-label="anchor" href="#" 
 className="ti-btn ti-btn-sm ti-btn-success !rounded-full">
 <iclassName="ri-download-2-line"></i></Link>
 <Link aria-label="anchor" href="#"className="ti-btn ti-btn-sm 
 ti-btn-info !rounded-full">
 <iclassName="ri-edit-line"></i>
 </Link>
 <Link aria-label="anchor" href="#" className="ti-btn ti-btn-sm ti-btn-danger
  !rounded-full">
  <iclassName="ri-delete-bin-line"></i>
  </Link>
  </div>
  </td>
  </tr>
  <tr className="border-b border-primary/10">
  <th scope="row" className="text-start">
  Martiana</th>
  <td>#5182-3423</td>
  <td>15 April 2022</td>
  <td><div className="hstack flex gap-3 text-[.9375rem]">
  <Link aria-label="anchor" href="#"
  className="ti-btn ti-btn-sm ti-btn-success !rounded-full">
  <iclassName="ri-download-2-line"></i></Link>
  <Link aria-label="anchor" href="#" 
  className="ti-btn ti-btn-sm ti-btn-info !rounded-full">
  <iclassName="ri-edit-line"></i></Link>
  <Link aria-label="anchor" href="#"
  className="ti-btn ti-btn-sm ti-btn-danger !rounded-full">
  <iclassName="ri-delete-bin-line"></i></Link>
  </div>
  </td></tr><tr className="border-b border-primary/10">
  <th scope="row" className="text-start">Alex Carey</th>
  <td>#5182-3456</td><td>17 March 2022</td>
  <td><div className="hstack flex gap-3 text-[.9375rem]">
  <Link aria-label="anchor" href="#" 
  className="ti-btn ti-btn-sm ti-btn-success !rounded-full">
  <iclassName="ri-download-2-line"></i></Link>
  <Link aria-label="anchor" href="#" 
  className="ti-btn ti-btn-sm ti-btn-info !rounded-full">
  <iclassName="ri-edit-line"></i></Link>
  <Link aria-label="anchor" href="#" 
  className="ti-btn ti-btn-sm ti-btn-danger !rounded-full">
  <iclassName="ri-delete-bin-line"></i></Link>
  </div>
  </td>
  </tr>
  </tbody>
  </table>
  </div>`

export const tabledata19 = `<div className="table-responsive">
<table className="table whitespace-nowrap min-w-full">
<thead className="bg-warning/10">
<tr className="border-b border-defaultborder">
<th scope="col" className="text-start">User Name</th>
<th scope="col" className="text-start">Transaction Id</th>
<th scope="col" className="text-start">Created</th>
<th scope="col" className="text-start">Status</th>
</tr></thead><tbody>{tablehead.map((idx) => 
    (<tr key={Math.random()} className="border-b border-defaultborder">
    <th scope="row"  className="text-start">{idx.name}</th>
    <td>{idx.text}</td><td>{idx.date}</td>
    <td><button type="button" 
className={&#96;ti-btn !py-1 !px-2 !text-[0.75rem] ti-btn-&#36;{idx.color}&#96;}>
{idx.btn}</button></td>
</tr>))}
</tbody>
</table>
</div>`

export const tabledata20 = `<div className="table-responsive">
<table className="table whitespace-nowrap min-w-full">
<thead className="bg-success/10"><tr className="border-b border-defaultborder">
<th scope="col" className="text-start">User Name</th>
<th scope="col" className="text-start">Transaction Id</th>
<th scope="col" className="text-start">Created</th>
<th scope="col" className="text-start">Status</th>
</tr>
</thead>
<tbody>
{tablehead.map((idx) => (<tr key={Math.random()} 
className="border-b border-defaultborder">
<th scope="row"  className="text-start">{idx.name}</th>
<td>{idx.text}</td><td>{idx.date}</td>
<td><button type="button" 
className={&#96;ti-btn !py-1 !px-2 !text-[0.75rem] ti-btn-&#36;{idx.color}&#96;}>
{idx.btn}</button>
</td></tr>))}
</tbody>
</table>
</div>`

export const tabledata21 = `<div className="table-responsive">
<table className="table whitespace-nowrap min-w-full">
<thead className="bg-info/10"><tr className="border-b border-defaultborder">
<th scope="col" className="text-start">User Name</th>
<th scope="col" className="text-start">Transaction Id</th>
<th scope="col" className="text-start">Created</th>
<th scope="col" className="text-start">Status</th>
</tr>
</thead>
<tbody>{tablehead.map((idx) => 
(<tr key={Math.random()} className="border-b border-defaultborder">
<th scope="row"  className="text-start">{idx.name}</th>
<td>{idx.text}</td>
<td>{idx.date}</td>
<td>
<button type="button"
className={&#96;ti-btn !py-1 !px-2 !text-[0.75rem] ti-btn-&#36;{idx.color}&#96;}>
{idx.btn}</button></td></tr>))}
</tbody>
</table>
</div>`

export const tabledata22 = `<div className="table-responsive">
<table className="table whitespace-nowrap min-w-full">
<thead className="bg-secondary/10">
<tr className="border-b border-defaultborder">
<th scope="col" className="text-start">
User Name</th>
<th scope="col" className="text-start">
Transaction Id</th>
<th scope="col" className="text-start">Created</th>
<th scope="col" className="text-start">Status</th>
</tr></thead><tbody>{tablehead.map((idx) => 
(<tr key={Math.random()} className="border-b border-defaultborder">
<th scope="row"  className="text-start">{idx.name}</th>
<td>{idx.text}</td><td>{idx.date}</td>
<td><button type="button" 
className={&#96;ti-btn !py-1 !px-2 !text-[0.75rem] ti-btn-&#36;{idx.color}&#96;}>
{idx.btn}</button></td></tr>))}
</tbody>
</table>
</div>`

export const tabledata23 = `<div className="table-responsive">
<table className="table whitespace-nowrap min-w-full">
<thead className="bg-danger/10"><tr className="border-b border-defaultborder">
<th scope="col" className="text-start">User Name</th>
<th scope="col" className="text-start">Transaction Id</th>
<th scope="col" className="text-start">Created</th>
<th scope="col" className="text-start">Status</th>
</tr>
</thead>
<tbody>{tablehead.map((idx) =>
     (<tr key={Math.random()} className="border-b border-defaultborder">
     <th scope="row"  className="text-start">{idx.name}</th>
     <td>{idx.text}</td><td>{idx.date}</td>
<td><button type="button" 
className={&#96;ti-btn !py-1 !px-2 !text-[0.75rem] ti-btn-&#36;{idx.color}&#96;}>
{idx.btn}</button></td>
</tr>))}
</tbody>
</table>
</div>`

export const tabledata24 = `<div className="table-responsive">
<table className="table whitespace-nowrap min-w-full">
<thead className="bg-primary/10">
<tr className="border-b border-defaultborder">
<th scope="col">S.No</th><th scope="col">Team</th>
<th scope="col">Matches Won
</th><th scope="col">Win Ratio</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-defaultborder">
<th scope="row">01</th>
<td>Manchester</td>
<td>232</td>
<td><span className="badge bg-primary text-white">
42%</span>
</td>
</tr>
<tr className="border-b border-defaultborder">
<th scope="row">02</th><td>Barcelona</td>
<td>175</td>
<td><span className="badge bg-primary text-white">58%</span>
</td>
</tr>
<tr className="border-b border-defaultborder">
<th scope="row">03</th><td>Portugal</td>
<td>126</td>
<td><span className="badge bg-primary text-white">32%</span>
</td></tr></tbody><tfoot className="bg-primary/10">
<tr className="border-b border-defaultborder">
<th scope="row">Total</th><td>United States</td>
<td>558</td><td><span className="badge bg-primary text-white">
56%</span></td>
</tr>
</tfoot>
</table>
</div>`

export const tabledata25 = `<div className="table-responsive">
<table className="table whitespace-nowrap 
min-w-full caption-bottom">
<caption>Top 3 Countries</caption>
<thead>
<tr className="border-b border-defaultborder">
<th scope="col" className="text-start">S.No</th>
<th scope="col" className="text-start">Country</th>
<th scope="col" className="text-start">Medals Won</th>
<th scope="col" className="text-start">No Of Athletes</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-defaultborder">
<th scope="row" className="text-start">01</th>
<td>United States</td>
<td>2012
<i className="ri-medal-line mx-2"></i></td>
<td>1823
</td>
</tr>
<tr className="border-b border-defaultborder">
<th scope="row" className="text-start">02</th>
<td>United Kingdom</td><td>1012
<i className="ri-medal-line mx-2"></i>
</td><td>992</td>
</tr>
<tr className="border-b border-defaultborder">
<th scope="row" className="text-start">03</th>
<td>Germany</td><td>914<i className="ri-medal-line mx-2">
</i></td>
<td>875</td>
</tr>
</tbody>
</table>
</div>`

export const tabledata26 = `<div className="table-responsive">
<table className="table whitespace-nowrap caption-top">
<caption>Top IT Companies</caption>
<thead>
<tr className="border-b border-defaultborder">
<th scope="col">S.No</th><th scope="col">Name</th>
<th scope="col">Revenue</th><th scope="col">Country</th>
</tr><thead><tbody><trclassName="border-b border-defaultborder">
<th scope="row">1</th><td>Microsoft</td><td>&#36;170 billion</td>
<td>United States</td></tr className="">
<tr className="border-b border-defaultborder">
<th scope="row">2</th><td>HP</td>
<td>&#36;72 billion</td><td>United States</td>
</tr><tr className="border-b border-defaultborder">
<thscope="row">3</thscope=><td>IBM</td>
<td>&#36;60 billion</td><td>United States</td>
</tr>
</tbody>
</table>
</div>`

export const tabledata27 = `<div className="table-responsive">
<table className="table whitespace-nowrap min-w-full">
<thead>
<tr className="border-b border-defaultborder">
<th scope="col" className="text-start">Name</th>
<th scope="col" className="text-start">Created On</th>
<th scope="col" className="text-start">Number</th>
<th scope="col" className="text-start">Status</th>
</tr></thead><tbody><tr className="table-active">
<th scope="row" className="text-start">Mark</th>
<td>21,Dec 2021</td><td>+1234-12340</td>
<td>
<span className="badge bg-primary text-white">
Completed</span></td>
</tr>
<tr className="border-b border-defaultborder">
<th scope="row" className="text-start">Monika</th>
<td>29,April 2022</td><td>+1523-12459</td>
<td><span className="badge bg-warning text-white">
Failed</span></td>
</tr>
<tr className="border-b border-defaultborder">
<th scope="row" className="text-start">Madina</th>
<td>30,Nov 2022</td><td className="table-active">
+1982-16234</td>
<td><span className="badge bg-success text-white">
Successful</span>
</td>
</tr>
<tr className="border-b border-defaultborder">
<th scope="row" className="text-start">Bhamako</th>
<td>18,Mar 2022</td>
<td>+1526-10729</td>
<td><span className="badge bg-secondary text-white">
Pending</span></td></tr>
</tbody>
</table>
</div>`

export const tabledata28 = `<div className="table-responsive">
<table className="table whitespace-nowrap table-sm min-w-full">
<thead><tr className="border-b border-defaultborder">
<th scope="col" className="text-start">Invoice</th>
<th scope="col" className="text-start">Created Date</th>
<th scope="col" className="text-start">Status</th>
<th scope="col" className="text-start">Action</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-defaultborder">
<th scope="row" className="text-start">
<div className="form-check">
<input className="form-check-input" type="checkbox" value="" 
id="checkebox-sm" checked />
<label className="form-check-label"
 htmlFor="checkebox-sm">Zelensky</label>
 </div>
 </th>
 <td>25-Apr-2021</td>
 <td>
 <span className="badge bg-success/10 text-succes">
 Paid</span></td>
 <td><div className="hstack flex gap-3 
 text-[.9375rem]"><Link aria-label="anchor" href="#" 
 className="ti-btn ti-btn-icon ti-btn-sm ti-btn-light">
 <i className="ri-download-2-line"></i></Link>
 <Link aria-label="anchor" href="#" className="ti-btn ti-btn-icon
ti-btn-sm ti-btn-light"><i className="ri-edit-line"></i>
</Link>
</div>
</td>
</tr>
<tr className="border-b border-defaultborder">
<th scope="row" className="text-start">
<div className="form-check">
<input className="form-check-input" type="checkbox"
 value="" id="checkebox-sm1" />
 <label className="form-check-label" htmlFor="checkebox-sm1">
 Kim Jong</label>
 </div>
 </th>
 <td>29-April-2022</td>
 <td><span className="badge bg-danger/10 
 text-danger">Pending</span></td>
 <td><div className="hstack flex gap-3 text-[.9375rem]">
 <Link aria-label="anchor" href="#" className="ti-btn 
 ti-btn-icon ti-btn-sm ti-btn-light">
 <i className="ri-download-2-line"></i>
 </Link><Link aria-label="anchor" href="#" 
 className="ti-btn ti-btn-icon ti-btn-sm ti-btn-light">
 <i className="ri-edit-line"></i></Link>
 </div>
 </td>
 </tr>
 <tr className="border-b border-defaultborder">
 <th scope="row" className="text-start">
 <div className="form-check">
 <input className="form-check-input" type="checkbox" 
 value="" id="checkebox-sm2" />
 <label className="form-check-label" htmlFor="checkebox-sm2">
 Obana</label></div></th><td>30-Nov-2022</td>
 <td>
 <span className="badge bg-success/10 text-success">Paid</span>
 </td><td><div className="hstack flex gap-3 text-[.9375rem]">
 <Link aria-label="anchor" href="#" className="ti-btn ti-btn-icon ti-btn-sm ti-btn-light">
 <i className="ri-download-2-line"></i></Link><Link aria-label="anchor" href="#"
className="ti-btn ti-btn-icon ti-btn-sm ti-btn-light">
<i className="ri-edit-line"></i></Link>
</div>
</td>
</tr>
<tr className="border-b border-defaultborder">
<th scope="row" className="text-start">
<div className="form-check">
<input className="form-check-input" type="checkbox" value="" id="checkebox-sm3" />
<label className="form-check-label" htmlFor="checkebox-sm3">Sean Paul</label>
</div>
</th>
<td>01-Jan-2022</td>
<td>
<span className="badge bg-success/10 text-success">
Paid</span></td>
<td><div className="hstack flex gap-3
 text-[.9375rem]"><Link aria-label="anchor" href="#" 
 className="ti-btn ti-btn-icon ti-btn-sm ti-btn-light">
 <i className="ri-download-2-line"></i></Link>
 <Link aria-label="anchor" href="#" className="ti-btn ti-btn-icon
ti-btn-sm ti-btn-light"><i className="ri-edit-line"></i></Link>
</div></td></tr><tr className="border-b border-defaultborder">
<th scope="row" className="text-start">
<div className="form-check">
<input className="form-check-input" type="checkbox" value="" 
id="checkebox-sm4" /><label className="form-check-label"
 htmlFor="checkebox-sm4">Karizma</label></div></th>
 <td>14-Feb-2022</td>
 <td><span className="badge bg-danger/10 text-danger">Pending</span>
 </td>
 <td><div className="hstack flex gap-3 text-[.9375rem]">
 <Link aria-label="anchor" href="#" className="ti-btn ti-btn-icon 
 ti-btn-sm ti-btn-light"><i className="ri-download-2-line"></i></Link>
 <Link aria-label="anchor" href="#" className="ti-btn ti-btn-icon ti-btn-sm ti-btn-light">
 <i className="ri-edit-line"></i></Link>
 </div>
 </td>
 </tr>
 </tbody>
 </table>
 </div>`

export const tabledata29 = `<div className="table-responsive">
<table className="table whitespace-nowrap min-w-full">
<thead><tr className="border-b border-defaultborder">
<th scope="col" className="text-start">Color</th>
<th scope="col" className="text-start">Client</th>
<th scope="col" className="text-start">State</th>
<th scope="col" className="text-start">Quantity</th>
<th scope="col" className="text-start">Total Price</th>
</tr></thead><tbody>{Colortables.map((idx) => 
    (<tr key={Math.random()} className={&#96;&#36;{idx.class1} 
    border-b border-defaultborder&#96;}><th scope="row">{idx.text}</th>
    <td>{idx.name}</td><td><span bg={idx.color} 
    className={&#96;badge &#36;{idx.class2}&#96;}>Processed</span>
    </td><td>{idx.quantity}</td><td>{idx.price}</td></tr>))}
    </tbody>
    </table>
    </div>`

export const tabledata30 = `<div className="table-responsive">
<table className="table whitespace-nowrap table-striped 
table-bordered min-w-full"><thead><tr className="border-b
 border-defaultborder"><th scope="col" className="text-start">
 #</th><th scope="col" className="text-start">First</th>
 <th scope="col" className="text-start">Last</th>
 <th scope="col" className="text-start">Handle</th>
 </tr>
 </thead>
 <tbody>
 <tr className="border-b border-defaultborder">
 <th scope="row" className="text-start">1</th>
 <td>Mark</td><td>Otto</td><td>@mdo</td>
 </tr>
 <tr className="border-b border-defaultborder">
 <td colSpan="4">
 <table className="table whitespace-nowrap mb-0 min-w-full">
 <thead>
 <tr className="border-b border-defaultborder">
 <th scope="col" className="text-start">Aplhabets</th>
 <th scope="col" className="text-start">Users</th>
 <th scope="col" className="text-start">Email</th>
 </tr>
 </thead>
 <tbody>
 <tr className="border-b border-defaultborder">
 <th scope="row" className="text-start">A</th>
 <td>Dino King</td><td>dinoking231@gmail.com</td>
 </tr><tr className="border-b border-defaultborder">
 <th scope="row" className="text-start">B</th>
 <td>Poppins sams</td><td>pops@gmail.com</td>
 </tr>
 <tr className="border-b border-defaultborder">
 <th scope="row" className="text-start">C</th>
 <td>Brian Shaw</td><td>swanbrian@gmail.com</td>
 </tr>
 </tbody>
 </table>
 </td>
 </tr>
 <tr className="border-b border-defaultborder">
 <th scope="row" className="text-start">3</th>
 <td>Larry</td><td>the Bird</td><td>@twitter</td>
 </tr><tr className="border-b border-defaultborder">
 <th scope="row" className="text-start">4</th><td>
 Jimmy</td><td>the Ostrich</td><td>Dummy Text</td>
 </tr><tr className="border-b border-defaultborder">
 <th scope="row" className="text-start">5</th>
 <td>Cobra Kai</td><td>the Snake</td><td>Another Name</td>
 </tr>
 </tbody>
 </table>
 </div>`

export const tabledata31 = `<div className="table-responsive">
<table className="table whitespace-nowrap min-w-full">
<thead><tr className="border-b border-defaultborder">
<th scope="col"><input className="form-check-input" 
type="checkbox" id="checkboxNoLabel" value="" aria-label="..." />
</th><th scope="col" className="text-start">Team Head</th>
<th scope="col" className="text-start">Category</th>
<th scope="col" className="text-start">Role</th>
<th scope="col" className="text-start">Gmail</th>
<th scope="col" className="text-start">Team</th>
<th scope="col" className="text-start">Work Progress</th>
<th scope="col" className="text-start">Revenue</th>
<th scope="col" className="text-start">Action</th>
</tr>
</thead>
<tbody>
<tr className="border-b border-defaultborder">
<th scope="row"><input className="form-check-input" 
type="checkbox" id="checkboxNoLabel1" value="" aria-label="..." />
</th>
<td><div className="flex items-center">
<span className="avatar avatar-xs me-2 online avatar-rounded">
<img src="../../../assets/images/faces/3.jpg" alt="img" /></span>
Mayor Kelly</div></td><td>Manufacturer</td>
<td>
<span className="badge bg-primary/10 text-primary">Team Lead</span></td>
<td>mayorkrlly@gmail.com</td>
<td><div className="avatar-list-stacked">
<span className="avatar avatar-sm avatar-rounded">
<img src="../../../assets/images/faces/2.jpg" alt="img" />
</span><span className="avatar avatar-sm avatar-rounded">
<img src="../../../assets/images/faces/8.jpg" alt="img" />
</span><span className="avatar avatar-sm avatar-rounded">
<img src="../../../assets/images/faces/2.jpg" alt="img" />
</span>
<Link className="avatar avatar-sm bg-primary text-white 
avatar-rounded" href="#">+4</Link></div></td>
<td>
<div className="progress progress-xs">
<div className="progress-bar bg-primary
 w-[52%]" aria-valuenow="52" aria-valuemin="0"
aria-valuemax="100">
</div>
</div>
</td>
<td>&#36;10,984.29</td>
<td><div className="hstack flex gap-3 text-[.9375rem]">
<Link aria-label="anchor" href="#" className="ti-btn 
ti-btn-icon ti-btn-sm ti-btn-success-full">
<i className="ri-download-2-line"></i></Link>
<Link aria-label="anchor" href="#" className="ti-btn ti-btn-icon
 ti-btn-sm ti-btn-info-full"><i className="ri-edit-line"></i></Link>
 </div>
 </td>
 </tr>
 <tr className="border-b border-defaultborder">
 <th scope="row"><input className="form-check-input"
type="checkbox" id="" value="" aria-label="..." />
</th>
<td><div className="flex items-center">
<span className="avatar avatar-xs me-2 online avatar-rounded">
<img src="../../../assets/images/faces/12.jpg" alt="img" />
</span>Andrew Garfield</div></td><td>Managing Director</td>
<td><span className="badge bg-warning/10 text-warning">
Director</span></td><td>andrewgarfield@gmail.com</td>
<td>
<div className="avatar-list-stacked">
<span className="avatar avatar-sm avatar-rounded">
<img src="../../../assets/images/faces/1.jpg" alt="img" />
</span>
<span className="avatar avatar-sm avatar-rounded">
<img src="../../../assets/images/faces/5.jpg" alt="img" />
</span>
<span className="avatar avatar-sm avatar-rounded">
<img src="../../../assets/images/faces/11.jpg" alt="img" />
</span>
<span className="avatar avatar-sm avatar-rounded">
<img src="../../../assets/images/faces/15.jpg" alt="img" />
</span>
<Link className="avatar avatar-sm bg-primary 
text-white avatar-rounded" href="#">+4</Link>
</div>
</td>
<td>
<div className="progress progress-xs">
<div className="progress-bar bg-primary w-[91%]"
 aria-valuenow="91" aria-valuemin="0" aria-valuemax="100">
 </div>
 </div>
 </td>
 <td>&#36;1.4billion</td>
 <td><div className="hstack flex gap-3 text-[.9375rem]">
 <Link aria-label="anchor" href="#" 
 className="ti-btn ti-btn-icon ti-btn-sm ti-btn-success-full">
 <i className="ri-download-2-line"></i>
 </Link>
 <Link aria-label="anchor" href="#" className="ti-btn 
 ti-btn-icon ti-btn-sm ti-btn-info-full">
 <i className="ri-edit-line"></i></Link>
 </div>
 </td>
 </tr>
 <tr className="border-b border-defaultborder">
 <th scope="row"><input className="form-check-input" 
 type="checkbox" id="checkboxNoLabel3" value="" aria-label="..." /></th>
 <td>
 <div className="flex items-center">
 <span className="avatar avatar-xs me-2 online avatar-rounded">
 <img src="../../../assets/images/faces/14.jpg" alt="img" />
 </span>Simon Cowel</div></td><td>Service Manager</td>
 <td>
 <span className="badge bg-success/10 text-success">
 Manager</span>
 </td>
 <td>simoncowel234@gmail.com</td>
 <td><div className="avatar-list-stacked">
 <span className="avatar avatar-sm avatar-rounded">
 <img src="../../../assets/images/faces/6.jpg" alt="img" />
 </span><span className="avatar avatar-sm avatar-rounded">
 <img src="../../../assets/images/faces/16.jpg" alt="img" />
 </span>
 <Link className="avatar avatar-sm bg-primary text-white
avatar-rounded" href="#">+10</Link>
</div>
</td>
<td><div className="progress progress-xs">
<div className="progress-bar bg-primary w-[45%]"
 aria-valuenow="45" aria-valuemin="0" aria-valuemax="100">
 </div></div></td><td>&#36;7,123.21</td>
 <td><div className="hstack flex gap-3 text-[.9375rem]">
 <Link aria-label="anchor" href="#" 
 className="ti-btn ti-btn-icon ti-btn-sm ti-btn-success-full">
 <i className="ri-download-2-line"></i></Link>
 <Link aria-label="anchor" href="#" className="ti-btn ti-btn-icon 
 ti-btn-sm ti-btn-info-full"><i className="ri-edit-line"></i></Link>
 </div></td></tr><tr className="border-b border-defaultborder">
 <th scope="row"><input className="form-check-input" type="checkbox"
id="checkboxNoLabel13" value="" aria-label="..." /></th>
<td><div className="flex items-center"><span className="avatar avatar-xs me-2 
  online avatar-rounded"><img src="../../../assets/images/faces/5.jpg" alt="img" />
  </span>Mirinda Hers</div></td><td>Recruiter</td><td>
  <span className="badge bg-danger/10 text-danger">Employee</span></td>
  <td>mirindahers@gmail.com</td><td><div className="avatar-list-stacked">
  <span className="avatar avatar-sm avatar-rounded">
  <img src="../../../assets/images/faces/3.jpg" alt="img" />
  </span><span className="avatar avatar-sm avatar-rounded">
  <img src="../../../assets/images/faces/10.jpg" alt="img" />
  </span><span className="avatar avatar-sm avatar-rounded">
  <img src="../../../assets/images/faces/14.jpg" alt="img" /></span>
  <Link className="avatar avatar-sm bg-primary text-white avatar-rounded"
   href="#">+6
   </Link>
   </div>
   </td>
   <td>
   <div className="progress progress-xs">
   <div className="progress-bar bg-primary w-[21%]" aria-valuenow="21" 
   aria-valuemin="0" aria-valuemax="100"></div></div></td><td>&#36;2,325.45
   </td><td><div className="hstack flex gap-3 text-[.9375rem]">
   <Link aria-label="anchor" href="#" className="ti-btn ti-btn-icon ti-btn-sm 
   ti-btn-success-full"><i className="ri-download-2-line"></i></Link>
   <Link aria-label="anchor" href="#" className="ti-btn ti-btn-icon ti-btn-sm
    ti-btn-info-full"><i className="ri-edit-line"></i>
    </Link>
    </div>
    </td>
    </tr>
    </tbody>
    </table>
    </div>`

export const tabledata32 = `<div className="table-responsive">
<table className="table align-middle min-w-full">
<thead>
<tr className="border-b border-defaultborder">
<th scope="col" className="w-[25%] text-start">Heading 1</th>
<th scope="col" className="w-[25%] text-start">Heading 2</th>
<th scope="col" className="w-[25%] text-start">Heading 3</th>
<th scope="col" className="w-[25%] text-start">Heading 4</th>
</tr></thead><tbody><tr className="border-b border-defaultborder">
<td>This cell inherits <code>vertical-align: middle;</code> fromthetable</td>
<td>This cell inherits <code>vertical-align: middle;</code> fromthetable</td>
<td>This cell inherits <code>vertical-align: middle;</code> fromthetable</td>
<td>This here is some placeholder text, intended to take upquite abit of 
vertical space, to demonstrate how the verticalalignmentworks in the preceding
 cells.</td></tr><tr className="align-bottom border-b border-defaultborder">
 <td>This cell inherits <code>vertical-align: bottom;</code> 
 fromthetable row</td><td>This cell inherits <code>vertical-align: 
 bottom;</code> fromthetable row</td><td>This cell inherits <code>
 vertical-align: bottom;</code> fromthetable row</td><td>This here is some placeholder 
 text, intended to take upquite abit of vertical space, to demonstrate how the 
 verticalalignmentworks in the preceding cells.</td></tr><tr className="border-b
  border-defaultborder"><td>This cell inherits <code>vertical-align: middle;</code>
fromthetable</td><td>This cell inherits <code>vertical-align: middle;</code>
fromthetable</td><td className="align-top">This cell is aligned to the top.
</td>
<td>This here is some placeholder text, intended to take upquite abit of vertical space,
 to demonstrate how the verticalalignmentworks in the preceding cells.</td>
 </tr>
 </tbody>
 </table>
 </div>`