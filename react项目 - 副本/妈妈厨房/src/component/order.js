import React from 'react';
export default class Order extends React.Component{
  goBack(){
    this.props.router.go(-1);
  }
  render(){
    return(
      <div className="orderlist">
        <header data-am-widget="header" className="am-header am-header-default header">
          <div className="am-header-left am-header-nav">
            <a href="javascript:;" onClick={this.goBack.bind(this)} className="">
              <i className="am-header-icon am-icon-angle-left"></i>
            </a>
          </div>
          <h1 className="am-header-title"> <a href="#title-link" className="" style={{color: '#333'}}>全部订单</a></h1>
          <div className="am-header-right am-header-nav">
            <a href="#right-link" className=""> </a>
          </div>
        </header>
        <div className="cate-search" style={{position:'relative',top:0}}>
          <input type="text" className="cate-input" placeholder="搜索全部订单"/>
            <input type="button" className="cate-btn"/>
        </div>
        <ul className="order-style">
          <li className="current"><a href="allorder.html">全部</a></li>
          <li><a href="">待付款</a></li>
          <li><a href="">待收货</a></li>
          <li><a href="">待评价</a></li>
          <li><a href="">退换货</a></li>
        </ul>
        <div className="c-comment">
          <span className="c-comment-num">订单编号：150916517682</span>
          <span className="c-comment-suc">待付款</span>
        </div>
        <div className="c-comment-list" style={{border: 0}}>
          <a className="o-con" href="">
            <div className="o-con-img"><img src="/src/assets/images/detail.png" /></div>
            <div className="o-con-txt">
              <p>卤香滑鸡</p>
              <p className="price">￥88</p>
              <p>合计：<span>￥176.00</span></p>
            </div>
            <div className="o-con-much"> <h4>x2</h4></div>
    
          </a>
          <div className="c-com-money">花5个商品 实付金额：<span>￥ 175.00</span></div>
        </div>
        <div className="c-com-btn">
          <a href="">立即支付</a>
          <a href="">取消订单</a>
        </div>
        <div className="clear"></div>
        <div className="c-comment">
          <span className="c-comment-num">订单编号：150916517682</span>
          <span className="c-comment-suc">卖家已发货</span>
        </div>
        <div className="c-comment-list" style={{border: 0}}>
          <a className="o-con" href="">
            <div className="o-con-img"><img src="/src/assets/images/detail.png" /></div>
            <div className="o-con-txt">
              <p>卤香滑鸡</p>
              <p className="price">￥88</p>
              <p>合计：<span>￥176.00</span></p>
            </div>
            <div className="o-con-much"> <h4>x2</h4></div>
    
          </a>
          <div className="c-com-money">花5个商品 实付金额：<span>￥ 175.00</span></div>
        </div>
        <div className="c-com-btn">
          <a href="">确认收货</a>
        </div>
        <div className="clear"></div>
      </div>
    )
  }
}