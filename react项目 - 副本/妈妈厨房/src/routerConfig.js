import React from 'react';
import App from './component/app';
import Address from './component/address';
import Content from './component/content';
import Detail from './component/detail';
import Home from './component/home';
import Member from './component/member';
import Order from './component/order';
import Search from './component/search';
import Speak from './component/speak';
import We from './component/we';
import Yhq from './component/yhq';
import Login from './component/login';
import Reg from './component/reg';
import Shopcar from './component/shopcar';

import {Router,Route,Redirect,IndexRoute,hashHistory} from 'react-router';
export const RouterConfig=()=>(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
       <IndexRoute  component={Home}/>
      <Route path="/address" component={Address}></Route>
      <Route path="/content" component={Content}>
        <Route path=":aid" component={Content}/>
      </Route>
      <Route path="/detail" component={Detail}>
          <Route path=":aid" component={Detail}/>
      </Route>
      <Route path="/home" component={Home}></Route>
      <Route path="/member" component={Member}></Route>
      <Route path="/order" component={Order}></Route>
      <Route path="/search" component={Search}></Route>
      <Route path="/speak" component={Speak}></Route>
      <Route path="/we" component={We}></Route>
      <Route path="/yhq" component={Yhq}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/reg" component={Reg}></Route>
      <Route path="/shopcar" component={Shopcar}></Route>
    </Route>
  </Router>
)