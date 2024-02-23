import '../styles/globals.scss';
import ContentLayout from '../shared/layout-components/layout/content-layout';
import Authenticationlayout from "../shared/layout-components/layout/authentication-layout";
import Landinglayout from '@/shared/layout-components/layout/landing-layout';

const layouts = {

  Contentlayout: ContentLayout,
  Landinglayout: Landinglayout,
  Authenticationlayout: Authenticationlayout,

};
function MyApp({ Component, pageProps }) {
  
  const Layout = layouts[Component.layout] || ((pageProps) => <Component>{pageProps}</Component>);

  return (

    <Layout>
      <Component {...pageProps} />
    </Layout>
    
  )
}

export default MyApp;