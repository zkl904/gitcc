import React from 'react';
import '../assets/css/shopcar.css';
import {connect} from 'react-redux';
import {Link,hashHistory} from 'react-router';
class Shopcar extends React.Component{
  constructor(){
    super();
  }

  componentDidMount(){
    let {userNow,addUserNow}=this.props;
    //if(!userNow){
    //  this.props.router.push('/login');
    //}
    //if( !this.userNow ) this.$router.push( {path:'/login'} );
    //console.log( this.userNow )
  }
  componentDidUpdate(){
    let {userNow}=this.props;
   // var that = this;
    //console.log(userNow) ;
    let shopdatalist=userNow.shoplist;
    let username = userNow.uname;
    //let password = this.state.iptpassword;
    let url = 'http://localhost:3000/shopcar?username=' + username + '&shoplist=' + JSON.stringify(shopdatalist);
    fetch(url,{
      //credentials:'include',
      method:'GET',
      mode: 'cors',
      headers:{
        'Accept':'application/json,text/plain,*/*',
        'Content-type':'application/x-www-form-urlencoded;charset=utf-8'
      }
    }).then((res)=>{
      res.json().then((data)=>{
        //alert(data.msg);
      })
    })
  }
  render(){
    let {userNow,addUserNow,changeNum}=this.props;
    let shopcarlist;
    if(userNow && userNow.shoplist.length){
      shopcarlist=(
          userNow.shoplist.map((item, index)=>{
          return (
            <li key={index} style={{position:'relative'}}>
              <img src={'/src/assets/'+item.imgurl} alt="" style={{marginLeft:12}}/>
              <div className="title_left">
                <div className="good_title" style={{fontSize:18,color:'#00f'}}>{item.title}</div>
                <div className="price" style={{color:'green'}}>单价:￥<span>{item.price}</span></div>
                <div className="repertory">库存:<span>{item.repertory - item.num}</span>件</div>
                <div className="freight">运费:<span>{item.freight}</span></div>
              </div>
              <div className="num_div">
                {/*<input type="button" value="+" onClick='changeNum(1)' className="btn"/>*/}
                <input type="button" value="+" onClick={changeNum.bind(null,{title:item.title,num:1})} className="btn"/>
                <div className="num">{item.num}</div>
                <input type="button" value="-" onClick={changeNum.bind(null,{title:item.title,num:-1})} className="btn"/>
              </div>
              <div className="sum" style={{color:'red'}}>小计:{item.price * item.num}元</div>
            </li>
          )
        })
      )
    }
    else{
      shopcarlist=(
        <li></li>
      )
    }
    return(

      <div className="shopcar">
        <div  >
          <Link to='/home' style={{color:'#fff',marginLeft:20,}} >
            <i className="am-header-icon am-icon-angle-left" style={{color:'#fff'}}></i>
          </Link>
        </div>
        <section>
          <ul className="goods_list" id="goods_list" >
            {shopcarlist}
          </ul>
        </section>
    <footer className="footer2">
      <label id="allcheck"><input type="checkbox" name="" value="" />全选</label>
      <a href="#" className="pay_way" id="pay_way">支付方式></a>
      <a href="#" className="buy" id="buy" >确认支付(<span>0</span>)</a>
    </footer>
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
    },
    changeNum:(item)=>{
      dispatch({
        type:'CHANGE_NUM',
        payload:item
      })
    }
  }
}
export default connect (
  mapStateToProps,
  mapDispatchToProps
)(Shopcar);
