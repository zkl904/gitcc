import React from 'react';
import pubsub from 'pubsub-js';
import {Link,hashHistory} from 'react-router';
import {connect} from 'react-redux';
class Detail extends React.Component{
  constructor(){
    super();
    this.state={
      detail:{}
    }
    this.getData=this.getData.bind(this);
    this.getData()  ;
    pubsub.publish('bLoading',true);
  }
  componentDidMount(){
    //shoplistArr=eval(shoplistArr);
    $('#addBuyCar').click(function(){
      let {userNow,addUserNow}=this.props;
      let flagshop=true;  //开关变量,数据要不要push 或者num++
      let shoplistArr=[];
      //console.log(userNow);
      let shoplistdata={
        num: 1,
        imgurl: this.state.detail.image,
        title: this.state.detail.name,
        price: this.state.detail.price,
        repertory: this.state.detail.kuchun,
        freight: this.state.detail.yunfei
      }
      //let shoplistArrXX=eval(shoplistArr);
      //shoplistArrXX.map((item,index)=>{
      //  console.log(item);
      //})
      if( userNow ) {  //有数据用户名已经登录
        shoplistArr=eval(userNow.shoplist);
        shoplistArr.map((item,index)=>{
          if(shoplistdata.title==item.title){
            item.num++;
            flagshop=false;
          }
          //else{ //这里错误,不能push多次,push一次就可以,用个开关 饭吃好改
          //  shoplistArr.push(shoplistdata);
          //}
        })
        if(flagshop){
          shoplistArr.push(shoplistdata);
        }
       userNow.shoplist=shoplistArr;
       // console.log(userNow);
        addUserNow( userNow) ;  //把数据加进去
        let url = 'http://localhost:3000/shopcar?username=' + userNow.uname + '&shoplist=' + JSON.stringify(userNow.shoplist);
        fetch(url, {
          // credentials: 'include',
          method: 'GET',
          mode: 'cors',
          headers: {
            'Accept': 'application/json,text/plain,*/*',
            'Content-type': 'application/x-www-form-urlencoded,multipart/form-data,text/plain;charset=utf-8'
          }
        }).then((res)=> {
          res.json().then((data)=> {
            //alert(data.msg);
          })
        })
        var r = confirm('已经加入购物车,是否要去购物车结算?')
        if( r ){
          this.props.router.push('/shopcar');
        }
      }else{
        alert('请先登录')
        this.props.router.push('/login');
      }
    }.bind(this));
  }
  getData(){
     //let url='../../data/detail1.json';
    //fetch(url).then((res)=>{
    //  res.json().then((data)=>{
    //    setTimeout(()=>{
    //      this.setState({
    //        detail:data[parseInt(this.props.params.aid)-1]
    //      })
    //      pubsub.publish('bLoading',false);
    //    },1000)
    //  })
    //})
      let url='http://localhost:3000/detail';
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
          detail:data[parseInt(this.props.params.aid)-1]
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
   let detail=this.state.detail ;
    return (
      <div className="detaillist">
        <header data-am-widget="header" className="am-header am-header-default header">
          <div className="am-header-left am-header-nav">
            <Link to='/home'>


            {/*<a href="javascript:;" onClick={this.goBack.bind(this)} className=""> */}
              <i className="am-header-icon am-icon-angle-left"></i>
          </Link>
          </div>
          <h1 className="am-header-title"> <a href="#title-link" className="" style={{color: '#333'}}>详情页</a></h1>
          <div className="am-header-right am-header-nav">
            <a href="#right-link" className=""> </a>
          </div>
        </header>
        <div data-am-widget="slider" className="am-slider am-slider-default" data-am-slider='{}' >
          <ul className="am-slides">
            <li><img src="/src/assets/images/detail.png"/> </li>
            <li><img src="/src/assets/images/detail.png"/> </li>
          </ul>
        </div>
        <div className="detail">
          <h2>{detail.name}</h2>
          <div className="price">
            <b>￥{detail.price}</b><span>（积分可抵扣5元）</span>
          </div>
          <div className="kucun">
            <p>库存：{detail.kuchun}</p>
            <p>运费：{detail.yunfei}</p>
          </div>
        </div>
        <div className="comment">
          <h2>宝贝评价（0）</h2>
          <ul>
            <li><a href="">有图（0）</a></li>
            <li><a href="">好评（0）</a></li>
            <li><a href="">中评（0）</a></li>
            <li><a href="">差评（0）</a></li>
          </ul>
        </div>
        <div className="detail-con" dangerouslySetInnerHTML={{__html:detail.content}}>
        </div>
        <div className="detail-con" >
          <img src={'/src/assets/'+detail.image} />
        </div>
        <div className="h50"></div>
        <ul className="fixed-btn">
          <li ><a href="" className="current">立即购买</a></li>

          <li>
            {/*<Link to="/shopcar">加入购物车</Link>*/}
            <a href="javascript:;" id="addBuyCar">加入购物车</a>
          </li>
        </ul>
      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return {
    userNow:state.userNow,
    bLoading:state.bLoading
  }
};
const mapDispatchToProps=(dispatch)=>{
  return{
    addUserNow:(item)=>{
      dispatch({
        type:'ADD_USERNOW',
        payload:item
      })
    }
  }
}
export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Detail);