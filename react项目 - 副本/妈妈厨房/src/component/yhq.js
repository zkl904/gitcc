import React from 'react';
export default class Yhq extends React.Component{
  render(){
    return(

        <div className="yhqlist" style={{background: 'rgb(255, 103, 103)',width:'100%',height:'100%'}}>

        <header data-am-widget="header" className="am-header am-header-default header">
          <div className="am-header-left am-header-nav">
            <a href="javascript:;" onClick={this.props.router.go.bind(this,-1)} className="">
              <i className="am-header-icon am-icon-angle-left"></i>
            </a>
          </div>
          <h1 className="am-header-title"> <a href="#title-link" className="" style={{color: '#333'}}>厨房妈妈</a></h1>
          <div className="am-header-right am-header-nav">
            <a href="#right-link" className=""> </a>
          </div>
        </header>
        <div className="page zShow" id="couponDetail"  style={{background: 'rgb(255, 103, 103)'}}>
          <div className="coupon-wrap">
            <img src="/src/assets/images/default_photo.png" alt="logo" className="logo"/>
              <p className="name">厨房妈妈</p>
              <h1 className="title">10元抵用券</h1>
              <h2 className="sub-title">满50减10</h2>
              <p className="condition">使用条件：满<span>50.00</span>元减<span>10.00</span>元</p>
              <p className="date">可用时间：<span>2017-04-02</span>-<span>2017-09-20</span></p>
              <p className="time"><span>00:00</span>-<span>24:00</span> <i></i> <i></i></p>
              <div className="contact-wrap">
                <p className="address">地址 : <span>北京房山区妈妈厨房</span></p>
                <p className="phone">电话 : <span>0736-12345678</span></p>
              </div>
          </div>
          <div className="receive-btn"  style={{background: 'rgb(255, 214, 60)'}}>领取</div>
        </div>

      </div>

    )
  }
}