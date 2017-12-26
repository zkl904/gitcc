import React from  'react';
import {Link,hashHistory} from 'react-router';
export default class Footbar extends React.Component{
  componentDidMount(){
    //console.log(this.props.footflag.homeflag)
  }
  render() {
   let homeflag,speakflag,weflag,memberflag;
   if( this.props.footflag.homeflag ){
      homeflag=(
        <Link to="/home">
          <span className=""><img src="/src/assets/images/nav.png"/></span>
          <span className="am-navbar-label">点餐</span>
        </Link>
      )
   }
    else{
     homeflag=(
       <Link to="/home">
         <span className=""><img src="/src/assets/images/nav_1.png"/></span>
         <span className="am-navbar-label">点餐</span>
       </Link>
     )
   }

    if(this.props.footflag.speakflag){
      speakflag=(
        <Link to="/speak">
          <span className=""><img src="/src/assets/images/nav2_a.png"/></span>
          <span className="am-navbar-label">客说</span>
        </Link>
      )
    }
    else{
      speakflag=(
        <Link to="/speak">
          <span className=""><img src="/src/assets/images/nav2.png"/></span>
          <span className="am-navbar-label">客说</span>
        </Link>
      )
    }

    if(this.props.footflag.weflag){
      weflag=(
        <Link to="/we">
          <span className=""><img src="/src/assets/images/nav3_a.png"/></span>
          <span className="am-navbar-label">我们</span>
        </Link>
      )
    }
    else{
      weflag=(
        <Link to="/we">
          <span className=""><img src="/src/assets/images/nav3.png"/></span>
          <span className="am-navbar-label">我们</span>
        </Link>
      )
    }

    if(this.props.footflag.memberflag){
      memberflag=(
        <Link to="/member">
          <span className=""><img src="/src/assets/images/nav4_a.png"/></span>
          <span className="am-navbar-label">我们</span>
        </Link>
      )
    }
    else{
      memberflag=(
        <Link to="/member">
          <span className=""><img src="/src/assets/images/nav4.png"/></span>
          <span className="am-navbar-label">我们</span>
        </Link>
      )
    }

    return (
      <div className="Footbarlist">
        <div data-am-widget="navbar" className="am-navbar am-cf am-navbar-default footer " id="">
          <ul className="am-navbar-nav am-cf am-avg-sm-4">
            <li >
            {homeflag}
            {/*第二种写法*/}
            {/*
              {
              this.props.footflag.homeflag?<Link to="/home">
                <span className=""><img src="/src/assets/images/nav.png"/></span>
                <span className="am-navbar-label">点餐</span>
              </Link>:<Link to="/home">
                <span className=""><img src="/src/assets/images/nav_1.png"/></span>
                <span className="am-navbar-label">点餐</span>
              </Link>
            } */}

            </li>
            <li>
              {speakflag}
            </li>
            <li>
              {weflag}
            </li>
            <li >
              {memberflag}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}