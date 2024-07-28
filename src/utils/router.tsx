import {ReactNode} from 'react'

import {
    BrowserRouter,
    Route,
    Switch,
    Redirect,
  } from "react-router-dom";

import Home from '../pages/Home'
import Logement from '../pages/Logement'
import Aboutus from '../pages/Aboutus'
import Error404 from '../pages/Error404'
import Header from '../components/Header'
import Footer from '../components/Footer';

type LayoutProps = {
  children: ReactNode;
}

const Layout = ({children}: LayoutProps) => <>
    <Header />
    <main>{children}</main>
    <Footer />
</>

export const Router = () => (

<BrowserRouter>
  <Layout>
    <Switch>
      <Route exact path="/">
        <Redirect to="/home"/>
      </Route>
    <Route exact path={"/home"} component={Home} />
    <Route exact path={"/aboutus"} component={Aboutus} />
    <Route exact path={"/logement/:id"} component={Logement} />
    <Route exact path={"*"} component={Error404} />
  </Switch>
 </Layout>
</BrowserRouter>
);

export default Router;