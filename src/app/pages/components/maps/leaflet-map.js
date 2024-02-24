
import React, { Fragment } from 'react'
import Seo from '@/shared/layout-components/seo/seo'
import dynamic from 'next/dynamic';
const Leafletmapss = dynamic(() => import('@/shared/data/maps/leafletmapdata'), { ssr: false });


const Leafletmap = () => {

  return (
    <Fragment>
      <Seo title={"Leafletmap"} />
      <Leafletmapss />
    </Fragment>
  )
}

export default Leafletmap;

Leafletmap.layout = "Contentlayout"