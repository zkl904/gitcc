import React from 'react';
export default class Reg extends React.Component{
  constructor(){
    super();
    this.state={
      iptname:'',
      iptpassword:'',
      checked:true
    };
    this.getData=this.getData.bind(this);
    this.changeName=this.changeName.bind(this);
    this.changePassword=this.changePassword.bind(this);
  }
  changeName(ev){
    let iptname=ev.target.value;
    //console.log(ev.target);
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
    let username = this.state.iptname;
    let password = this.state.iptpassword;
    let url = 'http://localhost:3000/myuser/reg?username=' + username + '&password=' + password;
    fetch(url, {
     // credentials: 'include',
      method: 'GET',
      mode: 'cors',
      headers: {
        'Accept': 'application/json,text/plain,*/*',
        //'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
        'Content-type': 'application/x-www-form-urlencoded,multipart/form-data,text/plain;charset=utf-8'
      }
    }).then((res)=>{
      res.json().then((data)=>{
        alert(data.msg);
        this.props.router.push('/login');
      })
    })
  }

  componentDidMount(){
    var that  = this;
    var uName = document.querySelector("#reg_uname");
    var uPwd = document.querySelector("#reg_upwd") ;
    var oBtn = document.querySelector("#reg_btn") ;
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
    oBtn.onclick = function(){
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
            <a href="" onClick={this.props.router.go.bind(this,-1)} className="" style={{marginRight:135,color:'#fff'}}>
            <i className="am-header-icon am-icon-angle-left" style={{color:'#fff'}}></i>
          </a>
          <img   src="/src/assets/images/default_photo.png"  />
        </div>
        <div className="member-infor">


        </div>
      </div>
    <ul className="member-nav" style={{paddingLeft:20,paddingRight:20, marginBottom:50}}>
      <li >
        <input type="text" className="" placeholder="用户名" id="reg_uname" value={this.state.iptname} onChange={this.changeName} />
          <span id="s1" style={{float:'right',color:'#f00'}}></span>

      </li>
      <li>
        <input type="text" className="" placeholder="密码" id="reg_upwd" value={this.state.iptpassword} onChange={this.changePassword} />
          <span id="s2" style={{float:'right',color:'#f00'}}></span>
      </li>

    </ul>
    <div style={{width:'100%',textAlign:'center'}}>
      <input type="button" value="注册" style={{width:'20%',height:40}} id="reg_btn"  />
    </div>

    <div className="h50"></div>

  </div>
    )
  }
}
