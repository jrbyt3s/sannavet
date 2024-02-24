import Editordata, { Data, Data1, multiselectdata } from '@/shared/data/apps/projects/createprojectdata';
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import dynamic from 'next/dynamic';
import React, { Fragment, useState } from 'react';
const MultiSelect = dynamic(() => import("react-multi-select-component"), { ssr: false });
const DatePicker = dynamic(() => import("react-datepicker"), { ssr: false });
const Select = dynamic(() => import("react-select"), { ssr: false });
import { FilePond } from 'react-filepond';
import CreatableSelect from 'react-select/creatable';


const Createproject = () => {

    const components = {
        DropdownIndicator: null,
    };

    const createOption = (label) => ({
        label,
        value: label,
    });

    const [inputValue, setInputValue] = useState('');
    const [value, setValue] = useState([
        createOption("Marketing"),
        createOption("Sales"),
        createOption("Development"),
        createOption("Design"),
        createOption("Research"),

    ]);
    const handleKeyDown = (event) => {
        if (!inputValue) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                setValue((prev) => [...prev, createOption(inputValue)]);
                setInputValue('');
                event.preventDefault();
        }
    };
    //Filepond 
    const [files, setFiles] = useState([]);
    const [startDate, setStartDate] = useState(new Date()); //React date picker

    const [startDate1, setStartDate1] = useState(new Date());

    const handleDateChange = (date) => {
        // Ensure date is defined before setting it
        if (date) {
            setStartDate(date);
        }
    };


    const [selected1, setSelected1] = useState([]);
    const [selected2, setSelected2] = useState([]);

    return (
        <Fragment>
            <Seo title={"Create Project"} />
            <Pageheader currentpage="Create Project" activepage="Projects" mainpage="Create Project" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box custom-box">
                        <div className="box-header">
                            <div className="box-title">
                                Create Project
                            </div>
                        </div>
                        <div className="box-body">
                            <div className="grid grid-cols-12 gap-4">
                                <div className="xl:col-span-4 col-span-12">
                                    <label htmlFor="input-label" className="form-label">Project Name :</label>
                                    <input type="text" className="form-control" id="input-label" placeholder="Enter Project Name" />
                                </div>
                                <div className="xl:col-span-4 col-span-12">
                                    <label htmlFor="input-label1" className="form-label">Project Manager :</label>
                                    <input type="text" className="form-control" id="input-label1" placeholder="Project Manager Name" />
                                </div>
                                <div className="xl:col-span-4 col-span-12">
                                    <label htmlFor="input-label1" className="form-label">Client / Stakeholder :</label>
                                    <input type="text" className="form-control" placeholder="Enter Client Name" />
                                </div>
                                <div className="xl:col-span-12 col-span-12 mb-4">
                                    <label htmlFor="text-area" className="form-label">Project Description :</label>
                                    <div id="project-descriptioin-editor">
                                        <Editordata placeholder={'Write something...'} />
                                    </div>
                                </div>

                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Start Date :</label>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                            <DatePicker placeholder="Choose the date" className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startDate} onChange={(date) => setStartDate(date)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">End Date :</label>
                                    <div className="form-group">
                                        <div className="input-group">
                                            <div className="input-group-text text-muted"> <i className="ri-calendar-line"></i> </div>
                                            <DatePicker className="ti-form-input ltr:rounded-l-none rtl:rounded-r-none focus:z-10" selected={startDate1} onChange={(date) => setStartDate1(date)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Status :</label>
                                    <Select isMulti name="state" options={Data1} className="js-example-placeholder-multiple w-full js-states"
                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="Inprogress"
                                    />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Priority :</label>
                                    <Select isMulti name="state" options={Data} className="js-example-placeholder-multiple w-full js-states"
                                        menuPlacement='auto' classNamePrefix="Select2" placeholder="High"
                                    />
                                </div>
                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Assigned To</label>
                                    <Select isMulti name="state" options={multiselectdata} className="js-example-placeholder-multiple w-full js-states"
                                        menuPlacement='auto' classNamePrefix="Select2" defaultValue={[multiselectdata[0], multiselectdata[9], multiselectdata[4]]}
                                    />
                                </div>

                                <div className="xl:col-span-6 col-span-12">
                                    <label className="form-label">Tags</label>
                                    <CreatableSelect
                                        components={components}
                                        classNamePrefix='react-select'
                                        inputValue={inputValue}
                                        isClearable
                                        isMulti
                                        menuIsOpen={false}
                                        onChange={(newValue) => {
                                            // Ensure newValue is an array (or empty array) of objects
                                            if (Array.isArray(newValue)) {
                                                setValue(newValue);
                                            } else {
                                                // Handle the case when newValue is not an array
                                                setValue([]);
                                            }
                                        }}
                                        onInputChange={(newValue) => setInputValue(newValue)}
                                        onKeyDown={handleKeyDown}
                                        placeholder="Type something and press enter..."
                                        value={value}
                                    />
                                </div>
                                <div className="xl:col-span-12 col-span-12">
                                    <label htmlFor="text-area" className="form-label">Attachments</label>
                                    <FilePond
                                        files={files}
                                        onupdatefiles={setFiles}
                                        allowMultiple={true}
                                        maxFiles={3}
                                        server="/api"
                                        name="files"
                                        labelIdle='Drag & Drop your file here or click '
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="box-footer">
                            <button type="button" className="ti-btn ti-btn-primary btn-wave ms-auto float-right">Create Project</button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Createproject.layout = "Contentlayout"

export default Createproject