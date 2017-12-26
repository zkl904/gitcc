import React from 'react';
import {Link,hashHistory} from 'react-router';
import pubsub from 'pubsub-js';
export default class Search extends React.Component{
  constructor(){
    super();
    this.state={
      list:[]
    }
    this.getData=this.getData.bind(this);
    this.getData();
    pubsub.publish('bLoading',true);
  }
  getData(){
    let url='../../data/home.json';
    fetch(url).then((res)=>{
      res.json().then((data)=>{
        setTimeout(()=>{
          this.setState({
            list:data
          })
          pubsub.publish('bLoading',false);
        },1000)
      })
    })
  }
  goBack(){
    this.props.router.go(-1);
  }
  render(){
    let list=this.state.list;
    return(
      <div className="searchlilst">
        <header data-am-widget="header" className="am-header am-header-default header">
          <div className="am-header-left am-header-nav">
            <a href="javascript:;" onClick={this.goBack.bind(this)} className="">
              <i className="am-header-icon am-icon-angle-left"></i>
            </a>
          </div>
          <h1 className="am-header-title"> <a href="#title-link" className="" style={{color: '#333'}}>厨房妈妈</a></h1>
          <div className="am-header-right am-header-nav">
            <a href="#right-link" className=""> </a>
          </div>
        </header>
        <div className="search-input">
          <input type="text" placeholder="请输入您搜索的内容" />
        </div>
        <ul className="paixu">
          <li><a href="">默认</a></li>
          <li><a href="">销量</a></li>
          <li><a href="">价格</a></li>
      </ul>
        <ul data-am-widget="gallery" className="am-gallery am-avg-sm-2 am-avg-md-3 am-avg-lg-4 am-gallery-default product">
          {
            list.map((item,index)=>{
              return(
                <li>
                  <div className="am-gallery-item">
                    <Link to={{pathname:'/detail/'+item.id}}>
                      <img src={'/src/assets/'+item.image}  alt=""/>
                      <h3 className="am-gallery-title">{item.name}</h3>
                      <div className="am-gallery-desc">
                        <em>￥{item.price}</em><i className="am-icon-cart-plus"></i>
                      </div>
                    </Link>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}