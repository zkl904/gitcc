const reducer=(state,action)=>{
  let {type,payload}=action;
  switch(type){
    case 'SHOW_FOOT':
      return Object.assign({},state,{
        bFoot:true
      });
      break;
    case 'HIDE_FOOT':
      return Object.assign({},state,{
        bFoot:false
      });1
      break;
    case 'SHOW_LOADING':
      return Object.assign({},state,{
        bLoading:true
      });
      break;
    case 'HIDE_LOADING':
      return Object.assign({},state,{
        bLoading:false
      });
      break;
    case 'ADD_USERNOW':    ////客户登录  添加
      return Object.assign({},state,{  //object.assign(空,老,新)  把老的和新的整合到一起,然后放到空的数组里面
        userNow:payload
      })
    break;
    case 'DEL_USERNOW':  //注销
      return Object.assign({},state,{  //object.assign(空,老,新)  把老的和新的整合到一起,然后放到空的数组里面
        userNow:null

      })
    break;
    case 'CHANGE_NUM':
      //console.log(222);
      //console.log(state.userNow.shoplist);
      state.userNow.shoplist.forEach((item,index)=>{  //我用的一直都是usernow，没有用到是shoplilst
        if(item.title==payload.title){
          if(item.num==1&&payload.num==-1){
            return;
          }else{
            item.num+=payload.num;
            //console.log(111)
          }
        }
      });
      return Object.assign({},state,{  //数据更行用[...]  对象用object.assign({},老，新)
        userNow:Object.assign({},state.userNow,state.userNow.shoplist)  //[...]解除引用 就是堆栈地址的关系,本来是两个东西是绑在一起的,现在把他们各自分开来,通俗点来说就是解除绑定的意思  这里的目的是为了是屏幕及时显示出来,本来知识在react的状态管理中显示,由于虚拟dom的关系,不会及时的显示,加上这个就能及时显示了,+-一点击就能在页面及时的显示
      });
      break;
    default:
      return state;
  }
};
export default reducer;