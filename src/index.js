import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";
import ChatApp from "./01/ChatApp";

import "antd/dist/antd.css";

import "./index.css";

const styles = {
  fontFamily: "sans-serif",
  paddingLeft: "250px"
};

const routeMap = {
  chat: ChatApp
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
