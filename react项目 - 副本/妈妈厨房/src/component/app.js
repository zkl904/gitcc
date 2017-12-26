import React from 'react';
import Footbar from './footbar';
import Loading from '../common/loading';
import pubsub from 'pubsub-js';
import {connect} from 'react-redux';
class App extends React.Component{
  constructor(){
    super();
    this.state={
      bLoading:false
    }
    pubsub.subscribe('bLoading',(mess,data)=>{
      this.setState({
        bLoading:data
      })
    })
    this.getUserName=this.getUserName.bind(this);
  }
  componentWillUnmount(){
    pubsub.clearAllSubscriptions();
  }
  componentDidMount(){
    this.getUserName();
  }
  getUserName(){   //判断cookie的username，之后去数据库中把对应的数据全部找出来，之后用adduserNow重新把值给状态管理，一刷新就重新把值给状态管理
    let {addUserNow,userNow}=this.props;
    let url='http://localhost:3000/users';  //这里不需要传递值,因为后端可以直接取req.session.username
    fetch(url,{
      credentials:'include',
      method:'GET',
      headers:{
        'Accept':'application/json,text/plain,*/*',
        'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
      }
    }).then((res)=>{
      res.json().then((data)=>{
        if(data.err==1){
          if(data.msg=='未登录'){
            this.props.router.push('/login');
          }
        }
        else if(data.err==0){
          //console.log( data.msg.uname);
          addUserNow({'uname':data.msg.uname,'upwd':data.msg.upwd,'shoplist':eval(data.msg.shoplist)});
        }
      })
    })
  }

  render(){
    let {bFoot,showFoot,hideFoot}=this.props;
    let path = this.props.router.location.pathname;
    let bLoading = this.state.bLoading;
    let bFootbar =false;
    let footflag={
       homeflag:false,
       speakflag:false,
       weflag:false,
       memberflag:false
    }

    if(/home/.test(path)){
      footflag.homeflag=true;
    }
    if(/we/.test(path)){
      footflag.weflag=true
    }
    if(/member/.test(path)){
      footflag.memberflag=true
    }
    if(/speak/.test(path)){
      footflag.speakflag=true
    }
    if(/home|we|member|speak/.test(path)){
      setTimeout(()=>{
        showFoot();
      })
    }
    else{
      setTimeout(()=>{
        hideFoot();
      })
    }
    return (
      <div className="Applist">
        {/*
        {bLoading?<Loading/>:null}
        {bFootbar?<Footbar footflag={footflag}/>:null}
        {this.props.children}
        */}

         {bLoading?<Loading/>:null}
         {bFoot?<Footbar footflag={footflag}/>:null}

         {this.props.children}


      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return {
    bFoot:state.bFoot,
    bLoading:state.bLoading,
    userNow:state.userNow,
  }
};
const mapDispatchToProps=(dispatch)=>{
  return{
    showFoot:()=>{
      dispatch({
        type:'SHOW_FOOT'
      })
    },
    hideFoot:()=>{
      dispatch({
        type:'HIDE_FOOT'
      })
    },
    showLoading:()=>{
      dispatch({
        type:'SHOW_LOADING'
      })
    },
    hideLoading:()=>{
      dispatch({
        type:'HIDE_LOADING'
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
export default connect (
  mapStateToProps,
  mapDispatchToProps
)(App);