import React from 'react';
import pubsub from 'pubsub-js';
import {Link,hashHistory} from 'react-router';
export default class Home extends React.Component{
  constructor(){
    super() ;
    this.state= {
      list: []
    }
    this.getData=this.getData.bind(this);
    this.getData();
    pubsub.publish('bLoading',true);
  }
  componentDidMount(){
     this.props.router.replace('/home');
  }
  getData(){
    //let url='../../data/home.json';
    //fetch(url).then((res)=>{
    //  res.json().then((data)=>{
    //    setTimeout(()=>{
    //      this.setState({
    //        list:data,   //更新下数据
    //      })
    //      pubsub.publish('bLoading',false);
    //    },1000)
    //
    //  })
    //})
    let url='http://localhost:3000/home';
    fetch(url,{
      //credentials:'include',  这句话只有在用到cookie的时候才用加
      method:'GET',
      mode:'cors',
      headers:{   //请求头
        'Accept':'application/json,text/plain,*/*',//这样可以获取纯文本的返回数据.
        'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
      }
    }).then((res)=>{
      res.json().then((data)=>{
        setTimeout(()=>{
          this.setState({
            list:data,   //更新下数据
          })
          pubsub.publish('bLoading',false);
        },1000)
      })
    })
  }
  render(){
    return(
      <div className="homelilst">
        <div data-am-widget="slider" className="am-slider am-slider-default" data-am-slider='{}' >
          <ul className="am-slides">
            <li><img src="/src/assets/images/banner.jpg"/> </li>
            <li><img src="/src/assets/images/banner1.jpg"/> </li>
          </ul>
        </div>
        <Link to='/search' className="search">
          开启你的美食之旅...
        </Link>
        <ul className="nav">
          <li>
            <Link to="/search">
              <img src="/src/assets/images/icon.jpg" />
              <p>最新推荐</p>
            </Link>
          </li>
          <li>
            <Link to="/search">
              <img src="/src/assets/images/icon1.jpg" />
              <p>热门菜谱</p>
            </Link>
          </li>
          <li>
            <Link to="/search">
              <img src="/src/assets/images/icon2.jpg" />
              <p>人气菜肴</p>
            </Link>
          </li>
          <li>
            <Link to="/yhq">
              <img src="/src/assets/images/icon3.jpg" />
              <p>优惠券</p>
            </Link>
          </li>
        </ul>
        <div data-am-widget="titlebar" className="am-titlebar am-titlebar-default title" >
          <h2 className="am-titlebar-title ">   积分菜品 </h2>
          <nav className="am-titlebar-nav">
            <a href="" className="">more &raquo;</a>
          </nav>
        </div>
        <ul data-am-widget="gallery" className="am-gallery am-avg-sm-2 am-avg-md-3 am-avg-lg-4 am-gallery-default product">
          {
            this.state.list.map((item,index)=>{
                return(
                  <li key={item.id}>
                    <div className="am-gallery-item">
                      <Link to={{pathname:'/detail/'+item.id}} >
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
          {/*
          <li>
            <div className="am-gallery-item">
              <Link to="/detail" >
                <img src="/src/assets/images/p.png"  alt=""/>
                <h3 className="am-gallery-title">商务单人餐</h3>
                <div className="am-gallery-desc">
                  <em>￥50</em><i className="am-icon-cart-plus"></i>
                </div>
              </Link>
            </div>
          </li>
          <li>
            <div className="am-gallery-item">
              <Link to="/detail" >
                <img src="/src/assets/images/p1.png"  alt=""/>
                <h3 className="am-gallery-title">虐狗情人杯</h3>
                <div className="am-gallery-desc">
                  <em>￥50</em><i className="am-icon-cart-plus"></i>
                </div>
              </Link>
            </div>
          </li>
          <li>
            <div className="am-gallery-item">
              <Link to="/detail" >
                <img src="/src/assets/images/p2.png"  alt=""/>
                <h3 className="am-gallery-title">卤香滑鸡 </h3>
                <div className="am-gallery-desc">
                  <em>￥50</em><i className="am-icon-cart-plus"></i>
                </div>
              </Link>
            </div>
          </li>
          <li>
            <div className="am-gallery-item">
              <Link to="/detail" >
                <img src="/src/assets/images/p3.png"  alt=""/>
                <h3 className="am-gallery-title">酷炫绵绵球</h3>
                <div className="am-gallery-desc">
                  <em>￥50</em><i className="am-icon-cart-plus"></i>
                </div>
              </Link>
            </div>
          </li>
          */}
        </ul>
        <div className="h50"></div>
        {/*footbar*/}

      </div>
    )
  }
}