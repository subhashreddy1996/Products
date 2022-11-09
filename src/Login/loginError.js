import React from "react";

class loginError extends React.Component {
  render() {
    return (
      <div className={"error notification " + this.props.classType}>
        {this.props.message}
      </div>
    );
  }
}

export default loginError;
