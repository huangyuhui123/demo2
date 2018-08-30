import React,{Component} from "react";
import SearchInputStyle from "./search_input.less"


class SearchInput extends Component{
  constructor(props){
    super(props);
    this.state={
      searchWhatShow:"none",
      lenovoList:[],//联想搜索
      searchHistory:[],//历史搜索列表
      page:1
    }
  }
  searchOnFocusHandler = async()=>{
    this.setState({
      searchWhatShow:this.refs.query.value.trim()?"lenovo":"history"
    })
  }
  doLenovo= async()=>{

  }
  enterSerch= async()=>{
    if(e.keyCode==13){
      this.doSearchCheck();
    }
  }
  doSearchCheck= async()=>{
  }
  delHistory = async () =>{
    console.log("删除")
  }
  render(){
    let searchListHtml=""
    return(
      <div className={SearchInputStyle.searchBox}>
        <div >
            <input className={SearchInputStyle.input}
              placeholder="搜索..."
              ref="query"
              onFocus={()=>this.searchOnFocusHandler()}
              onBlur={()=>
                setTimeout(()=>{
                  this.setState({searchWhatShow:"none"})
                },200)
              }
              onChange={
                e=>{
                  ths.setState(
                    {query:e.target.value},
                    ()=>this.doLenovo()
                  )
                }
              }
              onKeyDown={
                e=>{
                  this.enterSerch(e);
                }
              }
            />
            <em  className={SearchInputStyle.Searchicon}/>
        </div>
        <div className={SearchInputStyle.search_result}
          style={{display:this.state.searchWhatShow == "none" ||
          (this.state.searchWhatShow=="lenovo"&&this.state.lenovoList.length==0)||
          (this.state.searchWhatShow=="history"&&this.state.searchHistory.length==0)
          ?"none":"block"
        }}
          >
            <ul className={SearchInputStyle.search_content}>
              {searchListHtml}
               <li style={{textAlign:"center",display:this.state.searchWhatShow=="history"?"block":"none"}}
                onClick={()=>{
                  this.delHistory();
                }}
               >删除历史纪录</li>
            </ul>
        </div>
      </div>
    )
  }

}


export default SearchInput
