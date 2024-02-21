import React, { Component } from "react";

class Counter extends Component {
  /*styles = {
    fontSize: 50,
    fontWeight: "bold",
  };*/

  render() {
    return (
      <div>
        {/* <img src={this.state.imageUrl} alt="" />*/}
        <span className={this.getBadgeClasses()}>{this.formartCount()}</span>
        {/* class is a reserved keyword in javascript*/}
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-scondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/*{this.state.tags.length === 0 && "Please create a new tag"}
        <ul>
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>*/}
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formartCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
