import React, {Component} from 'react';
import {Link} from "react-router";
import wateFallStyles from "./wateFall.less";

class wateFall extends Component{
  constructor(props){
    super(props);
    this.state={
          dataList:this.initDataList(),
          dataHeight:this.setDataHeightHandler(),
          num:"32%",
          floatNum:0.32
    }
  }
  initDataList = () =>{
    let num =  this.props.colNum||4;
    let obj ={};
    for(let i = 1;i<num+1;i++){
      obj["item" +1] = []
    }
    return obj;
  };
  setDataHeightHandler = ()=>{
    let num = this.props.colNum ||4;
    let heightObj = {}
    for(let i=1;i<num+1;i++){
      obj["item"+i]=0
    }
    return heightObj;
  };
  render(){
    let tempArr = [];
    for(let i =1; i<this.props.colNum+1; i++){
      tempArr.push(`${"item"+i}`)
    }

    return (
      <div className={wateFallStyles.shoppingPage}>
          <div className={wateFallStyles.main} styles={{width:`${this.props.width}px`}} >
            {
              tempArr.map((value,ind)=>
              (
                <div style={{width:this.state.num}} key={ind+"out"}>
                    333
                </div>
              )
            )
            }
          </div>
      </div>
    )
  }


}

export default wateFall;




















import React, {Component} from "react";
import myWorkStyles from "./myWork.less";
import wateFall from "./wateFall.js"; //瀑布流

class MyWorks extends Component{
    constructor(props){
      super(props);
      this.state={
        currentPannel:"my_project"
      }
    }
    getItem = () =>{
      console.log("ddddddd")
    }

    render(){
      return(
        <div>
          <div className={myWorkStyles.editerRoom}>
             <h1 className={myWorkStyles.header}>
              当前空间
             </h1>
             <div className={myWorkStyles.currentRoom}>
                <div className={myWorkStyles.currentRoom_c}>
                  <div className={myWorkStyles.c_up}>
                    <span className={myWorkStyles.c_icon}></span>
                    <span className={myWorkStyles.c_font}>请编辑空间方案</span>
                  </div>
                  <div className={myWorkStyles.c_down}>
                      <div  className={myWorkStyles.c_head}>头像</div>
                      <span className={myWorkStyles.c_nickName}>xxx</span>
                      <div className={myWorkStyles.c_time}>刚噶</div>
                  </div>
                </div>
             </div>
          </div>
          <div className={myWorkStyles.defaultWorks}>
              <ul  className={myWorkStyles.favorHeader}>
                  <li className={myWorkStyles.favorLi}
                    style={this.state.currentPannel == "my_project"?{color:"#fff",fontWeight:"bold"}:""}
                      onClick = {
                        ()=>{
                          this.setState({
                            currentPannel:"my_project"
                          })
                        }
                      }
                    >空间方案</li>
                  <li className={myWorkStyles.favorFont}
                      style={this.state.currentPannel== "my_rooms"?{color:"#fff",fontWeight:"bold"}:""}
                      onClick = {
                        () =>{
                          this.setState({
                            currentPannel:"my_rooms"
                          })
                        }
                      }
                    >项目</li>
              </ul>
              <ul style={this.state.currentPannel == "my_project"?{display:"block"}:{display:"none"}}>
                  <wateFall
                    dataList = {this.props.my_projectList || []}
                    colNum ={3}
                    getItem = {this.getItem}
                    width = {480}
                  />
              </ul>
              <ul style={this.state.currentPannel == "my_rooms"?{display:"block"}:{display:"none"}}>
                  <wateFall
                      dataList = {this.props.my_roomList}
                      colNum ={3}
                      getItem = {this.getItem}
                      width ={480}
                  />
              </ul>
          </div>
        </div>
      )
    }
}

export default MyWorks;
