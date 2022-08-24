import React from "react";
import ReactDOM from "react-dom";
import { Button, Modal } from "antd";
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
      <Modal
        visible={this.state.visible}
        onCancel={() => this.setState({ visible: false })}
      >
        <div>This is a dialog box</div>
      </Modal>
    );
  }
  render() {
    return (
      <div>
        {this.renderButton()}
        {this.renderDialog()}
      </div>
    );
  }
}
