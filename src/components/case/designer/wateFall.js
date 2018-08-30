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
    this.init(this.props.dataList)
  }
  init = (list) =>{
      let num;
      let floatNum;
      if(this.props.colNum == 3){
        num = "32%";
        floatNum = 0.32;
      }else if(this.props.colNum ==4){
        num = "23%";
        floatNum = 0.19;
      }else if(this.props.colNum == 5){
        num = "19%";
        floatNum = 0.23;
      }else {
        num = "23%";
        floatNum = 0.23
      }
      for( let item of list){
        this.updata(item);
      }
  };
  initDataList = () =>{
    let num =  this.props.colNum||4;
    let Listobj ={};
    for(let i = 1;i<num+1;i++){
      Listobj["item" +1] = []
    }
    return Listobj;
  };
  setDataHeightHandler = ()=>{
    let num = this.props.colNum ||4;
    let heightObj = {}
    for(let i=1;i<num+1;i++){
      heightObj["item"+i]=0
    }
    return heightObj;
  };
  updata = (item) =>{
    for(let v in this.state.dataList){
      if(this.state.dataList[v].filter(i => i.cnum ==item.cnum).length>0){
        return false;
      }
    }
    let heightArr = Object.keys(this.state.dataHeight);
    let min ="item1";
    if(heightArr.length>0){
      for(let i of heightArr){
        if(this.state.dataHeight[i]<this.state.dataHeight[min]){
          min = i;
        }
      }
    }
    this.state.dataList[min].push(item);
    this.state.dataHeight[min]+=
    item.image_height*(this.props.width *this.state.floatNum)/item.image_width*0.9;
    this.setState({
      dataList: this.state.dataList,
      dataHeight: this.state.dataHeight
    })
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
                  {this.state.dataList[value].map((v,index)=>(
                    <div key={index} style={{position:"relative",width:"100%"}}>
                      {v.image?(
                        <div onClick={() =>
                          this.props.getItem(v.cnum)
                          }>
                          <img src={`/api/file/${v.image}/small/300`} style={{width:"100%",borderRadius:"5px 5px 0 0"}}/>
                        </div>
                      ):""}
                    </div>
                  ))}
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
