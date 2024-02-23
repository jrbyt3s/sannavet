import Pageheader from '@/shared/layout-components/page-header/pageheader'
import Seo from '@/shared/layout-components/seo/seo'
import React, { Fragment } from 'react'

const Empty = () => {
  return (
    <Fragment>
      <Seo title={"Empty"} />
      <Pageheader currentpage="Empty" activepage="Pages" mainpage="Empty" />

    </Fragment>
  )
}
Empty.layout = "Contentlayout"

export default Empty