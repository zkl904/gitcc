import React from 'react';
import {Link,hashHistory} from 'react-router';
import {connect} from 'react-redux';
class Member extends React.Component{
  constructor(){
    super();
    this.clearUserNow=this.clearUserNow.bind(this);
    this.getUserName=this.getUserName.bind(this);
    this.loginout=this.loginout.bind(this);
  }
  clearUserNow(){
    var f=confirm('你确定吗');
    if(f){
      this.props.delUserNow();
      this.loginout();
    }
  }
  componentDidMount(){
   // console.log(this.props);
    this.getUserName();
  }
  getUserName(){   //判断cookie的username，之后去数据库中把对应的数据全部找出来，之后用adduserNow重新把值给状态管理，一刷新就重新把值给状态管理
    //let {addUserNow}=this.props;
    //let url='http://localhost:3000/users';  //这里不需要传递值,因为后端可以直接取req.session.username
    //fetch(url,{
    //  credentials:'include',
    //  method:'GET',
    //  headers:{
    //    'Accept':'application/json,text/plain,*/*',
    //    'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
    //  }
    //}).then((res)=>{
    //  res.json().then((data)=>{
    //    if(data.err==1){
    //      //if(data.msg=='未登录'){
    //      //  this.props.router.push('/login');
    //      //}
    //    }
    //    else if(data.err==0){
    //      //console.log( data.msg.uname);
    //      addUserNow({'uname':data.msg.uname,'upwd':data.msg.upwd,'shoplist':data.msg.shoplist});
    //    }
    //
    //  })
    //})
  }

  loginout(){  //清除cookie用的,因为前端不能直接用req.session,只有后端能用这个语句,所以这里只好向后端发送数据,让后端的loginout来处理
    let url='http://localhost:3000/loginout';  //这里不需要传递值,因为后端可以直接取req.session.username
    fetch(url,{
      credentials:'include',
      method:'GET',
      headers:{
        'Accept':'application/json,text/plain,*/*',
        'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
      }
    }).then((res)=>{
      res.json().then((data)=>{

      })
    })

  }

  render(){
    let loginlist;
    let {userNow,delUserNow}=this.props;
    if(userNow){
      loginlist=(
        <div className="member-infor">
          {/*userNow表示里面有内容,  !userNow表示里面没有内容*/}
          <div >
            <a href="javascript:;" style={{color:'#fff'}} onClick={this.clearUserNow}>注销</a>
           </div>
         </div>
      )
    }
    else{
      loginlist=(
        <div className="member-infor">
          <Link to="/login" style={{color:'#fff'}}>
            登录|
          </Link>
          <Link to="/reg" style={{color:'#fff'}}>
            注册
          </Link>
        </div>
      )
    }
    return(
      <div className="memberlist">
        <div className="member">
          <div className="member-pic">
            <img src="/src/assets/images/default_photo.png" />
          </div>
          {loginlist}    {/*登录注销的显示*/}
          {/*<div className="member-infor">
            <Link to="/login" style={{color:'#fff'}}>
              登录|
            </Link>
            <Link to="/reg" style={{color:'#fff'}}>
              注册
            </Link>
          </div>
          */}
        </div>
        <ul className="member-nav">
          <li>

            <Link to="/address"><i className="am-icon-map-marker"></i><span>收货地址</span></Link>
          </li>
          <li><Link to=""><i className="am-icon-newspaper-o"></i><span>我的订单</span></Link></li>
          <li><Link to="/shopcar"><i className="am-icon-cart-arrow-down"></i><span>购物车</span></Link></li>
          <li><a href=""><i className="am-icon-bell-o"></i><span>系统通知</span></a></li>
          <li><a href=""><i className="am-icon-credit-card"></i><span>会员卡</span></a></li>
          <li><Link to="/yhq"><i className="am-icon-cc-mastercard"></i><span>优惠券</span></Link></li>
          <li><a href=""><i className="am-icon-dollar"></i><span>积分</span></a></li>
        </ul>
        <ul className="member-nav mt">
          <li><a href=""><i className="am-icon-phone"></i>联系我们</a></li>
        </ul>
        <div className="h50"></div>

        {/*footbar*/}

      </div>
    )
  }
}
const mapStateToProps=(state)=>{
  return {
    userNow:state.userNow
  }
}
const mapDispatchToProps=(dispatch)=>{
  return {
    delUserNow:()=>{
      dispatch({
        type:'DEL_USERNOW'
      })
    },
    addUserNow:(item)=>{
      dispatch({
        type:'ADD_USERNOW',
        payload:item
      })
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Member)