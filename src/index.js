import React from "react";
import { render } from "react-dom";
import Hello from "./Hello";

const styles = {
  fontFamily: "sans-serif",
  paddingLeft: "250px"
};

class App extends React.PureComponent {
  render() {
    return (
      <div style={styles}>
        <Hello />
      </div>
    );
  }
}
render(<App />, document.getElementById("root"));
