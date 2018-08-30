import React from "react";
import { connect } from "dva";
import { message } from "antd";
import { browserHistory } from "dva/router";
import _Content from "../../components/case/list";

function _Page({ history, location, params, route, routeParams, routes }) {
  console.log("page:", "sku");
  return <_Content routeParams={routeParams} />;
}

_Page.propTypes = {};

export default connect()(_Page);
