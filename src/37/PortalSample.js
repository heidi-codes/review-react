import React from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";
import "./PortalSample.css";

export default class PortalSample extends React.PureComponent {
  state = { visible: false };
  renderButton() {
    return (
      <Button type="primary" onClick={() => this.setState({ visible: true })}>
        Open the Dialog Box
      </Button>
    );
  }
  renderDialog() {
    return (
      <div className="portal-sample">
        <div>This is a dialog box</div>
        <br />
        <Button
          type="primary"
          onClick={() => this.setState({ visible: false })}
        >
          Close the dialog box
        </Button>
      </div>
    );
  }
  render() {
    if (!this.state.visible) return this.renderButton();
    return ReactDOM.createPortal(
      this.renderDialog(),
      document.getElementById("dialog-container")
    );
  }
}
