import React, { PureComponent } from "react";
import PropTypes from "prop-types";

export default class AdvancedTabSelector extends PureComponent {
  static propTypes = {
    value: PropTypes.object,
    options: PropTypes.array,
    onChange: PropTypes.func,
    children: PropTypes.func
  };

  static defaultProps = {
    value: null,
    options: [],
    onChange: () => {},
    children: () => {}
  };

  render() {
    const { options, value, onChange } = this.props;
    return (
      <div className="tab-selector">
        <ul>
          {options.map((opt) => (
            <li
              key={opt.value}
              className={`tab-item ${
                opt.value === this.props.value ? "selected" : ""
              }`}
              onClick={() => this.props.onChange(opt.value)}
            >
              {opt.name}
            </li>
          ))}
        </ul>
        <br />
        <br />
        {this.props.value && this.props.children(this.props.value)}
      </div>
    );
  }
}

const colors = [
  { name: "Red", value: "red" },
  { name: "Blue", value: "blue" },
  { name: "Orange", value: "orange" }
];

export class AdvancedTabSelectorSample extends PureComponent {
  state = {
    color: null
  };
  render() {
    return (
      <div>
        <h3>Select color: </h3>
        <AdvancedTabSelector
          options={colors}
          value={this.state.color}
          onChange={(c) => this.setState({ color: c })}
        >
          {(color) => (
            <span
              style={{
                display: "inline-block",
                backgroundColor: color,
                width: "40px",
                height: "40px"
              }}
            />
          )}
        </AdvancedTabSelector>
      </div>
    );
  }
}
