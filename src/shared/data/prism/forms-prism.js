export const input1 = `   <div className="grid grid-cols-12 sm:gap-6">
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <p className="mb-2 text-muted">Basic Input:</p>
    <input type="text" className="form-control" id="input">
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-label" className="form-label">Form Input With Label</label>
    <input type="text" className="form-control" id="input-label">
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-placeholder" className="form-label">Form Input With Placeholder</label>
    <input type="text" className="form-control" id="input-placeholder" placeholder="Placeholder">
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-text" className="form-label">Type Text</label>
    <input type="text" className="form-control" id="input-text" placeholder="Text">
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-number" className="form-label">Type Number</label>
    <input type="number" className="form-control" id="input-number" placeholder="Number">
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-password" className="form-label">Type Password</label>
    <input type="password" className="form-control" id="input-password" placeholder="Password">
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-email" className="form-label">Type Email</label>
    <input type="email" className="form-control" id="input-email" placeholder="Email@xyz.com">
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-tel" className="form-label">Type Tel</label>
    <input type="tel" className="form-control" id="input-tel" placeholder="+1100-2031-1233">
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-date" className="form-label">Type Date</label>
    <input type="date" className="form-control" id="input-date">
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-week" className="form-label">Type Week</label>
    <input type="week" className="form-control" id="input-week">
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-month" className="form-label">Type Month</label>
    <input type="month" className="form-control" id="input-month">
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-time" className="form-label">Type Time</label>
    <input type="time" className="form-control" id="input-time">
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-datetime-local" className="form-label">Type datetime-local</label>
    <input type="datetime-local" className="form-control" id="input-datetime-local">
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-search" className="form-label">Type Search</label>
    <input type="search" className="form-control" id="input-search" placeholder="Search">
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-submit" className="form-label">Type Submit</label>
    <input type="submit" className="form-control ti-btn" id="input-submit" defaultValue="Submit">
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-reset" className="form-label">Type Reset</label>
    <input type="reset" className="form-control ti-btn" id="input-reset">
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-button" className="form-label">Type Button</label>
    <input type="button" className="form-control ti-btn !text-white !bg-primary" id="input-button"  defaultValue="Button">
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <div className="grid grid-cols-12 gap-6">
        <div className="xl:col-span-3 col-span-12 flex flex-col ">
            <label className="form-label">Type Color</label>
            <input className="form-control form-input-color !rounded-md" type="color" defaultValue="#136bd0">
        </div>
        <div className="xl:col-span-5 col-span-12">
            <div className="form-check">
                <p className="mb-3 px-0 text-muted">Type Checkbox</p>
                <input className="form-check-input ms-2" type="checkbox" defaultValue="" defaultChecked>
            </div>
        </div>
        <div className="xl:col-span-4 col-span-12">
            <div className="form-check">
                <p className="mb-4 px-0 text-muted">Type Radio</p>
                <input className="form-check-input ms-2" type="radio" defaultChecked>
            </div>
        </div>
    </div>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <div>
        <label htmlFor="file-input" className="sr-only">Type file</label>
        <input type="file" name="file-input" id="file-input" className="block w-full border border-gray-200 focus:shadow-sm dark:focus:shadow-white/10 rounded-sm text-sm focus:z-10 focus:outline-0 focus:border-gray-200 dark:focus:border-white/10 dark:border-white/10
        file:bg-transparent file:border-0
        file:bg-gray-200 file:me-4
        file:py-3 file:px-4
        dark:file:bg-black/20 dark:file:text-white/50">
      </div>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label className="form-label">Type Url</label>
    <input className="form-control" type="url"  name="website" placeholder="http://example.com">
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-disabled" className="form-label">Type Disabled</label>
    <input type="text" id="input-disabled" className="form-control" placeholder="Disabled input" disabled>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-readonlytext" className="form-label">Input Readonly Text</label>
    <input type="text" readonly className="form-control-plaintext" id="input-readonlytext" defaultValue="email@example.com">
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="disabled-readonlytext" className="form-label">Disabled Readonly Input</label>
    <input className="form-control" type="text" defaultValue="Disabled readonly input" id="disabled-readonlytext" aria-label="Disabled input example" disabled readonly>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label className="form-label">Type Readonly Input</label>
    <input className="form-control" type="text" defaultValue="Readonly input here..." aria-label="readonly input example" readonly>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="text-area" className="form-label">Textarea</label>
    <textarea className="form-control" id="text-area" rows="1"></textarea>
</div>
<div className="xl:col-span-4 lg:col-span-6 md:col-span-6 sm:col-span-12 col-span-12">
    <label htmlFor="input-DataList" className="form-label">Datalist example</label>
    <input className="form-control" type="text" list="datalistOptions" id="input-DataList" placeholder="Type to search...">
    <datalist id="datalistOptions">
        <option defaultValue="San Francisco">
        </option>
        <option defaultValue="New York">
        </option>
        <option defaultValue="Seattle">
        </option>
        <option defaultValue="Los Angeles">
        </option>
        <option defaultValue="Chicago">
        </option>
    </datalist>
</div>
</div>`;

export const input2 = `<div className="grid grid-cols-12 gap-y-3">
<div className="xl:col-span-12 col-span-12">
    <label htmlFor="input-noradius" className="form-label">Input With No Radius</label>
    <input type="text" className="form-control !rounded-none" id="input-noradius" placeholder="No Radius">
</div>
<div className="xl:col-span-12 col-span-12">
    <label htmlFor="input-rounded" className="form-label">Input With Radius</label>
    <input type="text" className="form-control" id="input-rounded" placeholder="Default Radius">
</div>
<div className="xl:col-span-12 col-span-12">
    <label htmlFor="input-rounded-pill" className="form-label">Rounded Input</label>
    <input type="text" className="form-control !rounded-full" id="input-rounded-pill" placeholder="Rounded">
</div>
</div>`;

export const input3 = ` <div className="grid grid-cols-12 gap-y-3">
<div className="xl:col-span-12 col-span-12">
    <label htmlFor="input-rounded1" className="form-label">Default</label>
    <input type="text" className="form-control" id="input-rounded1" placeholder="Default">
</div>
<div className="xl:col-span-12 col-span-12">
    <label htmlFor="input-rounded2" className="form-label">Dotted Input</label>
    <input type="text" className="form-control border-dotted" id="input-rounded2" placeholder="Dotted">
</div>
<div className="xl:col-span-12 col-span-12">
    <label htmlFor="input-rounded3" className="form-label">Dashed Input</label>
    <input type="text" className="form-control border-dashed" id="input-rounded3" placeholder="Dashed">
</div>
</div>`;

export const input4 = `<input className="form-control form-control-sm mb-3" type="text"
placeholder=".form-control-sm" aria-label=".form-control-sm example">
<input className="form-control mb-3" type="text" placeholder="Default input"
    aria-label="default input example">
<input className="form-control form-control-lg" type="text"
placeholder=".form-control-lg" aria-label=".form-control-lg example">`;
export const input5 = `  <form>
<div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email
        address</label>
    <input type="email" className="form-control" id="exampleInputEmail1"
        aria-describedby="emailHelp">
    <div id="emailHelp" className="form-text">We'll
        never share your email
        with
        anyone else.</div>
</div>
<div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1">
</div>
<div className="mb-3 form-check !ps-0">
    <input type="checkbox" className="form-check-input" id="exampleCheck1">
    <label className="form-check-label ps-2" htmlFor="exampleCheck1">Check
        me out</label>
</div>
<button type="submit" className="ti-btn ti-btn-primary-full">Submit</button>
</form>`
export const input6 = `<label <label htmlFor="inputPassword5" className="form-label">Password</label>
<input type="password" id="inputPassword5" className="form-control"
    aria-describedby="passwordHelpBlock">
<div id="passwordHelpBlock" className="form-text">
    Your password must be 8-20 characters long, contain letters and
    numbers,
    and
    must not contain spaces, special characters, or emoji.
</div>`
export const input7 = `<div className="sm:grid grid-cols-12 gap-4 items-center">
<div className="xxl:col-span-1 col-span-2">
    <label htmlFor="inputPassword6" className="col-form-label">Password</label>
</div>
<div className="col-span-3">
    <input type="password" id="inputPassword6" className="form-control"
        aria-describedby="passwordHelpInline">
</div>
<div className="col-span-7">
    <span id="passwordHelpInline" className="form-text">
        Must be 8-20 characters long.
    </span>
</div>
</div>`
export const input8 = `<form>
<fieldset disabled>
    <legend className="text-2xl">Disabled fieldset example</legend>
    <div className="mb-3">
        <label htmlFor="disabledTextInput" className="form-label">Disabled
            input</label>
        <input type="text" id="disabledTextInput" className="form-control"
            placeholder="Disabled input">
    </div>
    <div className="mb-3">
        <label htmlFor="disabledSelect" className="form-label">Disabled select
            menu</label>
        <select id="disabledSelect" className="form-select">
            <option>Disabled select</option>
        </select>
    </div>
    <div className="mb-3">
        <div className="form-check !ps-0">
            <input className="form-check-input" type="checkbox"
                id="disabledFieldsetCheck" disabled>
            <label className="form-check-label ps-2" htmlFor="disabledFieldsetCheck">
                Can't check this
            </label>
        </div>
    </div>
    <button type="submit" className="ti-btn ti-btn-primary-full opacity-[0.6]">Submit</button>
</fieldset>
</form>>`


//Checks & Radios

export const radio1 = `<div className="form-check">
<input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDefault">
<label className="form-check-label" htmlFor="flexCheckDefault">
    Default checkbox
</label>
</div>
<div className="form-check">
<input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckChecked"
    defaultChecked>
<label className="form-check-label" htmlFor="flexCheckChecked">
    Checked checkbox
</label>
</div>`

export const radio2 = `<div className="form-check">
<input className="form-check-input" type="checkbox" defaultValue="" id="flexCheckDisabled"
    disabled>
<label className="form-check-label" htmlFor="flexCheckDisabled">
    Disabled checkbox
</label>
</div>
<div className="form-check">
<input className="form-check-input" type="checkbox" defaultValue=""
    id="flexCheckCheckedDisabled" defaultChecked disabled>
<label className="form-check-label" htmlFor="flexCheckCheckedDisabled">
    Disabled checked checkbox
</label>
</div>`

export const radio3 = `<div className="form-check">
<input className="form-check-input" type="radio" name="flexRadioDefault"
    id="flexRadioDefault1">
<label className="form-check-label" htmlFor="flexRadioDefault1">
    Default radio
</label>
</div>
<div className="form-check">
<input className="form-check-input" type="radio" name="flexRadioDefault"
    id="flexRadioDefault2" defaultChecked>
<label className="form-check-label" htmlFor="flexRadioDefault2">
    Default checked radio
</label>
</div>`

export const radio4 = `<div className="form-check">
<input className="form-check-input" type="radio" name="flexRadioDisabled"
    id="flexRadioDisabled" disabled>
<label className="form-check-label" htmlFor="flexRadioDisabled">
    Disabled radio
</label>
</div>
<div className="form-check">
<input className="form-check-input" type="radio" name="flexRadioDisabled"
    id="flexRadioCheckedDisabled" defaultChecked disabled>
<label className="form-check-label" htmlFor="flexRadioCheckedDisabled">
    Disabled checked radio
</label>
</div>`

export const radio5 = `<div className="form-check">
<input className="form-check-input" type="checkbox" defaultValue="" id="defaultCheck1">
<label className="form-check-label" htmlFor="defaultCheck1">
    Default checkbox
</label>
</div>
<div className="form-check">
<input className="form-check-input" type="checkbox" defaultValue="" id="defaultCheck2"
    disabled>
<label className="form-check-label" htmlFor="defaultCheck2">
    Disabled checkbox
</label>
</div>
<div className="form-check">
<input className="form-check-input" type="radio" name="exampleRadios"
    id="exampleRadios1" defaultValue="option1" defaultChecked>
<label className="form-check-label" htmlFor="exampleRadios1">
    Default radio
</label>
</div>
<div className="form-check mb-0">
<input className="form-check-input" type="radio" name="exampleRadios"
    id="exampleRadios3" defaultValue="option3" disabled>
<label className="form-check-label" htmlFor="exampleRadios3">
    Disabled radio
</label>
</div>`

export const radio6 =`<div className="form-check form-switch">
<input className="form-check-input" type="checkbox" role="switch"
    id="flexSwitchCheckDefault">
<label className="form-check-label" htmlFor="flexSwitchCheckDefault">Default switch
    checkbox input</label>
</div>
<div className="form-check form-switch">
<input className="form-check-input" type="checkbox" role="switch"
    id="flexSwitchCheckChecked" defaultChecked>
<label className="form-check-label" htmlFor="flexSwitchCheckChecked">Checked switch
    checkbox input</label>
</div>
<div className="form-check form-switch">
<input className="form-check-input" type="checkbox" role="switch"
    id="flexSwitchCheckDisabled" disabled>
<label className="form-check-label" htmlFor="flexSwitchCheckDisabled">Disabled
    switch
    checkbox input</label>
</div>
<div className="form-check form-switch mb-0">
<input className="form-check-input" type="checkbox" role="switch"
    id="flexSwitchCheckCheckedDisabled" defaultChecked disabled>
<label className="form-check-label" htmlFor="flexSwitchCheckCheckedDisabled">Disabled
defaultChecked switch checkbox input</label>
</div>`;

export const radio7 = `<div className="form-check">
<input className="form-check-input" type="checkbox" defaultValue="" id="checkebox-sm" defaultChecked>
<label className="form-check-label" htmlFor="checkebox-sm">
    Default
</label>
</div>
<div className="form-check form-check-md flex items-center">
<input className="form-check-input" type="checkbox" defaultValue="" id="checkebox-md" defaultChecked>
<label className="form-check-label" htmlFor="checkebox-md">
    Medium
</label>
</div>
<div className="form-check form-check-lg flex items-center">
<input className="form-check-input" type="checkbox" defaultValue="" id="checkebox-lg" defaultChecked>
<label className="form-check-label" htmlFor="checkebox-lg">
    Large
</label>
</div>`

export const radio8 = `<div className="form-check">
<input className="form-check-input" type="radio" name="Radio" id="Radio-sm">
<label className="form-check-label" htmlFor="Radio-sm">
    default
</label>
</div>
<div className="form-check form-check-md">
<input className="form-check-input" type="radio" name="Radio" id="Radio-md">
<label className="form-check-label" htmlFor="Radio-md">
    Medium
</label>
</div>
<div className="form-check form-check-lg">
<input className="form-check-input" type="radio" name="Radio" id="Radio-lg" defaultChecked>
<label className="form-check-label" htmlFor="Radio-lg">
    Large
</label>
</div>`

export const radio9 = `<div className="form-check form-check-inline">
<input className="form-check-input" type="checkbox" id="inlineCheckbox1"
    defaultValue="option1">
<label className="form-check-label" htmlFor="inlineCheckbox1">1</label>
</div>
<div className="form-check form-check-inline">
<input className="form-check-input" type="checkbox" id="inlineCheckbox2"
    defaultValue="option2">
<label className="form-check-label" htmlFor="inlineCheckbox2">2</label>
</div>
<div className="form-check form-check-inline">
<input className="form-check-input" type="checkbox" id="inlineCheckbox3"
    defaultValue="option3" disabled>
<label className="form-check-label" htmlFor="inlineCheckbox3">3 (disabled)</label>
</div>
<div className="form-check form-check-inline">
<input className="form-check-input" type="radio" name="inlineRadioOptions"
    id="inlineRadio1" defaultValue="option1">
<label className="form-check-label" htmlFor="inlineRadio1">1</label>
</div>
<div className="form-check form-check-inline">
<input className="form-check-input" type="radio" name="inlineRadioOptions"
    id="inlineRadio2" defaultValue="option2">
<label className="form-check-label" htmlFor="inlineRadio2">2</label>
</div>
<div className="form-check form-check-inline">
<input className="form-check-input" type="radio" name="inlineRadioOptions"
    id="inlineRadio3" defaultValue="option3" disabled>
<label className="form-check-label" htmlFor="inlineRadio3">3 (disabled)</label>
</div>`

export const radio10 = `<div className="form-check form-check-reverse mb-4">
<input className="form-check-input" type="checkbox" defaultValue=""
    id="reverseCheck1">
<label className="form-check-label" htmlFor="reverseCheck1">
    Reverse checkbox
</label>
</div>
<div className="form-check form-check-reverse mb-4">
<input className="form-check-input" type="checkbox" defaultValue=""
    id="reverseCheck2" disabled>
<label className="form-check-label" htmlFor="reverseCheck2">
    Disabled reverse checkbox
</label>
</div>

<div className="form-check form-switch form-check-reverse">
<input className="form-check-input" type="checkbox"
    id="flexSwitchCheckReverse">
<label className="form-check-label" htmlFor="flexSwitchCheckReverse">Reverse
    switch
    checkbox input</label>
</div>`

export const radio11 = `<div className="grid grid-cols-12 gap-y-1">
<div className="xl:col-span-4 col-span-12">
    <div className="toggle on mb-4">
        <span></span>
    </div>
</div>
<div className="xl:col-span-4 col-span-12">
    <div className="toggle toggle-secondary on mb-4">
        <span></span>
    </div>
</div>
<div className="xl:col-span-4 col-span-12">
    <div className="toggle toggle-warning on mb-4">
        <span></span>
    </div>
</div>
<div className="xl:col-span-4 col-span-12">
    <div className="toggle toggle-info on mb-4">
        <span></span>
    </div>
</div>
<div className="xl:col-span-4 col-span-12">
    <div className="toggle toggle-success on mb-4">
        <span></span>
    </div>
</div>
<div className="xl:col-span-4 col-span-12">
    <div className="toggle toggle-danger on mb-4">
        <span></span>
    </div>
</div>
<div className="xl:col-span-4 col-span-12">
    <div className="toggle toggle-light on mb-4">
        <span></span>
    </div>
</div>
<div className="xl:col-span-4 col-span-12">
    <div className="toggle toggle-dark on mb-4">
        <span></span>
    </div>
</div>
</div>`

export const radio12 = `<div className="grid grid-cols-12 gap-y-1">
<div className="xl:col-span-4 col-span-12">
    <div className="custom-toggle-switch flex items-center mb-4">
        <input id="toggleswitchPrimary" name="toggleswitch001" type="checkbox" defaultChecked>
        <label htmlFor="toggleswitchPrimary" className="label-primary"></label><span className="ms-3">Primary</span>
    </div>
</div>
<div className="xl:col-span-4 col-span-12">
    <div className="custom-toggle-switch flex items-center mb-4">
        <input id="toggleswitchSecondary" name="toggleswitch002" type="checkbox" defaultChecked>
        <label htmlFor="toggleswitchSecondary" className="label-secondary"></label><span className="ms-3">Secondary</span>
    </div>
</div>
<div className="xl:col-span-4 col-span-12">
    <div className="custom-toggle-switch flex items-center mb-4">
        <input id="toggleswitchWarning" name="toggleswitch003" type="checkbox" defaultChecked>
        <label htmlFor="toggleswitchWarning" className="label-warning"></label><span className="ms-3">Warning</span>
    </div>
</div>
<div className="xl:col-span-4 col-span-12">
    <div className="custom-toggle-switch flex items-center mb-4">
        <input id="toggleswitchInfo" name="toggleswitch004" type="checkbox" defaultChecked>
        <label htmlFor="toggleswitchInfo" className="label-info"></label><span className="ms-3">Info</span>
    </div>
</div>
<div className="xl:col-span-4 col-span-12">
    <div className="custom-toggle-switch flex items-center mb-4">
        <input id="toggleswitchSuccess" name="toggleswitch005" type="checkbox" defaultChecked>
        <label htmlFor="toggleswitchSuccess" className="label-success"></label><span className="ms-3">Success</span>
    </div>
</div>
<div className="xl:col-span-4 col-span-12">
    <div className="custom-toggle-switch flex items-center mb-4">
        <input id="toggleswitchDanger" name="toggleswitch006" type="checkbox" defaultChecked>
        <label htmlFor="toggleswitchDanger" className="label-danger"></label><span className="ms-3">Danger</span>
    </div>
</div>
<div className="xl:col-span-4 col-span-12">
    <div className="custom-toggle-switch flex items-center mb-4">
        <input id="toggleswitchLight" name="toggleswitch007" type="checkbox" defaultChecked>
        <label htmlFor="toggleswitchLight" className="label-light"></label><span className="ms-3">Light</span>
    </div>
</div>
<div className="xl:col-span-4 col-span-12">
    <div className="custom-toggle-switch flex items-center mb-4">
        <input id="toggleswitchDark" name="toggleswitch008" type="checkbox" defaultChecked>
        <label htmlFor="toggleswitchDark" className="label-dark"></label><span className="ms-3">Dark</span>
    </div>
</div>
</div>`

export const radio13 = `<div className="flex items-center flex-wrap mb-4">
<div className=""> <p className="text-muted m-0">Small size toggle switch <code>toggle-sm</code></p></div>
<div className="toggle toggle-sm on mb-0">
    <span></span>
</div>
</div>
<div className="flex items-center flex-wrap mb-4">
<div className=""> <p className="text-muted m-0">Default toggle switch <code></code></p></div>
<div className="toggle toggle-secondary on mb-0">
    <span></span>
</div>
</div>
<div className="flex items-center flex-wrap">
<div className=""> <p className="text-muted m-0">Large size toggle switch <code>toggle-lg</code></p></div>
<div className="toggle toggle-lg toggle-success on mb-0">
    <span></span>
</div>
</div>`

export const radio14 = `<div className="flex items-center flex-wrap mb-4">
<div className=""><p className="text-muted m-0">Small size toggle switch <code>toggle-sm</code></p></div>
<div className="custom-toggle-switch toggle-sm ms-2">
    <input id="size-sm" name="toggleswitchsize" type="checkbox" defaultChecked>
    <label htmlFor="size-sm" className="label-primary"></label>
</div>
</div>
<div className="flex items-center flex-wrap mb-4">
<div className=""><p className="text-muted m-0">Default toggle switch</p></div>
<div className="custom-toggle-switch ms-2">
    <input id="size-default" name="toggleswitchsize" type="checkbox" defaultChecked>
    <label htmlFor="size-default" className="label-secondary mb-1"></label>
</div>
</div>
<div className="flex items-center flex-wrap">
<div className=""><p className="text-muted m-0">Large size toggle switch <code>toggle-lg</code></p></div>
<div className="custom-toggle-switch toggle-lg ms-2">
    <input id="size-lg" name="toggleswitchsize" type="checkbox" defaultChecked>
    <label htmlFor="size-lg" className="label-success mb-2"></label>
</div>
</div>`

//Range Sliders

export const range1 = `<input type="range" className="form-range" id="customRange1">`

export const range2 = `<input type="range" className="form-range" id="disabledRange" disabled>`

export const range3 = ` <input type="range" className="form-range" min="0" max="5" id="customRange2">`

export const range4 ='<input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange3">';

//Color Picker

export const color1 = `<input type="color" className="form-control form-control-color border-0"
id="exampleColorInput" defaultValue="#136ad0" title="Choose your color">`

// Form-Layouts

export const layout1 = `  <div className="mb-4">
<label htmlFor="form-text" className="form-label !text-[.875rem] text-black">Enter name</label>
<input type="text" className="form-control" id="form-text" placeholder="">
</div>
<div className="mb-4">
<label htmlFor="form-password" className="form-label text-[.875rem] text-black">Enter
    Password</label>
<input type="password" className="form-control" id="form-password" placeholder="">
</div>
<div className="form-check mb-4">
<input className="form-check-input" type="checkbox" defaultValue="" id="invalidCheck"
    required>
<label className="form-check-label" htmlFor="invalidCheck">
    Accept Policy
</label>
</div>
<button className="ti-btn ti-btn-primary-full" type="submit">Submit</button>`

export const layout2 = ` <form>
<div className="grid grid-cols-12 mb-4">
    <label htmlFor="inputEmail3"
        className="sm:col-span-2 col-span-12 col-form-label">Email</label>
    <div className="sm:col-span-10 col-span-12">
        <input type="email" className="form-control" id="inputEmail3">
    </div>
</div>
<div className="grid grid-cols-12 mb-4">
    <label htmlFor="inputPassword3"
        className="sm:col-span-2 col-span-12 col-form-label">Password</label>
    <div className="sm:col-span-10 col-span-12">
        <input type="password" className="form-control" id="inputPassword3">
    </div>
</div>
<div className="grid grid-cols-12 mb-4">
    <div className=" sm:col-span-2 col-span-12 col-form-label pt-0">Qualified</div>
    <div className="sm:col-span-10 col-span-12 ">
        <div className="form-check">
            <input className="form-check-input" type="radio"
                name="gridRadios" id="gridRadios1" defaultValue="option1"
                defaultChecked>
            <label className="form-check-label" htmlFor="gridRadios1">
                Prelims
            </label>
        </div>
        <div className="form-check disabled">
            <input className="form-check-input" type="radio"
                name="gridRadios" id="gridRadios2" defaultValue="option3"
                disabled>
            <label className="form-check-label" htmlFor="gridRadios2">
                Mains
            </label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="checkbox"
                id="gridCheck1">
            <label className="form-check-label" htmlFor="gridCheck1">
                Certified
            </label>
        </div>
    </div>
</div>
<button type="submit" className="ti-btn ti-btn-primary-full">Sign in</button>
</form>`

export const layout3 = `  <div className="mb-4">
<label htmlFor="form-text1" className="form-label text-[.875rem] text-black">Enter name</label>
<div className="input-group">
    <div className="input-group-text"><i className="ri-user-line"></i></div>
    <input type="text" className="form-control" id="form-text1" placeholder="">
</div>
</div>
<div className="mb-4">
<label htmlFor="form-password1" className="form-label text-[.875rem] text-black">Enter
    Password</label>
<div className="input-group">
    <div className="input-group-text"><i className="ri-lock-line"></i></div>
    <input type="password" className="form-control" id="form-password1" placeholder="">
</div>
</div>
<div className="form-check mb-4">
<input className="form-check-input" type="checkbox" defaultValue="" id="invalidCheck1"
    required>
<label className="form-check-label" htmlFor="invalidCheck1">
    Accept Policy
</label>
</div>
<button className="ti-btn ti-btn-primary-full !mb-0 mt-4" type="submit">Submit</button>`

export const layout4 = `<form>
<div className="grid grid-cols-12 mb-4">
    <label htmlFor="inputEmail1"
        className="sm:col-span-2 col-span-12 col-form-label">Email</label>
    <div className="sm:col-span-10 col-span-12">
        <div className="input-group">
            <input type="email" className="form-control" id="inputEmail1">
            <div className="input-group-text">
                <i className="ri-mail-line"></i>
            </div>
        </div>
    </div>
</div>
<div className="grid grid-cols-12 mb-4">
    <label htmlFor="inputPassword1"
        className="sm:col-span-2 col-span-12 col-form-label">Password</label>
    <div className="sm:col-span-10 col-span-12">
        <div className="input-group">
            <input type="password" className="form-control" id="inputPassword1">
            <div className="input-group-text">
                <i className="ri-lock-line"></i>
            </div>
        </div>
    </div>
</div>
<div className="grid grid-cols-12 mb-4">
    <div className="col-form-label sm:col-span-2 col-span-12 pt-0">Qualified</div>
    <div className="sm:col-span-10 col-span-12">
        <div className="form-check">
            <input className="form-check-input" type="radio"
                name="gridRadios" id="gridRadios4" defaultValue="option1"
                defaultChecked>
            <label className="form-check-label" htmlFor="gridRadios4">
                Prelims
            </label>
        </div>
        <div className="form-check disabled">
            <input className="form-check-input" type="radio"
                name="gridRadios" id="gridRadios3" defaultValue="option3"
                disabled>
            <label className="form-check-label" htmlFor="gridRadios3">
                Mains
            </label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="checkbox"
                id="gridCheck2">
            <label className="form-check-label" htmlFor="gridCheck2">
                Certified
            </label>
            <form>
                <div className="grid grid-cols-12 mb-4">
                    <label htmlFor="inputEmail1"
                        className="sm:col-span-2 col-span-12 col-form-label">Email</label>
                    <div className="sm:col-span-10 col-span-12">
                        <div className="input-group">
                            <input type="email" className="form-control" id="inputEmail1">
                            <div className="input-group-text">
                                <i className="ri-mail-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 mb-4">
                    <label htmlFor="inputPassword1"
                        className="sm:col-span-2 col-span-12 col-form-label">Password</label>
                    <div className="sm:col-span-10 col-span-12">
                        <div className="input-group">
                            <input type="password" className="form-control" id="inputPassword1">
                            <div className="input-group-text">
                                <i className="ri-lock-line"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 mb-4">
                    <div className="col-form-label sm:col-span-2 col-span-12 pt-0">Qualified</div>
                    <div className="sm:col-span-10 col-span-12">
                        <div className="form-check">
                            <input className="form-check-input" type="radio"
                                name="gridRadios" id="gridRadios4" defaultValue="option1"
                                defaultChecked>
                            <label className="form-check-label" htmlFor="gridRadios4">
                                Prelims
                            </label>
                        </div>
                        <div className="form-check disabled">
                            <input className="form-check-input" type="radio"
                                name="gridRadios" id="gridRadios3" defaultValue="option3"
                                disabled>
                            <label className="form-check-label" htmlFor="gridRadios3">
                                Mains
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox"
                                id="gridCheck2">
                            <label className="form-check-label" htmlFor="gridCheck2">
                                Certified
                            </label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="ti-btn ti-btn-primary-full">Sign in</button>
            </form>`

export const layout5 = ` <form className="sm:grid grid-cols-4 gap-4 items-center">
<div className="mb-4 sm:mb-0 input-group">
    <div className="input-group-text">@</div>
    <input type="text" className="form-control"
        id="inlineFormInputGroupUsername" placeholder="Username">
</div>
<select className="mb-4 sm:mb-0 form-select !py-3" id="inlineFormSelectPref">
    <option selected>Choose...</option>
    <option defaultValue="1">One</option>
    <option defaultValue="2">Two</option>
    <option defaultValue="3">Three</option>
</select>
<div className=" form-check !my-auto">
    <input className="form-check-input" type="checkbox"
        id="inlineFormCheck">
    <label className="form-check-label" htmlFor="inlineFormCheck">
        Remember me
    </label>
</div>
<button type="submit" className="ti-btn ti-btn-primary-full !mb-0 mt-4">Submit</button>
</form>`

export const layout6 = ` <div className="grid grid-cols-12 gap-4">
<div className="sm:col-span-7 col-span-12">
    <input type="text" className="form-control" placeholder="City"
        aria-label="City">
</div>
<div className="sm:col-span-3 col-span-12">
    <input type="text" className="form-control" placeholder="State"
        aria-label="State">
</div>
<div className="sm:col-span-2 col-span-12">
    <input type="text" className="form-control" placeholder="Zip"
        aria-label="Zip">
</div>
</div>`

export const layout7 = `  <div className="mb-4">
<label htmlFor="formGroupExampleInput" className="form-label">Example label</label>
<input type="text" className="form-control" id="formGroupExampleInput"
    placeholder="Example input placeholder">
</div>
<div className="mb-1">
<label htmlFor="formGroupExampleInput2" className="form-label">Another label</label>
<input type="text" className="form-control" id="formGroupExampleInput2"
    placeholder="Another input placeholder">
</div>`

export const layout8 = ` <div className="grid grid-cols-12 mb-4">
<label htmlFor="colFormLabelSm"
    className="sm:col-span-2 col-span-12 col-form-label col-form-label-sm">Email</label>
<div className="sm:col-span-10 col-span-12">
    <input type="email" className="form-control form-control-sm"
        id="colFormLabelSm" placeholder="col-form-label-sm">
</div>
</div>
<div className="grid grid-cols-12 mb-4">
<label htmlFor="colFormLabel" className="sm:col-span-2 col-span-12 col-form-label">Email</label>
<div className="sm:col-span-10 col-span-12">
    <input type="email" className="form-control" id="colFormLabel"
        placeholder="col-form-label">
</div>
</div>
<div className="grid grid-cols-12">
<label htmlFor="colFormLabelLg"
    className="sm:col-span-2 col-span-12 col-form-label col-form-label-lg text-[1.25rem]">Email</label>
<div className="sm:col-span-10 col-span-12">
    <input type="email" className="form-control form-control-lg"
        id="colFormLabelLg" placeholder="col-form-label-lg">
</div>
</div>
Auto sizing
Show Code
Jane Doe
`

export const layout9 = ` <form className="sm:grid grid-cols-12 block gap-y-2 gap-x-4 items-center mb-4">
<div className="col-span-12 mb-4 sm:mb-0">
    <label className="hidden" htmlFor="autoSizingInput">Name</label>
    <input type="text" className="form-control" id="autoSizingInput"
        placeholder="Jane Doe">
</div>
<div className="col-span-12 mb-4 sm:mb-0">
    <label className="hidden"
        htmlFor="autoSizingInputGroup">Username</label>
    <div className="input-group">
        <div className="input-group-text">@</div>
        <input type="text" className="form-control"
            id="autoSizingInputGroup" placeholder="Username">
    </div>
</div>
<div className="col-span-12 mb-4 sm:mb-0">
    <label className="hidden"
        htmlFor="autoSizingSelect">Preference</label>
    <select className="form-select" id="autoSizingSelect">
        <option selected>Choose...</option>
        <option defaultValue="1">One</option>
        <option defaultValue="2">Two</option>
        <option defaultValue="3">Three</option>
    </select>
</div>
<div className="col-span-12">
    <div className="form-check">
        <input className="form-check-input" type="checkbox"
            id="autoSizingCheck">
        <label className="form-check-label" htmlFor="autoSizingCheck">
            Remember me
        </label>
    </div>
</div>
<div className="col-span-12">
    <button type="submit" className="ti-btn ti-btn-primary-full !mb-0 mt-4">Submit</button>
</div>
</form>
<span className="font-semibold text-[#8c9097] dark:text-white/50">You can then remix that once again with size-specific column
classes.</span>
<form className="grid grid-cols-12  gap-x-4 gap-y-2 items-center mt-2">
<div className="sm:col-span-3 col-span-12">
    <label className="hidden"
        htmlFor="specificSizeInputName">Name</label>
    <input type="text" className="form-control" id="specificSizeInputName"
        placeholder="Jane Doe">
</div>
<div className="sm:col-span-3 col-span-12">
    <label className="hidden"
        htmlFor="specificSizeInputGroupUsername">Username</label>
    <div className="input-group">
        <div className="input-group-text">@</div>
        <input type="text" className="form-control"
            id="specificSizeInputGroupUsername" placeholder="Username">
    </div>
</div>
<div className="sm:col-span-3 col-span-12">
    <label className="hidden"
        htmlFor="specificSizeSelect">Preference</label>
    <select className="form-select !py-[0.59rem]" id="specificSizeSelect">
        <option selected>Choose...</option>
        <option defaultValue="1">One</option>
        <option defaultValue="2">Two</option>
        <option defaultValue="3">Three</option>
    </select>
</div>
<div className="sm:col-span-3 col-span-12">
    <div className="form-check !my-auto">
        <input className="form-check-input" type="checkbox"
            id="autoSizingCheck2">
        <label className="form-check-label" htmlFor="autoSizingCheck2">
            Remember me
        </label>
    </div>
</div>
<div className="sm:col-span-3 col-span-12">
    <button type="submit" className="ti-btn ti-btn-primary-full">Submit</button>
</div>
</form>`

export const layout10 = `<div className="grid grid-cols-12 sm:gap-x-6 sm:gap-y-4">
<div className="md:col-span-6 col-span-12 mb-4">
    <label className="form-label">First Name</label>
    <input type="text" className="form-control" placeholder="First name"
        aria-label="First name">
</div>
<div className="md:col-span-6 col-span-12 mb-4">
    <label className="form-label">Last Name</label>
    <input type="text" className="form-control" placeholder="Last name"
        aria-label="Last name">
</div>
<div className="md:col-span-6 col-span-12 mb-4 sm:mb-0">
    <label className="form-label">Address</label>
    <div className="grid grid-cols-12 sm:gap-x-4">
        <div className="xl:col-span-12 col-span-12 mb-4">
            <input type="text" className="form-control" placeholder="Street"
            aria-label="Street">
        </div>
        <div className="xl:col-span-12 col-span-12 mb-4">
            <input type="text" className="form-control" placeholder="Landmark"
            aria-label="Landmark">
        </div>
        <div className="xxl:col-span-6 xl:col-span-12 col-span-12 mb-4">
            <input type="text" className="form-control" placeholder="City"
            aria-label="City">
        </div>
        <div className="xxl:col-span-6 xl:col-span-12 col-span-12 mb-4">
            <select id="inputState1" className="form-select !py-[0.59rem]">
                <option selected>State</option>
                <option>...</option>
            </select>
        </div>
        <div className="xxl:col-span-6 xl:col-span-12 col-span-12 xxl:mb-0 mb-4">
            <input type="text" className="form-control" placeholder="Postal/Zip code"
            aria-label="Postal/Zip code">
        </div>
        <div className="xxl:col-span-6 xl:col-span-12 col-span-12">
            <select id="inputCountry" className="form-select !py-[0.59rem]">
                <option selected>Country</option>
                <option>...</option>
            </select>
        </div>
    </div>
</div>
<div className="md:col-span-6  col-span-12">
    <div className="grid grid-cols-12">
        <div className="xl:col-span-12 col-span-12 mb-4">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" placeholder="Email"
            aria-label="email">
        </div>
        <div className="xl:col-span-12 col-span-12 mb-4">
            <label className="form-label">D.O.B</label>
            <input type="date" className="form-control"
            aria-label="dateofbirth">
        </div>
        <div className="xl:col-span-12 col-span-12 mb-4">
            <div className="grid grid-cols-12 gap-3">
                <label className="form-label mb-1 xl:col-span-12 col-span-12">Maritial Status</label>
                <div className="xl:col-span-6 col-span-12">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" defaultValue="" id="status-married" name="status-married">
                        <label className="form-check-label" htmlFor="status-married">
                            Married
                        </label>
                    </div>
                </div>
                <div className="xl:col-span-6 col-span-12">
                    <div className="form-check">
                        <input className="form-check-input" type="radio" defaultValue="" id="status-unmarried" name="status-married" defaultChecked>
                        <label className="form-check-label" htmlFor="status-unmarried">
                            Single
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div className="xl:col-span-12 col-span-12">

        </div>
    </div>
</div>
<div className="md:col-span-6 col-span-12 mb-4 sm:mb-0">
    <label className="form-label">Contact Number</label>
    <input type="number" className="form-control" placeholder="Phone number"
        aria-label="Phone number">
</div>
<div className="md:col-span-6 col-span-12 mb-4 sm:mb-0">
    <label className="form-label">Alternative Contact</label>
    <input type="number" className="form-control" placeholder="Phone number"
        aria-label="Phone number">
</div>
<div className="md:col-span-12 col-span-12 mb-4 sm:mb-0">
    <div className="form-check mb-4">
        <input className="form-check-input" type="checkbox" id="gridCheck">
        <label className="form-check-label" htmlFor="gridCheck">
            Check me out
        </label>
    </div>
</div>
<div className="md:col-span-12 col-span-12">
    <button type="submit" className="ti-btn ti-btn-primary-full !mb-0">Sign in</button>
</div>
</div>`

export const layout11 = `<form className="grid grid-cols-12 gap-4 mt-0">
<div className="md:col-span-6 col-span-12">
    <label className="form-label">First Name</label>
    <input type="text" className="form-control" placeholder="First name"
        aria-label="First name">
</div>
<div className="md:col-span-6 col-span-12">
    <label className="form-label">Last Name</label>
    <input type="text" className="form-control" placeholder="Last name"
        aria-label="Last name">
</div>
<div className="md:col-span-6 col-span-12">
    <label htmlFor="inputEmail4" className="form-label">Email</label>
    <input type="email" className="form-control" id="inputEmail4">
</div>
<div className="md:col-span-6 col-span-12">
    <label htmlFor="inputPassword4" className="form-label">Password</label>
    <input type="password" className="form-control" id="inputPassword4">
</div>
<div className="col-span-12">
    <label htmlFor="inputAddress" className="form-label">Address</label>
    <input type="text" className="form-control" id="inputAddress"
        placeholder="1234 Main St">
</div>
<div className="col-span-12">
    <label htmlFor="inputAddress2" className="form-label">Address 2</label>
    <input type="text" className="form-control" id="inputAddress2"
        placeholder="Apartment, studio, or floor">
</div>
<div className="md:col-span-6 col-span-12">
    <label htmlFor="inputCity" className="form-label">City</label>
    <input type="text" className="form-control" id="inputCity">
</div>
<div className="md:col-span-4 col-span-12">
    <label htmlFor="inputState" className="form-label">State</label>
    <select id="inputState" className="form-select !py-[0.59rem]">
        <option selected>Choose...</option>
        <option>...</option>
    </select>
</div>
<div className="md:col-span-2 col-span-12">
    <label htmlFor="inputZip" className="form-label">Zip</label>
    <input type="text" className="form-control" id="inputZip">
</div>
<div className="col-span-12 ">
    <div className="form-check">
        <input className="form-check-input" type="checkbox" id="gridCheck3">
        <label className="form-check-label" htmlFor="gridCheck3">
            Check me out
        </label>
    </div>
</div>
<div className="col-span-12">
    <button type="submit" className="ti-btn ti-btn-primary-full">Sign in</button>
</div>
</form>`