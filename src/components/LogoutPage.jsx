import React, { Component } from "react";
import userManager from "../userManager";

class LogoutPage extends Component {
  componentDidMount(event) {
    userManager.signoutRedirect();
  }

  render() {
    return (
      <div>
        <h3>Log out</h3>
      </div>
    );
  }
}

export default LogoutPage;