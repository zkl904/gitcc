import React from 'react';
import {Link,hashHistory} from 'react-router';
import {date} from '../filters/date.js';
import pubsub from 'pubsub-js';
export default class Speak extends React.Component{
  constructor(){
     super();
    this.state= {
      list: []
    }
    this.getData=this.getData.bind(this);
    this.getData();
    pubsub.publish('bLoading',true);
  }
  getData(){
    //let url='../../data/speak.json';
    //fetch(url).then((res)=>{
    //  res.json().then((data)=>{
    //    setTimeout(()=>{
    //      this.setState({
    //        list:data
    //      })
    //      pubsub.publish('bLoading',false);
    //    },1000)
    //  })
    //})
    let url='http://localhost:3000/speak';
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
            list:data
          })
          pubsub.publish('bLoading',false);
        },1000)
      })
    })
  }
  render(){

    return(
      <div className="speaklist">
        <div data-am-widget="slider" className="am-slider am-slider-default" data-am-slider='{}' >
          <ul className="am-slides">
            <li><img src="/src/assets/images/banner3.png"/> </li>
            <li><img src="/src/assets/images/banner4.png"/> </li>
          </ul>
        </div>
        <ul className="nav">
          <li>
            <a href="">
              <img src="/src/assets/images/ms.jpg" />
              <p>美食快拍</p>
            </a>
          </li>
          <li>
            <a href="">
              <img src="/src/assets/images/ms.jpg" />
              <p>美食快拍</p>
            </a>
          </li>
          <li>
            <a href="">
              <img src="/src/assets/images/cy.jpg" />
              <p>厨艺交流</p>
            </a>
          </li>
          <li>
            <a href="">
              <img src="/src/assets/images/mmp.jpg" />
              <p>妈妈派</p>
            </a>
          </li>
          <li>
            <a href="">
              <img src="/src/assets/images/ys.jpg" />
              <p>饮食健康</p>
            </a>
          </li>
        </ul>
        <div data-am-widget="intro" className="am-intro am-cf am-intro-default">
          <div className="am-intro-hd">
            <h2 className="am-intro-title">功效</h2>
          </div>
          {
            this.state.list.map((item,index)=>{
              return(
                <div key={item.id}  className="am-g am-intro-bd" >
                  <Link to={{pathname:'/content/'+item.id}}>
                    <div className="am-intro-left am-u-sm-3"><img src={"/src/"+item.image}  /></div>
                    <div className="am-intro-right am-u-sm-9">
                      <h2>{item.title}</h2>
                      <p>{item.content}</p>
                      <div className="text">
                        <span className="fl">{ date(item.time) }</span>
                        <span className="fr"><i className="am-icon-thumbs-o-up"></i>&nbsp;点赞</span>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            })
          }
        </div>
        <div className="h50"></div>
        {/*footbar*/}

      </div>
    )
    
  }
}