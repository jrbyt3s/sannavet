import { SketchExample } from '@/shared/data/forms/form-elements/colopickerdata';
import { color1 } from '@/shared/data/prism/forms-prism';
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Showcode from '@/shared/layout-components/showcode/showcode';
import React, { Fragment, useState } from 'react'
import { ChromePicker } from "react-color";

const Colorpicker = () => {

    //color picker
    const [color, setColor] = useState("#6c5ffc");
    const [showColorPicker, setShowColorPicker] = useState(false);
    const handleChangeComplete = (color) => {
        console.log(color);
    };
    const [hex, setHex] = useState("#fff");

    return (
        <Fragment>
            <Seo title={"Color Pickers"} />
            <Pageheader currentpage="Color Pickers" activepage="Form Elements" mainpage="Color Picker" />
            <div className="grid grid-cols-12 gap-6">
                <div className="xl:col-span-3 col-span-12">
                    <Showcode title="Color Picker" code={color1}>
                        <input type="color" className="form-control form-control-color !border-0"
                            id="exampleColorInput" defaultValue="#136ad0" title="Choose your color" />
                    </Showcode>
                </div>
                <div className="xl:col-span-9 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Classic
                            </div>
                        </div>
                        <div className="box-body sm:flex justify-around">
                            <div>
                                <div className="text-center">
                                    <button className='theme-container active ti-btn ti-btn-primary-full' size='sm' onClick={() => setShowColorPicker(showColorPicker => !showColorPicker)}>{showColorPicker ? "Close Picker" : "Pick Color"}</button>
                                    {showColorPicker && (<ChromePicker className='mt-3' disableAlpha={true} color={color} onChange={updatedColor => setColor(updatedColor.hex)} onChangeComplete={handleChangeComplete} />
                                    )}

                                </div>
                            </div>
                            <div>
                                <SketchExample />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Colorpicker.layout = "Contentlayout"

export default Colorpicker