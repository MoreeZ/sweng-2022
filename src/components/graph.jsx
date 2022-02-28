/*
@author: Eligijus Skersonas
*/

import React, { Component } from "react";

class Graph extends Component {
  centreContent = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  render() {
    return (
      <React.Fragment className="bg-primary">
        {this.renderGraph()}
      </React.Fragment>
    );
  }

  renderGraph() {
    return (
      <React.Fragment>
        <h2>Graph to be implemented</h2>
        <p>Note: Graph will updated when predict button is pressed</p>
      </React.Fragment>
    );
  }
}

export default Graph;
