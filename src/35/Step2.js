import React, { Component } from "react";
import { Button, DatePicker, Form, Input, InputNumber, Select } from "antd";
import FormBuilder from "../29/FormBuilder";

const Option = Select.Option;

const formMeta = {
  colon: true,
  columns: 1,
  elements: [
    { key: "userName", label: "Username", widget: Input },
    { key: "password", label: "Password", widget: Input, type: "password" },
    { key: "birthday", label: "Birthday", widget: DatePicker }
  ]
};

class Step2 extends Component {
  componentDidMount() {
    this.props.form.setFieldsValue(this.props.allValues);
  }
  render() {
    return (
      <div>
        <FormBuilder meta={formMeta} form={this.props.form} />
      </div>
    );
  }
}

export default Step2;
