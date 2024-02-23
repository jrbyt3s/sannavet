import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment, useState } from 'react';
import DatePicker from "react-datepicker";
import { addDays, setHours, setMinutes } from "date-fns";
import Calendar from "react-calendar";

const Datetimepicker = () => {


    const [startDate, setStartDate] = useState(new Date());
    const [startDate1, setStartDate1] = useState(new Date());
    const [startDate2, setStartDate2] = useState(new Date());
    const [startDate3, setStartDate3] = useState(new Date());
    const [startDate4, setStartDate4] = useState(new Date());
    const [startDate5, setStartDate5] = useState(new Date());
    const [startDate6, setStartDate6] = useState(new Date());


    // Date picker With Time

    const [startTime, setStartTime] = useState(
        setHours(setMinutes(new Date(), 30), 17)
    );

    //range data picker

    const [dateRange, setDateRange] = useState([null, null]);
    const [startsDate5, endDate] = dateRange;

    //React Calender 

    const [value, onChange] = useState(new Date());

    const [show, setShow] = useState(false);
    return (
        <Fragment>
            <Seo title={"Date Time Picker"} />
            <Pageheader currentpage="Date Time Picker" activepage="Form Elements" mainpage="Date Time Picker" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Basic Date picker
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                    <DatePicker placeholder={"Choose date"} className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" showIcon selected={startDate} onChange={(date) => setStartDate(date)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Date picker With Time
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                    <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startTime} onChange={(date) => setStartTime(date)} showTimeSelect minTime={setHours(setMinutes(new Date(), 0), 17)} maxTime={setHours(setMinutes(new Date(), 30), 20)} dateFormat="MMMM d, yyyy h:mm aa" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Human Friendly dates
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                    <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startDate1} onChange={(date2) => setStartDate1(date2)} showTimeSelect timeFormat="p" timeIntervals={15} dateFormat="Pp" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Date range picker
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                    <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" placeholderText="Choose Date" selectsRange={true} startDate={startsDate5} endDate={endDate} onChange={(update) => { setDateRange(update); }} isClearable={true} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Basic Time picker
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-time-line"></i> </div>
                                    <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startDate3} onChange={(date) => setStartDate3(date)} showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Time Pickr with 24hr Format
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-time-line"></i> </div>
                                    <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startDate6} onChange={(date) => setStartDate6(date)} showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Time Picker with Limits
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-time-line"></i> </div>
                                    <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startDate4} onChange={(date) => setStartDate4(date)} showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                DateTimePicker with Limited Time Range
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-time-line"></i> </div>
                                    <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startTime} onChange={(date) => setStartTime(date)} showTimeSelect minTime={setHours(setMinutes(new Date(), 0), 17)} maxTime={setHours(setMinutes(new Date(), 30), 20)} dateFormat="MMMM d, yyyy h:mm aa" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xxl:col-span-4 xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Date Picker with week numbers
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="form-group mb-0">
                                <div className="input-group">
                                    <div className="input-group-text text-[#8c9097] dark:text-white/50"> <i className="ri-calendar-line"></i> </div>
                                    <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" showIcon selected={startDate2} onChange={(date) => setStartDate2(date)} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-6 col-span-12">
                    <div className="grid grid-cols-12">
                        <div className="xl:col-span-12 col-span-12">
                            <div className="box">
                                <div className="box-header">
                                    <div className="box-title">
                                        Inline Time Picker
                                    </div>
                                </div>
                                <div className="box-body">
                                    <div className="form-group mb-0">
                                        <DatePicker className="ti-form-input focus:z-10" selected={startDate5} onChange={(date) => setStartDate5(date)} inline showTimeSelect showTimeSelectOnly timeIntervals={15} timeCaption="Time" dateFormat="h:mm aa" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Inline Calendar
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="form-group overflow-auto">
                                <input type="text" className="py-2 px-3  ltr:pr-11 rtl:pl-11 ti-form-input inline-calender-data rounded-none ltr:rounded-r-sm rtl:rounded-l-sm focus:z-10" onClick={() => setShow(show => !show)} />
                                {show && (<Calendar className="ti-form-input focus:z-10 flatpickr-input" onChange={onChange} value={value} />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Datetimepicker.layout = "Contentlayout"

export default Datetimepicker