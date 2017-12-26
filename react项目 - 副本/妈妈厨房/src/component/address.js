import React from 'react';
export default class Address extends React.Component{
  goBack(){
     this.props.router.go(-1);
  }
  render(){
    return (
      <div className="addresslist">
        <header data-am-widget="header" className="am-header am-header-default header">
          <div className="am-header-left am-header-nav">
            <a href="javascript:;" onClick={this.goBack.bind(this)} className="">
              <i className="am-header-icon am-icon-angle-left"></i>
            </a>
          </div>
          <h1 className="am-header-title"> <a href="#title-link" className="" style={{color: '#333'}}>收货地址</a></h1>
          <div className="am-header-right am-header-nav">
            <a href="#right-link" className=""> </a>
          </div>
        </header>
        <ul className="address-list">
          <li className="curr">
            <p>收货人：安女士&nbsp;&nbsp;153********</p>
            <p className="order-add1">收货地址：河北省廊坊市 青云谱区解放西路258号河北省廊坊市 青云谱区解放西路258号</p>
            <hr/>
              <div className="address-cz">
                <label className="am-radio am-warning">
                  <input type="radio" name="radio3" value="" data-am-ucheck="" checked="" className="am-ucheck-radio"/><span className="am-ucheck-icons"><i className="am-icon-unchecked"></i><i className="am-icon-checked"></i></span> 设为默认
                </label>
                <a href=""><img src="/src/assets/images/bj.png" style={{width: 18}} />&nbsp;编辑</a>
                <a href="">删除</a>
              </div>
          </li>
          <li>
            <p>收货人：安女士&nbsp;&nbsp;182********</p>
            <p className="order-add1">收货地址：河北省廊坊市 青云谱区解放西路258号河北省廊坊市 青云谱区解放西路258号</p>
            <hr/>
              <div className="address-cz">
                <label className="am-radio am-warning">
                  <input type="radio" name="radio3" value="" data-am-ucheck="" className="am-ucheck-radio"/><span className="am-ucheck-icons"><i className="am-icon-unchecked"></i><i className="am-icon-checked"></i></span> 设为默认
                </label>
                <a href=""><img src="/src/assets/images/bj.png" style={{width: 18}} />&nbsp;编辑</a>
                <a href="">删除</a>
              </div>
          </li>
          <li>
            <p>收货人：安女士&nbsp;&nbsp;182********</p>
            <p className="order-add1">收货地址：河北省廊坊市 青云谱区解放西路258号河北省廊坊市 青云谱区解放西路258号</p>
            <hr/>
              <div className="address-cz">
                <label className="am-radio am-warning">
                  <input type="radio" name="radio3" value="" data-am-ucheck="" className="am-ucheck-radio"/><span className="am-ucheck-icons"><i className="am-icon-unchecked"></i><i className="am-icon-checked"></i></span> 设为默认
                </label>
                <a href=""><img src="/src/assets/images/bj.png" style={{width: 18}} />&nbsp;编辑</a>
                <a href="">删除</a>
              </div>
          </li>
          <li>
            <p>收货人：安女士&nbsp;&nbsp;182********</p>
            <p className="order-add1">收货地址：河北省廊坊市 青云谱区解放西路258号河北省廊坊市 青云谱区解放西路258号</p>
            <hr/>
              <div className="address-cz">
                <label className="am-radio am-warning">
                  <input type="radio" name="radio3" value="" data-am-ucheck="" className="am-ucheck-radio"/><span className="am-ucheck-icons"><i className="am-icon-unchecked"></i><i className="am-icon-checked"></i></span> 设为默认
                </label>
                <a href=""><img src="/src/assets/images/bj.png" style={{width: 18}} />&nbsp;编辑</a>
                <a href="">删除</a>
              </div>
          </li>
        </ul>
      </div>
    )
  }
}