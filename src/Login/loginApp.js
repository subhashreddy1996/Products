import React from "react";
import { connect } from "react-redux";
import { setUser } from "./actions";

class LoginApp extends React.Component {
  UNSAFE_componentWillMount() {
    if (this.props.user) {
      this.props.history.push("/");
    } else {
      this.props.history.push("/login");
    }
  }

  handleSignOut = (e) => {
    e.preventDefault();

    this.props.setUser(false);
    this.props.history.push("/login");
  };

  render() {
    return (
      <div className="section">
        <h1 className="title is-1">LoginApp</h1>
        <button onClick={this.handleSignOut} className="button is-danger">
          Sign Out!
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user
});

export default connect(mapStateToProps, { setUser })(LoginApp);
