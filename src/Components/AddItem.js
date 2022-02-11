import React, { Component } from "react";
class AddItem extends Component {
  state = { text: "" };
  handleText = (event) => {
    this.setState({ text: event.target.value });
  };
  handleAdd = () => {
    this.props.addTask(this.state.text);
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleText} />
        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default AddItem;
