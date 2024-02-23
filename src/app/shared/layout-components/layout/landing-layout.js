import store from '@/shared/redux/store';
import React, { Fragment, useEffect } from 'react';
import { Provider } from 'react-redux';
import Landingswitcher from '../switcher/landingswitcher';

const Landinglayout = ({children}) => {

  useEffect(() => {
		import("preline");

	}, []);


  return (
    <Fragment>
    <Provider store={store}>
        <Landingswitcher />
        {children}
      <div id="responsive-overlay"></div>
    </Provider>
  </Fragment>
  )
}

export default Landinglayout