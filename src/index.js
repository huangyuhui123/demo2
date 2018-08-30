import dva from "dva";
//import createLoading from "dva-loading";
import { browserHistory } from "dva/router";

import "./index.html";


try {
  (async function() {
    let opt = { history: browserHistory };
    const app = dva(opt);
    //app.use(createLoading());
    app.router(require("./router"));
    app.start("#root");
    // if (!(user && user.cnum)) {
    //   if (window.location.pathname != "/index/find_password") {
    //     browserHistory.push("/index/login");
    //   }
    // }
    //测试用 上线删除1
    //test
  })();
} catch (e) {
  console.error(e.message);
}
