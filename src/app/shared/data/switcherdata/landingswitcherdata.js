
import store from "@/shared/redux/store";
import React, { useState } from "react";

export function Dark(theme, actionfunction) {
    console.log(actionfunction);
    actionfunction({ ...theme, "class": "dark" });
    localStorage.setItem("ynexdarktheme", "dark");
    localStorage.removeItem("ynexlighttheme");
}
export function Light(theme, actionfunction) {
    actionfunction({
        ...theme, "class": "light",
        "dataHeaderStyles": "light",
        "bodyBg": "",
        "darkBg": "",
    });
    localStorage.setItem("ynexlighttheme", "light");
    localStorage.removeItem("ynexdarktheme");
}
export function Ltr(theme, actionfunction) {
    actionfunction({ ...theme, "dir": "ltr" });
    localStorage.removeItem("ynexrtl");
}
export function Rtl(theme, actionfunction) {
    actionfunction({ ...theme, "dir": "rtl" });
    localStorage.setItem("ynexrtl", "rtl");
}

export const primaryColor1 = (theme, actionfunction) => {
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "58, 88, 146",
        "colorPrimary": "58, 88, 146"
    });
    localStorage.setItem("primaryRGB", "58, 88, 146");
    localStorage.setItem("primaryRGB1", "58 88 146");
};
export const primaryColor2 = (theme, actionfunction) => {
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "92, 144, 163",
        "colorPrimary": "92 144 163"
    });
    localStorage.setItem("primaryRGB", "92, 144, 163");
    localStorage.setItem("primaryRGB1", "92 144 163");
};
export const primaryColor3 = (theme, actionfunction) => {
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "161, 90, 223",
        "colorPrimary": "161, 90, 223"
    });
    localStorage.setItem("primaryRGB", "161, 90, 223");
    localStorage.setItem("primaryRGB1", "161, 90, 223");
};
export const primaryColor4 = (theme, actionfunction) => {
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "78, 172, 76",
        "colorPrimary": "78, 172, 76"
    });
    localStorage.setItem("primaryRGB", "78, 172, 76");
    localStorage.setItem("primaryRGB1", "78, 172, 76");
};
export const primaryColor5 = (theme, actionfunction) => {
    actionfunction({
        ...theme,
        "colorPrimaryRgb": "223, 90, 90",
        "colorPrimary": "223, 90, 90"
    });
    localStorage.setItem("primaryRGB", "223, 90, 90");
    localStorage.setItem("primaryRGB1", "223, 90, 90");
};


const ColorPicker = (props) => {
    return (
        <div className='color-picker-input'>
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
const Themeprimarycolor = ({ theme, actionfunction }) => {
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
        <div className="Themeprimarycolor">
            <ColorPicker onChange={handleInput} value={state} />
        </div>
    );
};

export default Themeprimarycolor;

export const LandingpageReset = (actionfunction) => {
    const theme = store.getState()
    actionfunction({
        ...theme,
        lang: "en",
        dir: "ltr",
        class: "light",
        dataHeaderStyles: "light",
        colorPrimaryRgb: "",
        colorPrimary: "",
        bodyBg: "",
        darkBg: "",
        inputBorder: "",
        Light: "",
        body: {
            class: ""
        }
    })
    localStorage.clear();

};

export const LocalStorageBackup1 = (_theme, actionfunction) => {

    (localStorage.ynexdarktheme) ? Dark(actionfunction) : "";
    (localStorage.ynexlighttheme) ? Light(actionfunction) : "";
    (localStorage.ynexrtl) ? Rtl(actionfunction) : "";

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
    //Theme Primary:
    if (localStorage.dynamiccolor) {
        const theme = store.getState();
        actionfunction({
            ...theme,
            "colorPrimaryRgb": localStorage.dynamiccolor,
            "colorPrimary": localStorage.dynamiccolor
        });
    }

};
