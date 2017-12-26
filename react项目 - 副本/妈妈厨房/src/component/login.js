import React from  'react';
import {connect} from 'react-redux';
class Login extends React.Component{
  constructor(){
    super();
    this.state={
      iptname:'',
      iptpassword:''
    };
    this.getData=this.getData.bind(this);
    this.changeName=this.changeName.bind(this);
    this.changePassword=this.changePassword.bind(this);
  }
  changeName(ev){
    let iptname=ev.target.value;
    //console.log(ev.target.value);
    this.setState({
      iptname:iptname
    })
  }
  changePassword(ev){
    let iptpassword=ev.target.value;
    //console.log(ev.target.value);
    this.setState({
      iptpassword:iptpassword
    })
  }
  getData(){
    let {addUser,userNow} = this.props;
    let username = this.state.iptname;
    let password = this.state.iptpassword;
    let url = 'http://localhost:3000/myuser/login?username=' + username + '&password=' + password;
    //let url='http://localhost:3000/myuser/login';
    fetch(url,{
      credentials:'include',   //cookie时要用
      method:'GET',
      //method:'POST',
      //body:"username="+username+"&password="+password,
      mode: 'cors',
      headers:{
        'Accept':'application/json,text/plain,*/*',
        'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
      }
    }).then((res)=>{
      //console.log(res);
      res.json().then((data)=>{
        alert(data.msg);
        //console.log(data.error);
        if(!data.error){
          //console.log(data.shoplist);
          addUser({'uname':username,'upwd':password,'shoplist':data.shoplist});
          setTimeout(()=>{
            //console.log(userNow);
            this.props.router.push('/home');
          });
        }
      })
    })
  }
  //登录状态的GETDATA
   //that.$http({
   //url:"http://localhost:3000/myuser/login",
   //method:'get',
   //params:{
   //username:uName.value,
   //password:uPwd.value,
   //}
   //}).then((res)=>{
   ////alert(1)
   //res = res.data;
   ////consoloe.log(res.uname)
   ////payload就是{'uname':userphone,'upwd':password,'shoplist':res.shoplist}
   ////that.$router.push({path:'/user'})  ;
   //
   //if(!res.error){
   //
   //res.shoplist = JSON.parse(res.shoplist);
   ////console.log(typeof res.shoplist);
   ////console.log( typeof uName.value,uPwd.value) ;
   //
   //that.addUserNow( {'uname':uName.value,'upwd':uPwd.value,'shoplist':res.shoplist} );
   //
   //that.$router.push({path:'/member'});
   //}
   //else{
   //alert(res.msg);
   //}
   //}).catch((res)=>{
   //
   //console.log('error111111');
   //})

  componentDidMount(){
    var that  = this;
    //console.log(that.addUserNow)
    var uName = document.querySelector("#login_uname");
    var uPwd = document.querySelector("#login_upwd") ;
    var oBtn = document.querySelector("#login_btn") ;
    var oS1 =  document.querySelector("#s1") ;
    var oS2 =  document.querySelector("#s2") ;
    var flagName = false;
    uName.onblur=function(){
      var reg = /^\w{3,}$/;
      var str = uName.value;
      if( !reg.test(str) ){
        oS1.innerHTML='用户名格式错误';
        oS1.style.color='#f00';

      }
      else{
        oS1.innerHTML='用户名格式正确';
        oS1.style.color='#eee';
        flagName = true;
      }
    } ;
    var flagPwd = false;
    uPwd.onblur = function(){
      var reg = /^\d{6,}/;
      var str = uPwd.value;
      if(!reg.test(str)){
        oS2.innerHTML = '密码要六位以上数字才行';
        oS2.style.color='#f00';
      }
      else{
        oS2.innerHTML = '密码格式正确';
        oS2.style.color='#eee';
        flagPwd = true;
      }
    } ;
    oBtn.onclick=function(){
      if(flagName && flagPwd){
        that.getData();
      }

    }
  }
  render(){
    return(
        <div className="memberment">
          <div className="member">
            <div>

            </div>
            <div className="member-pic" >
              <a href="#left-link" onClick={this.props.router.go.bind(this,-1)} style={{marginRight:135,color:'#fff'}}>
                <i className="am-header-icon am-icon-angle-left" style={{color:'#fff'}}></i>
              </a>
              <img   src="/src/assets/images/default_photo.png"   />
            </div>
            <div className="member-infor">
            </div>
          </div>
          <ul className="member-nav" style={{paddingLeft:20,paddingRight:20, marginBottom:50}}>
            <li >
              <input type="text" className="" placeholder="用户名" id="login_uname" value={this.state.iptname} onChange={this.changeName} />
                <span id="s1" style={{float:'right',color:'#f00'}}></span>

            </li>
            <li>
              <input type="text" className="" placeholder="密码" id="login_upwd" value={this.state.iptpassword} onChange={this.changePassword}/>
                <span id="s2" style={{float:'right',color:'#f00'}}></span>
            </li>
          </ul>
          <div style={{width:'100%',textAlign:'center'}}>
            <input type="button" value="登录" style={{width:'20%',height:40}}  id="login_btn"/>
          </div>

          <div className="h50"></div>

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
    addUser:(item)=>{
      dispatch({
        type:'ADD_USERNOW',
        payload:item
      })
    },
    clearUser:()=>{
      dispatch({
        type:'CLEAR_USER'
      })
    }
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

