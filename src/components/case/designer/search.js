import React,{ Component} from "react";
import SearchStyle from "./search.less";
import Search_input from "./search/search_input";
import {Button,Radio,Icon,Row,Col} from "antd"

class Search extends Component{
    constructor(props){
      super(props);
      this.state={

      }
    }

    render(){
      return(
        <div className={SearchStyle.searchPanel}>
          <div className={SearchStyle.search}>
              <Search_input />
          </div>
        </div>
      )
    }
}

export default Search
