import React from 'react';
import ReactDom from 'react-dom';
import {RouterConfig} from './routerConfig';
import App from './component/app';
import defaultState from './store/state';  //拿取state中的默认数据
import {Provider} from 'react-redux';
import reducer from './store/reduce';  // 引入reducer 文件
import {createStore} from 'redux';


const store=createStore(reducer,defaultState);  //定义store
ReactDom.render(    //状态管理  容器Routerconfig
  <Provider store={store}>
    <RouterConfig/>
  </Provider>,
  document.querySelector('#app')
)