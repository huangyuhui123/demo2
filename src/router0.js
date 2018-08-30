import React from "react";
import { Router, Route } from "dva/router";

function RouterConfig({ history }) {
  const pagedata = {
    index: [
      "index",
      "login",
      "sign",
      "logout",
      "change_password",
      "find_password",
      "reset_password"
    ],
    me: ["editProfile", "fans", "myCollect", "myWork", "notice", "imageDetail"],
    case: ["list", "item", "design"],
    goods: ["list", "item", "active"],
    agreement: ["index"],
    serviceAgreement: ["index"],
    instruction: ["index"],
    project: ["item"],
    inspirationMaterial: ["list", "item"],
    brandshops: ["list", "item"],
    search: ["list"]
  };
  return (
    <Router history={history}>
      <Router path="/" component={require("./pages/index/index")} />
      <Router path="/search">
        {pagedata["search"].map(func => (
          <Router
            key={func}
            path={func + "/:id"}
            component={require("./pages/search/" + func)}
          />
        ))}
      </Router>
      <Router path="/brandshops">
        {pagedata["brandshops"].map(func => (
          <Router
            key={func}
            path={func + "/:id"}
            component={require("./pages/brandshops/" + func)}
          />
        ))}
      </Router>
      <Router path="/inspirationMaterial">
        {pagedata["inspirationMaterial"].map(func => (
          <Router
            key={func}
            path={func + "/:id"}
            component={require("./pages/inspirationMaterial/" + func)}
          />
        ))}
      </Router>
      <Router path="/index">
        {pagedata["index"].map(func => (
          <Router
            key={func}
            path={func}
            component={require("./pages/index/" + func)}
          />
        ))}
      </Router>
      <Router path="/me">
        {pagedata["me"].map(func => (
          <Router
            key={func}
            path={func}
            component={require("./pages/me/" + func)}
          />
        ))}
      </Router>
      <Router path="/case">
        {pagedata["case"].map(func => (
          <Router
            key={func}
            path={func + "/:id"}
            component={require("./pages/case/" + func)}
          />
        ))}
      </Router>
      <Router path="/goods">
        {pagedata["goods"].map(func => (
          <Router
            key={func}
            path={func + "/:id"}
            component={require("./pages/goods/" + func)}
          />
        ))}
      </Router>
      <Router path="/agreement">
        {pagedata["agreement"].map(func => (
          <Router
            key={func}
            path={func}
            component={require("./pages/agreement/" + func)}
          />
        ))}
      </Router>
      <Router path="/serviceAgreement">
        {pagedata["serviceAgreement"].map(func => (
          <Router
            key={func}
            path={func}
            component={require("./pages/serviceAgreement/" + func)}
          />
        ))}
      </Router>
      <Router path="/instruction">
        {pagedata["instruction"].map(func => (
          <Router
            key={func}
            path={func}
            component={require("./pages/instruction/" + func)}
          />
        ))}
      </Router>
      <Router path="/project">
        {pagedata["project"].map(func => (
          <Router
            key={func}
            path={func + "/:id"}
            component={require("./pages/project/" + func)}
          />
        ))}
      </Router>
    </Router>
  );
}

export default RouterConfig;
