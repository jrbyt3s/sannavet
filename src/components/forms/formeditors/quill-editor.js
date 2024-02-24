import Editor from '@/shared/data/forms/form-editors/quilleditordata'
import Editor1 from '@/shared/data/forms/form-editors/quilleditordata1'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'

const Quilleditor = () => {
    return (
        <Fragment>
            <Seo title={"Quill Editor"} />
            <Pageheader currentpage="Quill Editor" activepage="Form Editors" mainpage="Quill Editor" />
            <div className="grid grid-cols-12 gp-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Quill Snow Editor
                            </div>
                        </div>
                        <div className="box-body">
                            <Editor placeholder={"Write something..."} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-12 gp-6">
                <div className="xl:col-span-12 col-span-12">
                    <div className="box">
                        <div className="box-header">
                            <div className="box-title">
                                Quill Bubble Editor
                            </div>
                        </div>
                        <div className="box-body">
                            <Editor1 placeholder={"Write something..."} />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
Quilleditor.layout = "Contentlayout"

export default Quilleditor