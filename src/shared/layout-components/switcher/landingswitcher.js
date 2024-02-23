
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ThemeChanger } from "@/shared/redux/action";
import Themeprimarycolor, * as landingswitcherdata from "../../data/switcherdata/landingswitcherdata";
import Link from "next/link";
import { Helmet, HelmetProvider } from "react-helmet-async";
import store from "@/shared/redux/store";

const Landingswitcher = ({ local_varaiable, ThemeChanger }) => {

  useEffect(() => {
    const theme = store.getState();
    ThemeChanger({
      ...theme,
      "dataNavStyle": "menu-click",
      "dataNavLayout": "horizontal",
      "class" : "light"


    });
    return () => {
      ThemeChanger({
        ...theme,
        "dataNavStyle": "",
        "dataNavLayout": `${localStorage.ynexlayout == "horizontal" ? "horizontal" : "vertical"}`
      });
    };
  }, []);

  return (
    <div>
      <HelmetProvider>
        <Helmet>
          <html dir={local_varaiable.dir}
            className={local_varaiable.class}
            data-nav-layout={local_varaiable.dataNavLayout}
            data-toggled={local_varaiable.dataToggled}
            data-nav-style={local_varaiable.dataNavStyle}
            data-menu-position={local_varaiable.dataMenuPosition}
            style={`
                ${local_varaiable.colorPrimaryRgb != "" ? `--primary-rgb:${local_varaiable.colorPrimaryRgb}` : ""};
                ${local_varaiable.colorPrimary != "" ? `--primary:${local_varaiable.colorPrimary}` : ""};
                `}
          ></html>
          <body className="landing-body"></body>
        </Helmet>

        <div id="hs-overlay-switcher" className="hs-overlay hidden ti-offcanvas ti-offcanvas-right" tabIndex={-1}>
          <div className="ti-offcanvas-header">
            <h3 className="ti-offcanvas-title">
              Switcher
            </h3>
            <button type="button"
              className="ti-btn flex-shrink-0 p-0 transition-none text-gray-500 hover:text-gray-700 focus:ring-gray-400 focus:ring-offset-white dark:text-white/70 dark:hover:text-white/80 dark:focus:ring-white/10 dark:focus:ring-offset-white/10"
              data-hs-overlay="#hs-overlay-switcher">
              <span className="sr-only">Close modal</span>
              <i className="ri-close-circle-line leading-none text-lg"></i>
            </button>
          </div>
          <div className="ti-offcanvas-body" id="switcher-body">
            <div className="">
              <div className="">
                <p className="switcher-style-head">Theme Color Mode:</p>
                <div className="grid grid-cols-3 gap-6 switcher-style">
                  <div className="flex">
                    <input type="radio" name="theme-style" className="ti-form-radio" id="switcher-light-theme" checked={local_varaiable.class == "light"} onChange={e => { }} onClick={() => landingswitcherdata.Light(local_varaiable, ThemeChanger)} />
                    <label htmlFor="switcher-light-theme"
                      className="text-xs text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Light</label>
                  </div>
                  <div className="flex">
                    <input type="radio" name="theme-style" className="ti-form-radio" id="switcher-dark-theme" checked={local_varaiable.class == "dark"} onChange={e => { }} onClick={() => landingswitcherdata.Dark(local_varaiable, ThemeChanger)} />
                    <label htmlFor="switcher-dark-theme"
                      className="text-xs text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">Dark</label>
                  </div>
                </div>
              </div>
              <div className="">
                <p className="switcher-style-head">Directions:</p>
                <div className="grid grid-cols-3 gap-6 switcher-style">
                  <div className="flex">
                    <input type="radio" name="direction" className="ti-form-radio" id="switcher-ltr" checked={local_varaiable.dir == "ltr"} onChange={e => { }} onClick={() => landingswitcherdata.Ltr(local_varaiable, ThemeChanger)} />
                    <label htmlFor="switcher-ltr" className="text-xs text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">LTR</label>
                  </div>
                  <div className="flex">
                    <input type="radio" name="direction" className="ti-form-radio" id="switcher-rtl" checked={local_varaiable.dir == "rtl"} onChange={e => { }} onClick={() => landingswitcherdata.Rtl(local_varaiable, ThemeChanger)} />
                    <label htmlFor="switcher-rtl" className="text-xs text-gray-500 ltr:ml-2 rtl:mr-2 dark:text-white/70">RTL</label>
                  </div>
                </div>
              </div>
              <div className="theme-colors">
                <p className="switcher-style-head">Theme Primary:</p>
                <div className="flex switcher-style space-x-3 rtl:space-x-reverse">
                  <div className="ti-form-radio switch-select">
                    <input className="ti-form-radio color-input color-primary-1" type="radio" name="theme-primary"
                      id="switcher-primary" defaultChecked onClick={() => landingswitcherdata.primaryColor1(local_varaiable, ThemeChanger)} />
                  </div>
                  <div className="ti-form-radio switch-select">
                    <input className="ti-form-radio color-input color-primary-2" type="radio" name="theme-primary"
                      id="switcher-primary1" onClick={() => landingswitcherdata.primaryColor2(local_varaiable, ThemeChanger)} />
                  </div>
                  <div className="ti-form-radio switch-select">
                    <input className="ti-form-radio color-input color-primary-3" type="radio" name="theme-primary"
                      id="switcher-primary2" onClick={() => landingswitcherdata.primaryColor3(local_varaiable, ThemeChanger)} />
                  </div>
                  <div className="ti-form-radio switch-select">
                    <input className="ti-form-radio color-input color-primary-4" type="radio" name="theme-primary"
                      id="switcher-primary3" onClick={() => landingswitcherdata.primaryColor4(local_varaiable, ThemeChanger)} />
                  </div>
                  <div className="ti-form-radio switch-select">
                    <input className="ti-form-radio color-input color-primary-5" type="radio" name="theme-primary"
                      id="switcher-primary4" onClick={() => landingswitcherdata.primaryColor5(local_varaiable, ThemeChanger)} />
                  </div>
                  <div className="ti-form-radio switch-select ltr:pl-0 rtl:pr-0 mt-1 color-primary-light">

                  </div>
                  <Themeprimarycolor theme={local_varaiable} actionfunction={ThemeChanger} />

                </div>
              </div>
            </div>
          </div>
          <div className="ti-offcanvas-footer sm:flex justify-between">
             <a onClick={() => landingswitcherdata.LandingpageReset(ThemeChanger)} href="#!" id="reset-all" className="w-full ti-btn ti-btn-danger-full m-1">Reset</a> </div>
        </div>
      </HelmetProvider>
    </div>
  );
};

const mapStateToProps = (state) => ({
  local_varaiable: state
});

export default connect(mapStateToProps, { ThemeChanger })(Landingswitcher);
