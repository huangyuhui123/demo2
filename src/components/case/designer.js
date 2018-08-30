import React,{Component} from 'react';
import styles from "./designer.less";
import Myworks from "./designer/myworks";
import Search from "./designer/search";
import Collect from "./designer/collect"
import Tools from "./designer/tools";
import Detail from "./designer/detail";



class Designer extends Component {
  constructor(props){
    super(props);
    this.state={
        locationType:"myworks",
        documentWidth:document.documentElement.clientWidth ||document.body.clientWidth,
        documentHeight:document.documentElement.clientHeight ||document.body.clientHeight
    }
  }

  render(){
    return(
      <div>
          <div className={styles.main} style={{width:"100%",maxHeight:this.state.documentHeight - 70+ "px"}}>
              <div className={styles.leftSide} style={{ minHeight: this.state.documentHeight - 70 + "px"}}>
                  <ul className={styles.leftSideNav}>
                      <li
                        className={
                          this.state.locationType === "myworks"?styles.icon+" "+styles.pitu_select
                          :styles.icon+" "+styles.pitu
                        }
                      title="我的"
                        onClick= {
                          ()=>{
                            this.setState({
                              locationType:"myworks"
                            })
                          }
                        }
                        >
                      </li>
                      <li
                        className={this.state.locationType === "search"?styles.icon+" "+styles.search_select
                          :styles.icon+" "+styles.search
                          }
                          title="搜索"
                          onClick = {
                            () =>{
                              this.setState({locationType:"search"})
                            }
                          }
                        ></li>
                      <li
                        className={this.state.locationType === "collect"
                          ? styles.icon+ " "+ styles.collect_select
                          : styles.icon+ " "+ styles.collect
                          }
                          onClick={ () =>{
                            this.setState({
                              locationType:"collect"
                            })
                          }}
                          title="收藏"
                        ></li>
                      <li
                        className = {this.state.locationType === "tools"
                        ? styles.icon + " "+styles.fuzhu_select
                        : styles.icon + " "+styles.fuzhu
                        }
                        title="辅助"
                        onClick={ () =>{
                          this.setState({
                            locationType:"tools"
                          })
                        }}
                        ></li>
                      <li
                      className={
                        this.state.locationType === "detail"
                          ? styles.icon + " " + styles.detail_select
                          : styles.icon + " " + styles.detail
                      }
                      title="详情"
                      onClick={() => {
                        this.setState({ locationType: "detail" });
                      }}
                      ></li>
                  </ul>
              </div>
              <div className={styles.content} >
                  <div className={styles.leftContent}>
                     <div style={{display:this.state.locationType === "myworks"
                        ? "block"
                        : "none"
                      }}>
                        <Myworks />
                      </div>
                      <div style={{display:this.state.locationType === "search"
                         ? "block"
                         : "none"
                       }}>
                         <Search />
                       </div>
                       <div style={{display:this.state.locationType === "collect"
                          ? "block"
                          : "none"
                        }}>
                          <Collect />
                        </div>
                        <div style={{display:this.state.locationType === "tools"
                           ? "block"
                           : "none"
                         }}>
                           <Tools/>
                         </div>
                         <div style={{display:this.state.locationType === "detail"
                            ? "block"
                            : "none"
                          }}>
                            <Detail/>
                          </div>
                  </div>

                  <div className={styles.rightContent}>
                    拼图工具编辑区域
                  </div>
              </div>
          </div>
      </div>
    )
  }
}


export default Designer
