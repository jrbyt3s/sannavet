import { Gallerylist, LightboxGallery1 } from '@/shared/data/apps/gallerydata'
import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import Link from 'next/link'
import React, { Fragment } from 'react'

const Gallery = () => {
    return (
        <Fragment>
            <Seo title={"Gallery"} />
            <Pageheader currentpage="Gallery" activepage="Apps" mainpage="Gallery" />
            <div className="grid grid-cols-12 gap-6">
                <LightboxGallery1 />
            </div>

        </Fragment>
    )
}
Gallery.layout = "Contentlayout"

export default Gallery