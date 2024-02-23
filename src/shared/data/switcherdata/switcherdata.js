import store from "@/shared/redux/store";
import { useState } from "react";

export function Dark(actionfunction) {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "class": "dark",
        "dataHeaderStyles": "dark",
        "dataMenuStyles": "dark",
        "bodyBg": "",
        "darkBg": "",
        "inputBorder": "",
        "Light": "",
    })
    localStorage.setItem("ynexdarktheme", "dark");
    localStorage.removeItem("ynexlighttheme");
    localStorage.removeItem("bodyBgRGB");
    localStorage.removeItem("darkBgRGB");
    localStorage.removeItem("inputBorder");
    localStorage.removeItem("Light");
}
export function Light(actionfunction) {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "class": "light",
        "dataHeaderStyles": "light",
        "bodyBg": "",
        "darkBg": "",
        // "colorPrimary":"",
        // "colorPrimaryRgb":"",
        "inputBorder": "",
        "Light": "",
        "dataMenuStyles": theme.dataNavLayout == 'horizontal' ? 'light' : "dark"
    })
    localStorage.setItem("ynexlighttheme", "light");
    localStorage.removeItem("ynexdarktheme");
    localStorage.removeItem("bodyBgRGB");
    localStorage.removeItem("ynexHeader");
    localStorage.removeItem("ynexMenu");
    localStorage.removeItem("primaryRGB");
    localStorage.removeItem("primaryRGB1");
    localStorage.removeItem("inputBorder");
    localStorage.removeItem("Light");

}

export function Ltr(actionfunction) {
    const theme = store.getState()
    actionfunction({ ...theme, "dir": "ltr" })
    localStorage.removeItem("ynexrtl");
};
export function Rtl(actionfunction) {
    const theme = store.getState()
    actionfunction({ ...theme, "dir": "rtl", })
    localStorage.setItem("ynexrtl", "rtl");
};
export const Vertical = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataMenuStyles": "dark",
        "dataVerticalStyle": "overlay",
        "dataToggled": "",
        "dataNavStyle": ''
    })
    localStorage.setItem("ynexlayout", "vertical");
    localStorage.removeItem("ynexnavstyles");

};

export const HorizontalClick = (actionfunction) => {
    const theme = store.getState()
    setTimeout(() => {
        document.querySelector(".main-content")?.click();
    }, 100);
    actionfunction({
        ...theme,
        "dataNavLayout": "horizontal",
        "dataMenuStyles": localStorage.ynexdarktheme ? 'dark' : localStorage.darkBgRGB ? 'dark' : localStorage.ynexMenu ? localStorage.ynexMenu : "light",
        "dataVerticalStyle": "",
        "dataNavStyle": localStorage.ynexnavstyles ? localStorage.ynexnavstyles : "menu-click"

    })
    localStorage.setItem("ynexlayout", "horizontal");
    localStorage.removeItem("ynexverticalstyles");
};
export const Menuclick = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataNavStyle": "menu-click",
        "dataToggled": "menu-click-closed",
        "dataVerticalStyle": ""

    })
    localStorage.setItem("ynexnavstyles", "menu-click");

};
export const MenuHover = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataNavStyle": "menu-hover",
        "dataVerticalStyle": "",
        "dataToggled": "menu-hover-closed",
        "horStyle": ""
    })
    localStorage.setItem("ynexnavstyles", "menu-hover");
    localStorage.removeItem("ynexverticalstyles");
};

export const IconClick = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataVerticalStyle": "",
        "dataNavStyle": "icon-click",
        "dataToggled": "icon-click-closed",
    })
    localStorage.setItem("ynexnavstyles", "icon-click");
    localStorage.removeItem("ynexverticalstyles");
    const Sidebar = document.querySelector(".main-menu");
    Sidebar.style.marginInline = "0px";
};
export const IconHover = (actionfunction) => {
    setTimeout(() => {
        const ulElement = document?.querySelector(".slide.has-sub.open ul");
      
        ulElement && (
          ulElement.classList.toggle("child1"),
          ulElement.style.display = ulElement.classList.contains("child1") ? "block" : "none"
        );
      }, 100);
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataVerticalStyle": "",
        "dataNavStyle": "icon-hover",
        "dataToggled": "icon-hover-closed"
    })
    localStorage.setItem("ynexnavstyles", "icon-hover");
    localStorage.removeItem("ynexverticalstyles");
    const Sidebar = document.querySelector(".main-menu");
    Sidebar.style.marginInline = "0px";
};

export const Regular = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataPageStyle": "regular"
    });
    localStorage.setItem("ynexregular", "Regular");
    localStorage.removeItem("ynexclassic");
    localStorage.removeItem("ynexmodern");
};
export const Classic = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataPageStyle": "classic",
    });
    localStorage.setItem("ynexclassic", "Classic");
    localStorage.removeItem("ynexregular");
    localStorage.removeItem("ynexmodern");
};
export const Modern = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "dataPageStyle": "modern",
    });
    localStorage.setItem("ynexmodern", "Modern");
    localStorage.removeItem("ynexregular");
    localStorage.removeItem("ynexclassic");
};
export function Enable(actionfunction) {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "loader": "enable"
    });
    localStorage.setItem("ynexloaderenable", "enable");
    localStorage.removeItem("ynexloaderdisable");
}
export function Disable(actionfunction) {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "loader": "disable"
    });
    localStorage.setItem("ynexloaderdisable", "disable");
    localStorage.removeItem("ynexloaderenable");
}

export const Fullwidth = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataWidth": "fullwidth",
    })
    localStorage.setItem("ynexfullwidth", "Fullwidth");
    localStorage.removeItem("ynexboxed");

};
export const Boxed = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataWidth": "boxed",
    })
    localStorage.setItem("ynexboxed", "Boxed");
    localStorage.removeItem("ynexfullwidth");
};
export const FixedMenu = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataMenuPosition": "fixed",
    })
    localStorage.setItem("ynexmenufixed", "MenuFixed");
    localStorage.removeItem("ynexmenuscrollable");
};
export const scrollMenu = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataMenuPosition": "scrollable",
    })
    localStorage.setItem("ynexmenuscrollable", "Menuscrolled");
    localStorage.removeItem("ynexmenufixed")
};
export const Headerpostionfixed = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataHeaderPosition": "fixed",
    })
    localStorage.setItem("ynexheaderfixed", 'FixedHeader');
    localStorage.removeItem("ynexheaderscrollable");
};
export const Headerpostionscroll = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataHeaderPosition": "scrollable",
    })
    localStorage.setItem("ynexheaderscrollable", "ScrollableHeader");
    localStorage.removeItem("ynexheaderfixed");
};

export const Defaultmenu = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataVerticalStyle": "overlay",
        "dataNavStyle":"" ,
     "dataNavLayout": "vertical",
        "dataToggled": "closed"
    })
    localStorage.setItem("ynexverticalstyles", "true");
    localStorage.removeItem("ynexnavstyles");

};
export const Closedmenu = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "closed",
        "dataNavStyle":"" ,
        "dataToggled": "close-menu-close"
    })
    localStorage.setItem("ynexverticalstyles", "closed");
    localStorage.removeItem("ynexnavstyles");

};
export const iconText = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "icontext",
        "dataNavStyle":"" ,
        "dataToggled": "icon-text-close"
    })
    localStorage.setItem("ynexverticalstyles", "icontext");
    localStorage.removeItem("ynexnavstyles");
};

export const iconOverayFn = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "overlay",
        "dataNavStyle":"" ,
        "dataToggled": "icon-overlay-close",
    })
    localStorage.setItem("ynexverticalstyles", "overlay");
    localStorage.removeItem("ynexnavstyles");
};

export const DetachedFn = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "detached",
        "dataNavStyle":"" ,
        "dataToggled": "detached-close",
    })
    localStorage.setItem("ynexverticalstyles", "detached");
    localStorage.removeItem("ynexnavstyles");
};
export const DoubletFn = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataNavLayout": "vertical",
        "dataVerticalStyle": "doublemenu",
        "dataNavStyle":"" ,
        "dataToggled": "double-menu-open",
        "dataNavStyle": "",
    })
    localStorage.setItem("ynexverticalstyles", "doublemenu");
    localStorage.removeItem("ynexnavstyles");

    setTimeout(() => {
        if (!document.querySelector(".main-menu .has-sub.open")) {
            const theme = store.getState();
            actionfunction(
                {
                    ...theme,
                    "dataToggled": "double-menu-close"
                }
            );
        }
    }, 100);
}

export const colorMenu = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataMenuStyles": "color",


    })
    localStorage.setItem("ynexMenu", "color");
    localStorage.removeItem("gradient");
};

export const lightMenu = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataMenuStyles": "light",
    })
    localStorage.setItem("ynexMenu", "light");
    localStorage.removeItem("light");
};

export const darkMenu = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataMenuStyles": "dark",
    })
    localStorage.setItem("ynexMenu", "dark");
    localStorage.removeItem("light");
};

export const gradientMenu = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataMenuStyles": "gradient",
    })
    localStorage.setItem("ynexMenu", "gradient");
    localStorage.removeItem("color");
};
export const transparentMenu = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataMenuStyles": "transparent",
    })
    localStorage.setItem("ynexMenu", "transparent");
    localStorage.removeItem("gradient");
};

export const lightHeader = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataHeaderStyles": "light",
    })
    localStorage.setItem("ynexHeader", "light");
    localStorage.removeItem("dark");
};
export const darkHeader = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataHeaderStyles": "dark",
    })
    localStorage.setItem("ynexHeader", "dark");
    localStorage.removeItem("light");
};
export const colorHeader = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataHeaderStyles": "color",
    })
    localStorage.removeItem("dark");
    localStorage.setItem("ynexHeader", "color");
};
export const gradientHeader = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataHeaderStyles": "gradient",
    })
    localStorage.removeItem("transparent");
    localStorage.setItem("ynexHeader", "gradient");
};
export const transparentHeader = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "dataHeaderStyles": "transparent",
    })
    localStorage.removeItem("gradient");
    localStorage.setItem("ynexHeader", "transparent");
};

export const primaryColor1 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "58, 88, 146",
        "colorPrimary": "58 88 146"
    });
    localStorage.setItem("primaryRGB", "58, 88, 146");
    localStorage.setItem("primaryRGB1", "58 88 146");
};
export const primaryColor2 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "92, 144, 163",
        "colorPrimary": "92 144 163"
    });
    localStorage.setItem("primaryRGB", "92, 144, 163");
    localStorage.setItem("primaryRGB1", "92 144 163");
};
export const primaryColor3 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "161, 90, 223",
        "colorPrimary": "161 90 223"
    });
    localStorage.setItem("primaryRGB", "161, 90, 223");
    localStorage.setItem("primaryRGB1", "161 90 223");
};
export const primaryColor4 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "78, 172, 76",
        "colorPrimary": "78 172 76"
    });
    localStorage.setItem("primaryRGB", "78, 172, 76");
    localStorage.setItem("primaryRGB1", "78 172 76");
};
export const primaryColor5 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "223, 90, 90",
        "colorPrimary": "223 90 90"
    });
    localStorage.setItem("primaryRGB", "223, 90, 90");
    localStorage.setItem("primaryRGB1", "223 90 90");
};

export const backgroundColor1 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodyBg": "34 44 110",
        "darkBg": "20 30 96",
        "inputBorder": "25 35 102",
        "Light": "25 35 102",
        "class": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": "dark"
    });
    localStorage.setItem('darkBgRGB', "20 30 96");
    localStorage.setItem('bodyBgRGB', "34 44 110");
    localStorage.setItem('Light', "25 35 102");
    localStorage.setItem('ynexMenu', "dark");
    localStorage.setItem('ynexHeader', "dark");


};
export const backgroundColor2 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodyBg": "22 92 129",
        "Light": "13 83 120",
        "darkBg": "8 78 115",
        "inputBorder": "13 83 120",
        "class": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": "dark"
    });
    localStorage.setItem('darkBgRGB', "8 78 115");
    localStorage.setItem('bodyBgRGB', "22 92 129");
    localStorage.setItem('Light', "13 83 120",);
    localStorage.setItem('ynexMenu', "dark");
    localStorage.setItem('ynexHeader', "dark");
};
export const backgroundColor3 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodyBg": "104 51 149",
        "Light": "95 42 140",
        "darkBg": "90 37 135",
        "inputBorder": "95 42 140",
        "class": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": "dark"
    });
    localStorage.setItem('darkBgRGB', "90 37 135");
    localStorage.setItem('bodyBgRGB', "104 51 149");
    localStorage.setItem('Light', "95 42 140");
    localStorage.setItem('ynexMenu', "dark");
    localStorage.setItem('ynexHeader', "dark");
};
export const backgroundColor4 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "Light": "29 106 56",
        "bodyBg": "38 115 64",
        "darkBg": "24 101 51",
        "inputBorder": "29 106 56;",
        "class": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": "dark"
    });
    localStorage.setItem('darkBgRGB', "24 101 51");
    localStorage.setItem('bodyBgRGB', "38 115 64");
    localStorage.setItem('Light', "29 106 56");
    localStorage.setItem('ynexMenu', "dark");
    localStorage.setItem('ynexHeader', "dark");
};
export const backgroundColor5 = (actionfunction) => {
    const theme = store.getState();
    actionfunction({
        ...theme,
        "bodyBg": " 134 80 34",
        "Light": "125 71 25",
        "darkBg": "120 66 20",
        "inputBorder": "125 71 25",
        "class": "dark",
        "dataMenuStyles": "dark",
        "dataHeaderStyles": "dark"
    });
    localStorage.setItem('darkBgRGB', "120 66 20");
    localStorage.setItem('bodyBgRGB', "134 80 34");
    localStorage.setItem('Light', "125 71 25");
    localStorage.setItem('ynexMenu', "dark");
    localStorage.setItem('ynexHeader', "dark");
};

const ColorPicker = (props) => {
    return (
        <div className="color-picker-input">
            <input type="color" {...props} />
        </div>
    );
};

function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}
//themeprimarycolor
const Themeprimarycolor = ({ actionfunction }) => {
    const theme = store.getState();
    const [state, updateState] = useState("#FFFFFF");
    const handleInput = (e) => {
        let { r, g, b } = hexToRgb(e.target.value);
        updateState(e.target.value);
        actionfunction({
            ...theme,
            "colorPrimaryRgb": `${r} ${g} ${b}`,
            "colorPrimary": `${r} ${g} ${b}`
        });
        localStorage.setItem("dynamiccolor", `${r} ${g} ${b}`);
    };
    return (
        <div className="Themeprimarycolor theme-container-primary pickr-container-primary">
            <ColorPicker onChange={handleInput} value={state} />
        </div>
    );
};

export default Themeprimarycolor;

//themeBackground
export const Themebackgroundcolor = ({ actionfunction }) => {
    const theme = store.getState();
    const [state, updateState] = useState("#FFFFFF");
    const handleInput = (e) => {
        let { r, g, b } = hexToRgb(e.target.value);
        updateState(e.target.value);
        actionfunction({
            ...theme,
            "bodyBg": `${r + 14} ${g + 14} ${b + 14}`,
            "darkBg": `${r} ${g} ${b}`,
            "inputBorder": `${r + 5} ${g + 5} ${b + 5}`,
            "Light": `${r + 5} ${g + 5} ${b + 5}`,
            "class": "dark",
            "dataHeaderStyles": "dark",
            "dataMenuStyles": "",
        });
        localStorage.setItem("bodyBgRGB", `${r + 14} ${g + 14} ${b + 14}`);
        localStorage.setItem('darkBgRGB', `${r} ${g} ${b}`);
        localStorage.setItem('Light', `${r + 5} ${g + 5} ${b + 5}`);
        localStorage.setItem('inputBorder', `${r + 5} ${g + 5} ${b + 5}`);
        localStorage.setItem('ynexMenu', "dark");
        localStorage.setItem('ynexHeader', "dark");

    };
    return (
        <div className="Themebackgroundcolor">
            <ColorPicker onChange={handleInput} value={state} />
        </div>
    );
};

export const bgImage1 = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "bgImg": "bgimg1"
    })
    localStorage.setItem("bgimage1", "bgimg1");
};
export const bgImage2 = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "bgImg": "bgimg2"
    })
    localStorage.setItem("bgimage2", "bgimg2");
};
export const bgImage3 = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "bgImg": "bgimg3"
    })
    localStorage.setItem("bgimage3", "bgimg3");
};
export const bgImage4 = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "bgImg": "bgimg4"
    })
    localStorage.setItem("bgimage4", "bgimg4");
};
export const bgImage5 = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        "bgImg": "bgimg5"
    })
    localStorage.setItem("bgimage5", "bgimg5");
};
export const Reset = (actionfunction) => {
    const theme = store.getState()
    Vertical(actionfunction)
    actionfunction({
        ...theme,
        lang: "en",
        dir: "ltr",
        class: "light",
        dataMenuStyles: "dark",
        dataNavLayout: "vertical",
        dataHeaderStyles: "light",
        dataVerticalStyle: "overlay",
        dataToggled: "",
        dataNavStyle: "",
        horStyle: "",
        dataPageStyle: "regular",
        dataWidth: "fullwidth",
        dataMenuPosition: "fixed",
        dataHeaderPosition: "fixed",
        iconOverlay: "",
        colorPrimaryRgb: "",
        colorPrimary: "",
        bodyBg: "",
        darkBg: "",
        inputBorder: "",
        Light: "",
        bgImg: "",
        loader: "disable",
        iconText: "",
        body: {
            class: ""
        }
    })
    localStorage.clear();
}

export const LocalStorageBackup = (actionfunction) => {
    (localStorage.ynexdarktheme) ? Dark(actionfunction) : "";
    (localStorage.ynexlighttheme) ? Light(actionfunction) : "";
    (localStorage.ynexrtl) ? Rtl(actionfunction) : "";
    (localStorage.ynexregular) ? Regular(actionfunction) : "";
    (localStorage.ynexclassic) ? Classic(actionfunction) : "";
    (localStorage.ynexmodern) ? Modern(actionfunction) : "";
    (localStorage.ynexloaderenable) ? Enable(actionfunction) : "";
    (localStorage.ynexloaderdisable) ? Disable(actionfunction) : "";
    (localStorage.ynexfullwidth) ? Fullwidth(actionfunction) : "";
    (localStorage.ynexboxed) ? Boxed(actionfunction) : "";
    (localStorage.ynexmenufixed) ? FixedMenu(actionfunction) : "";
    (localStorage.ynexmenuscrollable) ? scrollMenu(actionfunction) : "";
    (localStorage.ynexheaderfixed) ? Headerpostionfixed(actionfunction) : "";
    (localStorage.ynexheaderscrollable) ? Headerpostionscroll(actionfunction) : "";
    (localStorage.bgimage1) ? bgImage1(actionfunction) : '';
    (localStorage.bgimage2) ? bgImage2(actionfunction) : '';
    (localStorage.bgimage3) ? bgImage3(actionfunction) : '';
    (localStorage.bgimage4) ? bgImage4(actionfunction) : '';
    (localStorage.bgimage5) ? bgImage5(actionfunction) : '';

    (localStorage.ynexnavstyles === "menu-click") ? Menuclick(actionfunction) : '';
    (localStorage.ynexnavstyles === "menu-hover") ? MenuHover(actionfunction) : '';
    (localStorage.ynexnavstyles === "icon-click") ? IconClick(actionfunction) : '';
    (localStorage.ynexnavstyles === "icon-hover") ? IconHover(actionfunction) : '';


    (localStorage.ynexlayout == 'horizontal') && HorizontalClick(actionfunction);

    // // ThemeColor MenuColor Start
    switch (localStorage.ynexMenu) {
        case 'light':
            lightMenu(actionfunction);
            break;
        case 'dark':
            darkMenu(actionfunction);

            break;
        case 'color':
            colorMenu(actionfunction);

            break;
        case 'gradient':
            gradientMenu(actionfunction);

            break;
        case 'transparent':
            transparentMenu(actionfunction);

            break;
        default:
            break;
    }

    // ThemeColor MenuColor End

    // ThemeColor Header Colors: start
    switch (localStorage.ynexHeader) {
        case 'light':
            lightHeader(actionfunction);

            break;
        case 'dark':
            darkHeader(actionfunction);

            break;
        case 'color':
            colorHeader(actionfunction);

            break;
        case 'gradient':
            gradientHeader(actionfunction);

            break;
        case 'transparent':
            transparentHeader(actionfunction);

            break;
        default:
            break;
    }
    // ThemeColor Header Colors: End

    // Theme Primary: Colors: Start
    switch (localStorage.primaryRGB) {
        case '58, 88, 146':
            primaryColor1(actionfunction);

            break;
        case '92, 144, 1633':
            primaryColor2(actionfunction);

            break;
        case '161, 90, 223':
            primaryColor3(actionfunction);

            break;
        case '78, 172, 76':
            primaryColor4(actionfunction);

            break;
        case '223, 90, 90':
            primaryColor5(actionfunction);

            break;
        default:
            break;
    }
    // Theme Primary: Colors: End

    switch (localStorage.bodyBgRGB) {
        case '50 62 93':
            backgroundColor1(actionfunction);

            break;
        case '81 93 50':
            backgroundColor2(actionfunction);

            break;
        case '93 64 107':
            backgroundColor3(actionfunction);

            break;
        case '64 101 107':
            backgroundColor4(actionfunction);

            break;
        case '107 64 64':
            backgroundColor5(actionfunction);

            break;
        default:
            break;
    }
    switch (localStorage.darkBgRGB) {
        case '50 62 93':
            backgroundColor1(actionfunction);

            break;
        case '81 93 50':
            backgroundColor2(actionfunction);

            break;
        case '93 64 107':
            backgroundColor3(actionfunction);

            break;
        case '64 101 107':
            backgroundColor4(actionfunction);

            break;
        case '107 64 64':
            backgroundColor5(actionfunction);

            break;
        default:
            break;
    }
    switch (localStorage.Light) {
        case '50 62 93':
            backgroundColor1(actionfunction);

            break;
        case '81 93 50':
            backgroundColor2(actionfunction);

            break;
        case '93 64 107':
            backgroundColor3(actionfunction);

            break;
        case '64 101 107':
            backgroundColor4(actionfunction);

            break;
        case '107 64 64':
            backgroundColor5(actionfunction);

            break;
        default:
            break;
    }
    switch (localStorage.inputBorder) {
        case '50 62 93':
            backgroundColor1(actionfunction);

            break;
        case '81 93 50':
            backgroundColor2(actionfunction);

            break;
        case '93 64 107':
            backgroundColor3(actionfunction);

            break;
        case '64 101 107':
            backgroundColor4(actionfunction);

            break;
        case '107 64 64':
            backgroundColor5(actionfunction);

            break;
        default:
            break;
    }

    if (localStorage.ynexverticalstyles) {
        let verticalStyles = localStorage.getItem("ynexverticalstyles");

        switch (verticalStyles) {
            case "default":
                let defaultid = document.getElementById("switcher-default-menu");
                defaultid.checked = true;
                Defaultmenu(actionfunction)

                break;
            case "closed":
                let closedid = document.getElementById("switcher-icontext-menu");
                closedid.checked = true;
                Closedmenu(actionfunction)

                break;
            case "icontext":
                let icontextid = document.getElementById("switcher-icontext-menu");
                icontextid.checked = true;
                iconText(actionfunction)


                break;
            case "overlay":
                let overlayid = document.getElementById("switcher-detached");
                overlayid.checked = true;
                iconOverayFn(actionfunction)

                break;
            case "detached":
                let detachedid = document.getElementById("switcher-detached");
                detachedid.checked = true;
                DetachedFn(actionfunction)

                break;
            case "doublemenu":
                let doubleMenuid = document.getElementById("switcher-double-menu");
                doubleMenuid.checked = true;
                DoubletFn(actionfunction)

                break;

            default:
                let defaultbutton = document.getElementById("switcher-default-menu");
                defaultbutton.checked = true;
                break;
        }
    }

    //Theme Primary:
    if (localStorage.dynamiccolor) {
        const theme = store.getState()
        actionfunction({
            ...theme,
            "colorPrimaryRgb": localStorage.dynamiccolor,
            "colorPrimary": localStorage.dynamiccolor
        })
    }
    //Theme BAckground:
    if (localStorage.bodyBgRGB) {
        let updateddarkBg = `${Number(localStorage.bodyBgRGB.split(" ")[0]) + 14} ${Number(localStorage.bodyBgRGB.split(" ")[1]) + 14} ${Number(localStorage.bodyBgRGB.split(" ")[2]) + 14}`
        const theme = store.getState()
        actionfunction({
            ...theme,
            "bodyBg": updateddarkBg,
            "darkBg": localStorage.bodyBgRGB,
            "class": "dark",
            "dataHeaderStyles": "dark",
            "Light": localStorage.Light,
            "inputBorder": localStorage.inputBorder
        })
    }
    switch (localStorage.ynexMenu) {
        case 'light':
            lightMenu(actionfunction);
            break;
        case 'dark':
            darkMenu(actionfunction);

            break;
        case 'color':
            colorMenu(actionfunction);

            break;
        case 'gradient':
            gradientMenu(actionfunction);

            break;
        case 'transparent':
            transparentMenu(actionfunction);

            break;
        default:
            break;
    }
    // ThemeColor Header Colors: start
    switch (localStorage.ynexHeader) {
        case 'light':
            lightHeader(actionfunction);

            break;
        case 'dark':
            darkHeader(actionfunction);

            break;
        case 'color':
            colorHeader(actionfunction);

            break;
        case 'gradient':
            gradientHeader(actionfunction);

            break;
        case 'transparent':
            transparentHeader(actionfunction);

            break;
        default:
            break;
    }
}
