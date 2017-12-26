import React from 'react';
import {date} from '../filters/date.js';
import pubsub from 'pubsub-js';
export default class Content extends React.Component{
  constructor(){
    super()
    this.state={
      list:{}
    }
    this.getData=this.getData.bind(this);
    this.getData();
    pubsub.publish('bLoading',true);
  }
  getData(){
    //let url="../../data/content.json";
    //fetch(url).then((res)=>{
    //  res.json().then((data)=>{
    //    setTimeout(()=>{
    //      this.setState({
    //        list:data[parseInt(this.props.params.aid)-1]
    //      })
    //      pubsub.publish('bLoading',false);
    //    },1000)
    //
    //  })
    //})
    let url='http://localhost:3000/content';
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
            list:data[parseInt(this.props.params.aid)-1]
          })
          pubsub.publish('bLoading',false);
        },1000)
      })
    })
  }
  render(){
    let list=this.state.list;
    return(
      <div className="contentlist">
        <header data-am-widget="header" className="am-header am-header-default header">
          <div className="am-header-left am-header-nav">
            <a href="javascript:;" onClick={this.props.router.go.bind(this,-1)} className="">
              <i className="am-header-icon am-icon-angle-left"></i>
            </a>
          </div>
          <h1 className="am-header-title"> <a href="#title-link" className="" style={{color: '#333'}}>厨房妈妈</a></h1>
          <div className="am-header-right am-header-nav">
            <a href="#right-link" className=""> </a>
          </div>
        </header>
        <div className="content">
          <h1>{list.title}</h1>
          <div className="text"><span className="fl">{date(list.time)}</span><span className="fr"><i className="am-icon-thumbs-o-up"></i>&nbsp;浏览{list.liulan}</span></div>
          <div dangerouslySetInnerHTML={{__html:list.content}}>

          </div>
          {/*<p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;每个季节都有不同的时令水果，尤其是在夏季堪比水果盛宴。有的懒人懒得吃水果就会靠果汁来补充营养，你知道自己需要补充什么营养素吗？吐血推荐5款让你喝出健康的果汁。</p>
          <p>  排毒排便－香蕉牛奶汁</p>
          <p>  适量加入牛奶调理，可以补充更多钙质，对于正在减肥中的女孩来说，也比较有饱足感。经常失眠或是容易经痛的女孩也可以喝喝看！</p>
          <br />
          <br />
          <p>  止咳防晕－芒果汁</p>
          <p>  退火利尿－椰子汁</p>
          <p>  不过有的人会怕椰子的味道，也因为椰子水生冷寒性，因此女孩们如果想喝椰子水来消暑，或是肠胃不好的人，在喝之前还是要三思！</p>
          <p>  水果之王－奇异果汁</p> */}
        </div>
        <div data-am-widget="duoshuo" className="am-duoshuo am-duoshuo-default" data-ds-short-name="amazeui">
          <div className="ds-thread" >
          </div>
        </div>
      </div>
    )
  }
}