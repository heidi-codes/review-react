import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import ChatApp from "./01/ChatApp";
import CommentBox from "./02/CommentBox";
import { TabSelectorSample } from "./02/TabSelector";
import { StatefulTabSelectSample } from "./02/StatefulTabSelector";
import Clock from "./03/Clock";
import SnapshotSample from "./04/SnapshotSample";
import DomDiff from "./05/DomDiff";
import { AdvancedTabSelectorSample } from "./06/AdvancedTabSelector";
import LocaleSample from "./07/LocaleSample";
import PureRedux from "./11/PureRedux";
import Counter from "./12/Counter";
import OrgActions from "./14/OrgActions";
import RouterSample from "./16/RouterSample";
import RouterParams from "./17/RouterParams";
import NestedRoute from "./17/NestedRoute";
import FormSubmit from "./29/FormSubmit";
import FormSubmitAntd from "./29/FormSubmitAntd";
import DynamicForm from "./30/DynamicForm";
import ListSample from "./31/App";
import WizardSample from "./35/App";
import Layout1 from "./36/Layout1";
import Layout2 from "./36/Layout2";
import LayoutResize from "./36/LayoutResize";

import "antd/dist/antd.css";

import "./index.css";

const styles = {
  fontFamily: "sans-serif",
  paddingLeft: "250px"
};

const routeMap = {
  chat: ChatApp,
  "comment-box": CommentBox,
  "tab-selector": TabSelectorSample,
  "stateful-tab-selector": StatefulTabSelectSample,
  clock: Clock,
  "snapshot-sample": SnapshotSample,
  "dom-diff": DomDiff,
  "adv-tab-selector": AdvancedTabSelectorSample,
  "locale-sample": LocaleSample,
  "pure-redux": PureRedux,
  counter: Counter,
  "org-actions": OrgActions,
  "router-sample": RouterSample,
  "router-params": RouterParams,
  "nested-route": NestedRoute,
  "form-submit": FormSubmit,
  "form-submit-antd": FormSubmitAntd,
  "dynamic-form": DynamicForm,
  "list-page": ListSample,
  "wizard-sample": WizardSample,
  layout1: Layout1,
  layout2: Layout2,
  "layout-resize": LayoutResize
};

class App extends React.PureComponent {
  handleLinkClick = (key) => {
    // window.location.hash = `#${key}`;
    window.history.pushState(null, "", `/#/${key}`);
    this.forceUpdate();
  };
  render() {
    const currentPage = document.location.hash.replace(/#\/?/, "");

    let CurrentPage = routeMap[currentPage] || Hello;
    if (currentPage.match(/\/user\/\w+|\/list-page/)) {
      CurrentPage = ListSample;
    }
    if (currentPage.match(/\/wizard\/step\/\w+/)) {
      CurrentPage = WizardSample;
    }
    return (
      <div style={styles}>
        <ul className="menu-list">
          {Object.keys(routeMap).map((key) => (
            <li
              key={key}
              className={key === currentPage ? "is-active" : ""}
              style={{ listStyle: "none" }}
            >
              <span className="link" onClick={() => this.handleLinkClick(key)}>
                {key}
              </span>
            </li>
          ))}
        </ul>
        <div style={{ padding: "30px 0" }}>
          <CurrentPage />
        </div>
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
